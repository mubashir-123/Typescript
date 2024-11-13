type dept = {
    dptName: string,
    dptNumber: number,
    managerName: string
}

//Interface can be used as a library or export, It is a loose class that helps you to define the class using all methods and variable or objects mention in the interface, it just a interface where you need to use it and does not care about how it works. Eg Your operating system is the interface of the hardware of computer where you can click the button but does not conern about the functioanlity behind it.
interface User {
    readonly dbId: number
    email: string
    userId: number
    isActive: boolean
    googleId?: number
    startTrial: () => string // This is one method to initialze function
    procedure(coupone: string): number // This is second method to initialze function
    deptartment: dept
}

//This is called re-opening interface where you can define your own methods or vairable with desire data types if it is not present in the previous interface. Eg: You export a library where this interface is defined and used it, bit there are some things you need to mention so can re-open the interface and can work in your program. 
interface User{
    githubToken: string
}

interface Contact {
    address: string
    contactNumber: number
}

//We can also inherit the interface property into another
interface Admin extends User, Contact {
    role: "Learner" | "ta" | "admin"
}

const mubashir: Admin = {role: "admin",address: "House NO 2 street no 4",contactNumber: 947329480 ,dbId: 22, email:"@example.com",userId: 2211, isActive: true, 
    startTrial: () => {
        return "mubashir"
},
  procedure(name: "Nobody") {
      return 10
  },
  deptartment: {dptName: "IT",dptNumber: 2, managerName: "Mubashir" },
  githubToken: "Tokens@github"
}

export {}