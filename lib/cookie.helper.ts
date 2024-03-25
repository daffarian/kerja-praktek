// helper/cookie.helper
export const getCookie = (name:any) => {
  const matches = `; ${document.cookie}`.match(`;\\s*${name}=([^;]+)`);
  return matches ? matches[1] : null;
};

export const setCookie = (name:any, value:any, days:any) => {
  let expires = '';

  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = `; expires=${date.toString()}`;
  }

  document.cookie = `${name}=${value}${expires}; path=/`;
};

export const eraseCookie = (name:any) => {
  setCookie(name, '', -1);
};
