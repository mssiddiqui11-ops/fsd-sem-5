// console.log("hello world")
// var a=12
// console.log(a);
// var a;
// console.log(a);
// a=12;
// var a=40;
// if(a>20){
//     var a=90;
//     console.log("a inside if="+a);
// }
// else{
//     console.log("hii...inisde else")
// }
// console.log("a is outside ="+a);
// let b=40;
// if(b>20){
//     let b=90;
//     console.log("a inside if="+b);
// }
// else{
//     console.log("hii...inisde else")
// }
// console.log("a is outside ="+b);
// function greetings(){
//     console.log("hi....Welcome to abes DS");
//     return 40;
// }
// const data= greetings();
// console.log("data="+data)
//  const data=function greetings(msg){
//     console.log("hi....Welcome to abes DS"+msg);
//     return 40;
// }
// const msg=data("vansh");
// console.log(msg);
// const data=(myname)=>{
//  console.log( "hi "+myname+" welcome to FSD");
// }
// const msg=data("manal");
// console.log(msg);

// const data = msg=>msg;
// console.log(data("hiii...."));
// //IIFE
// (function(){
//     console.log("welcome to fsd")
// })();
// (()=>{
//     console.log("hii....")
// })();
// function greeting(msg="hiii..."){
//     console.log(msg+"welcome to abes ")
// }
// greetings("hiiii...");
 
// function msg(){
//     console.log("welcome to abes");
// }
// // setTimeout(()=>{
// //     console.log("hello...using fsd");
// // },1000);
// setInterval(msg,1000);

// const bookTicket = () => {
//     printMessage("welcome!")
//     setTimeout (() => {
//         printMessage("Login has been DONE SUCCESFULLY ");
//         setTimeout(()=> {
//             printMessage("seat has been choosen successfully");
//         })
//         setTimeout(() => {
//             printMessage("payment has been done successfully" );
//           setTimeout(() => {
//             printMessage("Ticket has been confirmed" ); 
//             setTimeout(() => {
//             printMessage("Thank you " );   },2000)
//           },4000)
//         },3000)
//     },2000)
// }

const printMessage =(msg)=> {
    console.log(msg);
}
const waitFun = (msg,time) =>{
    console.log(msg);
}