export const APP_LOAD = ()=>{
    return {
        type : "APP_LOAD"
    }
}
export const APP_LOAD_SUCCESS = (data)=>{
    return {
        type : "APP_LOAD_SUCCESS",
        payload : data
    }
}
export const APP_LOAD_FAIL = (error)=>{
    console.log(error);
    return {
        type : "APP_LOAD_FAIL",
    }
}
