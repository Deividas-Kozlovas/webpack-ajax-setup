async function ajaxService() {
  try {
    const response = await fetch("https://api.meteo.lt/v1/places");

    if (!response.ok) {
      throw new Error(
        `Network response was not ok: ${response.status} - ${response.statusText}`
      );
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetch error:", error.message);
    return []; // Return an empty array in case of error
  }
}

export default ajaxService;
