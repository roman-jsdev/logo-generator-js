import { storage } from "@core/utils";
import { descriptionArray, fontsObject } from "../../constants";

export const fontCardsTemplate = () =>
  Object.keys(fontsObject).map((font, index) => {
    let dataFont = `${font}`;
    fontsObject[font] ? (dataFont += ` ${fontsObject[font]}`) : dataFont;
    return `
    <div class="font-card" data-font="${dataFont}">
    <div class="font-card__title">${storage("title")}</div>
      <div class="font-card__description">
        ${descriptionArray[index]}
      </div>
    </div>
  `;
  });
