// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.



axios.get('https://lambda-times-api.herokuapp.com/articles')
    .then(response => {
        const categories = Object.keys(response.data.articles)
        console.log(categories)
        const cardContainer = document.querySelector('.cards-container')
        categories.forEach(category => {
            const categoryCollection = response.data.articles[`${category}`]
            categoryCollection.forEach(topic => {
                cardContainer.appendChild(articleCreator(topic))
            })
        });
    })
    .catch(error => {
        debugger
    })


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

