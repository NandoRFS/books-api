module.exports = {
    "development": {
        "dialect": "sqlite",
        "storage": "data/dev-db.sqlite3"
    },
    "test": {
        "dialect": "sqlite",
        "storage": "data/test-db.sqlite3"
    },
    "production": {
        "username": "user_postgres",
        "password": "senha",
        "database": "nome_db",
        "host": "localhost",
        "dialect": "postgres"
    }
}