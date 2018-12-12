export const LOC = /\n|;/
export const VARIABLES = /\$\w+/g
export const WHITE_SPACE = /^\s$/g
export const FOR_LOOP = /\s*for\s*\(.+\)\s*{/
export const FOR_LOOP_PARSE = /\s*(.+):\s*for\s*\((.+)\)/
export const FOR_LOOP_CLOSE = /\s*}\s*/
export const STATEMENT = /\s*\w+/
export const STATEMENT_PARSE = /\s*((\w+):)*(.+)/
