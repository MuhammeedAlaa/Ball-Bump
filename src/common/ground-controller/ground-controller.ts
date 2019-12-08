import Camera from '../camera';
import Input from '../input';
import { vec3, vec2, mat4 } from 'gl-matrix';
import { Key } from 'ts-key-enum';


export default class GroundController {
    Step: number;
    VPmatrix: mat4;
    act: number;
    constructor(VPmatrix: mat4, Step: number){
        this.VPmatrix = VPmatrix;
        this.Step = Step;
        this.act = Step;
    }

    public update() {
            this.act += this.Step
            if(this.act < 0.5){
                mat4.translate(this.VPmatrix, this.VPmatrix, [this.Step, 0, 0]);
         }
         else{
             this.act = this.Step;
             this.VPmatrix = mat4.create();
             mat4.scale(this.VPmatrix, this.VPmatrix, [500, 1, 10]);
         } 
        
    }
}