const emojis=["🔥","✨","🚀","💪","🌍","📸","☕"]

const starters=[
"Just another",
"Living my best",
"Late night",
"Weekend",
"Another day of"
]

const moods=[
"vibes",
"energy",
"moments",
"memories"
]

const hashtags={
travel:["#travel","#wanderlust","#explore","#travelgram"],
fitness:["#fitness","#gym","#workout","#fitlife"],
food:["#food","#foodie","#instafood","#delicious"],
business:["#business","#entrepreneur","#startup","#hustle"],
coffee:["#coffee","#coffeelover","#morningcoffee"],
selfie:["#selfie","#selfielove","#photooftheday"]
}

function generateCaption(){

const category=document.getElementById("category").value
const container=document.getElementById("caption-container")

container.innerHTML=""

for(let i=0;i<5;i++){

let start=starters[Math.floor(Math.random()*starters.length)]
let mood=moods[Math.floor(Math.random()*moods.length)]
let emoji=emojis[Math.floor(Math.random()*emojis.length)]

let caption=`${start} ${category} ${mood} ${emoji}`

container.innerHTML+=`
<div class="caption-card">
<span>${caption}</span>
<button onclick="copyCaption('${caption}')">Copy</button>
</div>
`

}

generateHashtags(category)

}

function generateHashtags(category){

const container=document.getElementById("caption-container")

let tags=hashtags[category].join(" ")

container.innerHTML+=`
<div class="caption-card">
<span>${tags}</span>
<button onclick="copyCaption('${tags}')">Copy</button>
</div>
`

}

function copyCaption(text){
navigator.clipboard.writeText(text)
alert("Copied!")
}

function copyAll(){

const captions=document.querySelectorAll(".caption-card span")

let text=""

captions.forEach(c=>{
text+=c.innerText+"\n"
})

navigator.clipboard.writeText(text)

alert("All copied!")

}