import { vec3, vec2, mat4 } from 'gl-matrix';
export default class GroundController {
    Step: number;
    M: mat4;
    act: number;
    hold: number;
    constructor(M: mat4, Step: number){
        this.M = M;
        this.Step = Step;
        this.act = Step;
        this.hold = 0; 
    }

    public update() {
        if(this.hold === 0)
        {
            this.act += this.Step
            if(this.act < 0.4){
                mat4.translate(this.M, this.M, [this.Step, 0, 0]);
            }
            else
            {
             this.act = this.Step;
             this.M = mat4.create();
             mat4.scale(this.M, this.M, [100, 1, 14]);
            } 
        }
    }
}