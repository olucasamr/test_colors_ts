
function ChangeBackgroungColor (hex:string, element:HTMLElement):any {
    try{
        if(hex.includes("#")) {
            element.style.backgroundColor = hex;
        }
        else {
            element.style.backgroundColor = `#${hex}`;
        }
    }

    catch (error) {
        console.log(`Algo deu errado: ${error}`)
        
    }
    
};

export default ChangeBackgroungColor;