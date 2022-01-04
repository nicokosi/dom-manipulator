const verbs = ["Buy", "Sell", "Bring", "Clean", "Prepare", "Rent", "Find", "Grab", "Collect", "Borrow"]
const nouns = ["something", "a car", "sport shoes", "smart ideas", "an ideal workplace", "coffee", "a mug", "skateboards", "some food", "crazy thinks"]
const emojis = ["😇", "🚨", "😡", "♻️", "♬", "💅", "🎲", "☹️", "☺️", "😍", "⭐️", "🥶", "👏", "🔔", "🤡", "👉"]
const priorities = ['low', 'medium', 'high']

const randomTodoListGenerator = (size: number) =>
    Array.from({ length: size}, (_a, _b) => {
        let randomTitle = verbs[Math.trunc(verbs.length * Math.random())]
            + " " +
            nouns[Math.trunc(nouns.length * Math.random())]
            + " " +
            emojis[Math.trunc(emojis.length * Math.random())]
        let todo = {
                title: randomTitle,
                priority: priorities[Math.trunc(3 * Math.random())],
                notes: ''
        }
        return todo;
    });
const numberOfItems = Math.trunc(2 + 4 * Math.random())
const randomTodoList = randomTodoListGenerator(numberOfItems)

document.getElementById('app').innerHTML = `
<div class="todo-list">
${randomTodoList
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
            <div>Priority: ${item.priority}</div>
            <div>Notes: ${item.notes}</div>
        </div>`)
        .join('')
    }
</input>
</div>`
