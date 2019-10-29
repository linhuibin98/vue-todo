import sortAll from './sortAll';
import updateStorage from './updateStorage';

export default function checkedUpdate(opts) {
  const {
    type, index, self, data1, data2, data3,
  } = opts;
  let { res } = self.projectResources[type];
  const comp = self.projectResources[type].res.splice(index, 1);
  self.projectResources[data1].res.forEach((item, i) => {
    if (item.describe === comp[0].describe) {
      // eslint-disable-next-line prefer-destructuring
      res = self.projectResources.all.res;
      self.projectResources[data2].res.splice(i, 1);

      sortAll(self, res, comp);

      self.projectResources[data3].res.unshift(...comp);
    }
  });
  updateStorage(self); // 更新本地存储
}
