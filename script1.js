let container = document.querySelector('.flex')

function countingDNANucleotides(str) {
  str.split('').forEach(i=>{
    let div = document.createElement('div')
    div.classList.add('cell')
    div.classList.add(i)
    div.title = i
    div.innerText=i
    container.appendChild(div)


  })
  let obj = {
    A: 0,
    C: 0,
    G: 0,
    T: 0,
  }
  for (let i = 0; i < str.length; i++) {
    obj[str[i]]++
  }

  Object.entries(obj).forEach(([key,value])=>{
    let p = document.createElement('p')
    p.classList.add('flex')
    for(let i=0; i < value; i++){
      let div = document.createElement('div')
      div.classList.add('cell')
      div.classList.add(key)
      div.title = i
      p.appendChild(div)
      

    }
    let num = document.createElement('div')
    num.innerText = value;
    p.appendChild(num)
    document.body.append(p)
  })


  let result = Object.values(obj).join(' ')
  console.log(result)
}

countingDNANucleotides('AGCTTTTCATTCTGACTGCAACGGGCAATATGTCTCTGTGTGGATTAAAAAAAGAGTGTCTGATAGCAGC')//20 12 17 21