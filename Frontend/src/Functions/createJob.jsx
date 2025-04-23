export async function createJob(job) {
  try {
    const response = await fetch("http://localhost:5000/api/jobs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(job),
    });
    if (!response.ok) {
      throw new Error("Failed to create job");
    }
    const data = await response.json();
    console.log("data", data);
  } catch (error) {
    console.log(error);
  }
}
