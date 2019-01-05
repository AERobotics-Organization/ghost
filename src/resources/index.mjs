/** ------------------ REGEX ---------------------- */
export const META_STUBS = /@|\^/g
export const BLANK_LINE = /^\s*$/g
export const STATEMENT = /(\s*)(.+)/
export const LEADING_WHITE_SPACE = /\S|$/

/** --------------- CONSTANTS --------------------- */
export const LOOP = "loop"
export const RETURN = "return"
export const ASSIGN = "assign"

/** --------------- VARIABLES --------------------- */
export const UNICODE_LOWERCASE_LETTERS = [97, 123]

/** --------------- FUNCTIONS --------------------- */
export const NON_BLANK_LINES = function (line) { return !BLANK_LINE.test(line) }

export const CLEAN_CODE = function (code) {
    return code
        .split('\n')
        .filter(NON_BLANK_LINES)
}

export const CLEAN_META = function (meta) {
    return meta
        .split(',')
        .filter(NON_BLANK_LINES)
        .map(function (raw) { return raw.trim() })
        .reduce(function (metaObject, line) {
            const [keychain, value] = line.split('=')
            const keys = keychain.split('.')

            let runner = metaObject
            for (let i = 0; i < keys.length - 1; i++)
                runner = runner[keys[i]] || (runner[keys[i]] = {})

            runner[keys[keys.length - 1]] = JSON.parse(value)

            return metaObject
        }, {})
}

