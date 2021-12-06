const todoList = ['Buy milk 🥛', 'Do sport 🏃', 'Sleep 😴'];

document.getElementById('app').innerHTML = `
<div>
<ul>
${todoList
    .map(item => `<li>${item}</li>`)
    .join('')
}
</ul>
</div>`
