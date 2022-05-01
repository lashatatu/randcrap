document.querySelector('form').addEventListener('submit', function (e) {
  const task = document.getElementById('task').value;

  let tasks;

  if ( localStorage.getItem('tasks') === null ) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'))
  }

  tasks.push(task)

  localStorage.setItem('tasks', JSON.stringify(tasks));
  alert('task saved');

  e.preventDefault();
});


const tasks=JSON.parse(localStorage.getItem('tasks'))

tasks.forEach((task)=>{
  console.log(task);
})