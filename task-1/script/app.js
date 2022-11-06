const input = document.querySelector('#input');
const form = document.querySelector('#form');

const btn = document.querySelector('#btn');
const div = document.querySelector('#box');


form.addEventListener("submit", (e) => {
    e.preventDefault()

    div.innerHTML = null

    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${input.value}`)
        .then(data => data.json())
        .then(data => {


            const h1 = document.createElement('h1')
            const p = document.createElement('p')
            const box = document.createElement('div')


            h1.innerHTML = data[0].word + '   -   ' + data[0].phonetic

            h1.style.marginTop='10px'
            p.innerHTML = data[0].meanings[0].definitions[0].definition
            p.style.marginTop='20px'


            data[0].meanings[0].definitions.map((e) => {
                const example = document.createElement('p')



                if (e.example) {
                    example.innerHTML = e.example
                    example.style.marginTop='20px'
                }

                console.log(e.example);
                box.appendChild(example)
            })

            div.appendChild(h1)
            div.appendChild(p)
            div.appendChild(box)
        })
})