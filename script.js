const starters=[
"Just another",
"Weekend",
"Late night",
"Living my best",
"Another day of",
"Currently enjoying"
]

const actions=[
"exploring",
"living",
"creating",
"capturing",
"celebrating"
]

const moods=[
"vibes",
"energy",
"moments",
"memories",
"magic"
]

const endings=[
"✨","🔥","🚀","🌍","📸","☕"
]

const topics={
travel:["new places","sunsets","adventures"],
fitness:["the gym","training","workouts"],
food:["good food","dessert time","pizza nights"],
business:["big goals","startup life","the hustle"],
coffee:["morning coffee","espresso shots"],
selfie:["selfie moments","self love"]
}
function generateCaption(){

const category=document.getElementById("category").value
const container=document.getElementById("caption-container")

container.innerHTML=""

for(let i=0;i<10;i++){

let starter=starters[Math.floor(Math.random()*starters.length)]
let action=actions[Math.floor(Math.random()*actions.length)]
let topic=topics[category][Math.floor(Math.random()*topics[category].length)]
let mood=moods[Math.floor(Math.random()*moods.length)]
let ending=endings[Math.floor(Math.random()*endings.length)]

let caption=`${starter} ${action} ${topic} ${mood} ${ending}`

container.innerHTML+=`
<div class="caption-card">
<span>${caption}</span>
<button class="copy-btn" onclick="copyCaption('${caption}')">Copy</button>
</div>
`

}

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

function shareTool(){

navigator.clipboard.writeText(window.location.href)

alert("Link copied! Share it 🚀")

}
function copyHashtags(){

const text=document.getElementById("caption-container").innerText

navigator.clipboard.writeText(text)

alert("Hashtags copied!")

}
function generateBulkCaptions(){

const category=document.getElementById("category").value
const container=document.getElementById("caption-container")

container.innerHTML=""

for(let i=0;i<100;i++){

let starter=starters[Math.floor(Math.random()*starters.length)]
let action=actions[Math.floor(Math.random()*actions.length)]
let topic=topics[category][Math.floor(Math.random()*topics[category].length)]
let mood=moods[Math.floor(Math.random()*moods.length)]
let ending=endings[Math.floor(Math.random()*endings.length)]

let caption=`${starter} ${action} ${topic} ${mood} ${ending}`

container.innerHTML+=`
<div class="caption-card">
<span>${caption}</span>
<button class="copy-btn" onclick="copyCaption('${caption}')">Copy</button>
</div>
`

}

}