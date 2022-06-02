// ported from the great https://github.com/giscus/giscus

export const env = {
  app_id: process.env.GITHUB_APP_ID,
  client_id: process.env.GITHUB_CLIENT_ID,
  client_secret: process.env.GITHUB_CLIENT_SECRET,
  installation_id: process.env.GITHUB_INSTALLATION_ID,
  token: process.env.GITHUB_TOKEN,
  private_key: process.env.GITHUB_PRIVATE_KEY,
  encryption_password: process.env.ENCRYPTION_PASSWORD,
  origins: JSON.parse(process.env.ORIGINS || '[]') as string[],
  origins_regex: JSON.parse(process.env.ORIGINS_REGEX || '[]') as string[],
} as const

export const availableThemes = [
  'light',
  'dark',
  'dark_dimmed',
  'dark_high_contrast',
  'dark_protanopia',
  'light_protanopia',
  'transparent_dark',
  'preferred_color_scheme',
  'custom',
] as const

export type AvailableTheme = typeof availableThemes[number]

export type Theme = AvailableTheme | `/${string}` | `https://${string}`
