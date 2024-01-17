const { connectDB } = require("./database/database");
const app = require("./app");
const port = 3001;

connectDB()
  .then((res: any) => {
    app.listen(port, () => {
      console.log(`[Server]: I am running at https://localhost:${port}`);
    });
    console.log("Connected to db.");
  })
  .catch((err: any) => console.log(err));
