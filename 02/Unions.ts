let id: number | string = 8;
id = "23"

type User = {
    name: string,
    id: number
}

type Admin = {
    username: string,
    id: number,
    dept: string,
    isActive: boolean
}

let register: User | Admin = {name: "Mubashir", id: 99}

register = {username: "Muabshir", id:34, dept: "IT", isActive: true}

function getDBId(id: number | string): number | string{
    // console.log(`YOur DB id is ${id}`);
    if(typeof(id) === "string"){
          id.toLowerCase();  
    } else{
        id.toExponential();
    }
    return id;
}

getDBId(4);
getDBId("2");

let data: number[] = [1,2,3,4,5,6];
let data2: string[] = ["1","2","3","4","5","6"];
let data3: (string | number)[] = [1,2,"3","4",5,"6"]

export {}

