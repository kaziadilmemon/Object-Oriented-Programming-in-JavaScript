/* Method Overriding: If we create our own implementaton of run,it will not be taken from the Animal class. This is called Method Overriding.

Super Keyword : When we override a method, we don't want method of the previous class to go in vain. We can execute it using super Keyword.

super(a,b)
*/

class Employee {
  constructor(name) {
    console.log(`${name} - Employee's constructor is here`)
    this.name = name
  }
  login() {
    console.log(`Employee has logged in`);
  }

  logout() {
    console.log(`Employee has logged out`);
  }

  requestLeaves(leaves) {
    console.log(`Employee has requested ${leaves} leaves - Auto approved`)
  }
}

class Programmer extends Employee {
  constructor(name) {
    super(name)
    console.log(`This is a newly written constructor`)
  }
  // constructor(...args){ ---> If there is no constructor in the child class, this is created automatically
  //   super(...args)
  // }
  requestCoffee(x) {
    console.log(`Employee has requested ${x} coffees`)
  }
  requestLeaves(leaves) {
    super.requestLeaves(4)
    console.log("One extra is granted")
    // console.log(`Employee has requested ${leaves + 1} leaves (One extra)`)

  }
}

let e = new Programmer("Asim")
e.login()
e.requestLeaves(3)
