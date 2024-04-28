import axios from "axios";

export const fetchPhoneApi = async () => {
  try {
    const apiData = await axios.get(
      "https://raw.githubusercontent.com/hexagonal707/apitest/main/phoneApiSlice.json",
    );

    console.log(apiData);

    return apiData;
  } catch (e) {
    console.log(e);
  }
};
