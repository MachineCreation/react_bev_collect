import { createSlice } from '@reduxjs/toolkit'

const rootSlice = createSlice({
    name: "root",
    initialState: {
        base_liquor: "Base Liquor",
        name: "Name",
        glass_type: "Class type",
        recipe: "recipe",
        comments: "Comments",
    },
    reducers: {
        chooseBase_liquor: (state, action) => { state.base_liquor = action.payload},
        chooseName: (state, action) => { state.name = action.payload},
        chooseGlass_type: (state, action) => { state.glass_type = action.payload},
        chooseRecipe: (state, action) => { state.recipe = action.payload},
        chooseComments: (state, action) => { state.comments = action.payload}
    }
})

export const reducer = rootSlice.reducer;
export const { chooseBase_liquor, chooseName, chooseGlass_type, chooseRecipe, chooseComments } = rootSlice.actions