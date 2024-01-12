export const dogReducerDefaultState = {
    favouriteDogs: []
};

const dogReducer = (state = dogReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_FAVOURITE_DOG':
            return {
                favouriteDogs: [
                    ...state.favouriteDogs,
                    action.favouriteDog,
                ],
            };
        case 'REMOVE_FAVOURITE_DOG':
            return {
                ...state,
                favouriteDogs: state.favouriteDogs.filter(({ id }) => id !== action.id)
            }
        default:
            return state;
    }
};

export default dogReducer;