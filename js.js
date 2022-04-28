const tags = document.getElementById('tags')
const text = document.getElementById('textarea')

// console.log(text)

text.focus()

text.addEventListener('keyup', (e)=>{
    createTags(e.target.value)

    if(e.key === 'Enter'){
        setTimeout(() => {
            e.target.value = ''
        }, 10)
        randomSelect()
    }
})

function createTags(input){
    const inputText = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim())
    // console.log(inputText)
    tags.innerHTML = ''

    inputText.forEach(tag => {
        const tagEl = document.createElement('span')
        tagEl.classList.add('tag')
        tagEl.innerText = tag
        tags.appendChild(tagEl)
    });
}
function randomSelect(){
    const times = 30

    const interval = setInterval(() => {
        const randomTag = pickRandomTag()

        highLight(randomTag)

        setTimeout(() => {
            unhighLight(randomTag)
        },100)
    },100)

    setTimeout(() => {
        clearInterval(interval)

        setTimeout(() => {
            const randomTag = pickRandomTag()

            highLight(randomTag)
        }, 100)
    }, times * 100 )    
}

function pickRandomTag(){
    const tags = document.querySelectorAll('.tag')

    return tags[Math.floor(Math.random()*tags.length)]

}

function highLight(tag){
    tag.classList.add('highlight')
}
function unhighLight(tag){
    tag.classList.remove('highlight')
}
