console.log('hello!');


class CoffeMachine {
  constructor(maker) {
    this.maker = maker;
  }
  // whater Heater()
  waterHeater() {
    
    coffeeAnimate(" The Water is Heating..","130px","visible","visible")

    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Water is Heated!');
        coffeeAnimate(" The Water has Heated.","110px","visible","visible")
      }, 3000);
    })

    promise.then(( message ) => {
       console.log(message);
    })
  }
  // GrindCoffe
  grindCoffe() {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.maker+' Coffee is Ground!');
        coffeeAnimate(" Coffee is Ground.","80px","visible","visible")
      }, 4000);
    })

    promise.then(( message ) => {
       console.log(message);
      })

  }


  brewCoffee() {

    var foam = document.querySelector(".foam-line");
    foam.style.visibility = "hidden";
    var foam = document.querySelector(".coffee");
    foam.style.visibility = "hidden";

    const promise = new Promise((resolve, reject) => {
    this.waterHeater();
    this.grindCoffe();

    setTimeout(() => {
      console.log('Your '+this.maker+' Coffee is READY!');
      coffeeAnimate(" Coffee is Ready!","40px","visible","visible")
    }, 6000);
  });

  promise.then(( message ) => {
    console.log(message);
   });

  }



  coffeeAnimate(message,progess,visable,visable){
    document.getElementById("message").innerHTML = this.maker+message;
    var foam = document.querySelector(".foam-line");
    foam.style.height = progess;
    foam.style.visibility = visable;
    var foam = document.querySelector(".coffee");
    foam.style.visibility = visable;
  }



}

function brewCoffeeClick(maker) {
  const coffeMaker = new CoffeMachine(maker);
  console.log(coffeMaker);
  coffeMaker.brewCoffee();  
}



