<template>
    <div v-if="columns!=0" class="w3-container w3-padding-32 w3-dark-grey">
        <div class="w3-row-padding">
            <div v-for="article in articles" :class="columns">
                <div v-if="!rtl" v-html="article.content.en"></div>
                <div v-else v-html="article.content.fa_IR"></div>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: "Footerr",
        data() {
            return {
                articles: null,
                columns : null,
                rtl : false
            }
        },
        mounted() {
            if (this.$i18n.locale == 'en') {
                this.rtl = false
            } else {
                this.rtl = true
            }
            axios.get('/api/footer').then(response => {
                this.articles = response.data
                if(this.articles.length==1){
                    this.columns = "w3-rest"
                }else if(this.articles.length==2){
                    this.columns = "w3-half"
                }else if(this.articles.length==3){
                    this.columns = "w3-third"
                }else if(this.articles.length==0){
                    this.columns = 0
                }
            }).catch(error => console.log(error))

        }
    }
</script>

<style scoped>

</style>