function vanillaCompare(a, b) {
    // your default sorting comparator
    return a - b;
}

function compareObjectValues(a, b) {
    // if a and b are objects {}, we can compare the values of a common key
    // for this to work, a and b have to be stored inside an array [ {}, {} ]
    // this would be useful when sorting, say, a list of User objects by name, by last name, or by any other attribute
    return a[key] - b[key];
}

function compareSinValues(a, b) {
    // if we want to sort by the Sine value of a and b
    // the original values of a and b will not be changed, only their positions will be affected
    return Math.sin(a) - Math.sin(b);
}

function compareReverse(a, b) {
    // if we want to reverse the order of sorting
    // i.e. from greatest to least
    return b - a;
}