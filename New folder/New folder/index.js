"use strict";
let age = 20;
// let sales = [1_2_3_4_5_6_7_8_9
// let course: string="TypeScript"
// let is_pub:boolean=true
// let level
// function f1(document) {
//     console.log(document);
// }
// let sales:[number,string][];
// sales = [[2,"Simon"],[1,"Arthur"]];
// console.log(sales);
// enum SomeEnum {
//     One,
//     Three,
//     Four = 3-3,
//     Five = Three + Four,
//     Six = "123as".length
// }
// console.log(SomeEnum.One); 
// console.log(SomeEnum.Three); 
// console.log(SomeEnum.Four); 
// console.log(SomeEnum.Five); 
// console.log(SomeEnum.Six); 
function cTax(income) {
    if (income > 50000)
        return income * 1.2;
    return income * 1.3;
}
console.log(cTax(10));
