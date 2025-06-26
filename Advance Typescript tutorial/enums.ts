enum loginMode {
  app,
  social,
  email,
}

// console.log(loginMode.app);
// console.log(loginMode.email);
// console.log(loginMode.social);

function initiateLogin(mode: loginMode) {
  //...
  //   console.log(mode);
  // console.log(mode);
  // console.log(mode);
}
// initiateLogin(loginMode.app);
// initiateLogin(loginMode.email);

// initiateLogin(0);
// initiateLogin(1);
// initiateLogin(100);

console.log(loginMode["app"]);
console.log(loginMode[0]);
