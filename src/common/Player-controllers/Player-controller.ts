import Camera from '../camera';
import Input from '../input';
import { vec3, vec2, mat4 } from 'gl-matrix';
import { Key } from 'ts-key-enum';

// This is a controller to simulate a flying Camera
// The controls are:
// Hold Left-Mouse-Button and Drag to rotate camera
// Hold Left-Mouse-Button + WASD to move and QE to go up or down
// Mouse Wheel to zoom in or out 
// Press T to toggle between Perspective and Orthographic

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
                
            const movement = vec3.create();
            if(this.input.isKeyDown("d")) movement[2] += deltaTime;
            if(this.input.isKeyDown("a")) movement[2] -= deltaTime;
            mat4.translate(this.VPmatrix,this.VPmatrix,vec3.normalize(movement,movement)); 
        }
        mat4.rotateZ(this.VPmatrix, this.VPmatrix, deltaTime / 100);
         
    }
}