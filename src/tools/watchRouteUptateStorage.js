/* eslint-disable */
import { getStorage } from './hadnleStorage';

export default function watchRouteUptateStorage(self) {
  let resouce = getStorage('task');
  resouce = resouce || {};
  // eslint-disable-next-line no-restricted-syntax
  for (const key in resouce) {
    // eslint-disable-next-line no-prototype-builtins
    if (resouce.hasOwnProperty(key)) {
      const item = resouce[key];
      // eslint-disable-next-line no-underscore-dangle
      if (item.__id__ === window.parseInt(self.$route.query.id)) {
        self.resouce = item;
        self.projectResources = item.projectResources || {};
      }
    }
  }
}
