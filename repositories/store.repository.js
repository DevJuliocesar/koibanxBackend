const Store = require('../models/store.model');

const addFilter = (filter, q) => {
  if (filter) {
    const rgx = (pattern) => new RegExp(`.*${pattern}.*`);
    const searchRgx = rgx(filter);
    return {
      ...q,
      $or: [
        { name: { $regex: searchRgx, $options: 'i' } },
        { cuit: { $regex: searchRgx, $options: 'i' } },
      ],
    };
  }
  return q;
};

exports.list = async (q = {}, filter = '', sort, dir, skip, max, page = 1, limit = 10) => {
  skip = skip || (page - 1) * limit;
  limit = max || limit;
  const sortObj = sort && dir ? ({ [sort]: dir }) : {};

  q = addFilter(filter, q);

  return Store.find(q).skip(skip).limit(limit).sort(sortObj);
};

exports.getCount = async (q = {}, filter = '') => Store.find(addFilter(filter, q)).countDocuments();
