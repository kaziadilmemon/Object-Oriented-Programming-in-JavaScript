class RailwayForm {
  constructor(givenname, trainno, address) {
    console.log("CONSTRUCTOR CALLED..." + givenname + " " + trainno)
    this.name = givenname
    this.trainno = trainno
    this.address = address
  }

  preview() {
    alert(this.name + ": Your form is for Train number: " + this.trainno + " and your address is " + this.address)
  }

  submit() {
    alert(this.name + ": Your form is submitted for train number: " + this.trainno)
  }

  cancel() {
    alert(this.name + ": This form is cancelled for train number: " + this.trainno)
    this.trainno = 0
  }
}

let AdilForm = new RailwayForm("Adil", 13488, "House No :20 ,street no 3, AlphaTower Lahore")
harryForm.preview()
harryForm.submit()
harryForm.cancel()
harryForm.preview()
