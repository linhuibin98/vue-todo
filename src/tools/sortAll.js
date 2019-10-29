export default function sortAll(self, res, comp) {
  let flag = false;
  for (let i = 0; i < res.length; i++) {
    // all 排序
    if (res[i].selected) {
      self.projectResources.all.res.splice(i, 0, ...comp);
      flag = true;
      break;
    }
  }
  !flag ? self.projectResources.all.res.push(...comp) : null; // 没找到时,直接加在尾部
}
