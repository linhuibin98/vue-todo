import {getStorage} from './hadnleStorage';

export default function getFirstItem() {
  let res = getStorage('task');
  let id = 0;
  for (const key in res) {
    if (res.hasOwnProperty(key)) {
      id = res[key].__id__;
      break;
    }
  }
  return id;
}
