import { vec3, vec2, mat4, vec4 } from 'gl-matrix';

export default class ObstacleController {
    M: mat4;
    Step: number;
    act: number;
    colstatus: boolean;
    Minpos: vec3;
    Maxpos: vec3;
    center: vec3;
    constructor(v: vec3) {
        this.M = mat4.create();
        this.Step = 0.1;
        this.act = 0.1;
        this.colstatus = false;
        
        this.Minpos = vec3.create();
        this.Maxpos = vec3.create();
  
        this.center = v;
        vec3.add(this.Minpos,v,[1.142,0,1.142]);
        vec3.add(this.Maxpos,v,[-1.142,2.285,-1.142]);
    }

    public update(deltaTime: number) {
        if(this.colstatus === false)
        {
            this.M = mat4.create();
            mat4.translate(this.M, this.M, [this.act, 0, 0] );
            mat4.translate(this.M, this.M, this.center );
            mat4.scale(this.M, this.M, [0.3, 0.3, 0.3]);
            mat4.rotateY(this.M,this.M,Math.PI/2)
            this.act += this.Step;
            vec3.add(this.Minpos,this.Minpos,[this.Step,0,0]);
            vec3.add(this.Maxpos,this.Maxpos,[this.Step,0,0]);
        }
        else if(this.colstatus)
        {
            mat4.translate(this.M,this.M,[15,15,15]);
        }
    }
}