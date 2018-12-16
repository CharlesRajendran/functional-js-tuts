// pure functions are functions without any side effects
// pure functions should have some charateristics 

// 1. no state changes (modifying a global variable inside the function)
let x = "Something";
function impure() {
    x = "Something Else";
}

// 2. Should return the same value for the same input everytime
// pure 
function sum(x, y) {
    return x + y;
}
// impure
function increment(x) {
    return x++;
}

// 3. Should have inputs

// 4. No side effects - should not do any changes to dom or to databases.