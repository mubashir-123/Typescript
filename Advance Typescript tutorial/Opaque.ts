// Note: Tupescript followes the structure means it detects the functions, varialbles and their types using the structure, not the naming convention.

// using this naming convention by implementing the  intersection, we can only nam and place the variable in the same order as define the in the function argument.

type AccountNumber = number & { _: "AccountNumber" };
type AccountBalance = number & { _: "AccountBalance" };

// The use of as keyword will not allow the change the name of the variable, we can use the same name.
const makeAccountNumber = (accountNumber: number): AccountNumber =>
  accountNumber as AccountNumber;
const makeAccountBalance = (accountBalance: number): AccountBalance =>
  accountBalance as AccountBalance;

function setUpAccount(
  accountNumber: AccountNumber,
  accountBalance: AccountBalance
) {
  const doubleAccount = makeAccountBalance(accountBalance * 2);
}

let accountNumber: AccountNumber = makeAccountNumber(1223);
let accountBalance: AccountBalance = makeAccountBalance(120);

setUpAccount(accountNumber, accountBalance);
