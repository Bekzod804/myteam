// var cardbox = document.querySelector('.cardbox');

// cardbox.addEventListener('click', function(evt) {
//   if(evt.target.matches('.card__button')) {
//     evt.target.classList.toggle('card__button--open')
//     evt.srcElement.nextElementSibling.classList.toggle('card__about--open')
//   }
// });


// forEach li varianti //
// var cards = document.querySelectorAll('.card');

// cards.forEach(function(card) {
//   (card.children[3]).addEventListener('click', function(evt) {
  //     evt.target.classList.toggle('card__button--open')
  //     evt.srcElement.nextElementSibling.classList.toggle('card__about--open')
  //   });
  // });


// datalist //
// var cards = document.querySelectorAll('.card');

// cards.forEach(function(card, index) {
//   (card.children[3]).dataset.id = index;
// });


// function sayHello(name) {
//   console.log(name)
// }

// var sayHello = function(name) { console.log(name) }
// var sayHello = (name) => { console.log(name) }

// var a = '10';
// var b = 10;

// if(a !== b) {
//   console.log('ha')
// } else {
//   console.log('yuq')
// }
var burgerElement = document.querySelector(".burger__wrapper");
      burgerElement.addEventListener("click", function (e) {
        e.preventDefault();
        this.classList.toggle("open");
      });


// var hiddenElement = document.querySelectorAll(".blocks");
// hiddenElement.forEach((item) =>{
// item.classList.toggle("visible")
// });
var span = document.querySelectorAll(".span");
// debugger;
function working(evt) {
  span.forEach(item => {
    if (item.dataset.id != evt.dataset.id) {
      item.classList.remove("active")
    }else{
      item.classList.toggle("active")
    }
  });
}
span.forEach((item) => {
  item.addEventListener("click", function (e) {
    working(item)
  })
})

function  call(params) {

  function ask(val) {
    // console.log('par: inner ' + val)
  }

  ask(params)

  // console.log('par: 1 ' + params)
}

call('Salom');

var arr = ['ali', 65, true]

// var aliName = 'Ali'
// var aliAge = 65
// var aliBool = true

// console.log(arr[0])
// console.log(arr[1])

var person = {
  name: 'Ali',
  age: 65
}

// console.log(person.age)
// console.log(person.name)

// String
// Number
// Boolean
// undefined
// null



// test

var allBlocks = document.querySelectorAll('.section5__item')

console.log(allBlocks[0].classList.add('maxsus'));
var blok = {
c
}