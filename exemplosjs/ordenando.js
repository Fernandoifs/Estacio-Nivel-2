document.getElementById("buttonAdicionar").addEventListener("click", () => {
  document.getElementById("valorInput").focus();
});

document.getElementById("buttonOrdenar").addEventListener("click", () => {
  document.getElementById("valorInput").focus();
});

//adicionando com enter
window.addEventListener("keypress", (e) => {
  if (e.keyCode === 13) {
    adicionar();
  }
});

let listaValoresAdicionados = [];

function adicionar() {
  let valorInformado = document.getElementById("valorInput").value;

  if (valorInformado) {
    let linha = document.createElement("li");
    linha.textContent = valorInformado;
    document.getElementById("listaOriginal").appendChild(linha);

    document.getElementById("valorInput").value = "";
    listaValoresAdicionados.push(parseInt(valorInformado));
  }
}

function ordenar() {
  let selecionado = document.getElementById("opcoesOrdenar");
  document.getElementById("listaOriginal").innerHTML =
    "Ordenação " + selecionado.options[selecionado.selectedIndex].text;

  let opcaoSelecionada = selecionado.value;
  if (opcaoSelecionada == 1) {
    var listaOrdenada = bubbleSort(listaValoresAdicionados);
    for (let index = 0; index < listaOrdenada.length; index++) {
      ordenacao(listaOrdenada[index]);
    }
  } else if (opcaoSelecionada == 2) {
    var listaOrdenada = quicksort(listaValoresAdicionados);
    for (let index = 0; index < listaOrdenada.length; index++) {
      ordenacao(listaOrdenada[index]);
    }
  } else if (opcaoSelecionada == 3) {
    var listaOrdenada = selectionSort(listaValoresAdicionados);
    for (let index = 0; index < listaOrdenada.length; index++) {
      ordenacao(listaOrdenada[index]);
    }
  }
}
//ordenação
function ordenacao(valor) {
  let linha = document.createElement("li");
  linha.textContent = valor;
  document.getElementById("listaOriginal").appendChild(linha);
}

function embaralhar() {
  let listaEmbaralhada = shuffleArray(listaValoresAdicionados);
  apagar();
  let listaOriginal = document.getElementById("listaOriginal");
  listaOriginal.innerHTML = "Embaralhar";

  for (let i = 0; i < listaEmbaralhada.length; i++) {
    let linha = document.createElement("li");
    linha.textContent = listaEmbaralhada[i];
    listaOriginal.appendChild(linha);
  }
}

function apagar() {
  let listaOriginal = document.getElementById("listaOriginal");
  while (listaOriginal.firstChild) {
    listaOriginal.removeChild(listaOriginal.firstChild);
  }
}
// Funções de Ordenação

// https://pt.stackoverflow.com/questions/478167/ordenando-arrays-com-bubble-sort
function bubbleSort(array) {
  let arrayRetorno = array;
  for (let i = 0; i < arrayRetorno.length; i++) {
    for (let j = i + 1; j < arrayRetorno.length; j++) {
      if (arrayRetorno[i] > arrayRetorno[j]) {
        let aux = arrayRetorno[i];
        arrayRetorno[i] = arrayRetorno[j];
        arrayRetorno[j] = aux;
      }
    }
  }
  return arrayRetorno;
}

//https://stackoverflow.com/questions/5185864/javascript-quicksort
function quicksort(array) {
  if (array.length <= 1) {
    return array;
  }

  var pivot = array[0];
  var left = [];
  var right = [];

  for (var i = 1; i < array.length; i++) {
    array[i] < pivot ? left.push(array[i]) : right.push(array[i]);
  }
  return quicksort(left).concat(pivot, quicksort(right));
}

//https://stackoverflow.com/questions/22898928/selection-sort-in-javascript
function selectionSort(array) {
  for (var i = 0; i < array.length; i++) {
    //set min to the current iteration of i
    var min = i;
    for (var j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }
    var temp = array[i];
    array[i] = array[min];
    array[min] = temp;
  }
  return array;
}

// Função de Embaralhar
//https://horadecodar.com.br/como-embaralhar-um-array-em-javascript-shuffle/
function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
