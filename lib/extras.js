(function () {
  const messages = [
    {
      text: "DİKKAT!",
      style: "color: red; font-weight: bold; font-size: 45px;",
    },
    {
      text: "Bu geliştirici konsolu özelliği sadece geliştirici kullanıcılar içindir.",
      style: "color: yellow; font-weight: bold; font-size: 25px;",
    },
    {
      text: "Eğer biri sana bir TinDay özelliğini açmak için bir şey kopyalayıp buraya yapıştırmanı söylediyse yapıştırmadan önce lütfen bizimle iletişime geçin.",
      style: "color: white; font-weight: bold; font-size: 20px;",
    },
  ];

  let hasLogged = false;

  function logWarnings() {
    if (hasLogged) return;
    messages.forEach(({ text, style }) => {
      console.log(`%c${text}`, style);
    });
    console.log(
      "%cInstagram ->%chttps://instagram.com/xmerofficial/",
      "color: white; font-weight: bold; font-size: 25px; background: radial-gradient(circle at 30% 110%, #ffdb8b 0%, #ee653d 25%, #d42e81 50%, #a237b6 75%, #3e57bc 100%); border-radius: 10px; padding: 10px 30px;",
      "color: cyan; font-size: 20px; margin-left: 11px; text-decoration: underline;"
    );
    console.log(
      "%cXmer™ XmerOriginals™ %cTinDay (c) 2025",
      "color: #ffffffff;",
      "color: #fc918c; font-weight: bold;"
    );

    hasLogged = true;
  }

  function checkDevTools() {
    const isDevToolsOpen =
      window.outerWidth - window.innerWidth > 160 ||
      window.outerHeight - window.innerHeight > 160;
    if (isDevToolsOpen) {
      logWarnings();
    } else {
      hasLogged = false;
    }
  }

  checkDevTools();
  setInterval(checkDevTools, 500);
})();
