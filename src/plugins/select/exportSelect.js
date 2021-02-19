import { addStyles, reRender, storage } from "@core/utils";
import { renderIcons } from "@/pages/pages";
import { Select } from "./select";

export const selectPlugin = () =>
  new Select("#select", {
    placeholder: "Please select element",
    selectedId: storage("selectedLib") || "Line",
    data: [
      { id: "Line", value: "Line Icons" },
      { id: "Simple", value: "Simple Icons" },
      { id: "Fancy", value: "Fancy Icons" },
      { id: "Elegant", value: "Elegant Icons" },
    ],
    onSelect(item) {
      storage("selectedLib", item.id);
      reRender(renderIcons, renderIcons);
      selectPlugin();
      addStyles(storage("icons"));
    },
  });
