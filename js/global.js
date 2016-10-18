/*
    <div class="col-sm-3">
        <img src="http://unsplash.it/200?random">
        <span>Title Goes Here</span>
        <div class="row">
            <div class="col-sm-6 text-muted">
                ElGranero
            </div>
            <div class="col-sm-6 text-right text-success">
                $177.64
            </div>
        </div>
    </div>
*/

function createResultCard(item) {
  var card = document.createElement('div')
  card.classList.add('col-sm-3')

  var image = document.createElement('img')
  image.setAttribute('src', item.image)
  card.appendChild(image)

  var span = document.createElement('span')
  span.innerHTML = item.title
  card.appendChild(span)

  var div1 = document.createElement('div1')
  div1.innerHTML = item.seller
  card.appendChild(div1)

  var div2 = document.createElement('div2')
  div2.innerHTML = item.price
  card.appendChild(div2)

  //var title = document.createElement
  // your code here to build up the card
  // keep in mind you'll be nesting tags

  document.querySelector('#searchResults.row').appendChild(card)
}

createResultCard({
  image: 'http://unsplash.it/200?random',
  title: 'Vintage Board Game Art Wall Home Decor',
  seller: 'franz66',
  price: 15.00
})

createResultCard({
  image: 'http://unsplash.it/200?random',
  title: 'Vintage Board Game Art Wall Home Decor',
  seller: 'franz66',
  price: 15.00
})

createResultCard({
  image: 'http://unsplash.it/200?random',
  title: 'Vintage Board Game Art Wall Home Decor',
  seller: 'franz66',
  price: 15.00
})

createResultCard({
  image: 'http://unsplash.it/200?random',
  title: 'Vintage Board Game Art Wall Home Decor',
  seller: 'franz66',
  price: 15.00
})

createResultCard({
  image: 'http://unsplash.it/200?random',
  title: 'Vintage Board Game Art Wall Home Decor',
  seller: 'franz66',
  price: 15.00
})

createResultCard({
  image: 'http://unsplash.it/200?random',
  title: 'Vintage Board Game Art Wall Home Decor',
  seller: 'franz66',
  price: 15.00
})

createResultCard({
  image: 'http://unsplash.it/200?random',
  title: 'Vintage Board Game Art Wall Home Decor',
  seller: 'franz66',
  price: 15.00
})

createResultCard({
  image: 'http://unsplash.it/200?random',
  title: 'Vintage Board Game Art Wall Home Decor',
  seller: 'franz66',
  price: 15.00
})

createResultCard({
  image: 'http://unsplash.it/200?random',
  title: 'Vintage Board Game Art Wall Home Decor',
  seller: 'franz66',
  price: 15.00
})

createResultCard({
  image: 'http://unsplash.it/200?random',
  title: 'Vintage Board Game Art Wall Home Decor',
  seller: 'franz66',
  price: 15.00
})

createResultCard({
  image: 'http://unsplash.it/200?random',
  title: 'Vintage Board Game Art Wall Home Decor',
  seller: 'franz66',
  price: 15.00
})

createResultCard({
  image: 'http://unsplash.it/200?random',
  title: 'Vintage Board Game Art Wall Home Decor',
  seller: 'franz66',
  price: 15.00
})
