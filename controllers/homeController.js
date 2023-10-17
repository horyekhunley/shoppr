const BigPromise = require('../middleware/BigPromise')

exports.home = BigPromise(async (req, res) => {
    res.status(200).json({
        success: true,
        greeting: 'Welcome to the home page'
    })
})