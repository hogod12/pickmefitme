class DBQueryExecutor {
  constructor () {}

  generateConstructDBQuery (database) {
    var query = "";
    var database_names = Object.getOwnPropertyNames(database);
    for (var i of database_names) {
      query = query + `CREATE TABLE ${i} (\n` +
              this.generateCreateTableQuery(database[i]) +
              `);\n`;
    }
    console.log(query);
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
