<template>
    <div class="wrapper">
        <slider class="slider" interval="3000" auto-play="true" @change="onchange">
            <div v-for="item in imageList">
                <image class="image" resize="cover" :src="item.src"></image>
            </div>
            <indicator class="indicator"></indicator>
        </slider>
        <text class="text"> {{textValue}} </text>
    </div>
</template>

<style>
    .wrapper {
        justify-content: center;
    }
    .slider {
        margin-top: 25px;
        margin-left: 25px;
        margin-right: 25px;
        height: 700px;
        border-width: 2px;
        border-color: #41b883;
        border-style: solid;
    }
    .image {
        width: 700px;
        height: 700px;
    }
    .indicator {
        top: 500px;
        left: 25px;
        width: 700px;
        height: 200px;
        item-color: blue;
        item-selected-color: red;
        item-size: 20px;
    }
    .text {
        margin-top: 30px;
        margin-left: 15px;
        margin-right: 15px;
        font-size: 50px;
        color: blue;
        text-align: center;
    }
</style>

<script>
    export default {
        data() {
            return {
                textValue:'第0页',
                imageList: [
                    { src: 'https://gd2.alicdn.com/bao/uploaded/i2/T14H1LFwBcXXXXXXXX_!!0-item_pic.jpg'},
                    { src: 'https://gd1.alicdn.com/bao/uploaded/i1/TB1PXJCJFXXXXciXFXXXXXXXXXX_!!0-item_pic.jpg'},
                    { src: 'https://gd3.alicdn.com/bao/uploaded/i3/TB1x6hYLXXXXXazXVXXXXXXXXXX_!!0-item_pic.jpg'}
                ]
            }
        },
        methods: {
            onchange(event) {
                this.textValue = `第${event.index}页`;
            }
        }
    }
</script>
