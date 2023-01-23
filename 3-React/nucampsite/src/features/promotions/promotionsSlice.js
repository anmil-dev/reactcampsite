import { PROMOTIONS } from '../../app/shared/PROMOTIONS';
import { createSlice } from '@reduxjs/toolkit';

export const selectFeaturedPromotion = () => {
    return PROMOTIONS.find((promotion) => promotion.featured);
};

const initialState = {
    promotionsArray: PROMOTIONS
};

const promotionsSlice = createSlice({
    name: 'promotions',
    initialState
});

export const promotionsReducer = promotionsSlice.reducer;

export const selectFeaturedPromotion = (state) => {
    return state.promotions.promotionsArray.find((promotion) => promotion.featured);
};
