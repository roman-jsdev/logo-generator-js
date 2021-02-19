import { LogoComponent } from "@core/LogoComponent";
import { renderInput, renderWelcome, renderFonts } from "@/pages/pages";
import {
  reRender,
  validateInput,
  responsiveApp,
  responsiveTitle,
} from "@core/utils";

export class Buttons extends LogoComponent {
  static dataComponent = "data-buttons";
  static className = "main-button-wrapper";

  constructor(node, options) {
    super(node, {
      events: ["click"],
    });
    this.options = options;
  }

  toHTML = () => `
      <button class="main-button" data-page="${this.options.buttonPage}">
        ${this.options.buttonTitle}
      </button>
    `;

  onClick = ({
    target: {
      dataset: { page },
    },
  }) => {
    switch (page) {
      case "renderWelcome":
        localStorage.clear();
        reRender(renderWelcome, renderInput);
        break;
      case "renderInput":
        if (validateInput("input")) {
          reRender(renderInput, renderFonts);
          responsiveApp(992);
          responsiveTitle();
        }
        break;
      default:
        break;
    }
  };
}
