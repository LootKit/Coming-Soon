let teams = [
    {name: 'squirrels', emoji: '🐿️'},
    {name: 'monkeys', emoji: '🐒'},
    {name: 'mermaids', emoji: '🧜‍♀️'},
    {name: 'elves', emoji: '🧝'},
    {name: 'wizards', emoji: '🧙‍♂️'},
    {name: 'genies', emoji: '🧞'},
    {name: 'superheroes', emoji: '🦸'},
    {name: 'pixies', emoji: '🧚'},
    {name: 'astronauts', emoji: '🧑‍🚀'},
    {name: 'scientists', emoji: '🧑‍🔬'},
    {name: 'nerds', emoji: '🧑‍💻'},
    {name: 'builders', emoji: '👷'},
    {name: 'doggos', emoji: '🐶'},
    {name: 'cats', emoji: '🐱'},
    {name: 'hamsters', emoji: '🐹'},
    {name: 'dragons', emoji: '🐉'},
    {name: 'sea otters', emoji: '🦦'},
    {name: 'jugglers', emoji: '🤹'},
]

window.onload = () => {
    let rnd_team = teams[Math.floor(Math.random() * teams.length)]
    document.getElementById('main').innerText = `a team of highly trained ${rnd_team.name} is working hard to bring something neat to this space! ${rnd_team.emoji}`
}