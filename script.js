// Seleção de Elementos
const inputTextoTarefa = document.getElementById('texto-tarefa');
const btnCriarTarefa = document.getElementById('#criar-tarefa');

// Funções
const validaInput = () => inputTextoTarefa.value.trim().length > 0;

// Eventos

window.onload = () => {
  validaInput();
};
