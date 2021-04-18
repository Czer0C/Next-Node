export const parseRequest = (req) => {
  const baseURL = "http://" + req.headers.host + "/";
  const parsedURL = new URL(req.url, baseURL);

  const path = parsedURL.pathname;

  const protocol = parsedURL.protocol;

  const method = req.method.toLocaleLowerCase();

  const params = parsedURL.searchParams.toString();

  const headers = req.headers;

  const body = req.body;

  return { path, protocol, method, params, body };
};
