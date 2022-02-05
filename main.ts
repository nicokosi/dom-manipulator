const verbs = ["Buy", "Sell", "Bring", "Clean", "Prepare", "Rent", "Find", "Grab", "Collect", "Borrow"]
const emojis = ["😇", "🚨", "😡", "♻️", "♬", "💅", "🎲", "☹️", "☺️", "😍", "⭐️", "🥶", "👏", "🔔", "🤡", "👉"]
const priorities = ['low', 'medium', 'high']

async function randomWordFromExternalService() {
    return fetch('https://random-words-api.vercel.app/word')
        .then(response => response.json())
        .then(data => data[0].word);
}

const randomTodoListGenerator = (size: number, nouns: Array<string>) =>
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
let randomWords = []
let todoList

var randomized = false;

function render() {
    Promise.all(
        [
            randomized ? Promise.resolve(randomWords[0]) : randomWordFromExternalService(),
            randomized ? Promise.resolve(randomWords[1]) : randomWordFromExternalService(),
            randomized ? Promise.resolve(randomWords[2]) : randomWordFromExternalService(),
            randomized ? Promise.resolve(randomWords[3]) : randomWordFromExternalService(),
            randomized ? Promise.resolve(randomWords[4]) : randomWordFromExternalService(),
            randomized ? Promise.resolve(randomWords[5]) : randomWordFromExternalService()
        ])
        .then((words) => {
            if (!randomized) {
                randomWords = words
                randomized = true
                todoList = randomTodoListGenerator(numberOfItems, randomWords)
            }
            document.getElementById('app').innerHTML = `
            <div class="todo-list">
            <ul>
            ${todoList
                    .map((item, index) => `
                    <li
                        id='item${index}'
                        class='todo-list-item ${item.status === "DONE" ? 'completed' : ''}'
                        onmouseover='if (document.querySelector("#detail${index}")) { document.querySelector("#detail${index}").style.display = "block" }'>
                        <input type="checkbox" id="todo-${index}" ${item.status === "DONE" ? 'checked' : ''}>
                        <label for="todo-${index}">${item.title}</label>
                    </li>
                    <div
                        id='detail${index}'
                        class='todo-list-detail'
                        onmouseover='if (document.querySelector("#detail${index}")) { document.querySelector("#detail${index}").style.display = "none" }'>
                        <a href="#" class="close"></a>
                        <div>Priority: ${item.priority}</div>
                        <div>Notes: ${item.notes}</div>
                    </div>`)
                    .join('')
                }
            </ul>
            </div>`

            for (let index = 0; index < todoList.length; index++) {
                document.getElementById(`todo-${index}`)
                    ?.addEventListener(
                        "input",
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

        });

}

render();
