export async function getDocNum(params) {
  try {
    const response = await fetch("http://localhost:5000/api/jobs/docNum");
    const data = await response.json();
    return data.count;
  } catch (error) {}
}
