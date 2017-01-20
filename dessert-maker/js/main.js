console.info('Welcome to the dessert maker v1.0.');

var currentFruit = null;
var currentDessert = null;

var images = {
  fruits: {
    apple: 'img/Apple.jpg',
    orange: 'img/Orange.jpg',
    banana: 'img/Banana.jpg'
  },
  desserts: {
    icecream: 'img/IceCream.jpg',
    cake: 'img/Cake.jpg',
    pie: 'img/Pie.jpg'
  },
  mixes: {
    apple: {
      icecream: 'img/AppleIceCream.jpg',
      cake: 'img/AppleCake.jpg',
      pie: 'img/ApplePie.jpg'
    },
    orange: {
      icecream: 'img/OrangeIceCream.jpg',
      cake: 'img/OrangeCake.jpg',
      pie: 'img/OrangePie.jpg'
    },
    banana: {
      icecream: 'img/BananaIceCream.jpeg',
      cake: 'img/BananaCake.jpg',
      pie: 'img/BananaPie.jpg'
    }
  }
};

/*
Bugs

img/BananaIceCream is a .jpeg, not a .jpg
the class for pie is 'Dessert Dessert--smoothie' instead of 'Dessert Dessert--pie'
*/

var selectors = document.querySelector('.Selectors');
selectors.addEventListener('click', function (e) {
  type = e.target.classList[0]; // type = fruit or dessert ingredient
  typeString = (type + 's').toLowerCase(); // so that it works with the images array
  ingredient = (e.target.className.split('--')[1]); // get class name from div and split

  var holder = document.querySelector('.Holder.Holder--' + type.toLowerCase()); // select div to put image in
  holder.innerHTML = '<img src="' + images[typeString][ingredient] + '" alt="' + ingredient + '" >';
  displayDessert(); // display the corresponding dessert
});

function displayDessert() {
  var fruitDiv = document.querySelector('.Holder.Holder--fruit');
  var dessertDiv = document.querySelector('.Holder.Holder--dessert');

  if (fruitDiv.innerHTML.includes('img') && dessertDiv.innerHTML.includes('img')) { // only display if fruit and dessert chosen
    var holder = document.querySelector('.Holder.Holder--result');
    fruit = fruitDiv.getElementsByTagName('img')[0].alt;
    dessert = dessertDiv.getElementsByTagName('img')[0].alt;
    holder.innerHTML = '<img src="' + images.mixes[fruit][dessert] + '" alt="' + fruit + dessert + '" >';
  }
}

var resetButton = document.querySelector('.Reset');
resetButton.addEventListener('click', function (e) {
  document.querySelector('.Holder.Holder--fruit').innerHTML = "";
  document.querySelector('.Holder.Holder--dessert').innerHTML = "";
  document.querySelector('.Holder.Holder--result').innerHTML = "";
});