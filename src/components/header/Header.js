import { LogoComponent } from "@core/LogoComponent";
import { headerTemplate } from "./headerTemplate";

export class Header extends LogoComponent {
  static dataComponent = "data-header";
  static className = "header";
  static descriptionCounter = 1;

  constructor(node, options) {
    super(node, {
      events: [],
    });
    this.options = options;
  }

  toHTML = () => headerTemplate(this);
}
