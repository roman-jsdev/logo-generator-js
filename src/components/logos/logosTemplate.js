import { storage, random } from "@core/utils";
import { generateColors, getContrast } from "./colorGenerator";

export const logosTemplate = () => {
  const icons = storage("icons");
  const fonts = storage("fonts");
  const color = storage("color");

  const randomProps = (prop) => prop[random(prop.length - 1)];

  return new Array(62)
    .fill("")
    .map((_) => {
      const icon = randomProps(icons);
      const font = randomProps(fonts);
      const randomColor = generateColors(color, random(11));
      const contrast = (prop) =>
        getContrast(randomColor, `${prop}_dark`, `${prop}_bright`);
      return `
    <div
      class="logo-card"
      data-card
      data-font="${font}"
      data-color="${color}"
      data-icon="${icon}"
    >
      <div class="logo-card__buttons">
        <div class="logo-card__buttons_save" data-save>
          <i class="fa fa-download"></i>
          <div
            class="logo-card__buttons_save_download"
            style="display: none"
          >
            <div data-download="PNG">PNG</div>
            <div data-download="JPG">JPG</div>
          </div>
        </div>
        <div class="logo-card__buttons_like" data-like>
          <i class="fa fa-heart"></i>
        </div>
      </div>
      <div
        class="logo-card__content ${random(1) ? "content_column" : ""}"
        style="background-color:${"#" + randomColor}"
      >
        <div
          class="logo-card__content_icon ${contrast("icon")}">
            <img src="${
              process.env.NODE_ENV === "production"
                ? `./src/icons/`
                : `./components/icons-grid/icons/`
            }${icon}.svg">
          </div>
        <div class="logo-card__content_title ${contrast("title")}">
          <div class="font-card__title">${storage("title")}</div>
        </div>
      </div>
    </div>
  `;
    })
    .join("");
};
