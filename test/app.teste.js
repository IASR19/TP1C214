// Importe as bibliotecas de teste e a lógica da aplicação
const assert = require('chai').assert;
const { addTask, tasks } = require('../src/app'); // Suponha que o arquivo de lógica seja 'app.js'
const { updateTaskList } = require('../src/app'); // Sugitponha que o arquivo de lógica seja 'app.js'
const { updateTaskStatus} = require('../src/app'); // Suponha que o arquivo de lógica seja 'app.js'
const { deleteTask } = require('../src/app'); // Suponha que o arquivo de lógica seja 'app.js'

describe('Testes de adicionar tarefa', function() {
  it('Deve adicionar uma nova tarefa à lista', function() {
    const initialTaskCount = tasks.length;
    addTask('Nova Tarefa', 'Descrição da Tarefa');
    assert.equal(tasks.length, initialTaskCount + 1);
  });

  it('Deve adicionar uma nova tarefa com os dados corretos', function() {
    const title = 'Nova Tarefa';
    const description = 'Descrição da Tarefa';
    addTask(title, description);
    const addedTask = tasks[tasks.length - 1];
    assert.equal(addedTask.title, title);
    assert.equal(addedTask.description, description);
    assert.equal(addedTask.status, 'A fazer'); // Supondo que o status padrão seja "A fazer"
  });
});


describe('Testes de visualizar lista de tarefas', function() {
  it('Deve retornar uma lista de tarefas não vazia', function() {
    const taskListHTML = updateTaskList();
    assert.isAbove(taskListHTML.length, 0);
  });

  it('Deve incluir todas as tarefas na lista', function() {
    tasks.push({ title: 'Tarefa 1', description: 'Descrição 1', status: 'A fazer' });
    tasks.push({ title: 'Tarefa 2', description: 'Descrição 2', status: 'Em andamento' });
    const taskListHTML = updateTaskList();
    assert.include(taskListHTML, 'Tarefa 1');
    assert.include(taskListHTML, 'Tarefa 2');
  });
});

describe('Testes de atualizar status de tarefa', function() {
  it('Deve atualizar o status de uma tarefa corretamente', function() {
    tasks.push({ title: 'Tarefa a ser atualizada', description: 'Descrição', status: 'A fazer' });
    const taskIndex = tasks.length - 1;
    const newStatus = 'Em andamento';
    updateTaskStatus(taskIndex, newStatus);
    assert.equal(tasks[taskIndex].status, newStatus);
  });
});


describe('Testes de excluir tarefa', function() {
  it('Deve excluir uma tarefa da lista', function() {
    tasks.push({ title: 'Tarefa a ser excluída', description: 'Descrição', status: 'A fazer' });
    const taskIndex = tasks.length - 1;
    const initialTaskCount = tasks.length;
    deleteTask(taskIndex);
    assert.equal(tasks.length, initialTaskCount - 1);
  });
});



