export const type = (val: any) => {
    const initType = Object.prototype.toString.call(val);
    return initType.replace(/(^\[object )([a-zA-Z]+)(\]$)/, "$2").toLowerCase();
};

export function isObject(val: any) {
    return type(val) === "object";
}
