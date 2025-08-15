const states = [
  {"name":"Andhra Pradesh","x":42.12,"y":63.26,"myth":"Legend says Lord Venkateswara resides atop the Tirumala Hills.","quote":"May your path be as steadfast as Tirumala’s devotion."},
  {"name":"Arunachal Pradesh","x":86.51,"y":33.69,"myth":"Believed to be the mythical land of the rising sun in India.","quote":"Rise each day with curiosity — the sunrise brings new wonders."},
  {"name":"Assam","x":81.3,"y":38.22,"myth":"The Kamakhya Temple is said to hold divine feminine energy.","quote":"Be rooted like the Brahmaputra — gentle, strong, and life-giving."},
  {"name":"Bihar","x":60.28,"y":40.79,"myth":"Bodh Gaya is where Buddha attained enlightenment under the Bodhi tree.","quote":"Seek small moments of stillness — they hold great insight."},
  {"name":"Chhattisgarh","x":48.65,"y":49.97,"myth":"Folk tales speak of the mysterious caves of Bastar with hidden treasures.","quote":"Explore quietly — the forest rewards the patient heart."},
  {"name":"Goa","x":24.47,"y":65.02,"myth":"Local lore tells of a sea goddess protecting fishermen from storms.","quote":"Let waves teach you to be brave and to return again."},
  {"name":"Gujarat","x":17.63,"y":45.08,"myth":"The Somnath Temple is said to have been built by the Moon God himself.","quote":"Hold your faith like stone — steady in changing tides."},
  {"name":"Haryana","x":32.73,"y":32.42,"myth":"Kurukshetra is believed to be the battlefield of the Mahabharata.","quote":"Stand with courage when duty calls — that forms your story."},
  {"name":"Himachal Pradesh","x":35.69,"y":26.02,"myth":"Manimahesh Lake is said to be the abode of Lord Shiva.","quote":"Climb patiently; the climb itself becomes the prayer."},
  {"name":"Jharkhand","x":59.98,"y":45.11,"myth":"Parasnath Hill is sacred to Jains and linked to many ascetic tales.","quote":"Small steps each day lead to the highest summits."},
  {"name":"Karnataka","x":31.51,"y":69.23,"myth":"Hampi is said to be the Kishkindha (monkey kingdom) of Ramayana.","quote":"Creativity blooms where devotion and play meet."},
  {"name":"Kerala","x":31.71,"y":78.02,"myth":"Believed to be reclaimed from the sea by Lord Parasurama.","quote":"Be like the backwaters — calm, deep, and full of stories."},
  {"name":"Madhya Pradesh","x":38.55,"y":44.55,"myth":"Ujjain is one of India's ancient spiritual centres, full of old chants.","quote":"Let tradition steady you and curiosity guide you."},
  {"name":"Maharashtra","x":26.61,"y":53.45,"myth":"Legends say forts here appear and vanish in the mist.","quote":"Stand tall like a fort — weather the fog, reveal the view."},
  {"name":"Manipur","x":84.16,"y":42.65,"myth":"Loktak Lake is tied to many Manipuri folk tales and spirits.","quote":"Move with grace — gentle motion holds great strength."},
  {"name":"Meghalaya","x":74.57,"y":40.89,"myth":"Called the 'Abode of Clouds' and blessed by rain spirits.","quote":"Let the clouds remind you to rest; rain renews the earth."},
  {"name":"Mizoram","x":81.91,"y":45.4,"myth":"Tales speak of mountain spirits who sing at night.","quote":"Listen to your nights — they sing your quiet courage."},
  {"name":"Nagaland","x":86.2,"y":39.64,"myth":"Tribal stories tell of guardian spirits in the hills.","quote":"Protect what matters; guardianship is a gentle strength."},
  {"name":"Odisha","x":60.18,"y":50.81,"myth":"The Jagannath temple has many ancient, living rituals and stories.","quote":"Celebrate what endures — ritual stitches community together."},
  {"name":"Punjab","x":30.89,"y":28.34,"myth":"The Golden Temple’s waters are said to grant solace to devotees.","quote":"Offer kindness freely and you will find solace returned."},
  {"name":"Rajasthan","x":23.55,"y":37.06,"myth":"Bhangarh and other forts have eerie folklore of vanished kingdoms.","quote":"Even in ruin we learn — rise from loss with a softer heart."},
  {"name":"Sikkim","x":69.36,"y":35.9,"myth":"Kanchenjunga is revered as a guardian deity of the land.","quote":"Be humble before greatness, and climb with respect."},
  {"name":"Tamil Nadu","x":40.59,"y":75.35,"myth":"Rameswaram and ancient coasts are woven into Ramayana legends.","quote":"Let devotion and curiosity walk together on your path."},
  {"name":"Telangana","x":40.89,"y":59.46,"myth":"Hyderabad's old tales tell of hidden courts and lost riches.","quote":"Craft your destiny with patience and clever hands."},
  {"name":"Tripura","x":77.94,"y":44.34,"myth":"Tripura Sundari is linked to powerful Shakti stories.","quote":"Embrace your power gently — strength is balanced by compassion."},
  {"name":"Uttar Pradesh","x":44.26,"y":37.48,"myth":"Ayodhya and Mathura are central to Ramayana & Krishna leelas.","quote":"Remember story and song — they shape who we become."},
  {"name":"Uttarakhand","x":42.42,"y":30.31,"myth":"The Himalayas here are home to sages and ancient hermitages.","quote":"Seek stillness; the mountain's silence speaks wisdom."},
  {"name":"West Bengal","x":67.94,"y":46.17,"myth":"Sundarbans and river myths carry old sea-lore and forest spirits.","quote":"Flow with life’s tides — they bring both challenge and bounty."},
  {"name":"Andaman & Nicobar Islands","x":83.24,"y":76.34,"myth":"Island lore speaks of sea guardians and hidden coves.","quote":"Protect your shores — tenderness preserves abundance."},
  {"name":"Chandigarh","x":31.71,"y":30.1,"myth":"This planned city has modern myths of gardens and artistry.","quote":"Design your life with care; beauty supports calm."},
  {"name":"Dadra & Nagar Haveli and Daman & Diu","x":20,"y":55,"myth":"Coastal forts and sailors' tales hide many secrets.","quote":"Navigate gently — every harbor welcomes the careful sailor."},
  {"name":"Delhi","x":36,"y":33.83,"myth":"Indraprastha from epic stories is believed to have lived here.","quote":"Build wisely; the city you make shapes many lives."},
  {"name":"Jammu & Kashmir","x":29.57,"y":22.22,"myth":"Dal Lake is wrapped in romance and mystical stories.","quote":"Let beauty steady you when the world feels loud."},
  {"name":"Ladakh","x":39.98,"y":19.69,"myth":"High passes are said to be watched by snow spirits.","quote":"Breathe the thin air — resilience grows in stillness."},
  {"name":"Lakshadweep","x":16.1,"y":79.92,"myth":"Coral reefs and pearl stories are common in island lore.","quote":"Protect your reefs — small care yields rich returns."},
  {"name":"Puducherry","x":42.73,"y":72.19,"myth":"Old colonial lanes carry whispered tales and local miracles.","quote":"Walk slowly through old streets; stories will find you."}
];


const mapImg = document.getElementById('mapImage');
const dotsLayer = document.getElementById('dots-layer');

const popup = document.getElementById('popup');
const popupState = document.getElementById('popupState');
const popupMyth = document.getElementById('popupMyth');
const playBtn = document.getElementById('playBtn');
const gameWrap = document.getElementById('gameWrap');
const boxesDiv = document.getElementById('boxes');
const resultMsg = document.getElementById('resultMsg');
const quoteMsg = document.getElementById('quoteMsg');
const closePopup = document.getElementById('closePopup');
const closeAfter = document.getElementById('closeAfter');

let currentState = null;
let artifactBoxIndex = null;
let artifactEmoji = null;
let gameLocked = false;


const ARTIFACTS = ['💎','🏺','📜','🗿','⚱️','🔱'];


function createDots(){
  dotsLayer.innerHTML = '';  
  states.forEach((s, idx) => {
    const btn = document.createElement('button');
    btn.className = 'dot';
    btn.dataset.index = idx;
    btn.dataset.label = s.name;
    btn.style.left = `${s.x}%`;
    btn.style.top = `${s.y}%`;
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      openPopup(s);
    });
    dotsLayer.appendChild(btn);
  });
}


if (mapImg.complete) createDots();
else mapImg.addEventListener('load', createDots);
function openPopup(state){
  currentState = state;
  popupState.textContent = state.name;
  popupMyth.textContent = state.myth;
  resultMsg.textContent = '';
  quoteMsg.textContent = '';
  quoteMsg.classList.add('hidden');
  boxesDiv.innerHTML = '';
  gameWrap.classList.add('hidden');
  playBtn.style.display = 'inline-block';
  popup.classList.remove('hidden');
  playBtn.focus();
}


closePopup.addEventListener('click', ()=> popup.classList.add('hidden'));


playBtn.addEventListener('click', ()=>{
  if (!currentState) return; 
  artifactEmoji = ARTIFACTS[Math.floor(Math.random()*ARTIFACTS.length)];
  artifactBoxIndex = Math.floor(Math.random()*3);
  gameLocked = false;


  boxesDiv.innerHTML = '';
  for (let i=0;i<3;i++){
    const b = document.createElement('div');
    b.className = 'box';
    b.dataset.index = i;
    b.textContent = '?';
   
    b.addEventListener('click', (ev) => {
      if (gameLocked) return;
      handleBoxClick(ev.currentTarget);
    }, { once:true });
    boxesDiv.appendChild(b);
  }

  playBtn.style.display = 'none';
  gameWrap.classList.remove('hidden');
  resultMsg.textContent = 'Pick one box — only one chance!';
});


function handleBoxClick(boxEl){
  const idx = parseInt(boxEl.dataset.index,10);
  if (idx === artifactBoxIndex){

    boxEl.textContent = artifactEmoji;
    boxEl.classList.add('found');
    resultMsg.textContent = `You found the artifact ${artifactEmoji}! ✨`;
    quoteMsg.textContent = `${currentState.quote}`;
    quoteMsg.classList.remove('hidden');
    gameLocked = true;
    closeAfter.classList.remove('hidden');
  } else {
    
    boxEl.textContent = '❌';
    boxEl.classList.add('disabled');    
    const all = boxesDiv.querySelectorAll('.box');
    const correct = all[artifactBoxIndex];
    correct.textContent = artifactEmoji;
    correct.classList.add('found');
    resultMsg.textContent = `Not this time — the artifact was ${artifactEmoji}.`;
    quoteMsg.textContent = `${currentState.quote}`;
    quoteMsg.classList.remove('hidden');
    gameLocked = true;
    closeAfter.classList.remove('hidden');
  }
}


closeAfter.addEventListener('click', ()=> popup.classList.add('hidden'));


popup.addEventListener('click', (ev)=> {
  if (ev.target === popup) popup.classList.add('hidden');
});

function createSnowflake() {
    const snowflake = document.createElement("div");
    snowflake.classList.add("snowflake");
    snowflake.innerHTML = "❄";
    snowflake.style.left = Math.random() * window.innerWidth + "px";
    snowflake.style.fontSize = (Math.random() * 10 + 10) + "px";
    snowflake.style.opacity = Math.random();
    snowflake.style.animationDuration = (Math.random() * 5 + 8) + "s, 4s";
    document.body.appendChild(snowflake);
    setTimeout(() => snowflake.remove(), 15000);
}

setInterval(createSnowflake, 200);
