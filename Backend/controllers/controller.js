import Job from "../models/Jobs.js";
import { isValidObjectId } from "mongoose";

export async function getDocNum(req, res) {
  try {
    const count = await Job.countDocuments();
    res.status(200).json({ count });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function getAllJobs(req, res) {
  const { limit, skip } = req.query;
  console.log("limit", limit, "skip", skip);
  try {
    const jobs = await Job.find().skip(skip).limit(limit);
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
    res.status(500).json({ message: error });
  }
}

export function updateJob(req, res) {
  console.log("updating job");
}

export async function deleteJob(req, res) {
  const { id } = req.params;
  const validId = isValidObjectId(id);
  try {
    if (!validId) {
      return res.status(400).json({ message: "Invalid job ID" });
    }
    const job = await Job.findByIdAndDelete(id);

    res.status(200).json({ message: `Job with ${id} deleted successfully ` });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
}
