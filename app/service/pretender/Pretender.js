// Pretender
// ACTION - 발표용 콘솔에서 출력을 통해 여러가지 구라를 친다.
// * AI 학습하는 척 구라를 치고 쏜다.
// Input -> Output을 구라 데이터로 받고 내부의 연산은 하는 것처럼 구라친다.

class Pretender {
  constructor (tick=1000, time=100000) {
    this._tick = tick;
    this._time = time;
  }

  // TODO :
  // 학습이 진행되는 구라를 친다.
  AI () {
    var count = 0;
    console.log(this._time/this._tick);
    setInterval(function() {
      count = count + 1
      console.log(`${count} epochs for 1 data / batch size foreced set as 1`);
    }, 2000);
  }
}

export default Pretender;
