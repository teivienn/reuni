export function isExist<T>(item: T | undefined | null): item is T {
  if (typeof item === 'string') {
    return item.trim() !== '';
  }

  if (Array.isArray(item)) {
    return !!item.length;
  }

  if (
    typeof item === 'object' &&
    Object.prototype.toString.call(item) === '[object Object]'
  ) {
    return !!Object.keys(item as object).length;
  }

  return item !== null && item !== undefined;
}
