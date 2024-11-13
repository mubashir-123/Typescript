class User {
    // name: string
    // email: string
    readonly city: string = "Karachi";
    protected _courseNum: number = 1;

    //There are syntax for constructor

    // constructor(name: string, email: string){
    //       this.name = name
    //       this.email = email
    // }

    constructor(public name: string, public email: string){
    }

    //We can have private methods and can be access within the class
    private deleteToken(){
        console.log("Token Deleted successfully"); 
    }
    
    //Getter and setter methods are used to access and manupulate the value of private declaration
    get courseCount(): number {
        return this._courseNum;
    }


   // Setter method does not allow to define the type even void but it takes the parameter
    set courseCount(count: number){
         if(count <= 1 ){
            throw new Error("The course should be greater than one");
         }    
         this._courseNum = count;
    }
}

//The private decleration is not accessible outside the class even if the class is inherited.
// Protected declaration allows only the accessible if the class is bieng inherited.

class subUser extends User{
     isFamily: boolean = true;
     changeCount(){
        this._courseNum = 4
     }
}

const mubashir = new User("Mubashir","@example.com");
mubashir.name = "Ansari"
mubashir.city
//  mubashir.courseNum cannot access as it is declare as private variable
// mubashir.deleteToken();  it cannot access as it is private method



export {}