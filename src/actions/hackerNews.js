/**
 * API description can be found at https://github.com/HackerNews/API
 */

const TOPSTORIES_ENDPOINT = 'https://hacker-news.firebaseio.com/v0/topstories.json';

function topstoriesLoading(topstoriesLoading) {
    return {
        type: 'TOPSTORIES_LOADING',
        topstoriesLoading,
    };
}

function topstoriesError(topstoriesError) {
    return {
        type: 'TOPSTORIES_ERROR',
        topstoriesError,
    };
}

function topstoriesFetched(topstories) {
    return {
        type: 'TOPSTORIES_FETCHED',
        topstories,
    };
}

export function fetchTopstoriesIds() {
    return dispatch => {
        dispatch(topstoriesLoading(true));

        fetch(TOPSTORIES_ENDPOINT)
            .then(response => {
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                dispatch(topstoriesLoading(false));
                return response.json();
            })
            .then(topstories => {
                // TODO: Replace with fetching single items
                dispatch(topstoriesFetched(topstories));
            })
            .catch(() => {
                dispatch(topstoriesError(true));
            });
    };
}
