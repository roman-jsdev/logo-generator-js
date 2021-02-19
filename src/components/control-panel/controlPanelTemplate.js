import { storage } from "@core/utils";

export const controlPanelTemplate = ({
  options: { buttonType, counterType, storageSaved, buttonMultiButtons },
}) => {
  const counter = (type) => `
    <span class="control-panel__counter" data-counter>
      ${type === null ? 0 : type.length}
    </span>
  `;

  const button = (type) => `
    <button
      class="main-button"
      data-button="${type}"
    >
      ${type.charAt(0).toUpperCase() + type.slice(1) + " Logos"}
    </button>
  `;

  const counterTemplate = () => `
    <div class="control-panel__text">
      ${
        counterType === "icons"
          ? `Icons selected: ${counter(storage("icons"))}`
          : `Logos liked: ${counter(storage("logos"))}`
      }
    </div>
  `;

  return `
    ${storageSaved ? "" : counterTemplate()}
    <div class="main-button-wrapper">
      ${
        !buttonMultiButtons
          ? `${button(buttonType)}`
          : `${button(buttonType[0])}` + `${button(buttonType[1])}`
      }
    </div>
  `;
};
