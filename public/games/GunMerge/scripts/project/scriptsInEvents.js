// Import any other script files here, e.g.:
// import * as myModule from "./mymodule.js";

runOnStartup(async runtime => {
    // Code to run on the loading screen.
    // Note layouts, objects etc. are not yet available.

    runtime.addEventListener("beforeprojectstart", () => OnBeforeProjectStart(runtime));
});

async function OnBeforeProjectStart(runtime) {
    // Code to run just before 'On start of layout' on
    // the first layout. Loading has finished and initial
    // instances are created and available to use here.

    runtime.addEventListener("tick", () => Tick(runtime));
}

function Tick(runtime) {
    // Code to run every tick
}

function abbreviateNumber(n) {
    if (n < 1e3) return n;
    if (n >= 1e3 && n < 1e6) return +(n / 1e3).toFixed(1) + "k";
    if (n >= 1e6 && n < 1e9) return +(n / 1e6).toFixed(1) + "m";
    if (n >= 1e9 && n < 1e12) return +(n / 1e9).toFixed(1) + "b";
    if (n >= 1e12) return +(n / 1e12).toFixed(1) + "T";
}


const scriptsInEvents = {

    async Coin_Event3_Act1(runtime, localVars) {
        localVars.result = abbreviateNumber(localVars.num_coin)
    }

};

self.C3.ScriptsInEvents = scriptsInEvents;