

export function getDistinctObjects<T>(objects: T[], field: keyof T): T[] {
    return objects.filter(
        (value, index, array) =>
            index ===
            array.findIndex((item) => item[field] === value[field])
    );
}
