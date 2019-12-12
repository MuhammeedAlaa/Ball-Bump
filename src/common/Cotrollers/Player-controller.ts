import Camera from '../camera';
import Input from '../input';
import { vec3, vec2, mat4 } from 'gl-matrix';

export default class PlayerController {
    M: mat4;
    input: Input;


    constructor(VPmatreix: mat4, input: Input) {

        this.input = input;
        this.M = VPmatreix;
    }

    public update(deltaTime: number) {
        let movement = vec3.create();
        if (this.input.isKeyDown("a")) movement[2] += deltaTime / 70;
        if (this.input.isKeyDown("d")) movement[2] -= deltaTime / 70;
        if (this.M[14] < 14 && this.M[14] > -14) {
            mat4.translate(this.M, this.M, [movement[0], movement[1], movement[2]]);
        }
        else {
            if (this.M[14] >= 14) {
                if (this.input.isKeyDown("d")) {
                movement[2] -= deltaTime / 100;
                    mat4.translate(this.M, this.M, [movement[0], movement[1], movement[2]]);
                }
            }
            else if (this.M[14] <= -14) {
                if (this.input.isKeyDown("a")) {
                movement[2] += deltaTime / 100;
                    mat4.translate(this.M, this.M, [movement[0], movement[1], movement[2]]);
                }
            }
        }
        mat4.rotateZ(this.M, this.M, deltaTime / 100);
    }
}