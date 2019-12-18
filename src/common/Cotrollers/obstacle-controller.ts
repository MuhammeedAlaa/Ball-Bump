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
        vec3.add(this.Minpos,v,[2,0,2]);
        vec3.add(this.Maxpos,v,[-2,4,-2]);
    }

    public update(deltaTime: number) {
        if(this.colstatus != true){
            this.M = mat4.create();
            mat4.translate(this.M, this.M, [this.act, 2, 0] );
            mat4.translate(this.M, this.M, this.center );
            mat4.scale(this.M, this.M, [2, 2, 2]);
            this.act += this.Step;
            vec3.add(this.Minpos,this.Minpos,[0.1,0,0]);
            vec3.add(this.Maxpos,this.Maxpos,[0.1,0,0]);
        }
        if(this.colstatus){
            mat4.translate(this.M,this.M,[15,15,15]);
        }
    }
}