export function fakultet(tall) {
    if (tall<=0) return 1;
    let result = 1;
    for (let i = 1; i <= tall; i++){
        result *= i;
    }
    return result;

}