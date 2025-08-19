import {
    clamp
} from './Utils.js';

//Linear Animation
export default class LinearMoveAnim {

    constructor(speed, updateCallback, finishCallback) {
        this.normalized = 0;
        this.speed = speed;
        this.finished = false;
        this.updateCallback = updateCallback;
        this.finishCallback = finishCallback;
    }

    //have to call every frame
    update(dt) {

        if (this.finished)
            return;
        console.log(dt);

        this.normalized = clamp(this.normalized + dt * this.speed, 0, 1);

        if (this.updateCallback) {
            this.updateCallback(this.normalized);
        }

        if (this.normalized >= 1) {
            this.finished = true;
            if (this.finishCallback)
                this.finishCallback()
        }

    }

}