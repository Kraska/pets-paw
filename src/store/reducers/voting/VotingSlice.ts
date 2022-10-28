import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IVote } from "models/IVote";


type VotingSatate = {
    votes: IVote[] | null,
    isLoading: boolean,
    error: string,
}

const initialState: VotingSatate = {
    votes: null,
    isLoading: false,
    error: '',
}

export const votingSlice = createSlice({
    name: 'voting',
    initialState,
    reducers: {
        fatching(state) {
            state.isLoading = true;
        },
        fatchingSuccess(
            state, 
            action: PayloadAction<IVote[]>
        ) {
            state.isLoading = false;
            state.error = '';
            state.votes = action.payload;
        },
        fatchingError(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
        },
        addVote(state, action: PayloadAction<IVote>) {
            state.votes = state.votes || []
            state.votes.push(action.payload);
        }
    }
})

export const votingReducer = votingSlice.reducer;
