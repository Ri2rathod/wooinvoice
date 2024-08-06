import axios from "axios";

export const api = axios.create({
    withCredentials:true,
    baseURL:window.wooinvoice.wooinvoice_ajax_url
})
export const api_get = (route,data,cancel=false)=>api.request({
    method: "GET",
    params:{
        ...data,
        route_name : route,
        _ajax_nonce:wooinvoice._ajax_nonce,
        action:"wooinvoice_ajax"
    },
    // retrieving the signal value by using the property name
    signal: cancel ? cancelApiObject[this.get.name].handleRequestCancellation().signal : undefined,
})
export const api_post = (route,data,cancel=false)=>api.request({
    method: "POST",
    params:{
        ...data,
        _ajax_nonce:wooinvoice._ajax_nonce,
        route_name : route,
        action:"wooinvoice_ajax"
    },
    // retrieving the signal value by using the property name
    signal: cancel ? cancelApiObject[this.get.name].handleRequestCancellation().signal : undefined,
})
// defining a custom error handler for all APIs
const errorHandler = (error) => {
    const statusCode = error.response?.status
  
    // logging only errors that are not 401
    if (statusCode && statusCode !== 401) {
      console.error(error)
    }
  
    return Promise.reject(error)
  }
  
  // registering the custom error handler to the
  // "api" axios instance
  api.interceptors.response.use(undefined, (error) => {
    return errorHandler(error)
  })