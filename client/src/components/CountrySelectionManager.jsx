import { useState } from "react";

function CountrySelectionManager() {
  const [selectedCountry, setSelectedCountry] = useState(null);

  const manageCountrySelection = (country) => {
    setSelectedCountry(country);
  };

  return { selectedCountry, manageCountrySelection };
}

export default CountrySelectionManager;
