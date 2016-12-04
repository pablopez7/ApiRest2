'use strict'

module.exports = {
    port: process.env.PORT || 3030,
    db: process.env.MONGODB || 'mongodb://localhost:27017/shop'
}