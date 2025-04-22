export const fetchPproducts = async (page, search) => {
  let fetchingJobs = true;
  let allJob = [];
  let errorFetch = false;
  let errorGot = false;
  let limit = 10;
  let skip = page > 1 ? (page - 1) * limit : 0;

  try {
    const response = await fetch(
      `http://localhost:5000/api/jobs?limit=${limit}&skip=${skip}`
    );
    const data = await response.json();
    fetchingJobs = false;
    if (!response.ok) {
      errorFetch = true;
      errorGot = data;
      throw new Error("Network response was not ok");
    }
    allJob = data;
    fetchingJobs = false;
  } catch (error) {}

  return {
    fetchingJobs,
    allJob,
    errorFetch,
    errorGot,
  };
};
