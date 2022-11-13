import { RoseControl } from "./Rose";

CMS.registerWidget("rose", RoseControl);

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
