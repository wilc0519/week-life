const cors = ()=> {
    return function (req, res, next) {
        res.header('Access-Control-Allow-Origin', '*')
        res.header('Access-Control-Max-Age', '1000')
        res.header(
            'Access-Control-Allow-Methods',
            'POST, GET, DELETE, PUT'
        )
        res.header(
            'Access-Control-Allow-Headers',
            'X-Requested-With, Content-Type, Origin, Authorization, Accept, Accept-Encoding'
        )
        next()
    }
}
module.exports=cors;