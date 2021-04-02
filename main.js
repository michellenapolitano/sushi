let button = document.querySelector('start');
let container = document.querySelector('#container');
let sauce1 = document.querySelector('#sauce1');
let sauce2 = document.querySelector('#sauce2');
let sauce3 = document.querySelector('#sauce3');
let sauce4 = document.querySelector('#sauce4');
let sauce5 = document.querySelector('#sauce5');
let textCountId = document.querySelector('#textCountId');
let removeId = document.querySelector('#removeId');
start.addEventListener('click', function(event) {
	let image = document.createElement('img');
	image.classList.add('new-content');
	image.src = './sushi.png';
	image.style.left = (80 * Math.random()) + '%';
	image.style.top = (70 * Math.random()) + '%';
	container.appendChild(image);
	var counter = document.querySelectorAll('.new-content');
	var counterText = counter.length + ' item';
	if (counter.length > 1) {
		counterText += 's';
	}
	textCountId.innerHTML = counterText;
});
container.addEventListener('click', function(event) {
	if (event.target.classList.contains('new-content') ) {
		event.target.remove();
	}
	var counter = document.querySelectorAll('.new-content');
	var counterText = counter.length + ' item';
	if (counter.length > 1) {
		counterText += 's';
	}
	textCountId.innerHTML = counterText;
});
container.addEventListener('click', function(event) {
  var target = event.target;
  if (target.classList.contains('swatch')) {
    var color = getComputedStyle(target)['backgroundColor'];
    var boxes = document.querySelectorAll('.new-content');

    boxes.forEach(function(box) {
      box.style.backgroundColor = color;
    });
  }
});
removeId.addEventListener('click', function(event) {
	var boxes = document.querySelectorAll('.new-content');
	boxes.forEach(function(box) {
		box.remove();
	})
});
