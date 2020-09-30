const badWords = [
  'fuck',
  'Fuck',
  'FUCK',
  'shit',
  'Shit',
  'SHIT'
]

chrome.runtime.onMessage.addListener((data, sender) => {
  const { action } = data
  const actions = {
    PARSE: parsePage
  }
  actions[action]()
})

function parsePage() {
  const content = document.querySelectorAll('body *')
  for(let i = 0; i < content.length; i++) {
    const nodes = content[i].childNodes
    for (let j = 0; j < nodes.length; j++) {
      if (nodes[j].nodeType === 3) {
        nodes[j].textContent = nodes[j].textContent.replace(new RegExp(badWords.join('|'), 'g'), 'uwu')
      }
    }
  }
}
