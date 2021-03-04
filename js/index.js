//Aluno: Luiz Gonzaga A. de Oliveira
//Senai Cimatec / Disciplina: Programação WEB
var appElement = document.getElementById("app"); //app é a div pai

var entradasElement = document.getElementById("entradas"); //div entradas


var tabelaElement = document.createElement('table');

//Criando as entradas:
var nomeElement = document.createElement("input"); 
nomeElement.setAttribute('id', 'nome');
nomeElement.setAttribute('class', 'meuinput');
nomeElement.setAttribute('type', 'text');
nomeElement.setAttribute('name', 'nome');
nomeElement.setAttribute('placeholder', 'Nome Completo');
var vitoriaElement = document.createElement("input"); 
vitoriaElement.setAttribute('id', 'vitoria');
vitoriaElement.setAttribute('class', 'meuinput');
vitoriaElement.setAttribute('type', 'text');
vitoriaElement.setAttribute('name', 'vitoria');
vitoriaElement.setAttribute('placeholder', 'Turma');
var derrotaElement = document.createElement("input");
derrotaElement.setAttribute('id', 'derrota');
derrotaElement.setAttribute('class', 'meuinput');
derrotaElement.setAttribute('type', 'text');
derrotaElement.setAttribute('name', 'derrota');
derrotaElement.setAttribute('placeholder', 'Componente');
var empateElement = document.createElement("input");
empateElement.setAttribute('id', 'empate');
empateElement.setAttribute('class', 'meuinput');
empateElement.setAttribute('type', 'number');
empateElement.setAttribute('name', 'empate');
empateElement.setAttribute('placeholder', 'Nota Final');

//Criando os botões:
var btnElement = document.createElement("button");
btnElement.setAttribute('id', 'btnSalvar');
btnElement.setAttribute('class', 'meuinput');
var textBotao = document.createTextNode("Salvar"); 
btnElement.appendChild(textBotao);

//Colocando as entradas e os botões na div app
entradasElement.appendChild(nomeElement);
entradasElement.appendChild(vitoriaElement);
entradasElement.appendChild(derrotaElement);
entradasElement.appendChild(empateElement);
entradasElement.appendChild(btnElement);
appElement.appendChild(tabelaElement); //Adicionar a tabela na div principal.

//4-Criando a tabela:
var trElement = document.createElement("tr");
var thNomeElement = document.createElement("th");
var thVitoriaElement = document.createElement("th");
var thDerrotaElement = document.createElement("th");
var thEmpateElement = document.createElement("th");
var thPontosElement = document.createElement("th");

trElement.appendChild(thNomeElement);
trElement.appendChild(thVitoriaElement);
trElement.appendChild(thDerrotaElement);
trElement.appendChild(thEmpateElement);
trElement.appendChild(thPontosElement);
tabelaElement.appendChild(trElement);

thNomeElement.innerHTML = "Nome do Aluno";
thVitoriaElement.innerHTML = "Turma";
thDerrotaElement.innerHTML = "Componente";
thEmpateElement.innerHTML = "Nota Final";
thPontosElement.innerHTML = "Actions";

//Adicionado o item na tabela, usando o botão.

btnElement.onclick = function() {
    
var trElement = document.createElement("tr");

var tdNomeElement = document.createElement("td");
var tdVitoriaElement = document.createElement("td");
var tdDerrotaElement = document.createElement("td");
var tdEmpateElement = document.createElement("td");
var tdPontosElement = document.createElement("td");


trElement.appendChild(tdNomeElement);
trElement.appendChild(tdVitoriaElement);
trElement.appendChild(tdDerrotaElement);
trElement.appendChild(tdEmpateElement);
trElement.appendChild(tdPontosElement);
tabelaElement.appendChild(trElement);

tdNomeElement.innerHTML = nomeElement.value;
tdVitoriaElement.innerHTML = vitoriaElement.value;
tdDerrotaElement.innerHTML = derrotaElement.value;
tdEmpateElement.innerHTML = empateElement.value;
tdPontosElement.innerHTML = "<button id='btnDetails'>Detalhes</button>";


nomeElement.value = "";
vitoriaElement.value = "";
derrotaElement.value = "";
empateElement.value = "";

}

