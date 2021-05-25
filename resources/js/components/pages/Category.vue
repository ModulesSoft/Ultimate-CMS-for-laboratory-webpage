<template>
    <div>
        <Content v-if="contentModal" @close="contentModal=false" :rtl="contentModalRtl" :title="contentModalTitle"
                 :content="contentModalContent" :image="contentModalImage"></Content>
        <div v-if="galleryView">
            <Gallery></Gallery>
        </div>
        <div v-else v-for="articles in chunkedArticles" class="w3-container w3-row" style="padding: 2%">
            <div v-for="article in articles" class="w3-container w3-cell w3-mobile" :style="{width: style}">
                <div class=" w3-card-4 w3-animate-zoom">
                    <header class="w3-container w3-light-grey">
                        <h3 v-if="rtl" dir="rtl">{{article.title.fa_IR}}</h3>
                        <h3 v-else>{{article.title.en}}</h3>
                    </header>
                    <div class="w3-container">
                        <img v-lazy="'/'+article.image" alt="Avatar" class="w3-left w3-circle w3-margin-right"
                             :class="{'w3-left':!rtl,'w3-right':rtl}"
                             style="width:100px;margin-top: 2%;"
                             :alt="article.title.en">
                        <p style="margin-top: 5%;" v-if="rtl"
                           v-html="article.content.fa_IR.substring(0,substringChars.fa_IR)"></p>
                        <p style="margin-top: 5%" v-else v-html="article.content.en.substring(0,substringChars.en)"></p>
                        <br>
                    </div>
                    <button v-if="rtl && article.content.fa_IR.length>substringChars.fa_IR"
                            class="w3-button w3-block w3-green"
                            @click="showContent(article.title.fa_IR,article.content.fa_IR,article.image,true)"> بیشتر +
                    </button>
                    <button v-if="!rtl && article.content.en.length>substringChars.en"
                            class="w3-button w3-block w3-green"
                            @click="showContent(article.title.en,article.content.en,article.image,false)">+ more
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Content from "./Content"
    import Gallery from "./Gallery"
    var chunk = require('chunk')
    export default {
        name: "category",
        components: {Gallery, Content},
        data() {
            return {
                chunkedArticles: null,
                contentModal: false,
                contentModalTitle: '',
                contentModalContent: '',
                contentModalImage: '',
                contentModalRtl: false,
                rtl: false,
                substringChars: 0,
                style: '100%',
                galleryView: false
            }
        },
        watch: {
            '$route.params.slug': {
                handler: function (slug) {
                    if (slug == 'gallery') {
                        this.galleryView = true
                        if(!this.rtl){
                            document.title = "Gallery - biological fluids Laboratory AUT"
                        }else {
                            document.title = "گالری - آزمایشگاه سیالات مهندسی زیست پزشکی امیرکبیر "
                        }
                    } else {
                        this.galleryView = false
                        axios.get('/api/articleByCategory/' + slug).then(response => {
                            if(!this.rtl){
                                document.title = slug.split('-')[0]+" - biological fluids Laboratory AUT"
                            }else {
                                document.title = slug.split('-')[0]+" - آزمایشگاه سیالات مهندسی زیست پزشکی امیرکبیر "
                            }
                            if (window.innerWidth < 1000) {
                                this.chunkedArticles = chunk(response.data, 1)
                                this.style = (100) + '%'
                            }else {
                                this.chunkedArticles = chunk(response.data, slug.split('-')[1])
                                this.style = (100 / slug.split('-')[1]) + '%'
                            }
                            // console.log(response.data);
                        }).catch(error => console.log(error))
                    }
                },
                deep: true,
                immediate: true
            }
        }, mounted() {
            if (this.$i18n.locale == 'en') {
                this.rtl = false
            } else {
                this.rtl = true
            }
            axios.get('/api/getSubstringCharsNumber').then(response => {
                this.substringChars = response.data[0].value
            }).catch(error => console.log(error))
        }, methods: {
            showContent(title, content, image, rtl) {
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