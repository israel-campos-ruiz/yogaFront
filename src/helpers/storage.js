
  export const getFromLocalStorage = (item) => {
      try {
        const serializedState = localStorage.getItem(item);
        if (serializedState === null) return '';
        return  JSON.parse(serializedState);
    
      } catch (error) {
          return '';
      }
  }

  export const saveLocalStorage = (name, value) =>{
     const valueToString =  JSON.stringify(value)
     return localStorage.setItem(name,valueToString)
    
  }
