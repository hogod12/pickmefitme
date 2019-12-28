const Exec = require('./util/Exec');

class DBQueryExecutor {
  constructor () {}

  async execConstructDB (database) {
    // var query = this.generateConstructDBQuery(database);
    // console.log(query);
    // return Exec.exec(query);

    var database_names = Object.getOwnPropertyNames(database);
    for (var i of database_names) {
      var query = `CREATE TABLE ${i} (\n` + this.generateCreateTableQuery(database[i]) + `);\n`;
      console.log(await Exec.exec(query));
    }
  }

  execCreateTable (table) {
    var query = this.generateCreateTableQuery(table);
    return Exec.exec(query);
  }

  generateConstructDBQuery (database) {
    var query = "";
    var database_names = Object.getOwnPropertyNames(database);
    for (var i of database_names) {
      query = query + `CREATE TABLE ${i} (\n` +
              this.generateCreateTableQuery(database[i]) +
              `);\n`;
    }
    return query;
  }

  generateCreateTableQuery (table) {
    var query = "";
    for (var i of table.columns.concat(table.properties)) {
      query = query + i + ",";
    }
    return query.slice(0,-1);
  }
}

export default DBQueryExecutor
