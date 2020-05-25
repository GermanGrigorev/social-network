export const updateObjectInArray = (objArray, objKeyName, objKeyValue, newObjProps) => {
    return objArray.map(obj => {
        if(obj[objKeyName] === objKeyValue) {
            return {...obj, ...newObjProps}
        }
        return obj;
    })
};
