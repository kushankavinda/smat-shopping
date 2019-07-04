<template>
<div class="addpanel">

    <div class="card"  v-for="item of objectItems" style="margin-top: 10px;">
        <div class="card-header">
            Featured {{ item }}
        </div>
        <div class="card-body">
            <h5 class="card-title">Special title treatment</h5>
            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <router-link to="/details">See Details</router-link>
        </div>
    </div>

</div>
</template>

<script>

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
                }
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