"use client";

import { useEffect } from "react";
import { homeMarkup } from "./homeMarkup";

const tourViews = {
  dashboard: {
    image: "/assets/product/dashboard.png",
    alt: "SamvaadAI hospital dashboard showing appointments, patient metrics, and doctor schedules",
    kicker: "Daily command center",
    title: "See the day clearly, from the first glance.",
    description:
      "Track patient activity, appointments, doctor schedules, and immediate priorities in a dashboard designed for busy hospital teams.",
  },
  analytics: {
    image: "/assets/product/analytics.png",
    alt: "SamvaadAI dashboard analytics showing activity charts and patient overview",
    kicker: "Performance overview",
    title: "Turn everyday activity into useful insight.",
    description:
      "Monitor appointment trends and review patient activity at a glance, so your operations team can spot patterns and respond quickly.",
  },
  patients: {
    image: "/assets/product/patients.png",
    alt: "SamvaadAI patient records page with search, filters, and appointment history",
    kicker: "Patient records",
    title: "Keep every patient story easy to find.",
    description:
      "Search records, review visit details, track assigned doctors, and keep the information your team needs within easy reach.",
  },
  doctors: {
    image: "/assets/product/doctors.png",
    alt: "SamvaadAI doctors page showing specialties, schedules, and duty status",
    kicker: "Team availability",
    title: "Know who is available when care is needed.",
    description:
      "Manage doctor profiles, specialties, schedules, and duty status in one view for faster coordination across the hospital.",
  },
  prescriptions: {
    image: "/assets/product/prescriptions.png",
    alt: "SamvaadAI digital prescription form with medicine and follow-up controls",
    kicker: "Digital prescriptions",
    title: "Close the loop with a clear follow-up plan.",
    description:
      "Create prescriptions, add medicines and notes, define follow-up windows, and send the next step to the patient with confidence.",
  },
};

export default function HomePage() {
  useEffect(() => {
    const modal = document.querySelector(".video-modal");
    const modalVideo = modal?.querySelector("video");
    const menuButton = document.querySelector(".menu-button");
    const header = document.querySelector(".site-header");
    const startupIntro = document.querySelector("[data-startup-intro]");
    let startupTimer;

    const hideStartupIntro = () => {
      clearTimeout(startupTimer);
      startupIntro?.classList.add("is-hidden");
      document.body.classList.remove("intro-playing");
    };

    document.body.classList.add("intro-playing");
    startupTimer = window.setTimeout(hideStartupIntro, 6000);

    const skipButton = document.querySelector("[data-skip-intro]");
    skipButton?.addEventListener("click", hideStartupIntro);

    const openVideoButtons = [...document.querySelectorAll("[data-open-video]")];
    const openVideo = () => {
      modal?.showModal();
      modalVideo?.play();
    };
    openVideoButtons.forEach((button) => button.addEventListener("click", openVideo));

    const closeButton = document.querySelector("[data-close-video]");
    const closeVideo = () => modal?.close();
    closeButton?.addEventListener("click", closeVideo);

    const backdropClose = (event) => {
      if (event.target === modal) modal.close();
    };
    modal?.addEventListener("click", backdropClose);

    const pauseVideo = () => modalVideo?.pause();
    modal?.addEventListener("close", pauseVideo);

    const toggleMenu = () => {
      const isOpen = header?.classList.toggle("menu-open");
      menuButton?.setAttribute("aria-expanded", String(Boolean(isOpen)));
    };
    menuButton?.addEventListener("click", toggleMenu);

    const navLinks = [...document.querySelectorAll(".site-nav a")];
    const closeMenu = () => {
      header?.classList.remove("menu-open");
      menuButton?.setAttribute("aria-expanded", "false");
    };
    navLinks.forEach((link) => link.addEventListener("click", closeMenu));

    const tourButtons = [...document.querySelectorAll("[data-tour-view]")];
    const tourHandlers = new Map();
    tourButtons.forEach((button) => {
      const handler = () => {
        const viewName = button.dataset.tourView;
        const view = tourViews[viewName];
        const image = document.querySelector("[data-tour-image]");
        if (!view || !image) return;

        tourButtons.forEach((tab) => {
          const isActive = tab === button;
          tab.classList.toggle("is-active", isActive);
          tab.setAttribute("aria-selected", String(isActive));
        });

        image.classList.add("is-changing");
        window.setTimeout(() => {
          image.src = view.image;
          image.alt = view.alt;
          document.querySelector("[data-tour-route]").textContent = viewName;
          document.querySelector("[data-tour-kicker]").textContent = view.kicker;
          document.querySelector("[data-tour-title]").textContent = view.title;
          document.querySelector("[data-tour-description]").textContent = view.description;
          image.classList.remove("is-changing");
        }, 150);
      };
      tourHandlers.set(button, handler);
      button.addEventListener("click", handler);
    });

    const year = document.querySelector("#year");
    if (year) year.textContent = new Date().getFullYear();

    return () => {
      clearTimeout(startupTimer);
      document.body.classList.remove("intro-playing");
      skipButton?.removeEventListener("click", hideStartupIntro);
      openVideoButtons.forEach((button) => button.removeEventListener("click", openVideo));
      closeButton?.removeEventListener("click", closeVideo);
      modal?.removeEventListener("click", backdropClose);
      modal?.removeEventListener("close", pauseVideo);
      menuButton?.removeEventListener("click", toggleMenu);
      navLinks.forEach((link) => link.removeEventListener("click", closeMenu));
      tourHandlers.forEach((handler, button) => button.removeEventListener("click", handler));
    };
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: homeMarkup }} />;
}
