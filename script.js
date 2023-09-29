const addButton = document.getElementById('criar-tarefa');
const inputTask = document.getElementById('texto-tarefa');
const list = document.getElementById('lista-tarefas');
const deleteButton = document.getElementById('apaga-tudo');

const addTask = () => {
  const listItem = document.createElement('li');
  if (inputTask.value.length === 0) {
    window.alert('Você deve inserir um texto');
  } else {
    listItem.classList.add('item');
    listItem.innerText = inputTask.value;
    list.appendChild(listItem);
    inputTask.value = '';
  }
};

addButton.addEventListener('click', addTask);

const selectItem = (event) => {
  const selectedItem = document.getElementsByClassName('selected')[0];
  const clickedItem = event.target;
  if (selectedItem) {
    selectedItem.classList.remove('selected');
  }
  clickedItem.classList.add('selected');
};
list.addEventListener('click', selectItem);

const riskItem = (event) => {
  const clickedItem = event.target;

  clickedItem.classList.toggle('completed');
};
list.addEventListener('dblclick', riskItem);

const deleteList = () => {
  list.innerHTML = '';
};
deleteButton.addEventListener('click', deleteList);

// const deleteCompleted = () => {};
