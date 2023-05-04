/* static method : static methods are used to implement function that belong to a class as a whole and not to any particular object. static methods aren't available for individual objects.

Getters & Setters : classes may include getters and setters to get & set the computed properties. 

Instance of Operator : The instance of operator allow to check whether an object belongs to a certain class. It returns true if obj belongs to the class or any other class inheriting from it 

*/

class Animal {
  constructor(name) {
    this.name = Animal.capitalize(name)
  }
  walk() {
    alert("Animal " + this.name + " is walking")
  }
  static capitalize(name) {
    return name.charAt(0).toUpperCase() + name.substr(1, name.length)
  }
}

j = new Animal("jack")
j.walk()
// console.log(j.capitalize("thisa")) // --- > this doesnt work
