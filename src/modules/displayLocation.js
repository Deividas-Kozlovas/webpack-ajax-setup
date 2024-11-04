import ajaxService from "./ajaxService";
import { removeAllButOneDuplicateStrings } from "./utils/stringUtils";

async function displayLocation() {
  const locationDatalist = document.querySelector("#location-options");
  locationDatalist.innerHTML = "";
  const locationNames = await getLocations();
  const filteredLocations = removeAllButOneDuplicateStrings(locationNames);

  filteredLocations.forEach((location) => {
    const option = document.createElement("option");
    option.value = location;
    locationDatalist.appendChild(option);
  });
}

async function getLocations() {
  const locations = await ajaxService();
  return locations.map((location) => location.name);
}

export default displayLocation;
