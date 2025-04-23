import { Router } from "express";
import {
  getAllJobs,
  getJobById,
  createJob,
  updateJob,
  deleteJob,
  getDocNum,
} from "../controllers/controller.js";

const router = Router();

router.get("/", getAllJobs);
router.get("/docNum", getDocNum);
router.get("/:id", getJobById);
router.post("/", createJob);
router.put("/:id", updateJob);
router.delete("/:id", deleteJob);

export default router;
