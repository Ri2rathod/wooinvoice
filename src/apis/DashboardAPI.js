import { api_get, api_post } from "./configs/axiosConfig";

export const DashboardAPI = {
    get_config: async function (cancel = false) {
        const response = await api_post('get_data',{},cancel).then(res=>{
            return res
        })
        return response.data
    },

}