const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const bgColor = document.querySelector('.bg-color')
const color = document.querySelector('.color')
const btn = document.querySelector('#btn')


btn.addEventListener('click',(e)=>{
    e.preventDefault();
    const random = Math.floor(Math.random()*4)
    document.body.style.backgroundColor = colors[random]
    color.textContent = colors[random]

    // console.log('button clicked');
    // console.log(color);
    // console.log(random);
})