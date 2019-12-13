import { vec3, vec2, mat4, vec4 } from 'gl-matrix';

export default class ObstacleController {
    M: mat4;
    Step: number;
    act: number;
    colstatus: boolean;
    Minpos: vec3;
    Maxpos: vec3;
    constructor(M: mat4,  Step: number, Minpos: vec3, Maxpos: vec3) {
        this.M = M;
        this.Step = Step;
        this.act = Step;
        this.colstatus = false;
        this.Minpos = Minpos;
        this.Maxpos = Maxpos;
    }

    public update(deltaTime: number) {
        mat4.translate(this.M, this.M, [this.Step, 0, 0]);
        vec3.add(this.Minpos,this.Minpos,[this.Step, 0,0]);
        this.act += this.Step;
        if(this.colstatus){
            mat4.translate(this.M,this.M,[15,15,15]);
        }
    }
}