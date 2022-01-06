const verbs = ["Buy", "Sell", "Bring", "Clean", "Prepare", "Rent", "Find", "Grab", "Collect", "Borrow"]
const nouns = ["something", "a car", "sport shoes", "smart ideas", "an ideal workplace", "coffee", "a mug", "skateboards", "some food", "crazy thinks"]
const emojis = ["😇", "🚨", "😡", "♻️", "♬", "💅", "🎲", "☹️", "☺️", "😍", "⭐️", "🥶", "👏", "🔔", "🤡", "👉"]
const priorities = ['low', 'medium', 'high']

const randomTodoListGenerator = (size: number) =>
    Array.from({ length: size }, (_element, index) => {
        let randomTitle = verbs[Math.trunc(verbs.length * Math.random())]
            + " " +
            nouns[Math.trunc(nouns.length * Math.random())]
            + " " +
            emojis[Math.trunc(emojis.length * Math.random())]
        return {
            id: index,
            title: randomTitle,
            priority: priorities[Math.trunc(3 * Math.random())],
            notes: '',
            status: 'TODO',
        };
    });
const numberOfItems = Math.trunc(2 + 4 * Math.random())
let todoList = randomTodoListGenerator(numberOfItems)

function render() {
    document.getElementById('app').innerHTML = `
    <div class="todo-list">
    ${todoList
            .filter((item) => item.status === 'TODO')
            .map((item, index) => `
            <div
                id='item${index}'
                class='todo-list-item'
                onclick='if (document.querySelector("#detail${index}")) { document.querySelector("#detail${index}").style.display = "block" }'>
                <input type="checkbox" id="todo-${index}">
                <label for="todo-${index}">${item.title}</label>
            </div>
            <div
                id='detail${index}'
                class='todo-list-detail'
                onclick='if (document.querySelector("#detail${index}")) { document.querySelector("#detail${index}").style.display = "none" }'>
                <a href="#" class="close"></a>
                <div>Priority: ${item.priority}</div>
                <div>Notes: ${item.notes}</div>
            </div>`)
            .join('')
        }
    </input>
    </div>`

    for (let index = 0; index < todoList.length; index++) {
        document.getElementById(`todo-${index}`)
            ?.addEventListener(
                "click",
                (event) => {
                    todoList = todoList
                        .map((item) => {
                            return item.status === 'TODO' && item.id !== index ?
                                item :
                                {
                                    id: item.id,
                                    title: item.title,
                                    priority: item.priority,
                                    notes: item.notes,
                                    status: 'DONE'
                                }
                        });
                    render();
                });
    }
}

render();
