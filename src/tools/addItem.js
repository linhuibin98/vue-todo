export default function addItem(opts) {
  let {
    self, val, data1, data2, selected,
  } = opts;
  selected = selected || false;
  self.projectResources[data1].res.unshift({
    describe: val,
    selected: selected,
  });
  self.projectResources[data2].res.push({
    describe: val,
    selected: selected,
  });
  self.resouce.projectResources = self.projectResources;
}
