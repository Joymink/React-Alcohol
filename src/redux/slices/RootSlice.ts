import { createSlice } from '@reduxjs/toolkit'

const rootSlice = createSlice({
    name: "root",
    initialState: {
        brand: "Brand",
        category: "Category",
        proof: "Proof",
        year: "Year",
        price: "Price",
    },
    reducers: {
        chooseBrand: (state, action) => { state.brand = action.payload},
        chooseCategory: (state, action) => { state.category = action.payload},
        chooseProof: (state, action) => { state.proof = action.payload},
        chooseYear: (state, action) => { state.year = action.payload},
        choosePrice: (state, action) => { state.price = action.payload}
    }
})

export const reducer = rootSlice.reducer;
export const { chooseBrand, chooseCategory, chooseProof, chooseYear, choosePrice} = rootSlice.actions