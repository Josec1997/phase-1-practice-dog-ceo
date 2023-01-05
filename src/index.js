console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

fetch (imgUrl)
    .then(res => res.json())
     .then(data => console.log(data))
