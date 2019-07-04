<template>

    <div class="col-md-3">

        <div  class="card" style="width: 18rem;" v-for="item of objectItems" >
            <div class="card-header">
                Featured {{ item }}
            </div>
            <div class="card-body">
                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" class="btn btn-primary">Add To CarT</a>
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
</style>