const colorHexs = [
    "34C2FB",
    "F7F804",
    "34FBA1",
    "FB348B"
];

export let colors = colorHexs.map(h => hEXToVBColor(h));


//speed vs level linear graph
export const speedAndLevels = [{
        speed: 500,
        level: 0
    },
    {
        speed: 600,
        level: 10
    },
    {
        speed: 700,
        level: 20
    }
];



function hEXToVBColor(rrggbb) {
    const b = rrggbb.substr(4, 2);
    const g = rrggbb.substr(2, 2);
    const r = rrggbb.substr(0, 2);


    return [parseInt(r, 16) / 255, parseInt(g, 16) / 255, parseInt(b, 16) / 255];
}