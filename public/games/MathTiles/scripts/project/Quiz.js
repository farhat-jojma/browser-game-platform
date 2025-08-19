import LerpAnim from './LerpAnim.js';
import LinearMoveAnim from './LinearAnim.js';
import {
    lerp
} from './Utils.js';
import {
    colors
} from './Settings.js';

export default class Quiz extends ISpriteInstance {

    constructor() {
        super();
        const text = this.runtime.objects.QuizText.createInstance(this.layer.index, this.x, this.y - 130);
        this.addDefaultChild(text);
        this.text = text;
        const overlay = this.runtime.objects.QuizOverlay.createInstance(this.layer.index, this.x, this.y);
        this.addDefaultChild(overlay);
        this.overlay = overlay;
        const resultIcon = this.runtime.objects.QuizResultIcon.createInstance(this.layer.index, this.x, this.y);
        this.addDefaultChild(resultIcon);
        this.resultIcon = resultIcon;

        this.overlay.isVisible = false;
        this.resultIcon.isVisible = false;

        this.answers = [];
        this.isAnswered = false;
        this.answeredRight = false;
        this.answered = null;
        this.updatables = [];

        const answerCount = 4;
        const answerY = this.y + 69;
        const offsetSide = 10;
        const answerWidth = 259;
        const space = (this.width - 2 * offsetSide - answerWidth * answerCount) / (answerCount - 1);
        for (let i = 0; i < answerCount; i++) {
            const x = this.x - this.width / 2 + offsetSide + (i + 0.5) * answerWidth + i * space;
            const answer = this.runtime.objects.Answer.createInstance(this.layer.index, x, answerY);
            answer.colorRgb = colors[i];
            answer.clicked = this.onAnswerClicked.bind(this);
            this.addDefaultChild(answer);
            this.answers.push(answer);
        }
    }


    onAnswerClicked(answer) {
        if (this.isAnswered) return;

        this.answeredRight = this.answers.indexOf(answer) === this.quiz.correctIndex;
        this.isAnswered = true;

        if (this.answered) this.answered(this);

        if (this.answeredRight) {
            this.showRightAnim();
        } else {
            this.showWrongAnim();
        }

    }

    async showRightAnim() {

        this.overlay.colorRgb = [36 / 255, 255 / 255, 160 / 255];
        this.overlay.isVisible = true;
        this.overlay.opacity = 0;
        this.lerpAnim(5, 0, 1.3, n => {
            this.overlay.opacity = n * 0.2;
        });

        const iconWidth = this.resultIcon.width;
        const iconHeight = this.resultIcon.height;

        const startIconScale = 0.1;
        const intermidateScale = 1.2;
        const intermidateNormalized = 0.7;

        this.resultIcon.isVisible = true;
        this.resultIcon.setAnimation("Right");

        this.resultIcon.width = 0;

        this.lerpAnim(5, 0, 1.3, n => {

            const scale = n <= intermidateNormalized ? lerp(startIconScale, intermidateScale, n / intermidateNormalized) : lerp(intermidateScale, 1, (n - intermidateNormalized) / (1 - intermidateNormalized));

            this.resultIcon.width = iconWidth * scale;
            this.resultIcon.height = iconHeight * scale;

        });

        const width = this.width;
        const height = this.height;
        const intermidateQuizScale = 1.05;
        const intermidateQuizNormalized = 0.5;

        this.lerpAnim(5, 0, 1.3, n => {
            const scale = n <= intermidateQuizNormalized ? lerp(1, intermidateQuizScale, n / intermidateQuizNormalized) : lerp(intermidateQuizScale, 1, (n - intermidateQuizNormalized) / (1 - intermidateQuizNormalized));
            this.width = width * scale;
            this.height = height * scale;


        });


    }

    async showWrongAnim() {
        this.overlay.colorRgb = [247 / 255, 54 / 255, 54 / 255];
        this.overlay.isVisible = true;

        this.overlay.opacity = 0;
        this.lerpAnim(5, 0, 1.3, n => {
            this.overlay.opacity = n * 0.2;
        });

        const iconWidth = this.resultIcon.width;
        const iconHeight = this.resultIcon.height;

        const startIconScale = 0.1;
        const intermidateScale = 1.2;
        const intermidateNormalized = 0.7;

        this.resultIcon.isVisible = true;
        this.resultIcon.setAnimation("Wrong");

        this.resultIcon.width = 0;

        this.lerpAnim(4, 0, 1.3, n => {

            const scale = n <= intermidateNormalized ? lerp(startIconScale, intermidateScale, n / intermidateNormalized) : lerp(intermidateScale, 1, (n - intermidateNormalized) / (1 - intermidateNormalized));

            this.resultIcon.width = iconWidth * scale;
            this.resultIcon.height = iconHeight * scale;

        });


        const peakAngle = -5;
        await this.linearAnim(10, n => {
            const angle = lerp(0, peakAngle, n);
            this.angle = (angle < 0 ? angle + 360 : angle) * Math.PI / 180;
        });

        await this.linearAnim(10, n => {
            const angle = lerp(peakAngle, -peakAngle, n);
            this.angle = (angle < 0 ? angle + 360 : angle) * Math.PI / 180;
        });

        await this.linearAnim(10, n => {
            const angle = lerp(-peakAngle, 0, n);
            this.angle = (angle < 0 ? angle + 360 : angle) * Math.PI / 180;
        });

        this.angle = 0;

    }

    setQuiz(q) {
        this.quiz = q;
        const {
            quiz,
            answers
        } = q;
        this.text.text = quiz;
        for (let i = 0; i < this.quiz.answers.length; i++) {
            this.answers[i].setValue(this.quiz.answers[i]);
        }
    }

    addDefaultChild(child) {
        this.addChild(child, {
            transformX: true,
            transformY: true,
            transformAngle: true,
            transformZElevation: true,
            transformWidth: true,
            transformHeight: true,
            destroyWithParent: true
        });
    }

    update() {
        this.updatables.forEach(u => u.update(this.runtime.dt));
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
}