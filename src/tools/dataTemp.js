import getOwnId from '@/tools/getOwnId';

export default function dataTemp(name) {
  return {
    [name]: {
      name,
      __id__: getOwnId(),
      projectResources: {
        all: {
          type: 'all',
          res: [],
        },
        ongoing: {
          type: 'ongoing',
          res: [],
        },
        completed: {
          type: 'completed',
          res: [],
        },
      },
    },
  };
}
