const cardChoices= [
    {
        name: 'cheeseburger',
       image: 'cheeseburger.png',
    },
    {
        name: 'fries',
        image: 'fries.png',
    },
    {
        name: 'hotdog',
        image: 'hotdog.png',
    },
    {
        name: 'ice-cream',
      image: 'ice-cream.png'
    },
    {
        name: 'milkshake',
        image: 'milkshake.png',
    },
    {
        name: 'pizza',
        image: 'pizza.png',
    },
    {
        name: 'cheeseburger',
       image: 'cheeseburger.png',
    },
    {
        name: 'fries',
        image: 'fries.png',
    },
    {
        name: 'hotdog',
        image: 'hotdog.png',
    },
    {
        name: 'ice-cream',
      image: 'images/ice-cream.png'
    },
    {
        name: 'milkshake',
        image: 'images/ice-cream.png',
    },
    {
        name: 'pizza',
        image: 'pizza.png',}
    
]
const shuffledCards= cardChoices.sort(() => 0.5 - Math.random())
const gameBody = document.getElementById('gamebody')

const chosenCards=[]


function cardBoard(){
for ( let i=0; i < cardChoices.length; i++)
{
   const cards= document.createElement('img')
   cards.setAttribute('src', 'blank.png')
   cards.setAttribute('data-id', i)
   cards.addEventListener('click', flipCards)
   gameBody.appendChild(cards)
}
}
cardBoard()



function flipCards(){
const cardId= this.getAttriute('data-id')
chosenCards.push(cardChoices[cardId].name)
this.setAttribute('src', cardChoices[cardId].image)
}


const results= document.getElementById('result')
results.textContent=["," ]



function clickCard(){
    if ( shuffledCards[0] === shuffledCards[1]){
return results.textContent= "You won"
    }else{
        return results.textContent= "Try Again"
    }
}