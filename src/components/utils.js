

function get_Dim_by_ID(element) {

    var cs = getComputedStyle(element);
    
    var paddingX = parseFloat(cs.paddingLeft) + parseFloat(cs.paddingRight);
    var paddingY = parseFloat(cs.paddingTop) + parseFloat(cs.paddingBottom);

    var borderX = parseFloat(cs.borderLeftWidth) + parseFloat(cs.borderRightWidth);
    var borderY = parseFloat(cs.borderTopWidth) + parseFloat(cs.borderBottomWidth);

    // Element width and height minus padding and border
    var elementWidth = element.offsetWidth - paddingX - borderX;
    var elementHeight = element.offsetHeight - paddingY - borderY;

    return { "width" : elementWidth , "heigth" : elementHeight }

}


export default get_Dim_by_ID