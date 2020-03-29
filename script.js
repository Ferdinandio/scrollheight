let box = document.querySelector('.box'),
		btn = document.querySelector('button');

let width = box.clientWidth;
let height = box.clientHeight;

// let width = box.offsetWidth;
// let height = box.offsetHeight;

// let width = box.clientWidth;
// let height = box.clientHeight;

console.log(width, height);
console.log(box.getBoundingClientRect().left);

console.log(document.documentElement.clientWidth);
console.log(document.documentElement.clientHeight);


// btn.addEventListener('click', function() {
// 	box.style.height = box.scrollHeight + '.999px';
// 	box.scrollHeight = 1500;                             // scrollHeight (scrollWidth)  неизменен !!!
// 	console.log(height);	
// });


btn.addEventListener('click', function() {
	box.scrollTop = 0;
});


scrollBy(x, y);

scrollTo(x, y);