function boolToString(bool) {
  return bool ? ' é um palindromo!' : ' não é um palindromo!'
}

function palindromo() {
  var ehPalindromo = true
  var a = ([] = document.getElementById('task2').value)
  var b = a.toLowerCase()
  console.log('Palavra: ' + b)
  tam = b.length
  aux = []

  for (var i = 0; i < b.length; i++) {
    aux[i] = b[tam - 1]
    tam--
  }
  aux[i] = '\0'
  tam = b.length

  for (var i = 0; i < b.length; i++) {
    if (b[i] !== aux[i]) {
      ehPalindromo = false
      break
    }
  }
  console.log('Retorno: ' + ehPalindromo)

  document.getElementById(
    'palavra'
  ).innerHTML = `A palavra(nº) ${b}${boolToString(ehPalindromo)}`
}
