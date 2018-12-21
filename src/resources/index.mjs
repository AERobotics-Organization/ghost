/** ------------------ REGEX ---------------------- */
export const LOC = /\n|;/
export const VARIABLES = /\$\w+/g
export const BLANK_LINE = /^\s*$/g
export const FOR_LOOP_STUBS = /@|\^/g
export const LEADING_WHITE_SPACE = /\S|$/
export const STATEMENT = /(\s*)({.+?})\s*:\s*([^{]+)/

/** --------------- CONSTANTS --------------------- */
export const NEW_LINE = "\n"
export const TAB = "\t"
export const RADLEY_FUNCTION = "{ do: ['function'] } : FUNC_STUB"

/** --------------- VARIABLES --------------------- */
export const UNICODE_LOWERCASE_LETTERS = [97, 123]
