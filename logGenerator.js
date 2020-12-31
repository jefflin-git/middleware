function logGenerator(req, res, next) {
    const time = new Date()

    const year = time.getFullYear()
    //回傳本地時間的月份（0-11） + 1
    const month = time.getMonth() + 1
    const date = time.getDate()

    const hour = time.getHours()
    const minute = time.getMinutes()
    const second = time.getSeconds()

    const method = req.method
    const URL = req.originalUrl

    const stamps = `${year}-${month}-${date} ${hour}:${minute}:${second} | ${method} from ${URL}`

    console.log(stamps)
    next()
}

module.exports = logGenerator
