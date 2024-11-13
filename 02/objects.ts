// let User = {
//     name: "Anonayms",
//     age: 28,
//     isActive: true
// }

// function createUser({name: string, isPaid: boolean}){}
// createUser({name:"Anonamys", isPaid:false})

// const newUser = {name: "John Doe", isPaid:true};
// createUser(newUser);

// function loginUser():{name: string, price: number}{
//     return{name: "HI", price: 500}
// }

function createUser(user: User): User{
//    return {name: "Anonayms", email: "@xample.com", isActive: true, age: 25}
      return user;
}

// createUser({name: "Anonayms", email: "@xample.com", isActive: true, age: 25});

type User={
    readonly _id: string;
    name: string;
    email: string;
    isActive: boolean;
    age: number;
    cardNum?: number
}

let myUser: User = {
     _id: "1234",
     name: "John Doe",
     email: "John Doe@gmail.com",
     isActive:false,
     age: 27
}

myUser.age= 32;

type cardNumber = {
    cardnumber: string
}

type cardDate = {
    cardDate: string
}

type cardDetails = cardNumber & cardDate & {
    cvv: number
}

export {}