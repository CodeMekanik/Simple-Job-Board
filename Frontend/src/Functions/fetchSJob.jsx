export async function fetchSJob(id) {
  let errorFetching = false;
  let errorGotten = false;
  let job = null;
  let loading = true;

  try {
    const response = await fetch(`http://localhost:5000/api/jobs/${id}`);

    if (!response.ok) {
      errorFetching = true;
      const data = await response.json();
      errorGotten = data;
      loading = false;
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    job = data;
    console.log("✅✅  Job recieved succcssfully");
    loading = false;
  } catch (error) {
    console.log(error);
  }
  return { errorFetching, errorGotten, job, loading };
}
