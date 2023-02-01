const rSteps = [-1, 0, 1, 0];
const cSteps = [0, -1, 0, 1];

function dfs(image: number[][], sr: number, sc: number, val: number, color: number): void {
    const rLength = image.length;
    const cLength = image[0].length;
    if (sr < 0 || sc < 0 || sr >= rLength || sc >= cLength || image[sr][sc] !== val || image[sr][sc] === color) {
        return;
    }
    image[sr][sc] = color;

    for (let i = 0; i < 4; i++) {
        dfs(image, sr + rSteps[i], sc + cSteps[i], val, color);
    }
}

function floodFill(image: number[][], sr: number, sc: number, color: number): number[][] {
    const initVal = image[sr][sc];
    dfs(image, sr, sc, initVal, color);
    return image;
};

console.log(floodFill([[1,1,1],[1,1,0],[1,0,1]], 1, 1, 2));
