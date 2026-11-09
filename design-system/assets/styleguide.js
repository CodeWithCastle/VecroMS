/* ============================================================
   VecroMS Design System — style guide behaviour
   Theme toggle · tabs · dialog · toasts · copy · scroll spy
   ============================================================ */
(function () {
  "use strict";

  var STORAGE_KEY = "vms-theme";
  var root = document.documentElement;

  /* ----------------------------------------------------------
     Theme
     ---------------------------------------------------------- */
  var themeToggle = document.getElementById("themeToggle");
  var themeIcon = document.getElementById("themeIcon");

  function currentTheme() {
    var pinned = root.getAttribute("data-theme");
    if (pinned === "light" || pinned === "dark") return pinned;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  function syncRoleHexes() {
    var computed = window.getComputedStyle(root);
    document.querySelectorAll(".role-hex[data-var]").forEach(function (el) {
      var value = computed.getPropertyValue(el.getAttribute("data-var")).trim();
      if (value) el.textContent = value.toUpperCase();
    });
  }

  function paintTheme(theme) {
    if (themeToggle) {
      themeToggle.setAttribute(
        "aria-label",
        theme === "dark" ? "Switch to light theme" : "Switch to dark theme"
      );
      themeToggle.setAttribute("aria-pressed", String(theme === "dark"));
    }
    if (themeIcon) {
      themeIcon.querySelector("use").setAttribute("href", theme === "dark" ? "#i-sun" : "#i-moon");
    }
    syncRoleHexes();
  }

  function setTheme(theme) {
    root.setAttribute("data-theme", theme);
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch (err) {
      /* storage can be blocked; the theme still applies for this visit */
    }
    paintTheme(theme);
  }

  paintTheme(currentTheme());

  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      setTheme(currentTheme() === "dark" ? "light" : "dark");
    });
  }

  /* Follow the OS only while the user has not pinned a theme. */
  var media = window.matchMedia("(prefers-color-scheme: dark)");
  var onMediaChange = function () {
    if (!root.hasAttribute("data-theme")) paintTheme(currentTheme());
  };
  if (media.addEventListener) media.addEventListener("change", onMediaChange);
  else if (media.addListener) media.addListener(onMediaChange);

  /* ----------------------------------------------------------
     Toasts
     ---------------------------------------------------------- */
  var toastStack = document.getElementById("toastStack");
  var TOAST_ICONS = {
    success: "#i-check",
    warning: "#i-alert",
    danger: "#i-alert",
    info: "#i-info"
  };
  var TOAST_TITLES = {
    success: "Success",
    warning: "Warning",
    danger: "Something went wrong",
    info: "Notice"
  };
  var TOAST_TTL = { success: 5000, info: 5000, warning: 8000, danger: 0 };

  function dismissToast(toast) {
    if (!toast || toast.dataset.leaving === "true") return;
    toast.dataset.leaving = "true";
    toast.style.transition = "opacity 120ms ease, transform 120ms ease";
    toast.style.opacity = "0";
    toast.style.transform = "translateY(6px)";
    window.setTimeout(function () {
      toast.remove();
    }, 140);
  }

  function showToast(tone, message, title) {
    if (!toastStack) return;
    tone = TOAST_ICONS[tone] ? tone : "info";

    while (toastStack.children.length >= 3) {
      toastStack.removeChild(toastStack.firstElementChild);
    }

    var toast = document.createElement("div");
    toast.className = "vms-toast vms-toast--" + tone;
    toast.setAttribute("role", tone === "danger" ? "alert" : "status");

    var icon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    icon.setAttribute("class", "icon");
    icon.setAttribute("aria-hidden", "true");
    var use = document.createElementNS("http://www.w3.org/2000/svg", "use");
    use.setAttribute("href", TOAST_ICONS[tone]);
    icon.appendChild(use);

    var body = document.createElement("div");
    var strong = document.createElement("strong");
    strong.textContent = title || TOAST_TITLES[tone];
    var span = document.createElement("span");
    span.textContent = message || "";
    body.appendChild(strong);
    body.appendChild(span);

    var close = document.createElement("button");
    close.type = "button";
    close.setAttribute("aria-label", "Dismiss notification");
    close.innerHTML = '<svg class="icon" aria-hidden="true"><use href="#i-x"/></svg>';
    close.addEventListener("click", function () {
      dismissToast(toast);
    });

    toast.appendChild(icon);
    toast.appendChild(body);
    toast.appendChild(close);
    toastStack.appendChild(toast);

    var ttl = TOAST_TTL[tone];
    if (ttl > 0) {
      var timer = window.setTimeout(function () {
        dismissToast(toast);
      }, ttl);
      toast.addEventListener("mouseenter", function () {
        window.clearTimeout(timer);
      });
      toast.addEventListener("focusin", function () {
        window.clearTimeout(timer);
      });
    }
  }

  document.addEventListener("click", function (event) {
    var trigger = event.target.closest("[data-toast]");
    if (!trigger) return;
    showToast(trigger.getAttribute("data-toast"), trigger.getAttribute("data-message"));
  });

  /* ----------------------------------------------------------
     Tabs
     ---------------------------------------------------------- */
  function activateTab(tab) {
    var list = tab.closest('[role="tablist"]');
    if (!list) return;
    var tabs = Array.prototype.slice.call(list.querySelectorAll('[role="tab"]'));

    tabs.forEach(function (item) {
      var selected = item === tab;
      item.setAttribute("aria-selected", String(selected));
      item.setAttribute("tabindex", selected ? "0" : "-1");
      var panel = document.getElementById(item.getAttribute("aria-controls"));
      if (panel) panel.hidden = !selected;
    });
  }

  document.querySelectorAll('[role="tablist"]').forEach(function (list) {
    var tabs = Array.prototype.slice.call(list.querySelectorAll('[role="tab"]'));
    tabs.forEach(function (tab, index) {
      if (!tab.hasAttribute("tabindex")) {
        tab.setAttribute("tabindex", tab.getAttribute("aria-selected") === "true" ? "0" : "-1");
      }
      tab.addEventListener("click", function () {
        activateTab(tab);
      });
      tab.addEventListener("keydown", function (event) {
        var next = null;
        if (event.key === "ArrowRight") next = tabs[(index + 1) % tabs.length];
        else if (event.key === "ArrowLeft") next = tabs[(index - 1 + tabs.length) % tabs.length];
        else if (event.key === "Home") next = tabs[0];
        else if (event.key === "End") next = tabs[tabs.length - 1];
        if (!next) return;
        event.preventDefault();
        activateTab(next);
        next.focus();
      });
    });
  });

  /* ----------------------------------------------------------
     Modal
     ---------------------------------------------------------- */
  var modal = document.getElementById("demoModal");
  var lastTrigger = null;

  function openModal(trigger) {
    if (!modal) return;
    lastTrigger = trigger || null;
    if (typeof modal.showModal === "function") modal.showModal();
    else modal.setAttribute("open", "");
    var firstField = modal.querySelector("select, input, textarea, button");
    if (firstField) window.setTimeout(function () { firstField.focus(); }, 60);
  }

  function closeModal() {
    if (!modal) return;
    if (typeof modal.close === "function") modal.close();
    else modal.removeAttribute("open");
  }

  document.addEventListener("click", function (event) {
    if (event.target.closest("[data-open-modal]")) {
      openModal(event.target.closest("[data-open-modal]"));
      return;
    }
    if (event.target.closest("[data-close-modal]")) {
      closeModal();
    }
  });

  if (modal) {
    modal.addEventListener("close", function () {
      if (lastTrigger && typeof lastTrigger.focus === "function") lastTrigger.focus();
    });
    /* Click on the backdrop (the dialog element itself, outside its content). */
    modal.addEventListener("click", function (event) {
      if (event.target === modal) closeModal();
    });
  }

  /* ----------------------------------------------------------
     Copy swatches
     ---------------------------------------------------------- */
  function legacyCopy(text) {
    return new Promise(function (resolve, reject) {
      var area = document.createElement("textarea");
      area.value = text;
      area.setAttribute("readonly", "");
      area.style.position = "fixed";
      area.style.top = "-1000px";
      area.style.opacity = "0";
      document.body.appendChild(area);
      area.select();
      try {
        var ok = document.execCommand("copy");
        if (ok) resolve();
        else reject(new Error("execCommand copy was rejected"));
      } catch (err) {
        reject(err);
      } finally {
        area.remove();
      }
    });
  }

  function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text).catch(function () {
        return legacyCopy(text);
      });
    }
    return legacyCopy(text);
  }

  document.addEventListener("click", function (event) {
    var swatch = event.target.closest("[data-copy]");
    if (!swatch) return;
    var value = swatch.getAttribute("data-copy");
    copyText(value).then(
      function () {
        showToast("success", value + " copied to the clipboard.", "Copied");
      },
      function () {
        showToast("warning", "Select the hex value and copy it manually.", "Copy failed");
      }
    );
  });

  /* ----------------------------------------------------------
     Rail scroll spy
     ---------------------------------------------------------- */
  var railLinks = Array.prototype.slice.call(document.querySelectorAll(".rail-nav a"));
  var sections = railLinks
    .map(function (link) {
      var id = link.getAttribute("href");
      if (!id || id.charAt(0) !== "#") return null;
      var section = document.querySelector(id);
      return section ? { link: link, section: section } : null;
    })
    .filter(Boolean);

  function setActive(link) {
    railLinks.forEach(function (item) {
      item.classList.toggle("active", item === link);
      if (item === link) item.setAttribute("aria-current", "true");
      else item.removeAttribute("aria-current");
    });
  }

  if ("IntersectionObserver" in window && sections.length) {
    var visible = new Map();
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          visible.set(entry.target, entry.isIntersecting ? entry.intersectionRatio : 0);
        });
        var best = null;
        var bestRatio = 0;
        visible.forEach(function (ratio, section) {
          if (ratio > bestRatio) {
            bestRatio = ratio;
            best = section;
          }
        });
        if (!best) return;
        var match = sections.find(function (item) {
          return item.section === best;
        });
        if (match) setActive(match.link);
      },
      { rootMargin: "-88px 0px -60% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );
    sections.forEach(function (item) {
      observer.observe(item.section);
    });
  } else {
    /* Fallback: mark the first section. */
    if (sections[0]) setActive(sections[0].link);
  }

  /* ----------------------------------------------------------
     Escape closes the mobile focus target, and anchor scroll
     gets a little breathing room (handled in CSS).
     ---------------------------------------------------------- */
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && modal && modal.hasAttribute("open")) {
      closeModal();
    }
  });
})();
