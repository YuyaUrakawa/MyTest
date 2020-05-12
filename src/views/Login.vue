<template>
    <div>
        <h1>ログイン</h1>
        <div class="main">
            <li class="loginMail">メール</li>
            <input type="email">
            <li class="loginPass">パスワード</li>
            <input type="password">
            <li>
                <router-link :to="{name:'Login-home'}" button class="btn btn-primary"  type="submit" >home</router-link>
            </li>
            <li>
                <button class="btn btn-primary" type="submit">Googleアカウントでログイン</button>
            </li>
        </div>
        <router-view />
    </div>
</template>

<script>
    export default {
        name: "Login"
    }
</script>

<style scoped>

</style>