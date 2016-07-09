"use strict";
var tsgallery_1 = require('./../models/tsgallery');
function getGalleryList(req, res, next) {
    tsgallery_1.Gallery.find({})
        .limit(10)
        .skip(req.query.skip)
        .sort('-reg_date')
        .exec(function (err, items) {
        if (err)
            throw err;
        tsgallery_1.Gallery.count({}, function (err, count) {
            if (err)
                throw err;
            var result = {
                items: items,
                count: count
            };
            result.items = items;
            result.count = count;
            res.json(result);
        });
    });
}
exports.getGalleryList = getGalleryList;
