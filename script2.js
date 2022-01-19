let one = document.querySelector('.one')
let two = document.querySelector('.two')


function transcribingDNAintoRNA(DNA) {
  DNA.split('').forEach(i=>{
    let div = document.createElement('div')
    div.classList.add('cell')
    div.classList.add(i)
    div.title = i
    div.innerText=i
    one.appendChild(div)
  })
  let RNA = ''
  for (let i = 0; i < DNA.length; i++) {
    if (DNA[i] == 'T') {
      RNA += 'U'
    } else {
      RNA += DNA[i]
    }
  }
  RNA.split('').forEach(i=>{
    let div = document.createElement('div')
    div.classList.add('cell')
    div.classList.add(i)
    div.title = i
    div.innerText=i
    two.appendChild(div)
  })
  //console.log(RNA == test)
  console.log(RNA)
}

transcribingDNAintoRNA('GATGGAACTTGACTACGTAAATT')