import Camera from '../camera';
import Input from '../input';
import { vec3, vec2, mat4 } from 'gl-matrix';
import { Key } from 'ts-key-enum';

export default class PlayerController {
    VPmatrix: mat4;
    input: Input;

 
    constructor(VPmatreix: mat4,input: Input){
        
        this.input = input;
        this.VPmatrix = VPmatreix;
    }

    public update(deltaTime: number) {
        if(this.input.isButtonJustDown(0)){
            this.input.requestPointerLock();
        } else if(this.input.isButtonJustUp(0)){
            this.input.exitPointerLock();
        }
            
            if(this.input.isButtonDown(0)){
                
            let movement = vec3.create();        
            if(this.input.isKeyDown("a")) movement[2] += deltaTime/100;
            if(this.input.isKeyDown("d")) movement[2] -= deltaTime/100;
            if(this.VPmatrix[14] < 9 && this.VPmatrix[14] > -9){
            mat4.translate(this.VPmatrix,this.VPmatrix,[movement[0],movement[1],movement[2]]);
         }
         else{
             if(this.VPmatrix[14] >= 9)
             {
                if(this.input.isKeyDown("d")){ movement[2] -= deltaTime/100;
                mat4.translate(this.VPmatrix,this.VPmatrix,[movement[0],movement[1],movement[2]]);
                }
             }
             else if(this.VPmatrix[14] <= -9){
                if(this.input.isKeyDown("a")){ movement[2] += deltaTime/100;
                mat4.translate(this.VPmatrix,this.VPmatrix,[movement[0],movement[1],movement[2]]);
                }
             }
         }
        }
        mat4.rotateZ(this.VPmatrix, this.VPmatrix, deltaTime / 100);
         
    }
}