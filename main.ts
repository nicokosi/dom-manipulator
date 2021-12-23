const todoList = [
    { title: 'Buy milk 🥛', prioriy: 'medium', notes: 'How much? Where?' },
    { title: 'Do sport 🏃', prioriy: 'low', notes: '' },
    { title: 'Sleep 😴', prioriy: 'high', notes: '' }
];

document.getElementById('app').innerHTML = `
<div class="todo-list">
${todoList
        .map((item, index) => `
        <div
            id='item${index}'
            class='todo-list-item'
            onclick='document.querySelector("#detail${index}").style.display = "block"'>
            <input type="checkbox" id="todo-${index}">
            <label for="todo-${index}">${item.title}</label>
        </div>
        <div
            id='detail${index}'
            class='todo-list-detail'
            onclick='document.querySelector("#detail${index}").style.display = "none"'>
            <a href="#" class="close"></a>
            <div>Priority: ${item.prioriy}</div>
            <div>Notes: ${item.notes}</div>
        </div>`)
        .join('')
    }
</input>
</div>`
