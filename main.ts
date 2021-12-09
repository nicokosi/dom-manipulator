const todoList = [
    {title: 'Buy milk 🥛', prioriy: 'medium', notes: 'How much? Where?'},
    {title: 'Do sport 🏃', prioriy: 'low', notes: ''},
    {title: 'Sleep 😴', prioriy: 'high', notes: ''}
];

document.getElementById('app').innerHTML = `
<div class="todo-list">
<ul>
${todoList
    .map(item => `
    <div class='todo-list-item'>
    <li>${item.title}</li>
    </div>`)
    .join('')
}
</ul>
</div>
</div>
</div>`
