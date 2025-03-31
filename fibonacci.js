export function fibonacci(n) {
    if (n <= 0) return 0;
    if (n <= 2) return 2;

    let prev = 1;
    let current = 1;

    for (let i = 3; i <= n; i++) {
        const next = prev + current;
        prev = current;
        current = next;
    }
    return current;
}