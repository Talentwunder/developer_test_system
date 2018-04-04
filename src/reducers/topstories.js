/**
 * Updates the error state in the store.
 * 
 * @param {boolean} state 
 * @param {{type: string, topstoriesError: boolean}} param1 
 */
export function topstoriesError(state = false, { type, topstoriesError }) {
    switch (type) {
        case 'TOPSTORIES_ERROR':
            return topstoriesError;

        default:
            return state;
    }
}

/**
 * Updates the loading state in the store.
 * 
 * @param {boolean} state 
 * @param {{type: string, topstoriesLoading: boolean}} param1 
 */
export function topstoriesLoading(state = false, { type, topstoriesLoading }) {
    switch (type) {
        case 'TOPSTORIES_LOADING':
            return topstoriesLoading;

        default:
            return state;
    }
}

/**
 * Updates the topstories list in the store.
 * 
 * @param {boolean} state 
 * @param {{type: string, topstories: Array.<number>}} param1 
 */
export function topstories(state = [], { type, topstories }) {
    switch (type) {
        case 'TOPSTORIES_FETCHED':
            return topstories;

        default:
            return state;
    }
}
