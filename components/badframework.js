// class Component{
//     /**
//      * @param {string} type 
//      * @param {string} className 
//      */
//     constructor(type, className=""){
//         const el = document.createElement(type)
//         if(className.length > 1){
//             const classArr = className.split(" ")
//             el.classList.add(...classArr)
//         }
//         return el;
//     }
// }

/**
* @param {string} type 
* @param {string} className 
*/
function Component(type, className=""){
    const el = document.createElement(type)
    if(className.length > 1){
        const classArr = className.split(" ")
        el.classList.add(...classArr)
    }
    return el;
}
export {Component}