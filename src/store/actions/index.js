// this is my actions file
import dummyApi from "../../Api's/dummyApi";
import weatherApi from "../../Api's/weatherApi";
//this action fetching the content of the web site but i use here dummy Api and axios interceptors to simulate fetching content from DB
export const fetchContent = () => {
  return async (dispatch) => {
    try {
      const response = await dummyApi.get("/1");
      dispatch({
        type: "content",
        payload: response,
      });
    } catch (error) {
      console.log(error.response);
    }
  };
};
// this action fetching the weather
export const fetchWeather = (lat, lon) => {
  return async (dispatch) => {
    try {
      const {data} = await weatherApi.get(
        `?lat=${lat}&lon=${lon}&appid=47dabdb70f29b8d91fab924df38b3def`
      );
      // I used that formula as response sends temperature in kelvin format
      
      dispatch({
        type: "weather",
        payload: { weatherIcon: data.weather[0].icon, temp: data.main.temp - 273.15 },
      });
    } catch (error) {
      console.log(error.response);
    }
  };
};
