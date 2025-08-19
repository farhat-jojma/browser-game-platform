import Vector2 from './Vector2.js';
import {
    range,
    rand
} from './Utils.js';

export default class MathQuizzes {

    constructor() {
        this.quizzes = [];

        this.getQuizzesWith(range(1, 9), new Vector2(1, 10), new Vector2(1, 6), "Addition").forEach(q => {
            q.hardnessRange = new Vector2(-1, -1);
            this.quizzes.push(q);
        });
        this.getQuizzesWith(range(1, 9), new Vector2(1, 15), new Vector2(7, 12), "Addition").forEach(q => {
            q.hardnessRange = new Vector2(8, -1);
            this.quizzes.push(q);
        });
        this.getQuizzesWith(range(1, 9), new Vector2(1, 20), new Vector2(1, 20), "Addition").forEach(q => {
            q.hardnessRange = new Vector2(15, -1);
            this.quizzes.push(q);
        });
        this.getQuizzesWith(range(1, 9), new Vector2(1, 15), new Vector2(1, 9), "Sub").forEach(q => {
            q.hardnessRange = new Vector2(15, -1);
            this.quizzes.push(q);
        });
        this.getQuizzesWith(range(1, 9), new Vector2(1, 15), new Vector2(1, 9), "Mul").forEach(q => {
            q.hardnessRange = new Vector2(6, -1);
            this.quizzes.push(q);
        });
        this.getQuizzesWith(range(1, 9), new Vector2(1, 30), new Vector2(10, 20), "Mul").forEach(q => {
            q.hardnessRange = new Vector2(25, -1);
            this.quizzes.push(q);
        });
        this.getQuizzesWith(range(1, 9), new Vector2(1, 50), new Vector2(20, 40), "Mul").forEach(q => {
            q.hardnessRange = new Vector2(35, -1);
            this.quizzes.push(q);
        });
        this.getQuizzesWith(range(1, 9), new Vector2(1, 60), new Vector2(40, 60), "Mul").forEach(q => {
            q.hardnessRange = new Vector2(45, -1);
            this.quizzes.push(q);
        });
        this.getQuizzesWith(range(1, 9), new Vector2(1, 120), new Vector2(60, 100), "Mul").forEach(q => {
            q.hardnessRange = new Vector2(65, -1);
            this.quizzes.push(q);
        });

    }




    getQuizzesWith(numbers, answerRange, minAndMaxValue, calType) {
        const quizzes = [];
        for (let i = numbers.length; i >= 0; i--) {

            for (let j = i; j >= 0; j--) {
                let answer = 0;
                switch (calType) {
                    case "Addition":
                        answer = numbers[i] + numbers[j];
                        break;
                    case "Sub":
                        answer = numbers[i] - numbers[j];
                        break;
                    case "Mul":
                        answer = numbers[i] * numbers[j];
                        break;
                }

                if (answer <= minAndMaxValue.y && answer >= minAndMaxValue.x) {
                    const answers = this.getAnswers(3, answer, answerRange)
                    answers.splice(0, 0, answer);

                    let quiz = "";

                    switch (calType) {
                        case "Addition":
                            quiz = numbers[i] + "+" + numbers[j];
                            break;

                        case "Sub":
                            quiz = numbers[i] + "-" + numbers[j];
                            break;
                        case "Mul":
                            quiz = numbers[i] + "*" + numbers[j];
                            break;
                    }

                    quizzes.push(new MathQuiz(quiz, answers, 0, new Vector2(-1, -1)));
                }
            }
        }

        return quizzes;

    }

    getAnswers(count, except, minAndMax) {
        const possibleAnswers = [];

        for (let i = minAndMax.x; i < minAndMax.y; i++) {
            if (i != except) {
                possibleAnswers.push(i);
            }
        }

        const selectedAnswers = [];

        for (let i = 0; i < count; i++) {
            const r = rand(0, possibleAnswers.length);
            selectedAnswers.push(possibleAnswers[r]);
            possibleAnswers.splice(r, 1);
        }
        return selectedAnswers;


    }

}


class MathQuiz {
    constructor(quiz, answers, correctIndex, hardnessRange) {
        this.quiz = quiz;
        this.answers = answers;
        this.correctIndex = correctIndex;
        this.hardnessRange = hardnessRange;
    }

    randomize() {

    }
}