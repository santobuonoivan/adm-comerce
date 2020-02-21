
export const apiGetCustomers = (url) => () =>
    fetch(url).then( v => v.json());
export const apiGetProducts = (url) =>  () =>
    fetch(url).then( v => v.json());
export const apiPutCustomer = (url, client_id, customer ) =>  () =>
    fetch(`${url}/${client_id}`,{
        method: 'PUT',
        body: JSON.stringify(customer),
        headers: new Headers({'Content-type': 'application/json'})
    });
export const apiPutProduct = (url, product_id, product ) =>  () =>
    fetch(`${url}/${product_id}`,{
        method: 'PUT',
        body: JSON.stringify(product),
        headers: new Headers({'Content-type': 'application/json'})
    });
