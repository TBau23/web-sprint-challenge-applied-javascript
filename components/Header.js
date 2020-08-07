// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {

    const head = document.createElement('div')
    head.classList.add('header')

    const date = document.createElement('span')
    date.classList.add('date')
    date.textContent = 'August 7, 2020'

    const title = document.createElement('h1')
    title.textContent = 'Lambda Times'

    const temp = document.createElement('span')
    temp.classList.add('temp')
    temp.textContent = '98˚'


    head.appendChild(date)
    head.appendChild(title)
    head.appendChild(temp)
    
    return head

}

const headContainer = document.querySelector('.header-container')

headContainer.appendChild(Header())
