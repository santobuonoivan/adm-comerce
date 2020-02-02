
export const apiGetCustomers = (url) =>
    () => fetch(url).then( v => v.json());
export const apiGetProducts = (url) =>
    () => fetch(url).then( v => v.json());