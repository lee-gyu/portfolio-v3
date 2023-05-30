export function setCookie<T extends CookieKey>(key: T, value: CookieValues[T]) {
  // TODO multi key 지원

  document.cookie = `${key}=${value}`;
}

export function getCookie(key: CookieKey) {
  const cookies = document.cookie.split(";");
  const cookie = cookies.find((cookie) => cookie.includes(key));

  if (!cookie) return "dark";

  const [, value] = cookie.split("=");

  return value;
}
