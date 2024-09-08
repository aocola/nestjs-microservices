import { getPort } from 'src/common/utils/common-functions';

const optionsDetails = {
  host: process.env.REDIS_HOST,
  port: getPort(process.env.REDIS_PORT),
  retryAttempts: 5,
  retryDelay: 5000,
}

export{
  optionsDetails
}