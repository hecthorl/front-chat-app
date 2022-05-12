import v8n from 'v8n'
v8n.extend({
   myRule: () => value => !!value.match(/[^(\w\s)]/gim)
})

/**
 * @param {number} length
 * @param {string} value
 * @returns {boolean}
 */
export default function v8nFields(length, value) {
   return v8n().string().minLength(length).test(value)
}

/**
 * @param {string} value
 * @returns {boolean}
 */
export const checkSimbols = value => v8n().string().myRule().test(value)
