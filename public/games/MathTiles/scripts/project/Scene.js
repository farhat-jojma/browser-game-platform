import LerpAnim from "./LerpAnim.js";
import LinearMoveAnim from './LinearAnim.js';
import {
    rand,
    clamp,
    lerp
} from './Utils.js';
import {
    quizzes,
    setCompletedLevel
} from './Main.js';
import {
    speedAndLevels
} from './Settings.js';

export default class Scene {

    constructor(runtime, level) {
        this.runtime = runtime;
        this.updatables = [];
        this.quizzes = [];
        this.levelCompleteText = null;
        this.camera = runtime.objects.Camera.getFirstInstance();
        this.runtime.globalVars.Level = level;

        this.speed = this.calculateSpeedForLevel(level);
        this.generateQuizzes();
        this.setUpLevelCompleteText();
        this.targetQuiz = this.quizzes[0];
    }

    generateQuizzes() {
        const tileDistance = this.runtime.globalVars.VTileDistance;
        const startY = -this.runtime.layout.height * 0.15;
        const count = this.getQuizCount(this.runtime.globalVars.Level);

        for (let i = 0; i < count; i++) {
            const y = startY - tileDistance * i;
            const quiz = this.runtime.objects.Quiz.createInstance(0, this.runtime.layout.width / 2, y);
            quiz.answered = this.onQuizAnswered.bind(this);
            quiz.setQuiz(this.getQuiz());
            this.quizzes.push(quiz);
        }
    }

    setUpLevelCompleteText() {
        const lastQuiz = this.quizzes[this.quizzes.length - 1]
        const y = lastQuiz.y - this.runtime.layout.height / 2 - lastQuiz.height / 2 - 600;
        this.levelCompleteText = this.runtime.objects.LevelCompleteText.createInstance(0, this.runtime.layout.width / 2, y);
    }

    onQuizAnswered(quiz) {
        if (!quiz.answeredRight) {
            this.onAnsweredWrong();
            return;
        }

        if (this.targetQuiz === quiz) {
            const index = this.quizzes.indexOf(this.targetQuiz);
            this.runtime.globalVars.LevelProgress = (index + 1) / this.quizzes.length;
            this.getScore();
            this.playSoundEffect("Correct");
            if (index === this.quizzes.length - 1) {
                this.finishLevel();
            } else {
                this.targetQuiz = this.quizzes[index + 1];
            }
        }
    }

    getScore() {
        this.runtime.globalVars.Score += this.runtime.globalVars.Level;
    }

    async finishLevel() {
        this.runtime.globalVars.GameState = "Completing";

        const startCameraY = this.camera.y;
        const targetCameraY =
            this.levelCompleteText.y;
        let hasCreatedWinParticles = false;

        await this.linearAnim(2.3, n => {
            this.camera.y = lerp(startCameraY, targetCameraY, n);

            if (n > 0.7 && !hasCreatedWinParticles) {
                this.runtime.objects.WinParticles.createInstance(0, this.runtime.layout.width / 2, targetCameraY).simulate();
                hasCreatedWinParticles = true;
            }
        });
        this.playSoundEffect("Complete");
        setCompletedLevel(this.runtime, this.runtime.globalVars.Level);
        this.runtime.globalVars.GameState = "Completed";

        this.sendEvent("Completed");

    }

    failLevel() {
        this.runtime.globalVars.GameState = 'Failed';
        this.sendEvent("Failed");
    }

    update(runtime) {
        this.updatables.forEach(u => u.update(runtime.dt));
        for (let q of this.runtime.objects.Quiz.instances()) {
            q.update();
        }

        for (let o of this.runtime.objects.WinParticles.instances()) {
            o.update();
        }

        if (this.runtime.globalVars.GameState === 'Playing') {
            this.camera.y -= this.speed * runtime.dt;
            if (this.targetQuiz) {
                if (this.targetQuiz.y > this.camera.y + this.runtime.layout.height / 2 + this.quizzes[0].height / 2) {
                    this.onMissQuiz();
                }
            }
        }




    }

    onAnsweredWrong() {
        this.playSoundEffect("Wrong");
        this.failLevel();
    }

    async onMissQuiz() {
        this.runtime.globalVars.GameState = 'Failing';
        const startCameraY = this.camera.y;
        const targetCameraY =
            this.targetQuiz.y + this.targetQuiz.height / 2 - this.runtime.layout.height / 2 + 20;

        await this.linearAnim(3, n => {
            this.camera.y = lerp(startCameraY, targetCameraY, n);
        });

        this.targetQuiz.showWrongAnim();

        this.failLevel();
        this.playSoundEffect("Wrong");

    }


    //send the event to event sheet
    sendEvent(name) {
        const event = this.runtime.objects.SimpleEvent.createInstance(0, 0, 0);
        event.instVars.Name = name;
        event.destroy();
    }

    playSoundEffect(name) {
        if (!this.runtime.globalVars.Sound)
            return;
        const ist = this.runtime.objects.SoundEffect.createInstance(0, 0, 0);
        ist.instVars.Name = name;
        ist.destroy();
    }

    addUpdatable(updatable) {
        this.updatables.push(updatable);
    }

    removeUpdatable(updatable) {
        const index = this.updatables.indexOf(updatable);
        this.updatables.splice(index, 1);
    }

    linearAnim(speed, updateCallback, finished) {
        return new Promise((resolve, _) => {

            let anim = null;
            anim = new LinearMoveAnim(speed, updateCallback, () => {
                this.removeUpdatable(anim);
                if (finished) finished();
                resolve();

            });

            this.addUpdatable(anim);
        });
    }

    delay(seconds) {
        return new Promise((resolve, _) => {
            setTimeout(resolve, seconds * 1000);
        });
    }


    lerpAnim(speed, start, end, updateCallback, finished) {

        return new Promise((resolve, _) => {

            let anim = null;
            anim = new LerpAnim(speed, start, end, updateCallback, () => {
                this.removeUpdatable(anim);
                if (finished) finished();

                resolve();
            });

            this.addUpdatable(anim);
        });
    }

    getQuizCount(level) {
        let count = 0;
        if (level <= 10) {
            count = Math.round(7 + (level * 1.5));
        } else if (level <= 25) {
            count = Math.round(17 + (level - 10) * 0.5);
        } else {
            count = Math.round(25 + (level - 25) * .2);
        }

        return clamp(count, 2, 40);
    }

    calculateSpeedForLevel(level) {
        let index = speedAndLevels.findIndex(g => g.level >= level);

        if (index === -1) return speedAndLevels[speedAndLevels.length].speed;

        const firstItem = speedAndLevels[index - 1];
        const nextItem = speedAndLevels[index];


        return firstItem.speed + (nextItem.speed - firstItem.speed) * (level - firstItem.level) / (nextItem.level - firstItem.level);

    }

    getQuiz() {
        const selectedQuizzes = quizzes.quizzes.filter(q => (q.hardnessRange.x <= this.runtime.globalVars.Level || q.hardnessRange.x == -1));

        const quiz = selectedQuizzes[rand(0, selectedQuizzes.length)];
        // 		quiz.randomize();
        return quiz;
    }

}