export function filterByManufacturer(array, sortArg) {
    switch (sortArg) {
        case '':
            return array;
        case sortArg:
            return array.filter(item => item.manufacturer === sortArg);
        default:
            return array;
    };
};

