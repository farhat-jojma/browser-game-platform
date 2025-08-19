import {
    randFloat
} from './Utils.js';
import Vector2 from './Vector2.js';

export default class WinParticles extends ISpriteInstance {
    constructor() {
        super();
        this.particleCount = 400;
        this.growRate = 3;
        this.growRateRandomizer = 2;

        this.size = .95;
        this.sizeRandomizer = .6;

        this.gravity = 9000;
        this.angle = 80;

        this.lifeTime = 3;
        this.lifeTimeRandomizer = 1;

        this.angularVelocity = 60;
        this.angularVelocityRandomizer = 40;

        this.speed = -3000;
        this.speedRandomizer = 1500;

        this.colors = [
            [228 / 255, 255 / 255, 0 / 255],
            [255 / 255, 0 / 255, 128 / 255]
        ];

        this.particles = [];

        this.simulating = false;

        this.timeLeft = this.lifeTime + this.lifeTimeRandomizer;
    }

    simulate() {

        if (this.simulating)
            return;

        for (let i = 0; i < this.particleCount; i++) {
            const particle = this.runtime.objects.WinParticle.createInstance(0, this.x, this.y);

            const size = this.size + randFloat(-this.sizeRandomizer, this.sizeRandomizer);
            particle.width *= size;
            particle.height *= size;
            particle.size = size;


            const color = [
                randFloat(this.colors[0][0], this.colors[1][0]),
                randFloat(this.colors[0][1], this.colors[1][1]),
                randFloat(this.colors[0][2], this.colors[1][2]),
            ];

            particle.colorRgb = color;





            const angularVelocity = this.angularVelocity + randFloat(-this.angularVelocityRandomizer, this.angularVelocityRandomizer);
            particle.angularVelocity = angularVelocity;

            particle.angle = randFloat(0, 2 * Math.PI);

            const speed = this.speed + randFloat(-this.speedRandomizer, this.speedRandomizer);

            const direction = this.getSimulateDirection();
            particle.velX = direction.x * speed;
            particle.velY = direction.y * speed;

            this.particles.push(particle);


        }

        this.simulating = true;
    }

    getSimulateDirection() {
        const a = randFloat(-this.angle / 2, this.angle / 2);
        const s = Math.sin(a);
        const c = Math.cos(a);
        const refVec = new Vector2(0, 1);
        return new Vector2(refVec.x * c - refVec.y * s,
            refVec.y * c - refVec.x * s);
    }

    update() {
        const dt = this.runtime.dt;

        if (!this.simulating)
            return;

        this.timeLeft -= dt;


        this.particles.forEach(p => {
            p.y += dt * p.velY;
            p.velY += this.gravity * dt;

            p.x += dt * p.velX;

            p.angle += p.angularVelocity * dt * Math.PI / 180;
        });

        if (this.timeLeft <= 0) {
            this.particles.forEach(p => p.destroy());
            this.destroy();
        }

    }
}