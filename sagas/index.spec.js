import test from 'tape';

import { fetchProductsRequest } from './index'

test('fetch product Saga test', (assert) => {

    const gen = fetchProductsRequest();

    console.log(gen.next());
    
});