window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  setTimeout(() => {
    loader.style.opacity = "0";
    loader.style.visibility = "hidden";
  }, 777);
});

const CL_SERVER_IP = "wss://cl.mikedev101.cc/";
const OFFICIAL_BADGE_SVG = document.getElementById("official-badge").innerHTML;
const AUTO_BLOCKER_SVG = document.getElementById("autoblocker-badge").innerHTML;
const E2EE_SVG = document.getElementById(
  "end-to-end-encryption-badge"
).innerHTML;
const POWERED_BY_TENOR_SVG =
  document.getElementById("powered-by-tenor").innerHTML;
const LOCAL_STORAGE_KEY = "tinday_user_data";
const CALLS_DISABLED_KEY = "tinday_calls_disabled";
const INSTA_PROFILE_URL = "https://instagram.com/tindayofficial";
const MAX_MESSAGES = 150;

const RANDOM_BIRTHDAY_GIFS = [
  "https://media.tenor.com/bh9MAiCpL6wAAAAi/birthday-cake.gif",
  "https://media.tenor.com/MD9C0lVAmR0AAAAm/cake-candle.webp",
  "https://media.tenor.com/IXRjBiRK6LQAAAAm/happy-birthday-molang.webp",
  "https://media.tenor.com/vuafm8ov--kAAAAM/budding-pop-happy-birthday.gif",
  "https://media.tenor.com/nfgqq11i6MYAAAAm/happy-birthday.webp",
];

const TRUSTED_SOCIAL_DOMAINS = {
  "instagram.com": { name: "Instagram", icon: "fa-brands fa-instagram" },
  "twitter.com": { name: "Twitter", icon: "fa-brands fa-twitter" },
  "x.com": { name: "X", icon: "fa-brands fa-x-twitter" },
  "reddit.com": { name: "Reddit", icon: "fa-brands fa-reddit-alien" },
  "discord.com": { name: "Discord", icon: "fa-brands fa-discord" },
  "discord.gg": { name: "Discord", icon: "fa-brands fa-discord" },
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

const TRUSTED_AUDIO_DOMAINS = ["audio.jukehost.co.uk"];
const MAX_AUDIOS_PER_MESSAGE = 1;
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
const imagePreviewOverlay = document.getElementById("image-preview-overlay");
const imagePreviewContent = document.getElementById("image-preview-content");
const imagePreviewClose = document.getElementById("image-preview-close");
const imagePreviewContainer = document.getElementById("image-preview-overlay");
const imagePreviewImage = document.getElementById("image-preview-content");
const openGifBtn = document.getElementById("open-gif-btn");
const gifPanel = document.getElementById("gifPanel");
const gifContent = document.getElementById("gifContent");
const gifSearchInput = document.getElementById("gifSearchInput");
const CALLS_ENABLED_KEY = "callsEnabled";
const callUserBtn = document.getElementById("callUser");
const remoteAudioContainer = document.getElementById("remote-audio-container");
const callPanel = document.getElementById("call-panel");
const callerNameDiv = document.getElementById("caller-name");
const callTimerDiv = document.getElementById("call-timer");
const acceptCallBtn = document.getElementById("acceptCallBtn");
const declineCallBtn = document.getElementById("declineCallBtn");
const outgoingCallSound = document.getElementById("outgoing-call-sound");
const incomingCallSound = document.getElementById("incoming-call-sound");
const notificationSound = new Audio(
  "https://tinday.xmeroriginals.com/resources/twinday/sounds/TinDay-Message.mp3"
);
const notificationFocused = new Audio(
  "https://tinday.xmeroriginals.com/resources/twinday/sounds/TinDay-BGMessage.mp3"
);
const notificationVerified = new Audio(
  "https://tinday.xmeroriginals.com/resources/twinday/sounds/TinDay-VerifiedMessage.mp3"
);
const messageSendSound = new Audio(
  "https://tinday.xmeroriginals.com/resources/twinday/sounds/TinDay-MessageSend.mp3"
);
const callEndSound = new Audio(
  "https://tinday.xmeroriginals.com/resources/twinday/sounds/TinDay-CallTimeoutAndRejected.mp3"
);

const AUTOLOGIN_ENABLED_KEY = "tinday_autologin_enabled";
const CALLS_FEATURE_ENABLED_KEY = "tinday_calls_feature_enabled";
const INBOX_FEATURE_ENABLED_KEY = "tinday_inbox_feature_enabled";
const ANTI_SWEAR_KEY = "tinday_anti_swear_enabled";
const CHAT_TIMEOUT_TIME_KEY = "tinday_chat_timeout_time";
const ROOM_HISTORY_KEY = "tinday_room_history";
const MAX_ROOM_HISTORY = 33;
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
const SHARE_BASE_URL = "https://tinday.xmeroriginals.com/";
let originalBirthdayRoomName = "";
let initialCustomRoomName = null;
let socket = null;
let discordCommunity = null;
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
const SYSTEM_GROUP_MAX_INTERNAL_MESSAGES = 25;
let MESSAGE_SLOWER_TIMER =
  Number(localStorage.getItem(CHAT_TIMEOUT_TIME_KEY)) || 0;
let countdownInterval;
let birthdayCheckInterval = null;
let urlToOpen = "";
let isCallActive = false;
let inboxRequests = new Map();
let areCallsEnabled = true;
let areInboxEnabled = true;
let isDebugMode = false;
let incomingFileTransfers = new Map();
let isMouseOverMessage = false;
let lastHoveredMessageId = null;
let isReconnecting = false;
let reconnectTimer = null;
let pendingMessages = [];
let callControlConnection = null;
let isCleaningUp = false;
let profanityList = new Set();
let profanityRegex = null;
let _lastMessageDisplayPromise = Promise.resolve();
let hasHandledLoadedImage = false;
let isPanning = false;
let startX, startY;
let transformX = 0,
  transformY = 0;
let scale = 1;
const maxScale = 5;
const minScale = 1;
let initialDistance = null;
let touchStartX, touchStartY;
let lastTouches = [];
const blockedUsers = new Set();
let isDragging = false;
let panStartThreshold = 5;
let touchStartTime = 0;
let rafPending = false;
const TENOR_API_KEY = "LIVDSRZULELA";
let gifSearchTimeout;
let hasBypassedPrivateIpWarning = false;
let _cachedPublicIp = null;

function hideModal() {
  clearInterval(countdownInterval);
  dynamicModal.classList.remove("show");
  setTimeout(() => {
    dynamicModal.style.display = "none";
  }, 200);
}

function showModal({ title, message, checkbox = null, buttons = [] }) {
  modalTitle.textContent = title;
  const cleanMessage = DOMPurify.sanitize(message);
  modalMessage.innerHTML = `<span class="modal-warning-text">${cleanMessage}</span>`;

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
  const birthDateValue = birthdayInput.value;
  let isDateValid = false;
  let errorMessage = "";
  if (birthDateValue) {
    const birthDate = new Date(birthDateValue);
    if (isNaN(birthDate.getTime())) {
      errorMessage = "Lütfen geçerli bir tarih girin.";
    } else {
      const year = birthDate.getFullYear();
      const currentYear = new Date().getFullYear();
      const minYear = 1900;

      if (year > currentYear) {
        errorMessage = "Gelecekte bir tarih seçemezsiniz.";
      } else if (year < minYear) {
        errorMessage = `Doğum yılı ${minYear} tarihinden önce olamaz.`;
      } else {
        isDateValid = true;
      }
    }
  }
  birthdayInput.setCustomValidity(errorMessage);
  connectBtn.disabled =
    !nameInput.value || (birthdayInput.required && !isDateValid);
}

function calculateAge(birthdateString) {
  if (!birthdateString) return 0;
  const birthDate = new Date(birthdateString);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
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
  const userAge = calculateAge(birthdayInput.value);
  const messagePayload = {
    sender: myName,
    content: "",
    file: filePayload,
    timestamp: new Date().toISOString(),
    id: "msg-" + Date.now(),
    age: userAge,
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
  } else if (payload.cmd === "gmsg") {
    pendingMessages.push(payload);
    displaySystemNotification("Bağlantı koptu, Mesajınız beklemede.", "info");
  } else {
    console.error("Socket is not open.");
  }
};

const handleConnect = (event) => {
  event.preventDefault();
  let name = nameInput.value.trim();
  name = DOMPurify.sanitize(name);
  const birthday = birthdayInput.value;

  if (name === "DebugTinDay") {
    isDebugMode = true;
    console.log("Debug Mode Activated");
  }

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
  if (autoLoginCheck === true) {
    connectBtn.textContent = "Otomatik bağlanılıyor...";
  } else {
    connectBtn.textContent = "Bağlanılıyor...";
  }
  delete globalThis.autoLoginCheck;

  socket = new WebSocket(CL_SERVER_IP);
  socket.onopen = () => {
    const userDataPayload = {
      nickname: myName,
      birthdate: birthday,
    };
    sendMessageToServer({
      cmd: "setid",
      val: JSON.stringify(userDataPayload),
      listener: "username_cfg",
    });
  };

  socket.onmessage = handleSocketMessage;
  socket.onclose = handleSocketClose;
  socket.onerror = (e) => {
    if (!isReconnecting) {
      displaySystemNotification(
        "Bir bağlantı sorunu oluştu, sayfayı yenileyiniz.",
        "error"
      );
    }
    console.error("Socket Error");
  };
};

function handleSocketMessage(event) {
  const packet = JSON.parse(event.data);
  switch (packet.cmd) {
    case "statuscode":
      handleStatusCode(packet);
      break;
    case "gmsg":
      handleIncomingMessage(packet);
      break;
  }
}

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
      if (isReconnecting) {
        displaySystemNotification("Bağlantı yeniden kuruldu.", "info");
        isReconnecting = false;
        reconnectAttempts = 0;
        clearTimeout(reconnectTimer);
        processPendingMessages();
      }

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
      if (isReconnecting) {
        console.error("Reconnection failed.");
      } else {
        displaySystemNotification(
          "Bir sorun oluştu, lütfen sayfayı yenileyiniz.",
          "error"
        );
      }
    }
  }
};

const displaySystemNotification = (message) => {
  const lastMessageEl = messagesContainer.lastElementChild;
  if (
    lastMessageEl &&
    lastMessageEl.classList.contains("message-system-group")
  ) {
    const groupData = lastMessageEl.groupData;
    if (groupData.messages.length >= SYSTEM_GROUP_MAX_INTERNAL_MESSAGES) {
      groupData.messages.shift();
      if (groupData.currentIndex > 0) {
        groupData.currentIndex--;
      }
    }
    groupData.messages.push(message);
    groupData.currentIndex = groupData.messages.length - 1;
    updateSystemGroupUI(lastMessageEl);
  } else {
    const groupDiv = document.createElement("div");
    groupDiv.classList.add("message", "message-system", "message-system-group");
    groupDiv.innerHTML = `
      <p class="system-group-content"></p>
      <span class="system-group-counter"></span>
    `;

    groupDiv.groupData = {
      messages: [message],
      currentIndex: 0,
    };

    groupDiv.addEventListener("click", () => {
      const data = groupDiv.groupData;
      data.currentIndex = (data.currentIndex + 1) % data.messages.length;
      updateSystemGroupUI(groupDiv);
    });

    messagesContainer.appendChild(groupDiv);
    totalMessageCount++;
    updateSystemGroupUI(groupDiv);
  }

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
    if (messageData.hasOwnProperty("age")) {
      const age = messageData.age;
      if (
        typeof age !== "number" ||
        !Number.isInteger(age) ||
        age < 0 ||
        age > 150
      ) {
        messageData.age = null;
      }
    }
    const sanitizedMessageData = sanitizeMessageObject(messageData);
    if (sanitizedMessageData.type === "birthday_wish") {
      const today = new Date().toISOString().split("T")[0];
      const key = BIRTHDAY_WISH_KEY_PREFIX + today;
      let wishers = JSON.parse(localStorage.getItem(key) || "[]");
      if (wishers.includes(sanitizedMessageData.sender)) {
        return;
      }
      wishers.push(sanitizedMessageData.sender);
      localStorage.setItem(key, JSON.stringify(wishers));
    }
    if (sanitizedMessageData.sender !== myName) {
      displayMessage(sanitizedMessageData, false, false);
    }
  } catch (e) {
    console.warn("Received GMSG Error");
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
      const userAge = calculateAge(birthdayInput.value);

      favDiv.onclick = () => {
        const payload = {
          sender: myName,
          content: item.url,
          timestamp: new Date().toISOString(),
          id: "msg-" + Date.now(),
          age: userAge,
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
  const canProceed = await checkPublicIpAndWarn();
  if (!canProceed) {
    displaySystemNotification(
      "Özel mesaj gönderimi kullanıcı tarafından iptal edildi.",
      "info"
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

  const userAge = calculateAge(birthdayInput.value);
  const messageText = messageInput.value.trim();
  if (messageText) {
    messageInput.value = "";

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
        age: userAge,
      };
      conn.send(payload);
      displaySystemNotification(
        `Özel mesajınız ${truncateText(
          targetRawId.split("#")[0],
          20
        )} kullanıcısına gönderildi.`,
        "info"
      );
      setTimeout(() => conn.close(), 500);
    });

    conn.on("error", (err) => {
      displaySystemNotification(
        `Özel mesaj gönderilemedi. P2P Hatası.`,
        "error"
      );
    });

    return;
  }

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
      `Dosya boyutu çok büyük. Maksimum ${
        MAX_FILE_SIZE_BYTES / 1024 / 1024
      }MB.`,
      "error"
    );
    return;
  }

  const conn = peer.connect(targetPeerId, {
    label: "file-transfer",
    reliable: true,
  });

  conn.on("open", () => {
    const transferId = "transfer-" + Date.now() + Math.random();
    const fileReader = new FileReader();

    fileReader.onload = (e) => {
      const base64Data = e.target.result;
      const totalChunks = Math.ceil(base64Data.length / CHUNK_SIZE);
      conn.send({
        type: "file-transfer-start",
        transferId: transferId,
        senderId: myName,
        age: userAge,
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

  const autoLoginRegex = /^t\.(autologin|aulg)$/i;
  if (autoLoginRegex.test(messageText)) {
    let isEnabled = localStorage.getItem(AUTOLOGIN_ENABLED_KEY) === "true";
    isEnabled = !isEnabled;
    localStorage.setItem(AUTOLOGIN_ENABLED_KEY, isEnabled);

    displaySystemNotification(
      `Otomatik giriş özelliği şimdi ${isEnabled ? "Açık" : "Kapalı"}.`
    );

    messageInput.value = "";
    return;
  }

  const antiSwearRegex = /^t\.(antiswear|antsr)$/i;
  if (antiSwearRegex.test(messageText)) {
    let isEnabled = localStorage.getItem(ANTI_SWEAR_KEY) !== "false";
    isEnabled = !isEnabled;
    localStorage.setItem(ANTI_SWEAR_KEY, isEnabled);

    displaySystemNotification(
      `Küfür Filtresi şimdi ${isEnabled ? "Açık" : "Kapalı"}.`
    );

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

  const themeRegex = /^t\.(theme|thme)$/i;
  if (themeRegex.test(messageText)) {
    toggleTheme();
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
            url: shareUrl,
          })
          .catch((e) => console.log("Share Error"));
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

  const chatTimeoutRegex = /^t\.(chatslower|cslor)\s+([\s\S]+)$/i;
  const chatTimeoutTimer = messageText.match(chatTimeoutRegex);
  if (chatTimeoutTimer) {
    const rawValue = chatTimeoutTimer[2]?.replace(/\D/g, "") || "0";
    const reTimer = Math.min(Math.max(Number(rawValue), 0), 3);
    messageInput.value = "";

    const oldTimer = Number(localStorage.getItem(CHAT_TIMEOUT_TIME_KEY)) || 0;

    if (oldTimer === reTimer) {
      displaySystemNotification(
        `Sohbet yavaşlatması ${
          reTimer === 0 ? "kapatıldı." : `${oldTimer} saniye değiştirilmedi.`
        }`
      );
      return;
    }

    localStorage.setItem(CHAT_TIMEOUT_TIME_KEY, reTimer);
    MESSAGE_SLOWER_TIMER = reTimer;

    if (reTimer === 0) {
      displaySystemNotification(`Sohbet yavaşlatması kapatıldı.`);
    } else if (oldTimer === 0) {
      displaySystemNotification(
        `Sohbet yavaşlatması ${reTimer} saniyeye ayarlandı.`
      );
    } else {
      displaySystemNotification(
        `Sohbet yavaşlatması ${oldTimer} saniyeden ${reTimer} saniyeye değiştirildi.`
      );
    }

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
      displayLocalAiMessage(`Üzgünüm bir hata oluştu.`, "Yapay Zeka");
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

  const clientCommandRegex = /\s*t\.(clear|clr|about|party|pty)\s*/gi;
  let hasClientCommand = false;
  let processedText = messageText
    .replace(clientCommandRegex, (match, cmd) => {
      hasClientCommand = true;
      switch (cmd.toLowerCase()) {
        case "clear":
        case "clr":
          waitForSettingsMenuToHide().then(() => {
            showModal({
              title: "Uyarı",
              message: `Bu sohbetteki mesajlar temizlenecek, Emin misiniz?`,
              buttons: [
                {
                  id: "clearMessages",
                  text: `Evet`,
                  class: "confirm",
                  disabled: false,
                  onClick: chatClearConfirmed,
                },
                { text: "İptal", class: "cancel", onClick: hideModal },
              ],
            });
          });
          break;
        case "about":
          waitForSettingsMenuToHide().then(() => {
            showModal({
              title: "Uyarı",
              message: `Hakkımızda sayfasına geçiyorsunuz, Sohbetten ayrılmak üzeresiniz emin misiniz?`,
              buttons: [
                {
                  id: "openAbout",
                  text: `Evet`,
                  class: "confirm",
                  disabled: false,
                  onClick: openAboutConfirmed,
                },
                { text: "İptal", class: "cancel", onClick: hideModal },
              ],
            });
          });
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
  const userAge = calculateAge(birthdayInput.value);

  const messagePayload = {
    sender: myName,
    content: processedText,
    timestamp: new Date().toISOString(),
    id: "msg-" + Date.now(),
    age: userAge,
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

async function waitForSettingsMenuToHide() {
  const el = document.getElementById("settings-menu-back");
  if (!el) return;
  return new Promise((resolve) => {
    function check() {
      const opacity = parseFloat(getComputedStyle(el).opacity);
      if (opacity < 0.1) return resolve();
      requestAnimationFrame(check);
    }
    check();
  });
}

function chatClearConfirmed() {
  hideModal();
  messagesContainer.innerHTML = "";
  totalMessageCount = 0;
  displaySystemNotification("Sohbet temizlendi.");
}

function openAboutConfirmed() {
  hideModal();
  window.open(
    "https://tinday.xmeroriginals.com/about",
    "_blank",
    "noopener,noreferrer"
  );
}

function formatTime(seconds) {
  const floorSeconds = Math.floor(seconds);
  const min = Math.floor(floorSeconds / 60);
  const sec = floorSeconds % 60;
  return `${min}:${sec < 10 ? "0" : ""}${sec}`;
}

async function processMessageContent(content) {
  const MAX_IMAGES_PER_MESSAGE = 3;
  const MAX_AUDIOS_PER_MESSAGE = 3;
  const MAX_LINKS_PER_MESSAGE = 20;

  let imageCount = 0;
  let audioCount = 0;
  let linkCount = 0;
  let gifPreviewed = false;
  let imageUrls = [];
  let audioUrls = [];
  let text = DOMPurify.sanitize(content, { USE_PROFILES: { html: false } });

  const urlRegex = /(https?:\/\/[^\s]+)/g;
  text = text.replace(urlRegex, (url) => {
    try {
      const urlObj = new URL(url);
      const hostname = urlObj.hostname.replace(/^www\./, "");
      if (
        TRUSTED_AUDIO_DOMAINS.some((domain) => hostname.includes(domain)) &&
        audioCount < MAX_AUDIOS_PER_MESSAGE
      ) {
        audioUrls.push(url);
        audioCount++;
        return "";
      }

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
    /t\.(e|emg|emojimerge)\s+([\u00a9\u00ae\u2000-\u3300\ud83c\ud000-\udfff\ud83d\ud000-\udfff]+)/gi;
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

  const buymeacoffeeMacro = /\[BYMC\]/gi;
  text = text.replace(buymeacoffeeMacro, (match) => {
    if (linkCount >= MAX_LINKS_PER_MESSAGE) return match;
    linkCount++;
    return `<a href="https://buymeacoffee.com/xmer" target="_blank" rel="noopener noreferrer" class="social-link"><i class="fa-solid fa-mug-hot"></i> Buy me a Coffee</a>`;
  });

  const discordMacro = /\[DC\]/gi;
  text = text.replace(discordMacro, (match) => {
    if (linkCount >= MAX_LINKS_PER_MESSAGE) return match;
    linkCount++;
    return `<a href="${discordCommunity}" target="_blank" rel="noopener noreferrer" class="social-link"><i class="fa-brands fa-discord"></i> Discord</a>`;
  });

  const cleanHtml = DOMPurify.sanitize(text, {
    ALLOWED_TAGS: ["a", "i", "img"],
    ALLOWED_ATTR: ["href", "target", "rel", "class", "src", "alt"],
  });
  return { text: cleanHtml.trim(), images: imageUrls, audios: audioUrls };
}

const displayMessage = (data, isSentByMe, isOfficial, isPrivate = false) => {
  if (!isSentByMe) {
    if (isOfficial) {
      notificationVerified.play();
    }
  }

  if (MESSAGE_SLOWER_TIMER <= 0 || isSentByMe || isOfficial) {
    _renderMessageToDOM(data, isSentByMe, isOfficial, isPrivate);
    return;
  }

  _lastMessageDisplayPromise = _lastMessageDisplayPromise
    .then(() => {
      return new Promise((resolve) =>
        setTimeout(resolve, MESSAGE_SLOWER_TIMER * 1000)
      );
    })
    .then(() => {
      return _renderMessageToDOM(data, isSentByMe, isOfficial, isPrivate);
    });
};

const _renderMessageToDOM = async (
  data,
  isSentByMe,
  isOfficial,
  isPrivate = false
) => {
  const scrollThreshold = 50;
  const wasScrolledToBottom =
    messagesContainer.scrollHeight - messagesContainer.clientHeight <=
    messagesContainer.scrollTop + scrollThreshold;
  const isFilterActive = localStorage.getItem(ANTI_SWEAR_KEY) !== "false";
  const hasProfanity =
    isFilterActive && !isSentByMe && containsProfanity(data.content || "");

  if (hasProfanity) {
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("message", "message-received");
    messageDiv.id = data.id || "msg-" + Date.now();
    messageDiv.dataset.senderId = data.sender;

    const senderName = data.sender.split("#")[0];
    const displayName = truncateText(senderName, 33);
    const header = document.createElement("strong");
    header.classList.add("message-header");
    header.textContent = `${displayName} | ${new Date().toLocaleTimeString(
      "tr-TR",
      { hour: "2-digit", minute: "2-digit" }
    )}`;
    messageDiv.appendChild(header);
    const blockerBadgeDiv = document.createElement("div");
    blockerBadgeDiv.classList.add("official-badge");
    blockerBadgeDiv.innerHTML = AUTO_BLOCKER_SVG;
    messageDiv.appendChild(blockerBadgeDiv);
    const blockedMessageP = document.createElement("p");
    blockedMessageP.classList.add("message-content", "message-blocked");
    blockedMessageP.innerHTML =
      "<i>Bu mesaj küfür içerdiğinden kaldırıldı, Ayarlar üzerinden Küfür Filtresini kontrol edebilirsiniz.</i>";
    messageDiv.appendChild(blockedMessageP);

    messagesContainer.appendChild(messageDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;

    return;
  }

  const { text, images, audios } = await processMessageContent(
    data.content || ""
  );
  if (
    !text &&
    images.length === 0 &&
    (!audios || audios.length === 0) &&
    !data.file &&
    !data.reply
  )
    return;

  const messageDiv = document.createElement("div");
  messageDiv.classList.add(
    "message",
    isSentByMe ? "message-sent" : "message-received"
  );
  messageDiv.id = data.id || "msg-" + Date.now();
  messageDiv.dataset.senderId = data.sender;

  if (isPrivate) {
    messageDiv.classList.add("message-private");
    const e2eeBadgeDiv = document.createElement("div");
    e2eeBadgeDiv.classList.add("official-badge");
    e2eeBadgeDiv.innerHTML = E2EE_SVG;
    messageDiv.appendChild(e2eeBadgeDiv);
  }

  if (isSentByMe) {
    messageSendSound.play();
  } else {
    if (!isOfficial) {
      document.hasFocus()
        ? notificationFocused.play()
        : notificationSound.play();
    }
    const senderName = data.sender.split("#")[0];
    const displayName = truncateText(senderName, 33);
    const header = document.createElement("strong");
    header.classList.add("message-header");
    if (isPrivate) {
      header.textContent = `Uçtan Uca Şifreli ✦ ${displayName} |  `;
      const subtleNote = document.createElement("span");
      subtleNote.className = "subtle-note";
      subtleNote.textContent = "Bu mesajı sadece siz görebilirsiniz.";
      header.appendChild(subtleNote);
    } else {
      const timeString = new Date().toLocaleTimeString("tr-TR", {
        hour: "2-digit",
        minute: "2-digit",
      });
      if (data.age && data.age > 0) {
        header.textContent = `${data.age} • ${displayName} | ${timeString}`;
      } else {
        header.textContent = `${displayName} | ${timeString}`;
      }
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
    const icon = document.createElement("i");
    icon.className = "fa-solid fa-reply";
    replySender.appendChild(icon);
    replySender.appendChild(
      document.createTextNode(` ${truncateText(sanitizedSenderName, 33)}`)
    );
    const replyContent = document.createElement("div");
    replyContent.className = "message-reply-content";
    let replyContentText = data.reply.originalContent;
    const hasProfanityInReply =
      isFilterActive &&
      !isSentByMe &&
      containsProfanity(replyContentText || "");
    if (hasProfanityInReply) {
      replyContentText = "Yanıtlanan mesaj küfür içerdiğinden gizlendi.";
    }
    replyContent.textContent = truncateText(replyContentText, 100);
    replyContainer.append(replySender, replyContent);
    messageDiv.appendChild(replyContainer);
  }

  const createImageWithLoader = (imageUrl, container, isFile = false) => {
    container.classList.add("loading");
    const loader = document.createElement("div");
    loader.className = "image-loader";
    container.appendChild(loader);

    const img = document.createElement("img");
    img.alt = "Gönderilen Resim";
    img.className = "message-image";
    img.loading = "lazy";

    img.onload = () => {
      container.classList.remove("loading");
      loader.remove();
      if (isSentByMe || wasScrolledToBottom) {
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
      }
    };
    img.onerror = () => {
      container.classList.remove("loading");
      loader.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i>';
    };

    img.src = imageUrl;

    imageObserver.observe(img);

    if (!isFile) {
      container.addEventListener("click", () => openImagePreview(imageUrl));
      container.style.cursor = "pointer";
    }

    container.appendChild(img);
    if (!isFile) {
      const starButton = document.createElement("button");
      starButton.className = "favorite-star-btn";
      FavoritesDB.isFavorite(imageUrl).then((isFav) => {
        starButton.classList.toggle("is-favorite", isFav);
        starButton.innerHTML = isFav
          ? `<i class="fa-solid fa-star"></i>`
          : `<i class="fa-regular fa-star"></i>`;
      });
      starButton.onclick = (e) => {
        e.stopPropagation();
        if (window.getComputedStyle(starButton).opacity === "0") return;
        toggleFavorite(imageUrl);
      };
      container.appendChild(starButton);
    }
  };

  for (const imageUrl of images) {
    const imgContainer = document.createElement("div");
    imgContainer.className = "message-image-container";
    imgContainer.addEventListener("click", () => openImagePreview(imageUrl));
    imgContainer.style.cursor = "pointer";
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
      e.stopPropagation();
      const style = window.getComputedStyle(starButton);
      if (style.opacity === "0") return;
      toggleFavorite(imageUrl);
    };
    imgContainer.appendChild(img);
    imgContainer.appendChild(starButton);
    messageDiv.appendChild(imgContainer);
  }
  if (audios && audios.length > 0) {
    for (const audioUrl of audios) {
      messageDiv.appendChild(createCustomAudioPlayer(audioUrl));
    }
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

    if (type === "image/svg+xml" || ALLOWED_MIME_PATTERNS.image.test(type)) {
      const imgContainer = document.createElement("div");
      imgContainer.className = "message-image-container";
      imgContainer.addEventListener("click", () =>
        openImagePreview(data_base64)
      );
      imgContainer.style.cursor = "pointer";
      let imageUrlToUse = data_base64;
      if (type === "image/svg+xml") {
        try {
          const dirtySvgText = decodeURIComponent(
            atob(data_base64.split(",")[1] || "")
          );
          const cleanSvgText = DOMPurify.sanitize(dirtySvgText, {
            USE_PROFILES: { svg: true },
          });
          imageUrlToUse =
            "data:image/svg+xml;base64," +
            btoa(unescape(encodeURIComponent(cleanSvgText)));
        } catch (e) {
          console.error("Image Error");
        }
      }

      imgContainer.innerHTML = `<img src="${imageUrlToUse}" class="message-image" alt="${DOMPurify.sanitize(
        name
      )}" loading="lazy"/>`;
      messageDiv.appendChild(imgContainer);
    } else if (ALLOWED_MIME_PATTERNS.image.test(type)) {
      const imgContainer = document.createElement("div");
      imgContainer.className = "message-image-container";

      let imageUrlToUse = data_base64;
      if (type === "image/svg+xml") {
        try {
          const dirtySvgText = decodeURIComponent(
            atob(data_base64.split(",")[1] || "")
          );
          const cleanSvgText = DOMPurify.sanitize(dirtySvgText, {
            USE_PROFILES: { svg: true },
          });
          imageUrlToUse =
            "data:image/svg+xml;base64," +
            btoa(unescape(encodeURIComponent(cleanSvgText)));
        } catch (e) {
          console.error("Image Error");
        }
      }

      imgContainer.addEventListener("click", () =>
        openImagePreview(imageUrlToUse)
      );
      imgContainer.style.cursor = "pointer";
      createImageWithLoader(imageUrlToUse, imgContainer, true);
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
  if (isSentByMe || wasScrolledToBottom) {
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }
};

function blockUser(fullUserId) {
  if (!fullUserId) return;
  const peerId = fullUserId
    .replace(/[#\s]+/g, "-")
    .replace(/[^a-zA-Z0-9-]/g, "")
    .replace(/-+/g, "-")
    .replace(/^-+|-+$/g, "");

  if (peerId && !blockedUsers.has(peerId)) {
    blockedUsers.add(peerId);
    const displayName = fullUserId.split("#")[0];
    displaySystemNotification(
      `'${truncateText(
        displayName,
        20
      )}' engellendi. Bu kullanıcıdan gelen P2P istekleri artık otomatik olarak reddedilecek.`,
      "info"
    );
  }
}

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
    { cmd: "t.help", alias: " - ", desc: "Yardım menüsünü gösterir." },
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
      alias: "'t.emg' veya 't.e'",
      desc: "İki emojiyi birleştirir.",
    },
    {
      cmd: "t.imagecreate <prompt>",
      alias: "t.imgcrt",
      desc: "Yapay zeka ile resim oluşturur.",
    },
    { cmd: "t.ai <prompt>", alias: " - ", desc: "Yapay zekaya soru sorar." },
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
  const baseUrl =
    "https://tinday.xmeroriginals.com/news/twinday/tindaynews.txt";
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

imagePreviewOverlay.addEventListener("click", (e) => {
  if (e.target === imagePreviewOverlay) {
    closeImagePreview();
  }
});

imagePreviewClose.addEventListener("click", (e) => {
  closeImagePreview();
});

document.addEventListener("keydown", (e) => {
  const isInputFocused = document.activeElement === messageInput;
  const isModalVisible = dynamicModal.classList.contains("show");

  if (isModalVisible) return;

  if (e.key === "Escape" && imagePreviewOverlay.classList.contains("visible")) {
    closeImagePreview();
  }
  const settingsMenuBack = document.getElementById("settings-menu-back");
  if (
    e.key === "Escape" &&
    settingsMenuBack &&
    settingsMenuBack.classList.contains("visible")
  ) {
    closeSettingsPopup();
  }

  const roomHistoryMenu = document.getElementById("room-history-menu-back");
  if (
    e.key === "Escape" &&
    roomHistoryMenu &&
    roomHistoryMenu.classList.contains("visible")
  ) {
    closeRoomHistoryPopup();
  }

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

  if (
    document.activeElement === messageInput ||
    e.ctrlKey ||
    e.metaKey ||
    e.altKey
  )
    return;
  if (/^[a-z]$/i.test(e.key)) {
    if (gifPanel.classList.contains("active")) {
      gifSearchInput.focus();
    } else {
      messageInput.focus();
    }
  }
});

document.getElementById("openRoomHistory").addEventListener("click", () => {
  openRoomHistoryPopup();
  actionsPopup.classList.remove("visible");
  addButton.classList.remove("active");
  favoritesPanel.classList.remove("active");
  inboxPanel.classList.remove("active");
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
    title: "Dikkat",
    message: `<code id="fileToDownload">${safeFileName}</code><br/>Tehlikeli olabilecek indirme, bu dosyayı indirmek istediğinizden emin misiniz?`,
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
  if (menuJustOpened) {
    const menu = document.getElementById("context-menu");
    menu.style.display = "none";
  }
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
  } else {
    hideModal();
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
    sendGiftButton.style.display = isBirthdayToday ? "block" : "none";
  }
  const offset = 10;
  menu.style.display = "flex";
  menu.style.flexDirection = "row";
  menu.style.visibility = "hidden";
  requestAnimationFrame(() => {
    const buttons = Array.from(menu.querySelectorAll("button"));
    const totalButtonWidth = buttons.reduce(
      (sum, btn) => sum + btn.offsetWidth,
      0
    );
    const totalGaps = (buttons.length - 1) * 3;
    const estimatedMenuWidth = totalButtonWidth + totalGaps;
    const viewportWidth = window.innerWidth;
    if (x + offset + estimatedMenuWidth > viewportWidth) {
      menu.style.flexDirection = "column";
    } else {
      menu.style.flexDirection = "row";
    }
    const menuWidth = menu.offsetWidth;
    const menuHeight = menu.offsetHeight;
    const viewportHeight = window.innerHeight;
    let posX = x + offset;
    let posY = y + offset;
    if (posX + menuWidth > viewportWidth) {
      posX = x - menuWidth - offset;
    }
    if (posY + menuHeight > viewportHeight) {
      posY = y - menuHeight - offset;
    }
    posX = Math.max(0, Math.min(posX, viewportWidth - menuWidth));
    posY = Math.max(0, Math.min(posY, viewportHeight - menuHeight));
    menu.style.left = `${posX}px`;
    menu.style.top = `${posY}px`;
    menu.style.visibility = "visible";
    menu.style.animation = "none";
    void menu.offsetWidth;
    menu.style.animation = "fadeInScale 150ms ease-out";
  });
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
      isCleaningUp = false;
    }
  }, 600);
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

      const sanitizedTextData = sanitizeMessageObject(data);
      sanitizedTextData.senderId = senderPeerId;
      inboxRequests.set(sanitizedTextData.transferId, sanitizedTextData);
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

      const sanitizedFileData = sanitizeMessageObject(data);
      incomingFileTransfers.set(sanitizedFileData.transferId, {
        fileInfo: sanitizedFileData.fileInfo,
        chunks: new Array(sanitizedFileData.fileInfo.totalChunks),
        receivedChunks: 0,
        senderId: senderPeerId,
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
  });

  p.on("error", (err) => {
    console.error("PeerJS Error", err.type);
    if (err.type === "peer-unavailable" && (isCallActive || isCleaningUp)) {
      displaySystemNotification(
        "Kullanıcı bulunamadı, çevrimdışı veya P2P'e kapalı.",
        "error"
      );
    }
    hangupLogic(false);
  });

  p.on("disconnected", handlePeerDisconnect);

  p.on("call", (incomingCall) => {
    if (blockedUsers.has(incomingCall.peer)) {
      console.log(
        `Engellenen kullanıcıdan gelen arama reddedildi: ${incomingCall.peer}`
      );
      incomingCall.close();
      return;
    }

    if (currentCall) {
      currentCall.close();
    }
    currentCall = incomingCall;
  });

  p.on("connection", (conn) => {
    if (blockedUsers.has(conn.peer)) {
      console.log(
        `Engellenen kullanıcıdan gelen bağlantı reddedildi: ${conn.peer}`
      );
      conn.on("open", () => {
        conn.close();
      });
      return;
    }
    if (conn.label === "call-control") {
      if (isCallActive || isCleaningUp || !areCallsEnabled) {
        conn.on("open", () => {
          conn.send({ type: "call-rejected", reason: "busy" });
          setTimeout(() => conn.close(), 250);
        });
        return;
      }

      isCallActive = true;
      callControlConnection = conn;

      conn.on("data", (data) => {
        if (!isCallActive) return;
        if (data.type === "call-request") {
          const callerDisplayName = data.from || "Bilinmeyen";
          showCallPanel(callerDisplayName, false);
        } else if (data.type === "hangup") {
          hangupLogic(false);
          _LOGIC_;
        }
      });

      conn.on("close", () => hangupLogic(false));
      conn.on("error", () => hangupLogic(false));
    } else {
      setupDataConnectionEvents(conn);
    }
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
  if (!isCallActive && !isCleaningUp) {
    return;
  }

  isCleaningUp = true;
  isCallActive = false;

  if (sendHangupSignal && callControlConnection && callControlConnection.open) {
    try {
      callControlConnection.send({ type: "hangup" });
    } catch (e) {
      console.error("Hangup Error ", e);
    }
  }

  if (localStream) {
    localStream.getTracks().forEach((track) => track.stop());
    localStream = null;
  }
  remoteAudioContainer.innerHTML = "";

  if (currentCall) {
    currentCall.close();
    currentCall.off("close");
    currentCall.off("stream");
    currentCall.off("error");
  }
  if (callControlConnection) {
    callControlConnection.close();
    callControlConnection.off("data");
    callControlConnection.off("open");
    callControlConnection.off("close");
    callControlConnection.off("error");
  }

  currentCall = null;
  callControlConnection = null;

  hideCallPanel();
}

async function initiateCall(targetRawId) {
  if (isCallActive || isCleaningUp) {
    displaySystemNotification(
      "Lütfen mevcut görüşmenin bitmesini veya sonlanmasını bekleyin.",
      "info"
    );
    return;
  }
  const canProceed = await checkPublicIpAndWarn();
  if (!canProceed) {
    displaySystemNotification(
      "Arama işlemi kullanıcı tarafından iptal edildi.",
      "info"
    );
    return;
  }
  if (!peer || peer.disconnected) {
    displaySystemNotification(
      "P2P bağlantısı aktif değil. Aramalar kapalı olabilir.",
      "error"
    );
    return;
  }
  if (targetRawId === myName) {
    displaySystemNotification("Kendinizi arayamazsınız.", "info");
    return;
  }

  isCallActive = true;

  const targetPeerId = targetRawId
    .replace(/[#\s]+/g, "-")
    .replace(/[^a-zA-Z0-9-]/g, "")
    .replace(/-+/g, "-")
    .replace(/^-+|-+$/g, "");

  const conn = peer.connect(targetPeerId, {
    label: "call-control",
    reliable: true,
  });
  callControlConnection = conn;

  conn.on("open", () => {
    if (!isCallActive) return;
    conn.send({ type: "call-request", from: myName });
    showCallPanel(targetRawId, true);
  });

  conn.on("data", async (data) => {
    if (!isCallActive) return;
    if (data.type === "call-accepted") {
      try {
        localStream = await navigator.mediaDevices.getUserMedia({
          video: false,
          audio: true,
        });
        if (!isCallActive) {
          localStream.getTracks().forEach((track) => track.stop());
          return;
        }
        const call = peer.call(targetPeerId, localStream);
        setupCallEvents(call);
      } catch (err) {
        displaySystemNotification(
          "Mikrofona erişilemiyor. Lütfen tarayıcı izinlerini kontrol edin.",
          "error"
        );
        hangupLogic(true);
      }
    } else if (data.type === "call-rejected") {
      const reasonText =
        data.reason === "busy" ? "Meşgul." : "Aramayı reddetti.";
      callerNameDiv.textContent = `${targetRawId.split("#")[0]} ${reasonText}`;
      await playSound(callEndSound);
      setTimeout(() => hangupLogic(false), 2000);
    } else if (data.type === "hangup") {
      hangupLogic(false);
    }
  });

  conn.on("close", () => hangupLogic(false));
  conn.on("error", (err) => {
    displaySystemNotification(
      "Arama sırasında bir bağlantı hatası oluştu.",
      "error"
    );
    hangupLogic(false);
  });
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
  positionPanels();
  e.stopPropagation();
  actionsPopup.classList.toggle("visible");
  addButton.classList.toggle("active");
  favoritesPanel.classList.remove("active");
  inboxPanel.classList.remove("active");
  gifPanel.classList.remove("active");
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
  location.hash = "menu-favorites";
  renderFavoritesPanel();
  favoritesPanel.classList.add("active");
  actionsPopup.classList.remove("visible");
  addButton.classList.remove("active");
  gifPanel.classList.remove("active");
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

document
  .getElementById("image-preview-favorite")
  .addEventListener("click", async (e) => {
    const favoriteBtn = e.currentTarget;
    const url = favoriteBtn.dataset.imageUrl;
    if (!url) return;
    await toggleFavorite(url);
    const favoriteIcon = favoriteBtn.querySelector("i");
    const isNowFavorite = await FavoritesDB.isFavorite(url);
    favoriteIcon.className = isNowFavorite
      ? "fa-solid fa-star"
      : "fa-regular fa-star";
    favoriteBtn.classList.toggle("is-favorite", isNowFavorite);
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
  const menuVisible = getComputedStyle(menu).display !== "none";
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

  if (!gifPanel.contains(e.target) && !openGifBtn.contains(e.target)) {
    gifPanel.classList.remove("active");
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

  if (menuVisible && !e.target.closest("#context-menu") && !menuJustOpened) {
    menu.style.display = "none";
    menu.style.visibility = "hidden";
    targetUserIdForCall = null;
    contextMenuTargetMessageId = null;
  }

  if (menuJustOpened) {
    menuJustOpened = false;
  }

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
      message: `"<code>${safeUrl}</code>"<br/>Bu site yeni bir sekmede açılacak. Emin misiniz?`,
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

window.addEventListener("resize", function () {
  checkScreenSize();
  positionPanels();
});

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
  if (!callControlConnection || acceptCallBtn.disabled) return;
  const canProceed = await checkPublicIpAndWarn();
  if (!canProceed) {
    displaySystemNotification(
      "Arama kabul işlemi kullanıcı tarafından iptal edildi.",
      "info"
    );
    hangupLogic(true);
    return;
  }
  acceptCallBtn.disabled = true;
  acceptCallBtn.style.transition =
    "opacity 0.3s, width 0.3s, padding 0.3s, margin 0.3s";
  acceptCallBtn.style.opacity = "0";
  acceptCallBtn.style.width = "0";
  acceptCallBtn.style.padding = "0";
  acceptCallBtn.style.marginRight = "-10px";
  acceptCallBtn.style.pointerEvents = "none";

  try {
    callControlConnection.send({ type: "call-accepted" });
    localStream = await navigator.mediaDevices.getUserMedia({
      video: false,
      audio: true,
    });

    const waitForCall = new Promise((resolve, reject) => {
      if (currentCall) return resolve(currentCall);
      const timeout = setTimeout(
        () => reject(new Error("Arama bağlantısı zaman aşımına uğradı.")),
        5000
      );
      peer.once("call", (call) => {
        clearTimeout(timeout);
        if (call.peer === callControlConnection.peer) {
          resolve(call);
        } else {
          call.close();
        }
      });
    });

    const callToAnswer = await waitForCall;

    if (!isCallActive) {
      localStream.getTracks().forEach((track) => track.stop());
      return;
    }

    callToAnswer.answer(localStream);
    setupCallEvents(callToAnswer);
  } catch (err) {
    displaySystemNotification(
      "Mikrofona erişilemiyor veya arama bağlantısı kurulamadı.",
      "error"
    );
    hangupLogic(true);
  }
});

declineCallBtn.addEventListener("click", () => {
  const isRejectingIncomingCall =
    !callPanel.classList.contains("in-call") && callControlConnection;
  if (isRejectingIncomingCall) {
    playSound(callEndSound);
    const callerId = callControlConnection.peer;
    if (!spamTracker[callerId]) {
      spamTracker[callerId] = { count: 0 };
    }
    spamTracker[callerId].count++;
    if (spamTracker[callerId].count >= REJECTION_SPAM_THRESHOLD) {
      showSpamProtectionModal();
      spamTracker[callerId].count = 0;
    }
  }

  hangupLogic(true);
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

  addRoomToHistory(newRoomName, displayRoomName);

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
      let senderDisplayName;
      if (req.senderId.includes("#")) {
        senderDisplayName = req.senderId.split("#")[0];
      } else {
        const parts = req.senderId.split("-");
        senderDisplayName = parts.slice(0, -1).join("-");
      }
      const senderName = DOMPurify.sanitize(senderDisplayName);

      let requestInfoHTML = "";
      const agePrefix = req.age && req.age > 0 ? `${req.age} • ` : "";

      if (req.file) {
        const fileName = DOMPurify.sanitize(req.file.name);
        requestInfoHTML = `
                  <div class="inbox-item-info">
                    <strong class="inbox-item-sender">${agePrefix}${truncateText(
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
                    <strong class="inbox-item-sender">${agePrefix}${truncateText(
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

async function acceptInboxItem(transferId) {
  const request = inboxRequests.get(transferId);
  if (!request) return;
  const canProceed = await checkPublicIpAndWarn();
  if (!canProceed) {
    displaySystemNotification(
      "Gelen kutusu öğesi kullanıcı tarafından reddedildi.",
      "info"
    );
    declineFileTransfer(transferId);
    return;
  }
  const sanitizedSenderId = DOMPurify.sanitize(request.senderId, {
    USE_PROFILES: { html: false },
  });
  const sanitizedContent = request.content
    ? DOMPurify.sanitize(request.content, { USE_PROFILES: { html: false } })
    : "";
  let validatedAge = null;
  if (request.hasOwnProperty("age")) {
    const age = request.age;
    if (
      typeof age === "number" &&
      Number.isInteger(age) &&
      age >= 0 &&
      age <= 150
    ) {
      validatedAge = age;
    }
  }
  let sanitizedFile = null;
  if (request.file) {
    sanitizedFile = {
      ...request.file,
      name: DOMPurify.sanitize(request.file.name, {
        USE_PROFILES: { html: false },
      }),
    };
  }
  let displayName;
  if (sanitizedSenderId.includes("#")) {
    displayName = sanitizedSenderId.split("#")[0];
  } else {
    const parts = sanitizedSenderId.split("-");
    displayName = parts.slice(0, -1).join("-");
  }

  const finalSenderId = `${displayName}#p2p-${Math.random()
    .toString(36)
    .substring(7)}`;
  const messagePayload = {
    sender: finalSenderId,
    content: sanitizedContent,
    file: sanitizedFile,
    timestamp: new Date().toISOString(),
    age: validatedAge,
  };

  displayMessage(messagePayload, false, false, true);
  inboxRequests.delete(transferId);
  renderInboxPanel();
}

function declineFileTransfer(transferId) {
  inboxRequests.delete(transferId);
  renderInboxPanel();
}

inboxButton.addEventListener("click", (e) => {
  positionPanels();
  location.hash = "menu-inbox";
  e.stopPropagation();
  const isActive = inboxPanel.classList.toggle("active");
  if (isActive) {
    renderInboxPanel();
    updateInboxUI(false);
  }
  favoritesPanel.classList.remove("active");
  actionsPopup.classList.remove("visible");
  addButton.classList.remove("active");
  gifPanel.classList.remove("active");
});

gifPanel.addEventListener("transitionend", () => {
  if (!gifPanel.classList.contains("active")) {
    gifContent.innerHTML = "";
    gifSearchInput.value = "";
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
  loadProfanityFilter();

  if (localStorage.getItem(ANTI_SWEAR_KEY) === null) {
    localStorage.setItem(ANTI_SWEAR_KEY, "true");
  }

  if (localStorage.getItem(CHAT_TIMEOUT_TIME_KEY) === null) {
    localStorage.setItem(CHAT_TIMEOUT_TIME_KEY, "0");
  }

  initializeFeatureStates();
  checkScreenSize();
  getDiscordLink();

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

  const userData = loadUserData();
  if (userData) {
    previousUserDiv.style.display = "block";
  }

  const isAutoLoginEnabled =
    localStorage.getItem(AUTOLOGIN_ENABLED_KEY) === "true";
  globalThis.autoLoginCheck = isAutoLoginEnabled;

  if (isAutoLoginEnabled && userData) {
    continueWithPreviousLink.style.visibility = "hidden";
    populateFormWithPreviousData();
    connectBtn.textContent = "Otomatik bağlanılıyor...";
    setTimeout(() => {
      connectBtn.click();
    }, 200);
  } else {
    checkFormValidity();
  }

  if (MESSAGE_SLOWER_TIMER === 0) {
    displaySystemNotification("Komutlar için 't.help' yazabilirsiniz.");
  } else {
    displaySystemNotification(
      "Komutlar için 't.help' yazabilirsiniz, Sohbet Yavaşlatma Açık."
    );
  }
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

async function getDiscordLink() {
  const dcCommunity = await fetch(
    `https://tinday.xmeroriginals.com/news/dc-community.txt`,
    { cache: "no-store" }
  );
  if (!dcCommunity.ok) {
    return;
  }
  discordCommunity = (await dcCommunity.text()).trim();
}

function createCustomAudioPlayer(audioSrc) {
  const playerContainer = document.createElement("div");
  playerContainer.className = "custom-audio-player";
  const audioElement = document.createElement("audio");
  audioElement.src = audioSrc;
  audioElement.preload = "metadata";
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

  if (typeof audioSrc === "string" && audioSrc.includes("jukehost.co.uk")) {
    const sourceInfo = document.createElement("div");
    sourceInfo.className = "audio-jukehost-lg";
    sourceInfo.innerText = "jukehost.co.uk";
    timeInfo.append(currentTimeEl, sourceInfo, durationEl);
  } else {
    timeInfo.append(currentTimeEl, durationEl);
  }

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
    if (!isNaN(audioElement.duration)) {
      slider.value = audioElement.currentTime;
      slider.style.setProperty(
        "--seek-before-width",
        `${(slider.value / slider.max) * 100}%`
      );
    }
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
    const userAge = calculateAge(birthdayInput.value);
    const payload = {
      sender: myName,
      content: `Doğum günün kutlu olsun ${targetUsername}! 🎁`,
      timestamp: new Date().toISOString(),
      id: "msg-" + Date.now(),
      type: "birthday_wish",
      age: userAge,
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
  if (birthdayCheckInterval) clearInterval(birthdayCheckInterval);
  const now = new Date();
  const birthDateObj = new Date(userBirthdate + "T00:00:00");
  const birthMonth = birthDateObj.getMonth();
  const birthDay = birthDateObj.getDate();
  const birthdayThisYear = new Date(now.getFullYear(), birthMonth, birthDay);
  const birthdayEndThisYear = new Date(
    birthdayThisYear.getTime() + 24 * 60 * 60 * 1000
  );
  isBirthdayToday = now >= birthdayThisYear && now < birthdayEndThisYear;

  if (isBirthdayToday) {
    triggerSameDayCelebration(roomName, userBirthdate);
    return;
  }

  let nextBirthday;
  if (now < birthdayThisYear) {
    nextBirthday = birthdayThisYear;
  } else {
    nextBirthday = new Date(now.getFullYear() + 1, birthMonth, birthDay);
  }

  const timeUntilNextBirthday = nextBirthday.getTime() - now.getTime();

  if (
    timeUntilNextBirthday > 0 &&
    timeUntilNextBirthday <= 24 * 60 * 60 * 1000
  ) {
    scheduleUpcomingBirthdayCheck(nextBirthday, userBirthdate);
    return;
  }

  const timeSinceBirthday = now.getTime() - birthdayThisYear.getTime();
  const wasBirthdayRecently =
    timeSinceBirthday > 0 && timeSinceBirthday < 90 * 24 * 60 * 60 * 1000;

  if (wasBirthdayRecently) {
    triggerOneDayLateCelebration(roomName, userBirthdate);
  }
}

function scheduleUpcomingBirthdayCheck(targetBirthdayDate, userBirthdate) {
  if (birthdayCheckInterval) clearInterval(birthdayCheckInterval);

  birthdayCheckInterval = setInterval(() => {
    const now = new Date();
    const remainingMs = targetBirthdayDate.getTime() - now.getTime();
    if (remainingMs <= 30000 && remainingMs > 0) {
      clearInterval(birthdayCheckInterval);
      startDynamicBirthdayCountdown(remainingMs, userBirthdate);
    } else if (remainingMs <= 0) {
      clearInterval(birthdayCheckInterval);
      triggerBirthdayCelebration(userBirthdate);
    }
  }, 1000);
}

function startDynamicBirthdayCountdown(remainingMs, userBirthdate) {
  let messageSystemSenderName = "TinDay Official Team";
  let messageSystemInfo = "Bu mesaj size ve doğum günü ikizlerinize özel...";
  displaySpecialSystemMessage(
    "Doğum gününüze çok az kaldı, tüm doğum günü ikizlerinizle kutlamaya hazır mısınız? Geri sayım başlıyor!",
    messageSystemSenderName,
    messageSystemInfo
  );

  messageInput.placeholder = "Doğum günü kutlaması başlıyor...";

  const visualCountdownMs = Math.min(remainingMs, 5000);
  const initialDelayMs = remainingMs - visualCountdownMs;

  setTimeout(() => {
    birthdayCountdownOverlay.classList.add("visible");
    let count = Math.ceil(visualCountdownMs / 1000);
    countdownNumberEl.textContent = count;

    const visualInterval = setInterval(() => {
      count--;
      if (count > 0) {
        countdownNumberEl.textContent = count;
      } else {
        clearInterval(visualInterval);
        triggerBirthdayCelebration(userBirthdate);
      }
    }, 1000);
  }, initialDelayMs);
}

function triggerSameDayCelebration(roomName, userBirthdate) {
  const celebratedKey = `celebrated_${roomName}_${new Date().getFullYear()}`;
  if (localStorage.getItem(celebratedKey)) {
    return;
  }

  const myUsername = myName.split("#")[0];
  const newAge = calculateAge(userBirthdate);
  const now = new Date();
  const midnight = new Date();
  midnight.setHours(0, 0, 0, 0);
  const threeHoursInMs = 3 * 60 * 60 * 1000;
  const timeSinceMidnight = now.getTime() - midnight.getTime();
  let message = "";
  const randomGif =
    RANDOM_BIRTHDAY_GIFS[
      Math.floor(Math.random() * RANDOM_BIRTHDAY_GIFS.length)
    ];

  if (timeSinceMidnight <= threeHoursInMs) {
    message = `Geri sayımı kaçırdın ama olsun, ${newAge}. yaşın kutlu olsun ${myUsername}! ❤️🥳🎉 ${randomGif}`;
  } else {
    message = `${newAge}. yaşın kutlu olsun ${myUsername}! Nice senelere! ❤️🥳🎉 ${randomGif}`;
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

function triggerOneDayLateCelebration(roomName, userBirthdate) {
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const celebratedKey = `celebrated_${roomName}_${yesterday.getFullYear()}`;
  if (localStorage.getItem(celebratedKey)) {
    return;
  }
  const myUsername = myName.split("#")[0];
  const newAge = calculateAge(userBirthdate);
  const randomGif =
    RANDOM_BIRTHDAY_GIFS[
      Math.floor(Math.random() * RANDOM_BIRTHDAY_GIFS.length)
    ];
  const messageText = `Geçmiş ${newAge}. yaşın kutlu olsun ${myUsername}! Umarız harika bir gün geçirmişsindir... 🥳🎉 ${randomGif}`;

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
  let messageSystemSenderName = "TinDay Official Team";
  let messageSystemInfo = "Bu mesaj size ve doğum günü ikizlerinize özel...";
  displaySpecialSystemMessage(
    "Doğum gününüze 30 Saniye kaldı, tüm doğum günü ikizlerinizle kutlamaya hazır mısınız? Geri sayım başlıyor!",
    messageSystemSenderName,
    messageSystemInfo
  );

  let preCount = 25;

  const preInterval = setInterval(() => {
    displaySystemNotification("Doğum gününüze " + preCount + " saniye kaldı!");

    preCount--;

    if (preCount <= 0) {
      clearInterval(preInterval);
      birthdayCountdownOverlay.classList.add("visible");
      let count = 5;
      countdownNumberEl.textContent = count;
      messageInput.disabled = true;

      const interval = setInterval(() => {
        messageInput.placeholder = "Doğum günü kutlaması başlıyor...";
        count--;
        if (count > 0) {
          countdownNumberEl.textContent = count;
        } else {
          clearInterval(interval);
          triggerBirthdayCelebration();
        }
      }, 1000);
    }
  }, 1000);
}

function triggerBirthdayCelebration(userBirthdate) {
  birthdayCountdownOverlay.classList.remove("visible");
  messageInput.placeholder = "Bir mesaj yaz... (Komutlar için t.help)";
  messageInput.disabled = false;

  isBirthdayToday = true;
  startConfetti();
  birthdaySound.play().catch((e) => console.error("Birthday Sound Error"));

  const myUsername = myName.split("#")[0];
  const newAge = calculateAge(userBirthdate);
  const ageText = newAge > 0 ? `${newAge}. Yaşınız` : "Doğum Gününüz";

  const randomGif =
    RANDOM_BIRTHDAY_GIFS[
      Math.floor(Math.random() * RANDOM_BIRTHDAY_GIFS.length)
    ];
  const celebrationMessage = {
    sender: "Official TinDay Team",
    content: `🎂 ${ageText} kutlu olsun ${myUsername}! Nice mutlu senelere!🥳 ${randomGif}`,
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
    nowLocal.getTime() <= midnightLocal.getTime() + 3 * 60 * 60 * 1000;

  let message = "";
  const randomGif =
    RANDOM_BIRTHDAY_GIFS[
      Math.floor(Math.random() * RANDOM_BIRTHDAY_GIFS.length)
    ];
  if (missedTheCountdown) {
    message = `Doğum günün kutlu olsun ${myUsername}! ❤️🥳🎉 ${randomGif}`;
  } else {
    message = `Geri sayımı kaçırdın ama olsun, Doğum günün kutlu olsun ${myUsername}! ❤️🥳🎉 ${randomGif}`;
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

function sanitizeMessageObject(msg) {
  const sanitize = (str) =>
    str ? DOMPurify.sanitize(str, { USE_PROFILES: { html: false } }) : str;

  if (msg.sender) msg.sender = sanitize(msg.sender);
  if (msg.content) msg.content = sanitize(msg.content);

  if (msg.senderId) msg.senderId = sanitize(msg.senderId);

  if (msg.file && msg.file.name) {
    msg.file.name = sanitize(msg.file.name);
  }

  if (msg.fileInfo && msg.fileInfo.name) {
    msg.fileInfo.name = sanitize(msg.fileInfo.name);
  }

  if (msg.reply) {
    if (msg.reply.originalSender)
      msg.reply.originalSender = sanitize(msg.reply.originalSender);
    if (msg.reply.originalContent)
      msg.reply.originalContent = sanitize(msg.reply.originalContent);
  }

  return msg;
}

function processPendingMessages() {
  if (pendingMessages.length === 0) return;

  displaySystemNotification(
    `Beklemedeki ${pendingMessages.length} mesaj gönderiliyor...`,
    "info"
  );

  let sentCount = 0;
  const interval = setInterval(() => {
    if (pendingMessages.length === 0) {
      clearInterval(interval);
      return;
    }
    const messagePayload = pendingMessages.shift();
    if (socket && socket.readyState === WebSocket.OPEN) {
      socket.send(JSON.stringify(messagePayload));
      sentCount++;
      displaySystemNotification(`Mesaj ${sentCount} gönderildi...`);
    } else {
      pendingMessages.unshift(messagePayload);
      clearInterval(interval);
    }
  }, 1000);
}

function handleSocketClose() {
  if (isReconnecting || isSwitchingRooms) {
    return;
  }

  isReconnecting = true;
  reconnectAttempts = 0;
  clearTimeout(reconnectTimer);

  displaySystemNotification(
    "Bağlantı koptu, Yeniden bağlanmaya çalışılıyor...",
    "info"
  );

  scheduleReconnect();
}

function scheduleReconnect() {
  if (document.hidden) {
    document.addEventListener(
      "visibilitychange",
      () => {
        if (!document.hidden) {
          doReconnectAttempt();
        }
      },
      { once: true }
    );
  } else {
    doReconnectAttempt();
  }
}

function doReconnectAttempt() {
  if (reconnectAttempts >= maxReconnectAttempts) {
    displaySystemNotification(
      "Bağlantı kurulamadı, Lütfen sayfayı yenileyiniz.",
      "error"
    );
    isReconnecting = false;
    return;
  }

  const delay = [3000, 5000, 7000][reconnectAttempts];

  reconnectAttempts++;
  displaySystemNotification(
    `Yeniden bağlanılıyor... (${reconnectAttempts}/${maxReconnectAttempts})`,
    "info"
  );

  reconnectTimer = setTimeout(() => {
    socket = new WebSocket(CL_SERVER_IP);
    socket.onopen = () => {
      sendMessageToServer({
        cmd: "setid",
        val: myName,
        listener: "username_cfg",
      });
    };
    socket.onmessage = handleSocketMessage;
    socket.onclose = handleSocketClose;
  }, delay);
}

function updateSystemGroupUI(groupElement) {
  const { groupData } = groupElement;
  const contentEl = groupElement.querySelector(".system-group-content");
  const counterEl = groupElement.querySelector(".system-group-counter");
  if (!groupData || !contentEl || !counterEl) return;
  const messageCount = groupData.messages.length;
  const isGrouped = messageCount > 1;
  contentEl.textContent = groupData.messages[groupData.currentIndex];
  groupElement.classList.toggle("is-grouped", isGrouped);

  if (isGrouped) {
    counterEl.textContent = `${groupData.currentIndex + 1}/${messageCount}`;
  }
}

async function loadProfanityFilter() {
  try {
    const response = await fetch(
      `https://tinday.xmeroriginals.com/filter/profanityFilter/profanity.txt`
    );
    if (!response.ok) {
      return;
    }
    const text = await response.text();

    const escapeRegExp = (string) => {
      return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    };
    const words = text
      .split("\n")
      .map((word) => word.trim())
      .filter((word) => word.length > 1);

    if (words.length === 0) {
      console.warn("Küfür filtresi dosyası okunamadı.");
      return;
    }

    const pattern = words.map(escapeRegExp).join("|");
    profanityRegex = new RegExp(`\\b(${pattern})\\b`, "i");
  } catch (error) {
    console.error("Swear Filter Error");
  }
}

function containsProfanity(text) {
  if (!profanityRegex || !text) {
    return false;
  }
  return profanityRegex.test(text);
}

async function openImagePreview(imageUrl) {
  resetImageTransform();
  try {
    messageInput.disabled = true;
    if (imageUrl.startsWith("data:image/svg+xml")) {
      const dirtySvgText = decodeURIComponent(
        atob(imageUrl.split(",")[1] || "")
      );
      const cleanSvgText = DOMPurify.sanitize(dirtySvgText, {
        USE_PROFILES: { svg: true },
      });
      const safeDataUrl =
        "data:image/svg+xml;base64," +
        btoa(unescape(encodeURIComponent(cleanSvgText)));
      imagePreviewContent.src = safeDataUrl;
    } else {
      imagePreviewContent.src = imageUrl;
    }
    const favoriteBtn = document.getElementById("image-preview-favorite");
    if (imagePreviewContent.src.startsWith("data:")) {
      favoriteBtn.style.display = "none";
    } else {
      favoriteBtn.style.display = "flex";
      const favoriteIcon = favoriteBtn.querySelector("i");
      favoriteBtn.dataset.imageUrl = imageUrl;
      const isFav = await FavoritesDB.isFavorite(imageUrl);
      favoriteIcon.className = isFav
        ? "fa-solid fa-star"
        : "fa-regular fa-star";
      favoriteBtn.classList.toggle("is-favorite", isFav);
    }
    imagePreviewOverlay.classList.add("visible");
  } catch (e) {
    console.error("Resim görüntülenirken bir hata oluştu:", e);
    displaySystemNotification(
      "Resim görüntülenirken bir hata oluştu.",
      "error"
    );
    messageInput.disabled = false;
  }
}

function closeImagePreview() {
  imagePreviewContainer.classList.remove("visible");
  setTimeout(() => {
    imagePreviewImage.src = "";
    messageInput.disabled = false;
    resetImageTransform();
  }, 300);
}

function resetImageTransform() {
  scale = 1;
  transformX = 0;
  transformY = 0;
  isPanning = false;
  imagePreviewImage.dataset.tx = "0";
  imagePreviewImage.dataset.ty = "0";
  imagePreviewImage.style.transition = "transform 0.3s ease";
  imagePreviewImage.style.transform = `translate(${transformX}px, ${transformY}px) scale(${scale})`;
  imagePreviewContainer.classList.remove("zoomed", "panning");
}

function applyTransform() {
  if (rafPending) return;
  rafPending = true;

  requestAnimationFrame(() => {
    imagePreviewImage.style.transform = `translate(${transformX}px, ${transformY}px) scale(${scale})`;
    rafPending = false;
  });
}

function getDistance(touches) {
  const [touch1, touch2] = touches;
  return Math.hypot(touch1.pageX - touch2.pageX, touch1.pageY - touch2.pageY);
}

function getMidpoint(touches) {
  const [touch1, touch2] = touches;
  return {
    x: (touch1.pageX + touch2.pageX) / 2,
    y: (touch1.pageY + touch2.pageY) / 2,
  };
}

imagePreviewImage.addEventListener("mousedown", (e) => {
  if (e.button !== 0) return;
  e.preventDefault();
  isDragging = true;
  startX = e.clientX;
  startY = e.clientY;
  imagePreviewImage.dataset.startX = transformX;
  imagePreviewImage.dataset.startY = transformY;
  imagePreviewImage.style.transition = "none";
});

window.addEventListener("mousemove", (e) => {
  if (!isDragging) return;

  const deltaX = Math.abs(e.clientX - startX);
  const deltaY = Math.abs(e.clientY - startY);

  if (
    !isPanning &&
    (deltaX > panStartThreshold || deltaY > panStartThreshold)
  ) {
    isPanning = true;
    imagePreviewContainer.classList.add("panning");
  }

  if (isPanning && scale > 1) {
    const startTx = parseFloat(imagePreviewImage.dataset.startX || "0");
    const startTy = parseFloat(imagePreviewImage.dataset.startY || "0");
    transformX = startTx + (e.clientX - startX);
    transformY = startTy + (e.clientY - startY);
    applyTransform();
  }
});

window.addEventListener("mouseup", (e) => {
  if (!isDragging || e.button !== 0) return;

  imagePreviewImage.style.transition = "transform 0.3s ease";

  if (isPanning) {
    imagePreviewImage.dataset.tx = transformX;
    imagePreviewImage.dataset.ty = transformY;
  } else {
    if (scale > 1) {
      resetImageTransform();
    } else {
      scale = 2;
      const rect = imagePreviewImage.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      const imgX = (mouseX / rect.width) * imagePreviewImage.offsetWidth;
      const imgY = (mouseY / rect.height) * imagePreviewImage.offsetHeight;
      transformX = -(imgX - imagePreviewImage.offsetWidth / 2);
      transformY = -(imgY - imagePreviewImage.offsetHeight / 2);
      applyTransform();
      imagePreviewImage.dataset.tx = transformX;
      imagePreviewImage.dataset.ty = transformY;
      imagePreviewContainer.classList.add("zoomed");
    }
  }

  isDragging = false;
  isPanning = false;
  imagePreviewContainer.classList.remove("panning");
});

imagePreviewContainer.addEventListener("wheel", (e) => {
  e.preventDefault();
  const delta = e.deltaY > 0 ? -0.2 : 0.2;
  const newScale = Math.max(minScale, Math.min(maxScale, scale + delta));
  if (newScale === scale) return;
  const rect = imagePreviewContainer.getBoundingClientRect();
  const mouseX = e.clientX - rect.left;
  const mouseY = e.clientY - rect.top;
  const newTransformX =
    transformX -
    (mouseX - rect.width / 2 - transformX) * (newScale / scale - 1);
  const newTransformY =
    transformY -
    (mouseY - rect.height / 2 - transformY) * (newScale / scale - 1);
  scale = newScale;
  transformX = newTransformX;
  transformY = newTransformY;
  applyTransform();
  imagePreviewImage.dataset.tx = transformX;
  imagePreviewImage.dataset.ty = transformY;
  imagePreviewContainer.classList.toggle("zoomed", scale > 1);
  if (scale === 1) {
    resetImageTransform();
  }
});

imagePreviewContainer.addEventListener(
  "touchstart",
  (e) => {
    if (!imagePreviewImage.contains(e.target) && e.target !== imagePreviewImage)
      return;

    touchStartTime = new Date().getTime();
    imagePreviewImage.style.transition = "none";

    if (e.touches.length === 1) {
      isDragging = true;
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
      imagePreviewImage.dataset.startX = transformX;
      imagePreviewImage.dataset.startY = transformY;
    } else if (e.touches.length === 2) {
      isDragging = false;
      isPanning = false;
      initialDistance = getDistance(e.touches);
    }
  },
  { passive: false }
);

imagePreviewContainer.addEventListener(
  "touchmove",
  (e) => {
    if (isDragging || initialDistance) {
      e.preventDefault();
    }

    if (e.touches.length === 1 && isDragging) {
      const deltaX = e.touches[0].clientX - startX;
      const deltaY = e.touches[0].clientY - startY;
      if (
        !isPanning &&
        (Math.abs(deltaX) > panStartThreshold ||
          Math.abs(deltaY) > panStartThreshold)
      ) {
        isPanning = true;
      }

      if (isPanning && scale > 1) {
        const startTx = parseFloat(imagePreviewImage.dataset.startX || "0");
        const startTy = parseFloat(imagePreviewImage.dataset.startY || "0");
        transformX = startTx + deltaX;
        transformY = startTy + deltaY;
        applyTransform();
      }
    } else if (e.touches.length === 2 && initialDistance) {
      const newDistance = getDistance(e.touches);
      const scaleMultiplier = newDistance / initialDistance;
      let newScale = scale * scaleMultiplier;
      newScale = Math.max(minScale, Math.min(maxScale, newScale));
      scale = newScale;
      applyTransform();
      initialDistance = newDistance;
    }
  },
  { passive: false }
);

imagePreviewContainer.addEventListener("touchend", (e) => {
  imagePreviewImage.style.transition = "transform 0.3s ease";
  if (isPanning) {
    imagePreviewImage.dataset.tx = transformX;
    imagePreviewImage.dataset.ty = transformY;
  }
  isDragging = false;
  isPanning = false;
  initialDistance = null;
  imagePreviewContainer.classList.remove("panning");
  if (scale < 1) {
    resetImageTransform();
  }
});

async function searchGifs(searchTerm) {
  if (!searchTerm) {
    gifContent.innerHTML = "";
    return;
  }
  gifContent.innerHTML =
    '<div class="favorites-empty-state"><span>Yükleniyor...</span></div>';

  try {
    const url = `https://g.tenor.com/v1/search?q=${encodeURIComponent(
      searchTerm
    )}&key=${TENOR_API_KEY}&limit=12&media_filter=minimal`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`API hatası: ${response.status}`);
    }
    const data = await response.json();
    renderGifResults(data.results);
  } catch (error) {
    console.error("GIF arama hatası:", error);
    gifContent.innerHTML =
      '<div class="favorites-empty-state"><span>GIF\'ler yüklenemedi.</span></div>';
  }
}

function renderGifResults(gifs) {
  gifContent.innerHTML = "";
  if (!gifs || gifs.length === 0) {
    gifContent.innerHTML =
      '<div class="favorites-empty-state"><span>Sonuç bulunamadı.</span></div>';
    return;
  }
  const grid = document.createElement("div");
  grid.className = "favorites-grid";
  const addedGifUrls = new Set();
  gifs.forEach((gifData) => {
    if (!gifData.media || gifData.media.length === 0) {
      return;
    }
    const mediaObject = gifData.media[0];
    const gifUrl = mediaObject.gif ? mediaObject.gif.url : null;
    if (!gifUrl) {
      return;
    }
    if (addedGifUrls.has(gifUrl)) {
      return;
    }
    const gifPreviewUrl = mediaObject.tinygif
      ? mediaObject.tinygif.url
      : gifUrl;
    const gifDiv = document.createElement("div");
    gifDiv.className = "favorite-item";
    gifDiv.innerHTML = `<img src="${gifPreviewUrl}" alt="${
      gifData.content_description || "GIF"
    }" loading="lazy">`;
    gifDiv.onclick = () => {
      let messageText = messageInput.value.trim();
      let content = "";

      if (messageText) {
        content = `${messageText} ${gifUrl}`;
      } else {
        content = gifUrl;
      }
      const userAge = calculateAge(birthdayInput.value);
      const payload = {
        sender: myName,
        content: content,
        timestamp: new Date().toISOString(),
        id: "msg-" + Date.now(),
        age: userAge,
      };
      sendMessageToServer({
        cmd: "gmsg",
        val: JSON.stringify(payload),
      });
      displayMessage(payload, true, false);

      messageInput.value = "";
      gifPanel.classList.remove("active");
    };
    grid.appendChild(gifDiv);
    addedGifUrls.add(gifUrl);
  });
  if (grid.children.length === 0) {
    gifContent.innerHTML =
      '<div class="favorites-empty-state"><span>Sonuç bulunamadı.</span></div>';
  } else {
    gifContent.appendChild(grid);
  }
}

openGifBtn.addEventListener("click", () => {
  location.hash = "menu-gif";
  gifPanel.classList.add("active");
  actionsPopup.classList.remove("visible");
  addButton.classList.remove("active");
  favoritesPanel.classList.remove("active");
  inboxPanel.classList.remove("active");
  displayTenorLogo();
  gifSearchInput.focus();
});

gifSearchInput.addEventListener("input", () => {
  clearTimeout(gifSearchTimeout);
  gifSearchTimeout = setTimeout(() => {
    const searchTerm = gifSearchInput.value.trim();
    if (searchTerm) {
      searchGifs(searchTerm);
    } else {
      displayTenorLogo();
    }
  }, 300);
});

gifSearchInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    clearTimeout(gifSearchTimeout);
    const searchTerm = gifSearchInput.value.trim();
    if (searchTerm) {
      searchGifs(searchTerm);
    }
  }
});

function displayTenorLogo() {
  gifContent.innerHTML = `
    <div class="gif-powered-by">
      ${POWERED_BY_TENOR_SVG}
    </div>
  `;
}

function positionPanels() {
  const inputContainer = document.querySelector(".input-container");
  const panels = document.querySelectorAll(
    "#favoritesPanel, #inbox-panel, #gifPanel"
  );
  if (inputContainer && panels.length > 0) {
    const inputContainerHeight = inputContainer.offsetHeight;
    const safeAreaInset =
      parseInt(
        getComputedStyle(document.documentElement).getPropertyValue(
          "--safe-area-inset-bottom"
        )
      ) || 0;
    panels.forEach((panel) => {
      panel.style.bottom = `${inputContainerHeight + safeAreaInset + 17}px`;
    });
  }
}

function initializeSettingsMenu() {
  if (document.getElementById("settings-menu-back")) return;
  const menuWrapper = document.createElement("div");
  menuWrapper.id = "settings-menu-back";
  menuWrapper.className = "settings-menu-back";
  menuWrapper.innerHTML = `
    <div class="settings-menu-content" id="settings-menu-content">
        <div class="settings-header">
            <h2>Ayarlar</h2>
            <button id="close-settings-btn" class="settings-close-btn" title="Kapat">&times;</button>
        </div>
        <div class="settings-body" id="settings-body">
            <!-- Ayar öğeleri buraya dinamik olarak eklenecek -->
        </div>
        <label id="settings-copyright">
        <span>© 2025 TinDay ✕ TwinDay | Managed by Xmer™</span><br>
        <span>Made with ❤️ and a little ☕</span>
        </label>
    </div>
  `;
  document.body.appendChild(menuWrapper);

  const closeBtn = document.getElementById("close-settings-btn");
  closeBtn.addEventListener("click", closeSettingsPopup);
  menuWrapper.addEventListener("click", (e) => {
    if (e.target.id === "settings-menu-back") {
      closeSettingsPopup();
    }
  });
}

function simulateCommand(command, shouldCloseMenu = false) {
  const originalValue = messageInput.value;
  messageInput.value = command;
  messageForm.dispatchEvent(
    new Event("submit", { bubbles: true, cancelable: true })
  );
  messageInput.value = originalValue;
  if (shouldCloseMenu) {
    setTimeout(closeSettingsPopup, 100);
  }
}

function openSettingsPopup() {
  initializeSettingsMenu();
  const settingsBody = document.getElementById("settings-body");
  settingsBody.innerHTML = "";
  const createToggleSetting = (label, key, command) => {
    const isEnabled = localStorage.getItem(key) !== "false";
    const item = document.createElement("div");
    item.className = "settings-item";
    item.innerHTML = `
        <label for="setting-${key}">${label}</label>
        <label class="switch">
            <input type="checkbox" id="setting-${key}" ${
      isEnabled ? "checked" : ""
    }>
            <span class="slider round"></span>
        </label>
    `;
    item.querySelector("input").addEventListener("change", () => {
      simulateCommand(command, false);
    });
    return item;
  };

  const createIconButtonGroupSetting = (buttons) => {
    const item = document.createElement("div");
    item.className = "settings-item vertical";
    item.innerHTML = `
    <div class="settings-icon-buttons-group">
      ${buttons
        .map(
          (btn) => `
        <button class="action-btn settings-icon-button" title="${
          btn.title || ""
        }" data-command="${btn.command}" data-should-close="${
            btn.shouldCloseMenu || false
          }">
          <i class="${btn.iconClass}"></i>
        </button>
      `
        )
        .join("")}
    </div>
  `;

    item.querySelectorAll(".settings-icon-button").forEach((buttonEl) => {
      buttonEl.addEventListener("click", () => {
        const command = buttonEl.dataset.command;
        const shouldClose = buttonEl.dataset.shouldClose === "true";
        simulateCommand(command, shouldClose);
      });
    });
    return item;
  };

  const createChatSlowerSetting = () => {
    const currentValue =
      Number(localStorage.getItem(CHAT_TIMEOUT_TIME_KEY)) || 0;
    const item = document.createElement("div");
    item.className = "settings-item vertical";
    item.innerHTML = `
        <label>Sohbet Yavaşlatma</label>
        <div class="setting-options-group">
            <button data-value="0" class="option-btn ${
              currentValue === 0 ? "active" : ""
            }">Kapalı</button>
            <button data-value="1" class="option-btn ${
              currentValue === 1 ? "active" : ""
            }">1 sn</button>
            <button data-value="2" class="option-btn ${
              currentValue === 2 ? "active" : ""
            }">2 sn</button>
            <button data-value="3" class="option-btn ${
              currentValue === 3 ? "active" : ""
            }">3 sn</button>
        </div>
    `;
    item.querySelectorAll(".option-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const value = btn.dataset.value;
        simulateCommand(`t.cslor ${value}`, true);
      });
    });
    return item;
  };

  settingsBody.appendChild(
    createIconButtonGroupSetting([
      {
        iconClass: "fa-solid fa-circle-half-stroke",
        title: "Tema",
        command: "t.theme",
        shouldCloseMenu: false,
      },
      {
        iconClass: "fa-solid fa-broom",
        title: "Sohbeti Temizle",
        command: "t.clear",
        shouldCloseMenu: true,
      },
      {
        iconClass: "fa-solid fa-circle-question",
        title: "Hakkımızda",
        command: "t.about",
        shouldCloseMenu: true,
      },
    ])
  );

  settingsBody.appendChild(
    createToggleSetting("P2P Bağlantısı", CALLS_ENABLED_KEY, "t.p2p")
  );
  settingsBody.appendChild(
    createToggleSetting(
      "Aramalar (P2P açık olmalı)",
      CALLS_FEATURE_ENABLED_KEY,
      "t.call"
    )
  );
  settingsBody.appendChild(
    createToggleSetting(
      "Gelen Kutusu (P2P açık olmalı)",
      INBOX_FEATURE_ENABLED_KEY,
      "t.inbox"
    )
  );
  const isAutoLoginEnabled =
    localStorage.getItem(AUTOLOGIN_ENABLED_KEY) === "true";
  const autoLoginItem = document.createElement("div");
  autoLoginItem.className = "settings-item";
  autoLoginItem.innerHTML = `
      <label for="setting-autologin">Otomatik Giriş</label>
      <label class="switch">
          <input type="checkbox" id="setting-autologin" ${
            isAutoLoginEnabled ? "checked" : ""
          }>
          <span class="slider round"></span>
      </label>
  `;
  autoLoginItem.querySelector("input").addEventListener("change", () => {
    simulateCommand("t.autologin", false);
  });
  settingsBody.appendChild(autoLoginItem);
  settingsBody.appendChild(
    createToggleSetting("Küfür Filtresi", ANTI_SWEAR_KEY, "t.antiswear")
  );
  settingsBody.appendChild(createChatSlowerSetting());
  const settingsMenuBack = document.getElementById("settings-menu-back");
  if (settingsMenuBack) {
    settingsMenuBack.style.display = "flex";
    requestAnimationFrame(() => {
      settingsMenuBack.classList.add("visible");
    });
  }
}

function closeSettingsPopup() {
  const settingsMenuBack = document.getElementById("settings-menu-back");
  if (settingsMenuBack) {
    settingsMenuBack.classList.remove("visible");
    settingsMenuBack.addEventListener(
      "transitionend",
      () => {
        if (!settingsMenuBack.classList.contains("visible")) {
          settingsMenuBack.style.display = "none";
        }
      },
      { once: true }
    );
  }
}

function isPrivateIp(ip) {
  if (!ip) return false;

  if (ip.includes(":")) {
    const lowerCaseIp = ip.toLowerCase();

    if (lowerCaseIp === "::1") {
      return true;
    }

    if (lowerCaseIp.startsWith("fc") || lowerCaseIp.startsWith("fd")) {
      return true;
    }

    if (
      lowerCaseIp.startsWith("fe8") ||
      lowerCaseIp.startsWith("fe9") ||
      lowerCaseIp.startsWith("fea") ||
      lowerCaseIp.startsWith("feb")
    ) {
      return true;
    }

    return false;
  }

  const privateV4Ranges = [
    /^127\./,
    /^10\./,
    /^192\.168\./,
    /^172\.(1[6-9]|2[0-9]|3[0-1])\./,
    /^169\.254\./,
  ];

  return privateV4Ranges.some((regex) => regex.test(ip));
}

async function getPublicIp() {
  if (_cachedPublicIp) {
    return _cachedPublicIp;
  }

  try {
    const response = await fetch("https://api.ipify.org?format=json");
    if (!response.ok) {
      console.error("IPify API'sinden yanıt alınamadı.");
      return null;
    }
    const data = await response.json();
    const ip = data.ip;
    _cachedPublicIp = ip;
    return ip;
  } catch (error) {
    console.error("Public IP alınırken bir ağ hatası oluştu | ", error);
    return null;
  }
}

async function checkPublicIpAndWarn() {
  if (hasBypassedPrivateIpWarning) {
    return true;
  }
  try {
    const publicIp = await getPublicIp();
    if (!publicIp) {
      console.warn("Public IP adresi doğrulanamadı, işleme devam ediliyor.");
      return true;
    }
    if (isPrivateIp(publicIp)) {
      return new Promise((resolve) => {
        showModal({
          title: "P2P Uyarısı",
          message:
            "Ağ yapılandırmanız, genel internete özel bir IP adresiyle çıktığınızı gösteriyor. Bu durum, genellikle kurumsal bir ağda veya özel bir VPN yapılandırmasında görülür.<br/><br/><b>Devam etmek, P2P bağlantı sorunlarına yol açabilir veya ağ bilgilerinizi ifşa edebilir. Bu uyarıyı bu oturum boyunca tekrar görmeyeceksiniz.</b>",
          buttons: [
            {
              text: "Yine de Devam Et",
              class: "confirm",
              onClick: () => {
                hasBypassedPrivateIpWarning = true;
                hideModal();
                resolve(true);
              },
            },
            {
              text: "İptal Et",
              class: "cancel",
              onClick: () => {
                hideModal();
                resolve(false);
              },
            },
          ],
        });
      });
    } else {
      hasBypassedPrivateIpWarning = true;
      return true;
    }
  } catch (error) {
    console.warn(
      "IP kontrolü sırasında hata oluştu, işleme devam ediliyor | ",
      error
    );
    return true;
  }
}

function getRoomHistory() {
  try {
    const rawHistory = localStorage.getItem(ROOM_HISTORY_KEY);
    return rawHistory ? JSON.parse(rawHistory) : [];
  } catch (e) {
    console.error("Room History Error | ", e);
    return [];
  }
}

function saveRoomHistory(history) {
  localStorage.setItem(ROOM_HISTORY_KEY, JSON.stringify(history));
}

function addRoomToHistory(roomName, displayName) {
  let history = getRoomHistory();
  if (history.length > 0 && history[0].roomName === roomName) {
    return;
  }
  history = history.filter((item) => item.roomName !== roomName);
  history.unshift({ roomName, displayName });
  if (history.length > MAX_ROOM_HISTORY) {
    history = history.slice(0, MAX_ROOM_HISTORY);
  }
  saveRoomHistory(history);
}

function clearRoomHistory() {
  localStorage.removeItem(ROOM_HISTORY_KEY);
}

function initializeRoomHistoryMenu() {
  if (document.getElementById("room-history-menu-back")) return;

  const menuWrapper = document.createElement("div");
  menuWrapper.id = "room-history-menu-back";
  menuWrapper.className = "settings-menu-back";
  menuWrapper.innerHTML = `
    <div class="settings-menu-content" id="room-history-menu-content">
        <div class="settings-header">
            <h2>Geçmiş Oda Listesi</h2>
            <button id="close-history-btn" class="settings-close-btn" title="Kapat">&times;</button>
        </div>
        <div class="settings-body" id="room-history-body">
            <!-- Geçmiş oda listesi buraya dinamik olarak eklenecek -->
        </div>
        <div class="settings-footer">
            <button id="clear-history-btn" class="action-btn clear-history-button">Geçmişi Temizle</button>
        </div>
    </div>
  `;
  document.body.appendChild(menuWrapper);

  document
    .getElementById("close-history-btn")
    .addEventListener("click", closeRoomHistoryPopup);
  menuWrapper.addEventListener("click", (e) => {
    if (e.target.id === "room-history-menu-back") {
      closeRoomHistoryPopup();
    }
  });

  document.getElementById("clear-history-btn").addEventListener("click", () => {
    const historyMenu = document.getElementById("room-history-menu-back");
    const animationPromise = waitForRoomHistoryMenuToHide(historyMenu);
    closeRoomHistoryPopup();
    animationPromise.then(() => {
      showModal({
        title: "Emin misiniz?",
        message: "Tüm oda geçmişiniz kalıcı olarak silinecek.",
        buttons: [
          {
            text: "Evet",
            class: "confirm",
            onClick: () => {
              clearRoomHistory();
              hideModal();
            },
          },
          {
            text: "İptal",
            class: "cancel",
            onClick: () => {
              openRoomHistoryPopup();
              hideModal();
            },
          },
        ],
      });
    });
  });
}

async function waitForRoomHistoryMenuToHide() {
  const el = document.getElementById("room-history-menu-back");
  if (!el || !el.classList.contains("visible")) return;

  return new Promise((resolve) => {
    function check() {
      const opacity = parseFloat(getComputedStyle(el).opacity);
      if (opacity < 0.1) {
        return resolve();
      }
      requestAnimationFrame(check);
    }
    check();
  });
}

function openRoomHistoryPopup() {
  initializeRoomHistoryMenu();

  const historyBody = document.getElementById("room-history-body");
  historyBody.innerHTML = "";

  const history = getRoomHistory().reverse();

  if (history.length === 0) {
    historyBody.innerHTML = `
      <div class="favorites-empty-state">
        <i class="fa-solid fa-clock-rotate-left"></i>
        <span>Oda geçmişiniz boş.</span>
      </div>`;
  } else {
    const listContainer = document.createElement("div");
    listContainer.className = "history-item-list";

    history.forEach((room) => {
      const itemDiv = document.createElement("div");
      itemDiv.className = "history-item";
      itemDiv.innerHTML = `${room.displayName} <i class="fa-solid fa-reply"></i>`;
      itemDiv.title = `"${room.displayName}" Odasına Geç`;

      itemDiv.addEventListener("click", () => {
        switchRoom(room.roomName, room.displayName);
        closeRoomHistoryPopup();
      });
      listContainer.appendChild(itemDiv);
    });
    historyBody.appendChild(listContainer);
  }

  const menuBack = document.getElementById("room-history-menu-back");
  menuBack.style.display = "flex";
  requestAnimationFrame(() => {
    menuBack.classList.add("visible");
  });
}

function closeRoomHistoryPopup() {
  const menuBack = document.getElementById("room-history-menu-back");
  if (menuBack) {
    menuBack.classList.remove("visible");
    menuBack.addEventListener(
      "transitionend",
      () => {
        if (!menuBack.classList.contains("visible")) {
          menuBack.style.display = "none";
        }
      },
      { once: true }
    );
  }
}
