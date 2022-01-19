let one = document.querySelector('.one')
let two = document.querySelector('.two')
let diference = document.querySelector('h2')


function countingPointMutations(dna1,dna2){
  dna1.split('').forEach(i=>{
    let div = document.createElement('div')
    div.classList.add('cell')
    div.classList.add(i)
    div.title = i
    div.innerText=i
    one.appendChild(div)
  })
  dna2.split('').forEach(i=>{
    let div = document.createElement('div')
    div.classList.add('cell')
    div.classList.add(i)
    div.title = i
    div.innerText=i
    two.appendChild(div)
  })
  let diferences=0;
  for(let i=0; i < dna1.length; i++){
    if(dna1[i]!==dna2[i]){
      diferences++
    }
  }
  diference.innerText = diferences

  console.log(diferences)
}





countingPointMutations('GAGCCTACTAACGGGAT','CATCGTAATGACGGCCT')