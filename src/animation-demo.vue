<template>
    <div>
        <div ref="test" @click="scale" class="box"></div>
    </div>
</template>
<script>
    const animation = weex.requireModule('animation')
    const modal = weex.requireModule('modal')
    export default {
        methods: {
            move() {
                const self = this;
                var testEl = this.$refs.test;
                animation.transition(testEl, {
                  styles: {
                    transform: 'translate(250px, 100px)',
                    transformOrigin: 'center center'
                  },
                  duration: 800, //ms
                  timingFunction: 'ease',
                  delay: 0 //ms
                }, function () {
                    modal.toast({ message: 'move animation finished.' })
                    self.rotation();
                })
            },
            rotation() {
                modal.toast({ message: 'rotation animation start.' })
                var testEl = this.$refs.test;
                animation.transition(testEl, {
                  styles: {
                    transform: 'rotate(720)',
                  },
                  duration: 2000, //ms
                  timingFunction: 'ease',
                  delay: 0 //ms
                }, function () {
                    modal.toast({ message: 'rotation animation finished.' })
                    self.scale();
                })
            },
            scale() {
                modal.toast({ message: 'scale animation start.' })
                var testEl = this.$refs.test;
                animation.transition(testEl, {
                  styles: {
                    transform: 'scale(1.5,1.5)',
                  },
                  duration: 500, //ms
                  timingFunction: 'ease',
                  delay: 0 //ms
                }, function () {
                    modal.toast({ message: 'scale animation finished.' })
                })
            }
        }
    }
</script>
<style scoped>
  .box {
    width: 250px;
    height: 250px;
    background-color: #47b1eb;
  }
</style>
