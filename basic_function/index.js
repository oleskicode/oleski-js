let subscribers = [
    {name: 'name1'},
    {name: 'name1'},
    {name: 'name1'},
    {name: 'name1'},
    {name: 'name1'},
    {name: 'name1'},
    {name: 'name1'},
]

console.log(subscribers.length)

function congratsIfSubscribersAreMoreThanFive(subscribers) {
    if (subscribers.length > 5) {
        alert("Congrats, you have 5+ subs!")
    }
}

congratsIfSubscribersAreMoreThanFive(subscribers)