export const type = (val) => {
  const initType = Object.prototype.toString.call(val);
  return initType.replace(/(^\[object )([a-zA-Z]+)(\]$)/, "$2").toLowerCase();
};

export function isObject(val) {
  return type(val) === "object";
}
