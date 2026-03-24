const starters = [
"Just another",
"Weekend",
"Late night",
"Living my best",
"Another day of",
"Currently enjoying",
"Nothing but",
"Straight",
"Chasing",
"Powered by"
]

const actions = [
"enjoying",
"living",
"exploring",
"chasing",
"capturing",
"creating",
"embracing",
"celebrating",
"building",
"discovering"
]

const moods = [
"vibes",
"energy",
"moments",
"memories",
"mode",
"mood",
"magic",
"lifestyle"
]

const endings = [
"✨",
"🔥",
"🚀",
"🌍",
"📸",
"☕",
"💪",
"🌅"
]

const topics = {

travel:["travel","adventures","sunsets","passport life","new places"],

fitness:["gym","training","fitness grind","strong days","workout life"],

food:["good food","brunch time","dessert moments","pizza nights"],

business:["hustle","business moves","startup life","big goals"],

coffee:["morning coffee","espresso life","coffee breaks"],

selfie:["selfie time","camera moments","self love"]

}

const hashtags={
travel:["#travel","#wanderlust","#explore","#travelgram"],
fitness:["#fitness","#gym","#workout","#fitlife"],
food:["#food","#foodie","#instafood","#delicious"],
business:["#business","#entrepreneur","#startup","#hustle"],
coffee:["#coffee","#coffeelover","#morningcoffee"],
selfie:["#selfie","#selfielove","#photooftheday"]

}

function generateCaption(){

const category = document.getElementById("category").value
const container = document.getElementById("caption-container")

container.innerHTML = "Generating captions..."

setTimeout(()=>{

container.innerHTML=""

for(let i=0;i<10;i++){

let starter = starters[Math.floor(Math.random()*starters.length)]
let action = actions[Math.floor(Math.random()*actions.length)]
let topic = topics[category][Math.floor(Math.random()*topics[category].length)]
let mood = moods[Math.floor(Math.random()*moods.length)]
let ending = endings[Math.floor(Math.random()*endings.length)]

let caption = `${starter} ${action} ${topic} ${mood} ${ending}`

container.innerHTML+=`
<div class="caption-card" style="animation-delay:${i*0.1}s">
<span>${caption}</span>
<button class="copy-btn" onclick="copyCaption('${caption}')">Copy</button>
</div>
`

}

generateHashtags(category)

},300)

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

function shareTool(){

const url = window.location.href
navigator.clipboard.writeText(url)

alert("Link copied! Share it 🚀")

}
