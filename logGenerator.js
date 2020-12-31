function logGenerator(req, res, next) {
    const reqTime = new Date()

    const method = req.method
    const URL = req.originalUrl

    res.on('finish', () => {
        const resTime = new Date()
        const timeDiff = resTime - reqTime
        const stamps = `${reqTime.toLocaleString()} | ${method} from ${URL} | total time: ${timeDiff} ms`
        console.log(stamps)
    })

    next()
}

module.exports = logGenerator
