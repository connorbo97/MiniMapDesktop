import lodashGet from 'lodash.get';

export const noop = () => {}

export const get = (a, b, defaultVal) => lodashGet(a, b) || defaultVal

export const updateObject = (object, ...params) => Object.assign({}, object, ...params)
