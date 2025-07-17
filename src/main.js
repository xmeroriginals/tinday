const CL_SERVER_IP = "wss://cl.mikedev101.cc/";
const OFFICIAL_BADGE_SVG = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0,0,465.20362,447.89812"><g transform="translate(-7.39819,43.94906)"><g stroke="none" stroke-miterlimit="10"><path d="M94.68849,180c0,-80.25333 65.05818,-145.31151 145.31151,-145.31151c80.25333,0 145.31151,65.05818 145.31151,145.31151c0,80.25333 -65.05818,145.31151 -145.31151,145.31151c-80.25333,0 -145.31151,-65.05818 -145.31151,-145.31151z" fill="#ffffff" stroke-width="0.5"/><path d="M472.60181,179.87075c-1.42407,17.55884 -7.62996,34.39231 -17.94421,48.67367c-3.75179,5.79794 -6.90806,11.96019 -9.42071,18.39281c-1.95158,6.94677 -3.08082,14.09864 -3.36454,21.30875c-0.27238,17.15747 -5.23697,33.91293 -14.35537,48.44936c-11.12537,13.19007 -25.62227,23.11308 -41.94459,28.71073c-6.66115,2.57079 -13.04823,5.8019 -19.06572,9.64501c-5.37594,4.4727 -10.33127,9.42803 -14.80397,14.80397c-10.23564,14.05759 -24.22988,24.942 -40.37447,31.40237c-16.57589,3.96782 -33.90407,3.50367 -50.24379,-1.34582c-14.28515,-3.57073 -29.22956,-3.57073 -43.51471,0c-9.85595,2.36192 -19.92668,3.7147 -30.05655,4.03745c-6.61272,-0.00785 -13.18816,-0.99039 -19.51433,-2.91593c-16.14459,-6.46037 -30.13883,-17.34478 -40.37447,-31.40237c-4.4727,-5.37594 -9.42803,-10.33127 -14.80397,-14.80397c-6.0175,-3.84312 -12.40458,-7.07423 -19.06572,-9.64501c-16.32232,-5.59766 -30.81922,-15.52066 -41.94459,-28.71073c-9.1184,-14.53643 -14.08298,-31.29189 -14.35537,-48.44936c-0.28372,-7.21011 -1.41296,-14.36198 -3.36454,-21.30875c-2.42134,-6.47332 -5.58254,-12.64519 -9.42071,-18.39281c-10.0366,-14.28865 -16.00598,-31.03392 -17.2713,-48.44936c1.18513,-17.57041 7.15814,-34.48103 17.2713,-48.89797c3.75179,-5.79794 6.90806,-11.96019 9.42071,-18.39281c2.1673,-6.76892 3.52262,-13.77139 4.03745,-20.86014c0.09249,-17.09039 4.82138,-33.83529 13.68246,-48.44936c11.18697,-13.22347 25.76532,-23.14915 42.16889,-28.71073c6.66115,-2.57079 13.04823,-5.8019 19.06572,-9.64501c5.37594,-4.4727 10.33127,-9.42803 14.80397,-14.80397c10.42666,-14.05617 24.56268,-24.93004 40.82308,-31.40237c16.58334,-4.01459 33.94347,-3.47209 50.24379,1.57012c14.30998,3.36293 29.20473,3.36293 43.51471,0c16.02034,-4.87948 33.04845,-5.42128 49.34658,-1.57012c16.0966,6.54375 30.06983,17.41181 40.37447,31.40237c4.3306,5.35596 9.13516,10.31066 14.35537,14.80397c6.0175,3.84312 12.40458,7.07423 19.06572,9.64501c16.32232,5.59766 30.81922,15.52066 41.94459,28.71073c9.09748,14.54587 14.06029,31.29538 14.35537,48.44936c0.51483,7.08875 1.87014,14.09122 4.03745,20.86014c2.48486,6.58733 5.64177,12.90113 9.42071,18.84142c10.0366,14.28865 16.00598,31.03392 17.2713,48.44936zM345.64653,119.08474c-8.7954,-8.7954 -23.05557,-8.7954 -31.85097,0l-96.22582,96.45012l-51.3653,-51.5896c-8.7954,-8.7954 -23.05557,-8.7954 -31.85097,0c-8.7954,8.7954 -8.7954,23.05557 0,31.85097l67.29078,67.29078c4.21165,4.24633 9.94474,6.63483 15.92549,6.63483c5.98075,0 11.71383,-2.3885 15.92549,-6.63483l112.15131,-112.15131c8.7954,-8.7954 8.7954,-23.05557 0,-31.85097z" fill="#00b5ff" stroke-width="1"/></g></g></svg>`;
const LOCAL_STORAGE_KEY = "tinday_user_data";
const CALLS_DISABLED_KEY = "tinday_calls_disabled";
const INSTA_PROFILE_URL = "https://instagram.com/tindayofficial";
const MAX_MESSAGES = 150;

const TRUSTED_SOCIAL_DOMAINS = {
  "instagram.com": { name: "Instagram", icon: "fa-brands fa-instagram" },
  "twitter.com": { name: "Twitter", icon: "fa-brands fa-twitter" },
  "x.com": { name: "X", icon: "fa-brands fa-x-twitter" },
  "reddit.com": { name: "Reddit", icon: "fa-brands fa-reddit-alien" },
};

const TRUSTED_IMAGE_DOMAINS = [
  "i.giphy.com",
  "media.giphy.com",
  "media0.giphy.com",
  "media1.giphy.com",
  "media2.giphy.com",
  "media3.giphy.com",
  "media4.giphy.com",
  "c.tenor.com",
  "tenor.com",
  "media.tenor.com",
  "media1.tenor.com",
  "emojik.vercel.app",
  "image.pollinations.ai",
];

const IMAGE_MAX_DIMENSION = 1280;
const BLOCKED_EXTENSIONS = [
  ".exe",
  ".dll",
  ".bat",
  ".cmd",
  ".sh",
  ".msi",
  ".jar",
  ".js",
  ".vbs",
  ".scr",
  ".pif",
  ".com",
];
const ALLOWED_MIME_PATTERNS = {
  image: /^image\/(jpeg|png|gif|webp|bmp|svg\+xml)$/,
  audio: /^audio\//,
  video: /^video\//,
};

const bodyEl = document.body;
const welcomeScreen = document.getElementById("anonymous-login");
const chatScreen = document.getElementById("chat-screen");
const loginForm = document.getElementById("loginForm");
const nameInput = document.getElementById("username");
const birthdayInput = document.getElementById("birthdate");
const connectBtn = document.getElementById("loginButton");
const previousUserDiv = document.getElementById("previousUser");
const continueWithPreviousLink = document.getElementById(
  "continueWithPrevious"
);

const messagesContainer = document.getElementById("messages");
const messageForm = document.getElementById("message-form");
const messageInput = document.getElementById("message-input");
const chatRoomNameHeader = document.getElementById("header-title");

const replyPreviewArea = document.getElementById("reply-preview-area");
const replyPreviewContent = document.getElementById("reply-preview-content");
const cancelReplyBtn = document.getElementById("cancel-reply-btn");

const addButton = document.getElementById("add-button");
const actionsPopup = document.getElementById("actions-popup");
const uploadFileBtn = document.getElementById("upload-file-btn");
const openFavoritesBtn = document.getElementById("open-favorites-btn");
const fileInput = document.getElementById("file-input");

const favoritesPanel = document.getElementById("favoritesPanel");
const favoritesContent = document.getElementById("favoritesContent");

const dynamicModal = document.getElementById("dynamicModal");
const modalTitle = document.getElementById("modalTitle");
const modalMessage = document.getElementById("modalMessage");
const modalCheckboxContainer = document.getElementById(
  "modalCheckboxContainer"
);
const modalCheckbox = document.getElementById("modalCheckbox");
const modalCheckboxLabel = document.getElementById("modalCheckboxLabel");
const modalButtons = document.getElementById("modalButtons");

const themeColorMeta = document.getElementById("themeColorMeta");

const notificationSound = new Audio(
  "https://tinday.app.tc/assets/twinday/sounds/TinDay-Message.mp3"
);
const notificationFocused = new Audio(
  "https://tinday.app.tc/assets/twinday/sounds/TinDay-BGMessage.mp3"
);
const notificationVerified = new Audio(
  "https://tinday.app.tc/assets/twinday/sounds/TinDay-VerifiedMessage.mp3"
);
const messageSendSound = new Audio(
  "https://tinday.app.tc/assets/twinday/sounds/TinDay-MessageSend.mp3"
);

const callRejectedSound = new Audio(
  "https://tinday.app.tc/assets/twinday/sounds/TinDay-CallTimeoutAndRejected.mp3"
);
const callTimeoutSound = new Audio(
  "https://tinday.app.tc/assets/twinday/sounds/TinDay-CallTimeoutAndRejected.mp3"
);

const callUserBtn = document.getElementById("callUser");
const remoteAudioContainer = document.getElementById("remote-audio-container");
const callPanel = document.getElementById("call-panel");
const callerNameDiv = document.getElementById("caller-name");
const callTimerDiv = document.getElementById("call-timer");
const acceptCallBtn = document.getElementById("acceptCallBtn");
const declineCallBtn = document.getElementById("declineCallBtn");
const outgoingCallSound = document.getElementById("outgoing-call-sound");
const incomingCallSound = document.getElementById("incoming-call-sound");

const callSFX = [
  outgoingCallSound,
  incomingCallSound,
  callRejectedSound,
  callTimeoutSound,
];

let socket = null;
let myName = "";
let myPeerId = "";
let roomName = "";
let replyingToMessage = null;
let newsIndex = 0;
let newsLastShownAt = new Map();
let totalMessageCount = 0;
let clickCount = 0;
let clickTimer;
let menuJustOpened = false;
let contextMenuTargetMessageId = null;
let targetUserIdForCall = null;
let peer = null;
let localStream = null;
let currentCall = null;
let dataConnection = null;
let timerInterval = null;
let callTimeout = null;
let reconnectAttempts = 0;
const maxReconnectAttempts = 3;
let isSwitchingRooms = false;
let spamTracker = {};
let hasShownGlobalSpamWarning = false;
let callsDisabledForSession = false;
const REJECTION_SPAM_THRESHOLD = 3;
const CALL_SPAM_THRESHOLD = 2;
const SPAM_BLOCK_DURATION = 5 * 60 * 1000;
const SPAM_THRESHOLD = 7;
const SPAM_WINDOW_MS = 15000;
const COOLDOWN_DURATION_MS = 3 * 60 * 1000;
const THROTTLE_INTERVAL_MS = 9 * 1000;
const userMessageTracker = new Map();
let countdownInterval;
let urlToOpen = "";
let reconnectTimer = null;

console.log("%cDİKKAT!", "color: red; font-weight: bold; font-size: 45px;");
console.log(
  "%cBu geliştirici konsolu özelliği sadece geliştirici kullanıcılar içindir.",
  "color: yellow; font-weight: bold; font-size: 25px;"
);
console.log(
  "%cEğer biri sana bir TinDay özelliğini açmak için bir şey kopyalayıp buraya yapıştırmanı söylediyse, saldırı içindir! Böyle bir işlem, tarayıcına saldırı yapılmasına ve tarayıcı verilerinin ele geçirilmesine yol açabilir.",
  "color: white; font-weight: bold; font-size: 20px;"
);

function hideModal() {
  clearInterval(countdownInterval);
  dynamicModal.classList.remove("show");
  setTimeout(() => {
    dynamicModal.style.display = "none";
  }, 200);
}

function showModal({ title, message, checkbox = null, buttons = [] }) {
  modalTitle.textContent = title;
  modalMessage.innerHTML = message;

  if (checkbox) {
    modalCheckbox.id = checkbox.id || "modalCheckbox";
    modalCheckbox.checked = checkbox.checked || false;
    modalCheckboxLabel.textContent = checkbox.label;
    modalCheckboxLabel.htmlFor = modalCheckbox.id;
    modalCheckboxContainer.style.display = "flex";
  } else {
    modalCheckboxContainer.style.display = "none";
  }

  modalButtons.innerHTML = "";
  buttons.forEach((btnInfo) => {
    const button = document.createElement("button");
    button.id = btnInfo.id || null;
    button.textContent = btnInfo.text;
    button.className = btnInfo.class;
    if (btnInfo.disabled) button.disabled = true;
    button.addEventListener("click", btnInfo.onClick);
    modalButtons.appendChild(button);
  });

  dynamicModal.style.display = "flex";
  requestAnimationFrame(() => dynamicModal.classList.add("show"));
}

function truncateText(text, maxLength) {
  if (typeof text !== "string") return text;
  if (text.length > maxLength) {
    return text.substring(0, maxLength) + "...";
  }
  return text;
}

const imageObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      const img = entry.target;
      if (entry.isIntersecting) {
        if (img.dataset.animatedSrc) {
          img.src = img.dataset.animatedSrc;
          delete img.dataset.animatedSrc;
          img.style.minHeight = null;
        }
      } else {
        if (img.src.endsWith(".gif") && !img.dataset.animatedSrc) {
          img.dataset.animatedSrc = img.src;
          img.style.minHeight = `${img.offsetHeight}px`;
          img.src = "";
        }
      }
    });
  },
  { root: messagesContainer, threshold: 0.1 }
);

const FavoritesDB = {
  db: null,
  init() {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open("FavoritesDB", 1);
      request.onerror = (event) => {
        console.error("IndexedDB Error ", event.target.error);
        reject("Veritabanı Hatası");
      };
      request.onsuccess = (event) => {
        this.db = event.target.result;
        resolve();
      };
      request.onupgradeneeded = (event) => {
        const db = event.target.result;
        if (!db.objectStoreNames.contains("favorites")) {
          db.createObjectStore("favorites", { keyPath: "url" });
        }
      };
    });
  },
  add(url) {
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction(["favorites"], "readwrite");
      const store = transaction.objectStore("favorites");
      const request = store.add({ url: url });
      request.onsuccess = () => resolve();
      request.onerror = (e) => {
        if (e.target.error.name !== "ConstraintError")
          console.error("Favorites Error ", e.target.error);
        resolve();
      };
    });
  },
  remove(url) {
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction(["favorites"], "readwrite");
      const store = transaction.objectStore("favorites");
      const request = store.delete(url);
      request.onsuccess = () => resolve();
      request.onerror = (e) => {
        console.error("Favorites Error ", e.target.error);
        reject();
      };
    });
  },
  isFavorite(url) {
    return new Promise((resolve) => {
      if (!this.db) return resolve(false);
      const transaction = this.db.transaction(["favorites"], "readonly");
      const store = transaction.objectStore("favorites");
      const request = store.get(url);
      request.onsuccess = () => resolve(!!request.result);
      request.onerror = () => resolve(false);
    });
  },
  getAll() {
    return new Promise((resolve) => {
      const transaction = this.db.transaction(["favorites"], "readonly");
      const store = transaction.objectStore("favorites");
      const request = store.getAll();
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => resolve([]);
    });
  },
};

function saveUserData(username, birthdate) {
  try {
    const encodedData = btoa(JSON.stringify({ username, birthdate }));
    localStorage.setItem(LOCAL_STORAGE_KEY, encodedData);
  } catch (e) {
    console.error("Failed UD", e);
  }
}

function loadUserData() {
  const data = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (!data) return null;
  try {
    return JSON.parse(atob(data));
  } catch (e) {
    console.error("Failed UD", e);
    localStorage.removeItem(LOCAL_STORAGE_KEY);
    return null;
  }
}

function checkFormValidity() {
  connectBtn.disabled = !nameInput.value || !birthdayInput.value;
}

function populateFormWithPreviousData() {
  const userData = loadUserData();
  if (userData) {
    nameInput.value = userData.username;
    birthdayInput.value = userData.birthdate;
    checkFormValidity();
  }
}

function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}

function compressAndEncodeImage(file) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const reader = new FileReader();
    reader.onload = (e) => {
      img.src = e.target.result;
    };
    img.onload = () => {
      const canvas = document.createElement("canvas");
      let { width, height } = img;
      if (width > height) {
        if (width > IMAGE_MAX_DIMENSION) {
          height *= IMAGE_MAX_DIMENSION / width;
          width = IMAGE_MAX_DIMENSION;
        }
      } else {
        if (height > IMAGE_MAX_DIMENSION) {
          width *= IMAGE_MAX_DIMENSION / height;
          height = IMAGE_MAX_DIMENSION;
        }
      }
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0, width, height);
      const dataUrl = canvas.toDataURL("image/jpeg", 0.8);
      resolve(dataUrl);
    };
    img.onerror = reject;
    reader.readAsDataURL(file);
  });
}

async function handleFileSelected(file) {
  if (!file) return;

  let fileDataUrl;
  if (file.type.startsWith("image/") && file.size > 1024 * 1024) {
    try {
      displaySystemNotification("Büyük resim işleniyor, lütfen bekleyin...");
      fileDataUrl = await compressAndEncodeImage(file);
    } catch (error) {
      displaySystemNotification("Resim işlenirken bir hata oluştu.", "error");
      return;
    }
  } else {
    fileDataUrl = await fileToBase64(file);
  }

  const filePayload = {
    name: file.name,
    type: file.type,
    data_base64: fileDataUrl,
  };

  const messagePayload = {
    sender: myName,
    content: "",
    file: filePayload,
    timestamp: new Date().toISOString(),
    id: "msg-" + Date.now(),
  };

  sendMessageToServer({
    cmd: "gmsg",
    val: JSON.stringify(messagePayload),
  });
  displayMessage(messagePayload, true, false);
}

const generateSafeUniqueTag = () => {
  const randomBytes = new Uint32Array(1);
  window.crypto.getRandomValues(randomBytes);
  return randomBytes[0].toString(36);
};

const sendMessageToServer = (payload) => {
  if (socket && socket.readyState === WebSocket.OPEN) {
    socket.send(JSON.stringify(payload));
  } else {
    console.error("Socket Error");
  }
};

const handleConnect = (event) => {
  event.preventDefault();
  let name = nameInput.value.trim();
  name = DOMPurify.sanitize(name);
  const birthday = birthdayInput.value;
  saveUserData(name, birthday);

  myName = `${name}#${generateSafeUniqueTag()}`;
  myPeerId = myName
    .replace(/[#\s]+/g, "-")
    .replace(/[^a-zA-Z0-9-]/g, "")
    .replace(/-+/g, "-")
    .replace(/^-+|-+$/g, "");

  const date = new Date(birthday);
  const month = date.getUTCMonth() + 1;
  const day = date.getUTCDate();
  roomName = `TwinDayBirthdayChat${month}${day}`;
  chatRoomNameHeader.textContent = `${day}/${month} Doğumlular | Beta Test`;
  connectBtn.disabled = true;
  connectBtn.textContent = "Bağlanılıyor...";

  socket = new WebSocket(CL_SERVER_IP);
  socket.onopen = () => {
    sendMessageToServer({
      cmd: "setid",
      val: myName,
      listener: "username_cfg",
    });
  };
  socket.onmessage = (event) => {
    const packet = JSON.parse(event.data);
    switch (packet.cmd) {
      case "statuscode":
        handleStatusCode(packet);
        break;
      case "gmsg":
        handleIncomingMessage(packet);
        break;
    }
  };
  socket.onclose = () => {
    displaySystemNotification(
      "Sohbetten bağlantı sorunu oluştu, 7 saniye içinde sayfa yenilenecek.",
      "error"
    );
    setTimeout(() => {
      location.reload();
    }, 7000);
  };
  socket.onerror = (error) => {
    displaySystemNotification(
      "Bir bağlantı sorunu oluştu, 7 saniye içinde sayfa yenilenecek.",
      "error"
    );
    setTimeout(() => {
      location.reload();
    }, 7000);
  };
};

let newsPollingStarted = !1;
const handleStatusCode = async (packet) => {
  if (packet.code.includes("I:100")) {
    if (packet.listener === "username_cfg") {
      sendMessageToServer({
        cmd: "link",
        val: roomName,
        listener: "link",
      });
    } else if (packet.listener === "link") {
      welcomeScreen.style.display = "none";
      chatScreen.style.display = "flex";
      messageInput.focus();
      await FavoritesDB.init();
      initializePeerConnection();
      if (!newsPollingStarted) {
        setTimeout(() => {
          fetchAndDisplayNews();
        }, 5000);
        setInterval(fetchAndDisplayNews, 120 * 1000);
        newsPollingStarted = !0;
      }
    } else if (packet.listener === "room_switch_success") {
      displaySystemNotification(
        `${chatRoomNameHeader.textContent} odasına geçildi.`
      );
      isSwitchingRooms = false;
      messageInput.focus();
    }
  } else {
    const errorMsg = `Server Error: ${packet.code}. ${
      packet.val || "Sunucu Hatası"
    }`;
    alert(errorMsg);
    if (isSwitchingRooms) {
      displaySystemNotification(
        "Oda değiştirilirken bir hata oluştu.",
        "error"
      );
      isSwitchingRooms = false;
    } else {
      location.reload();
    }
  }
};

const displaySystemNotification = (message) => {
  const messageDiv = document.createElement("div");
  messageDiv.classList.add("message", "message-system");
  messageDiv.textContent = message;
  messagesContainer.appendChild(messageDiv);
  totalMessageCount++;
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
};

const handleIncomingMessage = (packet) => {
  let messageData;
  try {
    messageData = JSON.parse(packet.val);
  } catch (e) {
    console.warn("Received non-JSON GMSG", packet.val, e);
    return;
  }
  const senderId = messageData.sender;
  if (senderId === myName) return;
  const now = Date.now();
  if (!userMessageTracker.has(senderId)) {
    userMessageTracker.set(senderId, {
      displayName: senderId.split("#")[0],
      timestamps: [],
      isThrottled: !1,
      throttleEndTime: 0,
      lastThrottledMessageTime: 0,
    });
  }
  const userData = userMessageTracker.get(senderId);
  if (userData.isThrottled && now > userData.throttleEndTime) {
    userData.isThrottled = !1;
    userData.timestamps = [];
    displaySystemNotification(
      `${userData.displayName} adlı kullanıcının yavaşlatması kaldırıldı.`
    );
  }
  if (userData.isThrottled) {
    if (now - userData.lastThrottledMessageTime > THROTTLE_INTERVAL_MS) {
      userData.lastThrottledMessageTime = now;
      handleGlobalMessage(packet);
    } else {
      return;
    }
    return;
  }
  userData.timestamps.push(now);
  userData.timestamps = userData.timestamps.filter(
    (ts) => now - ts < SPAM_WINDOW_MS
  );
  if (userData.timestamps.length > SPAM_THRESHOLD) {
    userData.isThrottled = !0;
    userData.throttleEndTime = now + COOLDOWN_DURATION_MS;
    userData.lastThrottledMessageTime = now;
    userData.timestamps = [];
    displaySystemNotification(
      `${truncateText(
        userData.displayName,
        33
      )} Spam yaptığı için 3 dakika boyunca yavaşlatıldı.`
    );
    return;
  } else {
    handleGlobalMessage(packet);
  }
};

const handleGlobalMessage = (packet) => {
  try {
    const messageData = JSON.parse(packet.val);
    if (messageData.sender !== myName) {
      displayMessage(messageData, false, false);
    }
  } catch (e) {
    console.warn("Received non-JSON GMSG ", packet.val, e);
  }
};

async function renderFavoritesPanel() {
  const items = await FavoritesDB.getAll();
  favoritesContent.innerHTML = "";
  favoritesPanel.style.display = "";
  favoritesPanel.style.justifyContent = "";

  if (items.length === 0) {
    favoritesContent.innerHTML = `
      <div class="favorites-empty-state">
        <i class="fa-regular fa-star"></i>
        <span>Favorileriniz boş.</span>
      </div>`;

    favoritesPanel.style.display = "flex";
    favoritesPanel.style.justifyContent = "center";
  } else {
    const grid = document.createElement("div");
    grid.className = "favorites-grid";

    items.reverse().forEach((item) => {
      const favDiv = document.createElement("div");
      favDiv.className = "favorite-item";
      favDiv.innerHTML = `<img src="${item.url}" alt="Favori" loading="lazy">`;

      favDiv.onclick = () => {
        const payload = {
          sender: myName,
          content: item.url,
          timestamp: new Date().toISOString(),
          id: "msg-" + Date.now(),
        };
        sendMessageToServer({
          cmd: "gmsg",
          val: JSON.stringify(payload),
        });
        displayMessage(payload, true, false);
        favoritesPanel.classList.remove("active");
      };

      grid.appendChild(favDiv);
    });

    favoritesContent.appendChild(grid);
  }
}

async function toggleFavorite(url) {
  const allImageElements = document.querySelectorAll(
    `.message-image[src="${url}"]`
  );
  const allStarButtons = Array.from(allImageElements).map(
    (img) => img.nextElementSibling
  );
  const isFav = await FavoritesDB.isFavorite(url);
  if (isFav) {
    await FavoritesDB.remove(url);
    allStarButtons.forEach((button) => {
      if (button) {
        button.classList.remove("is-favorite");
        button.innerHTML = `<i class="fa-regular fa-star"></i>`;
      }
    });
  } else {
    await FavoritesDB.add(url);
    allStarButtons.forEach((button) => {
      if (button) {
        button.classList.add("is-favorite");
        button.innerHTML = `<i class="fa-solid fa-star"></i>`;
      }
    });
  }
  if (favoritesPanel.classList.contains("active")) {
    await renderFavoritesPanel();
  }
}

function startReply(messageId) {
  const messageEl = document.getElementById(messageId);
  if (!messageEl) return;

  const sender = messageEl.dataset.senderId || "Bilinmeyen";
  const content =
    messageEl.querySelector(".message-content")?.textContent || "Resim/Dosya";

  replyingToMessage = {
    originalSender: sender.split("#")[0],
    originalContent: content,
  };

  replyPreviewContent.innerHTML = "";
  const strongEl = document.createElement("strong");
  strongEl.textContent = truncateText(replyingToMessage.originalSender, 20);
  const textNode = document.createTextNode(
    ` Kullanıcısına yanıt veriliyor | ${truncateText(
      replyingToMessage.originalContent,
      50
    )}`
  );

  replyPreviewContent.appendChild(strongEl);
  replyPreviewContent.appendChild(textNode);

  replyPreviewArea.style.display = "block";
  messageInput.focus();
}

function cancelReply() {
  replyingToMessage = null;
  replyPreviewArea.style.display = "none";
}

const handleSendMessage = async (event) => {
  event.preventDefault();
  let messageText = messageInput.value.trim();
  let usrName = myName.split("#")[0];
  if (!messageText && !replyingToMessage) return;

  const helpRegex = /^t\.(\s*|help)$/i;
  if (helpRegex.test(messageText)) {
    displayHelpMessage();
    messageInput.value = "";
    return;
  }

  const globalChatRegex = /^t\.(globalchat|gc)$/i;
  if (globalChatRegex.test(messageText)) {
    switchToGlobalChat();
    messageInput.value = "";
    return;
  }

  const birthdayChatRegex = /^t\.(birthdaychat|brc)$/i;
  if (birthdayChatRegex.test(messageText)) {
    switchToBirthdayChat();
    messageInput.value = "";
    return;
  }

  const aiRegex = /^t\.ai\s+([\s\S]+)/i;
  const aiMatch = messageText.match(aiRegex);
  if (aiMatch) {
    const prompt = aiMatch[1];
    messageInput.value = "";
    displayLocalAiMessage("Yapay zeka düşünüyor...", "Yapay Zeka");
    try {
      const response = await fetch(
        `https://text.pollinations.ai/prompt/[Name&20Info${usrName},%20Your%20Name%20TindayAI],%20${encodeURIComponent(
          prompt
        )}`
      );
      if (!response.ok) throw new Error(`API hatası: ${response.statusText}`);
      const aiResponse = await response.text();
      displayLocalAiMessage(aiResponse, "Yapay Zeka");
    } catch (error) {
      console.error("AI fetch error:", error);
      displayLocalAiMessage(`Bir hata oluştu: ${error.message}`, "Yapay Zeka");
    }
    return;
  }

  const imgCreateRegex = /^t\.(imgcrt|imagecreate)\s+([\s\S]+)$/i;
  const imgCreateMatch = messageText.match(imgCreateRegex);
  if (imgCreateMatch) {
    let prompt = imgCreateMatch[2];
    const sizeRegex = /\s*(w|h)=(\d+)\s*/gi;
    let width = "1024";
    let height = "1024";
    const params = {};
    prompt = prompt
      .replace(sizeRegex, (match, key, value) => {
        params[key.toLowerCase()] = value;
        return "";
      })
      .trim();
    if (params.w) width = params.w;
    if (params.h) height = params.h;
    const imageUrl = `https://image.pollinations.ai/prompt/${encodeURIComponent(
      prompt
    )}?model=flux&safe=true&nologo=true&w=${width}&h=${height}&seed=${Math.floor(
      Math.random() * 100000
    )}`;
    messageText = imageUrl;
  }

  const clientCommandRegex = /\s*t\.(clear|clr|party|pty)\s*/gi;
  let hasClientCommand = false;
  let processedText = messageText
    .replace(clientCommandRegex, (match, cmd) => {
      hasClientCommand = true;
      switch (cmd.toLowerCase()) {
        case "clear":
        case "clr":
          messagesContainer.innerHTML = "";
          totalMessageCount = 0;
          displaySystemNotification("Sohbet temizlendi.");
          break;
        case "party":
        case "pty":
          startConfetti();
          break;
      }
      return "";
    })
    .trim();

  if (hasClientCommand && !processedText && !replyingToMessage) {
    messageInput.value = "";
    return;
  }

  messageInput.value = "";
  actionsPopup.classList.remove("visible");
  addButton.classList.remove("active");
  favoritesPanel.classList.remove("active");

  const messagePayload = {
    sender: myName,
    content: processedText,
    timestamp: new Date().toISOString(),
    id: "msg-" + Date.now(),
  };

  if (replyingToMessage) {
    messagePayload.reply = replyingToMessage;
    cancelReply();
  }

  sendMessageToServer({
    cmd: "gmsg",
    val: JSON.stringify(messagePayload),
  });
  displayMessage(messagePayload, true, false);
};

function formatTime(seconds) {
  const floorSeconds = Math.floor(seconds);
  const min = Math.floor(floorSeconds / 60);
  const sec = floorSeconds % 60;
  return `${min}:${sec < 10 ? "0" : ""}${sec}`;
}

async function processMessageContent(content) {
  let processedText = DOMPurify.sanitize(content, {
    USE_PROFILES: { html: false },
  });
  let imageUrls = [];
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  processedText = processedText.replace(urlRegex, (url) => {
    try {
      const urlObj = new URL(url);
      const hostname = urlObj.hostname.replace(/^www\./, "");
      if (hostname === "giphy.com" && urlObj.pathname.startsWith("/gifs/")) {
        const parts = urlObj.pathname.split("-");
        const gifId = parts[parts.length - 1];
        if (gifId) {
          imageUrls.push(`https://i.giphy.com/media/${gifId}/giphy.webp`);
          return "";
        }
      }
      if (hostname.includes("tenor.com")) {
        let gifId = "";
        const tenorViewMatch = urlObj.pathname.match(/-(\d+)$/);
        const tenorCMatch = urlObj.pathname.match(
          /\/([a-zA-Z0-9_-]+)\/tenor\.gif$/
        );
        if (tenorCMatch && tenorCMatch[1]) {
          gifId = tenorCMatch[1];
        } else if (tenorViewMatch && tenorViewMatch[1]) {
          imageUrls.push(url + ".gif");
          return "";
        }
        if (gifId) {
          imageUrls.push(`https://c.tenor.com/${gifId}/tenor.gif`);
          return "";
        }
      }
      if (TRUSTED_IMAGE_DOMAINS.some((domain) => hostname.includes(domain))) {
        imageUrls.push(url);
        return "";
      }
      if (TRUSTED_SOCIAL_DOMAINS[hostname]) {
        const social = TRUSTED_SOCIAL_DOMAINS[hostname];
        return `<a href="${url}" target="_blank" rel="noopener noreferrer" class="social-link"><i class="${social.icon}"></i> ${social.name}</a>`;
      }
      return `<a href="${url}" target="_blank" rel="noopener noreferrer" class="social-link"><i class="fa-solid fa-link"></i> ${hostname}</a>`;
    } catch (e) {
      return url;
    }
  });
  const cmdEmgRegex =
    /t\.(emg|emojimerge)\s+([\u00a9\u00ae\u2000-\u3300\ud83c\ud000-\udfff\ud83d\ud000-\udfff]+)/gi;
  processedText = processedText.replace(cmdEmgRegex, (match, cmd, emojis) => {
    const emojiChars = Array.from(emojis.trim());
    if (emojiChars.length < 2) return match;
    const mergeUrl = `https://emojik.vercel.app/s/${emojiChars[0]}_${emojiChars[1]}?size=128`;
    const hasSurroundingText = processedText.trim() !== match.trim();
    if (hasSurroundingText) {
      return `<img src="${mergeUrl}" alt="emoji merge" class="inline-emoji-merge">`;
    } else {
      imageUrls.push(mergeUrl);
      return "";
    }
  });
  const igMacro = /\[IG\]/gi;
  processedText = processedText.replace(
    igMacro,
    `<a href="${INSTA_PROFILE_URL}" target="_blank" rel="noopener noreferrer" class="social-link"><i class="fa-brands fa-instagram"></i> Instagram</a>`
  );
  return { text: processedText.trim(), images: imageUrls };
}

const displayMessage = async (data, isSentByMe, isOfficial = false) => {
  const { text, images } = await processMessageContent(data.content);
  if (!text && images.length === 0 && !data.file && !data.reply) return;

  const messageDiv = document.createElement("div");
  messageDiv.classList.add(
    "message",
    isSentByMe ? "message-sent" : "message-received"
  );
  messageDiv.id = data.id || "msg-" + Date.now();
  messageDiv.dataset.senderId = data.sender;

  if (isSentByMe) {
    messageSendSound.play();
  } else {
    if (!isOfficial) {
      document.hasFocus()
        ? notificationFocused.play()
        : notificationSound.play();
    } else {
      notificationVerified.play();
    }

    const senderName = data.sender.split("#")[0];
    const displayName = truncateText(senderName, 33);
    const header = document.createElement("strong");
    header.classList.add("message-header");
    header.textContent = `${displayName} | ${new Date().toLocaleTimeString(
      "tr-TR",
      { hour: "2-digit", minute: "2-digit" }
    )}`;
    messageDiv.appendChild(header);

    if (isOfficial) {
      const badgeDiv = document.createElement("div");
      badgeDiv.classList.add("official-badge");
      badgeDiv.innerHTML = OFFICIAL_BADGE_SVG;
      messageDiv.appendChild(badgeDiv);
    }
  }

  if (data.reply) {
    const replyContainer = document.createElement("div");
    replyContainer.className = "message-reply-container";
    const replySender = document.createElement("strong");
    replySender.className = "message-reply-sender";
    replySender.innerHTML = `<i class="fa-solid fa-reply"></i> ${truncateText(
      data.reply.originalSender,
      33
    )}`;
    const replyContent = document.createElement("div");
    replyContent.className = "message-reply-content";
    replyContent.textContent = truncateText(data.reply.originalContent, 100);
    replyContainer.append(replySender, replyContent);
    messageDiv.appendChild(replyContainer);
  }

  for (const imageUrl of images) {
    const imgContainer = document.createElement("div");
    imgContainer.className = "message-image-container";
    const img = document.createElement("img");
    img.src = imageUrl;
    img.alt = "Gönderilen Resim";
    img.className = "message-image";
    img.loading = "lazy";
    imageObserver.observe(img);
    const starButton = document.createElement("button");
    starButton.className = "favorite-star-btn";
    const isFav = await FavoritesDB.isFavorite(imageUrl);
    starButton.classList.toggle("is-favorite", isFav);
    starButton.innerHTML = isFav
      ? `<i class="fa-solid fa-star"></i>`
      : `<i class="fa-regular fa-star"></i>`;
    starButton.onclick = (e) => {
      const style = window.getComputedStyle(starButton);
      if (style.opacity === "0") return;
      e.stopPropagation();
      toggleFavorite(imageUrl);
    };
    imgContainer.appendChild(img);
    imgContainer.appendChild(starButton);
    messageDiv.appendChild(imgContainer);
  }

  if (data.file) {
    const { name, type, data_base64 } = data.file;
    const senderName = data.sender.split("#")[0];
    const isBlocked = BLOCKED_EXTENSIONS.some((ext) =>
      name.toLowerCase().endsWith(ext)
    );

    if (isBlocked && !isSentByMe) {
      displaySystemNotification(
        `'${truncateText(
          senderName,
          33
        )}' kullanıcısından gelen riskli dosya engellendi.`
      );
      return;
    }

    if (ALLOWED_MIME_PATTERNS.image.test(type)) {
      const imgContainer = document.createElement("div");
      imgContainer.className = "message-image-container";
      imgContainer.innerHTML = `<img src="${data_base64}" class="message-image" alt="${name}" loading="lazy"/>`;
      messageDiv.appendChild(imgContainer);
    } else if (ALLOWED_MIME_PATTERNS.audio.test(type)) {
      const playerContainer = document.createElement("div");
      playerContainer.className = "custom-audio-player";
      const audioElement = document.createElement("audio");
      audioElement.src = data_base64;
      audioElement.style.display = "none";
      const playBtn = document.createElement("button");
      playBtn.className = "play-pause-btn";
      playBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
      const progressContainer = document.createElement("div");
      progressContainer.className = "audio-progress-container";
      const slider = document.createElement("input");
      slider.type = "range";
      slider.className = "seek-slider";
      slider.value = 0;
      slider.max = 100;
      const timeInfo = document.createElement("div");
      timeInfo.className = "audio-time-info";
      const currentTimeEl = document.createElement("span");
      currentTimeEl.textContent = "0:00";
      const durationEl = document.createElement("span");
      durationEl.textContent = "0:00";
      timeInfo.append(currentTimeEl, durationEl);
      progressContainer.append(slider, timeInfo);
      playerContainer.append(playBtn, progressContainer, audioElement);
      messageDiv.appendChild(playerContainer);

      playBtn.addEventListener("click", () => {
        if (audioElement.paused) {
          audioElement.play();
          playBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
        } else {
          audioElement.pause();
          playBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
        }
      });
      audioElement.addEventListener("loadedmetadata", () => {
        durationEl.textContent = formatTime(audioElement.duration);
        slider.max = audioElement.duration;
      });
      audioElement.addEventListener("timeupdate", () => {
        currentTimeEl.textContent = formatTime(audioElement.currentTime);
        slider.value = audioElement.currentTime;
      });
      audioElement.addEventListener("ended", () => {
        playBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
        slider.value = 0;
      });
      slider.addEventListener("input", () => {
        audioElement.currentTime = slider.value;
      });
    } else if (ALLOWED_MIME_PATTERNS.video.test(type)) {
      const video = document.createElement("video");
      video.src = data_base64;
      video.controls = true;
      video.style.cssText =
        "width: 100%; max-width: 280px; border-radius: 15px; margin-top: 8px;";
      messageDiv.appendChild(video);
    } else {
      const fileContainer = document.createElement("div");
      fileContainer.className = "message-file-container";
      fileContainer.innerHTML = `
                      <i class="fa-solid fa-file message-file-icon"></i>
                      <div class="message-file-info">
                          <span class="message-file-name">${DOMPurify.sanitize(
                            name
                          )}</span>
                          <button class="message-file-download-btn">İndir</button>
                      </div>`;
      fileContainer.querySelector(".message-file-download-btn").onclick = () =>
        showDownloadConfirmation(data.file);
      messageDiv.appendChild(fileContainer);
    }
  }

  if (text) {
    const contentP = document.createElement("p");
    contentP.classList.add("message-content");
    contentP.innerHTML = truncateText(text, 2000);
    messageDiv.appendChild(contentP);
  }

  messagesContainer.appendChild(messageDiv);
  totalMessageCount++;
  while (messagesContainer.children.length > MAX_MESSAGES) {
    const childToRemove =
      messagesContainer.firstChild.querySelector(".message-image");
    if (childToRemove) {
      imageObserver.unobserve(childToRemove);
    }
    messagesContainer.removeChild(messagesContainer.firstChild);
  }
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
};

function displayLocalAiMessage(content, senderName) {
  const messageDiv = document.createElement("div");
  messageDiv.classList.add("message", "message-ai");
  const header = document.createElement("strong");
  header.classList.add("message-header");
  header.innerHTML = `${senderName} | <span class="subtle-note">Bu mesajı sadece siz görebilirsiniz.</span>`;
  messageDiv.appendChild(header);
  const contentP = document.createElement("p");
  contentP.classList.add("message-content");
  contentP.textContent = content;
  messageDiv.appendChild(contentP);
  messagesContainer.appendChild(messageDiv);
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function displayHelpMessage() {
  const messageDiv = document.createElement("div");
  messageDiv.classList.add("message", "message-received");

  const header = document.createElement("strong");
  header.classList.add("message-header");
  header.innerHTML = `Sistem | <span class="subtle-note">Bu mesajı sadece siz görebilirsiniz.</span>`;
  messageDiv.appendChild(header);

  const commands = [
    { cmd: "t.help", desc: "Bu yardım menüsünü gösterir." },
    { cmd: "t.clear", alias: "t.clr", desc: "Sohbet ekranını temizler." },
    { cmd: "t.party", alias: "t.pty", desc: "Konfeti patlatır." },
    {
      cmd: "t.globalchat",
      alias: "t.gc",
      desc: "Global sohbete geçiş yapar.",
    },
    {
      cmd: "t.birthdaychat",
      alias: "t.brc",
      desc: "Kendi doğum günü sohbetinize geri döner.",
    },
    {
      cmd: "t.emojimerge <e1><e2>",
      alias: "t.emg",
      desc: "İki emojiyi birleştirir.",
    },
    {
      cmd: "t.imagecreate <prompt>",
      alias: "t.imgcrt",
      desc: "Yapay zeka ile resim oluşturur.",
    },
    { cmd: "t.ai <prompt>", desc: "Yapay zekaya soru sorar." },
  ];

  commands.forEach(({ cmd, alias, desc }) => {
    const p = document.createElement("p");
    p.classList.add("message-content");
    p.style.margin = "4px 0";
    p.innerHTML = `<span style="font-weight:bold;">${cmd}</span> ${
      alias ? `(${alias})` : ""
    } | ${desc}`;
    messageDiv.appendChild(p);
  });

  messagesContainer.appendChild(messageDiv);
  totalMessageCount++;
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function parseNewsMessage(str) {
  const contentMatch = str.match(/content\${(.*?)}\$/);
  const senderMatch = str.match(/sender\${(.*?)}\$/);
  const datetimeMatch = str.match(/datetime\${(.*?)}\$/);
  if (contentMatch && senderMatch && datetimeMatch) {
    return {
      sender: senderMatch[1],
      content: contentMatch[1],
      timestamp: datetimeMatch[1],
    };
  }
  console.warn("OBMSG JSON Error", str);
  return null;
}

async function fetchAndDisplayNews() {
  const baseUrl = "https://tinday.app.tc/news/twinday/tindaynews.txt";
  const url = `${baseUrl}?t=${Date.now()}`;
  try {
    const response = await fetch(url, { cache: "no-store" });
    if (!response.ok) throw new Error(`HTTP Error Status ${response.status}`);
    const rawText = await response.text();
    const messages = JSON.parse(rawText);
    if (!Array.isArray(messages) || messages.length === 0) return;
    for (let i = 0; i < messages.length; i++) {
      const candidateIndex = (newsIndex + i) % messages.length;
      const msgString = messages[candidateIndex];
      const parsedData = parseNewsMessage(msgString);
      if (!parsedData) continue;
      const lastShownCount = newsLastShownAt.get(parsedData.content);
      if (
        lastShownCount === undefined ||
        totalMessageCount - lastShownCount > 100
      ) {
        displayMessage(parsedData, false, true);
        newsLastShownAt.set(parsedData.content, totalMessageCount);
        newsIndex = (candidateIndex + 1) % messages.length;
        break;
      }
    }
  } catch (error) {
    console.error("Failed News ", error);
  }
}

function fadeAndStop(audioElement, duration = 300) {
  return new Promise((resolve) => {
    if (audioElement.paused) {
      resolve();
      return;
    }
    const startVolume = audioElement.volume;
    const fadeOutInterval = setInterval(() => {
      const newVolume = audioElement.volume - startVolume / (duration / 50);
      if (newVolume > 0) {
        audioElement.volume = newVolume;
      } else {
        clearInterval(fadeOutInterval);
        audioElement.pause();
        audioElement.currentTime = 0;
        audioElement.volume = startVolume;
        resolve();
      }
    }, 50);
  });
}

function showDownloadConfirmation(fileData) {
  let countdown = 5;
  const modalId = "downloadConfirmBtn";
  const safeFileName = DOMPurify.sanitize(fileData.name, {
    USE_PROFILES: { html: false },
  });

  const updateButton = () => {
    const btn = document.getElementById(modalId);
    if (!btn) return;
    countdown--;
    if (countdown > 0) {
      btn.textContent = `Yine de İndir (${countdown}s)`;
    } else {
      clearInterval(countdownInterval);
      btn.textContent = "Yine de İndir";
      btn.classList.remove("disabled");
      btn.disabled = false;
    }
  };

  const triggerDownload = () => {
    const link = document.createElement("a");
    link.href = fileData.data_base64;
    link.download = fileData.name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    hideModal();
  };

  showModal({
    title: "Tehlikeli Olabilecek İndirme",
    message: `<code id="fileToDownload">${safeFileName}</code><br /><br />Bilinmeyen bir kaynaktan gelen bu dosyayı indirmek istediğinizden emin misiniz?`,
    buttons: [
      {
        id: modalId,
        text: `Yine de İndir (${countdown}s)`,
        class: "confirm disabled",
        disabled: true,
        onClick: triggerDownload,
      },
      { text: "İptal", class: "cancel", onClick: hideModal },
    ],
  });

  countdownInterval = setInterval(updateButton, 1000);
}

function checkScreenSize() {
  if (window.innerWidth < 350 || window.innerHeight < 330) {
    showModal({
      title: "Uyarı",
      message:
        "Desteklenmeyen Ekran Genişliği Algılandı, Arayüz Kaymaları Yaşayabilirsiniz. Yine de devam etmek ister misiniz?",
      buttons: [
        { text: "Evet", class: "confirm", onClick: hideModal },
        {
          text: "Hayır",
          class: "cancel",
          onClick: () => {
            hideModal();
            window.history.back();
          },
        },
      ],
    });
  }
}

function showSpamProtectionModal() {
  showModal({
    title: "Spam Önleyici",
    message:
      "Spam aramaya maruz kaldınız, isterseniz aramaları tamamen kapatabilirsiniz veya bu seferlik kapatarak bir sonraki girişinizde otomatik açılmasını sağlayabilirsiniz.",
    checkbox: { id: "spamPermanentCheckbox", label: "Tamamen Kapat" },
    buttons: [
      {
        text: "Onayla",
        class: "confirm",
        onClick: () => {
          callsDisabledForSession = true;
          const checkbox = document.getElementById("spamPermanentCheckbox");
          if (checkbox && checkbox.checked) {
            localStorage.setItem(CALLS_DISABLED_KEY, "true");
            displaySystemNotification(
              "Aramalar kalıcı olarak kapatıldı. Bu ayar bir sonraki girişinizde de geçerli olacaktır."
            );
          } else {
            displaySystemNotification(
              "Aramalar bu oturum için kapatıldı. Sayfayı yenilediğinizde tekrar aktif olacaktır."
            );
          }
          hideModal();
        },
      },
      { text: "İptal", class: "cancel", onClick: hideModal },
    ],
  });
}

function applyTheme(themeName) {
  bodyEl.setAttribute("data-theme", themeName);
  const themeColor = themeName === "dark" ? "#282828" : "#fc918c";
  if (themeColorMeta) themeColorMeta.setAttribute("content", themeColor);
  localStorage.setItem("theme", themeName);
}

function toggleTheme() {
  const currentTheme = bodyEl.getAttribute("data-theme") || "light";
  applyTheme(currentTheme === "dark" ? "light" : "dark");
}

function showMenuAt(x, y) {
  const menu = document.getElementById("context-menu");
  const offset = 10;
  menu.style.left = `${x + offset}px`;
  menu.style.top = `${y - offset}px`;
  menu.style.display = "block";
  menu.style.animation = "none";
  void menu.offsetWidth;
  menu.style.animation = "fadeInScale 150ms ease-out";
}

async function stopAllSoundsWithFade() {
  const stopPromises = callSFX.map((sound) => fadeAndStop(sound));
  await Promise.all(stopPromises);
}

async function playSound(soundToPlay) {
  if (!soundToPlay) return;
  const soundsToStop = callSFX.filter((s) => s !== soundToPlay);
  const stopPromises = soundsToStop.map((sound) => fadeAndStop(sound));
  await Promise.all(stopPromises);

  if (soundToPlay.paused) {
    try {
      soundToPlay.currentTime = 0;
      soundToPlay.volume = 1;
      await soundToPlay.play();
    } catch (e) {
      console.error("Audio Error ", e);
    }
  }
}

async function startCallTimeout() {
  clearTimeout(callTimeout);
  callTimeout = setTimeout(async () => {
    const isCaller = acceptCallBtn.style.display === "none";
    if (isCaller) {
      callerNameDiv.textContent = "Cevap verilmedi.";
      await playSound(callTimeoutSound);
    }
    hangupLogic();
  }, 30000);
}

async function showCallPanel(calleeRawId, isOutgoing = false) {
  const calleeDisplayName = calleeRawId.split("#")[0];
  if (isOutgoing) {
    await playSound(outgoingCallSound);
    callerNameDiv.textContent = `${calleeDisplayName} aranıyor...`;
    acceptCallBtn.style.display = "none";
  } else {
    await playSound(incomingCallSound);
    callerNameDiv.textContent = `${calleeDisplayName} arıyor...`;
    acceptCallBtn.style.display = "flex";
  }
  callPanel.classList.remove("in-call");
  callPanel.classList.add("visible");
  startCallTimeout();
}

async function hideCallPanel() {
  await stopAllSoundsWithFade();
  stopCallTimer();
  clearTimeout(callTimeout);
  callPanel.classList.remove("visible");
  setTimeout(() => {
    if (!callPanel.classList.contains("visible")) {
      callTimerDiv.textContent = "00:00";
      callPanel.classList.remove("in-call");
      acceptCallBtn.disabled = false;
      acceptCallBtn.style.cssText = "";
    }
  }, 500);
}

function startCallTimer() {
  stopCallTimer();
  let seconds = 0;
  timerInterval = setInterval(() => {
    seconds++;
    const min = String(Math.floor(seconds / 60)).padStart(2, "0");
    const sec = String(seconds % 60).padStart(2, "0");
    callTimerDiv.textContent = `${min}:${sec}`;
  }, 1000);
}

function stopCallTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
}

async function handleIncomingData(data) {
  if (data.type === "hangup") {
    const isRejected =
      callPanel.classList.contains("visible") &&
      !callPanel.classList.contains("in-call");
    if (isRejected) {
      callerNameDiv.textContent = "Arama sonlandırıldı.";
      await playSound(callRejectedSound);
    }
    hangupLogic(false);
  }
}

function setupDataConnectionEvents(conn) {
  conn.on("data", handleIncomingData);
  conn.on("close", () => {
    if (currentCall && currentCall.peer === conn.peer) {
      hangupLogic(false);
    }
  });
  dataConnection = conn;
}

function initializePeerEvents(p) {
  p.on("open", (id) => {
    reconnectAttempts = 0;
    if (localStorage.getItem(CALLS_DISABLED_KEY) === "true") {
      displaySystemNotification(
        "Arama özelliği kalıcı olarak kapalı. Yeniden açmak için ayarlar sayfasını bekleyin."
      );
    } else {
      displaySystemNotification("Arama özelliği aktif.");
    }
    spamTracker = {};
  });

  p.on("error", (err) => {
    if (err.type === "peer-unavailable") {
      displaySystemNotification(
        "Aranan kullanıcı bulunamadı veya çevrimdışı.",
        "error"
      );
      if (currentCall) {
        hangupLogic();
      }
    }
  });

  p.on("disconnected", handlePeerDisconnect);

  p.on("call", (incomingCall) => {
    const isPermanentlyDisabled =
      localStorage.getItem(CALLS_DISABLED_KEY) === "true";
    if (callsDisabledForSession || isPermanentlyDisabled) {
      incomingCall.close();
      return;
    }

    if (currentCall) {
      incomingCall.close();
      return;
    }

    currentCall = incomingCall;
    const callerDisplayName = incomingCall.peer.split("-")[0];
    showCallPanel(callerDisplayName);
    currentCall.on("close", () => {
      hangupLogic(false);
    });
  });

  p.on("connection", (conn) => {
    if (currentCall || dataConnection) {
      conn.on("open", () => {
        conn.send({ type: "status", message: "busy" });
        setTimeout(() => {
          conn.close();
        }, 250);
      });
      return;
    }
    setupDataConnectionEvents(conn);
  });
}

const handlePeerDisconnect = () => {
  if (reconnectAttempts < maxReconnectAttempts) {
    reconnectAttempts++;
    displaySystemNotification(
      `Arama bağlantısı koptu. Yeniden bağlanılıyor... (${reconnectAttempts}/${maxReconnectAttempts})`,
      "disconnected"
    );
    if (peer && !peer.destroyed) peer.reconnect();
  } else {
    displaySystemNotification(
      "Bağlantı kurulamadı, lütfen internet bağlantınızı kontrol ediniz.",
      "disconnected"
    );
  }
};

async function setupCallEvents(call) {
  currentCall = call;
  currentCall.off("close");
  currentCall.on("close", () => {
    hangupLogic(false);
  });

  currentCall.on("stream", async (remoteStream) => {
    clearTimeout(callTimeout);
    await stopAllSoundsWithFade();
    callPanel.classList.add("in-call");
    callerNameDiv.textContent = `${call.peer.split("-")[0]}`;
    startCallTimer();
    remoteAudioContainer.innerHTML = "";
    const remoteAudio = document.createElement("audio");
    remoteAudio.srcObject = remoteStream;
    remoteAudio.autoplay = true;
    remoteAudioContainer.appendChild(remoteAudio);
  });

  currentCall.on("error", (err) => {
    hangupLogic();
  });
}

async function hangupLogic(sendHangupSignal = true) {
  if (sendHangupSignal && dataConnection && dataConnection.open) {
    try {
      dataConnection.send({ type: "hangup" });
    } catch (e) {
      console.error("Arama sinyali gönderilirken hata oluştu.");
    }
  }

  const callToClose = currentCall;
  const connToClose = dataConnection;
  currentCall = null;
  dataConnection = null;

  if (localStream) {
    localStream.getTracks().forEach((track) => track.stop());
    localStream = null;
  }
  remoteAudioContainer.innerHTML = "";
  if (callToClose) {
    callToClose.close();
  }
  if (connToClose) {
    connToClose.close();
  }
  const isInCall = callPanel.classList.contains("in-call");
  if (isInCall) {
    hideCallPanel();
  } else {
    await stopAllSoundsWithFade();
    setTimeout(hideCallPanel, 2000);
  }
}

async function initiateCall(targetRawId) {
  if (!peer || peer.disconnected) {
    displaySystemNotification(
      "Arama sorunu oluştu, lütfen sayfayı yenileyiniz.",
      "error"
    );
    return;
  }
  if (currentCall) {
    displaySystemNotification("Zaten bir görüşmedesiniz.", "error");
    return;
  }
  if (!targetRawId) {
    alert("Aranacak kişi seçilemedi.");
    return;
  }
  if (targetRawId === myName) {
    alert("Kendinizi arayamazsınız.");
    return;
  }

  const targetPeerId = targetRawId
    .replace(/[#\s]+/g, "-")
    .replace(/[^a-zA-Z0-9-]/g, "")
    .replace(/-+/g, "-")
    .replace(/^-+|-+$/g, "");

  try {
    localStream = await navigator.mediaDevices.getUserMedia({
      video: false,
      audio: true,
    });

    const conn = peer.connect(targetPeerId);

    conn.on("data", (data) => {
      if (data && data.type === "status" && data.message === "busy") {
        const targetDisplayName = targetRawId.split("#")[0];
        displaySystemNotification(
          `${truncateText(
            targetDisplayName,
            33
          )} adlı kullanıcı şu anda başka bir meşgul.`,
          "info"
        );

        hangupLogic(false);
        conn.close();
      }
    });

    setupDataConnectionEvents(conn);
    await showCallPanel(targetRawId, true);
    const call = peer.call(targetPeerId, localStream);
    setupCallEvents(call);
  } catch (err) {
    displaySystemNotification(
      "Mikrofona erişilemiyor, Lütfen tarayıcı izinlerini kontrol edin.",
      "error"
    );
    hideCallPanel();
  }
}

function initializePeerConnection() {
  if (peer) {
    peer.destroy();
  }
  if (!myPeerId) {
    console.error("PeerJS Error");
    return;
  }
  console.log("Peer Connecting...");
  peer = new Peer(myPeerId, { debug: 0 });
  initializePeerEvents(peer);
}

loginForm.addEventListener("submit", handleConnect);
messageForm.addEventListener("submit", handleSendMessage);
cancelReplyBtn.addEventListener("click", cancelReply);

addButton.addEventListener("click", (e) => {
  e.stopPropagation();
  actionsPopup.classList.toggle("visible");
  addButton.classList.toggle("active");
  favoritesPanel.classList.remove("active");
});

uploadFileBtn.addEventListener("click", () => {
  fileInput.click();
  actionsPopup.classList.remove("visible");
  addButton.classList.remove("active");
});

fileInput.addEventListener("change", (e) => {
  if (e.target.files.length > 0) handleFileSelected(e.target.files[0]);
  e.target.value = null;
});

openFavoritesBtn.addEventListener("click", () => {
  renderFavoritesPanel();
  favoritesPanel.classList.add("active");
  actionsPopup.classList.remove("visible");
  addButton.classList.remove("active");
});

document.addEventListener("paste", (e) => {
  const items = (e.clipboardData || e.originalEvent.clipboardData).items;
  for (const item of items) {
    if (item.kind === "file" && item.type.startsWith("image/")) {
      e.preventDefault();
      const file = item.getAsFile();
      handleFileSelected(file);
      return;
    }
  }
});

document.addEventListener("click", (e) => {
  if (
    !favoritesPanel.contains(e.target) &&
    !openFavoritesBtn.contains(e.target)
  ) {
    favoritesPanel.classList.remove("active");
  }
  if (!actionsPopup.contains(e.target) && !addButton.contains(e.target)) {
    actionsPopup.classList.remove("visible");
    addButton.classList.remove("active");
  }

  const menu = document.getElementById("context-menu");
  const targetMessage = e.target.closest(".message-received");

  if (targetMessage) {
    clickCount++;
    if (clickCount === 1) {
      clickTimer = setTimeout(() => {
        clickCount = 0;
      }, 400);
    }
    if (clickCount === 3) {
      clearTimeout(clickTimer);
      clickCount = 0;
      targetUserIdForCall = targetMessage.dataset.senderId;
      contextMenuTargetMessageId = targetMessage.id;
      if (targetUserIdForCall) {
        menuJustOpened = true;
        showMenuAt(e.clientX, e.clientY);
      }
    }
  }

  if (
    menu.style.display === "block" &&
    !e.target.closest("#context-menu") &&
    !menuJustOpened
  ) {
    menu.style.display = "none";
    targetUserIdForCall = null;
    contextMenuTargetMessageId = null;
  }

  if (menuJustOpened) {
    menuJustOpened = false;
  }
});

favoritesPanel.addEventListener("transitionend", () => {
  if (!favoritesPanel.classList.contains("active"))
    favoritesContent.innerHTML = "";
});

messagesContainer.addEventListener("click", (e) => {
  const link = e.target.closest('a[target="_blank"]');
  if (link) {
    e.preventDefault();
    urlToOpen = link.href;
    const safeUrl = DOMPurify.sanitize(urlToOpen, {
      USE_PROFILES: { html: false },
    });
    showModal({
      title: "Dış Bağlantı",
      message: `<code>${safeUrl}</code><br/><br/>Bu site yeni bir sekmede açılacak. Emin misiniz?`,
      buttons: [
        {
          text: "Evet",
          class: "confirm",
          onClick: () => {
            if (urlToOpen)
              window.open(urlToOpen, "_blank", "noopener,noreferrer");
            hideModal();
          },
        },
        { text: "Hayır", class: "cancel", onClick: hideModal },
      ],
    });
  }
});

window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme") || "light";
  applyTheme(savedTheme);
});

window.addEventListener("load", () => {
  checkScreenSize();
  if (loadUserData()) {
    previousUserDiv.style.display = "block";
  }
  checkFormValidity();
  displaySystemNotification(
    "Komutlar için 't.help yazabilirsiniz.'"
  );
});

window.addEventListener("resize", checkScreenSize);

nameInput.addEventListener("input", checkFormValidity);
birthdayInput.addEventListener("input", checkFormValidity);

continueWithPreviousLink.addEventListener("click", (event) => {
  event.preventDefault();
  populateFormWithPreviousData();
});

callUserBtn.addEventListener("click", () => {
  if (targetUserIdForCall) {
    initiateCall(targetUserIdForCall);
  }
  document.getElementById("context-menu").style.display = "none";
  targetUserIdForCall = null;
});

document.getElementById("replyUser").addEventListener("click", () => {
  if (contextMenuTargetMessageId) {
    startReply(contextMenuTargetMessageId);
  }
  document.getElementById("context-menu").style.display = "none";
});

acceptCallBtn.addEventListener("click", async () => {
  if (!currentCall) return;
  acceptCallBtn.disabled = true;

  acceptCallBtn.style.transition =
    "opacity 0.3s, width 0.3s, padding 0.3s, margin 0.3s";
  acceptCallBtn.style.opacity = "0";
  acceptCallBtn.style.width = "0";
  acceptCallBtn.style.padding = "0";
  acceptCallBtn.style.marginRight = "-10px";
  acceptCallBtn.style.pointerEvents = "none";

  try {
    localStream = await navigator.mediaDevices.getUserMedia({
      video: false,
      audio: true,
    });
    currentCall.answer(localStream);
    setupCallEvents(currentCall);
  } catch (err) {
    displaySystemNotification(
      "Mikrofona erişilemiyor, Lütfen tarayıcı izinlerini kontrol edin.",
      "error"
    );
    hangupLogic();
  }
});

declineCallBtn.addEventListener("click", () => {
  const isRejecting = !callPanel.classList.contains("in-call") && currentCall;

  if (isRejecting) {
    const callerId = currentCall.peer;
    if (!spamTracker[callerId]) {
      spamTracker[callerId] = { count: 0 };
    }
    spamTracker[callerId].count++;
    if (spamTracker[callerId].count >= REJECTION_SPAM_THRESHOLD) {
      showSpamProtectionModal();
      spamTracker[callerId].count = 0;
    }
  }
  hangupLogic();
});

function switchToGlobalChat() {
  const newRoomName = "TwinDayBirthdayChatGLOBAL";
  const displayRoomName = "Global Sohbet | Beta Test";
  switchRoom(newRoomName, displayRoomName);
}

function switchToBirthdayChat() {
  const birthday = birthdayInput.value;
  if (!birthday) {
    displaySystemNotification(
      "Doğum günü odasına dönmek için giriş ekranındaki doğum tarihi bilgisi gerekli.",
      "error"
    );
    return;
  }

  const date = new Date(birthday);
  const month = date.getUTCMonth() + 1;
  const day = date.getUTCDate();
  const newRoomName = `TwinDayBirthdayChat${month}${day}`;
  const displayRoomName = `${day}/${month} Doğumlular | Beta Test`;

  switchRoom(newRoomName, displayRoomName);
}

function switchRoom(newRoomName, displayRoomName) {
  if (roomName === newRoomName) {
    displaySystemNotification(`Zaten ${displayRoomName} odasındasınız.`);
    return;
  }

  if (!socket || socket.readyState !== WebSocket.OPEN) {
    displaySystemNotification(
      "Oda değiştirmek için bağlantı aktif olmalı.",
      "error"
    );
    return;
  }

  isSwitchingRooms = true;
  displaySystemNotification(`${displayRoomName} odasına geçiliyor...`);
  sendMessageToServer({ cmd: "unlink", val: "" });
  roomName = newRoomName;
  chatRoomNameHeader.textContent = displayRoomName;
  messagesContainer.innerHTML = "";
  totalMessageCount = 0;

  sendMessageToServer({
    cmd: "link",
    val: newRoomName,
    listener: "room_switch_success",
  });
}
