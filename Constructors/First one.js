/* The Constructor() method is called automatically by new,so we can Initializing the Object there. */

class RailwayForm {
  constructor(givenname, trainno) {
    console.log("CONSTRUCTOR CALLED..." + givenname + " "  + trainno)
    this.name = givenname
    this.trainno = trainno
  }

  submit() {
    alert(this.name + ": Your form is submitted for train number: " + this.trainno)
  }
  cancel() {
    alert(this.name + ": This form is cancelled for train number: " + this.trainno)
  }
}

// Create & fill a form for Adil
let AdilForm = new RailwayForm("Adil", 145316)
// No need to Fill the form with Adil's details
// AdilForm.fill()

// Create & fill a forms for Asim
let AsimForm = new RailwayForm("Asim", 222420)


 

AdilForm.submit()
AsimForm.submit()
AsimForm.cancel()
