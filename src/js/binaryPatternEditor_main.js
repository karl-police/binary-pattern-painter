console.log("Test.")


// This sets up the Binary Pattern Editor

import PixiJS_BinaryPatternEditor, {config} from "./classes/PixiJS_BinaryPatternEditor";

export function setPaintableColor(text) {
    config.drawColor = text    
}

export function initFor_HTMLElement(elem) {
    PixiJS_BinaryPatternEditor.initFor_HTMLElement(elem);
}


export default ""