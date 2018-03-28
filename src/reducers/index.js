import { combineReducers } from 'redux';
import { topstories, topstoriesError, topstoriesLoading } from './topstories';

export default combineReducers({
    topstories,
    topstoriesError,
    topstoriesLoading,
});
