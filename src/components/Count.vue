<template>
    <div>
        <button class="calPlus" @click="plusCount">求和</button>
        <p>{{ all }}</p>
        <button class="reverse">去返</button>
        <p>{{ setReverse }}</p>

        <ul>
            <li v-for="index in item">{{ index }}</li>
        </ul>
    </div>
</template>

<script>
    export default{
        props: {
            item: {
                type: Array,
                default: ()=>{
                    return []
                }
            }
        },
        data () {
            return {
                all: 0,
                arr: [1,2,3],
                isReverse: true,
                operate: 'yoo'
            }
        },
        methods: {
            plusCount () {
                this.all = this.arr.reduce((a,b) => a+b, 10)
            }
        },
        computed: {
            setReverse () {
                return this.operate = this.isReverse ? this.operate.split("").reverse().join("") : this.operate
            }
        }
    }
</script>