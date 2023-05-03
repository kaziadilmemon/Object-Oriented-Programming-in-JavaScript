/* Classes & Objects : In object-Oriented Programming, a class is an extensible program-code template for creating objects, providing initial values for 
state (member variables) and implementation  of behaviour member functions. */

class RailwayForm {
  submit() {
    alert(this.name + ": Your form is submitted for train number: " + this.trainno)
  }
  cancel() {
    alert(this.name + ": This form is cancelled for train number: " + this.trainno)
  }
  fill(givenname, trainno) {
    this.name = givenname
    this.trainno = trainno
  }
}

// Create a form for Adil
let AdilForm = new RailwayForm()
// Fill the form with Harry's details
AdilForm.fill("Adil", 145316)

// Create a forms for Asim
let AsimForm = new RailwayForm()

// Fill the forms with Rohan's details
AsimForm.fill("Asim", 222420)


AdilForm.submit()
AsimForm.submit()
AsimForm.cancel()
