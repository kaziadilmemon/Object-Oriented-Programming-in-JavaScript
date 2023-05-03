/* Prototypes : JavaScript objects have a special property called prototype that is either null or references another object.

When we try to read a property from a object and its missing, JavaScript automatically takes it from the prototype.This is called "prototype-inheritance" 

Setting Prototype : We can set prototype by setting --prototype Now if we read a property from the object which is not in 
Object and is present in the prototype, JavaScript will take it from prototype */

let a = {
  name2: "Harry",
  language: "JavaScript",
  run: () => {
    alert("self run")
  }
}
console.log(a)


let p = {
  run: () => {
    alert("run")
  }
}

p.__proto__ = {
  name: "Jackie"
}

a.__proto__ = p
a.run()
console.log(a.name)
