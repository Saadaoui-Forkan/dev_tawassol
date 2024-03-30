export const removeDuplicates = (data) => {
    return data.reduce((acc, curr) => acc.includes(curr) ? acc : [...acc, curr], [])
}