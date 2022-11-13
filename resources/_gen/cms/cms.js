import { RoseControl } from "./Rose";
import { SimplePreview } from "./Simple";
import { setTitle } from "./setTitle";

CMS.registerWidget("rose", RoseControl, SimplePreview);

CMS.registerEventListener({
  name: "preSave",
  handler: ({ entry }) => {
    const dateString = entry
      .get("data")
      .get("date")
      .toLocaleDateString("en-nz");
    return entry.get("data").set("date_clone", dateString);
  },
});
