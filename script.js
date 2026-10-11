/* =========================================================
   AGUS TAUFIK RAHMAN | PORTOFOLIO
   Render karya, dialog, pratinjau media, musik
========================================================= */

(() => {
  "use strict";

  const $ = (selector, root = document) => root.querySelector(selector);


  /* -------------------------------------------------------
     DATA KARYA
  ------------------------------------------------------- */

  const projects = [
    {
      id: "ac",
      category: "PKL",
      title: "Maintenance AC",
      description:
        "Melakukan perawatan AC indoor dan outdoor, termasuk membantu proses pemeriksaan, pembersihan, dan memastikan unit tetap bekerja dengan baik selama kegiatan Engineering.",
      media: [
        { type: "image", src: "pkl-maintenance-ac-2.jpg", label: "Perawatan AC" },
        { type: "image", src: "pkl-maintenance-ac-outdoor.jpg", label: "Perawatan AC outdoor" },
        { type: "image", src: "pkl-maintenance-ac.jpg", label: "Maintenance AC" }
      ]
    },
    {
      id: "lighting",
      category: "PKL",
      title: "Penerangan",
      description:
        "Mengerjakan instalasi dan perbaikan penerangan di area fasilitas, mulai dari pemasangan jalur lampu pada tangga hingga pemasangan lampu sorot.",
      media: [
        { type: "image", src: "pkl-memahat-dan-memasang-penerangan-ditangga.jpg", label: "Penerangan tangga" },
        { type: "image", src: "pkl-pemasangan-lampu-sorot.jpg", label: "Pemasangan lampu sorot" }
      ]
    },
    {
      id: "network",
      category: "PKL",
      title: "Jaringan dan PJU",
      description:
        "Membantu perbaikan jaringan internet serta pekerjaan pada penerangan jalan umum, termasuk penanganan jalur dan instalasi yang diperlukan di area fasilitas.",
      media: [
        { type: "image", src: "pkl-memperbaiki-jaringan-internet-dan-penerangan-jalan.jpg", label: "Jaringan internet dan PJU" }
      ]
    },
    {
      id: "support",
      category: "PKL",
      title: "Dukungan Engineering",
      description:
        "Mengerjakan berbagai pekerjaan pendukung untuk menjaga kondisi fasilitas tetap terawat, termasuk pekerjaan pengecatan pada area yang membutuhkan perawatan.",
      media: [
        { type: "image", src: "pkl-mengecat.jpg", label: "Pekerjaan pengecatan" }
      ]
    },
    {
      id: "grounding",
      category: "BBPVP",
      title: "Pengecekan Grounding",
      description:
        "Mempelajari cara melakukan pengecekan grounding sebagai bagian dari sistem keselamatan kelistrikan bangunan dan memahami pentingnya jalur pembumian yang baik.",
      media: [
        { type: "image", src: "bbpvp-mempelajari-tentang-pengecekan-grounding.jpg", label: "Pengecekan grounding" }
      ]
    },
    {
      id: "k3",
      category: "BBPVP",
      title: "K3",
      description:
        "Mempelajari penerapan keselamatan dan kesehatan kerja sebelum dan selama praktik, termasuk mengenali potensi bahaya serta bekerja dengan prosedur yang lebih aman.",
      media: [
        { type: "image", src: "bbpvp-mempelajari-tentang-k3.jpg", label: "K3" }
      ]
    },
    {
      id: "smart",
      category: "BBPVP",
      title: "Smart Building",
      description:
        "Mempraktikkan pemasangan komponen smart building dan menghubungkan sistem agar perangkat dapat dikontrol melalui HP sebagai bagian dari integrasi bangunan cerdas.",
      media: [
        { type: "video", src: "bbpvp-video-memasang-komponen-smart-building-bisa-dikontrol-dengan-hp.mp4", label: "Smart building" }
      ]
    }
  ];


  /* -------------------------------------------------------
     UTIL
  ------------------------------------------------------- */

  function el(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }

  function lockScroll() {
    document.body.style.overflow = "hidden";
  }

  function unlockScrollIfIdle() {
    if (!document.querySelector("dialog[open]")) {
      document.body.style.overflow = "";
    }
  }


  /* -------------------------------------------------------
     KARTU KARYA
  ------------------------------------------------------- */

  const grid = $("#projectGrid");

  function buildCard(project) {
    const first = project.media[0];

    const button = el("button", "card");
    button.type = "button";

    const media = el("span", "card-media");

    if (first.type === "video") {
      // Video tidak dimuat di kartu, supaya halaman tetap ringan.
      media.classList.add("is-video");
      const play = el("span", "play");
      play.setAttribute("aria-hidden", "true");
      media.appendChild(play);
    } else {
      const img = document.createElement("img");
      img.src = first.src;
      img.alt = first.label;
      img.loading = "lazy";
      img.decoding = "async";
      img.addEventListener("error", () => img.remove());
      media.appendChild(img);
    }

    const body = el("span", "card-body");
    body.append(
      el("span", "card-cat", project.category),
      el("span", "card-title", project.title),
      el("span", "card-desc", project.description),
      el("span", "card-open", first.type === "video" ? "Putar video" : "Lihat karya")
    );

    button.append(media, body);
    button.addEventListener("click", () => openProject(project));

    return button;
  }

  function renderProjects(filter = "all") {
    const list =
      filter === "all"
        ? projects
        : projects.filter(project => project.category === filter);

    const fragment = document.createDocumentFragment();
    list.forEach(project => fragment.appendChild(buildCard(project)));

    grid.replaceChildren(fragment);
  }

  renderProjects();


  /* -------------------------------------------------------
     FILTER
  ------------------------------------------------------- */

  const chips = document.querySelectorAll(".chip");

  chips.forEach(chip => {
    chip.addEventListener("click", () => {
      chips.forEach(item => {
        const active = item === chip;
        item.classList.toggle("is-active", active);
        item.setAttribute("aria-pressed", String(active));
      });

      renderProjects(chip.dataset.filter);
    });
  });


  /* -------------------------------------------------------
     DIALOG KARYA
  ------------------------------------------------------- */

  const dialog = $("#projectDialog");
  const dlgClose = $("#dlgClose");
  const dlgCat = $("#dlgCat");
  const dlgTitle = $("#dlgTitle");
  const dlgDesc = $("#dlgDesc");
  const dlgMedia = $("#dlgMedia");

  function openProject(project) {
    dlgCat.textContent = project.category;
    dlgTitle.textContent = project.title;
    dlgDesc.textContent = project.description;

    const fragment = document.createDocumentFragment();

    project.media.forEach(item => {
      if (item.type === "image") {
        const img = document.createElement("img");
        img.src = item.src;
        img.alt = item.label;
        img.loading = "lazy";
        img.decoding = "async";
        img.addEventListener("click", () => openViewer(item.src, "image"));
        fragment.appendChild(img);
      } else {
        const video = document.createElement("video");
        video.src = item.src;
        video.controls = true;
        video.playsInline = true;
        video.preload = "metadata";
        fragment.appendChild(video);
      }
    });

    dlgMedia.replaceChildren(fragment);

    dialog.showModal();
    lockScroll();
  }

  dlgClose.addEventListener("click", () => dialog.close());

  dialog.addEventListener("click", event => {
    if (event.target === dialog) dialog.close();
  });

  dialog.addEventListener("close", () => {
    dlgMedia.replaceChildren();
    unlockScrollIfIdle();
  });


  /* -------------------------------------------------------
     PRATINJAU MEDIA
  ------------------------------------------------------- */

  const viewer = $("#viewer");
  const viewerStage = $("#viewerStage");
  const viewerTools = $("#viewerTools");
  const viewerClose = $("#viewerClose");

  let currentImage = null;
  let rotation = 0;

  function applyRotation() {
    if (!currentImage) return;

    const sideways = Math.abs(rotation / 90) % 2 === 1;

    currentImage.style.transform = `rotate(${rotation}deg)`;
    currentImage.style.maxWidth = sideways ? "calc(100dvh - 150px)" : "100%";
    currentImage.style.maxHeight = sideways ? "calc(100vw - 24px)" : "100%";
  }

  function openViewer(src, type = "image") {
    rotation = 0;
    currentImage = null;

    if (type === "image") {
      const img = document.createElement("img");
      img.src = src;
      img.alt = "Pratinjau";
      currentImage = img;

      viewerStage.replaceChildren(img);
      viewerTools.hidden = false;
    } else {
      const video = document.createElement("video");
      video.src = src;
      video.controls = true;
      video.playsInline = true;

      viewerStage.replaceChildren(video);
      viewerTools.hidden = true;
    }

    viewer.showModal();
    lockScroll();
  }

  $("#rotateLeft").addEventListener("click", () => {
    rotation -= 90;
    applyRotation();
  });

  $("#rotateRight").addEventListener("click", () => {
    rotation += 90;
    applyRotation();
  });

  viewerClose.addEventListener("click", () => viewer.close());

  viewer.addEventListener("click", event => {
    if (event.target === viewer || event.target === viewerStage) {
      viewer.close();
    }
  });

  viewer.addEventListener("close", () => {
    viewerStage.replaceChildren();
    currentImage = null;
    unlockScrollIfIdle();
  });


  /* -------------------------------------------------------
     SERTIFIKAT
  ------------------------------------------------------- */

  document.querySelectorAll("[data-src]").forEach(card => {
    card.addEventListener("click", () => {
      openViewer(card.dataset.src, "image");
    });
  });


  /* -------------------------------------------------------
     MUSIK
  ------------------------------------------------------- */

  const audio = $("#audio");
  const playerBtn = $("#playerBtn");
  const playerFill = $("#playerFill");
  const playerBar = $("#playerBar");

  function syncPlayer() {
    const playing = !audio.paused;

    playerBtn.textContent = playing ? "Jeda" : "Putar";
    playerBtn.setAttribute("aria-label", playing ? "Jeda musik" : "Putar musik");
  }

  playerBtn.addEventListener("click", async () => {
    if (audio.paused) {
      try {
        await audio.play();
      } catch (error) {
        console.log("Audio belum dapat diputar:", error);
      }
    } else {
      audio.pause();
    }

    syncPlayer();
  });

  audio.addEventListener("play", syncPlayer);
  audio.addEventListener("pause", syncPlayer);

  audio.addEventListener("timeupdate", () => {
    if (!audio.duration) return;

    playerFill.style.width =
      `${(audio.currentTime / audio.duration) * 100}%`;
  });

  playerBar.addEventListener("click", event => {
    if (!audio.duration) return;

    const rect = playerBar.getBoundingClientRect();
    const ratio = (event.clientX - rect.left) / rect.width;

    audio.currentTime = Math.min(Math.max(ratio, 0), 1) * audio.duration;
  });

  syncPlayer();


  /* -------------------------------------------------------
     MENU AKTIF SAAT SCROLL
  ------------------------------------------------------- */

  const navLinks = [...document.querySelectorAll(".nav a")];

  if ("IntersectionObserver" in window) {
    const linkById = new Map(
      navLinks.map(link => [link.getAttribute("href").slice(1), link])
    );

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;

          navLinks.forEach(link => link.removeAttribute("aria-current"));

          const active = linkById.get(entry.target.id);
          if (active) active.setAttribute("aria-current", "true");
        });
      },
      { rootMargin: "-35% 0px -55% 0px" }
    );

    linkById.forEach((link, id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });
  }

})();
