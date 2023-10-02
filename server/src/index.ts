const Express = require("express");
/* eslint-disable  @typescript-eslint/no-explicit-any */

const app = Express();
const port = 3000;

app.get("/", (req: any, res: any) => {
  res.send("Hello from exoress");
});

app.listen(port, (err: any) => {
  if (err) {
    console.log(err);
  }
  console.log("Server running on port");
});
