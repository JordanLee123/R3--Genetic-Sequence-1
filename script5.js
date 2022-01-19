solution(['Rosalind_6404CCTGCGGAAGATCGGCACTAGAATAGCCAGAACCGTTTCTCTGAGGCTTCCGGCCTTCCCTCCCACTAATAATTCTGAGG',
'Rosalind_5959CCATCGGTAGCGCATCCTTAGTCCAATTAAGTCCCTATCCAGGCGCTCCGCCGAAGGTCTATATCCATTTGTCAGCAGACACGC',
'Rosalind_0808CCACCCTCGTGGTATGGCTAGGCATTCAGGAACCGGAGAACGCTTCAGACCAGCCCGGACTGGGAACCTGCGGGCAGTAGGTGGAAT'])

function solution(list){
  let parsed = list.map(i=>i.replace(/Rosalind_[0-9]{4}/,''))

  let listR = parsed.map(str=>{
    let p = document.createElement('p')
    p.classList.add('flex')
    let value= str.split('').reduce((mem,key)=>{

      let div = document.createElement('div')
      div.classList.add('cell')
      div.classList.add(key)
      div.title = key
      p.appendChild(div)
      if(['C','G'].includes(key)){
        mem+=1
      }
      return mem
    },0)
    let num = document.createElement('div')

    let amount = value/str.length*100
    num.innerText = (amount).toFixed(6);
    p.appendChild(num)
    document.body.append(p)
    return amount
  })

  let biggest =  Math.max(...listR)

  let index = listR.indexOf(biggest)

  document.querySelectorAll('.flex')[index].style.border = '5px solid black'

  let key = list[index].match(/Rosalind_[0-9]{4}/gi)

  let h2 = document.createElement('h2')
  h2.innerHTML = key+'<br>'+biggest.toFixed(6);;
  document.body.appendChild(h2)

}