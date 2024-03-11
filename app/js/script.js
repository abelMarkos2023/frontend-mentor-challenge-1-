const hamburgerBtn = document.getElementById('hamburgerBtn');
const header = document.getElementById('header')
const bodyElm = document.getElementById('body')
hamburgerBtn.addEventListener('click',function(){
    header.classList.toggle('open')
    bodyElm.classList.toggle('blcScroll')
})
