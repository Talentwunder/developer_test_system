export function topstoriesError(state = false, { type, topstoriesError }) {
    switch (type) {
        case 'TOPSTORIES_ERROR':
            return topstoriesError;

        default:
            return state;
    }
}

export function topstoriesLoading(state = false, { type, topstoriesLoading }) {
    switch (type) {
        case 'TOPSTORIES_LOADING':
            return topstoriesLoading;

        default:
            return state;
    }
}

export function topstories(state = [], { type, topstories }) {
    switch (type) {
        case 'TOPSTORIES_FETCHED':
            return topstories;

        default:
            return state;
    }
}
