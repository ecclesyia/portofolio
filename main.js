const PROJECTS = [
  { id:1,  code:"OBJ-01", year:"2024", name:"MINECRAFT MODS",      status:"ARCHIVED", tagline:"Kotlin + Minecraft exploration",                tech:["KOTLIN"],                           github:"https://github.com/ecclesyia", live:null, tagline_full:"Not really a project — more of a learning mission. The goal was understanding Kotlin and the Minecraft modding ecosystem simultaneously. Archived once the objective was reached." },
  { id:2,  code:"OBJ-02", year:"2025", name:"UMA WEBSITE",          status:"ARCHIVED", tagline:"Uma Musume gameplay instruction site",           tech:["HTML","CSS","JAVASCRIPT"],           github:"https://github.com/ecclesyia", live:null, tagline_full:"A collaborative attempt to document Uma Musume gameplay mechanics. Cancelled — the instruction content never got off the ground. Void status." },
  { id:3,  code:"OBJ-03", year:"2026", name:"PROJECT WEBDEV",       status:"W.I.P",    tagline:"Dev project social media — pilot before greenlit",tech:["HTML","CSS","JAVASCRIPT"],           github:"https://github.com/ecclesyia", live:null, tagline_full:"A platform where developers can share upcoming project plans — like an animation pilot before greenlighting. Think shareholder updates for software. W.I.P." },
  { id:4,  code:"OBJ-04", year:"2026", name:"PROJECT WEBMARKET",    status:"W.I.P",    tagline:"Global currency tracker and predictor",          tech:["HTML","JAVASCRIPT","PYTHON","CSS"],  github:"https://github.com/ecclesyia", live:null, tagline_full:"Tracks currency strength/weakness across nations using Google API, with USD as the baseline. Includes ML-based prediction for upcoming currency movements. Side hustle origin." },
  { id:5,  code:"OBJ-05", year:"2026", name:"TRAINMODELDATABASE",   status:"ACTIVE",   tagline:"Sentiment analysis on Anilist reviews",          tech:["PYTHON","ML","SKLEARN"],             github:"https://github.com/ecclesyia", live:null, tagline_full:"ML pipeline using scikit-learn to classify positive/negative sentiment from Anilist review data sourced via Kaggle CSV. Models trained with joblib + numpy. Pytest for validation." },
  { id:6,  code:"OBJ-06", year:"2026", name:"GY'OREAL",             status:"ACTIVE",   tagline:"Makeup brand website — Binus case study",        tech:["HTML","TAILWIND","JAVASCRIPT"],      github:"https://github.com/ecclesyia", live:null, tagline_full:"Case study project for a fictional makeup brand (GY'Oreal). Built as a Binus University assignment covering product presentation, UI design, and responsive layout." },
  { id:7,  code:"OBJ-07", year:"2026", name:"REVIEW GAME",          status:"W.I.P",    tagline:"Steam review sentiment analysis via SteamAPI",   tech:["PYTHON","ML","SKLEARN"],             github:"https://github.com/ecclesyia", live:null, tagline_full:"Fetches 2000 real reviews from Steam (defaulting to Uma Musume). Runs sentiment analysis using scikit-learn + scikeras to classify positive vs negative player remarks. Binus assignment." },
  { id:8,  code:"OBJ-08", year:"2026", name:"GAME-01",              status:"W.I.P",    tagline:"Untitled Godot game — concept in design",        tech:["GODOT"],                            github:"https://github.com/ecclesyia", live:null, tagline_full:"Name is still a placeholder. The game concept is being designed before implementation starts. Built on the Godot engine. More intel classified until greenlit." },
  { id:9,  code:"OBJ-09", year:"2026", name:"SIMPLE HOUSE",         status:"ACTIVE",   tagline:"Hospital queue management system — Binus collab",tech:["HTML","CSS","NODE.JS","MYSQL"],      github:"https://github.com/razeequtama/simplehouse", live:null, tagline_full:"Web app with user and admin panels for managing hospital queues. Admin can track system logs in real time. Collaboration project built for Binus University assignment." },
  { id:11, code:"OBJ-11", year:"2026", name:"UMA HELPER",           status:"W.I.P",    tagline:"Discord bot helper for Uma Musume",              tech:["JAVASCRIPT","DISCORD","JSON"],       github:"https://github.com/ecclesyia", live:null, tagline_full:"A Discord bot built for the Uma Musume community. Responds to commands with detailed game information pulled from JSON file management. Ongoing project focused on utility and ease of use for players." },
  { id:10, code:"OBJ-10", year:"2026", name:"LUCIDITY",             status:"ACTIVE",   tagline:"Tower Defense — Brackeys Game Jam 2026",         tech:["GODOT"],                            github:"https://github.com/MikhaelAdam/TowerDefGame", live:null, tagline_full:"A Tower Defense game built for Brackeys Game Jam 2026. Developed as a team using the Godot engine. Shipped under jam conditions — scoped, built, and submitted." },
];

const STACK = {
  LANGUAGES: ["PYTHON","JAVASCRIPT","KOTLIN","CSS","HTML","C","C++","JAVA"],
  FRONTEND:  ["HTML","CSS","TAILWIND","JAVASCRIPT","REACT (LEARNING)"],
  BACKEND:   ["NODE.JS","EXPRESS.JS","MYSQL","DOCKER"],
  "ML / AI": ["SCIKIT-LEARN","SCIKERAS","JOBLIB","NUMPY","KAGGLE"],
  GAME:      ["GODOT","GDSCRIPT"],
  TOOLS:     ["GIT","GITHUB","JUPYTER","VS CODE"],
};

const TICKER_ITEMS = [
  "LUCIDITY ── BRACKEYS JAM 2026","SIMPLE HOUSE ── HOSPITAL QUEUE SYS",
  "TRAINMODELDATABASE ── SENTIMENT ANALYSIS","REVIEW GAME ── STEAM API",
  "BINUS UNIVERSITY · SOFTWARE ENGINEERING","JAKARTA · BEKASI, ID",
  "HIMTI · RESPONSI / TUTOR","PYTHON · KOTLIN · JAVASCRIPT · GODOT",
  "ECCLESYIA.DEV ── AVAILABLE",
];

// ── Stars ──────────────────────────────────────────────────────
const STARS = Array.from({length:120},(_,i)=>({
  id:i,
  top:  Math.random()*100,
  left: Math.random()*100,
  size: Math.random()<0.7?1:Math.random()<0.9?1.5:2,
  opacity: 0.15+Math.random()*0.55,
  blink: Math.random()>0.7,
  delay: (Math.random()*3).toFixed(1),
  depth: 0.2+Math.random()*0.8,
}));

const field = document.getElementById('starfield');
const starEls = STARS.map(s => {
  const el = document.createElement('div');
  el.className = 'star' + (s.blink?' blink':'');
  el.style.cssText = `width:${s.size}px;height:${s.size}px;opacity:${s.opacity};top:${s.top}%;left:${s.left}%;--sop:${s.opacity};animation-delay:${s.delay}s`;
  field.appendChild(el);
  return { el, s };
});

let mouseX=0, mouseY=0;
document.addEventListener('mousemove', e => {
  mouseX = (e.clientX/innerWidth  - 0.5)*2;
  mouseY = (e.clientY/innerHeight - 0.5)*2;
  starEls.forEach(({el,s}) => {
    el.style.transform = `translate(${mouseX*s.depth*-8}px,${mouseY*s.depth*-8}px)`;
  });
});

// ── Clock ──────────────────────────────────────────────────────
const clockEl = document.getElementById('clock');
setInterval(()=>{
  clockEl.textContent = new Date().toISOString().replace('T',' ').slice(0,19)+' UTC';
},1000);

// ── Cursor blink ───────────────────────────────────────────────
let blink=true;
setInterval(()=>{
  blink=!blink;
  document.getElementById('cursor').style.opacity = blink?'1':'0';
  document.getElementById('contact-cursor').style.opacity = blink?'1':'0';
},530);

// ── Ticker ─────────────────────────────────────────────────────
const tickerText = TICKER_ITEMS.join('   ✦   ') + '   ✦   ';
document.getElementById('ticker-a').textContent = tickerText;
document.getElementById('ticker-b').textContent = tickerText;

// ── Stack ──────────────────────────────────────────────────────
const stackList = document.getElementById('stack-list');
Object.entries(STACK).forEach(([cat, items]) => {
  const row = document.createElement('div');
  row.className = 'stack-row';
  row.innerHTML = `<span class="stack-cat">${cat}</span><div class="stack-items">${
    items.map((it,i)=>`<span class="stack-item">${it}</span>${i<items.length-1?'<span class="stack-sep">·</span>':''}`).join('')
  }</div>`;
  stackList.appendChild(row);
});

// ── Scroll spy ─────────────────────────────────────────────────
const navLinks = document.querySelectorAll('.nav-link[data-section]');
const sections = ['projects','stack','about','contact'];
window.addEventListener('scroll', ()=>{
  let closest = sections[0], minDist = Infinity;
  sections.forEach(id => {
    const el = document.getElementById(id);
    if(!el) return;
    const dist = Math.abs(el.getBoundingClientRect().top - 80);
    if(dist < minDist){ minDist=dist; closest=id; }
  });
  navLinks.forEach(a => {
    a.classList.toggle('active', a.dataset.section === closest);
  });
}, {passive:true});

// ── F1–F4 keyboard nav ─────────────────────────────────────────
const fmap = {F1:'projects',F2:'stack',F3:'about',F4:'contact'};
document.addEventListener('keydown', e => {
  if(fmap[e.key]){
    e.preventDefault();
    document.getElementById(fmap[e.key])?.scrollIntoView({behavior:'smooth'});
  }
  if(e.key==='Escape') closeModal();
});

// ── Stat counter ───────────────────────────────────────────────
function countUp(el, target, duration){
  const start = performance.now();
  const step = now => {
    const p = Math.min((now-start)/duration,1);
    const eased = 1-Math.pow(1-p,3);
    el.textContent = Math.round(eased*target);
    if(p<1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

const statsPanel = document.getElementById('stats-panel');
let statsDone = false;
new IntersectionObserver(entries=>{
  if(entries[0].isIntersecting && !statsDone){
    statsDone = true;
    countUp(document.getElementById('stat-projects'), 11,   1000);
    countUp(document.getElementById('stat-active'),   5,    1000);
    countUp(document.getElementById('stat-grad'),     2028, 1200);
  }
},{threshold:0.5}).observe(statsPanel);

// ── Projects ───────────────────────────────────────────────────
let currentFilter = 'ALL';

function statusClass(s){
  if(s==='ACTIVE')   return 'active';
  if(s==='W.I.P')    return 'wip';
  return 'archived';
}

function renderProjects(){
  const grid = document.getElementById('project-grid');
  const filtered = currentFilter==='ALL'
    ? PROJECTS
    : PROJECTS.filter(p=>p.tech.includes(currentFilter));

  document.getElementById('filter-count').textContent =
    String(filtered.length).padStart(2,'0')+'/'+String(PROJECTS.length).padStart(2,'0')+' PROJECTS';

  grid.style.opacity='0';
  setTimeout(()=>{
    grid.innerHTML='';
    filtered.forEach((p,i)=>{
      const sc = statusClass(p.status);
      const dotHtml = sc==='active'
        ? `<span class="card-dot active"></span>`
        : sc==='wip'
        ? `<span class="card-dot wip"></span>`
        : '';
      const card = document.createElement('article');
      card.className='project-card';
      card.style.animationDelay=`${i*35}ms`;
      card.innerHTML=`
        <div class="card-top">
          <span class="card-code">${p.code} / ${p.year}</span>
          <div class="card-status-wrap">
            ${dotHtml}
            <span class="card-status ${sc}">${p.status}</span>
          </div>
        </div>
        <div>
          <div class="card-title">${p.name}</div>
          <div class="card-tagline">${p.tagline}</div>
        </div>
        <div class="card-desc">${p.tagline_full}</div>
        <div class="tech-list">${p.tech.map(t=>`<span class="tech-tag">${t}</span>`).join('')}</div>
        <div class="card-footer">
          <div class="card-stars">★ ${p.id===9||p.id===10?'0':'0'}</div>
          <div class="card-links">
            <a class="card-link" href="${p.github}" target="_blank" rel="noopener noreferrer" onclick="event.stopPropagation()">⎋ GH ↗</a>
            ${p.live?`<a class="card-link" href="${p.live}" target="_blank" rel="noopener noreferrer" onclick="event.stopPropagation()">↗ LIVE</a>`:''}
          </div>
        </div>
        <div class="card-expand">CLICK TO EXPAND ↗</div>
      `;
      card.addEventListener('click',()=>openModal(p));
      grid.appendChild(card);
    });
    grid.style.opacity='1';
  },160);
}

document.querySelectorAll('.filter-btn').forEach(btn=>{
  btn.addEventListener('click',()=>{
    document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    currentFilter = btn.dataset.filter;
    renderProjects();
  });
});

renderProjects();

// ── Modal ──────────────────────────────────────────────────────
function openModal(p){
  const sc = statusClass(p.status);
  document.getElementById('modal-meta').textContent = `${p.code} / ${p.year}`;
  document.getElementById('modal-title').textContent = p.name;
  document.getElementById('modal-tagline').textContent = p.tagline;
  document.getElementById('modal-desc').textContent = p.tagline_full;

  const dot = document.getElementById('modal-dot');
  if(sc==='active')   { dot.style.background='var(--star)'; dot.style.boxShadow='var(--dot-glow)'; }
  else if(sc==='wip') { dot.style.background='#7a9bc4'; dot.style.boxShadow='none'; }
  else                { dot.style.background='var(--dim1)'; dot.style.boxShadow='none'; }

  const st = document.getElementById('modal-status-text');
  st.textContent = p.status;
  st.style.color = sc==='active'?'var(--star)':sc==='wip'?'#7a9bc4':'var(--dim1)';
  st.style.textShadow = sc==='active'?'var(--glow-sm)':'none';
  st.style.fontSize='11px';
  st.style.letterSpacing='0.14em';

  document.getElementById('modal-tech').innerHTML =
    p.tech.map(t=>`<span class="modal-tech-tag">${t}</span>`).join('');

  document.getElementById('modal-links').innerHTML = `
    <a class="modal-link" href="${p.github}" target="_blank" rel="noopener noreferrer">⎋ VIEW ON GITHUB ↗</a>
    ${p.live?`<a class="modal-link" href="${p.live}" target="_blank" rel="noopener noreferrer">↗ LIVE</a>`:''}
  `;

  document.getElementById('modal-overlay').classList.add('open');
  document.body.style.overflow='hidden';
}

function closeModal(){
  document.getElementById('modal-overlay').classList.remove('open');
  document.body.style.overflow='';
}

document.getElementById('modal-overlay').addEventListener('click', e=>{
  if(e.target===document.getElementById('modal-overlay')) closeModal();
});
document.getElementById('modal-close').addEventListener('click', closeModal);

// ── Copy email ─────────────────────────────────────────────────
const copyBtn = document.getElementById('copy-btn');
copyBtn.addEventListener('click',()=>{
  navigator.clipboard.writeText('ecclesiatesnsbusiness@gmail.com').then(()=>{
    copyBtn.textContent='✓ COPIED!';
    copyBtn.classList.add('copied');
    setTimeout(()=>{
      copyBtn.textContent='⧉ COPY';
      copyBtn.classList.remove('copied');
    },2000);
  });
});
