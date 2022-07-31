const root = document.getElementById('root')

const counter = document.createElement('span')
counter.textContent = 0

const increase = document.createElement('button')
increase.innerText = '+'
increase.style.margin = '5px'
increase.addEventListener('click', (event) => {
  counter.innerText = +counter.innerText + 1
})

const decrease = document.createElement('button')
decrease.innerText = '-'
decrease.addEventListener('click', (event) => {
  counter.innerText = +counter.innerText - 1
})

root.appendChild(counter)
root.appendChild(increase)
root.appendChild(decrease)
