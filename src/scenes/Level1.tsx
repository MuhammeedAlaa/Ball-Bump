import { Scene } from '../common/game';
import ShaderProgram from '../common/shader-program';
import Mesh from '../common/mesh';
import * as MeshUtils from '../common/mesh-utils';
import Camera from '../common/camera';
import PlayerController from '../common/Cotrollers/Player-controller';
import GroundController from '../common/Cotrollers/ground-controller';
import { vec3, mat4, quat, vec4 } from 'gl-matrix';
import ObstacleController from '../common/Cotrollers/obstacle-controller';

// In this scene we will draw a scene to multiple targets then use the target to do post processing
export default class Level1 extends Scene {
    programs: { [name: string]: ShaderProgram } = {};
    camera: Camera;
    //cameracontroller: FlyCameraController;
    playercontroller: PlayerController;
    groundcontroller: GroundController;
    cubeController: {[co: number]: ObstacleController} = {};
    meshes: { [name: string]: Mesh } = {};
    textures: { [name: string]: WebGLTexture } = {};
    samplers: { [name: string]: WebGLSampler } = {};
    frameBuffer: WebGLFramebuffer; // This will hold the frame buffer object
    cubeNumber: number;

    readonly shaders = [
        "light"
    ];



    public load(): void {
        this.game.loader.load({
            ["mrt.vert"]: { url: 'shaders/mrt.vert', type: 'text' },
            ["mrt.frag"]: { url: 'shaders/mrt.frag', type: 'text' },
            ["color.vert"]:{url:'shaders/color.vert', type:'text'},
            ["color.frag"]:{url:'shaders/color.frag', type:'text'},
            ["fullscreen.vert"]: { url: 'shaders/post-process/fullscreen.vert', type: 'text' },
            ...Object.fromEntries(this.shaders.map((s) => [`${s}.frag`, { url: `shaders/post-process/${s}.frag`, type: 'text' }])),
            //["Ball-texture"]: { url: 'images/ball.jpg', type: 'image' },
            ["Ball-texture"]: { url: 'images/earth.jpg', type: 'image' },
            //["Ground-texture"]: { url: 'images/ground.jpg', type: 'image' },
            ["Ground-texture"]: { url: 'images/Blue3.png', type: 'image'},
            ["cube-model"]:{url: 'models/Blue Cube/chr_phantom_puzzle.obj',type: 'text'},
            ["cube-texture"]:{url:'models/Blue Cube/mlt_chr_pha_puz_dif_SD01.png',type:'image'},
            ["cube-texture2"]:{url:'models/Blue Cube/mlt_chr_pha_puz_dif_SD02.png',type:'image'}
        });
    }

    public start(): void {
        // This shader program will draw 3D objects
        this.programs["3d"] = new ShaderProgram(this.gl);
        this.programs["3d"].attach(this.game.loader.resources["mrt.vert"], this.gl.VERTEX_SHADER);
        this.programs["3d"].attach(this.game.loader.resources["mrt.frag"], this.gl.FRAGMENT_SHADER);
        this.programs["3d"].link();

        // These shader programs will render post processing effects.
        for (let shader of this.shaders) {
            this.programs[shader] = new ShaderProgram(this.gl);
            this.programs[shader].attach(this.game.loader.resources["fullscreen.vert"], this.gl.VERTEX_SHADER);
            this.programs[shader].attach(this.game.loader.resources[`${shader}.frag`], this.gl.FRAGMENT_SHADER);
            this.programs[shader].link();
        }

        this.meshes['Ball'] = MeshUtils.Sphere(this.gl);
        this.meshes['Ground'] = MeshUtils.Plane(this.gl, { min: [0, 0], max: [1, 1] });
        //this.meshes['Cube'] = MeshUtils.ColoredCube(this.gl);
        this.meshes['Cube'] = MeshUtils.LoadOBJMesh(this.gl, this.game.loader.resources["cube-model"]);
        
        this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL, true);

        this.textures['Ball'] = this.gl.createTexture();
        this.gl.bindTexture(this.gl.TEXTURE_2D, this.textures['Ball']);
        this.gl.pixelStorei(this.gl.UNPACK_ALIGNMENT, 4);
        this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this.gl.RGBA, this.gl.RGBA, this.gl.UNSIGNED_BYTE, this.game.loader.resources['Ball-texture']);
        this.gl.generateMipmap(this.gl.TEXTURE_2D);

        this.textures['Ground'] = this.gl.createTexture();
        this.gl.bindTexture(this.gl.TEXTURE_2D, this.textures['Ground']);
        this.gl.pixelStorei(this.gl.UNPACK_ALIGNMENT, 4);
        this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this.gl.RGBA, this.gl.RGBA, this.gl.UNSIGNED_BYTE, this.game.loader.resources['Ground-texture']);
        this.gl.generateMipmap(this.gl.TEXTURE_2D);

        //Loading the Cube textures
        this.textures['Cubet'] = this.gl.createTexture();
        this.gl.bindTexture(this.gl.TEXTURE_2D, this.textures['Cubet']);
        this.gl.pixelStorei(this.gl.UNPACK_ALIGNMENT, 4);
        this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this.gl.RGBA, this.gl.RGBA, this.gl.UNSIGNED_BYTE, this.game.loader.resources['cube-texture']);
        this.gl.generateMipmap(this.gl.TEXTURE_2D);

        this.textures['Cubet2'] = this.gl.createTexture();
        this.gl.bindTexture(this.gl.TEXTURE_2D, this.textures['Cubet2']);
        this.gl.pixelStorei(this.gl.UNPACK_ALIGNMENT, 4);
        this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this.gl.RGBA, this.gl.RGBA, this.gl.UNSIGNED_BYTE, this.game.loader.resources['cube-texture2']);
        this.gl.generateMipmap(this.gl.TEXTURE_2D);

        // We will use the multi render target setup described in the previous scene
        this.textures['color-target'] = this.gl.createTexture();
        this.gl.bindTexture(this.gl.TEXTURE_2D, this.textures['color-target']);
        this.gl.texStorage2D(this.gl.TEXTURE_2D, 1, this.gl.RGBA8, this.gl.drawingBufferWidth, this.gl.drawingBufferHeight);

        this.gl.getExtension('EXT_color_buffer_float');
        this.textures['normal-target'] = this.gl.createTexture();
        this.gl.bindTexture(this.gl.TEXTURE_2D, this.textures['normal-target']);
        this.gl.texStorage2D(this.gl.TEXTURE_2D, 1, this.gl.RGBA32F, this.gl.drawingBufferWidth, this.gl.drawingBufferHeight);

        this.textures['depth-target'] = this.gl.createTexture();
        this.gl.bindTexture(this.gl.TEXTURE_2D, this.textures['depth-target']);
        this.gl.texStorage2D(this.gl.TEXTURE_2D, 1, this.gl.DEPTH_COMPONENT32F, this.gl.drawingBufferWidth, this.gl.drawingBufferHeight);

        this.frameBuffer = this.gl.createFramebuffer();
        this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this.frameBuffer);
        this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER, this.gl.COLOR_ATTACHMENT0, this.gl.TEXTURE_2D, this.textures['color-target'], 0);
        this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER, this.gl.COLOR_ATTACHMENT1, this.gl.TEXTURE_2D, this.textures['normal-target'], 0);
        this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER, this.gl.DEPTH_ATTACHMENT, this.gl.TEXTURE_2D, this.textures['depth-target'], 0);

        let status = this.gl.checkFramebufferStatus(this.gl.FRAMEBUFFER);
        if (status != this.gl.FRAMEBUFFER_COMPLETE) {
            if (status == this.gl.FRAMEBUFFER_INCOMPLETE_ATTACHMENT)
                console.error("The framebuffer has a type mismatch");
            else if (status == this.gl.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT)
                console.error("The framebuffer is missing an attachment");
            else if (status == this.gl.FRAMEBUFFER_INCOMPLETE_DIMENSIONS)
                console.error("The framebuffer has dimension mismatch");
            else if (status == this.gl.FRAMEBUFFER_UNSUPPORTED)
                console.error("The framebuffer has an attachment with unsupported format");
            else if (status == this.gl.FRAMEBUFFER_INCOMPLETE_MULTISAMPLE)
                console.error("The framebuffer has multisample mismatch");
            else
                console.error("The framebuffer has an unknown error");
        }
     
        

        this.samplers['regular'] = this.gl.createSampler();
        this.gl.samplerParameteri(this.samplers['regular'], this.gl.TEXTURE_WRAP_S, this.gl.REPEAT);
        this.gl.samplerParameteri(this.samplers['regular'], this.gl.TEXTURE_WRAP_T, this.gl.REPEAT);
        this.gl.samplerParameteri(this.samplers['regular'], this.gl.TEXTURE_MAG_FILTER, this.gl.LINEAR);
        this.gl.samplerParameteri(this.samplers['regular'], this.gl.TEXTURE_MIN_FILTER, this.gl.LINEAR_MIPMAP_LINEAR);

        this.samplers['postprocess'] = this.gl.createSampler();
        this.gl.samplerParameteri(this.samplers['postprocess'], this.gl.TEXTURE_WRAP_S, this.gl.CLAMP_TO_EDGE);
        this.gl.samplerParameteri(this.samplers['postprocess'], this.gl.TEXTURE_WRAP_T, this.gl.CLAMP_TO_EDGE);
        this.gl.samplerParameteri(this.samplers['postprocess'], this.gl.TEXTURE_MAG_FILTER, this.gl.NEAREST);
        this.gl.samplerParameteri(this.samplers['postprocess'], this.gl.TEXTURE_MIN_FILTER, this.gl.NEAREST);

        this.camera = new Camera();
        this.camera.type = 'perspective';
        this.camera.position = vec3.fromValues(4, 14, 0);
        this.camera.direction = vec3.fromValues(-5, -9, 0);
        this.camera.aspectRatio = this.gl.drawingBufferWidth / this.gl.drawingBufferHeight;


        
        
        let PlayerMat = mat4.create();
        mat4.translate(PlayerMat, PlayerMat, [0, 1, 0]);
        let tr = vec3.create();
        vec3.add(tr,tr,[0,1,0]);
        this.playercontroller = new PlayerController(PlayerMat,this.game.input,tr);


                
        let groundMat = mat4.create();
        mat4.scale(groundMat, groundMat, [100, 1, 15]);
        this.groundcontroller = new GroundController(groundMat,0.002);  
        


        this.createwave(50);
        
        this.gl.enable(this.gl.CULL_FACE);
        this.gl.cullFace(this.gl.BACK);
        this.gl.frontFace(this.gl.CCW);

        this.gl.enable(this.gl.DEPTH_TEST);
        this.gl.depthFunc(this.gl.LEQUAL);
        
    }

    private createwave(dis: number):void{
        this.cubeNumber = 49;
        let index = 1;
            
            for(let x = -12; x <= 12; x+=4)
            for(let z = -12; z <= 12; z+=4){
                let v = vec3.create();
                vec3.add(v,v,[x-dis,0,z]);
            this.cubeController[index] = new ObstacleController(v);
            //Select the applied texture
            let randomNumber = Math.floor(Math.random() * 6) + 1 //Get a random number from 1 to 6
            if((index + randomNumber) % 7 == 0 || (index + randomNumber + 1) % 7 == 0)
            {
                this.cubeController[index].texturetype = 'Cubet2'; 
                this.cubeController[index].color = 1;  
            }
            else
            {
                this.cubeController[index].texturetype = 'Cubet';
                this.cubeController[index].color = 0;
            }
            index++;
        }
    }

    private detcoll(cubeController:ObstacleController): boolean{
             let center = this.playercontroller.postion;
             let bmin = cubeController.Minpos;
             let bmax = cubeController.Maxpos;
             var x = Math.max(bmin[0], Math.min(center[0], bmax[0]));
             var y = Math.max(bmin[1], Math.min(center[1], bmax[1]));
             var z = Math.max(bmin[2], Math.min(center[2], bmax[2]));
             var distance = Math.sqrt((x - center[0]) * (x - center[0]) + (y - center[1]) * (y - center[1]) + (z - center[2]) * (z - center[2]));
            return distance < 2;

      
    }

    
    public draw(deltaTime: number): void {
        this.playercontroller.update(deltaTime);
        this.groundcontroller.update(); 
        
        for(let x = 1; x <= this.cubeNumber; x++)
        {
            if(this.cubeController[x].colstatus === false)
            {
                this.cubeController[x].colstatus= this.detcoll(this.cubeController[x]);
            }
            
            this.cubeController[x].update(deltaTime);
        }
    for(let x = 1; x <= this.cubeNumber; x++)
    if(this.cubeController[x].colstatus === true && this.cubeController[x].color === 1 )
    {
        this.playercontroller.die = 1;
        this.groundcontroller.hold = 1;
        for(let z = 1; z <= this.cubeNumber; z++)
        this.cubeController[z].hold = 1;
        break;
        
    }
    else
    {
        for(let y = 1; y <= 7; y++)
    if(this.cubeController[y].colstatus === true  && this.playercontroller.gre > 75)
    {
        console.error(`Failed to load ${this.playercontroller.gre}:`);
        this.playercontroller.gre = 0;
        console.error(`Failed to load ${this.playercontroller.gre}:`);
        this.createwave(50);}
    }
        this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this.frameBuffer);
        this.gl.viewport(0, 0, this.gl.drawingBufferWidth, this.gl.drawingBufferHeight);
        {
            this.gl.drawBuffers([this.gl.COLOR_ATTACHMENT0, this.gl.COLOR_ATTACHMENT1]);
            this.gl.clearBufferfv(this.gl.COLOR, 0, [0.67,0.84,0.9, 1]);
            this.gl.clearBufferfv(this.gl.COLOR, 1, [0, 0, 0, 1]);
            this.gl.clearBufferfi(this.gl.DEPTH_STENCIL, 0, 1, 0);

            this.gl.bindSampler(0, this.samplers['regular']);

            let program = this.programs['3d'];
            program.use();

            for(let x = 1; x <= this.cubeNumber; x++){
            let MatCube = this.cubeController[x].M;
            program.setUniformMatrix4fv("VP", false, this.camera.ViewProjectionMatrix);
            program.setUniformMatrix4fv("M", false, MatCube);
            program.setUniformMatrix4fv("M_it", true, mat4.invert(mat4.create(), MatCube));
            program.setUniform4f("tint", [1, 1, 1, 1]);
            this.gl.activeTexture(this.gl.TEXTURE3);
            this.gl.bindTexture(this.gl.TEXTURE_2D, this.textures[this.cubeController[x].texturetype]);
            program.setUniform1i('texture_sampler', 3);
            this.gl.bindSampler(3, this.samplers['regular']);

            this.meshes['Cube'].draw(this.gl.TRIANGLES);            
        }

            program = this.programs['3d'];
            program.use();

            program.setUniformMatrix4fv("VP", false, this.camera.ViewProjectionMatrix);

            let groundMat = this.groundcontroller.M    
            program.setUniformMatrix4fv("M", false, groundMat);
            program.setUniformMatrix4fv("M_it", true, mat4.invert(mat4.create(), groundMat));
            program.setUniform4f("tint", [0.96, 0.91, 0.64, 1]);

            this.gl.activeTexture(this.gl.TEXTURE0);
            this.gl.bindTexture(this.gl.TEXTURE_2D, this.textures['Ground']);
            program.setUniform1i('texture_sampler', 0);
            this.gl.bindSampler(0, this.samplers['regular']);

            this.meshes['Ground'].draw(this.gl.TRIANGLES);
            
            program.setUniformMatrix4fv("M", false, this.playercontroller.M);
            program.setUniformMatrix4fv("M_it", true, mat4.invert(mat4.create(), this.playercontroller.M));
            program.setUniform4f("tint", [1, 1, 1, 1]);

            this.gl.activeTexture(this.gl.TEXTURE0);
            this.gl.bindTexture(this.gl.TEXTURE_2D, this.textures['Ball']);
            program.setUniform1i('texture_sampler', 0);

            this.meshes['Ball'].draw(this.gl.TRIANGLES);

            
        }
        this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null);

        this.gl.viewport(0, 0, this.gl.drawingBufferWidth, this.gl.drawingBufferHeight);
        {
            this.gl.clearColor(0.08, 0.32, 0.44, 1);
            this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);

            
                    let program: ShaderProgram;
                    program = this.programs['light'];
                    program.use();
                    this.gl.activeTexture(this.gl.TEXTURE0);
                    this.gl.bindSampler(0, this.samplers['postprocess']);
                    this.gl.bindTexture(this.gl.TEXTURE_2D, this.textures['color-target']);
                    program.setUniform1i('color_sampler', 0);
                    
                    
                    this.gl.activeTexture(this.gl.TEXTURE1);
                    this.gl.bindSampler(1, this.samplers['postprocess']);
                    this.gl.bindTexture(this.gl.TEXTURE_2D, this.textures['normal-target']);
                    program.setUniform1i('normal_sampler', 1);
                    
                    this.gl.bindSampler(2, this.samplers['postprocess']);
                    this.gl.bindTexture(this.gl.TEXTURE_2D, this.textures['depth-target']);
                    program.setUniform1i('depth_sampler', 2);
                    program.setUniform1f('fog_distance', 10);
                    program.setUniform4f('fog_color', [0.76,0.83,0.56, 1]);
                    program.setUniformMatrix4fv('P_i', false, mat4.invert(mat4.create(), this.camera.ProjectionMatrix));
                    let light_direction = vec3.fromValues(1,0,0);
                    vec3.normalize(light_direction, light_direction);
                    program.setUniform3f('light_direction', light_direction);
                    program.setUniform4f('light_color', [0.9, 0.8, 0.7, 1]);
                    program.setUniform4f('ambient_color', [0.1, 0.1, 0.1, 1]);
                    this.gl.drawArrays(this.gl.TRIANGLES, 0, 3);

                }


            }

    public end(): void {
        for (let key in this.programs)
            this.programs[key].dispose();
        this.programs = {};
        for (let key in this.meshes)
            this.meshes[key].dispose();
        this.meshes = {};
        this.gl.deleteFramebuffer(this.frameBuffer);
        for (let key in this.textures)
            this.gl.deleteTexture(this.textures[key]);
        this.textures = {};
        this.clearControls();
    }




    private clearControls() {
        const controls = document.querySelector('#controls');
        controls.innerHTML = "";
    }


}