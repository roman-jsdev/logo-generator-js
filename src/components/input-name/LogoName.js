import { LogoComponent } from "@core/LogoComponent";
import { reRender, validateInput, responsiveTitle } from "@core/utils";
import { renderFonts, renderInput } from "@/pages/pages";
import { responsiveApp } from "../../core/utils";

export class LogoName extends LogoComponent {
  static dataComponent = "data-name";
  static className = "logo-name";

  constructor(node, options) {
    super(node, {
      events: ["keydown"],
    });
    this.options = options;
  }

  toHTML = () => `
  <input
    class="logo-name__input"
    placeholder="Your Company's name"
    data-input
  >
  `;

  onKeydown = ({ keyCode }) => {
    if (keyCode === 13) {
      if (validateInput("input")) {
        reRender(renderInput, renderFonts);
        responsiveApp(992);
        responsiveTitle();
      }
    }
  };
}
