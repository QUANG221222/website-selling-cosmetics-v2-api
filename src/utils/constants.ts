import { env } from '~/configs/enviroment'

export const WHITELIST_DOMAINS = ['https://website-selling-cosmetics-v2-fe.vercel.app', "https://www.beautyst.click", 'https://beautyst.click']

export const WEBSITE_DOMAIN =
  env.BUILD_MODE === 'production'
    ? env.WEBSITE_DOMAIN_PRODUCTION
    : env.WEBSITE_DOMAIN_DEVELOPMENT
