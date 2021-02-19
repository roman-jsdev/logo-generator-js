import { LogoComponent } from "@core/LogoComponent";
import { storage } from "@core/utils";
import { logosFunctions } from "./logosFunctions";
import { logosTemplate } from "./logosTemplate";

export class Logos extends LogoComponent {
  static dataComponent = "data-logos";
  static className = "logos-wrapper";
  static likedLogos = [];

  constructor(node, options) {
    super(node, {
      events: ["click"],
    });
    this.options = options;
  }

  toHTML = () =>
    this.options.storageSaved
      ? storage("likedLogos").join("")
      : logosTemplate();

  onClick = logosFunctions;
}
