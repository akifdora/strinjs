module.exports = (arg) => {
    
    const str = arg.toString();

    function capitalizeFirstLetter() {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    
    function lowercaseFirstLetter() {
        return str.charAt(0).toLowerCase() + str.slice(1);
    }
    
    function randomString() {
        let length = str.length;
        let newStr = (Math.random() + length).toString(36).substring(length);
        
        return newStr;
    }
    
    function reverseString() {
        let newStr = "";
    
        for (let index = str.length-1; index >= 0; index--) {
            newStr += str[index];
        }
        
        return newStr;
    }


}