
const Redis = require('ioredis')

const redisUrl = 'redis://10.150.117.128:6380'

const redis = new Redis(redisUrl)

export const storeCache = (key: String, value: String) => redis.set(key, value)
export const getStoredCash = (key: String) => redis.get(key)
export const removeCache = (key:String) => redis.del(key)
