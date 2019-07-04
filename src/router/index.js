import Vue from 'vue';
import Router from 'vue-router';

import allItems from '../components/allItems';
import itemDetails from '../components/itemDetails';
import shoppingCart from '../components/shoppingCart';
 Vue.use(Router);

 export default new Router ({
     routes: [{
         path: '/',
         name: 'allItems',
         component: allItems,
     },{
        path: '/details',
        name: 'itemDetails',
        component: itemDetails,
    },{
        path: '/shoppingCart',
        name: 'shoppingCart',
        component: shoppingCart,
    }],
 });
