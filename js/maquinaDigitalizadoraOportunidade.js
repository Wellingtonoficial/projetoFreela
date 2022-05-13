

const textDigit = document.getElementById('textDigit')
const phrases = [' de ganhar dinheiro', 'de transformar vidas', 'de realizar seus sonhos']
let ind = 0
let jp = 0 
let currentPhraseF = []
let isDeletingF = false
let isEndF = false

function looppp () {
  isEndF = false
  textDigit.innerHTML = currentPhraseF.join('')

  if (ind < phrases.length) {

    if (!isDeletingF && jp <= phrases[ind].length) {
      currentPhraseF.push(phrases[ind][jp])
      jp++
      textDigit.innerHTML = currentPhraseF.join('')
    }

    if(isDeletingF && jp <= phrases[ind].length) {
      currentPhraseF.pop(phrases[ind][jp])
      jp--
      textDigit.innerHTML = currentPhraseF.join('')
    }

    if (jp == phrases[ind].length) {
      isEndF = true
      isDeletingF = true
    }

    if (isDeletingF && jp === 0) {
      currentPhraseF = []
      isDeletingF = false
      ind++
      if (ind === phrases.length) {
        ind = 0
      }
    }
  }
  const spedUpF = Math.random() * (80 -50) + 50
  const normalSpeedF = Math.random() * (300 -200) + 20
  const timeF = isEndF ? 2000 : isDeletingF ? spedUpF : normalSpeedF
  setTimeout(looppp, timeF)
}

looppp()