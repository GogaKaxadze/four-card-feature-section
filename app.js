const user = {
 firstName:'Goga',
 lastName:'Kaxadze',
 fullName(){
  return  ` მე მქვია ${this.firstName} და ჩემი გვარია ${this.lastName}`
 }
}
function fullName(firstName, lastName){
 return `${firstName} ${lastName}`
}
console.log(fullName('Goga','Kaxadze'));
console.log(user.fullName());





















// const cars = ["BMW", "Black", "Audi", "Subaru"];
// cars.forEach((car, index, array) =>{
//  console.log(car);
// });
