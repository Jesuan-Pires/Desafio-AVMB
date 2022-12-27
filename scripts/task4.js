//console.log(data.getTime())
//console.log(Math.floor(Date.now() / 1000))
//console.log(Number(new Date()));
const timeStamp = '1671397288593'
const apiKey = 'e1e576b962e5dccb3509691cb4c78d83'
const md5 = '3e29e58429e59eea51aab9787e37c351'

fetch(
  `https://gateway.marvel.com:443/v1/public/characters?limit=100&ts=${timeStamp}&apikey=${apiKey}&hash=${md5}`
)
  .then((response) => {
    return response.json()
  })
  .then((jsonParsed) => {
    const divHero = document.querySelector('#herois')

    jsonParsed.data.results.forEach((element) => {
      const nameHero = element.name

      createDivHero(nameHero, divHero)
    })
    console.log(jsonParsed)
  })

function createDivHero(nameHero, divToAppend) {
  const divPai = document.createElement('div')
  const divFilho = document.createElement('div')
  const textName = document.createElement('text')

  textName.textContent = nameHero

  divFilho.appendChild(textName)
  divPai.appendChild(divFilho)
  divToAppend.appendChild(divPai)

  divPai.classList.add('personagem')
}
