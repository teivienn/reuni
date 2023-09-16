/**
 * Return function that invokes all callbacks passed to arguments
 */
export declare function chain<A extends unknown[] = []>(...callbacks: (((...args: A) => void) | null | undefined)[]): (...args: A) => void;
