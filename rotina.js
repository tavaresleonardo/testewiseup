function preencheTabelaProdutos(dados) {
	console.dir(dados);
  /*var dprod = JSON.parse(dados);
  console.dir(dprod);
  var tbl = "<table border=\"1\">";
  tbl += "<tr><td>Id</td><td>Grupo</td><td>Subgrupo</td><td>Produto</td><td>Preço</td></tr>";
  for (var i = 0; i < dprod["rows"].length; i++) {
    tbl += "<tr>";
    for (var j = 0; j < 5; j++) {
      tbl += "<td>" + dprod["rows"][i][j] + "</td>";
    }
    tbl += "</tr>";
  }
  tbl += "</table>";
  document.getElementById('tabela').innerHTML = tbl;
*/
}

function consultarTabela(tab) {
  var req = new XMLHttpRequest();
  req.open('GET', tab, true);
  req.onreadystatechange = function(e) {
    if (e.target.readyState == 4) {
      if (e.target.status == 200) { // Sucesso
        preencheTabelaProdutos(e.target.responseText);
      } else if (e.target.status == 404) { // Arquivo
        document.getElementById('tabela').innerHTML =
          "<p>Arquivo não encontrado.</p>";
      }
    }
  }
  req.send();
}

function consultarProdutos() {
  // !!!IMPORTANTE!!!
  // Substituir 'produtos.json' pela URL do arquivo JSON que será carregado
  consultarTabela('acervo.json');
  return;
}
