function sleep(sec) {
  let start = Date.now(),
    now = start;
  while (now - start < sec * 1000) {
    now = Date.now();
  }
}

function existToken(name) {
  let ret = false;
  const cookies = document.cookie.split(';'); // 만약 cookie 설정이 httpOnly 이면 접근할 수 없다.
  cookies.forEach((element) => {
    const keyName = element.split('=')[0];
    if (name === keyName) {
      ret = true;
    }
  });

  return ret;
}

export { sleep, existToken };
