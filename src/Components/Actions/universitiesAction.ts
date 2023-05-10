export const AddUniversityAction = (data: any, id: number,  values: any) => {
    
    const newData = [...data, { id: id, name: values.name, main: values.main, number: values.number, email: values.email }];
    
    return {
        type: 'SET_UNIVERSITIES_DATA', 
        payload: newData,
    };
};

export const DeleteUniversityAction = (data: any, id: number) => {

    const newData = data.filter((item : { id: number }) => item.id !== id);

    return {
        type: 'SET_UNIVERSITIES_DATA', 
        payload: newData,
    };
};