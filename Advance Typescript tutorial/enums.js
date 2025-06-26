var loginMode;
(function (loginMode) {
    loginMode[loginMode["app"] = 0] = "app";
    loginMode[loginMode["social"] = 1] = "social";
    loginMode[loginMode["email"] = 2] = "email";
})(loginMode || (loginMode = {}));
// console.log(loginMode.app);
// console.log(loginMode.email);
// console.log(loginMode.social);
// function initiateLogin(mode: loginMode) {
//   //...
//   console.log(mode);
//   // console.log(mode);
//   // console.log(mode);
// }
// initiateLogin(loginMode.app);
// initiateLogin(loginMode.email);
// initiateLogin(0);
// initiateLogin(1);
// initiateLogin(100);
console.log(loginMode["app"]);
console.log(loginMode[0]);
