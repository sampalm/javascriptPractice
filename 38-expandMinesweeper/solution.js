/**
 *  Problem: Writes a function that finds where to expand exactly when there's no surrounding cells and reveal them.
 */

 //  Code example
/*
    check(field, num_rows, num_cols, given_i, given_j)
    [[0,    0,      0,      0,      0],                  [[-2,    -2,     -2,     1,    -2],
     [0,    1,     1,       0,      0],    ===>     [-2,    1,      1,       1.     -2],   
     [0,    1,     -1,     0,      0]]                 [-2,    1,     -1,     1,    -2]],
*/