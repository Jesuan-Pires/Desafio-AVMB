function palindromo() {
  var ehPalindromo = true
  var a = ([] = document.getElementById('a').value)
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

  document.getElementById('palavra').innerHTML = 'Argumento recebido: ' + a

  document.getElementById('retorno').innerHTML = 'Retorno: ' + ehPalindromo
}
