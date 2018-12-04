/** Tracks the variables in use */

export const register = new Set()
export const seekVar = function () { return 97 + Math.floor(Math.random() * 26) }
export const nextVar = function (variable = seekVar()) {
    while (register.has(variable = seekVar()));
    register.add(variable)
    return variable
}
