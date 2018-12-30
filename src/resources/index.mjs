/** ------------------ REGEX ---------------------- */
export const VARIABLES = /\$\w+/g
export const BLANK_LINE = /^\s*$/g
export const FOR_LOOP_STUBS = /@|\^/g
export const LEADING_WHITE_SPACE = /\S|$/
export const STATEMENT = /(\s*)({.+?})\s*\|(.+)/

/** --------------- CONSTANTS --------------------- */
export const LOOP = "loop"
export const RETURN = "return"
export const ASSIGN = "assign"

/** --------------- VARIABLES --------------------- */
export const UNICODE_LOWERCASE_LETTERS = [97, 123]

/** --------------- FUNCTIONS --------------------- */
export const NON_BLANK_LINES = function (line) { return !BLANK_LINE.test(line) }
