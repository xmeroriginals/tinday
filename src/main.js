const CL_SERVER_IP = "wss://cl.mikedev101.cc/";
const OFFICIAL_BADGE_SVG = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0,0,465.20362,447.89812"><g transform="translate(-7.39819,43.94906)"><g stroke="none" stroke-miterlimit="10"><path d="M94.68849,180c0,-80.25333 65.05818,-145.31151 145.31151,-145.31151c80.25333,0 145.31151,65.05818 145.31151,145.31151c0,80.25333 -65.05818,145.31151 -145.31151,145.31151c-80.25333,0 -145.31151,-65.05818 -145.31151,-145.31151z" fill="#ffffff" stroke-width="0.5"/><path d="M472.60181,179.87075c-1.42407,17.55884 -7.62996,34.39231 -17.94421,48.67367c-3.75179,5.79794 -6.90806,11.96019 -9.42071,18.39281c-1.95158,6.94677 -3.08082,14.09864 -3.36454,21.30875c-0.27238,17.15747 -5.23697,33.91293 -14.35537,48.44936c-11.12537,13.19007 -25.62227,23.11308 -41.94459,28.71073c-6.66115,2.57079 -13.04823,5.8019 -19.06572,9.64501c-5.37594,4.4727 -10.33127,9.42803 -14.80397,14.80397c-10.23564,14.05759 -24.22988,24.942 -40.37447,31.40237c-16.57589,3.96782 -33.90407,3.50367 -50.24379,-1.34582c-14.28515,-3.57073 -29.22956,-3.57073 -43.51471,0c-9.85595,2.36192 -19.92668,3.7147 -30.05655,4.03745c-6.61272,-0.00785 -13.18816,-0.99039 -19.51433,-2.91593c-16.14459,-6.46037 -30.13883,-17.34478 -40.37447,-31.40237c-4.4727,-5.37594 -9.42803,-10.33127 -14.80397,-14.80397c-6.0175,-3.84312 -12.40458,-7.07423 -19.06572,-9.64501c-16.32232,-5.59766 -30.81922,-15.52066 -41.94459,-28.71073c-9.1184,-14.53643 -14.08298,-31.29189 -14.35537,-48.44936c-0.28372,-7.21011 -1.41296,-14.36198 -3.36454,-21.30875c-2.42134,-6.47332 -5.58254,-12.64519 -9.42071,-18.39281c-10.0366,-14.28865 -16.00598,-31.03392 -17.2713,-48.44936c1.18513,-17.57041 7.15814,-34.48103 17.2713,-48.89797c3.75179,-5.79794 6.90806,-11.96019 9.42071,-18.39281c2.1673,-6.76892 3.52262,-13.77139 4.03745,-20.86014c0.09249,-17.09039 4.82138,-33.83529 13.68246,-48.44936c11.18697,-13.22347 25.76532,-23.14915 42.16889,-28.71073c6.66115,-2.57079 13.04823,-5.8019 19.06572,-9.64501c5.37594,-4.4727 10.33127,-9.42803 14.80397,-14.80397c10.42666,-14.05617 24.56268,-24.93004 40.82308,-31.40237c16.58334,-4.01459 33.94347,-3.47209 50.24379,1.57012c14.30998,3.36293 29.20473,3.36293 43.51471,0c16.02034,-4.87948 33.04845,-5.42128 49.34658,-1.57012c16.0966,6.54375 30.06983,17.41181 40.37447,31.40237c4.3306,5.35596 9.13516,10.31066 14.35537,14.80397c6.0175,3.84312 12.40458,7.07423 19.06572,9.64501c16.32232,5.59766 30.81922,15.52066 41.94459,28.71073c9.09748,14.54587 14.06029,31.29538 14.35537,48.44936c0.51483,7.08875 1.87014,14.09122 4.03745,20.86014c2.48486,6.58733 5.64177,12.90113 9.42071,18.84142c10.0366,14.28865 16.00598,31.03392 17.2713,48.44936zM345.64653,119.08474c-8.7954,-8.7954 -23.05557,-8.7954 -31.85097,0l-96.22582,96.45012l-51.3653,-51.5896c-8.7954,-8.7954 -23.05557,-8.7954 -31.85097,0c-8.7954,8.7954 -8.7954,23.05557 0,31.85097l67.29078,67.29078c4.21165,4.24633 9.94474,6.63483 15.92549,6.63483c5.98075,0 11.71383,-2.3885 15.92549,-6.63483l112.15131,-112.15131c8.7954,-8.7954 8.7954,-23.05557 0,-31.85097z" fill="#fc918c" stroke-width="1"/></g></g></svg>`;
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

const inboxButton = document.getElementById("inbox-button");
const inboxPanel = document.getElementById("inbox-panel");
const inboxContent = document.getElementById("inbox-content");

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

const birthdayCountdownOverlay = document.getElementById(
  "birthdayCountdownOverlay"
);
const countdownNumberEl = document.getElementById("countdown-number");

const CALLS_ENABLED_KEY = "callsEnabled";

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

const callEndSound = new Audio(
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

const CALLS_FEATURE_ENABLED_KEY = "tinday_calls_feature_enabled";
const INBOX_FEATURE_ENABLED_KEY = "tinday_inbox_feature_enabled";
const MAX_FILE_SIZE_BYTES = 100 * 1024 * 1024;
const CHUNK_SIZE = 64 * 1024;
const p2pSpamTracker = new Map();
const P2P_SPAM_THRESHOLD = 300;
const P2P_SPAM_WINDOW_MS = 10000;
const P2P_COOLDOWN_DURATION_MS = 1 * 60 * 1000;

const birthdaySound = document.getElementById("birthday-sound");
const birthdayShortSound = document.getElementById("birthday-short-sound");
const BIRTHDAY_WISH_KEY_PREFIX = "tinday_birthday_wishes_";
let isBirthdayToday = false;
let birthdayCelebrationTimeout;

const callSFX = [outgoingCallSound, incomingCallSound, callEndSound];

const SHARE_BASE_URL = "https://tinday.app.tc/";
let originalBirthdayRoomName = "";
let initialCustomRoomName = null;

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
let isCallActive = false;
let inboxRequests = new Map();
let areCallsEnabled = true;
let areInboxEnabled = true;
let incomingFileTransfers = new Map();
let isMouseOverMessage = false;
let lastHoveredMessageId = null;

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
        console.error("IndexedDB Error");
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
          console.error("Favorites Error");
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
        console.error("Favorites Error");
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
    console.error("Failed UD");
  }
}

function loadUserData() {
  const data = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (!data) return null;
  try {
    return JSON.parse(atob(data));
  } catch (e) {
    console.error("Failed UD");
    localStorage.removeItem(LOCAL_STORAGE_KEY);
    return null;
  }
}

function checkFormValidity() {
  connectBtn.disabled =
    !nameInput.value || (birthdayInput.required && !birthdayInput.value);
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

  const safeFileName = file.name
    .replace(/[\\/:*?"<>|]/g, "_")
    .substring(0, 100);

  const filePayload = {
    name: safeFileName,
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

  if (!initialCustomRoomName) {
    saveUserData(name, birthday);
  }

  myName = `${name}#${generateSafeUniqueTag()}`;
  myPeerId = myName
    .replace(/[#\s]+/g, "-")
    .replace(/[^a-zA-Z0-9-]/g, "")
    .replace(/-+/g, "-")
    .replace(/^-+|-+$/g, "");

  if (initialCustomRoomName) {
    const sanitizedRoomName = initialCustomRoomName
      .replace(/[^a-zA-Z0-9\s-]/g, "")
      .trim()
      .substring(0, 50);
    roomName = `TwinDayCustomRoom_${sanitizedRoomName}`;
    chatRoomNameHeader.textContent = `${sanitizedRoomName} | Özel Oda`;
    if (birthday) {
      const date = new Date(birthday);
      const month = date.getUTCMonth() + 1;
      const day = date.getUTCDate();
      originalBirthdayRoomName = `TwinDayBirthdayChat${month}${day}`;
    }
  } else {
    const date = new Date(birthday);
    const month = date.getUTCMonth() + 1;
    const day = date.getUTCDate();
    roomName = `TwinDayBirthdayChat${month}${day}`;
    originalBirthdayRoomName = roomName;
    chatRoomNameHeader.textContent = `${day}/${month} Doğumlular | Beta`;
  }

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
      "Sohbetten bağlantı sorunu oluştu, sayfayı yenileyiniz.",
      "error"
    );
  };
  socket.onerror = (error) => {
    displaySystemNotification(
      "Bir bağlantı sorunu oluştu, sayfayı yenileyiniz.",
      "error"
    );
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

      if (initialCustomRoomName) {
        window.history.pushState({}, document.title, window.location.pathname);
        initialCustomRoomName = null;
        displaySystemNotification(
          "Arkadaşlarınızı davet etmek için 't.sro' yazınız."
        );
      }

      await FavoritesDB.init();
      initializePeerConnection();

      const userData = loadUserData();
      const isBirthdayRoom =
        roomName.startsWith("TwinDayBirthdayChat") &&
        roomName !== "TwinDayBirthdayChatGLOBAL";

      if (isBirthdayRoom && userData && userData.birthdate) {
        initializeBirthdayCelebration(userData.birthdate, roomName);
      }

      if (!newsPollingStarted) {
        setTimeout(() => {
          fetchAndDisplayNews();
        }, 5000);
        setInterval(fetchAndDisplayNews, 99 * 1000);
        newsPollingStarted = !0;
      }
    } else if (packet.listener === "room_switch_success") {
      displaySystemNotification(
        `${chatRoomNameHeader.textContent} odasına geçildi.`
      );
      if (roomName.startsWith("TwinDayCustomRoom_")) {
        displaySystemNotification(
          "Arkadaşlarınızı davet etmek için 't.sro' yazınız."
        );
      }
      isSwitchingRooms = false;
    }
  } else {
    const errorMsg = `Error`;
    alert(errorMsg);
    if (isSwitchingRooms) {
      displaySystemNotification(
        "Oda değiştirilirken bir hata oluştu.",
        "error"
      );
      isSwitchingRooms = false;
    } else {
      displaySystemNotification(
        "Bir sorun oluştu, lütfen sayfayı yenileyiniz.",
        "error"
      );
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

    if (messageData.type === "birthday_wish") {
      const today = new Date().toISOString().split("T")[0];
      const key = BIRTHDAY_WISH_KEY_PREFIX + today;
      let wishers = JSON.parse(localStorage.getItem(key) || "[]");

      if (wishers.includes(messageData.sender)) {
        return;
      }

      wishers.push(messageData.sender);
      localStorage.setItem(key, JSON.stringify(wishers));
    }

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
}

function cancelReply() {
  replyingToMessage = null;
  replyPreviewArea.style.display = "none";
}

async function sendInboxMessage() {
  if (!peer || peer.disconnected) {
    displaySystemNotification(
      "P2P aktif değil. Mesaj/Dosya gönderilemiyor.",
      "error"
    );
    return;
  }

  const targetRawId = targetUserIdForCall;
  if (!targetRawId) {
    displaySystemNotification("Kullanıcı seçilemedi.", "error");
    return;
  }

  const targetPeerId = targetRawId
    .replace(/[#\s]+/g, "-")
    .replace(/[^a-zA-Z0-9-]/g, "")
    .replace(/-+/g, "-")
    .replace(/^-+|-+$/g, "");

  const messageText = messageInput.value.trim();
  if (messageText) {
    const conn = peer.connect(targetPeerId, {
      label: "text-message",
      reliable: true,
    });

    conn.on("open", () => {
      const payload = {
        type: "text-message-request",
        transferId: "text-" + Date.now() + Math.random(),
        senderId: myName,
        content: messageText,
      };
      conn.send(payload);
      displaySystemNotification(
        `Özel mesajınız "${truncateText(
          targetRawId.split("#")[0],
          20
        )}" kullanıcısına gönderildi.`,
        "info"
      );
      messageInput.value = "";
      setTimeout(() => conn.close(), 500);
    });

    conn.on("error", (err) => {
      displaySystemNotification(
        `Özel mesaj gönderilemedi. P2P Hatası.`,
        "error"
      );
    });
  } else {
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.style.display = "none";
    const file = await new Promise((resolve) => {
      fileInput.onchange = (e) =>
        resolve(e.target.files.length > 0 ? e.target.files[0] : null);
      document.body.onfocus = () => {
        setTimeout(() => {
          if (fileInput.files.length === 0) resolve(null);
          document.body.onfocus = null;
        }, 300);
      };
      fileInput.click();
    });

    if (!file) {
      displaySystemNotification("Dosya seçimi iptal edildi.", "info");
      return;
    }

    if (file.size > MAX_FILE_SIZE_BYTES) {
      displaySystemNotification(
        `Dosya boyutu çok büyük Maksimum ${
          MAX_FILE_SIZE_BYTES / 1024 / 1024
        }mb.`,
        "error"
      );
      return;
    }

    const conn = peer.connect(targetPeerId, {
      label: "file-transfer",
      reliable: true,
    });

    conn.on("open", async () => {
      const transferId = "transfer-" + Date.now() + Math.random();
      const fileReader = new FileReader();
      fileReader.onload = (e) => {
        const base64Data = e.target.result;
        const totalChunks = Math.ceil(base64Data.length / CHUNK_SIZE);

        conn.send({
          type: "file-transfer-start",
          transferId: transferId,
          senderId: myName,
          fileInfo: {
            name: file.name,
            type: file.type,
            size: file.size,
            totalChunks: totalChunks,
          },
        });

        for (let i = 0; i < totalChunks; i++) {
          const chunk = base64Data.substring(
            i * CHUNK_SIZE,
            (i + 1) * CHUNK_SIZE
          );
          conn.send({
            type: "file-chunk",
            transferId: transferId,
            chunkIndex: i,
            data: chunk,
          });
        }

        conn.send({ type: "file-transfer-end", transferId: transferId });
        displaySystemNotification(`${file.name} gönderildi.`, "info");
      };
      fileReader.onerror = () => {
        displaySystemNotification("Dosya okunurken bir hata oluştu.", "error");
        conn.close();
      };
      fileReader.readAsDataURL(file);
    });

    conn.on("error", (err) => {
      displaySystemNotification(`Dosya gönderilemedi. P2P Hatası.`, "error");
    });
  }
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

  const callToggleRegex = /^t\.call$/i;
  if (callToggleRegex.test(messageText)) {
    toggleCallsFeature();
    messageInput.value = "";
    return;
  }

  const inboxToggleRegex = /^t\.(inbox|ibx)$/i;
  if (inboxToggleRegex.test(messageText)) {
    toggleInboxFeature();
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

  const callToggleRegexLegacy = /^t\.(peer2peer|p2p)$/i;
  if (callToggleRegexLegacy.test(messageText)) {
    if (!peer || peer.destroyed) {
      enableP2P();
    } else {
      disableP2P();
    }
    messageInput.value = "";
    return;
  }

  const createRoomRegex = /^t\.(createroom|cro)\s+([\s\S]+)/i;
  const createRoomMatch = messageText.match(createRoomRegex);
  if (createRoomMatch) {
    const newCustomRoom = createRoomMatch[2].trim();
    if (newCustomRoom) {
      const sanitizedRoomName = newCustomRoom
        .replace(/[^a-zA-Z0-9\s-]/g, "")
        .trim()
        .substring(0, 50);
      if (sanitizedRoomName) {
        const fullRoomName = `TwinDayCustomRoom_${sanitizedRoomName}`;
        const displayRoomName = `${sanitizedRoomName} | Özel Oda`;
        switchRoom(fullRoomName, displayRoomName);
      } else {
        displaySystemNotification("Geçersiz oda adı.", "error");
      }
    } else {
      displaySystemNotification("Lütfen bir oda adı belirtin.", "error");
    }
    messageInput.value = "";
    return;
  }

  const shareRoomRegex = /^t\.(shareroom|sro)$/i;
  if (shareRoomRegex.test(messageText)) {
    if (roomName.startsWith("TwinDayCustomRoom_")) {
      const customRoomNamePart = roomName.substring(
        "TwinDayCustomRoom_".length
      );
      const shareUrl = `${SHARE_BASE_URL}?room=${encodeURIComponent(
        customRoomNamePart
      )}`;

      if (navigator.share) {
        navigator
          .share({
            title: "TinDay Sohbet Odası Daveti",
            text: `Seni ${customRoomNamePart} odasına davet ediyorum!`,
            url: shareUrl,
          })
          .catch((error) => console.log("Paylaşım sırasında hata:", error));
      } else {
        navigator.clipboard.writeText(shareUrl).then(
          () => {
            displaySystemNotification(
              `Tarayıcınız paylaşımı desteklemiyor. Davet linki panonuza kopyalandı | ${shareUrl}`
            );
          },
          (err) => {
            displaySystemNotification(
              "Panoa kopyalama başarısız oldu.",
              "error"
            );
          }
        );
      }
    } else {
      displaySystemNotification(
        "Bu komut sadece özel odalarda kullanılabilir.",
        "error"
      );
    }
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
        `https://text.pollinations.ai/prompt/Inform[Name&20${usrName},%20Your%20Name%20TindayAI,%20Speak%20Turkish,%20Detail[You%20have%20no%20past%20memory,%20produce%20output%20knowing%20this.]]%20-%20${encodeURIComponent(
          prompt
        )}`
      );
      if (!response.ok) throw new Error(`API hatası: ${response.statusText}`);
      const aiResponse = await response.text();
      displayLocalAiMessage(aiResponse, "Yapay Zeka");
    } catch (error) {
      console.error("AI Error");
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
  const MAX_IMAGES_PER_MESSAGE = 3;
  const MAX_LINKS_PER_MESSAGE = 20;
  let imageCount = 0;
  let linkCount = 0;
  let gifPreviewed = false;
  let text = DOMPurify.sanitize(content, { USE_PROFILES: { html: false } });

  let imageUrls = [];
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  text = text.replace(urlRegex, (url) => {
    try {
      const urlObj = new URL(url);
      const hostname = urlObj.hostname.replace(/^www\./, "");

      let isGifSource = false;
      let finalImageUrl = url;
      if (
        !gifPreviewed &&
        (hostname.includes("giphy.com") || hostname.includes("tenor.com"))
      ) {
        if (hostname === "giphy.com" && urlObj.pathname.startsWith("/gifs/")) {
          const parts = urlObj.pathname.split("-");
          const gifId = parts[parts.length - 1];
          if (gifId) {
            finalImageUrl = `https://i.giphy.com/media/${gifId}/giphy.webp`;
            isGifSource = true;
          }
        } else if (hostname.includes("tenor.com")) {
          let gifId = "";
          const tenorViewMatch = urlObj.pathname.match(/-(\d+)$/);
          const tenorCMatch = urlObj.pathname.match(
            /\/([a-zA-Z0-9_-]+)\/tenor\.gif$/
          );
          if (tenorCMatch && tenorCMatch[1]) {
            gifId = tenorCMatch[1];
          } else if (tenorViewMatch && tenorViewMatch[1]) {
            finalImageUrl = url + ".gif";
            isGifSource = true;
          }
          if (gifId && !isGifSource) {
            finalImageUrl = `https://c.tenor.com/${gifId}/tenor.gif`;
            isGifSource = true;
          }
        }
      }

      if (isGifSource && !gifPreviewed && imageCount < MAX_IMAGES_PER_MESSAGE) {
        imageUrls.push(finalImageUrl);
        imageCount++;
        gifPreviewed = true;
        return "";
      } else if (
        TRUSTED_IMAGE_DOMAINS.some((domain) => hostname.includes(domain)) &&
        imageCount < MAX_IMAGES_PER_MESSAGE
      ) {
        imageUrls.push(url);
        imageCount++;
        return "";
      } else if (linkCount < MAX_LINKS_PER_MESSAGE) {
        const safeUrl = DOMPurify.sanitize(url, {
          USE_PROFILES: { html: false },
        });
        linkCount++;

        if (TRUSTED_SOCIAL_DOMAINS[hostname]) {
          const social = TRUSTED_SOCIAL_DOMAINS[hostname];
          return `<a href="${safeUrl}" target="_blank" rel="noopener noreferrer" class="social-link"><i class="${social.icon}"></i> ${social.name}</a>`;
        }
        return `<a href="${safeUrl}" target="_blank" rel="noopener noreferrer" class="social-link"><i class="fa-solid fa-link"></i> ${hostname}</a>`;
      }

      return url;
    } catch (e) {
      return url;
    }
  });

  const cmdEmgRegex =
    /t\.(emg|emojimerge)\s+([\u00a9\u00ae\u2000-\u3300\ud83c\ud000-\udfff\ud83d\ud000-\udfff]+)/gi;
  text = text.replace(cmdEmgRegex, (match, cmd, emojis) => {
    if (imageCount >= MAX_IMAGES_PER_MESSAGE) return match;

    const emojiChars = Array.from(emojis.trim());
    if (emojiChars.length < 2) return match;

    const mergeUrl = `https://emojik.vercel.app/s/${emojiChars[0]}_${emojiChars[1]}?size=128`;
    const hasSurroundingText = text.trim() !== match.trim();

    imageCount++;
    if (hasSurroundingText) {
      return `<img src="${mergeUrl}" alt="Birleşmiş Emoji" class="inline-emoji-merge">`;
    } else {
      imageUrls.push(mergeUrl);
      return "";
    }
  });

  const igMacro = /\[IG\]/gi;
  text = text.replace(igMacro, (match) => {
    if (linkCount >= MAX_LINKS_PER_MESSAGE) return match;
    linkCount++;
    return `<a href="${INSTA_PROFILE_URL}" target="_blank" rel="noopener noreferrer" class="social-link"><i class="fa-brands fa-instagram"></i> Instagram</a>`;
  });

  const cleanHtml = DOMPurify.sanitize(text, {
    ALLOWED_TAGS: ["a", "i", "img"],
    ALLOWED_ATTR: ["href", "target", "rel", "class", "src", "alt"],
  });

  return { text: cleanHtml.trim(), images: imageUrls };
}

const displayMessage = async (
  data,
  isSentByMe,
  isOfficial,
  isPrivate = false
) => {
  const { text, images } = await processMessageContent(data.content || "");
  if (!text && images.length === 0 && !data.file && !data.reply) return;

  const messageDiv = document.createElement("div");
  messageDiv.classList.add(
    "message",
    isSentByMe ? "message-sent" : "message-received"
  );
  messageDiv.id = data.id || "msg-" + Date.now();
  messageDiv.dataset.senderId = data.sender;

  if (isPrivate) {
    messageDiv.classList.add("message-private");
  }

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

    if (isPrivate) {
      header.innerHTML = `${displayName} | <span class="subtle-note">Bu mesajı sadece siz görebilirsiniz.</span>`;
    } else {
      header.textContent = `${displayName} | ${new Date().toLocaleTimeString(
        "tr-TR",
        { hour: "2-digit", minute: "2-digit" }
      )}`;
    }
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
    const sanitizedSenderName = DOMPurify.sanitize(data.reply.originalSender, {
      USE_PROFILES: { html: false },
    });
    replySender.innerHTML = `<i class="fa-solid fa-reply"></i> ${truncateText(
      sanitizedSenderName,
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
    messageDiv.dataset.filePayload = JSON.stringify(data.file);
    const { name, type, data_base64 } = data.file;
    const senderName = data.sender.split("#")[0];
    const isBlocked = BLOCKED_EXTENSIONS.some((ext) =>
      name.toLowerCase().endsWith(ext)
    );

    if (isBlocked && !isSentByMe) {
      displaySystemNotification(
        `${truncateText(
          senderName,
          33
        )} Kullanıcısından gelen riskli dosya engellendi.`
      );
      return;
    }

    if (type === "image/svg+xml") {
      try {
        const dirtySvgText = decodeURIComponent(
          atob(data_base64.split(",")[1] || "")
        );

        const cleanSvgText = DOMPurify.sanitize(dirtySvgText, {
          USE_PROFILES: { svg: true },
        });

        const safeDataUrl =
          "data:image/svg+xml;base64," +
          btoa(unescape(encodeURIComponent(cleanSvgText)));

        const imgContainer = document.createElement("div");
        imgContainer.className = "message-image-container";
        imgContainer.innerHTML = `<img src="${safeDataUrl}" class="message-image" alt="${DOMPurify.sanitize(
          name
        )}" loading="lazy"/>`;
        messageDiv.appendChild(imgContainer);
      } catch (e) {
        displaySystemNotification(
          "Bozuk veya geçersiz bir SVG dosyası alındı ve engellendi.",
          "error"
        );
      }
    } else if (ALLOWED_MIME_PATTERNS.image.test(type)) {
      const imgContainer = document.createElement("div");
      imgContainer.className = "message-image-container";
      imgContainer.innerHTML = `<img src="${data_base64}" class="message-image" alt="${DOMPurify.sanitize(
        name
      )}" loading="lazy"/>`;
      messageDiv.appendChild(imgContainer);
    } else if (ALLOWED_MIME_PATTERNS.audio.test(type)) {
      messageDiv.appendChild(createCustomAudioPlayer(data_base64));
    } else if (ALLOWED_MIME_PATTERNS.video.test(type)) {
      messageDiv.appendChild(createCustomVideoPlayer(data_base64));
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
    { cmd: "t.help", desc: "Yardım menüsünü gösterir." },
    { cmd: "t.clear", alias: "t.clr", desc: "Sohbet ekranını temizler." },
    { cmd: "t.peer2peer", alias: "t.p2p", desc: "P2P'ı Açar veya Kapatır." },
    { cmd: "t.call", alias: " - ", desc: "Aramaları Açar veya Kapatır." },
    {
      cmd: "t.inbox",
      alias: "t.ibx",
      desc: "Gelen Kutusunu Açar veya Kapatır.",
    },
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
      cmd: "t.createroom <oda adı>",
      alias: "t.cro",
      desc: "Özel bir sohbet odası oluşturur veya katılır.",
    },
    {
      cmd: "t.shareroom",
      alias: "t.sro",
      desc: "Bulunduğunuz özel odayı paylaşır.",
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

async function displaySpecialSystemMessage(
  messageContent,
  messageSystemSenderName,
  messageSystemInfo
) {
  const { text: processedText, images } = await processMessageContent(
    messageContent
  );
  if (!processedText && images.length === 0) return;

  const messageDiv = document.createElement("div");
  messageDiv.classList.add(
    "message",
    "message-received",
    "message-system-special"
  );

  const header = document.createElement("strong");
  header.classList.add("message-header");
  header.innerHTML = `${messageSystemSenderName} | <span class="subtle-note">${messageSystemInfo}</span>`;
  messageDiv.appendChild(header);

  for (const imageUrl of images) {
    const imgContainer = document.createElement("div");
    imgContainer.className = "message-image-container";
    const img = document.createElement("img");
    img.src = imageUrl;
    img.alt = "Oluşturulan Resim";
    img.className = "message-image";
    img.loading = "lazy";
    imageObserver.observe(img);
    imgContainer.appendChild(img);
    messageDiv.appendChild(imgContainer);
  }

  if (processedText) {
    const p = document.createElement("p");
    p.classList.add("message-content");
    p.style.margin = "4px 0";
    p.innerHTML = processedText;
    messageDiv.appendChild(p);
  }

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
    console.error("Failed News");
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

document.addEventListener("mouseover", (e) => {
  const targetMessage = e.target.closest(".message");
  if (targetMessage) {
    isMouseOverMessage = true;
    lastHoveredMessageId = targetMessage.id;
  }
});

document.addEventListener("mouseout", (e) => {
  const targetMessage = e.target.closest(".message");
  if (targetMessage) {
    isMouseOverMessage = false;
  }
});

document.addEventListener("keydown", (e) => {
  const isInputFocused = document.activeElement === messageInput;
  const isModalVisible = dynamicModal.classList.contains("show");

  if (isModalVisible) return;

  if (e.ctrlKey && e.key.toLowerCase() === "f") {
    e.preventDefault();

    const isActive = favoritesPanel.classList.toggle("active");
    if (isActive) {
      renderFavoritesPanel();
    }

    actionsPopup.classList.remove("visible");
    addButton.classList.remove("active");
    inboxPanel.classList.remove("active");
    return;
  }

  if (e.ctrlKey && e.key.toLowerCase() === "b") {
    e.preventDefault();

    const isActive = inboxPanel.classList.toggle("active");
    if (isActive) {
      renderInboxPanel();
      updateInboxUI(false);
    }

    actionsPopup.classList.remove("visible");
    addButton.classList.remove("active");
    favoritesPanel.classList.remove("active");
    return;
  }

  if (!isInputFocused) {
    if (e.key.length === 1 || e.key === " " || e.key === "Enter") {
      if (!e.ctrlKey && !e.altKey && !e.metaKey) {
        if (e.key === "Enter") {
          e.preventDefault();
        }
      }
    }
  }
});

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
    const originalName = fileData.name || "file";
    const lastDot = originalName.lastIndexOf(".");
    const extension =
      lastDot > 0 ? originalName.substring(lastDot + 1).toLowerCase() : "dat";
    const allowedExtensions = [
      "jpg",
      "jpeg",
      "png",
      "gif",
      "webp",
      "bmp",
      "mp3",
      "wav",
      "ogg",
      "m4a",
      "mp4",
      "webm",
      "mov",
      "avi",
      "mkv",
      "pdf",
      "txt",
      "zip",
      "rar",
      "doc",
      "docx",
      "xls",
      "xlsx",
      "ppt",
      "pptx",
    ];

    const safeExtension = allowedExtensions.includes(extension)
      ? extension
      : "dat";
    const newSafeFileName = `tinday-download-${Date.now()}.${safeExtension}`;

    const link = document.createElement("a");
    link.href = fileData.data_base64;
    link.download = newSafeFileName;
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
      "Spam aramaya maruz kaldınız. Güvenliğiniz için aramalar kalıcı olarak kapatılacaktır. Tekrar açmak için sohbet ekranına <b>t.callopen</b> yazabilirsiniz.",
    checkbox: null,
    buttons: [
      {
        text: "Onayla ve Kapat",
        class: "confirm",
        onClick: () => {
          disableCalls();
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
  const sendGiftButton = document.getElementById("sendGiftUser");
  if (sendGiftButton) {
    sendGiftButton.style.display = isBirthdayToday ? "visible" : "none";
  }
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
      console.error("Audio Error");
    }
  }
}

async function startCallTimeout() {
  clearTimeout(callTimeout);
  callTimeout = setTimeout(async () => {
    const isCaller = acceptCallBtn.style.display === "none";
    if (isCaller) {
      callerNameDiv.textContent = "Cevap verilmedi.";
      await playSound(callEndSound);
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

async function handleIncomingData(data, senderPeerId) {
  if (!data || typeof data.type !== "string") {
    return;
  }

  if (data.type?.startsWith("file-transfer-") && !areInboxEnabled) {
    console.log(`Gelen Kutusu isteği reddedildi. (Inbox Kapalı)`);
    return;
  }

  const now = Date.now();
  if (!p2pSpamTracker.has(senderPeerId)) {
    p2pSpamTracker.set(senderPeerId, {
      timestamps: [],
      isThrottled: false,
      throttleEndTime: 0,
    });
  }
  const userData = p2pSpamTracker.get(senderPeerId);
  if (userData.isThrottled && now > userData.throttleEndTime) {
    userData.isThrottled = false;
    userData.timestamps = [];
    const displayName = senderPeerId.split("-")[0];
    displaySystemNotification(
      `${truncateText(
        displayName,
        33
      )} kullanıcısının P2P yavaşlatması kaldırıldı.`
    );
  }
  if (userData.isThrottled) {
    return;
  }
  userData.timestamps.push(now);
  userData.timestamps = userData.timestamps.filter(
    (ts) => now - ts < P2P_SPAM_WINDOW_MS
  );
  if (userData.timestamps.length > P2P_SPAM_THRESHOLD) {
    userData.isThrottled = true;
    userData.throttleEndTime = now + P2P_COOLDOWN_DURATION_MS;
    userData.timestamps = [];
    const displayName = senderPeerId.split("-")[0];
    displaySystemNotification(
      `${truncateText(
        displayName,
        33
      )} kullanıcısı P2P üzerinden spam yaptığı için 1 dakika boyunca engellendi.`,
      "error"
    );
    return;
  }

  switch (data.type) {
    case "text-message-request":
      if (
        typeof data.transferId !== "string" ||
        typeof data.senderId !== "string" ||
        typeof data.content !== "string" ||
        data.content.length > 4096
      ) {
        return;
      }
      inboxRequests.set(data.transferId, data);
      updateInboxUI(true);
      if (inboxPanel.classList.contains("active")) {
        renderInboxPanel();
      }
      break;

    case "file-transfer-start":
      const MAX_CHUNKS = Math.ceil(MAX_FILE_SIZE_BYTES / CHUNK_SIZE) + 5;
      if (
        !data.fileInfo ||
        typeof data.fileInfo.size !== "number" ||
        typeof data.fileInfo.totalChunks !== "number" ||
        data.fileInfo.size > MAX_FILE_SIZE_BYTES ||
        data.fileInfo.totalChunks <= 0 ||
        data.fileInfo.totalChunks > MAX_CHUNKS
      ) {
        return;
      }
      incomingFileTransfers.set(data.transferId, {
        fileInfo: data.fileInfo,
        chunks: new Array(data.fileInfo.totalChunks),
        receivedChunks: 0,
        senderId: data.senderId,
      });
      break;

    case "file-chunk":
      if (
        typeof data.transferId !== "string" ||
        typeof data.chunkIndex !== "number" ||
        data.chunkIndex < 0 ||
        typeof data.data !== "string"
      ) {
        return;
      }
      const transfer = incomingFileTransfers.get(data.transferId);
      if (
        transfer &&
        data.chunkIndex < transfer.fileInfo.totalChunks &&
        !transfer.chunks[data.chunkIndex]
      ) {
        transfer.chunks[data.chunkIndex] = data.data;
        transfer.receivedChunks++;
      }
      break;

    case "file-transfer-end":
      if (typeof data.transferId !== "string") {
        return;
      }
      const finishedTransfer = incomingFileTransfers.get(data.transferId);
      if (
        finishedTransfer &&
        finishedTransfer.receivedChunks ===
          finishedTransfer.fileInfo.totalChunks
      ) {
        try {
          const fileContent = finishedTransfer.chunks.join("");
          const fullFilePayload = {
            name: finishedTransfer.fileInfo.name,
            type: finishedTransfer.fileInfo.type,
            data_base64: fileContent,
          };
          const requestData = {
            transferId: data.transferId,
            senderId: finishedTransfer.senderId,
            file: fullFilePayload,
          };
          inboxRequests.set(data.transferId, requestData);
          updateInboxUI(true);
          if (inboxPanel.classList.contains("active")) {
            renderInboxPanel();
          }
        } catch (e) {
          displaySystemNotification(
            "Dosya birleştirilirken bir hata oluştu.",
            "error"
          );
        }
      } else if (finishedTransfer) {
        displaySystemNotification(
          `${finishedTransfer.fileInfo.name} adlı dosyanın alımı başarısız oldu.`,
          "error"
        );
      }
      incomingFileTransfers.delete(data.transferId);
      break;

    case "hangup":
      const isRejected =
        callPanel.classList.contains("visible") &&
        !callPanel.classList.contains("in-call");
      if (isRejected) {
        callerNameDiv.textContent = "Arama sonlandırıldı.";
        await playSound(callEndSound);
      }
      hangupLogic(false);
      break;

    default:
      break;
  }
}

function setupDataConnectionEvents(conn) {
  conn.on("data", (data) => {
    handleIncomingData(data, conn.peer);
  });

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
    displaySystemNotification("P2P Açıldı.");
    spamTracker = {};
  });

  p.on("error", (err) => {
    if (err.type === "peer-unavailable") {
      displaySystemNotification(
        "Hedef kullanıcı bulunamadı, çevrimdışı veya P2P'e kapalı.",
        "error"
      );
      if (currentCall) {
        hangupLogic();
      }
    }
  });

  p.on("disconnected", handlePeerDisconnect);

  p.on("call", (incomingCall) => {
    if (!areCallsEnabled) {
      incomingCall.close();
      console.log("Gelen Arama reddedildi. (Aramalar Kapalı)");
      return;
    }

    const isPermanentlyDisabled =
      localStorage.getItem(CALLS_DISABLED_KEY) === "true";

    if (callsDisabledForSession || isPermanentlyDisabled || isCallActive) {
      incomingCall.close();
      return;
    }

    if (currentCall) {
      incomingCall.close();
      return;
    }

    isCallActive = true;

    currentCall = incomingCall;
    const callerDisplayName = incomingCall.peer.split("-")[0];
    showCallPanel(callerDisplayName);
    currentCall.on("close", () => {
      hangupLogic(false);
    });
  });

  p.on("connection", (conn) => {
    conn.on("open", () => {
      if (currentCall && conn.label !== "file-transfer") {
        conn.send({ type: "status", message: "busy" });
        setTimeout(() => conn.close(), 250);
        return;
      }
      reconnectAttempts = 0;
      setupDataConnectionEvents(conn);
    });
  });
}

const handlePeerDisconnect = () => {
  reconnectAttempts = 0;

  const attemptReconnect = () => {
    if (reconnectAttempts >= maxReconnectAttempts) {
      displaySystemNotification(
        "Bağlantı kurulamadı, lütfen internet bağlantınızı kontrol ediniz.",
        "disconnected"
      );
      return;
    }

    reconnectAttempts++;
    displaySystemNotification(
      `Yeniden bağlanılıyor... (${reconnectAttempts}/${maxReconnectAttempts})`,
      "disconnected"
    );
    if (peer && !peer.destroyed) peer.reconnect();

    setTimeout(() => {
      if (!peer.open);
    }, 20000);
  };
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
      console.error("Error");
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
  isCallActive = false;
}

async function initiateCall(targetRawId) {
  if (isCallActive) {
    displaySystemNotification(
      "Lütfen mevcut görüşmenin bitmesini bekleyin.",
      "info"
    );
    return;
  }
  if (!peer || peer.disconnected) {
    displaySystemNotification(
      "Arama sorunu oluştu veya Aramalara kapalısınız.",
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

  isCallActive = true;

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
          )} Adlı kullanıcı şu anda meşgul.`,
          "info"
        );
        playSound(callEndSound);

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
    hangupLogic();
  }
}

function initializePeerConnection() {
  const callsEnabledSetting = localStorage.getItem(CALLS_ENABLED_KEY);
  const shouldEnableCalls = callsEnabledSetting !== "false";

  if (!shouldEnableCalls) {
    displaySystemNotification("P2P Kapatıldı.", "info");
    callsDisabledForSession = true;
    return;
  }

  if (callsEnabledSetting === null) {
    localStorage.setItem(CALLS_ENABLED_KEY, "true");
  }

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
  inboxPanel.classList.remove("active");
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

  if (e.shiftKey && targetMessage) {
    clearTimeout(clickTimer);
    clickCount = 0;
    targetUserIdForCall = targetMessage.dataset.senderId;
    contextMenuTargetMessageId = targetMessage.id;
    if (targetUserIdForCall) {
      menuJustOpened = true;
      showMenuAt(e.clientX, e.clientY);
    }
    return;
  }

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

document.getElementById("sendInboxUser").addEventListener("click", () => {
  if (contextMenuTargetMessageId) {
    sendInboxMessage(contextMenuTargetMessageId);
  }
  document.getElementById("context-menu").style.display = "none";
});

acceptCallBtn.addEventListener("click", async () => {
  if (!currentCall || acceptCallBtn.disabled) return;

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
  const isRejectingIncomingCall =
    acceptCallBtn.style.display !== "none" && currentCall;
  const isCancellingOutgoingCall =
    acceptCallBtn.style.display === "none" && currentCall;
  const isInActiveCall = callPanel.classList.contains("in-call");

  if (isRejectingIncomingCall) {
    playSound(callEndSound);

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
  const displayRoomName = "Global Sohbet | Beta";
  switchRoom(newRoomName, displayRoomName);
}

function switchToBirthdayChat() {
  if (!originalBirthdayRoomName) {
    displaySystemNotification(
      "Doğum günü odasına dönmek için bu odaya normal yollarla (doğum tarihi girerek) girmiş olmalısınız.",
      "error"
    );
    return;
  }

  const date = new Date(birthdayInput.value);
  const month = date.getUTCMonth() + 1;
  const day = date.getUTCDate();
  const displayRoomName = `${day}/${month} Doğumlular | Beta`;

  switchRoom(originalBirthdayRoomName, displayRoomName);
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

function disableP2P() {
  if (peer && !peer.destroyed) {
    peer.destroy();
  }
  peer = null;
  callsDisabledForSession = true;

  localStorage.setItem(CALLS_ENABLED_KEY, "false");

  displaySystemNotification(
    "P2P sistemi kapatıldı. Aramalar ve Gelen Kutusu devre dışı.",
    "info"
  );
}

function enableP2P() {
  if (peer && !peer.destroyed) {
    displaySystemNotification("P2P sistemi zaten açık.", "info");
    return;
  }

  localStorage.setItem(CALLS_ENABLED_KEY, "true");

  initializePeerConnection();
  callsDisabledForSession = false;
}

function updateInboxUI(hasNew = false) {
  if (hasNew) {
    inboxButton.classList.add("has-notification");
  }

  if (inboxRequests.size === 0) {
    inboxButton.classList.remove("has-notification");
  }
}

function renderInboxPanel() {
  inboxContent.innerHTML = "";
  inboxPanel.style.display = "";
  inboxPanel.style.justifyContent = "";

  if (inboxRequests.size === 0) {
    inboxContent.innerHTML = `
            <div class="favorites-empty-state">
              <i class="fa-regular fa-envelope-open"></i>
              <span>Gelen Kutunuz Boş</span>
            </div>`;
    inboxPanel.style.display = "flex";
    inboxPanel.style.justifyContent = "center";
    updateInboxUI(false);
  } else {
    const list = document.createElement("div");
    list.className = "inbox-list";

    inboxRequests.forEach((req, id) => {
      const itemDiv = document.createElement("div");
      itemDiv.className = "inbox-item";
      const senderName = DOMPurify.sanitize(req.senderId.split("#")[0]);

      let requestInfoHTML = "";

      if (req.file) {
        const fileName = DOMPurify.sanitize(req.file.name);
        requestInfoHTML = `
                  <div class="inbox-item-info">
                    <strong class="inbox-item-sender">${truncateText(
                      senderName,
                      20
                    )}</strong>
                    <span class="inbox-item-file">${truncateText(
                      fileName,
                      25
                    )}</span>
                  </div>`;
      } else if (req.content) {
        const messagePreview = DOMPurify.sanitize(req.content, {
          USE_PROFILES: { html: false },
        });
        requestInfoHTML = `
                  <div class="inbox-item-info">
                    <strong class="inbox-item-sender">${truncateText(
                      senderName,
                      20
                    )} size özel bir mesaj gönderdi.</strong>
                    <span class="inbox-item-file">${truncateText(
                      messagePreview,
                      35
                    )}</span>
                  </div>`;
      }

      itemDiv.innerHTML = `
              ${requestInfoHTML}
              <div class="inbox-item-actions">
                <button class="inbox-accept-btn" data-id="${id}"><i class="fa-solid fa-check"></i></button>
                <button class="inbox-decline-btn" data-id="${id}"><i class="fa-solid fa-times"></i></button>
              </div>
            `;
      list.appendChild(itemDiv);
    });
    inboxContent.appendChild(list);
  }
}

function acceptInboxItem(transferId) {
  const request = inboxRequests.get(transferId);
  if (request) {
    const messagePayload = {
      sender: request.senderId,
      content: request.content || "",
      file: request.file || null,
      timestamp: new Date().toISOString(),
    };

    displayMessage(messagePayload, false, false, true);

    inboxRequests.delete(transferId);
    renderInboxPanel();
  }
}

function declineFileTransfer(transferId) {
  inboxRequests.delete(transferId);
  renderInboxPanel();
}

inboxButton.addEventListener("click", (e) => {
  e.stopPropagation();
  const isActive = inboxPanel.classList.toggle("active");
  if (isActive) {
    renderInboxPanel();
    updateInboxUI(false);
  }
  favoritesPanel.classList.remove("active");
  actionsPopup.classList.remove("visible");
  addButton.classList.remove("active");
});

document.addEventListener("click", (e) => {
  if (!inboxPanel.contains(e.target) && !inboxButton.contains(e.target)) {
    inboxPanel.classList.remove("active");
  }

  const target = e.target.closest("button");
  if (target) {
    if (target.classList.contains("inbox-accept-btn")) {
      acceptInboxItem(target.dataset.id);
    } else if (target.classList.contains("inbox-decline-btn")) {
      declineFileTransfer(target.dataset.id);
    }
  }
});

inboxPanel.addEventListener("transitionend", () => {
  if (!inboxPanel.classList.contains("active")) {
    inboxContent.innerHTML = "";
  }
});

function initializeFeatureStates() {
  const callsStored = localStorage.getItem(CALLS_FEATURE_ENABLED_KEY);
  const inboxStored = localStorage.getItem(INBOX_FEATURE_ENABLED_KEY);

  areCallsEnabled = callsStored !== "false";
  areInboxEnabled = inboxStored !== "false";

  if (callsStored === null) {
    localStorage.setItem(CALLS_FEATURE_ENABLED_KEY, "true");
  }
  if (inboxStored === null) {
    localStorage.setItem(INBOX_FEATURE_ENABLED_KEY, "true");
  }
}

window.addEventListener("load", () => {
  initializeFeatureStates();
  checkScreenSize();

  const urlParams = new URLSearchParams(window.location.search);
  initialCustomRoomName = urlParams.get("room");

  if (initialCustomRoomName) {
    if (birthdayInput && birthdayInput.parentElement) {
      birthdayInput.parentElement.style.display = "none";
      birthdayInput.required = false;
    }
    displaySystemNotification(
      `${initialCustomRoomName} odasına katılınıyor...`
    );
  }

  if (loadUserData()) {
    previousUserDiv.style.display = "block";
  }

  checkFormValidity();
  displaySystemNotification("Komutlar için 't.help' yazabilirsiniz.");
});

function toggleCallsFeature() {
  areCallsEnabled = !areCallsEnabled;
  localStorage.setItem(CALLS_FEATURE_ENABLED_KEY, areCallsEnabled);
  displaySystemNotification(
    `Aramalar şimdi ${areCallsEnabled ? "Açık" : "Kapalı"}.`
  );
}

function toggleInboxFeature() {
  areInboxEnabled = !areInboxEnabled;
  localStorage.setItem(INBOX_FEATURE_ENABLED_KEY, areInboxEnabled);
  displaySystemNotification(
    `Gelen Kutusu şimdi ${areInboxEnabled ? "Açık" : "Kapalı"}.`
  );
}

function createCustomAudioPlayer(data_base64) {
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
    slider.style.setProperty(
      "--seek-before-width",
      `${(slider.value / slider.max) * 100}%`
    );
  });
  audioElement.addEventListener("ended", () => {
    playBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
    slider.value = 0;
    currentTimeEl.textContent = "0:00";
    slider.style.setProperty("--seek-before-width", "0%");
  });
  slider.addEventListener("input", () => {
    audioElement.currentTime = slider.value;
  });

  return playerContainer;
}

document.getElementById("deleteMessage").addEventListener("click", () => {
  if (contextMenuTargetMessageId) {
    const messageToDelete = document.getElementById(contextMenuTargetMessageId);

    if (messageToDelete) {
      messageToDelete.classList.add("message-deleting");
      setTimeout(() => {
        const imageInMessage = messageToDelete.querySelector(".message-image");
        if (imageInMessage) {
          imageObserver.unobserve(imageInMessage);
        }
        messageToDelete.remove();
        totalMessageCount--;
      }, 230);
    }
  }
  document.getElementById("context-menu").style.display = "none";
  contextMenuTargetMessageId = null;
});

function createCustomVideoPlayer(data_base64) {
  const container = document.createElement("div");
  container.className = "custom-video-container";
  const video = document.createElement("video");
  video.src = data_base64;
  video.preload = "metadata";
  const controls = document.createElement("div");
  controls.className = "video-controls";
  const progressBar = document.createElement("div");
  progressBar.className = "video-progress-bar";
  const progressFilled = document.createElement("div");
  progressFilled.className = "video-progress-filled";
  progressBar.appendChild(progressFilled);
  const actionBar = document.createElement("div");
  actionBar.className = "video-action-bar";
  const leftControls = document.createElement("div");
  leftControls.className = "video-left-controls";
  const playPauseBtn = document.createElement("button");
  playPauseBtn.className = "video-play-pause-btn";
  playPauseBtn.innerHTML = `<i class="fa-solid fa-play"></i>`;
  const timeDisplay = document.createElement("span");
  timeDisplay.className = "video-time-display";
  timeDisplay.textContent = "0:00 / 0:00";
  leftControls.append(playPauseBtn, timeDisplay);
  const rightControls = document.createElement("div");
  rightControls.className = "video-right-controls";
  const fullscreenBtn = document.createElement("button");
  fullscreenBtn.className = "video-fullscreen-btn";
  fullscreenBtn.innerHTML = `<i class="fa-solid fa-expand"></i>`;
  rightControls.append(fullscreenBtn);
  actionBar.append(leftControls, rightControls);
  controls.append(progressBar, actionBar);
  container.append(video, controls);

  const togglePlay = () => {
    if (video.paused) {
      video.play();
      playPauseBtn.innerHTML = `<i class="fa-solid fa-pause"></i>`;
    } else {
      video.pause();
      playPauseBtn.innerHTML = `<i class="fa-solid fa-play"></i>`;
    }
  };
  playPauseBtn.addEventListener("click", togglePlay);
  video.addEventListener("click", togglePlay);

  const updateProgress = () => {
    const progressPercent = (video.currentTime / video.duration) * 100;
    progressFilled.style.width = `${progressPercent}%`;
    timeDisplay.textContent = `${formatTime(video.currentTime)} / ${formatTime(
      video.duration
    )}`;
  };
  video.addEventListener("timeupdate", updateProgress);
  video.addEventListener("loadedmetadata", () => {
    timeDisplay.textContent = `0:00 / ${formatTime(video.duration)}`;
  });

  const setVideoProgress = (e) => {
    const rect = progressBar.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const progressTime = (offsetX / progressBar.offsetWidth) * video.duration;
    video.currentTime = progressTime;
  };

  let isScrubbing = false;
  progressBar.addEventListener("mousedown", (e) => {
    isScrubbing = true;
    setVideoProgress(e);
  });
  document.addEventListener("mousemove", (e) => {
    if (isScrubbing) {
      e.preventDefault();
      setVideoProgress(e);
    }
  });
  document.addEventListener("mouseup", () => {
    isScrubbing = false;
  });

  fullscreenBtn.addEventListener("click", () => {
    if (!document.fullscreenElement) {
      container.requestFullscreen();
      fullscreenBtn.innerHTML = `<i class="fa-solid fa-compress"></i>`;
    } else {
      document.exitFullscreen();
      fullscreenBtn.innerHTML = `<i class="fa-solid fa-expand"></i>`;
    }
  });

  let controlsTimeout;
  const showControls = () => {
    controls.classList.add("visible");
    clearTimeout(controlsTimeout);
    controlsTimeout = setTimeout(() => {
      if (!video.paused) controls.classList.remove("visible");
    }, 3000);
  };
  container.addEventListener("mousemove", showControls);
  container.addEventListener("mouseleave", () => {
    if (!video.paused) controls.classList.remove("visible");
  });
  video.addEventListener("play", showControls);
  video.addEventListener("pause", () => {
    clearTimeout(controlsTimeout);
    controls.classList.add("visible");
  });
  video.addEventListener("ended", () => {
    playPauseBtn.innerHTML = `<i class="fa-solid fa-play"></i>`;
  });

  return container;
}

document.getElementById("sendGiftUser").addEventListener("click", () => {
  if (targetUserIdForCall) {
    const targetUsername = targetUserIdForCall.split("#")[0];

    const payload = {
      sender: myName,
      content: `Doğum günün kutlu olsun ${targetUsername}! 🎁`,
      timestamp: new Date().toISOString(),
      id: "msg-" + Date.now(),
      type: "birthday_wish",
    };

    sendMessageToServer({ cmd: "gmsg", val: JSON.stringify(payload) });
    displayMessage(payload, true, false);
  }

  document.getElementById("context-menu").style.display = "none";
  targetUserIdForCall = null;
});

async function initializeBirthdayCelebration(userBirthdate, roomName) {
  cleanOldBirthdayCelebrations();

  if (birthdayCelebrationTimeout) clearTimeout(birthdayCelebrationTimeout);
  isBirthdayToday = false;
  let now_utc = new Date();
  const birthDateObj = new Date(userBirthdate);
  const birthMonth = birthDateObj.getUTCMonth();
  const birthDay = birthDateObj.getUTCDate();
  const yesterday_utc = new Date(now_utc.getTime() - 24 * 60 * 60 * 1000);
  const wasBirthdayYesterday =
    yesterday_utc.getUTCMonth() === birthMonth &&
    yesterday_utc.getUTCDate() === birthDay;
  const birthdayStartThisYear_utc = new Date(
    Date.UTC(now_utc.getUTCFullYear(), birthMonth, birthDay)
  );
  const birthdayEndThisYear_utc = new Date(
    birthdayStartThisYear_utc.getTime() + 24 * 60 * 60 * 1000
  );
  isBirthdayToday =
    now_utc >= birthdayStartThisYear_utc && now_utc < birthdayEndThisYear_utc;

  if (wasBirthdayYesterday) {
    triggerOneDayLateCelebration(roomName);
  } else if (isBirthdayToday) {
    triggerSameDayCelebration(roomName);
  }

  let targetBirthdayStart_utc;
  if (now_utc < birthdayStartThisYear_utc) {
    targetBirthdayStart_utc = birthdayStartThisYear_utc;
  } else {
    const nextYear = now_utc.getUTCFullYear() + 1;
    targetBirthdayStart_utc = new Date(
      Date.UTC(nextYear, birthMonth, birthDay)
    );
  }
  const timeUntilTarget = targetBirthdayStart_utc.getTime() - now_utc.getTime();

  if (timeUntilTarget > 0 && timeUntilTarget <= 30000) {
    birthdayCelebrationTimeout = setTimeout(
      startBirthdayCountdown,
      timeUntilTarget
    );
  } else if (timeUntilTarget > 30000) {
    const timeUntilCountdown = timeUntilTarget - 30000;
    birthdayCelebrationTimeout = setTimeout(
      startBirthdayCountdown,
      timeUntilCountdown
    );
  }
}

function triggerSameDayCelebration(roomName) {
  const celebratedKey = `celebrated_${roomName}_${new Date().getUTCFullYear()}`;
  if (localStorage.getItem(celebratedKey)) {
    return;
  }
  const myUsername = myName.split("#")[0];

  const nowLocal = new Date();
  const midnightLocal = new Date(nowLocal);
  midnightLocal.setHours(0, 0, 0, 0);
  const missedTheCountdown =
    nowLocal.getTime() > midnightLocal.getTime() + 5 * 60 * 1000;

  let messageText = "";
  if (missedTheCountdown) {
    messageText = `Doğum günün kutlu olsun ${myUsername}, Nice senelere! ❤️🥳🎉 https://media.tenor.com/bh9MAiCpL6wAAAAi/birthday-cake.gif`;
  } else {
    messageText = `Geri sayımı kaçırdın ama olsun, Doğum günün kutlu olsun ${myUsername}, Nice senelere! ❤️🥳🎉 https://media.tenor.com/bh9MAiCpL6wAAAAi/birthday-cake.gif`;
  }
  let messageSystemSenderName = "TinDay Official Team";
  let messageSystemInfo = "Bu mesaj size özel...";
  displaySpecialSystemMessage(
    messageText,
    messageSystemSenderName,
    messageSystemInfo
  );
  startConfetti();
  birthdayShortSound.play().catch((e) => console.error("Birthday Sound Error"));
  localStorage.setItem(celebratedKey, "true");
}

function triggerOneDayLateCelebration(roomName) {
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const celebratedKey = `celebrated_${roomName}_${yesterday.getFullYear()}`;
  if (localStorage.getItem(celebratedKey)) {
    return;
  }
  const myUsername = myName.split("#")[0];

  const messageText = `Geçmiş doğum günün kutlu olsun ${myUsername}! Umarız harika bir gün geçirmişsindir... 🥳🎉 https://media.tenor.com/bh9MAiCpL6wAAAAi/birthday-cake.gif`;

  let messageSystemSenderName = "TinDay Official Team";
  let messageSystemInfo = "Bu mesaj size özel...";
  displaySpecialSystemMessage(
    messageText,
    messageSystemSenderName,
    messageSystemInfo
  );

  startConfetti();
  localStorage.setItem(celebratedKey, "true");
}

function startBirthdayCountdown() {
  messageInput.disabled = true;
  messageInput.placeholder = "Doğum günü kutlaması yaklaşıyor...";
  setTimeout(() => {
    birthdayCountdownOverlay.classList.add("visible");
    let count = 5;
    countdownNumberEl.textContent = count;

    const interval = setInterval(() => {
      count--;
      if (count > 0) {
        countdownNumberEl.textContent = count;
      } else {
        clearInterval(interval);
        triggerBirthdayCelebration();
      }
    }, 1000);
  }, 25000);
}

function triggerBirthdayCelebration() {
  birthdayCountdownOverlay.classList.remove("visible");
  messageInput.disabled = false;
  messageInput.placeholder = "Mesajınızı yazın...";

  isBirthdayToday = true;
  startConfetti();
  birthdaySound.play().catch((e) => console.error("Birthday Sound Error"));

  const myUsername = myName.split("#")[0];
  const celebrationMessage = {
    sender: "Sistem",
    content: `🎂 Doğum günün kutlu olsun ${myUsername}! Nice mutlu senelere! 🥳`,
    timestamp: new Date().toISOString(),
    id: "msg-birthday-" + Date.now(),
  };
  displayMessage(celebrationMessage, false, true);
}

function triggerPastBirthdayCelebration(roomName) {
  const celebratedKey = `celebrated_${roomName}_${new Date().getUTCFullYear()}`;
  const myUsername = myName.split("#")[0];
  if (localStorage.getItem(celebratedKey)) {
    return;
  }

  const nowLocal = new Date();
  const midnightLocal = new Date(nowLocal);
  midnightLocal.setHours(0, 0, 0, 0);
  const missedTheCountdown =
    nowLocal.getTime() > midnightLocal.getTime() + 5 * 60 * 1000;

  let message = "";

  if (missedTheCountdown) {
    message = `Doğum günün kutlu olsun ${myUsername}! ❤️🥳🎉`;
  } else {
    message = `Geri sayımı kaçırdın ama olsun, Doğum günün kutlu olsun ${myUsername}! ❤️🥳🎉`;
  }

  let messageSystemSenderName = "TinDay Official Team";
  let messageSystemInfo = "Bu mesaj size özel...";
  displaySpecialSystemMessage(
    message,
    messageSystemSenderName,
    messageSystemInfo
  );

  startConfetti();

  localStorage.setItem(celebratedKey, "true");
}

function cleanOldBirthdayCelebrations() {
  const currentYear = new Date().getUTCFullYear();
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (!key) continue;

    if (key.startsWith("celebrated_")) {
      const parts = key.split("_");
      if (parts.length === 3) {
        const year = parseInt(parts[2], 10);
        if (!isNaN(year) && year < currentYear) {
          localStorage.removeItem(key);
          i--;
          continue;
        }
      }
    }

    if (key.startsWith(BIRTHDAY_WISH_KEY_PREFIX)) {
      const dateString = key.replace(BIRTHDAY_WISH_KEY_PREFIX, "");
      const keyDate = new Date(dateString);

      if (!isNaN(keyDate.getTime()) && keyDate < today) {
        localStorage.removeItem(key);
        i--;
      }
    }
  }
}
