<template>
    <div>
        <Content v-if="contentModal" @close="contentModal=false" :rtl="contentModalRtl" :title="contentModalTitle"
                 :content="contentModalContent"  :image="contentModalImage"></Content>

        <slideshow class="w3-animate-top"></slideshow>

        <div v-for="articles in chunkedArticles" class="w3-container w3-row" style="padding: 2%">
            <div v-for="article in articles" class="w3-container w3-cell w3-mobile" style="width: 50%">

                <div class=" w3-card-4 w3-animate-zoom">
                    <header class="w3-container w3-light-grey">
                        <h3 v-if="rtl">{{article.title.fa_IR}}</h3>
                        <h3 v-else>{{article.title.en}}</h3>
                    </header>
                    <div class="w3-container">
                        <img v-lazy="'/'+article.image" alt="Avatar" class=" w3-circle w3-margin-right" :class="{'w3-left':!rtl,'w3-right':rtl}"
                             style="width:100px;margin-top: 2%;">
                        <p style="margin-top: 5%" v-if="rtl" v-html="article.content.fa_IR.substring(0,substringChars.fa_IR)"></p>
                        <p style="margin-top: 5%" v-else v-html="article.content.en.substring(0,substringChars.en)"></p>
                        <br>
                    </div>
                    <button v-if="rtl && article.content.en.length>substringChars.fa_IR" class="w3-button w3-block w3-green"
                            @click="showContent(article.title.fa_IR,article.content.fa_IR,article.image,true)"> بیشتر +
                    </button>
                    <button v-if="!rtl && article.content.en.length>substringChars.en" class="w3-button w3-block w3-green"
                            @click="showContent(article.title.en,article.content.en,article.image,false)">+ more
                    </button>
                </div>
            </div>
        </div>
        <!--</div>-->
    </div>
</template>

<script>

    import slideshow from '../Slideshow.vue'
    import Content from "./Content"

    var chunk = require('chunk')

    export default {
        name: "Home",
        components: {slideshow, Content},
        data() {
            return {
                chunkedArticles: null,
                contentModal: false,
                contentModalTitle: '',
                contentModalContent: '',
                contentModalImage:'',
                contentModalRtl: false,
                rtl: false,
                substringChars:0
            }
        },
        mounted() {
            if (this.$i18n.locale == 'en') {
                this.rtl = false
                document.title='Biological fluids laboratory Amirkabir University'
            } else {
                this.rtl = true
                document.title='آزمایشگاه سیالات زیست پزشکی دانشگاه امیرکبیر'
            }
            axios.get('/api/getSubstringCharsNumber').then(response => {
                this.substringChars = response.data[0].value
            }).catch(error => console.log(error))
            axios.get('/api/getFeatured').then(response => {
                // this.articles = response.data
                this.chunkedArticles = chunk(response.data,1)
                // console.log(this.articles)
            }).catch(error => console.log(error))
        },
        methods: {
            showContent(title, content,image, rtl) {
                this.contentModal = true
                this.contentModalContent = content
                this.contentModalTitle = title
                this.contentModalRtl = rtl
                this.contentModalImage = image

            },
            hideContent() {
                this.$modal.hide('content');
            }
        }
    }
</script>

<style scoped>
</style>