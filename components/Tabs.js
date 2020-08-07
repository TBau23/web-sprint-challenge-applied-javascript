// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-api.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element

axios.get('https://lambda-times-api.herokuapp.com/topics')
    .then(response => {
        const topicsArr = response.data.topics
        const topicsDiv = document.querySelector('.topics')
        topicsArr.forEach(topic => {
            topicsDiv.appendChild(tabCreator(topic))
        });
    })
    .catch(error => {
        debugger
    })


function tabCreator(topicData) {
    
    const tab = document.createElement('div')
    tab.classList.add('tab')
    tab.textContent = topicData

    tab.addEventListener('click', event => {

        axios.get('https://lambda-times-api.herokuapp.com/articles')
            .then(response => {
                debugger
                const selection = response.data.articles[topicData]
                const cardContainer = document.querySelector('.cards-container')
                selection.forEach(item => {
                    cardContainer.appendChild(articleCreator(item))
                })
            })
            .catch(error => {
                debugger
            })
        })
    
    return tab
}

function articleCreator(articleObj) {

    const card = document.createElement('div')
    card.classList.add('card')

    const headline = document.createElement('div')
    headline.classList.add('headline')
    headline.textContent = articleObj.headline

    const authorDiv = document.createElement('div')
    authorDiv.classList.add('author')

    const imgContainer = document.createElement('div')
    imgContainer.classList.add('img-container')

    const authorImg = document.createElement('img')
    authorImg.src = articleObj.authorPhoto

    const authorNombre = document.createElement('span')
    authorNombre.textContent = `By ${articleObj.authorName}`

    card.appendChild(headline)    
    card.appendChild(authorDiv)
    authorDiv.appendChild(imgContainer)
    authorDiv.appendChild(authorNombre)
    imgContainer.appendChild(authorImg)

    card.addEventListener('click', event => {
        console.log(headline.textContent)
    })

    return card

}