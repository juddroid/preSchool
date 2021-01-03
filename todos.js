//todos.js

const todos = [
  {
    name: '자바스크립트 공부하기',
    tags: ['programming', 'javascript'],
    status: 'todo',
    id: 12123123,
  },
  {
    name: '그림 그리기',
    tags: ['picture', 'favorite'],
    status: 'doing',
    id: 312323,
  },
  {
    name: 'Todo 구현하기',
    tags: ['object', 'raccoon'],
    status: 'done',
    id: 2982398,
  },
  {
    name: 'Todo 수정하기',
    tags: ['object', 'raccoon'],
    status: 'todo',
    id: 29823900,
  },
];

const show = (obj, cmd) => {
  function getCurrentStatus(obj) {
    let currentStatus = {};
    for (todo of obj) {
      if (todo.status in currentStatus) {
        currentStatus[todo.status]++;
      } else {
        currentStatus[todo.status] = 1;
      }
    }
    return `CurrentStatus: todo: ${currentStatus.todo}개, doing: ${currentStatus.doing}개, done: ${currentStatus.done}개`;
  }
  function getTodoList(obj) {
    let todoList = [];
    for (todo of obj) {
      todoList.push(todo.name)
    }
    return `todoList: 총 ${obj.length}건: ${todoList.join(', ')}`
  }
  const currentStatus = getCurrentStatus
  const todoList = getTodoList
  if (cmd === 'status') {
    return currentStatus(obj);
  }
  if (cmd === 'list') {
    return todoList(obj)
  }
  return console.error('Unknwon cmd')
}

console.log(show(todos, 'status'));
console.log(show(todos, 'list'));

let arr = [1]
arr.reduce()