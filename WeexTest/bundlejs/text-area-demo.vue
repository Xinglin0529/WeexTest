<template>
    <div>
        <textarea :ref="textarea" class="textarea" @input="input" @change="onchange" @focus="onfocus" @blur="onblur"></textarea>
        <text class="text">{{textValue}}</text>
    </div>
</template>
<style>
    .wrapper {
        justify-content: center;
        align-items: center;
    }
    .textarea {
        font-size: 50px;
        width: 650px;
        margin-top: 50px;
        margin-left: 50px;
        padding: 20px;
        border-width: 2px;
        border-color: #41b883;
        border-style: solid;
        color: #666666;
    }
    .text {
        text-align: left;
        font-size: 30px;
        color: green;
        margin-left: 50px;
        margin-right: 50px;
        margin-top: 50px;
    }
</style>
<script>
    const modal = weex.requireModule('modal');
    module.exports = {
        data() {
            return {
                textValue:''
            }
        },
        methods: {
            input(event) {
                this.textValue = event.value;
                modal.toast({
                    message: `oninput:${event.value}`,
                    duration: 2
                });
            },
            onchange(event) {
                this.textValue = event.value;
                modal.toast({
                    message: `onchange:${event.value}`,
                    duration: 2
                });
            },
            onfocus(event) {
                this.textValue = event.value;
                modal.toast({
                    message: `onfocus:${event.value}`,
                    duration: 2
                });
            },
            onblur(event) {
                modal.toast({
                    message: 'onblur',
                    duration: 2
                });
            }
        }
    }
</script>
