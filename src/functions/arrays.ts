export function random_number_arrays(elements: any[]){
    return elements.map(element => ({value: element, eleatory: Math.random()}))
                   .sort((obj1, obj2) => obj1.eleatory - obj2.eleatory)
                   .map(({ value }) => value)
}