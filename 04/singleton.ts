// Singleton is a concept that a class can have only one object.It cannot make other object, it is a control over a class.

class Human{
    static object: Human;

    private constructor(private name: string) {}
    
    static getObject(name: string){
         if(this.object){
            return this.object
         }  
         this.object = new Human(name);
         return this.object
    }
}
const mubashir = Human.getObject("mubashir");
console.log(mubashir);

const ansari = Human.getObject("ansari");
console.log(ansari);

export{}