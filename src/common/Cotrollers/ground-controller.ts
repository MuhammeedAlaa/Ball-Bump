import { vec3, vec2, mat4 } from 'gl-matrix';
export default class GroundController {
    Step: number;
    M: mat4;
    act: number;
    constructor(M: mat4, Step: number){
        this.M = M;
        this.Step = Step;
        this.act = Step;
    }

    public update() {
            this.act += this.Step
            if(this.act < 0.7){
                mat4.translate(this.M, this.M, [this.Step, 0, 0]);
         }
         else{
             this.act = this.Step;
             this.M = mat4.create();
             mat4.scale(this.M, this.M, [8000, 1, 15]);
         } 
        
    }
}