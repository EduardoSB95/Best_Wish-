var app = angular.module('App', ['ngRoute', 'firebase', 'ngMap']);

app.config(function ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'templates/home.html',
      controller: 'FirstController'
    })

    .when('/sign-up', {
      templateUrl: 'templates/sign-up.html',
      controller: 'SignUpController'
    })
    .when('/login', {
      templateUrl: 'templates/login.html',
      controller: 'LoginController'
    })
    // Added code for contact
    .when('/contact', {
      templateUrl: 'templates/contact.html',
      controller: 'ContactController'
    })

    .when('/items', {
      templateUrl: 'templates/items.html',
      controller: 'itemsController'
    });
});

/* Product listing */
var cameras = [
  {
    product: 'Sony A7 III',
    info:
      'Info. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam reiciendis',
    price: '22.990kr',
    image: 'https://picsum.photos/170/88/?random'
  },
  {
    product: 'Nikon D850',
    info:
      'Info. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam reiciendis',
    price: '32.990kr',
    image: 'https://picsum.photos/170/88/?random'
  },
  {
    product: 'Panasonic G80',
    info:
      'Info. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam reiciendis',
    price: '9.490kr',
    image: 'https://picsum.photos/170/88/?random'
  },
  {
    product: 'Lumix G85',
    info:
      'Info. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam reiciendis',
    price: '11.490kr',
    image: 'https://picsum.photos/170/88/?random'
  }
];
var computers = [
  {
    product: 'HP',
    info:
      'Info. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam reiciendis',
    price: '22.990kr',
    image: 'https://picsum.photos/170/88/?random'
  },
  {
    product: 'Dell',
    info:
      'Info. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam reiciendis',
    price: 'Acer',
    image: 'https://picsum.photos/170/88/?random'
  },
  {
    product: 'photos',
    info:
      'Info. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam reiciendis',
    price: '9.490kr',
    image: 'https://picsum.photos/200/300/?random'
  },
  {
    product: 'Apple',
    info:
      'Info. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam reiciendis',
    price: '11.490kr',
    image: 'https://picsum.photos/170/88/?random'
  }
];

for (let i = 0; i < cameras.length; i++) {
  $('#product_container1').append(
    '<div class="item"><div class="image"><img id="product_image" src="' +
    cameras[i].image +
    '" alt="Something went wrong"></div><div class="text"><p class="name">' +
    cameras[i].product +
    '<span class="span1">' +
    cameras[i].price +
    '</span></p><p class="info">' +
    cameras[i].info +
    '</p></div><div class="btn"><a href="#">Buy</a></div></div>'
  );
}

for (let i = 0; i < computers.length; i++) {
  $('#product_container2').append(
    '<div class="item"><div class="image"><img id="product_image" src="' +
    computers[i].image +
    '" alt="Something went wrong"></div><div class="text"><p class="name">' +
    computers[i].product +
    '<span class="span1">' +
    cameras[i].price +
    '</span></p><p class="info">' +
    computers[i].info +
    '</p></div><div class="btn"><a href="#">Buy</a></div></div>'
  );
}
for (let i = 0; i < products.length; i++) {
  $('#product_container3').append(
    '<div class="item"><div class="image"><img id="product_image" src="' +
    products[i].image +
    '" alt="Something went wrong"></div><div class="text"><p class="name">' +
    products[i].product +
    '<span class="span1">' +
    cameras[i].price +
    '</span></p><p class="info">' +
    products[i].info +
    '</p></div><div class="btn"><a href="#">Buy</a></div></div>'
  );
}
for (let i = 0; i < products.length; i++) {
  $('#product_container4').append(
    '<div class="item"><div class="image"><img id="product_image" src="' +
    products[i].image +
    '" alt="Something went wrong"></div><div class="text"><p class="name">' +
    products[i].product +
    '<span class="span1">' +
    cameras[i].price +
    '</span></p><p class="info">' +
    products[i].info +
    '</p></div><div class="btn"><a href="#">Buy</a></div></div>'
  );
}
for (let i = 0; i < products.length; i++) {
  $('#product_container5').append(
    '<div class="item"><div class="image"><img id="product_image" src="' +
    products[i].image +
    '" alt="Something went wrong"></div><div class="text"><p class="name">' +
    products[i].product +
    '<span class="span1">' +
    cameras[i].price +
    '</span></p><p class="info">' +
    products[i].info +
    '</p></div><div class="btn"><a href="#">Buy</a></div></div>'
  );
}

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById('myTopnav');
  if (x.className === 'topnav') {
    x.className += ' responsive';
  } else {
    x.className = 'topnav';
  }
}
