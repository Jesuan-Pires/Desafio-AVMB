function parametros() {
  var c = document.getElementById('c').value
  var v = document.getElementById('v').value

  var obj = { [c]: v }

  var c_json = JSON.stringify(obj)

  console.log(c_json)

  document.getElementById('chaveValor').innerHTML = `Retorno: ${c_json}`
}
