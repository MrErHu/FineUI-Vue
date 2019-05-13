import { isArray } from 'lodash'

// 判断参数是否是其中之一
export function oneOf (value, validList = []) {
    if(isArray(validList)){
        return validList.indexOf(value) !== -1;
    }
    return false;
}
