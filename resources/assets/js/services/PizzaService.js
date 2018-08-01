import HttpService from './HttpService.js';

export default class PizzaService {
    static baseUrl() {
        return HttpService.apiUrl() + '/pizza/';
    }

    /**
     *
     * @param pizza
     */
    static addNewPizza(pizza){
        return new Promise((resolve, reject) => {
           HttpService.post(`${PizzaService.baseUrl()}`, pizza,
               data => resolve(data), textStatus => reject(textStatus));
        });
    }
}