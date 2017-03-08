<template>
    <div class="wrapper">
        <div class="container">
            <text class="text">{{dateString}}</text>
            <text class="text" @click="showpicker">Picker</text>
        </div>
    </div>
</template>
<script>
    const picker = weex.requireModule('picker');
    const modal = weex.requireModule('modal');
    export default {
        data() {
            return {
                date: '',
                array: [1,2,3,4]
            }
        },
        methods: {
            showpicker() {
                picker.pickDate({
                    value: this.date,
                    max: '2017-03-31',
                    min: '2017-01-01'
                }, (options) => {
                    if (options.result === 'success') {
                        this.date = options.data;
                    } else if (options.result === 'error') {
                        modal.toast({
                            message: '操作失败',
                            duration: 2
                        });
                    } else {
                        modal.toast({
                            message: '取消操作',
                            duration: 2
                        });
                    }
                })
            }
        },
        computed: {
            dateString: {
                get: function() {
                    return `日期:${this.date}`
                }
            }
        }
    }
</script>
<style>
    .wrapper {
        justify-content: center;
        align-items: center;
    }
    .container {
        margin-left: 50px;
        justify-content: center;
        align-items: center;
    }
    .text {
        font-size: 50px;
        color: red;
        text-align: center;
        margin-top: 40px;
    }
</style>
