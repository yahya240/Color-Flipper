const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];


const btn = document.querySelector('#btn')
const color = document.querySelector('.color')

btn.addEventListener('click',(e)=>{
    e.preventDefault();

    let arr = [];

    for(let i=0;i<6;i++){
        arr.push(hex[random()])
    }
    
    // console.log(`#${arr.join('')}`);
    
    const hexColor = `#${arr.join('')}`;
    
    document.body.style.backgroundColor = hexColor;
    color.textContent = hexColor
})

const random = ()=>{
    return Math.floor(Math.random()*hex.length)
}