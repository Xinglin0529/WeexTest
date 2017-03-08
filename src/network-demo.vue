<template>
    <div>
        <!-- <text v-if="number > 10">text11111</text>
        <text v-else>text22222</text> -->
        <div v-for="item in list" :key="item">
            <text>{{item}}</text>
        </div>
        <div class="button" @click="addList"></div>
        <div>
            <input v-model="message" class="input" placeholder="请输入"></input>
        </div>
        <div>
            <text>{{message}}</text>
        </div>
    </div>
</template>
<style scoped>
    .button {
        width: 80px;
        height: 80px;
        background-color: green;
    }
    .input {
        width: 200px;
        height: 88px;
        border-width: 1px;
        border-color: gray;
    }
</style>
<script>
    const modal = weex.requireModule('modal');
    module.exports = {
        data() {
            return {
                number: 5,
                list: [1,2,3,4,5,6,7],
                message: ''
            };
        },
        methods: {
            addList() {
                modal.toast({
                    message: '添加',
                    duration: 1
                });
                // this.list.push(1);
                this.list = this.list.filter(number => number > 2);
                // Vue.set(this.list, 3, 10);
            }
        },
        created: function created() {
          //do something after creating vue instance

        }
    }
</script>
