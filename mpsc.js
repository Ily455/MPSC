//let the Matrix below
// (a b c ) (x y z )
//M1= (a1 b1 c1) M2=(x1 y1 z1)
// (a2 b2 c2) (x2 y2 z2)
//The function below calculates the product M1*M2 of two Matrix which contains three columns and three lines
function calculateMatrixProduct(a,b,c,a1,b1,c1,a2,b2,c2,x,y,z,x1,y1,z1,x2,y2,z2){
console.log(a*x+b*x1+c*x2,a*y+b*y1+c*y2,a*z+b*z1+c*z2)
console.log(a1*x+b1*x1+c1*x2,a1*y+b1*y1+c1*y2,a1*z+b1*z1+c1*z2)
console.log(a2*x+b2*x1+c2*x2,a2*y+b2*y1+c2*y2,a2*z+b2*z1+c2*z2)
}
console.log("The product");
//write the values between parenthese
calculateMatrixProduct();
console.log("-----------------------");
//The function belows calculate the sum M1+M2 of two Matrix whith contains three columns and three lines
function calculateMatrixSum(a,b,c,a1,b1,c1,a2,b2,c2,x,y,z,x1,y1,z1,x2,y2,z2){
console.log(a+x,b+y,c+z)
console.log(a1+x1,b1+y1,c1+z1)
console.log(a2+x2,b2+y2,c2+z2)
}
console.log("The sum");
//write the values between parenthese
calculateMatrixSum();
