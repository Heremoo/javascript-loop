// Exercise #3: Find a Minimum Score
let scores = [100, 20, 3, 1000];
let minScore = scores[0];
// Start coding here

for (let i = 1; i < scores.length; i++) {
    if (i < minScore) {
        minScore = i 
    }
}
console.log(minScore)