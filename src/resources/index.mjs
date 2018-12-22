/** ------------------ REGEX ---------------------- */
export const VARIABLES = /\$\w+/g
export const BLANK_LINE = /^\s*$/g
export const LINES_OF_CODE = /\n|;/
export const FOR_LOOP_STUBS = /@|\^/g
export const LEADING_WHITE_SPACE = /\S|$/
export const STATEMENT = /(\s*)({.+?})\s*:\s*([^{]+)/

/** --------------- CONSTANTS --------------------- */
export const TAB = "\t"
export const NEW_LINE = "\n"

/** --------------- VARIABLES --------------------- */
export const UNICODE_LOWERCASE_LETTERS = [97, 123]

/** --------------- FUNCTIONS --------------------- */
export const OUT_BLANK_LINES = function (line) {
    return !BLANK_LINE.test(line)
}
