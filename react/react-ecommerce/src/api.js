import axios from "axios";

export const fetchPhoneApi = async () => {
  try {
    const apiData = await axios.get(
      "https://raw.githubusercontent.com/hexagonal707/apitest/main/phoneApiSlice.json",
    );

    console.log(apiData);

    return apiData.data;
  } catch (e) {
    console.log(e);
  }
};

export const fetchPhoneDetail = async (itemId) => {
  try {
    const apiData = await axios.get(
      "https://raw.githubusercontent.com/hexagonal707/apitest/main/phoneApiSlice.json",
    );

    console.log(apiData.data[itemId], "Phone Detail");

    return apiData.data[itemId];
  } catch (e) {
    console.log(e);
  }
};
