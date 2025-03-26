let input = `7 6 4 2 1
1 2 7 8 9
9 7 6 2 1
1 3 2 4 5
8 6 4 4 1
1 3 6 7 9`



console.log(input.length)
let lines = input.split("\n");
let sumOfSafe = 0;
for (let i=0; i < lines.length; i++) {
    let singleLine = lines[i].split(' ');
    let isIncreasing;
    let isSafe;
    if(singleLine[0] < singleLine[1]){
        isIncreasing = true; // increasing
    } else {
        isIncreasing = false; // decreasing
    }
    console.log(singleLine,isIncreasing)
    for(let j=0; j < singleLine.length - 1; j++) {
        if((isIncreasing && singleLine[j] < singleLine[j+1] && (singleLine[j+1] - singleLine[j]) <= 3) || (!isIncreasing && singleLine[j+1] < singleLine[j] && (singleLine[j] - singleLine[j+1]) <=3)){
            isSafe = true;
        } else {
            console.log(`not safe at ${j}`);
            isSafe = false;
            break;
        }
    }
    if(isSafe) {
        console.log("Safe")
        sumOfSafe++;
    }
}
console.log(sumOfSafe)
