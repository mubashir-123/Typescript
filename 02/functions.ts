function addNumber(num: number): number{
    return num + 2;
}
addNumber(6);

function loginUser(name: string="JohnDoe", isPaid: boolean=false){}
loginUser("");

const hero = ["thor", "hulk", "antman"]
hero.map((hero): string =>{return `My hero is ${hero}`})

const UppserCase = (val:string): string =>{return val}
UppserCase("hello my world");


//This function return nothing or void
function consoleMsg(msg: string): void{
   console.log(msg);
}
consoleMsg("Hi there I am using whatsapp");


//This function will never return value it terminate the program or stop from crash the program
function errMsg(msg: string): never{
    throw new Error(msg);
}

export{}