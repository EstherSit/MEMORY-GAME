const cardChoices= [
    {
        name: 'cheeseburger',
       img: 'cheeseburger.png',
    },
    {
        name: 'fries',
        img: 'fries.png',
    },
    {
        name: 'hotdog',
        img: 'hotdog.png',
    },
    {
        name: 'ice-cream',
      img: 'ice-cream.png'
    },
    {
        name: 'milkshake',
        img: 'milkshake.png',
    },
    {
        name: 'pizza',
        img: 'pizza.png',
    },
    {
        name: 'cheeseburger',
       img: 'cheeseburger.png',
    },
    {
        name: 'fries',
        img: 'fries.png',
    },
    {
        name: 'hotdog',
        img: 'hotdog.png',
    },
    {
        name: 'ice-cream',
      img: 'ice-cream.png',
    },
    {
        name: 'milkshake',
        img: 'milkshake.png',
    },
    {
        name: 'pizza',
        img: 'pizza.png',
    }
    
]
cardChoices.sort(() => 0.5 - Math.random())
const gameBody = document.querySelector('#gamebody')

const chosenCards=[]
const cardsChosenId= []
const cardsWon= []


function cardBoard(){
for ( let i=0; i < cardChoices.length; i++)
{
   const card= document.createElement('img')
   card.setAttribute('src', 'blank.png')
   card.setAttribute('data-id', i)
   card.addEventListener('click', flipCards)
   gameBody.appendChild(card)
}
}
cardBoard()

function checkMatch(){
const cards= document.querySelectorAll('img')
if (chosenCards[0] === chosenCards[1]){
    alert("You got a match!")

    cards[cardsChosenId[0]].setAttribute('src', 'white.png')
    cards[cardsChosenId[1]].setAttribute('src', 'white.png')
    cards[cardsChosenId[0]].removeEventListener('click', flipCards)
    cards[cardsChosenId[1]].removeEventListener('click', flipCards)
    cardsWon.push(chosenCards)
}
}




function flipCards(){
    const cardId= this.getAttribute('data-id')
    chosenCards.push(cardChoices[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardChoices[cardId].img)
    
    if (chosenCards.length === 2){
        setTimeout(checkMatch, 200)
    }


    }

