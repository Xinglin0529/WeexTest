<template>
    <scroller>
        <refresh class="refresh" @refresh="refresh" :display="refreshing">
            <text class="indicator">Refreshing!</text>
        </refresh>
        <div v-for="(item, index) in itemList" :ref="'item' + index">
            <div class="pannel">
                <text class="text">{{`第${item}行`}}</text>
            </div>
        </div>
        <loading class="loading" @loading="fetch" :display="fetching">
            <text class="indicator">Loading!</text>
        </loading>
    </scroller>
</template>

<script>
    const modal = weex.requireModule('modal');
    const dom = weex.requireModule('dom');
    export default {
        data() {
            return {
                refreshing: 'hide',
                itemList: [1,2,3,4,5],
                fetching: 'hide'
            }
        },
        methods: {
            fetch() {
                modal.toast({
                    message: '加载中...',
                    duration: 1
                });
                this.fetching = 'show';
                const length = this.itemList.length;
                setTimeout(() => {
                    for (let i = length; i < length + 5; i++) {
                        this.itemList.push(i);
                    }
                    this.fetching = 'hide';
                }, 1500);
            },
            refresh() {
                this.refreshing = 'show';
                setTimeout(() => {
                    this.refreshing = 'hide';
                    this.itemList = [1,2,3,4,5,6,7,8,9,0];
                }, 1500);
                setTimeout(() => {
                    const el = this.$refs.item8[0];
                    dom.scrollToElement(el, {});
                }, 5000);
            }
        }
    }
</script>

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
    .refresh {
        flex-direction: row;
        height: 128px;
        width: 750px;
        align-items: center;
        justify-content: center;
    }
    .indicator {
        color: #888888;
        font-size: 42px;
        text-align: right;
    }
    .loading {
        justify-content: center;
        align-items: center;;
        width: 750px;
    }
</style>
