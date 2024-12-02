import React,{useState,useRef, useLayoutEffect} from "react";

interface Dimensiones {
    width: number;
    height: number;
}

const ResizeUseLayoutEffect: React.FC = () => {

    const [dimensiones, setDimensiones] = useState<Dimensiones>({width:0,height:0});

    const divRef = useRef<HTMLDivElement | null>(null);

    useLayoutEffect(()=> {
        if(divRef.current){
            const {offsetWidth: width,offsetHeight: height} = divRef.current
            setDimensiones({width,height})
        }
    },[])

    return (
        <div>
            <h2>Probando useLayoutEffect para redimencionar </h2>
            <div
                ref={divRef}
                style={{
                width: '200px',
                height: '150px',
                backgroundColor: 'lightblue',
                }}>
                Resize me!
            </div>
            <p>Width: {dimensiones.width}px</p>
            <p>Height: {dimensiones.height}px</p>
        </div>
    );
}

export default ResizeUseLayoutEffect;
