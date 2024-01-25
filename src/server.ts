import mongoose from "mongoose";
import app from "./app";
import config from "./app/config";

async function main() {
  try {
    await mongoose.connect(config.db_url as string);

    app.listen(5500, () => {
      console.log(`SERVER is listening to the PORT: ${config.port}`);
    });
  } catch (err) {
    console.log(err);
  }
}

main();
