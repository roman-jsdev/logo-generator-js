import { renderWelcome, renderLiked } from "@/pages/pages";
import { responsiveApp, storage, query, queryAll } from "@core/utils";
import { responsiveTitle } from "./utils";

export const appInit = () => {
  if (storage("likedLogos") && storage("likedLogos").length) {
    renderLiked.render();
    renderLiked.init();
    responsiveApp(99999);
    responsiveTitle();
    queryAll("[data-like]").forEach(({ style }) => {
      style.display = "none";
    });
    query("[data-button]").textContent = "Create New Logo";
  } else {
    renderWelcome.render();
    renderWelcome.init();
  }
};
