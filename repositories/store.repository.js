const Store = require('../models/store.model');

exports.getStore = async (q = {}, filter = '', sort, dir, skip = 0, max = 10) => {
    const sortObj = sort && dir ? ({ [sort]: dir }) : {};
    if (filter) {
        const rgx = (pattern) => new RegExp(`.*${pattern}.*`);
        const searchRgx = rgx(filter);
        q = {
            ...q,
            $or: [
                { name: { $regex: searchRgx, $options: "i" } },
                { cuit: { $regex: searchRgx, $options: "i" } },
            ],
        }
    }
    return datos = await Store.find(q).skip(skip).limit(max).sort(sortObj);
}