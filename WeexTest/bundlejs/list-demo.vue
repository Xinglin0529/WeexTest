<template>
    <list @loadmore="fetch" loadmoreoffset="20">
        <cell v-for="item in itemList">
            <div class="pannel">
                <text class="text">{{`第${item}行`}}</text>
            </div>
        </cell>
    </list>
</template>
<style>
    .pannel {
        width: 600px;
        height: 250px;
        margin-left: 75px;
        margin-top: 35px;
        margin-bottom: 35px;
        flex-direction: column;
        justify-content: center;
        border-width: 2px;
        border-style: solid;
        border-color: rgb(162, 217, 192);
        background-color: rgba(162, 217, 192, 0.2);
    }
    .text {
        font-size: 50px;
        text-align: center;
        color: #41B883;
    }
</style>
<script>
    const modal = weex.requireModule('modal');
    export default {
        data() {
            return {
                itemList: [1,2,3,4,5]
            }
        },
        methods: {
            fetch() {
                modal.toast({
                    message: '加载中...',
                    duration: 1
                });
                const length = this.itemList.length;
                setTimeout(() => {
                    for (let i = length; i < length + 5; i++) {
                        this.itemList.push(i);
                    }
                }, 1000);
            }
        }
    }
</script>
