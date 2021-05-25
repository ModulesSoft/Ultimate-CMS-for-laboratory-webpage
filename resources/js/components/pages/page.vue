<template>
    <div class="w3-light-grey" style="padding: 2% 3%;">
        <div v-for="pag in page">
            <head v-if="pag.extras">
                <meta name="keywords" :content="pag.extras.meta_keywords">
                <meta name="description" :content="pag.extras.meta_description">
            </head>
            <div v-if="!rtl" class="w3-animate-top" v-html="pag.content.en"></div>
            <div v-else class="w3-animate-top" v-html="pag.content.fa_IR"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "page",
        data() {
            return {
                page: null,
                rtl: false
            }
        },
        watch: {
            '$route.params.slug': {
                handler: function (slug) {
                    if(!this.rtl){
                        document.title = slug.replace('-',' ') + " - biological fluids Laboratory AUT";
                    }else {
                        document.title = slug.replace('-',' ') + " - آزمایشگاه سیالات مهندسی زیست پزشکی امیرکبیر";
                    }
                    axios.get('/api/page/' + this.$route.params.slug).then(response => {
                        this.page = response.data
                        // console.log(this.page)
                    }).catch(error => console.log(error))
                },
                deep: true,
                immediate: true
            }
        },
        mounted() {
            if (this.$i18n.locale == 'en') {
                this.rtl = false
            } else {
                this.rtl = true
            }
        }
    }
</script>

<style scoped>
</style>