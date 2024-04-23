import axios from "axios";

export const display = async () => {
  try {
    const apiValue = await axios.get(
      "https://www.themealdb.com/api/json/v1/1/categories.php",
    );

    return apiValue.data.categories;
  } catch (e) {
    console.error(e);
  }
};

export const displayFilteredData = async (index) => {
  try {
    const apiValue = await axios.get(
      "https://www.themealdb.com/api/json/v1/1/categories.php",
    );
    console.log("###################", apiValue);
    const filteredData = apiValue.data.categories.filter((li) => {
      return li.idCategory === index;
    });

    console.log("**********************", filteredData);
    return filteredData;
  } catch (e) {
    console.error(e);
  }
};

// export const displayDetail = async (index) => {
//   try {
//     const apiValue = await axios.get(
//       "https://www.themealdb.com/api/json/v1/1/categories.php",
//     );
//
//     // Fetch details for each category
//     // const categories = apiValue.data.categories;
//     // return await Promise.all(
//     //   categories.map(async (category) => {
//     //     const categoryDetails = await axios.get(
//     //       `https://www.themealdb.com/api/json/v1/1/categories.php?c=${category.strCategory}`,
//     //     );
//     //     return categoryDetails.data.categories[index]; // Extracting detailed category information
//     //   }),
//     // );
//
//     const filteredValue =
//   } catch (error) {
//     console.error(error);
//     return []; // Return empty array in case of error
//   }
// };

// export const displayData = async () => {
//   try {
//     const apiValue = await axios.get(
//       "https://www.themealdb.com/api/json/v1/1/categories.php",
//     );
//
//     return apiValue.data.categories;
//   } catch (e) {
//     console.error(e);
//   }
// };
