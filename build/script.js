console.log("hello world! I am gideon Kipkorir Yegon");
                //==============scope (let,var and const)
function seyHello(){
    for(var i=0;i<5;i++){
        console.log(i);

    }
    console.log(i);
}
seyHello();

            //=============objects
const person={
    name:"Gideon Kipkorir Yegon",
    Age:21,
    talk(){
        console.log("Talkative");
    },
    walk(){}
};
//dot notation
person.talk();
//bracket notation
person['name']="john";
const targetMember="name";

person[targetMember.value]="john"




                //======== the this keyword
//returns a refence to the current object
const jito={
    name:"Mosh",
    walk(){
        console.log(this);
    }
};
jito.walk();

//=============binding this

const walk=jito.walk.bind(jito);
walk();

            //Arrow functions
const square=number=>number*number;
console.log(square(4));

const jobs=[
    {id:1,isActive:true},
    {id:2,isActive:true},
    {id:3,isActive:false}
]
const activeJobs=jobs.filter(jobs=>jobs.isActive);

console.log(activeJobs);
                    //Arrow functions and this keyword
                    //arrow function don't rebind the this keyword
const mtu = {
    name:"Gideon",
    talk(){
        var self=this;
        setTimeout(()=>{
            console.log("this", this);
        },1000);
    }
};
  mtu.talk();   
  
  

                    //Array.map()
 const color=["red","green","blue"];
 const items=color.map(color=>`<li>${color}</li>`)
 console.log(items);


 //================objects destructuring
//used to extract values in  object into separate variables
const address={
    city:"sotik",
    street:"tembwo",
    postalCode:20406,
    country:"Kenya",

}
const {street, city, poatalCode, country} =address;
//ass,igning  new variable name using aliases
const{street:st}=address;
console.log(st);


                //==Spread operator(...)
//combining two arrays and objects
const first=[1,2,3,4];
const second=[5,6,7,8];
const combined=[...first,...second];
console.log(combined);
//cloning an array and object
const clone=[...first];



//             //==================classes
// //We use pascal naming conventions
// class Person {
//     constructor(name){
//         this.name=name;
//     }
//     walk(){
//         console.log("walk");
//     }
// }
// //person object
// const aPerson=new Person("Gideon");
// console.log(aPerson);
// //inheritance
// //Teacher class inheriting from Person class
// class Teacher extends Person{
//     constructor(name,degree){
//         super(name);
//         this.degree=degree;
//     }
//     teach(){
//         console.log("teach");
//     }

// }
// //teacher object
// const teacher=new Teacher("John","Msc");
// console.log(teacher.degree);

                    //================================================modules===================================
//splitting a file into many files.
//file one(person.js)

// export class Person {
//     constructor(name){
//         this.name=name;
//     }
//     walk(){
//         console.log("walk");
//     }
// }
//file two(teacher.js)
// import{Person} from "./person";

// class Teacher extends Person{
//     constructor(name,degree){
//         super(name);
//         this.degree=degree;
//     }
//     teach(){
//         console.log("teach");
//     }

// }
//file three(index.js)
import {Teacher} from "./teacher";
const teacher=new Teacher("John","Msc");
console.log(teacher.degree);