function Mail(subj, msg) {
    this.subject = subj
    this.message = msg
  }
  
 
  // Type your code below this line!
  
  const newMail = new Mail( 

   )

newMail.message= "world"
newMail.subject= "hello"
  
  // Type your code above this line!
  
  console.log(newMail.subject + ": " + newMail.message)