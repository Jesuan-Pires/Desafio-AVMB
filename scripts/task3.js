function parametros() {
  var c = document.getElementById('task3').value
  var v = document.getElementById('v').value

  var obj = { [c]: v }

  var c_json = JSON.stringify(obj)

  console.log(c_json)

  document.getElementById('chaveValor').innerHTML = `${c_json}`
}
