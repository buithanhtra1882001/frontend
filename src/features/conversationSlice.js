import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_URL, HTTP_STATUS } from "../app/constant";
import authHeader from "../services/auth-header";
import axios from 'axios';

export const fetchConversationData = createAsyncThunk(
    'conversation/fetchConversationData',
    async (guestId) => {
        const {data} = await axios.get(`${API_URL}/messages/conversation${guestId}`, { headers: authHeader() })
        return data
    }
)
const conversationSlice = createSlice({
    name: "conversation",
    initialState: {
        loading: null,
        data: []
    },
    reducers:{},
    extraReducers: {
        [fetchConversationData.pending](state) {
            state.loading = HTTP_STATUS.PENDING
        },
        [fetchConversationData.fulfilled](state, {payload}) {
            state.loading = HTTP_STATUS.FULFILLED
            state.data = payload.serversList
        },
        [fetchConversationData.rejected](state) {
            state.loading = HTTP_STATUS.REJECTED
        },
    }
})
export const selectConversation = (state) => state.conversation.data;
export default conversationSlice.reducer