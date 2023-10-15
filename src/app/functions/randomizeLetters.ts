import { Dispatch, SetStateAction } from "react";


const delay = (ms: number) => new Promise( resolve => setTimeout(resolve, ms));

const randomizeLetters = async (
    setFunction : Dispatch<SetStateAction<string>>, 
    oldWord : string,
    delayTimingOpt? : number,
    tickMaxOpt? : number,
    ) => {

    const letters : string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // Letters included in the iteration

    const delayTiming : number = delayTimingOpt? delayTimingOpt : 30; //Delay between letter switches
    const tickMax : number = tickMaxOpt? tickMaxOpt : 3; // Max itterations in each letter

    const oldWordBuffer = oldWord;
    const wordSize : number = oldWord.length;

    let newWord : string = "";

    for(let i = 0; i < wordSize; i++){

        let randomNumber = Math.floor(Math.random() * letters.length);

        newWord += letters[randomNumber];
    }

    setFunction(newWord);
    await delay(delayTiming);

    for(let i = 0; i < wordSize; i++){

        let tick = 0;

        while(true){

            let newWordChars = newWord.split("");

            for(let j = i; j < wordSize; j++){
                let randomNumber = Math.floor(Math.random() * letters.length);
                newWordChars[j] = letters[randomNumber];
            }

            if(tick >= tickMax){
                newWordChars[i] = oldWordBuffer[i];
            }

            newWord = newWordChars.join("");
            setFunction(newWord);
            tick++;

            await delay(delayTiming);

            if(newWordChars[i] === oldWordBuffer[i]){
                break;
            }

        }

    }

}

export default randomizeLetters;