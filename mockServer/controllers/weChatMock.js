var express = require('express');
var router = express.Router();
var base = require("./base");
var logger = require("../helpers/log");

/**
 * For p1 services,it's sample code.
 *
 */
router.get("/api/hospital", function (req, res) {
    var reqBody = req.body;
    logger.debug("commoninfo_encryptor....", reqBody);
    base.apiOkOutput(res, {
        "status": "ok",
        "errorCode": 0,
        "errorMsg": "success",
        "dataNum": null,
        "results": [
            {
                "hospital_id": "73",
                "name": "首都医科大学附属北京朝阳医院",
                "imageUrl": "http://mingyizhudao.com/resource/hospital/0073-BJ-chaoyang.jpg",
                "hp_dept_id": "158",
                "hp_dept_name": "普外科",
                "hp_dept_desc": ""
            },
            {
                "hospital_id": "73",
                "name": "首都医科大学附属北京朝阳医院",
                "imageUrl": "http://mingyizhudao.com/resource/hospital/0073-BJ-chaoyang.jpg",
                "hp_dept_id": "159",
                "hp_dept_name": "心外科",
                "hp_dept_desc": ""
            },
            {
                "hospital_id": "73",
                "name": "首都医科大学附属北京朝阳医院",
                "imageUrl": "http://mingyizhudao.com/resource/hospital/0073-BJ-chaoyang.jpg",
                "hp_dept_id": "160",
                "hp_dept_name": "胸外科",
                "hp_dept_desc": ""
            },
            {
                "hospital_id": "73",
                "name": "首都医科大学附属北京朝阳医院",
                "imageUrl": "http://mingyizhudao.com/resource/hospital/0073-BJ-chaoyang.jpg",
                "hp_dept_id": "161",
                "hp_dept_name": "血管外科",
                "hp_dept_desc": ""
            }
        ]
    });
});

module.exports = router;
