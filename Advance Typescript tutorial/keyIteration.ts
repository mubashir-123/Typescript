type Prize = {
  first: string;
  second: string;
};

function logPrizes(prizes: Prize) {
  //  By definifng the variable outside the loop with key will only check for the keys in the Prize and will thrwo error in compile time
  let key: keyof Prize;
  for (key in prizes) {
    console.log(key, prizes[key].toUpperCase());
  }
}

let prizes: Prize = {
  first: "gold",
  second: "silver",
};

logPrizes(prizes);

let bad: Prize = {
  first: "gold",
  second: "silver",
  //   bronze: 3,
};

logPrizes(bad);
