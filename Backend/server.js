import express from "express";
import connectDB from "./config/db.js";
import router from "./routes/router.js";

const app = express();
const PORT = process.env.PORT || 5000;
await connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/jobs", router);

app.listen(PORT, () => {
  console.log(`✅✅✅Server is running on port ${PORT}`);
});
