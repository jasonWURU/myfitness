import { combineReducers } from 'redux';
import main from './mainReducer';
import auth from './authReducer';

export default combineReducers({
    main,
    auth
});