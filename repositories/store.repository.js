const Store = require('../models/store.model');

exports.getStore = async (q = {}, filter = '', sort, dir, skip, max, page = 1, limit = 10) => {
  skip = skip || (page - 1) * limit;
  limit = max || limit;
  const sortObj = sort && dir ? ({ [sort]: dir }) : {};

  if (filter) {
    const rgx = (pattern) => new RegExp(`.*${pattern}.*`);
    const searchRgx = rgx(filter);
    q = {
      ...q,
      $or: [
        { name: { $regex: searchRgx, $options: 'i' } },
        { cuit: { $regex: searchRgx, $options: 'i' } },
      ],
    };
  }
  return Store.find(q).skip(skip).limit(limit).sort(sortObj);
};

exports.getCount = async () => Store.find().countDocuments();
