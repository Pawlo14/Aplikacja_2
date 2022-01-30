const getCookieValue = (name) => {
  const cookies = document.cookie.split(';');
  for (let i = 0 ; i < cookies.length; i++) {
    const c = cookies[i].trim().split('=');
    if (c[0] === name) return c[1];
  }
  return undefined;
}

const addCookie = (name, value) => {
  document.cookie += name + "=" + value + ';';
}

const removeCookie = (name) => {
  let cookies = document.cookie.split(';');
  for (const cookie in cookies) {
    const c = cookies[cookie].trim().split('=');
    if (c[0] === name) {
      document.cookie += ";expires=Thu, 01 Jan 1970 00:00:00 GMT";
      return console.log(document.cookie)
    }
  }
}

export default getCookieValue;
export { addCookie, removeCookie };