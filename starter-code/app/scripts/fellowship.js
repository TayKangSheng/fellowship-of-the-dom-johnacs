// console.log('Linked.')

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
]

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
]

var lands = ['The Shire', 'Rivendell', 'Mordor']
var body = document.querySelector('body')

// Part 1

function makeMiddleEarth () {
  // create a section tag with an id of middle-earth
  // add each land as an article tag
  // inside each article tag include an h1 with the name of the land
  // append middle-earth to your document body
  var middleEarth = document.createElement('section')
  middleEarth.id = 'middle-earth'

  lands.forEach(function (landName) {
    var land = document.createElement('article')
    var h1 = document.createElement('h1')
    h1.textContent = landName

    land.appendChild(h1)
    middleEarth.appendChild(land)
  })

  body.appendChild(middleEarth)
}

makeMiddleEarth()

// Part 2

function makeHobbits () {
  // display an unordered list of hobbits in the shire (which is the first article tag on the page)
  // give each hobbit a class of hobbit

  var hobbitLand = document.getElementById('middle-earth').firstElementChild
  var ulElement = document.createElement('ul')

  hobbits.forEach(function (hobbit) {
    var liElement = document.createElement('li')
    liElement.textContent = hobbit
    liElement.setAttribute('class', 'hobbit')
    ulElement.appendChild(liElement)
  })
  hobbitLand.appendChild(ulElement)
}

makeHobbits()
// Part 3

function keepItSecretKeepItSafe () {
  // create a div with an id of 'the-ring'
  // give the div a class of 'magic-imbued-jewelry'
  // add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  // add the ring as a child of Frodo
  var divElement = document.createElement('div')
  divElement.id = 'the-ring'
  divElement.setAttribute('class', 'magic-imbued-jewelry')
  divElement.addEventListener('click', nazgulScreech)

  var frodo = document.getElementsByClassName('hobbit')[0]
  frodo.appendChild(divElement)
}

keepItSecretKeepItSafe()
// Part 4

function makeBuddies () {
  // create an aside tag
  // attach an unordered list of the 'buddies' in the aside
  // insert your aside as a child element of rivendell
  var aside = document.createElement('aside')
  var ulElement = document.createElement('ul')
  buddies.forEach(function (buddy) {
    var liElement = document.createElement('li')
    liElement.textContent = buddy
    ulElement.appendChild(liElement)
  })
  aside.appendChild(ulElement)
  var rivendell = document.querySelectorAll('article')[1]
  rivendell.appendChild(aside)
}

makeBuddies()

// Part 5

function beautifulStranger () {
  // change the 'Strider' textnode to 'Aragorn'
  var aside = document.querySelector('aside')
  var liArray = aside.querySelectorAll('li')
  liArray.forEach(function (liElement) {
    if (liElement.textContent === 'Strider') {
      liElement.textContent = 'Aragorn'
    }
  })
}

beautifulStranger()

// Part 6

function leaveTheShire () {
  // assemble the hobbits and move them to Rivendell
  var hobbits = document.querySelectorAll('.hobbit')
  var rivendell = document.querySelector('aside')
  var ulElement = document.createElement('ul')
 // console.log(rivendell)
  // console.log(hobbits)
  hobbits.forEach(function (hobbit) {
  // console.log(hobbit)
    ulElement.appendChild(hobbit)
  })

  rivendell.appendChild(ulElement)
}

leaveTheShire()

// Part 7

function forgeTheFellowShip () {
  // create a new div called 'the-fellowship' within rivendell
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party

  var divElement = document.createElement('div')
  divElement.id = 'the-fellowship'
  var rivendell = document.querySelector('aside')

  var ulElement = document.createElement('ul')
  var hobbits = document.querySelectorAll('li')

  hobbits.forEach(function (hobbit) {
    ulElement.appendChild(hobbit)
  })

  divElement.appendChild(ulElement)
  rivendell.appendChild(divElement)
}

forgeTheFellowShip()

// Part 8

function theBalrog () {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  // apply style to the element
  // make the background 'white', add a grey border
  aside = document.querySelector('aside')
  console.log(aside)
  liArray = aside.querySelectorAll('li')
  liArray.forEach(function (liElement) {
    if (liElement.textContent === 'Gandalf the Grey') {
      liElement.textContent = 'Gandalf the White'
      liElement.style.background = 'white'
      liElement.style.border = 'solid 1px grey'
    }
  })
}

// theBalrog()
// Part 9

function hornOfGondor () {
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  // Remove Boromir from the Fellowship
  alert("Horn of gondor has been blown\noromir's been killed by the Uruk-hai!")
  var aside = document.querySelector('aside')
  liArray = aside.querySelectorAll('li')

  liArray.forEach(function (liElement) {
    if (liElement.textContent === 'Boromir') {
      liElement.style.textDecoration = 'line-through'
    }
  })
}

hornOfGondor()
// Part 10

function findh1InMordor () {

}

function itsDangerousToGoAlone () {
  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor
  var fellowship = document.getElementById('the-fellowship')
  var mordorDiv = document.createElement('div')
  var ulElement = document.createElement('ul')
  var articles = document.querySelectorAll('article')

  mordorDiv.id = 'mount-doom'

  var liArray = fellowship.querySelectorAll('li')

  liArray.forEach(function (liElement) {
    if (liElement.textContent === 'Frodo Baggins' || liElement.textContent === "Samwise \'Sam\' Gamgee") {
      ulElement.appendChild(liElement)
    }
  })
  mordorDiv.appendChild(ulElement)

  articles.forEach(function (article) {
    var h1Array = document.querySelectorAll('h1')
    if (h1Array.length > 0) {
      h1Array.forEach(function (h1Element) {
        if (h1Element.textContent === 'Mordor') {
          article.appendChild(mordorDiv)
        }
      })
    }
  })
}

itsDangerousToGoAlone()

// Part 11

function weWantsIt () {
  // Create a div with an id of 'gollum' and add it to Mordor
  // Remove the ring from Frodo and give it to Gollum
  // Move Gollum into Mount Doom
  var divGollum = document.createElement('div')
  divGollum.id = 'gollum'
  var articles = document.querySelectorAll('article')
  var mountDoom = document.getElementById('mount-doom')

  // give the ring to gollum
  var ringDiv = document.getElementById('the-ring')
  divGollum.appendChild(ringDiv)
  // move to mount-doom
  mountDoom.appendChild(divGollum)
}

weWantsIt()

// Part 12

function thereAndBackAgain () {
  // remove Gollum and the Ring from the document
  // remove all the buddies from the document
  // Move all the hobbits back to the shire
  var articles = document.querySelectorAll('article')
  var mountDoom = document.getElementById('mount-doom')
  var gollum = document.getElementById('gollum')
  var everyOne = document.querySelectorAll('li')

// find the shire h1 tag
  var shire = null
  articles.forEach(function (article) {
    var h1Array = article.querySelectorAll('h1')
    if (h1Array.length > 0) {
      h1Array.forEach(function (h1Element) {
        console.log(h1Element.textContent)
        if (h1Element.textContent === 'The Shire') {
          shire = h1Element.nextSibling
          console.log(shire)
        }
      })
    }
  })

// removes gollum
  mountDoom.removeChild(gollum)

//
  var fellowship = document.getElementById('the-fellowship')
  var ulElement = fellowship.getElementsByTagName('ul')
console.log("ulElement: " + ulElement)
  console.log(everyOne)
  everyOne.forEach(function (me) {
    if (me.className === 'hobbit') {
    // move to shire
      shire.appendChild(me)
    // console.log(me)
    } else {
    // remove buddies
      // console.log('li: ' + me)
    }
  })
}

thereAndBackAgain()
