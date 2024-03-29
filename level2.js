document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: '1',
      img: 'No, I haven´t'
    },
    {
      name: '1',
      img: "Non je n'ai pas."
    },
    {
      name: '2',
      img: 'The sun is shining and it´s warm.'
    },
    {
      name: '2',
      img: "Le soleil brille et il fait chaud."
    },
    {
      name: '3',
      img: 'What would you like to do?'
    },
    {
      name: '3',
      img: "Qu'est-ce que tu aimerais faire?"
    },
    {
      name: '4',
      img: 'I would like to go out.'
    },
    {
      name: '4',
      img: "J'aimerais sortir."
    },
    {
      name: '5',
      img: 'Excuse me, who are you?'
    },
    {
      name: '5',
      img: "Excusez-moi, qui êtes-vous?"
    },
    {
      name: '6',
      img: 'Hello, my name is Tom.'
    },
    {
      name: '6',
      img: "Bonjour, je m'appelle Tom."
    },
    {
      name: '7',
      img: 'Is Tom a good friend?'
    },
    {
      name: '7',
      img: "Est-ce que Tom est un bon ami ?"
    },
    {
      name: '8',
      img: 'No, he is not.'
    },
    {
      name: '8',
      img: "Non, ce n'est pas le cas."
    },
    {
      name: '9',
      img: 'That tall boy is my friend.'
    },
    {
      name: '9',
      img: "Ce grand garçon est mon ami."
    },
    {
      name: '10',
      img: 'Come here and sit down.'
    },
    {
      name: '10',
      img: "Viens ici et assieds-toi."
    },
    {
      name: '11',
      img: 'Michelle, lend me your pen, please.'
    },
    {
      name: '11',
      img: "Misha, s'il te plaît, prête-moi ton stylo."
    },
    {
      name: '12',
      img: 'Let´s play with a ball.'
    },
    {
      name: '12',
      img: 'Jouons au ballon.'
    }
  ]

  cardArray.sort(() => 0.5 - Math.random())

  const grid = document.querySelector('.grid')
  const resultDisplay = document.querySelector('#result')
  let cardsChosen = []
  let cardsChosenId = []
  let cardsWon = []

  //create your board
  /* function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      const cardd = document.createElement('div')
      const card = document.createElement('img')
      card.setAttribute('src', 'images/blank.png')

      const cardtext = document.createElement('h5')
      cardtext.textContent = i+1
      card.setAttribute('data-id', i)
      card.addEventListener('click', flipCard)
      cardd.appendChild(card)
      grid.appendChild(cardd)
      cardd.appendChild(cardtext)
    }
  } */


  function createBoard() {
    cardArray.forEach (function (item, i ) {
      const cardd = document.createElement('div')
      cardd.setAttribute('class', "box")
      const card = document.createElement('img')
      card.setAttribute('src', 'images/blank.png')

      const cardtext = document.createElement('h5')
      cardtext.textContent = item.img
      cardd.setAttribute('data-id', i)
      cardd.addEventListener('click', flipCard)
      cardd.appendChild(card)
      grid.appendChild(cardd)
      cardd.appendChild(cardtext)
    })
  }  

  //check for matches
  function checkForMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    
     if(optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute('src', 'images/blank.png')
      cards[optionTwoId].setAttribute('src', 'images/blank.png')

cards[optionOneId].parentElement.classList.remove("green")
      

      

      alert('You have clicked the same image!')
    }
    else if (cardsChosen[0] === cardsChosen[1]) {
      var audio = new Audio ("images/sound.mp3")
audio.play();
      // alert('You found a match')
      cards[optionOneId].setAttribute('src', 'images/white.png')
      cards[optionTwoId].setAttribute('src', 'images/white.png')
      cards[optionOneId].removeEventListener('click', flipCard)
      cards[optionTwoId].removeEventListener('click', flipCard)
      cardsWon.push(cardsChosen)
      cards[optionOneId].parentElement.setAttribute('class', 'hide')
      cards[optionTwoId].parentElement.setAttribute('class', 'hide')

    } else {
      cards[optionOneId].setAttribute('src', 'images/blank.png')
      cards[optionTwoId].setAttribute('src', 'images/blank.png')
      cards[optionOneId].parentElement.classList.remove("green")
      cards[optionTwoId].parentElement.classList.remove("green")
      var audio1 = new Audio ("images/nothing.mp3")
audio1.play();
      // alert('Sorry, try again')
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length 
    if  (cardsWon.length === cardArray.length/2) {
      resultDisplay.innerHTML = ' <h1>Congratulations! You found them all!</h1><h2>Level 2 completed!</h2><a href="https://elaidina.github.io/fra1/level3.html"> Continue to Level 3</a>'


      var audio3 = new Audio ("images/end.mp3")
audio3.play();
    }
  }

  //flip your card
  function flipCard() {
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    
    this.classList.add("green")
    if (cardsChosen.length ===2) {
      setTimeout(checkForMatch, 500)
    }
    
  }

  createBoard()
})
