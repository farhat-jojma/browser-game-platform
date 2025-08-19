import {
    scene,
    quizzes
} from './Main.js';
import {
    lerp
} from './Utils.js';

let lastQuiz = null;


export function getQuiz(runtime, level) {

    const selectedQuizzes = quizzes.quizzes.filter(q => (q.hardnessRange.x <= level || q.hardnessRange.x == -1));
    let quiz = null;
    do {
        quiz = selectedQuizzes[rand(0, selectedQuizzes.length)];
    } while (quiz == lastQuiz);
    lastQuiz = quiz;

    return quiz;
}

export function getRandom(start, end) {
    const list = [];
    for (let i = start; i <= end; i++) {
        list.push(i);
    }

    const modifyList = [];


    while (list.length) {
        const index = rand(0, list.length);
        modifyList.push(list[index]);
        list.splice(index, 1);
    }


    return modifyList;


}




export function lerpArray(x, y, n) {
    const list = [];
    for (let i = 0; i < x.length; i++) {
        list.push(lerp(x[i], y[i], n));
    }

    return list;
}

export function max(x, y) {
    return x > y ? x : y;
}


export function min(x, y) {
    return x < y ? x : y;
}

export function rand(start, end) {
    return Math.floor(Math.random() * (end - start)) + start;
}

export function clamp(val, min, max) {

    return val < min ? min : (val > max ? max : val);
}



const scriptsInEvents = {

    async Egame_Event12_Act2(runtime, localVars) {
        const answer = runtime.getInstanceByUid(+runtime.globalVars.Temp);
        answer.onClick();
    },

    async Egame_Event32_Act3(runtime, localVars) {
        const levelText = runtime.objects.Level_Complete_Level_Text.getFirstInstance();

        const completeText = runtime.objects.Level_Complete_Complete_Text.getFirstInstance();

        levelText.text = "Level " + runtime.globalVars.Level;

        const levelTextStartSize = levelText.sizePt;

        const completeTextStartSize = completeText.sizePt;

        levelText.sizePt = 0;
        completeText.sizePt = 0;

        scene.lerpAnim(5, 0, 1.3, n => {
            const scale = lerp(0.2, 1, n);
            levelText.sizePt = levelTextStartSize * scale;
            console.log(n);
        });

        await scene.delay(.2);

        const intermidateScale = 1.2;
        const intermidateNormalized = 0.6;

        await scene.lerpAnim(3, 0, 1.3, n => {
            const scale = n < intermidateNormalized ? lerp(0.2, intermidateScale, n / intermidateNormalized) : lerp(intermidateScale, 1, (n - intermidateNormalized) / (1 - intermidateNormalized));
            completeText.sizePt = completeTextStartSize * scale;
        });

        await scene.delay(.6);
        runtime.globalVars.ContinueLevel = true;
        runtime.goToLayout("Game");

    }

};

self.C3.ScriptsInEvents = scriptsInEvents;