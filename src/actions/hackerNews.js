/**
 * Exposes actions which might be executed by React components.
 * 
 * API description can be found at https://github.com/HackerNews/API
 * 
 * @author Timo Hanisch
 */

const TOPSTORIES_ENDPOINT = 'https://hacker-news.firebaseio.com/v0/topstories.json';

/**
 * Returns an action object which can be dispatched and indicates 
 * that topstories are loading.
 * 
 * @param {boolean} topstoriesLoading 
 */
function topstoriesLoading(topstoriesLoading) {
    return {
        type: 'TOPSTORIES_LOADING',
        topstoriesLoading,
    };
}

/**
 * Returns an action object which can be dispatched and indicates 
 * that topstories had an error while loading.
 * 
 * @param {boolean} topstoriesError 
 */
function topstoriesError(topstoriesError) {
    return {
        type: 'TOPSTORIES_ERROR',
        topstoriesError,
    };
}

/**
 * Returns an action object which can be dispatched and passes the 
 * loaded topstories to the store.
 * 
 * @param {Array.<number>} topstories 
 */
function topstoriesFetched(topstories) {
    return {
        type: 'TOPSTORIES_FETCHED',
        topstories,
    };
}

/**
 * Returns a dispatchable function
 */
export function fetchTopstoriesIds() {
    return dispatch => {
        // Update loading state
        dispatch(topstoriesLoading(true));

        // Call the API to fetch topstories
        fetch(TOPSTORIES_ENDPOINT)
            .then(response => {
                // If something went wrong, lets throw an error
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                // If everything worked out, update the loading state
                // and pass the JSON down the promise chain
                dispatch(topstoriesLoading(false));
                return response.json();
            })
            .then(topstories => {
                // TODO: Replace with fetching single items
                dispatch(topstoriesFetched(topstories));
            })
            .catch(() => {
                // Something went wrong, update the error state
                dispatch(topstoriesError(true));
            });
    };
}
