import { useEffect, useRef, useState } from "react"

export const useCountWords = (description) => {

    const [word, setWord] = useState(0)
    let ref = useRef(description)
    
    useEffect(() => {
        ref.current = description.replace(/(^\s*)|(\s*$)/gi, "");
        ref.current = description.replace(/[ ]{2,}/gi, " ");
        ref.current = description.replace(/\n /, "\n");
        ref.current = description.split(" ").length
     setWord(ref.current)
 }, [description])
 return {
     word,
     setWord
 }

}


