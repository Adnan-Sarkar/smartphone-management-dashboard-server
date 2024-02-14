/* eslint-disable no-console */
import mongoose from "mongoose";
import app from "./app";
import config from "./app/config";
import seedSuperAdmin from "./app/db";

async function main() {
  try {
    await mongoose.connect(config.db_url as string);

    // if somehow supper admin is delete from DB, then create again same super admin
    await seedSuperAdmin();

    app.listen(5500, () => {
      console.log(`SERVER is listening to the PORT: ${config.port}`);
    });
  } catch (err) {
    console.log(err);
  }
}

main();
