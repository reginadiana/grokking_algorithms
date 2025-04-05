/**
 * @param {E} list 
 * Este método calcula quantas iterações são necessárias para encontrar um elemento em uma lista
 * dividindo a lista pela metade a cada iteração.
 * O tempo de execução é O(log n), onde n é o tamanho da lista.
 * Isso ocorre porque a cada iteração, o tamanho da lista é reduzido pela metade.
 * Portanto, o número de iterações necessárias para reduzir a lista a um único elemento é log2(n).
 * Isso significa que o tempo de execução cresce muito mais lentamente do que o tamanho da lista.
 * Isso é especialmente útil para listas grandes, onde a busca linear (O(n)) seria muito mais lenta.
 * Por exemplo, se tivermos uma lista de 1.000.000 de elementos, a busca linear levaria até 1.000.000 iterações,
 * enquanto a busca binária levaria apenas cerca de 20 iterações (log2(1.000.000) é aproximadamente 20).
 * Isso torna a busca binária uma escolha muito mais eficiente para listas grandes.
 * @param {number} kick
 * Este método calcula quantas iterações são necessárias para encontrar um elemento em uma lista
 * dividindo a lista pela metade a cada iteração.
 */

function recursiveDividerList(list) {
  let copy = list.length;
  let count = 0;

  while (copy > 1) {
    copy = copy / 2;
    count++;
  }

  console.log('Quantidade de divisões', count);
}

const inputList = Array.from({ length: 128 * 2 }, (v, i) => i);
recursiveDividerList(inputList);