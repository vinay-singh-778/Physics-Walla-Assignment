const initialState= {
};

const PageLoadReducer = (state=initialState, action) => {
    switch(action.type){
        case "APP_LOAD":
            return {...initialState};
        case "APP_LOAD_SUCCESS":
            return action.payload
        case "APP_LOAD_FAIL":
            return initialState;
        default :
            return state;
    }
}

export default PageLoadReducer;