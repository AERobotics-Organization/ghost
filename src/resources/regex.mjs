export const LOC = /\n|;/
export const OPENING_BRACE = /{/
export const CLOSING_BRACE = /}/
export const WHITE_SPACE = /^\s*$/g
export const VARIABLES = /\$\w+/g
export const FOR_LOOP_STUBS = /@|\^/g
export const STATEMENT = /({.+?})\s*:\s*([^{]+)/
