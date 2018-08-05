import HttpService from './HttpService';

/**
 * Pizza API - CURL functions based on REST / JSON via HttpService.js
 */
export default class PizzaService {
  static baseUrl() {
    return `${HttpService.apiUrl()}/pizza`;
  }

  /**
   * create a new pizza
   * @param pizza
   */
  static create(pizza) {
    return new Promise((resolve, reject) => {
      HttpService.post(PizzaService.baseUrl(), pizza,
        data => resolve(data), textStatus => reject(textStatus));
    });
  }

  /**
   * delete one pizza by id
   * @param id
   */
  static delete(id) {
    return new Promise((resolve, reject) => {
      HttpService.delete(`${PizzaService.baseUrl()}/${id}`,
        data => resolve(data), textStatus => reject(textStatus));
    });
  }

  /**
   * get all pizzas
   * @returns {Promise<any>}
   */
  static getPizzas() {
    return new Promise((resolve, reject) => {
      HttpService.get(PizzaService.baseUrl(),
        data => resolve(data), textStatus => reject(textStatus));
    });
  }
}
