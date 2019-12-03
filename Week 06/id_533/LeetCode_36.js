// https://leetcode-cn.com/problems/valid-sudoku/

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    var rows = {},
        cols = {},
        boxs = {};
    for (var i = 0; i < 9; i++) {
        rows[i] = {};
        cols[i] = {};
        boxs[i] = {};
    }
    for (var i = 0; i < 9; i++) {
        for (var j = 0; j < 9; j++) {
            if (board[i][j] === '.') continue;
            var num = board[i][j],
                boxIdx = Math.floor(i / 3) * 3 + Math.floor(j / 3);
            rows[i][num] = rows[i][num] === undefined ? 1 : ++rows[i][num];
            cols[j][num] = cols[j][num] === undefined ? 1 : ++cols[j][num];
            boxs[boxIdx][num] = boxs[boxIdx][num] === undefined ? 1 : ++boxs[boxIdx][num];
            if (rows[i][num] > 1 || cols[j][num] > 1 || boxs[boxIdx][num] > 1) return false;
        }
    }
    return true;
};

var arr1 = [
    ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
    ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
    ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
    ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
    ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
    ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
    ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
    ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
    ['.', '.', '.', '.', '8', '.', '.', '7', '9']
]
console.log(isValidSudoku(arr1))
var arr2 = [
    ['8', '3', '.', '.', '7', '.', '.', '.', '.'],
    ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
    ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
    ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
    ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
    ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
    ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
    ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
    ['.', '.', '.', '.', '8', '.', '.', '7', '9']
]
console.log(isValidSudoku(arr2))

var arr3 = [
    [ '5', '3', '0', '2', '7', '6', '4', '1', '8'],
    [ '6', '2', '4', '1', '9', '5', '3', '0', '7'],
    [ '1', '9', '8', '3', '4', '0', '5', '6', '2'],
    [ '8', '1', '2', '7', '6', '4', '0', '5', '3'],
    [ '4', '0', '6', '8', '5', '3', '7', '2', '1'],
    [ '7', '5', '3', '0', '2', '1', '8', '4', '6'],
    [ '0', '6', '1', '5', '3', '7', '2', '8', '4'],
    [ '2', '8', '7', '4', '1', '9', '6', '3', '5'],
    [ '3', '4', '5', '6', '8', '2', '1', '7', '9']
]

console.log(isValidSudoku(arr3))