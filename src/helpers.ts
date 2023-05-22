
// Filter an array of objects and return distinct objects getting each item by its index (field).
// If any element is duplicated, the filter will get ever the first coincidente, avoiding repeated objects.
export function getDistinctObjects<T>(objects: T[], field: keyof T): T[] {
    return objects.filter(
        (value, index, array) => index === array.findIndex((item) => item[field] === value[field])
    );
}
