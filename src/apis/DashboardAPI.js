import { api_get } from "./configs/axiosConfig";

export const DashboardAPI = {
    get_config: async function (cancel = false) {
        const response = await api_get('get_config',{},cancel).then(res=>{
            return res
        })
        return response.data
    },

}