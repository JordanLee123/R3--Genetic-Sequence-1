let one = document.querySelector('.one')
let two = document.querySelector('.two')


function complementingStrandOfDNA(str) {
  str.split('').forEach(i=>{
    let div = document.createElement('div')
    div.classList.add('cell')
    div.classList.add(i)
    div.title = i
    div.innerText=i
    one.appendChild(div)
  })
  let res = '';
  for (let i = str.length; i >= 0; i--) {
    switch (str[i]) {
      case 'T':
        res += 'A';
        break;
      case 'A':
        res += 'T';
        break;
      case 'C':
        res += 'G';
        break;
      case 'G':
        res += 'C';
        break;
      default:
        continue
    }
  }
  res.split('').forEach(i=>{
    let div = document.createElement('div')
    div.classList.add('cell')
    div.classList.add(i)
    div.title = i
    div.innerText=i
    two.appendChild(div)
  })
  console.log(res)
}

complementingStrandOfDNA('AAAACCCGGT')//ACCGGGTTTT