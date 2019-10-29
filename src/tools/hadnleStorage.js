export function getStorage(key) {
  const res = localStorage.getItem(key);
  return (res && JSON.parse(res)) || '';
}

export function setStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}
