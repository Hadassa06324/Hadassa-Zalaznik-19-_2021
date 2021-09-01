export const setSelectedLocation = (location) => {
    return { type: 'SET_SELECTED_LOCATION', payload: location }
}

export const addFavoriteLocation = (location) => {
    return { type: 'ADD_FAVORITE_LOCATION', payload: location }
}

export const deleteFavoriteLocation = (location) => {
    return { type: 'DELETE_FAVORITE_LOCATION', payload: location }
}

export const viewfavorite = (location) => {
    return { type: 'VIEW_FAVORITE', payload: location }
}

