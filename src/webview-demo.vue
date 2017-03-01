<template>
    <div>
        <div class="searchbox">
            <input class="input" :ref="input" placeholder="输入网址..."></input>
            <text class="button" @click="loadURL"> 搜索 </text>
        </div>
        <div>
            <web class="web" :ref="webview" :src="src" @pagestart="start" @pagefinish="finish" @error="error"></web>
        </div>
    </div>
</template>
<style>
    .wrapper {
        flex: 1;
    }
    .searchbox {
        flex-direction: row;
        justify-content: space-around;
        margin-top: 30px;
        margin-left: 30px;
        margin-right: 30px;
        border-width: 2px;
        border-style: solid;
        border-color: green;
    }
    .input {
        flex: 1;
        margin-right: 20px;
        height: 88px;
        padding-left: 20px;
    }
    .button {
        padding-top: 20px;
        height: 88px;
        font-size: 40px;
        text-align: center;
        color: blue;
    }
    .web {
        border-width: 2px;
        border-style: solid;
        border-color: #41b883;
        margin-left: 30px;
        margin-right: 30px;
        margin-top: 30px;
        height: 1000px;
    }
</style>
<script>
    const modal = weex.requireModule('modal');
    const webview = weex.requireModule('webview');
    export default {
        data() {
            return {
                src: 'https://m.alibaba.com'
            }
        },
        methods: {
            loadURL(event) {
                this.src = this.$refs.input.value;
                if (this.src === 'undefined' || this.src == null || this.src.length === 0) {
                    modal.toast({
                        message: 'url为空',
                        duration: 1
                    });
                    return;
                }
                setTimeout(() => {
                    modal.toast({
                        message: `加载${this.src}`,
                        duration: 1
                    });
                    webview.goBack(this.$refs.webview);
                },2000);
            },
            start(event) {
                modal.toast({
                    message: '开始加载...',
                    duration: 1
                });
            },
            finish(event) {
                modal.toast({
                    message: '加载完成...',
                    duration: 1
                });
            },
            error(event) {
                modal.toast({
                    message: '加载失败...',
                    duration: 1
                });
            }
        }
    }
</script>
