export default function addItem(opts) {
  const {
    self, val, data1, data2,
  } = opts;
  const selected = opts.selected || false;
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
