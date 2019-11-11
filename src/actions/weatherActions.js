import axios from 'axios';
import {
  SEARCH_PLACES,
  SELECT_PLACE,
  CLEAR_SEARCH,
  SET_ALERT,
  REMOVE_ALERT,
  GET_CURRENT_WEATHER,
  GET_TODAY_WEATHER,
  GET_FORECAST,
  SWITCH_LANG,
  SWITCH_UNITS,
  SET_LOADING
} from './types';

//Set alert
export const setAlert = msg => dispatch => {
  dispatch({ type: SET_ALERT, payload: { msg } });
  setTimeout(() => dispatch({ type: REMOVE_ALERT }), 3000);
};

//Search places to get weather for
export const searchPlaces = (text, lang) => async dispatch => {
  dispatch({ type: SET_LOADING });
  const config = {
    headers: {
      'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com',
      'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY
    }
  };
  const res = await axios.get(
    `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?limit=10&namePrefix=${text}&sort=-population&languageCode=${lang}`,
    config
  );
  if (res.data.data.length === 0) {
    const alert =
      lang === 'en'
        ? 'No cities found. Check the spelling and try again'
        : 'Ничего не найдено. Проверьте правильность написания и попробуйте снова';
    dispatch({ type: SET_ALERT, payload: alert });
    setTimeout(() => dispatch({ type: REMOVE_ALERT }), 5000);
  } else {
    console.log(res.data);
    dispatch({ type: SEARCH_PLACES, payload: res.data.data });
  }
};

//Select place in search and get weather for it
export const selectPlace = place => {
  return { type: SELECT_PLACE, payload: place };
};

//Get current weather
export const getWeather = (place, units) => async dispatch => {
  dispatch({ type: SET_LOADING });
  const { city, latitude, longitude } = place;
  const res = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=${units}&APPID=${process.env.REACT_APP_OPENWEATHER_KEY}`
  );
  const { timezone, dt, main, wind, weather, sys } = res.data,
    { temp, pressure, humidity } = main,
    { sunrise, sunset } = sys;
  const offset = new Date().getTimezoneOffset() * 60 + timezone;
  const current = {
    name: city,
    dt,
    temp,
    wind: wind.speed,
    pressure,
    humidity,
    weather: weather[0].main,
    sky: weather[0].description,
    icon: weather[0].icon,
    offset
  };
  if (current.temp.toFixed() === '-0') current.temp = 0;
  dispatch({ type: GET_CURRENT_WEATHER, payload: current });
  //Get forecast for 48 hours
  const resp = await axios.get(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=${units}&APPID=${process.env.REACT_APP_OPENWEATHER_KEY}`
  );
  const today = resp.data.list.slice(0, 16);
  today.map(period => {
    if (period.main.temp.toFixed() === '-0') period.main.temp = 0;
    //Change icons according to local time in requested place
    if (sunrise + 86400 < period.dt && period.dt < sunset + 86400) {
      period.weather[0].icon = period.weather[0].icon.slice(0, -1) + 'd';
    } else if (sunset < period.dt && period.dt < sunrise + 86400) {
      period.weather[0].icon = period.weather[0].icon.slice(0, -1) + 'n';
    } else if (sunrise < period.dt && period.dt < sunset) {
      period.weather[0].icon = period.weather[0].icon.slice(0, -1) + 'd';
    } else if (sunset - 86400 < period.dt && period.dt < sunrise) {
      period.weather[0].icon = period.weather[0].icon.slice(0, -1) + 'n';
    }
    return period;
  });
  dispatch({ type: GET_TODAY_WEATHER, payload: today });
  //Get forecast for 15 days
  const un = units === 'metric' ? 'M' : 'I';
  const respo = await axios.get(
    `https://api.weatherbit.io/v2.0/forecast/daily?lat=${latitude}&lon=${longitude}&units=${un}&key=${process.env.REACT_APP_WEATHERBIT_KEY}`
  );
  const forecast15 = respo.data.data.slice(1, 16);
  forecast15.map(async day => {
    if (day.max_temp.toFixed() === '-0') day.max_temp = 0;
    if (day.min_temp.toFixed() === '-0') day.min_temp = 0;
    return day;
  });
  dispatch({ type: GET_FORECAST, payload: forecast15 });
};

//Switch language
export const switchLang = lang => {
  return { type: SWITCH_LANG, payload: lang };
};

// Switch units
export const switchUnits = units => {
  return { type: SWITCH_UNITS, payload: units };
};

//Clear search
export const clearSearch = () => {
  return { type: CLEAR_SEARCH };
};
