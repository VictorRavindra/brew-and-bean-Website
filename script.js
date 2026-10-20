// ---------- Menu data ----------
const MENU = {
  coffee: [
    { name: "Filter kaapi", price: 90, desc: "South Indian decoction with frothed whole milk, served in a davara.", tag: "Classic" },
    { name: "Flat white", price: 180, desc: "Double ristretto, velvety micro-foam." },
    { name: "Pour-over of the fortnight", price: 220, desc: "Rotating single-origin from our partner estates.", tag: "New" },
    { name: "Cold brew tonic", price: 210, desc: "18-hour cold brew over tonic water and orange peel." },
    { name: "Cortado", price: 170, desc: "Equal parts espresso and warm milk." },
    { name: "Mocha", price: 200, desc: "Espresso, steamed milk and 70% dark chocolate." },
  ],
  tea: [
    { name: "Masala chai", price: 80, desc: "Assam leaf simmered with ginger, cardamom and clove." },
    { name: "Matcha latte", price: 240, desc: "Ceremonial-grade matcha whisked to order." },
    { name: "Hibiscus iced tea", price: 150, desc: "Tart, bright, lightly sweetened." },
    { name: "Hot chocolate", price: 190, desc: "Made with real chocolate, topped with cocoa." },
  ],
  bakes: [
    { name: "Butter croissant", price: 140, desc: "Laminated over three days. Out of the oven at 7 am." },
    { name: "Cardamom bun", price: 130, desc: "Swedish-style knot with a cardamom-sugar glaze.", tag: "Favourite" },
    { name: "Banana walnut loaf", price: 120, desc: "Thick slice, toasted with salted butter." },
    { name: "Dark chocolate cookie", price: 110, desc: "Crisp edges, gooey middle, flaky salt." },
  ],
  plates: [
    { name: "Avocado sourdough", price: 320, desc: "Smashed avocado, chilli oil, lime, toasted seeds." },
    { name: "Shakshuka", price: 340, desc: "Eggs baked in spiced tomato, with warm bread." },
    { name: "Paneer pesto sandwich", price: 290, desc: "Grilled paneer, basil pesto, sun-dried tomato." },
    { name: "Granola bowl", price: 260, desc: "House granola, yoghurt, seasonal fruit, honey.", tag: "Vegan option" },
  ],
};

const menuList = document.getElementById("menu-list");
const tabs = document.querySelectorAll('[role="tab"]');

function renderMenu(category) {
  menuList.innerHTML = MENU[category]
    .map(
      (item) => `
      <li class="menu-item">
        <h3>${item.name}${item.tag ? `<span class="tag">${item.tag}</span>` : ""}</h3>
        <span class="price">₹${item.price}</span>
        <p>${item.desc}</p>
      </li>`
    )
    .join("");
}

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((t) => t.setAttribute("aria-selected", "false"));
    tab.setAttribute("aria-selected", "true");
    renderMenu(tab.dataset.tab);
  });
});
renderMenu("coffee");

// ---------- Mobile nav ----------
const navToggle = document.querySelector(".nav-toggle");
const nav = document.getElementById("nav");
navToggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(open));
});
nav.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => {
    nav.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  })
);

// ---------- Gallery (illustrated tiles, no external images needed) ----------
const GALLERY = [
  { caption: "The front counter", bg: "#234235", art: counterArt },
  { caption: "Monday roast", bg: "#e3a72f", art: beansArt },
  { caption: "Fresh croissants", bg: "#dfe7d6", art: croissantArt },
  { caption: "Garden seating", bg: "#7e9a74", art: gardenArt },
  { caption: "Latte art", bg: "#6b4226", art: latteArt },
  { caption: "Window seats", bg: "#17201b", art: windowArt },
];

function counterArt() {
  return `<rect x="20" y="170" width="360" height="110" fill="#6b4226"/><rect x="20" y="160" width="360" height="14" fill="#fbfaf6"/>
  <rect x="60" y="100" width="70" height="60" rx="6" fill="#c9cfc5"/><rect x="72" y="86" width="46" height="16" fill="#9aa39a"/>
  <circle cx="250" cy="130" r="22" fill="#fbfaf6"/><circle cx="300" cy="135" r="17" fill="#e3a72f"/>
  <path d="M40 40h320" stroke="#e3a72f" stroke-width="4"/><circle cx="110" cy="40" r="10" fill="#e3a72f"/><circle cx="290" cy="40" r="10" fill="#e3a72f"/>`;
}
function beansArt() {
  let s = "";
  for (let i = 0; i < 26; i++) {
    const x = 30 + ((i * 67) % 340), y = 30 + ((i * 41) % 230), r = (i * 37) % 180;
    s += `<g transform="translate(${x} ${y}) rotate(${r})"><ellipse rx="18" ry="26" fill="#4a2c19"/><path d="M0 -24c-7 12 7 36 0 48" stroke="#e3a72f" stroke-width="3" fill="none"/></g>`;
  }
  return s;
}
function croissantArt() {
  return `<ellipse cx="200" cy="230" rx="150" ry="20" fill="#b9cfa4"/>
  <path d="M70 200c20-90 240-90 260 0-30 20-60 10-80-10-15 25-85 25-100 0-20 20-50 30-80 10z" fill="#d99a4e" stroke="#8a5a24" stroke-width="4"/>
  <path d="M140 140l20 60M200 125v75M260 140l-20 60" stroke="#8a5a24" stroke-width="4"/>`;
}
function gardenArt() {
  return `<rect y="200" width="400" height="100" fill="#5d7a55"/>
  <circle cx="80" cy="120" r="60" fill="#3f5a3a"/><rect x="74" y="150" width="12" height="60" fill="#4a2c19"/>
  <circle cx="320" cy="100" r="70" fill="#3f5a3a"/><rect x="314" y="140" width="12" height="70" fill="#4a2c19"/>
  <ellipse cx="200" cy="210" rx="50" ry="10" fill="#fbfaf6"/><rect x="196" y="210" width="8" height="40" fill="#fbfaf6"/>
  <path d="M130 50h140l-70-30z" fill="#e3a72f"/><rect x="198" y="50" width="4" height="160" fill="#fbfaf6"/>`;
}
function latteArt() {
  return `<circle cx="200" cy="150" r="110" fill="#fbfaf6"/><circle cx="200" cy="150" r="90" fill="#a8693c"/>
  <path d="M200 90c-40 0-50 50-10 60-35 5-35 45 10 50 45-5 45-45 10-50 40-10 30-60-10-60z" fill="#f4e3cf"/>
  <path d="M200 95v120" stroke="#a8693c" stroke-width="4"/>`;
}
function windowArt() {
  return `<rect x="60" y="30" width="280" height="190" rx="8" fill="#e3a72f" opacity=".85"/>
  <path d="M200 30v190M60 125h280" stroke="#17201b" stroke-width="8"/>
  <rect x="40" y="220" width="320" height="16" fill="#6b4226"/>
  <rect x="90" y="190" width="24" height="30" rx="4" fill="#fbfaf6"/><rect x="270" y="196" width="40" height="24" rx="4" fill="#234235"/>`;
}

const galleryGrid = document.getElementById("gallery-grid");
const svgTile = (g) => `<svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><rect width="400" height="300" fill="${g.bg}"/>${g.art()}</svg>`;

galleryGrid.innerHTML = GALLERY.map(
  (g, i) => `<button type="button" data-index="${i}" aria-label="Open picture: ${g.caption}"><span class="tile">${svgTile(g)}</span><span class="caption">${g.caption}</span></button>`
).join("");

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxCaption = document.getElementById("lightbox-caption");
let lastFocus = null;

galleryGrid.addEventListener("click", (e) => {
  const btn = e.target.closest("button");
  if (!btn) return;
  const g = GALLERY[btn.dataset.index];
  lightboxImg.innerHTML = svgTile(g);
  lightboxCaption.textContent = g.caption;
  lastFocus = btn;
  lightbox.hidden = false;
  lightbox.querySelector(".lightbox-close").focus();
});
function closeLightbox() {
  lightbox.hidden = true;
  if (lastFocus) lastFocus.focus();
}
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox || e.target.classList.contains("lightbox-close")) closeLightbox();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !lightbox.hidden) closeLightbox();
});

// ---------- Booking form ----------
const form = document.getElementById("booking-form");
const dateInput = document.getElementById("date");
const timeSelect = document.getElementById("time");
const guestsInput = document.getElementById("guests");
const success = document.getElementById("form-success");

const toISODate = (d) => new Date(d.getTime() - d.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
const today = new Date();
dateInput.min = toISODate(today);
dateInput.value = toISODate(today);

for (let h = 8; h <= 21; h++) {
  ["00", "30"].forEach((m) => {
    const label = `${((h + 11) % 12) + 1}:${m} ${h < 12 ? "am" : "pm"}`;
    timeSelect.insertAdjacentHTML("beforeend", `<option value="${h}:${m}">${label}</option>`);
  });
}
timeSelect.value = "19:00";

document.querySelectorAll(".stepper button").forEach((b) =>
  b.addEventListener("click", () => {
    const next = Number(guestsInput.value || 1) + Number(b.dataset.step);
    guestsInput.value = Math.min(8, Math.max(1, next));
  })
);

function setError(input, message) {
  const field = input.closest(".field");
  field.classList.toggle("invalid", Boolean(message));
  field.querySelector(".error").textContent = message || "";
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  success.hidden = true;
  let ok = true;

  const name = form.name.value.trim();
  if (name.length < 2) { setError(form.name, "Enter your name."); ok = false; } else setError(form.name);

  const phone = form.phone.value.replace(/[\s-]/g, "");
  if (!/^\+?\d{10,13}$/.test(phone)) { setError(form.phone, "Enter a 10-digit phone number."); ok = false; } else setError(form.phone);

  if (!dateInput.value || dateInput.value < dateInput.min) { setError(dateInput, "Choose today or a later date."); ok = false; } else setError(dateInput);

  if (!ok) return;

  const when = new Date(dateInput.value + "T00:00").toLocaleDateString("en-IN", { weekday: "long", day: "numeric", month: "long" });
  const time = timeSelect.options[timeSelect.selectedIndex].text;
  const guests = guestsInput.value;
  success.textContent = `Table booked, ${name.split(" ")[0]}. We'll see you on ${when} at ${time} — ${guests} ${guests === "1" ? "guest" : "guests"}.`;
  success.hidden = false;
  form.reset();
  dateInput.value = toISODate(today);
  timeSelect.value = "19:00";
  guestsInput.value = 2;
});

// ---------- Open / closed status ----------
function updateStatus() {
  const now = new Date();
  const day = now.getDay();
  const hour = now.getHours() + now.getMinutes() / 60;
  const [open, close] = day === 6 ? [8, 23] : day === 0 ? [8, 21] : [7, 22];
  const isOpen = hour >= open && hour < close;
  const el = document.getElementById("open-status");
  el.textContent = isOpen ? "Open now" : "Closed now — see you tomorrow";
  el.style.setProperty("--dot", isOpen ? "#2e8b57" : "#b3261e");
}
updateStatus();

document.getElementById("year").textContent = new Date().getFullYear();
