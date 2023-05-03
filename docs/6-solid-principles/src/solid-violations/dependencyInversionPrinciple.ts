class Database {
  private connection: any;

  connect() {
    this.connection = '';
  }

  query(sql: string) {
    return this.connection.execute(sql);
  }
}

class Service {
  private database: Database;

  constructor() {
    this.database = new Database();
    this.database.connect();
  }

  getUsers() {
    return this.database.query('SELECT * FROM users');
  }
}