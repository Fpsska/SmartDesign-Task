export function filterByBrand(array, sortArg) {
    switch (sortArg) {
        case '':
            return array;
        case sortArg:
            return array.filter(item => item.brand === sortArg);
        default:
            return array;
    };
};