const todoList = [
    {title: 'Buy milk 🥛', prioriy: 'medium', notes: 'How much? Where?'},
    {title: 'Do sport 🏃', prioriy: 'low', notes: ''},
    {title: 'Sleep 😴', prioriy: 'high', notes: ''}
];

document.getElementById('app').innerHTML = `
<div class="todo-list">
<ul>
${todoList
    .map((item, index) => `
    <li>
        <div
            id='item${index}'
            class='todo-list-item'
            onclick='document.querySelector("#detail${index}").style.display = "block"'>
            ${item.title}
        </div>
        <div
            id='detail${index}'
            class='todo-list-detail'
            onclick='document.querySelector("#detail${index}").style.display = "none"'>
            <a href="#" class="close"></a>
            <div>Title: ${item.title}</div>
            <div>Priority: ${item.prioriy}</div>
            <div>Notes: ${item.notes}</div>
        </div>
    </li>`)
    .join('')
}
</ul>
</div>`
