import { RoseControl } from "./Rose";
import { SimplePreview } from "./Simple";
import { setTitle } from "./setTitle";

CMS.registerWidget("rose", RoseControl, SimplePreview);

CMS.registerEventListener({
  name: "preSave",
  handler: (obj) => {
    console.log(obj);
    console.log(obj.entry.get("data"));
    return obj.entry.get("data").set("date_clone", "new title");
  },
});
