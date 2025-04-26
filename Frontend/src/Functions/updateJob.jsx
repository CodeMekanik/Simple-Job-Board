export async function updateJob(jobId, jobData) {
  try {
    const response = await fetch(`http://localhost:5000/api/jobs/${jobId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(jobData),
    });
    console.log(response);
    const data = await response.json();
    if (!response.ok) {
      console.log(data);
      throw new Error("Network response was not ok");
    }
    console.log(data);
  } catch (error) {
    console.log();
    console.error("There was a problem with the fetch operation:", error);
  }
}
