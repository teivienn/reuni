/**
 * Return function that invokes all callbacks passed to arguments
 */
export function chain<A extends unknown[] = []>(
  ...callbacks: (((...args: A) => void) | null | undefined)[]
) {
  return (...args: A) => {
    callbacks.forEach((callback) => callback?.(...args));
  };
}
