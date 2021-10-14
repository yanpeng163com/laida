module.exports = [{
    url: '/dataserver/api/v1/statistics/all',
    type: 'get',
    response: config => {
        console.log(config)
        return {
            "code": 200,
            "data": {
                "serviceNumber": 1,
                "userVisits": 1,
                "callVolume": 1,
                "apiNumber": 1,
                "departmentNumber": 1,
                "scenesNumber": 1,
                "applicationNumber": 1
            },
            "msg": "OK",
            "resultCode": "",
            "success": true
        }
    }
}]