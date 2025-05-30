/**
 * deepClone
 * @description Creates a new instance of an object that removes all by reference relations with the passed in object
 * @param obj the object that is being cloned
 * @returns a new instance of an object with all by reference relationships removed
 * @example deepClone(myObject)
 */
export function deepClone(obj: any) {
  // return value is input is not an Object or Array.
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }
  if (obj instanceof Date) {
    return new Date(obj);
  }

  let clone;

  if (Array.isArray(obj)) {
    // unlink Array reference.
    clone = obj.slice();
  } else {
    // Unlink Object reference.
    clone = Object.assign({}, obj);
  }

  const keys = Object.keys(clone);

  // recursively unlink reference to nested objects.
  for (const key of keys) {
    clone[key] = deepClone(clone[key]);
  }

  // return unlinked clone.
  return clone;
}

// Object List Methods //

export function sortListByDateDescending(list: any[]): void {
  list.sort((a, b) => b.date.getTime() - a.date.getTime());
}

export function sortListByDateAscending(list: any[]): void {
  list.sort((a, b) => a.date.getTime() - b.date.getTime());
}
