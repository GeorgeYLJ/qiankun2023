<template>
    <div class="home">
        <div v-if="!qiankunFlag" style="background-color: palegreen">导航栏：子应用独立运行时显示</div>
        <img alt="Vue logo" src="../assets/logo.png">
        <HelloWorld msg="我是qiankun子应用"/>
    </div>
</template>

<script>
    // @ is an alias to /src
    import HelloWorld from '@/components/HelloWorld.vue'

    export default {
        name: 'Home',
        components: {
            HelloWorld
        },
        data() {
            return {
                qiankunFlag: true
            }
        },
        mounted() {
            this.qiankunFlag = window.__POWERED_BY_QIANKUN__
            console.log('window.__POWERED_BY_QIANKUN__', window.__POWERED_BY_QIANKUN__)
            console.log('我是子应用首页')
        }
    }
</script>
