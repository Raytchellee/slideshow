var images = [
    './images/Amsterdam.jpg',
    './images/China.jpg',
    './images/Colombia.jpg',
    './images/Japan.jpg',
    './images/Oman.jpg',
    './images/Thailand.jpg'    
]

var imgCaption = [
    'Amsterdam',
    'China',
    'Colombia',
    'Japan',
    'Oman',
    'Thailand'    
]

var index = 0;

var imageElem = document.getElementById('image');
imageElem.setAttribute("src", images[index]);
var caption = document.getElementById('caption-text');
var pageNumber = document.getElementById('img-number');
pageNumber.innerHTML = `${index+1}/6`

function hoverImage(){
    var getArrowBtn = document.getElementsByClassName('btn');
    var getImage = document.getElementById('wrapper')
    getImage.addEventListener("mouseover",()=>{
        console.log('mouseover')
        getArrowBtn[0].style.display = 'flex'
    })
    getImage.addEventListener("mouseout",()=>{
        console.log('mouseout')
        getArrowBtn[0].style.display = 'none'
    })
}

function prev(){
    if(index == 0){
        index = images.length -1;
    }else{
        index--;
    }
    imageElem.setAttribute('src', images[index]);
    caption.innerHTML = imgCaption[index];
    pageNumber.innerHTML = `${index+1}/6`
}

function next(){
    if(index == images.length -1){
        index = 0;
    }else{
        index++;
    }
    imageElem.setAttribute('src', images[index]);
    caption.innerHTML = imgCaption[index];
    pageNumber.innerHTML = `${index+1}/6`
}

hoverImage();