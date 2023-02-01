
function _dfs(grid: number[][], sr: number, sc: number): number {
    const rLength = grid.length;
    const cLength = grid[0].length;
    if (sr < 0 || sc < 0 || sr >= rLength || sc >= cLength || !grid[sr][sc]) {
        return 0;
    }

    // Convert 1 to 0, prevent infinite
    grid[sr][sc] = 0;

    // DFS and return 1 when hit the edge
    return 1 + _dfs(grid, sr - 1, sc) + _dfs(grid, sr, sc - 1) + _dfs(grid, sr + 1, sc) + _dfs(grid, sr, sc + 1);
}

function maxAreaOfIsland(grid: number[][]): number {
    let area = 0;
    const rLength = grid.length;
    const cLength = grid[0].length;

    for (let r = 0; r < rLength; r++) {
        for (let c = 0; c < cLength; c++) {
            // Find first 1
            if (grid[r][c] === 1) {
                const result = _dfs(grid, r, c);
                if (result > area) {
                    area = result;
                }
            }
        }
    }
    return area;
};

const area = [[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]];

// 6
console.log(maxAreaOfIsland(area));

// 0
console.log(maxAreaOfIsland([[0,0,0,0,0,0,0,0]]));
