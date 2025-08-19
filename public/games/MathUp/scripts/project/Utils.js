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