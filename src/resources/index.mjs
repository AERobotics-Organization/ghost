/** ------------------ REGEX ---------------------- */
export const VARIABLES = /\$\w+/g
export const BLANK_LINE = /^\s*$/g
export const FOR_LOOP_STUBS = /@|\^/g
export const LEADING_WHITE_SPACE = /\S|$/
export const STATEMENT = /(\s*)(\w+)\s*:\s*(.+)/

/** --------------- CONSTANTS --------------------- */
export const LOOP = "loop"
export const RETURN = "return"
export const ASSIGNMENT = "assignment"

export const TAB = "\t"
export const NEW_LINE = "\n"
export const AT_SYMBOL = "@"
export const SEMI_COLON = ";"
export const EQUAL_SYMBOL = "="
export const CARROT_SYMBOL = "^"

export const STATEMENT_DELIMITERS = { [LOOP]: SEMI_COLON, [ASSIGNMENT]: EQUAL_SYMBOL }

/** --------------- VARIABLES --------------------- */
export const UNICODE_LOWERCASE_LETTERS = [97, 123]

/** --------------- FUNCTIONS --------------------- */
export const NON_BLANK_LINES = function (line) { return !BLANK_LINE.test(line) }
