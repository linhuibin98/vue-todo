import { setStorage, getStorage } from './hadnleStorage';

function getOwnId() {
  // eslint-disable-next-line no-underscore-dangle
  let id = getStorage('__id__');
  if (id) {
    id = window.parseInt(id) + 1;
    setStorage('__id__', id);
  } else { // 创建第一个项目时的ID
    id = 1;
    setStorage('__id__', 1);
  }
  return id;
}

export default getOwnId;
