const header = document.querySelector("[data-header]");
const nav = document.querySelector("[data-nav]");
const navToggle = document.querySelector("[data-nav-toggle]");
const revealItems = document.querySelectorAll(".reveal");
const reservationForm = document.querySelector("[data-reservation-form]");
const reservationResult = document.querySelector("[data-reservation-result]");
const reservationCancel = reservationForm?.querySelector("[data-reservation-cancel]");
const languageButtons = document.querySelectorAll("[data-lang]");
let currentLanguage = localStorage.getItem("jungleLanguage") || "th";

const translations = {
  th: {
    title: "JUNGLE 孔雀庄园 HOT POT | อาหารไต้หวันและหม้อไฟเสฉวน กรุงเทพ",
    description: "JUNGLE 孔雀庄园 HOT POT ร้านหม้อไฟเสฉวนและอาหารไต้หวันในกรุงเทพ มีหม้อไฟหม่าล่า เมนูตุ๋น ข้าวหมูพะโล้ และบรรยากาศสวน",
    nav: ["เกี่ยวกับ", "เมนู", "จองคิว", "รีวิว", "รูปภาพ", "ติดต่อ"],
    heroEyebrow: "อาหารไต้หวัน / หม้อไฟเสฉวน ย่านวัฒนา",
    heroTitle: "JUNGLE 孔雀庄园 HOT POT",
    heroCopy: "หม้อไฟหม่าล่า อาหารไต้หวัน บรรยากาศสวน และบริการเป็นกันเอง ใกล้ซอยปรีดี พนมยงค์ 26",
    heroMenu: "ดูเมนูเด่น",
    heroCall: "โทรจองโต๊ะ",
    ratingLabel: "คะแนน Google",
    ratingText: "4.7 / 5 จาก 233 รีวิว",
    priceText: "ประมาณ ฿400-500 ต่อคน",
    aboutEyebrow: "ภาพรวมร้าน",
    aboutTitle: "หม้อไฟหม่าล่าและอาหารไต้หวันในบรรยากาศสวน",
    aboutBody: [
      "JUNGLE 孔雀庄园 HOT POT / TAIWANESE FOOD 台灣料理 / 四川火锅 เป็นร้านอาหารจีน-ไต้หวันในเขตวัฒนา จุดเด่นคือหม้อไฟเสฉวน น้ำซุปเห็ด เมนูไต้หวัน และบรรยากาศสวนด้านหลังร้าน",
      "ข้อมูลจากรีวิวระบุว่าเจ้าของร้านสื่อสารภาษาจีนได้ มีตัวเลือกวัตถุดิบเยอะ และมีทั้งนั่งทานที่ร้าน รับสินค้า และบริการจัดส่ง",
    ],
    stats: ["233 รีวิวบน Google", "เปิดทุกวัน ตามข้อมูลออนไลน์", "ค่าใช้จ่ายเฉลี่ยต่อคน"],
    statValues: ["4.7 คะแนน", "11:30-22:00", "฿400-500"],
    menuEyebrow: "เมนูและไฮไลต์",
    menuTitle: "หม้อไฟ อาหารไต้หวัน และเมนูยอดนิยม",
    menuCards: [
      ["Hot pot", "四川火锅 / Mala Hotpot", "หม้อไฟเสฉวนรสหม่าล่า เผ็ดชา หอมเครื่องเทศ เหมาะสำหรับแชร์ทั้งโต๊ะ"],
      ["Taiwanese food", "อาหารตุ๋นไต้หวัน", "เมนูตุ๋นรสเข้ม เสิร์ฟสไตล์ไต้หวัน ทานกับข้าวหรือแชร์เป็นกับข้าวได้ดี"],
      ["Recommended", "ลูกชิ้นหมูโฮมเมด", "ลูกชิ้นหมูโฮมเมด เสิร์ฟเป็นเมนูทานเล่นหรือใส่หม้อไฟก็เข้ากัน"],
    ],
    services: ["นั่งรับประทานที่ร้าน", "รับสินค้าโดยไม่ต้องลงจากรถ", "บริการจัดส่ง", "เหมาะสำหรับ LGBTQ+", "ระบุว่ามีเจ้าของเป็นผู้หญิง"],
    reserveEyebrow: "จองคิวล่วงหน้า",
    reserveTitle: "จองคิวล่วงหน้าแบบเลือกวัน เวลา และจำนวนคน",
    reserveBody: "ระบบนี้อ้างอิงแนวคิดร้านคิวยอดนิยมอย่างสุกี้ตี๋น้อย: ลูกค้าเลือกเวลาที่ต้องการ รับรหัสคิว และใช้รหัสนี้แจ้งพนักงานเมื่อโทรยืนยันหรือมาถึงร้าน",
    howTitle: "ขั้นตอนการจอง",
    howText: "จองออนไลน์ -> รับรหัสคิว -> โทรยืนยันกับร้าน -> แสดงรหัสเมื่อมาถึง",
    formLabels: ["ชื่อผู้จอง", "เบอร์โทร", "จำนวนคน", "วันที่", "เวลา", "หมายเหตุ"],
    placeholders: {
      name: "เช่น Somchai",
      phone: "083 527 8883",
      people: "เลือกจำนวน",
      time: "เลือกรอบ",
      note: "เช่น ขอหม้อ 2 ช่อง, มีเด็ก, ต้องการโต๊ะใหญ่",
      peopleMany: "9+ คน",
    },
    reserveButton: "รับรหัสจองคิว",
    cancelButton: "ยกเลิกการจอง",
    reviewsEyebrow: "รีวิวจากลูกค้า",
    reviewsTitle: "เสียงจากลูกค้า",
    reviewCards: [
      ["รสชาติดีมาก ของให้เลือกเยอะ คนละประมาณ 500 บาท ถือว่าคุ้มค่า เจ้าของพูดจีนได้ สื่อสารง่าย บรรยากาศดี", "Customer update"],
      ["น้ำซุปเห็ดอร่อยมากค่ะ บริการดี น่ารักมากค่ะ มีของให้เลือกเยอะ จะกลับมาทานอีกนะคะ", "Google review summary"],
      ["หม้อไฟ หมาล่าดีๆ และยังมีคาเฟ่น่ารักมาก วิวดี ธรรมชาติ บรรยากาศดี", "Google review summary"],
    ],
    galleryEyebrow: "รูปภาพและบรรยากาศ",
    galleryTitle: "โต๊ะหม้อไฟ สวนสีเขียว และอาหารไต้หวัน",
    contactEyebrow: "ข้อมูลร้าน",
    contactTitle: "JUNGLE 孔雀庄园 HOT POT",
    contactBody: "85 ซอยพัฒนเวศม์ / Soi Pridi Banomyong 26, Khlong Tan Nuea, Watthana, Bangkok 10110 เปิดประมาณ 11:30-22:00 และควรโทรเช็กก่อนเดินทาง",
    mapLabel: "เส้นทาง Google Maps",
    menuPhotos: "รูปเมนู",
    openMaps: "เปิด Google Maps",
    footerAddress: "85 Soi Pridi Banomyong 26, Bangkok",
    contactBadges: ["Plus Code: PJG3+99 Bangkok", "ราคา: ฿400-500 / คน"],
    validationTitle: "กรุณากรอกข้อมูลให้ครบ",
    validationText: "ต้องมีชื่อ เบอร์โทร จำนวนคน วันที่ และเวลา",
    bookingLabel: "รหัสจอง",
    peopleUnit: "คน",
    timeLabel: "เวลา",
    noteLabel: "หมายเหตุ",
    noNote: "ไม่มีหมายเหตุเพิ่มเติม",
    callConfirm: "โทร 083 527 8883 เพื่อยืนยันกับร้าน",
    smsConfirm: "ส่ง SMS ยืนยันการจอง",
    smsBody: "ขอยืนยันการจองคิว",
  },
  en: {
    title: "JUNGLE 孔雀庄园 HOT POT | Taiwanese Food & Sichuan Hotpot Bangkok",
    description: "JUNGLE Hot Pot in Bangkok serves Sichuan mala hotpot, Taiwanese dishes, braised plates, pork rice, and garden dining.",
    nav: ["About", "Menu", "Reserve", "Reviews", "Photos", "Contact"],
    heroEyebrow: "Taiwanese food / Sichuan hotpot in Watthana",
    heroTitle: "JUNGLE 孔雀庄园 HOT POT",
    heroCopy: "Mala hotpot, Taiwanese comfort dishes, a garden atmosphere, and friendly Chinese-speaking service near Pridi Banomyong 26.",
    heroMenu: "View Highlights",
    heroCall: "Call to Reserve",
    ratingLabel: "Google rating",
    ratingText: "4.7 / 5 from 233 reviews",
    priceText: "Approx. ฿400-500 per person",
    aboutEyebrow: "Restaurant Overview",
    aboutTitle: "Mala hotpot and Taiwanese food in a garden setting",
    aboutBody: [
      "JUNGLE 孔雀庄园 HOT POT / TAIWANESE FOOD 台灣料理 / 四川火锅 is a Chinese-Taiwanese restaurant in Watthana known for Sichuan hotpot, mushroom soup, Taiwanese dishes, and a green garden mood.",
      "Review platforms mention Chinese-speaking service, plenty of ingredient choices, dine-in, pickup, and delivery options.",
    ],
    stats: ["233 Google reviews", "Open daily, reported online", "Typical spend per person"],
    statValues: ["4.7 rating", "11:30-22:00", "฿400-500"],
    menuEyebrow: "Menu Highlights",
    menuTitle: "Hotpot, Taiwanese dishes, and customer favorites",
    menuCards: [
      ["Hot pot", "四川火锅 / Mala Hotpot", "Sichuan mala broth with fragrant spices and a spicy-numbing finish, made for sharing."],
      ["Taiwanese food", "Taiwanese Braised Dishes", "Rich braised plates served Taiwanese-style, great with rice or as shared side dishes."],
      ["Recommended", "Handmade Pork Balls", "House-made pork balls served as a snack or added into the hotpot."],
    ],
    services: ["Dine in", "Curbside pickup", "Delivery", "LGBTQ+ friendly", "Identifies as women-owned"],
    reserveEyebrow: "Advance Booking",
    reserveTitle: "Reserve by date, time, and party size",
    reserveBody: "Inspired by popular queue systems like Suki Teenoi: choose your preferred time, receive a queue code, then use it when calling or arriving at the restaurant.",
    howTitle: "How it works",
    howText: "Book online -> Get a queue code -> Call to confirm -> Show the code on arrival",
    formLabels: ["Name", "Phone", "Party size", "Date", "Time", "Note"],
    placeholders: {
      name: "e.g. Somchai",
      phone: "083 527 8883",
      people: "Select party size",
      time: "Select time",
      note: "e.g. split pot, kids, large table",
      peopleMany: "9+ people",
    },
    reserveButton: "Get Queue Code",
    cancelButton: "Cancel Booking",
    reviewsEyebrow: "Customer Reviews",
    reviewsTitle: "What guests say",
    reviewCards: [
      ["The taste is good, there are many choices, and around 500 baht per person feels fair. The owner speaks Chinese and communication is smooth.", "Customer update"],
      ["The mushroom soup is delicious, service is kind, and there are many ingredients to choose from. I will come back again.", "Google review summary"],
      ["Good mala hotpot, a cute cafe feel, nice views, nature, and a pleasant atmosphere.", "Google review summary"],
    ],
    galleryEyebrow: "Photos & Atmosphere",
    galleryTitle: "Hotpot tables, garden mood, and Taiwanese comfort food",
    contactEyebrow: "Restaurant Info",
    contactTitle: "JUNGLE 孔雀庄园 HOT POT",
    contactBody: "85 Soi Phatthanawet / Soi Pridi Banomyong 26, Khlong Tan Nuea, Watthana, Bangkok 10110. Reported hours are around 11:30-22:00. Please call before visiting.",
    mapLabel: "Google Maps directions",
    menuPhotos: "Menu photos",
    openMaps: "Open Google Maps",
    footerAddress: "85 Soi Pridi Banomyong 26, Bangkok",
    contactBadges: ["Plus Code: PJG3+99 Bangkok", "Price: ฿400-500 / person"],
    validationTitle: "Please complete the form",
    validationText: "Name, phone, party size, date, and time are required.",
    bookingLabel: "Booking code",
    peopleUnit: "people",
    timeLabel: "Time",
    noteLabel: "Note",
    noNote: "No extra note",
    callConfirm: "Call 083 527 8883 to confirm with the restaurant",
    smsConfirm: "Send booking confirmation by SMS",
    smsBody: "I would like to confirm booking code",
  },
  zh: {
    title: "JUNGLE 孔雀庄园 HOT POT | 曼谷台灣料理與四川火锅",
    description: "曼谷 JUNGLE 孔雀庄园 HOT POT 提供四川麻辣火锅、台灣料理、卤味、卤肉饭和花园用餐环境。",
    nav: ["关于", "菜单", "预约", "评价", "照片", "联系"],
    heroEyebrow: "曼谷วัฒนา区 台灣料理 / 四川火锅",
    heroTitle: "JUNGLE 孔雀庄园 HOT POT",
    heroCopy: "麻辣火锅、台灣家常菜、花园氛围，并提供友好的中文沟通服务，靠近 Pridi Banomyong 26。",
    heroMenu: "查看推荐菜单",
    heroCall: "电话订位",
    ratingLabel: "Google 评分",
    ratingText: "4.7 / 5，共 233 条评价",
    priceText: "人均约 ฿400-500",
    aboutEyebrow: "餐厅简介",
    aboutTitle: "花园氛围中的麻辣火锅与台灣料理",
    aboutBody: [
      "JUNGLE 孔雀庄园 HOT POT / TAIWANESE FOOD 台灣料理 / 四川火锅 位于曼谷วัฒนา区，主打四川火锅、菌菇汤、台灣料理和绿色花园氛围。",
      "评价平台提到店主可中文沟通，食材选择多，并提供堂食、取餐与外送服务。",
    ],
    stats: ["233 条 Google 评价", "网络资料显示每日营业", "人均消费"],
    statValues: ["4.7 分", "11:30-22:00", "฿400-500"],
    menuEyebrow: "菜单推荐",
    menuTitle: "火锅、台灣料理与人气菜品",
    menuCards: [
      ["火锅", "四川火锅 / 麻辣火锅", "香料浓郁、麻辣够味的四川锅底，适合多人分享。"],
      ["台灣料理", "台式卤味拼盘", "酱香浓郁的台式卤味，可配饭，也适合多人分享。"],
      ["推荐", "手工猪肉丸", "手工猪肉丸可单点，也很适合放入火锅。"],
    ],
    services: ["堂食", "路边取餐", "外送服务", "LGBTQ+ 友好", "女性经营店铺"],
    reserveEyebrow: "提前预约",
    reserveTitle: "选择日期、时间和人数预约",
    reserveBody: "参考热门排队系统的流程：选择想来的时间，取得预约号码，电话确认或到店时出示号码。",
    howTitle: "预约流程",
    howText: "在线预约 -> 取得号码 -> 电话确认 -> 到店出示号码",
    formLabels: ["预约姓名", "电话", "人数", "日期", "时间", "备注"],
    placeholders: {
      name: "例如 Somchai",
      phone: "083 527 8883",
      people: "选择人数",
      time: "选择时间",
      note: "例如 鸳鸯锅、有小孩、需要大桌",
      peopleMany: "9+ 人",
    },
    reserveButton: "取得预约号码",
    cancelButton: "取消预约",
    reviewsEyebrow: "顾客评价",
    reviewsTitle: "客人怎么说",
    reviewCards: [
      ["味道挺不错，东西蛮多。一个人约500泰铢，性价比还可以。老板娘说中文，沟通起来很顺畅。", "顾客反馈"],
      ["菌菇汤很好喝，服务亲切，食材选择很多，下次还会再来。", "Google 评价摘要"],
      ["麻辣火锅不错，还有可爱的咖啡氛围，景色自然，环境很好。", "Google 评价摘要"],
    ],
    galleryEyebrow: "照片与氛围",
    galleryTitle: "火锅餐桌、花园环境与台灣家常菜",
    contactEyebrow: "餐厅信息",
    contactTitle: "JUNGLE 孔雀庄园 HOT POT",
    contactBody: "地址：85 Soi Phatthanawet / Soi Pridi Banomyong 26, Khlong Tan Nuea, Watthana, Bangkok 10110。网络资料显示营业时间约 11:30-22:00，建议出发前先电话确认。",
    mapLabel: "Google Maps 路线",
    menuPhotos: "菜单照片",
    openMaps: "打开 Google Maps",
    footerAddress: "85 Soi Pridi Banomyong 26, Bangkok",
    contactBadges: ["Plus Code: PJG3+99 Bangkok", "价格：฿400-500 / 人"],
    validationTitle: "请填写完整资料",
    validationText: "姓名、电话、人数、日期和时间为必填。",
    bookingLabel: "预约号码",
    peopleUnit: "人",
    timeLabel: "时间",
    noteLabel: "备注",
    noNote: "没有额外备注",
    callConfirm: "拨打 083 527 8883 向店家确认",
    smsConfirm: "发送 SMS 确认预约",
    smsBody: "我想确认预约号码",
  },
};

const syncHeader = () => {
  header.classList.toggle("is-scrolled", window.scrollY > 28);
};

window.addEventListener("scroll", syncHeader, { passive: true });
syncHeader();

navToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.16 }
);

revealItems.forEach((item) => revealObserver.observe(item));

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    applyLanguage(button.dataset.lang);
  });
});

applyLanguage(currentLanguage);

if (reservationForm && reservationResult) {
  const dateInput = reservationForm.querySelector("#reserve-date");
  const today = new Date();
  const todayValue = formatDateValue(today);

  dateInput.min = todayValue;
  dateInput.value = todayValue;

  const savedReservation = localStorage.getItem("jungleReservation");

  if (savedReservation) {
    try {
      const reservation = JSON.parse(savedReservation);
      showReservation(reservation);
    } catch {
      localStorage.removeItem("jungleReservation");
    }
  }

  reservationForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(reservationForm);
    const name = String(formData.get("name")).trim();
    const phone = String(formData.get("phone")).trim();
    const people = String(formData.get("people")).trim();
    const date = String(formData.get("date")).trim();
    const time = String(formData.get("time")).trim();
    const note = String(formData.get("note")).trim();

    if (!name || !phone || !people || !date || !time) {
      const copy = translations[currentLanguage];
      reservationResult.hidden = false;
      reservationResult.innerHTML = `<strong>${copy.validationTitle}</strong><span>${copy.validationText}</span>`;
      return;
    }

    const bookingId = createBookingId(date, time);
    const reservation = { bookingId, name, phone, people, date, time, note };

    localStorage.setItem("jungleReservation", JSON.stringify(reservation));
    showReservation(reservation);
    reservationForm.reset();
    dateInput.value = todayValue;
  });

  if (reservationCancel) {
    reservationCancel.addEventListener("click", () => {
      localStorage.removeItem("jungleReservation");
      reservationResult.hidden = true;
      reservationForm.reset();
      dateInput.value = todayValue;
    });
  }
}

function createBookingId(date, time) {
  const compactDate = date.replaceAll("-", "");
  const compactTime = time.replace(":", "");
  const randomNumber = Math.floor(100 + Math.random() * 900);

  return `JG-${compactDate}-${compactTime}-${randomNumber}`;
}

function applyLanguage(language) {
  currentLanguage = translations[language] ? language : "th";
  const copy = translations[currentLanguage];

  document.documentElement.lang = currentLanguage;
  document.title = copy.title;
  document.querySelector('meta[name="description"]')?.setAttribute("content", copy.description);
  localStorage.setItem("jungleLanguage", currentLanguage);

  languageButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.lang === currentLanguage);
  });

  setAllText(".site-nav a", copy.nav);
  setText(".brand-mark", "孔");
  setText(".brand-text", "JUNGLE Hot Pot");
  setText(".hero-content .eyebrow", copy.heroEyebrow);
  setText(".hero-content h1", copy.heroTitle);
  setText(".hero-copy", copy.heroCopy);
  setText(".hero-actions .btn-primary", copy.heroMenu);
  setText(".hero-actions .btn-ghost", copy.heroCall);
  setText(".hero-card span", copy.ratingLabel);
  setText(".hero-card strong", copy.ratingText);
  setText(".hero-card small", copy.priceText);

  setText("#about .section-copy .eyebrow", copy.aboutEyebrow);
  setText("#about .section-copy h2", copy.aboutTitle);
  setAllText("#about .section-copy p:not(.eyebrow)", copy.aboutBody);
  setAllText("#about .about-stats strong", copy.statValues);
  setAllText("#about .about-stats span", copy.stats);

  setText("#menu .section-heading .eyebrow", copy.menuEyebrow);
  setText("#menu .section-heading h2", copy.menuTitle);
  document.querySelectorAll("#menu .menu-item").forEach((item, index) => {
    const card = copy.menuCards[index];
    if (!card) return;
    item.querySelector("span").textContent = card[0];
    item.querySelector("h3").textContent = card[1];
    item.querySelector("p").textContent = card[2];
  });
  setAllText(".feature-strip span", copy.services);

  setText("#reservation .section-copy .eyebrow", copy.reserveEyebrow);
  setText("#reservation .section-copy h2", copy.reserveTitle);
  setText("#reservation .section-copy > p", copy.reserveBody);
  setText(".queue-note strong", copy.howTitle);
  setText(".queue-note span", copy.howText);
  setAllText(".reservation-form label", copy.formLabels);
  setPlaceholder("#reserve-name", copy.placeholders.name);
  setPlaceholder("#reserve-phone", copy.placeholders.phone);
  setPlaceholder("#reserve-note", copy.placeholders.note);
  setText("#reserve-people option[value='']", copy.placeholders.people);
  setText("#reserve-people option[value='9+']", copy.placeholders.peopleMany);
  setText("#reserve-time option[value='']", copy.placeholders.time);
  setText(".reservation-actions .btn-primary", copy.reserveButton);
  setText(".reservation-actions .btn-ghost", copy.cancelButton);

  setText("#reviews .section-heading .eyebrow", copy.reviewsEyebrow);
  setText("#reviews .section-heading h2", copy.reviewsTitle);
  document.querySelectorAll("#reviews .review-card").forEach((item, index) => {
    const review = copy.reviewCards[index];
    if (!review) return;
    item.querySelector("p").textContent = `"${review[0]}"`;
    item.querySelector("span").textContent = review[1];
  });

  setText("#gallery .section-heading .eyebrow", copy.galleryEyebrow);
  setText("#gallery .section-heading h2", copy.galleryTitle);

  setText("#contact .eyebrow", copy.contactEyebrow);
  setText("#contact h2", copy.contactTitle);
  setText("#contact p:not(.eyebrow)", copy.contactBody);
  const contactLinks = document.querySelectorAll(".contact-list a");
  if (contactLinks[1]) contactLinks[1].textContent = copy.mapLabel;
  if (contactLinks[3]) contactLinks[3].textContent = copy.menuPhotos;
  setAllText(".contact-list span", copy.contactBadges);
  setText(".facebook-btn", copy.openMaps);
  setText(".site-footer span:first-child", copy.contactTitle);
  setText(".site-footer span:last-child", copy.footerAddress);

  const savedReservation = localStorage.getItem("jungleReservation");
  if (savedReservation && reservationResult && !reservationResult.hidden) {
    try {
      showReservation(JSON.parse(savedReservation));
    } catch {
      localStorage.removeItem("jungleReservation");
    }
  }
}

function setText(selector, text) {
  const element = document.querySelector(selector);
  if (element) element.textContent = text;
}

function setAllText(selector, values) {
  document.querySelectorAll(selector).forEach((element, index) => {
    if (values[index] !== undefined) element.textContent = values[index];
  });
}

function setPlaceholder(selector, value) {
  const element = document.querySelector(selector);
  if (element) element.placeholder = value;
}

function formatDateValue(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

function showReservation(reservation) {
  const copy = translations[currentLanguage];
  const safeBookingId = escapeHtml(reservation.bookingId);
  const safeName = escapeHtml(reservation.name);
  const safePeople = escapeHtml(reservation.people);
  const safeDate = escapeHtml(reservation.date);
  const safeTime = escapeHtml(reservation.time);
  const noteText = reservation.note ? `${copy.noteLabel}: ${escapeHtml(reservation.note)}` : copy.noNote;
  const confirmText = encodeURIComponent(
    `${copy.smsBody} ${reservation.bookingId}: ${reservation.name}, ${reservation.date}, ${reservation.time}, ${reservation.people} ${copy.peopleUnit}`
  );

  reservationResult.hidden = false;
  reservationResult.innerHTML = `
    <strong>${copy.bookingLabel}: ${safeBookingId}</strong>
    <span>${safeName} · ${safePeople} ${copy.peopleUnit} · ${safeDate} · ${copy.timeLabel} ${safeTime}</span>
    <span>${noteText}</span>
    <a href="tel:+66835278883">${copy.callConfirm}</a>
    <a href="sms:+66835278883?body=${confirmText}">${copy.smsConfirm}</a>
  `;
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;",
    };

    return entities[character];
  });
}
