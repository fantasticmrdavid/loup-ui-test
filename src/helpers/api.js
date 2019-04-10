import qs from 'qs';

const constructUrl = (path, params) => {
  const queryString = qs.stringify(params);
  return `${path}${queryString !== '' ? `?${queryString}` : ''}`;
};

const checkStatus = (response) => {
  const { status, statusText } = response;

  if (status >= 200 && status < 300 && status !== 304) return response;
  const error = new Error(statusText);
  error.status = response.status;

  throw error;
};

const parseData = (response) => {
  return response.text()
    .then((text) => {
      return text ? JSON.parse(text) : {};
    });
};

export default (uri, method = 'GET') => {
  const url = constructUrl(uri, { method });
  return fetch(url, { method })
    .then(checkStatus)
    .then(parseData);
};
