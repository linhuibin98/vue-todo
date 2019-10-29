/* eslint-disable */
import { getStorage, setStorage } from './hadnleStorage';

/**
 *
 *
 * @export 数据更新
 * @param {object} opts
 *   self  工作环境
 *
 */
export default function updateStorage(self) {
  const res = getStorage('task');
  for (const key in res) {
    if (res.hasOwnProperty(key)) {
      if (res[key].__id__ == self.resouce.__id__) {
        res[key] = self.resouce;
        setStorage('task', res);
        self.$parent.updateStorage();
        break;
      }
    }
  }
}
