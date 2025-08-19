import Scene from './Scene.js';
import MathQuizzes from './MathQuizzes.js';
import Quiz from './Quiz.js';
import Answer from './Answer.js';
import WinParticles from './WinParticles.js';

export let scene = null;
export let quizzes = null;

runOnStartup(async runtime => {
    // Code to run on the loading screen.
    // Note layouts, objects etc. are not yet available.
    runtime.objects.Answer.setInstanceClass(Answer);
    runtime.objects.Quiz.setInstanceClass(Quiz);
    runtime.objects.WinParticles.setInstanceClass(WinParticles);
    runtime.addEventListener("beforeprojectstart", () => OnBeforeProjectStart(runtime));
    runtime.getLayout("Game").addEventListener("beforelayoutstart", async () => {

        const level = await runtime.storage.getItem("CompletedLevel");

        scene = new Scene(runtime, level ? level + 1 : 1);

    });
});


function OnBeforeProjectStart(runtime) {
    quizzes = new MathQuizzes();
    quizzes.quizzes.forEach(q => q.randomize());
    runtime.addEventListener("tick", () => Tick(runtime));
}

function Tick(runtime) {
    if (scene) {
        scene.update(runtime);
    }
}

export async function setCompletedLevel(runtime, level) {
    const lastCompleted = await runtime.storage.getItem("CompletedLevel");

    if (lastCompleted && level <= lastCompleted) return;

    await runtime.storage.setItem("CompletedLevel", level);
}