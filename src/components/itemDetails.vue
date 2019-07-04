<template>
<div>
    <div class="card">
    <div class="card-header">
        Selected Items
    </div>
    <div class="card-body">
        <h5 class="card-title"> {{ allItems[0].Name }} </h5>
        <img :src="'https://www.jquery-az.com/html/images/banana.jpg'" style="height:400px" >
        <p class="card-text"> {{ allItems[0].price }} $ </p>
        <p class="card-text"> {{ allItems[0].desc }}  </p>
        <router-link to="/shoppingCart">Buy</router-link>
    </div>
    </div>
 </div>
</template>

<script>

    export default {
        name : 'itemDetails',
        data() {
            return {
                allItems:    [{
                    "_id": 1,
                    "Name": "Milk Powder",
                    "price": 10,
                    "img":"../assets/bread.jpg",
                    "desc": "Powdered milk or dried milk is a manufactured dairy product made by evaporating milk to .... published by C. Griffin"
                },{
                    "_id": 2,
                    "Name": "Bread",
                    "price": 12,
                    "img":"../assets/bread.jpg",
                    "desc": "staple food prepared from a dough of flour and water, usually by baking."
                }],
            }
        },
    };

</script>

<style>
</style>