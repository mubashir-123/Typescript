// Override keyword will override the methods, that we extends and will notify error nicely if we change in parent class so we can make changes the child class easily

// class Visibility {
//   visible = true;
//   show() {
//     console.log((this.visible = true));
//   }
//   hide() {
//     console.log((this.visible = false));
//   }
// }

// class MockVisibility extends Visibility {
//   override show() {
//     console.log("shown");
//   }
//   override hide() {
//     console.log("hidden");
//   }
// }

// const real = new Visibility();
// real.show();
// real.hide();

// const mock = new MockVisibility();
// mock.show();
// mock.hide();

// Now if make changes in the parent class it will notify the error
// class Visibility {
//   visible = true;
//   setVisibile(visible: boolean){
//      this.visible = visible
//   }
// }

// class MockVisibility extends Visibility {
//   override show() {
//     console.log("shown");
//   }
//   override hide() {
//     console.log("hidden");
//   }
// }

// const real = new Visibility();
// real.show();
// real.hide();

// const mock = new MockVisibility();
// mock.show();
// mock.hide();
