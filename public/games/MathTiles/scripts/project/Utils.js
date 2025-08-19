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

export function lerp(x, y, val) {
    const v = val > 1 ? 1 : val < 0 ? 0 : val;

    return x + (y - x) * v;

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

export function randFloat(start, end) {
    return Math.random() * (end - start) + start;
}

export function clamp(val, min, max) {

    return val < min ? min : (val > max ? max : val);
}

export function range(start, count) {
    return Array.apply(0, Array(count))
        .map((_, index) => index + start);
}