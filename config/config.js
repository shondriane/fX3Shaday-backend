require('dotenv').config()
module.exports={
  "development": {
    "database": "fx3shaday_development",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "test": {
    "database": "fx3shaday_test",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    "database": "fx3shaday_production",
    "host": "127.0.0.1",
    "dialect": "postgres",
    dialectOptions: {
			ssl: {
				rejectUnauthorized: false,
				require: true
			}
		}
  }
}
