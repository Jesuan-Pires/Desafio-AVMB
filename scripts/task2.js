function boolToString(bool) {
  return bool ? ' é um palindromo!' : ' não é um palindromo!'
}

function palindromo() {
  var ehPalindromo = true
  var a = ([] = document.getElementById('task2').value)
  console.log('Palavra: ' + a)
  tam = a.length
  aux = []
  for (var i = 0; i < a.length; i++) {
    aux[i] = a[tam - 1]
    tam--
  }
  aux[i] = '\0'
  tam = a.length

  for (var i = 0; i < a.length; i++) {
    if (a[i] !== aux[i]) {
      ehPalindromo = false
      break
    }
  }
  console.log('Retorno: ' + ehPalindromo)

  document.getElementById('palavra').innerHTML = `A palavra ${a}${boolToString(
    ehPalindromo
  )}`
}
