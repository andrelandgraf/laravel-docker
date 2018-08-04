import { port, appUrl } from '../../../../config';

export default class HttpService {
  static apiUrl() {
    return `${appUrl}:${port}/api`;
  }

  /**
   * lower abstraction of fetch
   * @param url
   * @param method
   * @param data
   * @param onSuccess
   * @param onError
   */
  static call(url, method, onSuccess, onError, data) {
    const sending = (method.toUpperCase() === 'POST' || method.toUpperCase() === 'PUT');
    const header = new Headers();
    if (sending) header.append('Content-Type', 'application/json');
    const req = {
      method: method.toUpperCase(),
      headers: header,
    };
    if (sending) req.body = JSON.stringify(data);
    fetch(url, req)
      .then((resp) => {
        if (!resp.ok) onError({ status: resp.status, message: resp.statusText });
        return resp.json();
      })
      .then(resp => onSuccess(resp))
      .catch(err => onError({ status: 500, message: err }));
  }

  /**
     * implementation of http get
     * @param url
     * @param onSuccess
     * @param onError
     */
  static get(url, onSuccess, onError) {
    HttpService.call(url, 'GET', onSuccess, onError);
  }

  /**
     * implementation of http put
     * @param url
     * @param data
     * @param onSuccess
     * @param onError
     */
  static put(url, data, onSuccess, onError) {
    HttpService.call(url, 'PUT', onSuccess, onError, data);
  }

  /**
     * implementation of http post
     * @param url
     * @param data
     * @param onSuccess
     * @param onError
     */
  static post(url, data, onSuccess, onError) {
    HttpService.call(url, 'POST', onSuccess, onError, data);
  }

  /**
     * implementation of http delete
     * @param url
     * @param onSuccess
     * @param onError
     */
  static delete(url, onSuccess, onError) {
    HttpService.call(url, 'DELETE', onSuccess, onError);
  }
}
