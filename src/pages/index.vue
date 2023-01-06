<template>
</template>
<script>

export default {
    name: "IndexPage",
    head() {
        return {
            title: "Index"
        };
    },
    data() {
      return {
      }
    },
    mounted() {
      // this.$router.push('/home/')
      let user = localStorage.getItem('b55C1tJxCtH/6r637k3QQQ==')
        if(user == null){
            this.$router.push('/auth')
        }else{
            this.$router.push('/home')
        }
    }
}
</script>