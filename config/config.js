
require('dotenv').config()
module.exports = {
  development: {
    database: "fx3shaday_development",
    dialect: 'postgres'
  },
  test: {
    database: "fx3shaday_test",
    dialect: 'postgres'
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
        require: true
      }
    }
  }
}
