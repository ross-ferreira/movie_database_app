  export const reset = () => {
    return {
      type: "RESET",
    }; 
  };

  export const setCurrentPageNo = (selectedPage) => {
    return {
      type: "SETCURRENTPAGE",
      selectPage:selectedPage,
    }; 
  };

  export const setLoading = () => {
    return {
      type: "setloading",
    }; 
  };


  