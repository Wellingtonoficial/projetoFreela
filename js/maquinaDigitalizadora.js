

const texDig_home1 = document.getElementById('texDig_home1')
const phrasesP = ['realizar sonhos', 'ganhar dinheiro', 'se desenvolver', 'ter liberdade']
let ip = 0
let jt = 0 
let currentPhraseP = []
let isDeletingP = false
let isEndP = false

function loop3 () {
  isEndP = false
  texDig_home1.innerHTML = currentPhraseP.join('')

  if (ip < phrasesP.length) {

    if (!isDeletingP && jt <= phrasesP[ip].length) {
      currentPhraseP.push(phrasesP[ip][jt])
      jt++
      texDig_home1.innerHTML = currentPhraseP.join('')
    }

    if(isDeletingP && jt <= phrasesP[ip].length) {
      currentPhraseP.pop(phrasesP[ip][jt])
      jt--
      texDig_home1.innerHTML = currentPhraseP.join('')
    }

    if (jt == phrasesP[ip].length) {
      isEndP = true
      isDeletingP = true
    }

    if (isDeletingP && jt === 0) {
      currentPhraseP = []
      isDeletingP = false
      ip++
      if (ip === phrasesP.length) {
        ip = 0
      }
    }
  }
  const spedUp = Math.random() * (80 -50) + 50
  const normalSpeed = Math.random() * (300 -200) + 30
  const time = isEndP ? 2000 : isDeletingP ? spedUp : normalSpeed
  setTimeout(loop3, time)
}

loop3()