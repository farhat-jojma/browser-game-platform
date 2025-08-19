"use strict";

import {
    quizzes
} from './Main.js';
import {
    colors
} from './Settings.js';

let lastQuiz = null;






export function getQuiz(runtime) {
    let minHardness = -1;
    // let maxHardness = -1;
    if (runtime.globalVars.Score <= 30) {
        minHardness = 5 / 2;
    } else if (runtime.globalVars.Score <= 130) {
        minHardness = 8;
    } else if (runtime.globalVars.Score <= 220) {
        minHardness = 15;
    } else if (runtime.globalVars.Score <= 300) {
        minHardness = 25;
    } else if (runtime.globalVars.Score <= 380) {
        minHardness = 35;
    } else if (runtime.globalVars.Score <= 500) {
        minHardness = 45;
    } else {
        minHardness = 65;
    }

    const selectedQuizzes = quizzes.quizzes.filter(q => (q.hardnessRange.x <= minHardness || q.hardnessRange.x == -1));
    let quiz = null;
    do {
        quiz = selectedQuizzes[rand(0, selectedQuizzes.length)];
    } while (quiz == lastQuiz);
    lastQuiz = quiz;

    return quiz;
}


export function rand(start, end) {
    return Math.floor(Math.random() * (end - start)) + start;
}

export function lerp(x, y, val) {
    const v = val > 1 ? 1 : val < 0 ? 0 : val;

    return x + (y - x) * v;

}

export function range(start, count) {
    return Array.apply(0, Array(count))
        .map((_, index) => index + start);
}

export function getColors() {
    return colors;
}

{
    const scriptsInEvents = {

        async Egame_Event3_Act1(runtime, localVars) {
            //Create Random Obstacles and Destroy Earlier as Camera Move

            const cam = runtime.objects.Camera.getFirstInstance()

            if (cam.y - runtime.layout.height < runtime.globalVars.LastObstacleY) {
                runtime.callFunction("CreateObstacles");
            }
            runtime.callFunction("CleanUpObstaclesIfCan");

        },

        async Egame_Event4_Act1(runtime, localVars) {
            //Camera Follow The Player

            const camera = runtime.objects.Camera.getFirstInstance();
            const player = runtime.objects.Player.getFirstInstance();

            if (!player)
                return;

            if (player.y < camera.y) {
                camera.y = lerp(camera.y, player.y, 4 * runtime.dt);
            } else {
                camera.y -= runtime.dt * 100;
            }


        },

        async Egame_Event5_Act1(runtime, localVars) {
            //add new obstacles


            const anim = rand(0, 4);

            const quiz = getQuiz(runtime);

            const obj = rand(0, 2) == 0 ? runtime.objects.cross_obstacle.createInstance(0, runtime.layout.width / 2, runtime.globalVars.LastObstacleY - runtime.globalVars.Spacing) : runtime.objects.round_obstacle.createInstance(0, runtime.layout.width / 2, runtime.globalVars.LastObstacleY - runtime.globalVars.Spacing)

            obj.instVars.Quiz = quiz.quiz;
            obj.instVars.Answer1 = quiz.answers[0];
            obj.instVars.Answer2 = quiz.answers[1];
            obj.instVars.Answer3 = quiz.answers[2];
            obj.instVars.Answer4 = quiz.answers[3];
            obj.instVars.AnimIndex = anim;
            obj.instVars.AngSpeed = rand(0, 2) == 0 ? -rand(60, 130) : rand(60, 130);




            runtime.globalVars.LastObstacleY = runtime.globalVars.LastObstacleY - runtime.globalVars.Spacing;
        },

        async Egame_Event6_Act1(runtime, localVars) {
            //destroy earlier objects
            const cam = runtime.objects.Camera.getFirstInstance();

            Array.from(runtime.objects.Quizzes.instances()).filter(item =>
                item.layer == 0 &&
                item.y > cam.y + runtime.layout.height).forEach(item => item.destroy());


        },

        async Egame_Event15_Act5(runtime, localVars) {
            const answer = runtime.getInstanceByUid(+runtime.globalVars.Temp2);
            const quiz = runtime.getInstanceByUid(+runtime.globalVars.Temp1);

            const colors = getColors();

            answer.text = (quiz.instVars["Answer" + runtime.globalVars.Temp3]) + "";
            answer.colorRgb = colors[(quiz.instVars.AnimIndex + (+runtime.globalVars.Temp3 - 1)) % 4];

        },

        async Egame_Event17_Act5(runtime, localVars) {
            const answer = runtime.getInstanceByUid(+runtime.globalVars.Temp2);
            const quiz = runtime.getInstanceByUid(+runtime.globalVars.Temp1);

            const colors = getColors();

            answer.text = (quiz.instVars["Answer" + runtime.globalVars.Temp3]) + "";
            answer.colorRgb = colors[(quiz.instVars.AnimIndex + (+runtime.globalVars.Temp3 - 1)) % 4];

        },

        async Egame_Event18_Act1(runtime, localVars) {
            for (const quiz of runtime.objects.Quizzes.instances()) {
                quiz.angle += quiz.instVars.AngSpeed * runtime.dt * Math.PI / 180;
            }
        },

        async Egame_Event31_Act2(runtime, localVars) {
            //Spawn Jump Particle Effect
            const player = runtime.objects.Player.getFirstInstance();
            runtime.objects.JumpEffect.createInstance(0, player.x, player.y).colorRgb = player.colorRgb;
        },

        async Egame_Event36_Act1(runtime, localVars) {
            //spawn die particle effect all color
            const player = runtime.objects.Player.getFirstInstance();
            runtime.objects.DieParticle.createInstance(0, player.x, player.y).colorRgb = colors[0];
            runtime.objects.DieParticle.createInstance(0, player.x, player.y).colorRgb = colors[1];
            runtime.objects.DieParticle.createInstance(0, player.x, player.y).colorRgb = colors[2];
            runtime.objects.DieParticle.createInstance(0, player.x, player.y).colorRgb = colors[3];
        },

        async Egame_Event43_Act1(runtime, localVars) {
            const success = runtime.getInstanceByUid(+runtime.globalVars.Temp1);
            const quiz = runtime.getInstanceByUid(success.instVars.QuizID);

            const colors = getColors();

            runtime.objects.ScoreEffect.createInstance(0, quiz.x, quiz.y);

            const particle = runtime.objects.AnswerEffect.createInstance(0, success.x, success.y);
            particle.colorRgb = colors[quiz.instVars.AnimIndex];
            success.destroy();
            quiz.destroy();

        }

    };

    self.C3.ScriptsInEvents = scriptsInEvents;
}