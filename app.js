"use strict";

const lakes = [
  {id:"alakol", names:["Alakol","Алаколь","Алакөл"], regions:["Jetisu Region","Жетысуская область","Жетісу облысы"], point:[81.75,46.15], zoom:7.1},
  {id:"aral", names:["Aral Sea","Аральское море","Арал теңізі"], regions:["Kyzylorda Region","Кызылординская область","Қызылорда облысы"], point:[60.75,46.51], zoom:7},
  {id:"balkhash", names:["Balkhash","Балхаш","Балқаш"], regions:["Balkhash","Балхаш","Балқаш"], point:[74.25,46.52], zoom:6.6},
  {id:"burabay", names:["Burabay","Бурабай","Бурабай"], regions:["Akmola Region","Акмолинская область","Ақмола облысы"], point:[70.27,53.08], zoom:10},
  {id:"caspian", names:["Caspian Sea","Каспийское море","Каспий теңізі"], regions:["Mangystau Region","Мангистауская область","Маңғыстау облысы"], point:[50.63,44.09], zoom:5.5},
  {id:"taldykol", names:["Maly Taldykol","Малый Талдыколь","Кіші Талдыкөл"], regions:["Astana","Астана","Астана"], point:[71.36,51.11], zoom:12},
  {id:"tengiz", names:["Tengiz","Тенгиз","Теңіз"], regions:["Akmola Region","Акмолинская область","Ақмола облысы"], point:[68.91,50.45], zoom:8.1}
];

const locales = {
  en: {
    code:"ENG", country:"Kazakhstan", headline:["Explore","the Kazakhstan’s","Water","Bodies"], go:"Go to map",
    about:"About", aboutTitle:"About Miyathara", guide:"How it works", close:"Close",
    aboutCopy:["Water has more stories than we see on a map.","Miyathara is an interactive space for exploring the stories of water. Beginning with Kazakhstan, it brings together the history of water bodies, the changes affecting them, and the efforts shaping their future.","By looking beyond the surface, we hope to turn curiosity into understanding — and understanding into a deeper sense of care for the water and the world around us."],
    guideCopy:"Explore water bodies through an interactive map. Each place opens a window into its story – from its significance and different changes to ongoing efforts and what may come next.",
    steps:[["Discover","Choose a water body and learn why it matters."],["Explore","Follow its history and discover how it has changed."],["Understand","Learn about the responses, research, and efforts connected to it."],["Look ahead","Explore what remains unresolved and find meaningful ways to learn more or take action."]],
    search:"Type...", searchLabel:"Search water bodies", empty:"No water bodies found.", loading:"Loading map…", error:"Map tiles are unavailable. You can still open stories from the list.",
    tabs:["The Story","The Change","The Response","Next Chapter"],
  },
  ru: {
    code:"RUS", country:"Казахстан", headline:["Откройте","","водоёмы","Казахстана"], go:"К карте",
    about:"О проекте", aboutTitle:"О проекте Miyathara", guide:"Как это работает", close:"Закрыть",
    aboutCopy:["У воды гораздо больше историй, чем видно на карте.","Miyathara — интерактивное пространство для знакомства с историями воды. Начиная с Казахстана, проект объединяет прошлое водоёмов, изменения, которые на них влияют, и усилия, определяющие их будущее.","Заглядывая глубже, мы надеемся превратить любопытство в понимание, а понимание — в более бережное отношение к воде и миру вокруг нас."],
    guideCopy:"Исследуйте водоёмы на интерактивной карте. Каждое место открывает свою историю: почему оно важно, как меняется, что делается для его сохранения и что может произойти дальше.",
    steps:[["Откройте","Выберите водоём и узнайте, почему он важен."],["Исследуйте","Познакомьтесь с его историей и узнайте, как он изменился."],["Разберитесь","Узнайте о мерах охраны, исследованиях и работе, связанной с ним."],["Загляните вперёд","Изучите нерешённые вопросы и найдите способы узнать больше или принять участие."]],
    search:"Поиск…", searchLabel:"Поиск водоёмов", empty:"Водоёмы не найдены.", loading:"Загрузка карты…", error:"Карта недоступна. Истории можно открыть из списка.",
    tabs:["История","Изменения","Меры охраны","Что дальше"],
  },
  kk: {
    code:"KAZ", country:"Қазақстан", headline:["Қазақстанның","су айдындарын","","зерттеңіз"], go:"Картаға өту",
    about:"Жоба туралы", aboutTitle:"Miyathara туралы", guide:"Қалай жұмыс істейді", close:"Жабу",
    aboutCopy:["Судың тарихы картада көрінгеннен әлдеқайда терең.","Miyathara — су туралы оқиғаларды зерттеуге арналған интерактивті кеңістік. Қазақстаннан бастап, жоба су айдындарының тарихын, оларға әсер ететін өзгерістерді және болашағын қалыптастыратын іс-қимылдарды біріктіреді.","Сыртқы көріністен тереңірек үңілу арқылы қызығушылықты түсінікке, ал түсінікті су мен айналамыздағы әлемге деген жауапты қамқорлыққа айналдыруды қалаймыз."],
    guideCopy:"Су айдындарын интерактивті карта арқылы зерттеңіз. Әр мекен өз тарихын ашады: оның маңызы, қалай өзгергені, оны сақтауға бағытталған жұмыстар және алда не болуы мүмкін екені туралы баяндайды.",
    steps:[["Танысыңыз","Су айдынын таңдап, оның неліктен маңызды екенін біліңіз."],["Зерттеңіз","Оның тарихымен танысып, қалай өзгергенін көріңіз."],["Түсініңіз","Оған қатысты қорғау шаралары, зерттеулер мен жұмыстар туралы біліңіз."],["Алға қараңыз","Шешілмеген мәселелерді зерттеп, көбірек білу немесе атсалысу жолдарын табыңыз."]],
    search:"Іздеу…", searchLabel:"Су айдындарын іздеу", empty:"Су айдындары табылмады.", loading:"Карта жүктелуде…", error:"Карта қолжетімсіз. Оқиғаларды тізімнен ашуға болады.",
    tabs:["Тарихы","Өзгерістер","Қорғау шаралары","Болашағы"],
  }
};

const id = name => document.getElementById(name);
const pin = '<svg viewBox="0 0 24 30" aria-hidden="true"><path fill-rule="evenodd" d="M12 1a10 10 0 0 0-10 10c0 7 10 18 10 18s10-11 10-18A10 10 0 0 0 12 1zm0 6a4 4 0 1 1 0 8 4 4 0 0 1 0-8z"/></svg>';
const media = matchMedia("(max-width: 740px)");
const reduce = matchMedia("(prefers-reduced-motion: reduce)");
const tabs = id("tabs");
const anchor = id("card-anchor");
const markers = new Map();
let language = "en";
let active = null;
let activeTab = 0;
let sourceButton = null;
let popupButton = null;
let map;
let mapReady = false;
let mapMessage = "loading";
let flight = 0;
let inFlight = false;
let directoryOpen = true;

const langIndex = () => ["en","ru","kk"].indexOf(language);
const nameOf = lake => lake.names[langIndex()];
const regionOf = lake => lake.regions[langIndex()] + ", " + locales[language].country;
function textNode(tag, value) {
  const el = document.createElement(tag);
  el.textContent = value;
  return el;
}
function openPanel(button) {
  if (popupButton) {
    popupButton.setAttribute("aria-expanded","false");
    id(popupButton.dataset.popover).hidden = true;
  }
  const next = button === popupButton ? null : button;
  popupButton = next;
  if (next) {
    next.setAttribute("aria-expanded","true");
    id(next.dataset.popover).hidden = false;
  }
}
function closePanel(restoreFocus = false) {
  const button = popupButton;
  openPanel(null);
  if (restoreFocus) button?.focus();
}
for (const button of document.querySelectorAll("[data-popover]")) {
  button.addEventListener("click", () => openPanel(button));
}
for (const button of document.querySelectorAll("[data-close]")) {
  button.addEventListener("click", () => closePanel(true));
}
document.addEventListener("click", event => {
  if (popupButton && !event.target.closest(".nav-item")) closePanel();
});
document.addEventListener("keydown", event => {
  if (event.key !== "Escape") return;
  if (popupButton) closePanel(true);
  else closeCard();
});
for (const button of document.querySelectorAll("[data-lang]")) {
  button.addEventListener("click", () => {
    language = button.dataset.lang;
    closePanel(true);
    renderLanguage();
  });
}
function renderLanguage() {
  const t = locales[language];
  document.documentElement.lang = language;
  id("language-button").querySelector("span").textContent = t.code;
  id("about-button").textContent = t.about;
  id("about-title").textContent = t.aboutTitle;
  id("guide-button").textContent = id("guide-title").textContent = t.guide;
  id("go").textContent = t.go;
  const [accent1, normal1, normal2, accent2] = t.headline;
  const first = textNode("span","");
  const second = textNode("span","");
  first.append(textNode("em",accent1), normal1 ? " " + normal1 : "");
  second.append(normal2 ? normal2 + " " : "", textNode("em",accent2));
  id("headline").replaceChildren(first,second);
  const [lead,...body] = t.aboutCopy;
  const leadLine = textNode("p","");
  leadLine.append(textNode("strong",lead));
  id("about-copy").replaceChildren(leadLine,...body.map(line => textNode("p",line)));
  const guideLead = textNode("p", "");
  guideLead.className = "guide-lead";
  guideLead.append(textNode("strong", t.guideCopy));
  id("guide-copy").replaceChildren(guideLead,...t.steps.map(([label,copy]) => {
    const line = textNode("p","");
    line.append(textNode("strong",label)," – "+copy);
    return line;
  }));
  for (const button of document.querySelectorAll("[data-lang]")) {
    button.setAttribute("aria-current",String(button.dataset.lang === language));
  }
  for (const button of document.querySelectorAll(".close")) button.setAttribute("aria-label",t.close);
  id("search").placeholder = t.search;
  id("search-label").textContent = t.searchLabel;
  id("empty").textContent = t.empty;
  renderMapStatus();
  renderDirectory();
  if (active) renderCard();
}
function renderMapStatus() {
  id("map-status").hidden = !mapMessage;
  id("map-status").textContent = locales[language][mapMessage] || "";
}
function syncSelection() {
  for (const button of id("places").querySelectorAll("button")) {
    button.setAttribute("aria-pressed",String(button.dataset.lake === active?.id));
  }
  for (const lake of lakes) {
    const marker = markers.get(lake.id);
    if (marker) {
      marker.setAttribute("aria-label",nameOf(lake));
      marker.setAttribute("aria-pressed",String(lake === active));
    }
  }
}
function renderDirectory() {
  const query = id("search").value.trim().toLocaleLowerCase();
  const matches = lakes.filter(lake => [...lake.names,...lake.regions].some(value => value.toLocaleLowerCase().includes(query)));
  id("places").replaceChildren(...matches.map(lake => {
    const button = textNode("button","");
    button.className = "place";
    button.dataset.lake = lake.id;
    button.innerHTML = pin;
    const copy = textNode("span","");
    copy.append(textNode("strong",nameOf(lake)), textNode("small",regionOf(lake)));
    button.append(copy);
    button.addEventListener("click", () => choose(lake,button));
    const row = textNode("li","");
    row.append(button);
    return row;
  }));
  id("empty").hidden = matches.length > 0;
  syncSelection();
}
id("search").addEventListener("input",renderDirectory);

for (let index = 0; index < 4; index++) {
  const tab = textNode("button","");
  tab.id = "lake-tab-" + index;
  tab.setAttribute("role","tab");
  tab.setAttribute("aria-controls","story");
  tab.addEventListener("click", () => { activeTab = index; renderCard(); });
  tabs.append(tab);
}
tabs.addEventListener("keydown", event => {
  const next = {ArrowLeft:(activeTab+3)%4,ArrowRight:(activeTab+1)%4,Home:0,End:3}[event.key];
  if (next === undefined) return;
  event.preventDefault();
  activeTab = next;
  renderCard();
  tabs.children[next].focus();
});
function renderCard() {
  const t = locales[language];
  id("lake-title").textContent = nameOf(active);
  id("region").textContent = regionOf(active);
  [...tabs.children].forEach((button,index) => {
    button.textContent = t.tabs[index];
    button.tabIndex = index === activeTab ? 0 : -1;
    button.setAttribute("aria-selected",String(index === activeTab));
  });
  const story = id("story");
  story.setAttribute("aria-labelledby",tabs.children[activeTab].id);
  const entry = stories[active.id];
  const paragraphs = entry[language][activeTab];
  story.replaceChildren(...paragraphs.flatMap(([heading,copy]) => [textNode("h3",heading),textNode("p",copy)]));
  story.scrollTop = 0;
  positionCard();
}
function positionCard() {
  if (anchor.hidden || !active) return;
  const scene = id("map-canvas");
  const visibleWidth = scene.clientWidth - railWidth();
  const point = mapReady ? map.project(active.point) : {x:visibleWidth/2,y:scene.clientHeight*.8};
  anchor.style.maxWidth = Math.max(0,visibleWidth-24) + "px";
  const cardWidth = anchor.offsetWidth;
  const minX = Math.min(visibleWidth/2,cardWidth/2+12);
  const maxX = Math.max(minX,visibleWidth-minX);
  const x = Math.min(maxX,Math.max(minX,point.x));
  const minY = anchor.offsetHeight+14;
  const y = Math.max(minY,Math.min(scene.clientHeight-28,point.y-34));
  anchor.style.left = x + "px";
  anchor.style.top = y + "px";
  anchor.style.setProperty("--tail-x",Math.max(15,Math.min(cardWidth-15,cardWidth/2+point.x-x))+"px");
}
function revealCard() {
  renderCard();
  anchor.hidden = false;
  positionCard();
}
function railWidth() {
  return directoryOpen && !media.matches ? document.querySelector(".directory").offsetWidth : 0;
}
function stopFlight() {
  ++flight;
  inFlight = false;
  map?.stop();
}
function choose(lake, button) {
  active = lake;
  sourceButton = button;
  activeTab = 0;
  syncSelection();
  if (media.matches && button.classList.contains("place")) id("map").scrollIntoView({behavior:reduce.matches ? "instant" : "smooth"});
  focusLocation();
}
function focusLocation() {
  stopFlight();
  anchor.hidden = true;
  if (!mapReady) { revealCard(); return; }
  const ticket = flight;
  const camera = {
    center:active.point, zoom:active.zoom,
    padding:{left:20,right:railWidth()+20,top:Math.min(250,id("map-canvas").clientHeight*.44),bottom:25}
  };
  if (reduce.matches) { map.jumpTo(camera); revealCard(); return; }
  inFlight = true;
  map.once("moveend", () => {
    if (ticket !== flight) return;
    inFlight = false;
    revealCard();
  });
  // maxDuration skips animation entirely when the calculated flight is longer.
  // An explicit duration keeps even the longest lake-to-lake journeys animated.
  map.flyTo({...camera,duration:1700,curve:1.35});
}
function closeCard() {
  if (!active) return;
  stopFlight();
  active = null;
  anchor.hidden = true;
  syncSelection();
  if (sourceButton?.isConnected) sourceButton.focus({preventScroll:true});
  else id("search").focus({preventScroll:true});
}
id("close-card").addEventListener("click",closeCard);
id("toggle-list").addEventListener("click", () => {
  directoryOpen = !directoryOpen;
  id("toggle-list").setAttribute("aria-expanded",String(directoryOpen));
  id("directory-content").hidden = !directoryOpen;
  document.querySelector(".directory").classList.toggle("collapsed",!directoryOpen);
  if (active) focusLocation();
  else if (mapReady) fitOverview();
});
document.querySelector(".back").addEventListener("click", () => {
  closeCard();
  if (mapReady) fitOverview();
});

function fitOverview() {
  map.fitBounds([[46,39.1],[89,56.6]], {
    padding:{top:36,bottom:30,left:26,right:railWidth()+20},
    duration:reduce.matches ? 0 : 500
  });
}
function createMap() {
  if (!window.maplibregl) { mapMessage = "error"; renderMapStatus(); return; }
  const attribution = '<a href="https://openfreemap.org/">OpenFreeMap</a> © <a href="https://openmaptiles.org/">OpenMapTiles</a> · © <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>';
  const maritime = ["==",["to-number",["get","maritime"],0],1];
  const landBoundary = level => ["all",["==",["get","admin_level"],level],["!",maritime]];
  const style = {
    version:8,
    sources:{atlas:{type:"vector",url:"https://tiles.openfreemap.org/planet",attribution}},
    layers:[
      {id:"paper",type:"background",paint:{"background-color":"#efeadd"}},
      {id:"water",type:"fill",source:"atlas","source-layer":"water",paint:{"fill-color":"#416d7c"}},
      {id:"country-lines",type:"line",source:"atlas","source-layer":"boundary",filter:landBoundary(2),paint:{"line-color":"#789599","line-width":["interpolate",["linear"],["zoom"],3,.65,8,1.25]}},
      {id:"region-lines",type:"line",source:"atlas","source-layer":"boundary",filter:landBoundary(4),paint:{"line-color":"#879e9c","line-opacity":.64,"line-width":["interpolate",["linear"],["zoom"],3,.55,8,1]}}
    ]
  };
  try {
    map = new maplibregl.Map({
      container:"map-canvas",style,center:[67.1,48.5],zoom:4.25,
      minZoom:2.8,maxZoom:14,dragRotate:false,pitchWithRotate:false,scrollZoom:false,attributionControl:false
    });
  } catch {
    mapMessage = "error";
    renderMapStatus();
    return;
  }
  map.touchZoomRotate.disableRotation();
  map.addControl(new maplibregl.NavigationControl({showCompass:false}),"top-left");
  map.addControl(new maplibregl.AttributionControl({compact:true}),"bottom-left");
  const timer = setTimeout(() => {
    if (!mapReady) { mapMessage = "error"; renderMapStatus(); }
  },9000);
  map.on("error", () => {
    if (!mapReady) { mapMessage = "error"; renderMapStatus(); }
  });
  map.once("load", () => {
    clearTimeout(timer);
    mapReady = true;
    mapMessage = "";
    renderMapStatus();
    for (const lake of lakes) {
      const marker = textNode("button","");
      marker.className = "map-pin";
      marker.innerHTML = pin;
      marker.addEventListener("click", () => choose(lake,marker));
      markers.set(lake.id,marker);
      new maplibregl.Marker({element:marker,anchor:"bottom"}).setLngLat(lake.point).addTo(map);
    }
    syncSelection();
    if (active) focusLocation();
    else fitOverview();
  });
  map.on("move", () => { if (!inFlight) positionCard(); });
  map.on("resize", () => { if (!inFlight) positionCard(); });
}
renderLanguage();
createMap();



