var express = require('express');
var router = express.Router();
var base = require("./base");
var logger = require("../helpers/log");

/**
 * 添加队伍信息
 */
router.get('/api/matches/1/matchGroup', function (req, res) {
    var reqBody = req.body;
    base.apiOkOutput(res, {
        "id": 21,
        "group_name": reqBody.group_name,
        "leader_name": reqBody.leader_name,
        "matchItem_id": 2
    });
});


module.exports = router;
