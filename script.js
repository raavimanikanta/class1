// var a=document.querySelector(".container");
// function FunClicked () {
    
//     a.style.display="block";
//     a.style.margin="10px";
// }

// // Hosting
// var b=10;
// console.log(b)

// // Sporead-operator
// var array1=[1,2,3,4,5];
// var array2=[10,6,7,8,9];

// var array3=[...array1,...array2];
// console.log(array3);

// var arrspread=[4,5];
// function Sum1(a,b){
//     console.log(a+b);
// }
// (Sum1(...arrspread));

// function SumTwo (...args) {
//     console.log(args);
//     let sum=0;
//     for(const arg of args){
//         sum += arg;
//     }
//     return [sum];
// }
// console.log(SumTwo(2,3,4,5,6))

// // diff between the Var ,Let,Const 
// var a=10;          // redeclaration is possible , var is functional and global scope variable
// var a=20;
// console.log(a);

// var c=20;
// function add (a,b){
    
//     console.log(c);
// }
// add()

// var Names=10;
//  {
// let d=20;
  



// code-execution:-
// var n=2;
// function Square (num){
//     var a=num*num;
//     return a;
// }
// var square2=Square(4)
// console.log(square2)
// var square3=Square(n)
// console.log(square3); 



//Hoisting:-
// var x=7;
// function getName () {
//     console.log("Hello-World !! ")
// }
// getName();
// console.log(getName);
// console.log(x)


// // let letValue=10;
// // let letValue=40;
// // console.log(letValue)

// // First class functions:-
// var Fun1=function (){
//     console.log(":Hello iam first function...");
// }

// var Fun2=function () {
//     return Fun1
    
    

// }
// console.log(Fun2()());

// //  first class function exmaple










// let add=function (x,y) {
//     return x+y;
// }
// //  let result= add(5,5);
// //  console.log(result);
// let sum =function (){
//     return add(5,5);
// }
// let result=sum();
// console.log(result);


// // Cloasure Examples
//      function outerfun(){
//          var a=20;
//          function innerfun(){
//            console.log(a)
//          }
//          return innerfun;
//      };
//       var result1= outerfun;
//     //  console.log(result1);
//      result1()();

//     //  CALL() APPLY() BIND () METHODS :-
           
//        const obj1 ={
//            name:"manikanta",
//            train:"Gowtami Express",
//            location :"secunderabad",

//            book: function (exam ,promote) {
//                console.log(`iam ${this.name} started my journey to ${this.location} by ${this.train} to write ${exam} exam for ${promote}`)
//            }
//        }
//     //    obj1.book();
//     //    console.log(obj1);
//        obj1.book.call(obj1,"EAMCET","qualification")
//        console.log(obj1)
//        obj1.book.call(obj1,"EAMCET2","qualification2")
//        console.log(obj1)

//       var obj2={
//       name:"prasad",
//       location:"chennai",
//       train:"mysore express",
//       }
//       obj1.book.call(obj2,"JEE-MAINS" ,"JOB")
//       console.log(obj2);
     

//       const arrayproto=[1,2,3,4,5,6]
//       console.log(arrayproto)

//     //   {
//     //       let private=20212021;
//     //   }
//     //   console.log(private);

// var a=10;
// var b="manikanta";
// if(a==b){
// console.log("correct")
// }
// else {
//     {
//         console.log("NaN")
//     }
// }
// // immediately invoked functioon expression 
// ( function () {
//     console.log("Hello iam immediate function")
// })();

//     // Pure-Functions example
//        const ElementArray=[2,4,6,8];
//        function AddElementArray(a,element) {
//            console.log([...a,element])
//        }
//        AddElementArray(ElementArray,10)
//        AddElementArray(ElementArray,10)
//        AddElementArray(ElementArray,10)
//        AddElementArray(ElementArray,10)
//        AddElementArray(ElementArray,10)

//     //    arraydestructuring example

// let DestructObj= {
//     name:"maniknata",
//     class2:"Btech",
//     loacation:"Goa"
// }

//  let {name,class2,loacation}=DestructObj;
//  console.log(name);
//  console.log(class2);
//  console.log(loacation)


// //  Function Constructor
//     function FunObj (name,age,school){
//       this.name=name;
//       this.age=age;
//       this.school=school;
//     }
//      let objdet1=new FunObj ("manikanta",23,"Hfhs")
//      let objdet2=new FunObj ("mani",24,"Hfhs")
//      let objdet3=new FunObj ("manikantavarma",22,"Hfhs")
//      let objdet4=new FunObj ("manikantaveerA",25,"Hfhs")

//      console.log(objdet1);
//      console.log(objdet2);
//      console.log(objdet3);
//      console.log(objdet4);
(function (){
    console.log("iam invoking only once")
    })();



    let obj1={
        name:"preeti",
        age:23,
        location :"vijaytawada",

        book:function (course,mode){
            console.log(`iam ${this.name} ,${this.age} OLD LIVES IN ${this.location} studying ${course} through ${mode}`)
        }
    }
     
    
    obj1.book.call(obj1,"btech","online");
    obj1.book.apply(obj1,["manikanta","college"])

    const obj2= obj1.book.bind(obj1);
    obj2("mani","online")


    let array1=[1,2,3,4,5];
    let array2=array1.map((number)=>
        number*2
    )
    console.log(array2)

    let array3=[1,2,3,4,5];
    let array4=array3.filter((number)=>
        number > 2 
    )
    console.log(array4)


    // let arrayobj1={
    //     name:'preeti',
    //     arrayfun:[1,2,3,4]
    // }

    // let arrayobj2={
    //     name:'preeti',
    //     arrayfun:[1,2,3,4]
    // }
        
            //   if(arrayobj1==arrayobj2){
            //        console.log("condition satisfied")
            //   }
            //   else{
            //       console.log("condition not satisfied")
            //   }
// function onclicked () {
//     document.querySelector(".para").innerHTML="Elevation academy for preeti"
// }


//    function clock(){
//     var hours=document.querySelector(".box1");
//     var min=document.querySelector(".box2");
//     var sec=document.querySelector(".box3")
   

//     var Time =new Date();

//     var a=Time.getHours();
//     var b=Time.getMinutes();
//     var c=Time.getSeconds();

//     hours.innerHTML=a;
//     min.innerHTML=b;
//     sec.innerHTML=c;

//    }
//    setInterval(clock,1000);

// function hidedetext(){
//     var values=document.querySelector(".texthide")
//     values.style.display="none";
// }



// var domtext=document.querySelector(".dom")
// console.log("function check")
//   function DisplayDomElement (){
//      var Domelement=document.createElement("h1");
//     //  Domelement.classList("dom")
//      Domelement.innerHTML="Dom text from web browser";
//      domtext.appendChild(Domelement)


//   }


//   let purearray=[1,2,3,4];
//    function Displaypure (a,element1){
//     return [...a,element1];
//    }
//    console.log(Displaypure(purearray,5));
//     console.log(purearray)

    // setTimeout(() => {
    //     console.log("iam setout function invokes after 2 seconds time limit is completed")
    // }, 5000);
  
   
     
    // setTimeout(() => {
    //     console.log("1");
    //     setTimeout(() => {
    //         console.log("2");
    //         setTimeout(() => {
    //             console.log("3");
    //             setTimeout(() => {
    //                 console.log("4");
    //             }, 4000);
    //         }, 3000);
    //     }, 2000);
    // }, 1000);


    // function a () {
    //     console.log("iam First class Function...")
    // }
    // let addFun=function(param1){
    //     return param1;
    // }
    // addFun(a());


    // // Promises Examples

    // let p= new Promise ((resolve,reject)=>{
    //     let a=1+1;
    //     if(a==2){
    //         resolve("success")
    //     }else {
    //         reject ("error occured")
    //     }
    // });

    // p.then((message) =>{
    //     console.log("you got " +message)
    // }).catch ((message)=>{
    //     console.log(message)
    // })

    //     //  SECOND EXAMPLE OF PROMISES

    // let videoOne=new Promise((resolve,reject)=>{
    //   resolve("video1 has been recorded");
    // })
    // let videoTwo=new  Promise((resolve,reject)=>{
    //   resolve("video2 has been recorded");
    // }) 
    // let videoThree=new  Promise((resolve,reject)=>{
    //   resolve("video3 has been recorded");
    //   })

    //   Promise.race([videoOne,videoTwo,videoThree]).then ((messages)=>{
    //       console.log(messages);        //It wont wait for all the tasks get completed ,what first completed will be the output 
    //   }).catch((message)=>{
    //    console.log(message);
    //   })

    //   Promise.all([videoOne,videoTwo,videoThree]).then ((messages)=>{
    //     console.log(messages);
    // }).catch((message)=>{            // The ( all ) will wait for the all the tasks to get completed 
    //                                  // after that we will get the output ....
    //  console.log(message);
    // })

    //   Async and await:-
    // async function Mainfun  () {
    //         console.log("inside the function ")
    //         const response = await fetch("https://api.github.com/users");
    //         const users=response.json();
    //         return users;
    //     }
    //     console.log("before calling the function ");
    //      let H=Mainfun();
        
    //      console.log("after checking the function response");
    //      console.log(H);
    //      H.then((message) => {
    //          console.log(message);
    //      });


    //     // MAP 
    //      let MapArray=[1,2,3,4,5];
    //      let MapArray2=MapArray.map((num)=>
    //        num*2
    //        );
         
    //      console.log(MapArray2);
 
        //  FILTER
    //      let ArrayFilter=[2,4,6,8,9];
    //      let ArrayFilter2=ArrayFilter.filter(e=>e>2);
    //      console.log(ArrayFilter2)



    //     //  INHERITANCE USING FUNCTIOONAL CONSTRUCTOR
    //      function Person (name,age,course) {
    //        this.name=name;
    //        this.age=age;
    //        this.course=course;
           
    //      }
    //      function Student (name,age,course,id){
    //          Person.call(this,name,age,course);
    //          this.id=id;
    //      }
    //     console.log("Before logging the both objects");
    //     console.log(Person.prototype);
    //     console.log(Student.prototype);


    //     Student.prototype=Object.create(Person.prototype)
    //     console.log(Person.prototype);
    //     console.log(Student.prototype);

    //     let stu1=new Student("manikanta",20,"mern",454785)
    //     // let per1=new Person ();
    //     // console.log(per1)
    //     console.log(stu1)
    //     console.log(stu1.age)

    //    async function Dynamic () {
    //               console.log("calling function...")
    //               const result=await fetch("https://api.github.com/users") 
    //               const users1=result.json();
    //               return users1;
    //     };
    //     let H2=Dynamic();
    //     H2.then((data) =>{
    //         console.log(data);
    //     })

        // TO FIND NUMBER OF ZEROS IN ARRAY
        function Count () {
            const Arraycount=[0,1,0,1,0,1,0,0];
            var count=0;

            for(let i=0; i<=Arraycount.length; i++){
                if(Arraycount[i]==0){
                    count++;
                }
                
            };
            return count;
        }
        let returnedValue=Count();
        console.log("Number of Zeros are " + returnedValue);


    const Arrobj1={
        name:"manikanta",
        ArrayCheck:[1,5,3,4],
    }
    const Arrobj2={
        name:"mani",
        ArrayCheck1:[1,2,3,4],
    }

    // To check whether both arrays are Same or not :-
     function CheckArray() {
        for(let i=0 ;i<4; i++) {
            if(Arrobj1.ArrayCheck[i]==Arrobj2.ArrayCheck1[i]){
                console.log("Both arrays are same as per the result ")
            }
            else {
                console.log("Both arrays are not same")
            }
        }
    }
    CheckArray();
     
    var F=6;
    var G=7;

       console.log(F&G);







  

           
          
          

 