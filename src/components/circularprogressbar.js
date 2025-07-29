import React from 'react'
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';

//CircularProgressbarsccss
import 'react-circular-progressbar/dist/styles.css';

const Circularprogressbar = (props) => {
    return (
        <div>
            <div style={props.style}>
                <CircularProgressbarWithChildren styles={{
                    width:props.width,
                    height:props.height,
                    trail:{
                        strokeWidth:props.strokewidth,
                        stroke:props.trailstroke,
                    },
                    path:{
                        stroke:props.stroke,
                        strokeLinecap:props.Linecap,
                    }
                }} value={props.value} id={props.id} className={props.className} >
                    {props.children}
                </CircularProgressbarWithChildren>
            </div>
        </div>
    )
}

export default Circularprogressbar
