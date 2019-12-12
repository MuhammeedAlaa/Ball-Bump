import Camera from '../camera';
import Input from '../input';
import { vec3, vec2, mat4 } from 'gl-matrix';

export default class ObstacleController {
    M: mat4;
    Step: number;
    act: number;
    constructor(M: mat4,  Step: number) {
        this.M = M;
        this.Step = Step;
        this.act = Step;
    }

    public update(deltaTime: number) {
        let movement = vec3.create();
        mat4.translate(this.M, this.M, [this.Step, 0, 0]);
        this.act += this.Step;
    }
}