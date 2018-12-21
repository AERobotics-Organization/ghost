/** ------------------ REGEX ---------------------- */
export const LOC = /\n|;/
export const WHITE_SPACE = /^\s*$/g
export const VARIABLES = /\$\w+/g
export const FOR_LOOP_STUBS = /@|\^/g
export const STATEMENT = /({.+?})\s*:\s*([^{]+)/

/** --------------- CONSTANTS --------------------- */
export const NEW_LINE = "\n"
export const TAB = "\t"
export const RADLEY_FUNCTION = "{ do: [function] } : "

/** --------------- VARIABLES --------------------- */
export const UNICODE_LOWERCASE_LETTERS = [97, 123]
