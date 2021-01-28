import {useState, useEffect} from 'react'

const useClick = (id) => {
    const [click, setClick] = useState(false);
    let counter = 1;
      useEffect(() => {
        document.getElementById(`${id}`).addEventListener("click", () => {
            counter++;
            counter % 2 === 0 ? setClick(true) : setClick(false);
        });
      }, [counter, id]);
      return {
          click,
          setClick
      }
}

export default useClick
