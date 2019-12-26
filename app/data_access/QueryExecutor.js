// QueryGenerator
// ACTION - 기본적인 동작을 수행하는 쿼리를 자동으로 생성
// * "단순" WHERE, AND 까지는 생성할 수 있도록 구성
// ! OR과 그 외의 복잡한 쿼리는 생성하지 못함
class QueryExecutor {
  constructor (action, table, columns, values, condition) {
    this._date = new Date();
    this._action = action;
    this._table = table;
    // DISCUSSION 1 :
    // columns, values 를 분리해야 하는가? JSON으로 같이보내야 하는가?
    // 1. 분리
    // 그 자체로서 비합리성 - value가 존재하는 쿼리의 경우
    // 2. 같이
    // values가 없는 READ, DELETE의 비합리성
    // CONCLUSION 1-1 :
    // columns와 values의 존재가 필요충분조건이 아니므로 1번 분리하는 방향으로 결정한다.
    // DISCUSSION 2 :
    // DISCUSSION 1의 결정으로 인하여 columns, values가 존재할 경우, 개수가 맞지않을수 있다.
    // 이 경우, mysql에 문제를 넘길 것인가 해당 단계에서 처리할 것인가에 대한 논의가 필요하다.
    // CONCLUSION 2-1 :
    // 오지게 귀찮으므로 일단 mysql에 토스한다. 오라클이잖아... 알아서 잘해줄거야...

    this._column = columns;
    this._value = values;
    this._condition = condition;
  }

  // TODO :
  // 이하 4개의 Exec 계열 쿼리의 로그는 실행이 보장된 쿼리로 한다.
  ExecInsertQuery () {
    //
  }
  ExecSelectQuery () {
    // SELECT 결과를 반환
  }
  ExecUpdateQuery () {

  }
  ExecDeleteQuery () {

  }
}
