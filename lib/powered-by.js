let isPoweredByInitialized = false;
async function poweredByInit(targetFooterElement) {
  if (targetFooterElement && !(targetFooterElement instanceof HTMLElement)) {
    targetFooterElement = undefined;
  }
  const snapFooter =
    targetFooterElement || document.getElementById("snap-footer");
  if (!snapFooter) {
    return;
  }
  const snapContainer = snapFooter.querySelector(".snap-scroller");
  if (!snapContainer) {
    console.error(
      "The footer element is missing a child with class '.snap-scroller'."
    );
    return;
  }
  if (isPoweredByInitialized || !snapFooter || !snapContainer) {
    if (!snapFooter) {
      return;
    }
    return;
  }
  if (snapFooter.dataset.initialized === "true") {
    return;
  }
  snapFooter.dataset.initialized = "true";
  isPoweredByInitialized = true;
  const data = "powered-by/powered-by.json";
  let snapData = [];

  try {
    const response = await fetch(data);
    if (!response.ok) {
      throw new Error(`Error ${response.status}`);
    }
    const json = await response.json();
    snapData = Array.isArray(json) ? json : json.data;
    if (!Array.isArray(snapData)) {
      throw new Error("Invalid data format");
    }
  } catch (error) {
    console.error("Failed to load powered-by data:", error);
    snapFooter.style.display = "none";
    return;
  }

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  shuffleArray(snapData);
  const originalSnapElements = [];
  let imagesLoaded = 0;
  let isHovering = false;
  const scrollSpeed = 0.5;
  let animationFrameId;
  const teamBadge = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="465.20364" height="447.89808" viewBox="0,0,465.20364,447.89808"><g transform="translate(-7.39818,43.94903)"><g stroke="none" stroke-miterlimit="10"><path d="M472.60182,179.87075c-1.42407,17.55884 -7.62996,34.39231 -17.94421,48.67367c-3.75179,5.79794 -6.90806,11.96019 -9.42071,18.39281c-1.95158,6.94677 -3.08082,14.09864 -3.36454,21.30875c-0.27238,17.15747 -5.23697,33.91293 -14.35537,48.44936c-11.12537,13.19007 -25.62227,23.11308 -41.94459,28.71073c-6.66115,2.57079 -13.04823,5.8019 -19.06572,9.64501c-5.37594,4.4727 -10.33127,9.42803 -14.80397,14.80397c-10.23564,14.05759 -24.22988,24.942 -40.37447,31.40237c-16.57589,3.96782 -33.90407,3.50367 -50.24379,-1.34582c-14.28515,-3.57073 -29.22956,-3.57073 -43.51471,0c-9.85595,2.36192 -19.92668,3.7147 -30.05655,4.03745c-6.61272,-0.00785 -13.18816,-0.99039 -19.51433,-2.91593c-16.14459,-6.46037 -30.13883,-17.34478 -40.37447,-31.40237c-4.4727,-5.37594 -9.42803,-10.33127 -14.80397,-14.80397c-6.0175,-3.84312 -12.40458,-7.07423 -19.06572,-9.64501c-16.32232,-5.59766 -30.81922,-15.52066 -41.94459,-28.71073c-9.1184,-14.53643 -14.08298,-31.29189 -14.35537,-48.44936c-0.28372,-7.21011 -1.41296,-14.36198 -3.36454,-21.30875c-2.42134,-6.47332 -5.58254,-12.64519 -9.42071,-18.39281c-10.0366,-14.28865 -16.00598,-31.03392 -17.2713,-48.44936c1.18513,-17.57041 7.15814,-34.48103 17.2713,-48.89797c3.75179,-5.79794 6.90806,-11.96019 9.42071,-18.39281c2.1673,-6.76892 3.52262,-13.77139 4.03745,-20.86014c0.09249,-17.09039 4.82138,-33.83529 13.68246,-48.44936c11.18697,-13.22347 25.76532,-23.14915 42.16889,-28.71073c6.66115,-2.57079 13.04823,-5.8019 19.06572,-9.64501c5.37594,-4.4727 10.33127,-9.42803 14.80397,-14.80397c10.42666,-14.05617 24.56268,-24.93004 40.82308,-31.40237c16.58334,-4.01459 33.94347,-3.47209 50.24379,1.57012c14.30998,3.36293 29.20473,3.36293 43.51471,0c16.02034,-4.87948 33.04845,-5.42128 49.34658,-1.57012c16.0966,6.54375 30.06983,17.41181 40.37447,31.40237c4.3306,5.35596 9.13516,10.31066 14.35537,14.80397c6.0175,3.84312 12.40458,7.07423 19.06572,9.64501c16.32232,5.59766 30.81922,15.52066 41.94459,28.71073c9.09748,14.54587 14.06029,31.29538 14.35537,48.44936c0.51483,7.08875 1.87014,14.09122 4.03745,20.86014c2.48486,6.58733 5.64177,12.90113 9.42071,18.84142c10.0366,14.28865 16.00598,31.03392 17.2713,48.44936z" fill="#fc918c"/><path d="M240,169.99865c27.61798,0 50.00676,22.38879 50.00676,50.00677v60.00812h-100.01353v-60.00811c0,-27.61797 22.38879,-50.00677 50.00677,-50.00677zM172.87092,200.06272c-1.59164,5.36859 -2.53185,10.90912 -2.80038,16.50224l-0.08002,3.44046v60.00812h-30.00405v-45.00609c-0.00408,-17.86087 13.43948,-32.86043 31.19422,-34.80471l1.70023,-0.14002zM307.12908,200.06272c18.47454,1.12607 32.88173,16.4359 32.88445,34.94473v45.00609h-30.00406v-60.00811c0,-6.93094 -1.00013,-13.62185 -2.88039,-19.9427zM174.99121,139.99459c13.80899,0 25.00338,11.1944 25.00338,25.00338c0,13.80899 -11.19439,25.00338 -25.00338,25.00338c-13.80899,0 -25.00338,-11.1944 -25.00338,-25.00338c0,-13.80899 11.1944,-25.00338 25.00338,-25.00338zM305.00879,139.99459c13.80899,0 25.00339,11.1944 25.00339,25.00338c0,13.80899 -11.19441,25.00338 -25.00339,25.00338c-13.80899,0 -25.00338,-11.1944 -25.00338,-25.00338c0,-13.80899 11.19439,-25.00338 25.00338,-25.00338zM240,79.98647c22.09438,0 40.00541,17.91104 40.00541,40.00542c0,22.09437 -17.91103,40.00542 -40.00541,40.00542c-22.09438,0 -40.00541,-17.91104 -40.00541,-40.00541c0,-22.09437 17.91104,-40.00541 40.00542,-40.00541z" fill="#ffffff"/></g></g></svg>`;

  function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  function autoScroll() {
    if (!isHovering) {
      snapContainer.scrollLeft += scrollSpeed;
      const halfScrollWidth = snapContainer.scrollWidth / 2;
      if (snapContainer.scrollLeft >= halfScrollWidth) {
        snapContainer.scrollLeft = 0;
      }
    }
    animationFrameId = requestAnimationFrame(autoScroll);
  }

  function manageLayout() {
    if (animationFrameId) {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = null;
    }
    snapContainer.innerHTML = "";
    originalSnapElements.forEach((el) => snapContainer.appendChild(el));
    const isOverflowing = snapContainer.scrollWidth > snapContainer.clientWidth;
    if (isOverflowing) {
      originalSnapElements.forEach((el) => {
        snapContainer.appendChild(el.cloneNode(true));
      });
      snapContainer.style.justifyContent = "flex-start";
      autoScroll();
    } else {
      snapContainer.style.justifyContent = "center";
    }
  }

  snapData.forEach((snapItem) => {
    const linkElement = document.createElement("a");
    linkElement.href = snapItem.redirectUrl;
    linkElement.className = "snap";
    linkElement.target = "_blank";
    linkElement.rel = "noopener noreferrer";

    if (snapItem.verified === true) {
      const container = document.createElement("span");
      container.style.display = "inline-flex";
      container.style.alignItems = "center";
      container.style.gap = "4px";

      const textElement = document.createElement("span");
      textElement.textContent = "Ekip";
      textElement.className = "verified-text";

      const badgeElement = document.createElement("div");
      badgeElement.className = "verified-badge";
      badgeElement.innerHTML = teamBadge;

      container.appendChild(textElement);
      container.appendChild(badgeElement);

      linkElement.appendChild(container);
    }

    const imageElement = new Image();
    imageElement.alt = "Snap";

    imageElement.onload = function () {
      const isRectangular = this.naturalWidth !== this.naturalHeight;
      if (isRectangular) {
        linkElement.classList.add("rectangular");
      }
      imagesLoaded++;
      if (imagesLoaded === snapData.length) {
        manageLayout();
      }
      if (snapItem.verified === true) {
        imageElement.style.borderTopLeftRadius = "0px";
      }
    };

    imageElement.src = snapItem.imageUrl;
    linkElement.appendChild(imageElement);
    originalSnapElements.push(linkElement);
  });

  snapFooter.addEventListener("mouseenter", () => {
    isHovering = true;
  });
  snapFooter.addEventListener("mouseleave", () => {
    isHovering = false;
  });

  const debouncedManageLayout = debounce(manageLayout, 250);
  snapFooter.addEventListener("mouseenter", () => {
    isHovering = true;
  });
  snapFooter.addEventListener("mouseleave", () => {
    isHovering = false;
  });
  window.addEventListener("resize", debouncedManageLayout);
  snapFooter.destroy = () => {
    if (animationFrameId) {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = null;
    }
    window.removeEventListener("resize", debouncedManageLayout);
    snapFooter.removeAttribute("data-initialized");
  };
}
