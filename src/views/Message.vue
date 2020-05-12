<template>
    <div>
        <router-link to="/home">ホーム</router-link>
        <router-link to="/todo">することリスト</router-link>
        <h1>メッセージ</h1>
            <!--<tr>
                <th class="id">ID</th>
                <th class="message">コメント</th>
                <th class="time">時間</th>
            </tr>-->
        <input class="inputMessage" type="text" v-model="message" placeholder="内容を入力してください。">
        <from v-on:submit.prevent="addButton">
              <button click="btn btn-primary" type="submit">送信</button>
        </from>
        <ul>
            <li v-for="(item, index) in messageList" v-bind:key="item">
                {{item}}
                {{$data}}
                <button class="btn btn-warning" v-on:click="remove(index)"><span>削除</span></button>
                <!--<th>{{item.id}}</th>
                <th>{{item.message}}</th>
                <th>{{item.time}}</th>-->
            </li>
        </ul>
    </div>
</template>

<script>
    //import main from './main.js'
    export default {
        name: "Message",
        data:function () {
            return{
                message: "",
                messageList:[]
            }
        },
        methods:{
            //送信ボタン
            addButton:function () {
                this.messageList.push(this.message)
            },
            remove(index){
                if(confirm('削除しますか')) {
                    this.todos.splice(index, 1);
                }
            },
        }
    }
</script>

<style scoped>
    .inputMessage{
        margin-top: 200px;
        padding-bottom: 5px;
    }
    .addButton{
        margin-left: 20px;
    }

</style>