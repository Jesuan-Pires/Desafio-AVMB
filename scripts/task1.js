function gerarNumeros() {
  var n = document.getElementById('n').value
  console.log('N: ' + n)
  var gerador = []
  var cont = 0
  for (var i = 0; i < n; i++) {
    gerador[i] = Math.round(Math.random() * 100)
    if (gerador[i] % 2 == 1) {
      cont++
    }
  }
  console.log('Argumentos: ' + gerador)
  console.log('Quantidade de números impares: ' + cont)

  document.getElementById('argumentos').innerHTML =
    'Argumentos recebidos: [' +
    gerador.map((item) => `${item}`).join(', ') +
    ']'

  document.getElementById('contador').innerHTML =
    'Quantidade de números impares: ' + cont
}
