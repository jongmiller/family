/* Milla House Family OS — v1 */

// ---------- Meal rotation (repeats weekly) ----------
// day index: 0=Sunday ... 6=Saturday
const MEALS = {
  0: { // Sunday
    breakfast: { name: "Protein Oats", detail: "Oats + whey + raspberries + peanut butter" },
    lunch: { name: "Turkey Avocado Veggie Wraps", detail: "Sliced turkey, avocado, veggies in whole-wheat tortillas", url: "https://www.melskitchencafe.com/turkey-avocado-veggie-wraps/" },
    dinner: { name: "Cheesy Tex-Mex Zucchini Skillet", detail: "~45 min · ground turkey, zucchini, black beans, corn", url: "https://www.melskitchencafe.com/cheesy-tex-mex-zucchini-skillet/" },
  },
  1: { // Monday
    breakfast: { name: "Protein Oats", detail: "Oats + whey + raspberries + peanut butter" },
    lunch: { name: "Turkey Avocado Veggie Wraps", detail: "Sliced turkey, avocado, veggies in whole-wheat tortillas", url: "https://www.melskitchencafe.com/turkey-avocado-veggie-wraps/" },
    dinner: { name: "Teriyaki Chicken Stir-Fry", detail: "~34 min · chicken + brown rice + broccoli, carrots, peppers", url: "https://www.melskitchencafe.com/teriyaki-chicken-stir-fry-30-minute-meal/" },
  },
  2: { // Tuesday
    breakfast: { name: "Greek Yogurt Power Bowl", detail: "Nonfat Greek yogurt + whey + blueberries + almonds" },
    lunch: { name: "Tuna Quesadilla Melts", detail: "Tuna + cheddar in tortillas, apple on the side", url: "https://www.melskitchencafe.com/tuna-quesadilla-melts/" },
    dinner: { name: "Thai-Style Ground Turkey & Green Beans", detail: "~20 min · 93% turkey + rice + green beans", url: "https://www.melskitchencafe.com/thai-style-ground-turkey-and-green-beans-20-minute-meal/" },
  },
  3: { // Wednesday
    breakfast: { name: "Egg Scramble", detail: "Eggs + egg whites + cheddar + toast + avocado" },
    lunch: { name: "Chicken Quinoa Power Bowl", detail: "Grilled chicken, quinoa, veggies, lemon dressing" },
    dinner: { name: "Sheet Pan Chicken Fajitas", detail: "~35 min · chicken + peppers & onions in tortillas", url: "https://www.melskitchencafe.com/wprm_print/easy-sheet-pan-chicken-fajitas-2" },
  },
  4: { // Thursday
    breakfast: { name: "Protein Oats", detail: "Oats + whey + raspberries + peanut butter" },
    lunch: { name: "Turkey Avocado Veggie Wraps", detail: "Sliced turkey, avocado, veggies in whole-wheat tortillas", url: "https://www.melskitchencafe.com/turkey-avocado-veggie-wraps/" },
    dinner: { name: "The Best Fish Tacos", detail: "~25 min · chili-lime cod, cabbage slaw, corn tortillas", url: "https://www.melskitchencafe.com/the-best-fish-tacos/" },
  },
  5: { // Friday
    breakfast: { name: "Greek Yogurt Power Bowl", detail: "Nonfat Greek yogurt + whey + blueberries + almonds" },
    lunch: { name: "Tuna Quesadilla Melts", detail: "Tuna + cheddar in tortillas, apple on the side", url: "https://www.melskitchencafe.com/tuna-quesadilla-melts/" },
    dinner: { name: "Slow Cooker Posole", detail: "Start in the morning · pork & hominy stew", url: "https://www.melskitchencafe.com/slow-cooker-posole/" },
  },
  6: { // Saturday
    breakfast: { name: "Egg Scramble", detail: "Eggs + egg whites + cheddar + toast + avocado" },
    lunch: { name: "Chicken Quinoa Power Bowl", detail: "Grilled chicken, quinoa, veggies, lemon dressing" },
    dinner: { name: "Teriyaki Turkey Burgers w/ Grilled Pineapple", detail: "~40 min · + sweet-potato wedges", url: "https://www.melskitchencafe.com/teriyaki-turkey-burgers-with-grilled-pineapple/" },
  },
};
const DAY_NAMES = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

// ---------- Grocery list (starter, editable) ----------
const GROCERY_SECTIONS = {
  "Meat & Seafood": ["Chicken breast ~3 kg","Ground turkey 93% ~3.2 kg","Deli turkey ~1.2 kg","Cod or tilapia ~1.2 kg","Pork shoulder ~1.2 kg","Canned tuna x6"],
  "Dairy & Eggs": ["Nonfat Greek yogurt ~2 kg","Cottage cheese ~1 kg","Eggs (dozen)","Liquid egg whites","Cheddar ~300 g"],
  "Produce": ["Raspberries","Blueberries","Strawberries","Apples x8","Avocados x7","Limes x8","Broccoli x2","Carrots x5","Bell peppers x9","Onions x5","Green beans 800 g","Zucchini x5","Cabbage","Sweet potatoes x5","Pineapple x1","Garlic"],
  "Bakery": ["Whole-grain bread","Large whole-wheat tortillas","Small tortillas x2 packs","Burger buns x7"],
  "Pantry": ["Rolled oats","Whey protein","Brown rice","Quinoa","Almonds","Peanut butter","Black beans x3 cans","Hominy x3 large cans","Diced tomatoes x2 cans","Salsa verde","Salsa"],
};

// ---------- School calendar (Davis School District) ----------
const NO_SCHOOL = {
  "2026-09-07": "Labor Day",
  "2026-10-14": "Professional Day", "2026-10-15": "Fall Break", "2026-10-16": "Fall Break",
  "2026-11-25": "Compensation Day", "2026-11-26": "Thanksgiving Break", "2026-11-27": "Thanksgiving Break",
  "2026-12-21": "Winter Break", "2026-12-22": "Winter Break", "2026-12-23": "Winter Break",
  "2026-12-24": "Winter Break", "2026-12-25": "Winter Break", "2026-12-28": "Winter Break",
  "2026-12-29": "Winter Break", "2026-12-30": "Winter Break", "2026-12-31": "Winter Break",
  "2027-01-01": "Winter Break", "2027-01-04": "Professional Day", "2027-01-05": "Professional Day",
  "2027-01-18": "MLK Day", "2027-02-12": "Compensation Day", "2027-02-15": "Presidents' Day",
  "2027-03-12": "Professional Day",
  "2027-04-05": "Spring Break", "2027-04-06": "Spring Break", "2027-04-07": "Spring Break",
  "2027-04-08": "Spring Break", "2027-04-09": "Spring Break",
  "2027-05-31": "Memorial Day",
};
const AB_SPECIAL = { "2027-03-23": "ACT Day", "2027-05-28": "Last Day" };

function isoOf(dt) {
  return dt.getFullYear() + "-" + String(dt.getMonth()+1).padStart(2,"0") + "-" + String(dt.getDate()).padStart(2,"0");
}
// A/B pattern verified against the district calendar: continuous alternation
// from 2026-08-20 = A on school days.
function abLetter(iso) {
  let d = new Date(2026, 7, 20), letter = "A";
  const target = new Date(iso + "T12:00:00");
  while (d <= target) {
    const cur = isoOf(d);
    if (d.getDay() !== 0 && d.getDay() !== 6 && !NO_SCHOOL[cur] && !AB_SPECIAL[cur]) {
      if (cur === iso) return letter;
      letter = letter === "A" ? "B" : "A";
    }
    d.setDate(d.getDate() + 1);
  }
  return null;
}

// ---------- Render ----------
const now = new Date();
const todayIso = isoOf(now);
document.getElementById("today-date").textContent =
  now.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" });

const abBadge = document.getElementById("ab-badge");
if (NO_SCHOOL[todayIso]) {
  abBadge.textContent = "No school";
  abBadge.classList.add("none");
} else if (AB_SPECIAL[todayIso]) {
  abBadge.textContent = AB_SPECIAL[todayIso];
  abBadge.classList.add("none");
} else {
  const L = abLetter(todayIso);
  abBadge.textContent = L ? L + " Day" : "";
  if (!L) abBadge.classList.add("none");
}

const dow = now.getDay();
const todays = MEALS[dow];
document.getElementById("today-meals").innerHTML = ["breakfast","lunch","dinner"].map(k => {
  const m = todays[k];
  return `<div class="meal"><div class="label">${k}</div><div class="name">${m.name}</div>` +
    `<div class="detail">${m.detail}</div>` +
    (m.url ? `<a href="${m.url}" target="_blank" rel="noopener">Recipe →</a>` : "") + `</div>`;
}).join("");
document.getElementById("rotation-note").textContent = "Week of " +
  new Date(now.getFullYear(), now.getMonth(), now.getDate() - dow).toLocaleDateString("en-US", { month: "short", day: "numeric" });

// Week dinners
const weekBox = document.getElementById("week-dinners");
weekBox.innerHTML = [1,2,3,4,5,6,0].map(d => {
  const m = MEALS[d].dinner;
  const isToday = d === dow ? " today" : "";
  return `<div class="dinner${isToday}"><div class="day">${DAY_NAMES[d]}</div><div class="name">${m.name}</div>` +
    (m.url ? `<a href="${m.url}" target="_blank" rel="noopener">Recipe →</a>` : "") + `</div>`;
}).join("");

// School box: next no-school day
(function(){
  const box = document.getElementById("school-box");
  let d = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1), found = null;
  for (let i = 0; i < 240 && !found; i++) {
    const iso = isoOf(d);
    if (NO_SCHOOL[iso]) found = { iso, label: NO_SCHOOL[iso] };
    d.setDate(d.getDate() + 1);
  }
  const todayNote = NO_SCHOOL[todayIso]
    ? `<div class="school-line">🎉 <strong>No school today</strong> — ${NO_SCHOOL[todayIso]}</div>`
    : "";
  const nextNote = found
    ? `<div class="school-line">Next no-school day: <strong>${found.label}</strong> — ${new Date(found.iso+"T12:00:00").toLocaleDateString("en-US",{weekday:"long", month:"long", day:"numeric"})}</div>`
    : "";
  box.innerHTML = todayNote + nextNote;
})();

// ---------- Checkable lists (localStorage) ----------
function makeList(key, seedSections, listEl, inputEl, addBtn, clearBtn) {
  let items;
  try { items = JSON.parse(localStorage.getItem(key)) || null; } catch(e) { items = null; }
  if (!items) {
    items = [];
    let id = 1;
    for (const [sec, names] of Object.entries(seedSections)) {
      names.forEach(n => items.push({ id: id++, section: sec, text: n, done: false }));
    }
    save();
  }
  function save() { localStorage.setItem(key, JSON.stringify(items)); }
  function render() {
    const bySec = {};
    items.forEach(it => { (bySec[it.section] = bySec[it.section] || []).push(it); });
    listEl.innerHTML = Object.entries(bySec).map(([sec, arr]) =>
      `<div class="section-title">${sec}</div>` + arr.map(it =>
        `<div class="check-item${it.done ? " done" : ""}">` +
        `<input type="checkbox" data-id="${it.id}" ${it.done ? "checked" : ""}>` +
        `<span>${it.text}</span><button class="del" data-id="${it.id}">×</button></div>`
      ).join("")
    ).join("");
    listEl.querySelectorAll('input[type="checkbox"]').forEach(cb =>
      cb.addEventListener("change", () => {
        const it = items.find(x => x.id == cb.dataset.id);
        it.done = cb.checked; save(); render();
      }));
    listEl.querySelectorAll(".del").forEach(b =>
      b.addEventListener("click", () => {
        items = items.filter(x => x.id != b.dataset.id); save(); render();
      }));
  }
  function addItem(text, section) {
    text = text.trim();
    if (!text) return;
    const id = items.length ? Math.max(...items.map(x => x.id)) + 1 : 1;
    items.push({ id, section: section || "Added", text, done: false });
    save(); render();
  }
  addBtn.addEventListener("click", () => { addItem(inputEl.value); inputEl.value = ""; inputEl.focus(); });
  inputEl.addEventListener("keydown", e => { if (e.key === "Enter") { addItem(inputEl.value); inputEl.value = ""; } });
  clearBtn.addEventListener("click", () => { items = items.filter(x => !x.done); save(); render(); });
  render();
  return { addItem };
}

makeList("mh_grocery_v1", GROCERY_SECTIONS,
  document.getElementById("grocery-list"),
  document.getElementById("grocery-input"),
  document.getElementById("grocery-add"),
  document.getElementById("grocery-clear"));

makeList("mh_tasks_v1", { "This week": ["Sunday meal prep (~60 min)", "Check school emails for calendar items"] },
  document.getElementById("task-list"),
  document.getElementById("task-input"),
  document.getElementById("task-add"),
  document.getElementById("task-clear"));
