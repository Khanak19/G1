class Form{
    constructor(){
        this.button1 = createButton('SIGN IN');
        this.button2 = createButton('SIGN UP');
        this.button3 = createButton('GUEST');
        this.title = createElement('h1')
        this.email = createInput('Email id')
        this.phoneno = createInput('Phone No')
        this.age = createInput('Age')
              this.name = createInput('Name')
        this.greeting = createElement('h2')

    }
    display(){
      
this.title.html("RELAX-O-METER")
this.title.position(displayWidth/2,0)
this.button1.position(displayWidth/2+100,displayHeight/2)
this.button2.position(displayWidth/2+100,displayHeight/2+50)
this.button3.position(displayWidth/2+100,displayHeight/2+100)

//SIGN UP
this.button2.mousePressed(()=>{
    this.button1.hide();
    this.button2.hide();
    this.button3.hide();
    this.name.position(displayWidth/2,displayHeight-500);
    this.email.position(displayWidth/2,displayHeight-450);
    this.phoneno.position(displayWidth/2,displayHeight-400);
    this.age.position(displayWidth/2,displayHeight-350);
      var submit = createButton('SUBMIT')
    submit.position(displayWidth/2,displayHeight-200)
    submit.mousePressed(()=>{
        var username = this.name.value();

      this.name.hide();
        this.email.hide();
        this.phoneno.hide();
        this.age.hide();
        submit.hide();
        this.greeting.html("Hello! " + username +  " Welcome to RELAX-0-METER")
        this.greeting.position(displayWidth/2,displayHeight/2)
       
    })

})

//SIGN IN
this.button1.mousePressed(()=>{
    this.button1.hide();
    this.button2.hide();
    this.button3.hide();
   
    var name = createInput("Name")
    var password = createInput("Password")
    name.position(displayWidth/2,displayHeight/2)
    password.position(displayWidth/2,displayHeight/2+50)
    var submit = createButton('SUBMIT')
    submit.position(displayWidth/2,displayHeight/2+150)
    submit.mousePressed(()=>{
        var username = name.value();

        name.hide();
        password.hide();
        submit.hide();
        this.greeting.html("Hello! " + username +  " Welcome Back")
        this.greeting.position(displayWidth/2,displayHeight/2)
       var cont= createButton('CONTINUE')
       cont.position(displayWidth/2,displayHeight/2+100)
       cont.mousePressed(()=>{
      gameState=1
       })

    })
})
//GUEST
this.button3.mousePressed(()=>{
    this.button1.hide();
    this.button2.hide();
    this.button3.hide();
    this.greeting.html('Hello Guest! Welcome to RELAX-O-METER')
    this.greeting.position(displayWidth/2,displayHeight/2)
    
})
    }
}