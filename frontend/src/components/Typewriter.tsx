import  { useState, useEffect } from 'react';


function Typewriter(prop:{ text:string, delay:number,infinite:Boolean }):JSX.Element  {
    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    //code for typewriting only one time

    // useEffect(() => {
    //     if (currentIndex < prop.text.length) {
    //         // create a timeout function which sets the text and index acc to the delay
    //         const timeout = setTimeout(() => {
    //             setCurrentText(prevText => prevText + prop.text[currentIndex]);
    //             setCurrentIndex(prevIndex => prevIndex + 1);
    //         }, prop.delay);

    //         return () => clearTimeout(timeout);
    //     }
    // }, [currentIndex, prop.delay, prop.text]);


    // doing the typewriting infinite times
    useEffect(() => {

        let timeout:any;

        if (currentIndex <= prop.text.length) {
            // create a timeout function which sets the text and index acc to the delay
            const timeout = setTimeout(() => {
                setCurrentText(prevText => prevText + prop.text[currentIndex]);
                setCurrentIndex(prevIndex => prevIndex + 1);
            }, prop.delay);
            return () => clearTimeout(timeout);
        }
    
        else if(prop.infinite==true){
            setCurrentIndex(0);
            setCurrentText('');
            
        }

        return () => clearTimeout(timeout);

            
        }, [currentIndex, prop.delay,prop.infinite, prop.text]);


    return <span>{currentText}</span>
};

export default Typewriter;