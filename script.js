function adjustLayout() {
    const screenWidth = window.innerWidth;
  
    if (screenWidth <= 768) { // Adjust breakpoint as needed
      // Load mobile content
      fetch("mobile.html")
        .then(response => response.text())
        .then(content => {
          document.getElementById("content-container").innerHTML = content;
          // Load mobile CSS dynamically
          const mobileCSSLink = document.createElement("link");
          mobileCSSLink.href = "mobile.css";
          mobileCSSLink.rel = "stylesheet";
          document.head.appendChild(mobileCSSLink);
        });
    } else {
      // Load desktop content
      fetch("desktop.html")
        .then(response => response.text())
        .then(content => {
          document.getElementById("content-container").innerHTML = content;
          // Load desktop CSS dynamically
          const desktopCSSLink = document.createElement("link");
          desktopCSSLink.href = "desktop.css";
          desktopCSSLink.rel = "stylesheet";
          document.head.appendChild(desktopCSSLink);
        });
    }
  }
  
  window.addEventListener("resize", adjustLayout);
  adjustLayout(); // Initial adjustment