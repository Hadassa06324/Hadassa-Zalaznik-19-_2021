import produce from "immer";


const initialState = {
    selectedLocation: {
        Version: 1,
        Key: "215854",
        LocalizedName: "Tel Aviv",
        Country: "Israel",
        IsFavorite: false
    },
    favoriteLocation: [
    ]
}

const reducer = produce((state, action) => {
    switch (action.type) {
        case 'SET_SELECTED_LOCATION':
            state.selectedLocation = action.payload
            if (state.favoriteLocation.length > 0) {
                const result = state.favoriteLocation.find(({ Key }) => Key === action.payload.Key)
                if (result)
                    state.selectedLocation.IsFavorite = true
            }
            break;
        case 'ADD_FAVORITE_LOCATION':
            state.selectedLocation.IsFavorite = true
            state.favoriteLocation.push(action.payload)
            break;
        case 'VIEW_FAVORITE':
            state.selectedLocation = action.payload
            break;
        case 'DELETE_FAVORITE_LOCATION':
            state.favoriteLocation.splice(action.payload, 1)
            break;
        default:
            break;
    }
}, initialState)

export default reducer