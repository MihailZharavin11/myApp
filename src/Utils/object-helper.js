
export const updateObjectToArrays = (items,itemId,objPropsName,newObjProps) =>{
    return items.map(u => {
        if(u[objPropsName] === itemId ){
            return{
                ...u,
                ...newObjProps
            };
        }
        return u;
    });
};


