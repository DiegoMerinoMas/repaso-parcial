<template>
<div class="class-full">
        <pv-menubar class="sticky">
            <template #start>
                <p id="title">Food Truck Lovers</p>           
            </template>

            <template #end>
                <div class="card flex flex-wrap justify-content-center gap-4 align-items-center">
                    <router-link to="/home">
                        <pv-button style="background-color: #E0E0E0; color:black">Home</pv-button>
                    </router-link>
                </div> 
            </template>
        </pv-menubar>
    </div>
</template>

<script>
</script>

<style scoped>
.sticky{
    background-color: #0597A6;
    border: #0597A6;
}
#title{
    color:white;
    font-size: 150%;
}
</style>