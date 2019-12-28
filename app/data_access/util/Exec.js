const mysql = require('mysql2/promise');
const access = require('../../config/db/access.json');

const pool = mysql.createPool(access);

exports.exec = async (query) => {
  // DISCUSSION 1
  // 그냥 전부다 비동기로 처리할것이냐? 아니면 상황에따라 바꿀것이냐
  // 그나저나 동기 비동기 어웨잇 드럽게 헷갈리네 자바스크립트 ㅅㅂ
  try { const connection = await pool.getConnection(async conn=> conn);
    try {
      const [rows] = await connection.query(query);
      connection.release();
      return rows;
    } catch (err) {
      connection.release();
      console.log(err); // 나중에 로거 만들면 로거로 바꾸자잉
      return false;
    }
  } catch (err) {
    console.log(err);
    throw err;
    return false;
  }
}
