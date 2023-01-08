// Seleção de Elementos
const inputTextoTarefa = document.getElementById('texto-tarefa');
const btnCriarTarefa = document.getElementById('criar-tarefa');
const listaTarefas = document.getElementById('lista-tarefas');

// add nova tarefa (li)
const addNovaTarefa = () => {
  btnCriarTarefa.addEventListener('click', () => {
    const addTarefa = document.createElement('li');
    addTarefa.classList.add('nova-tarefa');
    addTarefa.innerHTML = inputTextoTarefa.value;
    listaTarefas.appendChild(addTarefa);
    inputTextoTarefa.value = '';
  });
};

window.onload = () => {
  addNovaTarefa();
};
