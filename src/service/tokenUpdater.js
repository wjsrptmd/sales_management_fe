import { existToken } from '../util/customUtil';
import { renewalToken } from '../api';

const delay = 4 * 60 * 1000; // 4분

function updateToken() {
  if (existToken('ac_token')) {
    console.log('updateToken 요청.');
    renewalToken().catch(function (error) {
      console.log(error);
    });
  } else {
    console.log('token 이 없습니다.');
  }
}

function startPolling() {
  setInterval(updateToken, delay); // 10 초에 한번씩.
}

export { startPolling };

// 테스트 입니다.
