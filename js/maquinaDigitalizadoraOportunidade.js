

const textDigit = document.getElementById('textDigit')
const phrasesF = [' de ganhar dinheiro', 'de transformar vidas', 'de realizar seus sonhos']
let ind = 0
let jp = 0 
let currentPhraseF = []
let isDeletingF = false
let isEndF = false

function looppp () {
  isEndF = false
  textDigit.innerHTML = currentPhraseF.join('')

  if (ind < phrasesF.length) {

    if (!isDeletingF && jp <= phrasesF[ind].length) {
      currentPhraseF.push(phrasesF[ind][jp])
      jp++
      textDigit.innerHTML = currentPhraseF.join('')
    }

    if(isDeletingF && jp <= phrasesF[ind].length) {
      currentPhraseF.pop(phrasesF[ind][jp])
      jp--
      textDigit.innerHTML = currentPhraseF.join('')
    }

    if (jp == phrasesF[ind].length) {
      isEndF = true
      isDeletingF = true
    }

    if (isDeletingF && jp === 0) {
      currentPhraseF = []
      isDeletingF = false
      ind++
      if (ind === phrasesF.length) {
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