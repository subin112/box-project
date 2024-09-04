const boxOne = document.querySelector('.box-one')
const boxTwo = document.querySelector('.box-two')
const boxThree = document.querySelector('.box-three')
const numbers = document.querySelectorAll('.number')
const nums = document.querySelector('.nums')
const numNums = document.querySelectorAll('.numNums')
const boxs = document.querySelectorAll('.box')

numbers.forEach(item =>{
    item.addEventListener('click',()=>{

        const num = document.createElement('div')
        num.classList.add('num')
        num.innerText = item.innerText

        nums.append(num)

        item.style.display = 'none'
    })
})

let firstBoxClicked = null

function moveUpperElement(from, to){

    const topEl = from.querySelector('.num')

    if(topEl){
        to.append(topEl)
    }
}

boxs.forEach(box =>{
    box.addEventListener('click', (event)=>{

        const boxClicked = event.currentTarget;

        if(firstBoxClicked){
            moveUpperElement(firstBoxClicked, boxClicked)

            firstBoxClicked = null
        } 
        else{
            firstBoxClicked = boxClicked;
        }

    })      
})
