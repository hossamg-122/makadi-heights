// there are two ways in handling the website content 

// first way : is setting the content in one single file (local data) so if we want to make any change to that content we will edit in one place
// which follows reusability concepts and it's also helpful if the website have multiple languages.

// second way : is fetching the content from data base with an api.

// here I'm using the two methods by putting the content in a local file and simulating fetching content from DB method with dummy api by using the power of axios interceptors

import axios from "axios";
import { localData } from "../LocalData/data";
const dummyApi = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/todos",
});

dummyApi.interceptors.response.use((res) => {
  return localData;
});
export default dummyApi;
