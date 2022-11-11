

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

hoverImage();