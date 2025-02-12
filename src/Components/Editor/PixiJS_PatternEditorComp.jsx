import React from "react";

import {initFor_HTMLElement} from "../../js/binaryPatternEditor_main"
import {setPaintableColor} from "../../js/binaryPatternEditor_main"

function PixiJS_PatternEditorComp() {
    var ref = React.useRef(null);

    React.useEffect(() => {
        initFor_HTMLElement(ref.current)
    }, [])

    return (<>
        <input onChange={(e) => {setPaintableColor(e.target.value)}}></input>

        {/* This is where it will attach to */}
        <div ref={ref}
            style={{textAlign:"center"}}
        ></div>
    </>)
}


export default PixiJS_PatternEditorComp;