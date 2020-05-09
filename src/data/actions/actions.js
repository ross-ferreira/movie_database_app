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

  export const setType = (selectedType) => {
    return {
      type: "SETTYPE",
      newTypeValue:selectedType,
    }; 
  };

  export const setPlot = (selectedPlot) => {
    return {
      type: "SETPLOT",
      newPlotValue:selectedPlot,
    }; 
  };


  export const setSearchForm = (formValues) => {
    return {
      type: "SETSEARCHFORM",
      newSearchValue:formValues,
    }; 
  };



  