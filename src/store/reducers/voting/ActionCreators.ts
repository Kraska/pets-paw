import axios, { AxiosError } from "axios";
import { AppConfig } from "config";
import { IVote } from "models/IVote";
import { AppDispatch } from "../../store";
import { votingSlice } from "./VotingSlice"; 

export const fetchVotes = () => async(dispatch: AppDispatch) => {

    try {
        // console.log('fetchVotes')
        dispatch(votingSlice.actions.fatching())
        const resp = await axios.get<IVote[]>(
            "https://api.thecatapi.com/v1/votes", 
            {
                headers: { 
                    "Content-Type": "application/json",
                    "x-api-key": AppConfig.CAT_API_KEY
                },
                params: { sub_id: AppConfig.CAT_API_USER_ID } 
            }
        );

        // console.log('resp.data', resp.data)
        const data: IVote[] = resp.data
            .map(({ id, image_id, image, created_at, value }) => ({ 
                id, 
                image_id, 
                image,
                created_at,
                value,
            }));

        dispatch(votingSlice.actions.fatchingSuccess(data));
    } catch(e) {
        dispatch(votingSlice.actions.fatchingError((e as AxiosError).message))
    }
};


export const addVote = (image_id: string, value: 1|0) => async(dispatch: AppDispatch) => {

    try {

        const vote = { image_id, sub_id: AppConfig.CAT_API_USER_ID, value };
        const resp = await axios.post(
            "https://api.thecatapi.com/v1/votes",
            vote, 
            {
                headers: { 
                    "Content-Type": "application/json",
                    "x-api-key": AppConfig.CAT_API_KEY
                }
            }
        );
        
        resp.data && 
        resp.data.message && 
        resp.data.message == 'SUCCESS' &&
        dispatch(votingSlice.actions.addVote({ ...vote, created_at: new Date().toISOString()}));

    } catch(e) {
        dispatch(votingSlice.actions.fatchingError((e as AxiosError).message))
    }
};