export default {
  dbUser: process.env.DB_USER || 'stan',
  dbName: process.env.DB_NAME || 'acroyoga',
  dbPass: process.env.DB_PASS || 'password',
  dbHost: process.env.DB_HOST || 'localhost',
  dbPort: process.env.DB_PORT || 5432,
}
