
export const STRINGS = /['"`][^'"`]+['"`]/g
export const ARGUMENTS = /\((.+)\)/

export const WITH_SUFFIX = function (string) {
    return new RegExp(`${string}[\\w.]*`, 'g')
}
