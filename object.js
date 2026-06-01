// Task 1

// let student = {
//     name:"Amsith",
//     age:23,
//     cource:"Javascript",
//     address:{
//         street:"12th",
//         state:"TamilNadu"
//     }
// }
// console.log(student.name);
// console.log(student.age);
// console.log(student.cource);
// console.log(student.address.street);
// console.log(student.address.state);



//  Task2-safely access misisng property using ?.

// let student={
//     name:"Amsith",
//     age:22,
    
//     address:{
//         state:"Tn",
//          Native:null,
//     }
// }
// console.log(student.mark??"No mark ");
// console.log(student.address.state??"No state");
// console.log(student.address.Native??"Kumari");


// Task3-Looop through object and print all keys & values

// let details={
//     name:"Amsith",
//     age:22,
// }

// for(let key in details){
//     console.log(key);
//     console.log(details[key]);
    
// }

// Task4- Copy an object and change a property , also add a new property


// let student ={
//     name:"amsith",
//     age:23
// };

// let updatestudent = {...student};

// updatestudent.age=24

// updatestudent.cource = "Javascript"

// console.log("Old",student);
// console.log("New",updatestudent);




// Task5- Decide whetehr to sue array or object for:
//     List of Marks 

// let marks =[10,20,30,40]

// console.log(marks);


//  User profile

// let profile={
//     name:"Amsith",
//     age:22
// }

// console.log(profile);

// Shopping Cart items

// let items =[

//     {Kind:"shirt",Price:400},
//     {Kind:"shoes",Price:400}
// ]

// console.log(items[0].Price);
// console.log(items[1].Kind);


// Task-6  Create an object named as compnay with nested departments with name descripiton and id of each department
//     Loop and print the details
//     use Optional Chaining in at least one place


// let company = {
//     name:"XYX",
//     department: [
//         {
//             id:"01",
//             name:"CSE",
//             description:"Strong in CS"
//         },
//         {
//             id:"02",
//             name:"ECE",
//             description:"Strong in Electronics"
//         },
//         {
//             id:"03",
//             name:"MEC",
//             description:null
//         }
//     ]
// }

// console.log(company.name);

// for(let dept of company.department) {
//     console.log("ID:", dept.id);
//     console.log("Name:", dept.name);
//     console.log("Description:", dept?.description ?? "No description available");
    
// }



// Task-7  Create an object book with title, author, rating
//    Update the rating of the book
//    Add a function describe() that needs to log the "Book by an author named as [author name]"

// let book ={
//     title:"Hello",
//     author:"XyZ",
//     rating:4.5
// }

// book.rating=5

// console.log(book.rating);

// function describe(){
//     console.log("Book by an author named as",book.author);
    
// }
// describe()


// Task8- Create a object fro a movie, a product, for a user profile

// Movie
// let movie ={
//     title:"KGF",
//     year:2026
// }

// function movies(){
//     console.log("Best movie I like",movie.title);
    
// }
// movies()



// Product

// let Product ={
//     name:"Headphone",
//     price:300
// }

// function products(){
//     console.log("Best Product I like",Product.name,"and Price is ",Product.price);
    
// }
// products()



// profile

// let profile ={
//     name:"Amsith",
//     age:23
// }

// function profiles(){
//     console.log("My name is",profile.name);
    
// }
// profiles()


// Task-9 try use this method
   

// let movie = {
//     title: "KGF",
//     year: 2026,       

//     movies: function(){   
//         console.log("Best movie I like", this.title);
//     }
// };                    

// let newmovie = {...movie}
// newmovie.title = "KGF2";
// movie.movies();    
// newmovie.movies(); 