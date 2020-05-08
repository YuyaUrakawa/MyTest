<template>
    <div>
        <h1>メッセージ</h1>
        <head>
            <tr>
                <th class="id">ID</th>
                <th class="message">コメント</th>
                <th class="time">時間</th>
            </tr>
        </head>
        <body>
            <tr v-for="item in messageList" v-bind:key="item.id">
                <th>{{item.id}}</th>
                <th>{{item.message}}</th>
                <th>{{item.time}}</th>
            </tr>
        </body>

        <!--メッセージ入力欄及び送信ボタン-->
        <input class="inputMessage" type="text" ref="message" placeholder="内容を入力してください。">
        <button v-on:submit.prevent="addButton" class="addButton" click="btn btn-primary" type="submit">送信</button>
    </div>
</template>

<script>
    export default {
        name: "Message",
        data:function () {
            return{
                message:'',
                messageList:[]
            }
        },
        methods:{
            addButton: function (event, value) {
                var message = this.$refs.message
                if(!message.value.length){
                    return
                }
                this.messageList.push({
                    id: messageStorage.uid++,
                    message: message.value,
                })
                message.value= ''
            }
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