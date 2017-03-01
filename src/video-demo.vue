<template>
    <div>
        <video class="video" :src="src" @start="onstart" @pause="onpause" @finish="onfinish" @fail="onfail"></video>
        <text class="info">{{state}}</text>
    </div>
</template>
<style>
    .video {
        margin-top: 128px;
        margin-left: 60px;
        width: 630px;
        height: 350px;
    }
    .info {
        margin-top: 40px;
        font-size: 40px;
        text-align: center;
    }
</style>
<script>
    module.exports = {
        data() {
            return {
                state: '----',
                src: 'http://flv2.bn.netease.com/videolib3/1611/01/XGqSL5981/SD/XGqSL5981-mobile.mp4'
            }
        },
        methods: {
            onstart(event) {
                this.state = 'onstart';
            },
            onpause(event) {
                this.state = 'onpause';
            },
            onfinish(event) {
                this.state = 'onfinish';
            },
            onfail(event) {
                this.state = 'onfail';
            }
        }
    }
</script>
