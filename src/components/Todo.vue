<template>
    <div>
        <h1>Todoリスト</h1>
        <input type="text" v-model="input" ref="editor">
        <form v-on:submit.prevent="addList">
            <button click="btn btn-primary" type="submit">{{changeButton}}</button>
        </form>
        <ul>
            <li v-for="(item, index) in todos" v-bind:key="item">{{item}}
                <button class="btn btn-info" v-on:click="edit(index)"><span>編集</span></button>
                <button class="btn btn-warning" v-on:click="remove(index)"><span>削除</span></button>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "Todo",
        data: function() {
            return {
                input: "",
                editIndex: -1,
                todos:[]
            };
        },
        //編集
        computed:{
            changeButton() {
                return this.editIndex === -1 ? "追加" : "編集";
            }
        },
        methods:{
            //送信ボタンをクリックしたら以下を実行
            addList:function(){
                //追加
                if(this.editIndex === -1){
                    this.todos.push(
                        this.input
                )} else {
                        this.todos.splice(
                            this.editIndex,1, this.input,
                        );
                    }
                    this.cancel();
                    },
                //クリア
                cancel(){
                    this.input = '';
                    this.editIndex = -1;
                },
                //編集
                edit(index){
                    this.editIndex = index;
                    this.input = this.todos[index];
                    this.$refs.editor.focus();
                    //return this.editIndex = 0;
                },
                //削除
                remove(index){
                    if(confirm('削除しますか')) {
                        this.todos.splice(index, 1);
                    }
                },
            },
        }
</script>

<style scoped>

</style>