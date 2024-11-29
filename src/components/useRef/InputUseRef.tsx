import React, { useRef } from "react";

const InputUseRef: React.FC = () => {
    const inputRef = useRef<HTMLInputElement | null>(null);
    
    const focusInput = () => {
        if(inputRef.current){
            inputRef.current.focus();
        }
    }


    return (
        <div>
            <h2>Hook useref</h2>
            <input ref={inputRef} type="text" placeholder="Focus me!"/>
            <button onClick={focusInput}>Focus Input</button>
        </div>
    );
}

export default InputUseRef;
