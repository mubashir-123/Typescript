function logPrizes(prizes) {
    for (var key in prizes) {
        console.log(key, prizes[key].toUpperCase(), "\n");
    }
}
var prizes = {
    first: "gold",
    second: "silver",
};
logPrizes(prizes);
var bad = {
    first: "gold",
    second: "silver",
    bronze: 3,
};
logPrizes(bad);
