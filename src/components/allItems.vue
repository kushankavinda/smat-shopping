<template>
<div class="addpanel">
    <div class="card"  v-for="item of allItems" style="margin-top: 10px;">
        <div class="card-header">
             {{ item.Name }}
        </div>
        <div class="card-body">
            <h5 class="card-title">   {{ item.price }} $</h5>
            <img :src="'https://www.jquery-az.com/html/images/banana.jpg'" style="height:100px" >
            <p class="card-text"> {{ item.desc}}</p>
            <router-link to="/details">See Details</router-link>
        </div>
    </div>
</div>
</template>

<script>

import axios from 'axios'

    export default {
        name : 'allItems',
        props: {
         //   itemCat: kushan boy
        },
        data() {
            return {
                objectItems: {
                key1: 'item1',
                key2: 'item 2',
                key3: 'item3'
                },
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
                baseUrl: '../assets/allItems.json' ,

                weatherDataList: []

            }
        },
        methods: {
            fetchData(){
                     axios.get("../assets/allItems.json")
                     .then(response => (this.weatherDataList = response.data));
            },
            getData() {
                fetch("../assets/allItems.json")
                .then(response => response.json())
                .then(data => (this.weatherDataList = data));
            }
        }

    };

</script>

<style>
.addpanel{
  margin-right: 80px;
  margin-left: 80px;
}
</style>