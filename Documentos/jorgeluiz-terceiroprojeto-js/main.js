let imagesList = [
"https://cdn.pixabay.com/photo/2017/01/23/09/21/learn-2001838_960_720.jpg",
'assets/imag02terceiroprojeto',
'assets/imag03terceiroprojeto',
'assets/imag04terceiroprojeto'
]

let counter=0

let left=document.getElementById('left')
let img=document.getElementById('img')
let right=document.getElementById('right')

left.addEventListener('click', function(){
	if (counter > 0) {
		counter = counter - 1;
	}else {counter = 3}
	img.setAttribute('src', imagesList[counter]);
})

right.addEventListener('click', function(){
	if (counter < 3) {
		counter = counter + 1;
	}else {counter = 0}
	img.setAttribute('src', imagesList[counter]);
})

