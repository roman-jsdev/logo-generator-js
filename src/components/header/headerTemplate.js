import { Header } from "./Header";
import { storage } from "@core/utils";

export const headerTemplate = ({
  options: {
    headerTitle,
    headerDescription,
    headerDescriptionCounter,
    headerCustom,
    selectTitle,
  },
}) => `
  <div class="header__title">
    ${headerTitle}
  </div>
  <div class="header__description">
    ${headerDescription}
    ${
      headerDescriptionCounter && Header.descriptionCounter < 7
        ? `(${Header.descriptionCounter}/6)`
        : ""
    }
    ${headerCustom ? storage("title") + "?" : ""}
  </div>
  ${selectTitle ? '<div class="select-title">Choose from library</div>' : ""}
`;
