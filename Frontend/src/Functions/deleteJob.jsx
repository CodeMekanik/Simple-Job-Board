export async function deleteJob(_id) {
  const response = await fetch(`http://localhost:5000/api/jobs/${_id}`, {
    method: "DELETE",
  });

  const data = await response.json();

  console.log(data);
  if (!response.ok) {
    throw new Error("Failed to delete job");
  }
}
