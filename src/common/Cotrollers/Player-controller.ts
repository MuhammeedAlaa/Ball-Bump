import Camera from '../camera';
import Input from '../input';
import { vec3, vec2, mat4 } from 'gl-matrix';

export default class PlayerController {
    M: mat4;
    input: Input;
    postion: vec3;
    die: number;
    gre:number;
    boundary:number;
    Step:number;

    constructor(VPmatreix: mat4, input: Input, postion: vec3, boundary:number, Step:number) {
        this.boundary = boundary;
        this.input = input;
        this.M = VPmatreix;
        this.postion = postion;
        this.die = 0;
        this.gre=0;
        this.Step = Step;
    }

    public update(deltaTime: number) {
        if(this.die === 0){
            this.gre +=this.Step;
            let movement = vec3.create();
            if (this.input.isKeyDown("a")) movement[2] += deltaTime / 70;
            if (this.input.isKeyDown("d")) movement[2] -= deltaTime / 70;
            //m[14] for the z position of the player
            if (this.M[14] < this.boundary && this.M[14] > -this.boundary) {
                mat4.translate(this.M, this.M, [movement[0], movement[1], movement[2]]);
                vec3.add(this.postion,this.postion,[movement[0],movement[1],movement[2]]);
            }
            else {
                if (this.M[14] >= 12) {
                    if (this.input.isKeyDown("d")) {
                    movement[2] -= deltaTime / 100;
                        mat4.translate(this.M, this.M, [movement[0], movement[1], movement[2]]);
                        vec3.add(this.postion,this.postion,[movement[0],movement[1],movement[2]]);
                    }
                }
                else if (this.M[14] <= -12) {
                    if (this.input.isKeyDown("a")) {
                    movement[2] += deltaTime / 100;
                        mat4.translate(this.M, this.M, [movement[0], movement[1], movement[2]]);
                        vec3.add(this.postion,this.postion,[movement[0],movement[1],movement[2]]);
                    }
                }
            }
            mat4.rotateZ(this.M, this.M, deltaTime / 100);
            
    } 
    }
}