import lodashGet from 'lodash.get';

export const noop = () => {}

export const get = (a, b, defaultVal) => lodashGet(a, b) || defaultVal

export const isNil = (a) => (a === undefined || a == null);

export const updateObject = (object, ...params) => Object.assign({}, object, ...params)
