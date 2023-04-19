const SetTitle = (state, payload) => {


   return {
     ...state,
     inputFields: {
       ...state.inputFields,
       question: payload,
     },
   };
}
 
export default SetTitle;