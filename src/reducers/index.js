import { combineReducers } from 'redux';
import WeatherReducer from '../reducers/reducer_weather';

const rootReducer = combineReducers({
  wather: WeatherReducer
});

export default rootReducer;
