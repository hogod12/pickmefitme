// Installer
// ACTION - 콘솔이 아닌 브라우저 상에서 데이터베이스 셋팅 관련 동작을 수행한다
// * 수행하는 기능은 설치, 재설치, 패치 등으로 구성된다.
// * Mysql 데이터베이스는 기본적으로 설치되어 있어야한다.
// Mysql 데이터베이스 설치 쿼리 : CREATE DATABASE "db_name"

// TODO
// ! 재설치 및 패치기능은 현재까지 칼럼까지만 검사를 수행한다.
// 나중에 관련하여 내부 요소까지 검사를 수행할 수 있도록 한다.

// DISCUSSION 1
// config 파일을 클래스 내부에서 호출할 것인가 클래스 외부에서 호출할 것인가
// CONSCLUSION 1-1
// config 파일을 굳이 매 객체에 담을 필요는 없다. 또한, 같은 시점에서
// 클래스의 생성 시기에 따라 config의 동질성이 꺠지므로 클래스 밖에서 호출한다.
import DBQueryExecutor from '../../data_access/DBQueryExecutor';

const database = require("../../config/db/database.json");

class Installer {
  constructor () {
    // DATABASE -> TABLE -> COLUMN / TABLE -> PROPERTIES
    // util에 parser.js를 활용하여 개발진행
    this.db_query_executor = new DBQueryExecutor();
  }
  // 첫 인스톨을 수행한다.
  // 지정된 database에 테이블이 존재할 경우, Modify 혹은 ReInstall로 이동한다.
  install () {
    this.db_query_executor.generateConstructDBQuery(database);
  }
  // 파괴적 재설치
  // 기존의 레거시 정보를 모두 삭제하고 데이터베이스를 새로 설치한다.
  reinstall () {

  }
  // 보완적 재설치
  // 기존의 레거시 정보를 보존하고 재설치를 진행한다.
  // 패치의 경우, 본 동작에 해당한다.
  // * 패치되면서 없어진 컬럼의 경우, 삭제하지 않는다.
  modify () {

  }
  // 삭제
  // 데이터베이스를 모두 삭제한다.
  uninstall () {

  }
}

export default Installer;
