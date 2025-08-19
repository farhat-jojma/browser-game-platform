import MathQuizzes from './MathQuizzes.js';

// Put any global functions etc. here

let boundBoxes = [];
export let quizzes = [];

runOnStartup(async runtime => {
    // Code to run on the loading screen.
    // Note layouts, objects etc. are not yet available.

    runtime.addEventListener("beforeprojectstart", () => OnBeforeProjectStart(runtime));
});

function OnBeforeProjectStart(runtime) {


    // Code to run just before 'On start of layout' on
    // the first layout. Loading has finished and initial
    // instances are created and available to use here.
    runtime.layout.addEventListener("beforelayoutstart",
        () => onBeforeLayoutStart(runtime));
    runtime.addEventListener("tick", () => Tick(runtime));
}

function onBeforeLayoutStart(runtime) {
    quizzes = new MathQuizzes();
    console.log(quizzes);
}


function Tick(runtime) {

}