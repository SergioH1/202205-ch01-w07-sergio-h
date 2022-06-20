export function findNumbers(path: String) {
    // let path = '/calculator?a=6&b=3';
    let path2 = path.split('?')[1];
    let path3 = path2.split('&');
    let path4 = path3[0].split('=');
    let path5 = path3[1].split('=');
    let numberA = Number(path4[1]);
    let numberB = Number(path5[1]);
    let numbers = [numberA, numberB];

    return numbers;
}
