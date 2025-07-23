import { createClient } from "redis";

const dbred = createClient();

dbred.on("error", (err) => console.log("Redis Client Error", err));

await dbred.connect();
export default dbred;
