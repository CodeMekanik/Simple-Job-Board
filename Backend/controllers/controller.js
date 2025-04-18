import Job from "../models/Jobs.js";
import { isValidObjectId } from "mongoose";

export async function getAllJobs(req, res) {
  try {
    const jobs = await Job.find();

    res.status(200).json(jobs);
  } catch (error) {
    console.log(error);
  }
}

export async function getJobById(req, res) {
  const { id } = req.params;
  const validId = isValidObjectId(id);
  try {
    if (!validId) {
      return res.status(400).json({ message: "Invalid job ID" });
    }
    const job = await Job.findById(id);
    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }
    res.status(200).json(job);
  } catch (error) {}
}

export function createJob(req, res) {
  try {
    const { title, company, category, description, location, salary } =
      req.body;
    const newJob = new Job({
      title,
      description,
      location,
      salary,
      company,
      category,
    });
    newJob.save();
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
}

export function updateJob(req, res) {
  console.log("updating job");
}

export function deleteJob(req, res) {
  console.log("deleting job");
}
