"use strict";
var GalleryModel_1 = require('./../Models/GalleryModel');
var PhotoController;
(function (PhotoController) {
    function getGalleryList(req, res, next) {
        GalleryModel_1.Gallery.find({})
            .limit(10)
            .skip(req.query.skip)
            .sort('-reg_date')
            .exec(function (err, items) {
            if (err)
                throw err;
            GalleryModel_1.Gallery.count({}, function (err, count) {
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
    PhotoController.getGalleryList = getGalleryList;
})(PhotoController = exports.PhotoController || (exports.PhotoController = {}));
