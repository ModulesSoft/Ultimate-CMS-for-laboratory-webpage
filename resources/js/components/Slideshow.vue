<template>
    <div class="carousel" dir="ltr">
        <carousel :per-page="1" :mouse-drag="true" :navigationEnabled="true"
                  :autoplay="true" :autoplayTimeout="3000" :centerMode="false" :loop="true" :adjustableHeight="true"
                  paginationPosition="bottom-overlay" paginationActiveColor="#efefef" paginationColor="#616161"
                  :paginationSize="15"
        >
            <slide v-for="(slide,i) in slides" :key="i">
                <div class="container">

                    <img class="carouselImage"
                         v-lazy="'/'+slide.image"
                         alt="biofluids-slide">

                    <!--<div class="bottom-left">Bottom Left</div>-->
                    <!--<div class="top-left">Top Left</div>-->
                    <!--<div class="top-right">Top Right</div>-->
                    <!--<div class="bottom-right">Bottom Right</div>-->
                    <div class="centered">
                        <div v-if="!rtl" v-html="slide.content.en"></div>
                        <div v-if="rtl" v-html="slide.content.fa_IR"></div>
                    </div>
                </div>
            </slide>
        </carousel>
    </div>
</template>

<script>
    import {Carousel, Slide} from 'vue-carousel';

    export default {
        name: "Slideshow",
        components: {
            Carousel,
            Slide
        },
        data() {
            return {
                slides: null,
                rtl: false
            }
        },
        created() {
            if (this.$i18n.locale == 'en') {
                this.rtl = false
            } else {
                this.rtl = true
            }
            axios.get('/api/articleByCategory/slides').then(response => {
                this.slides = response.data
                // console.log(response.data);
            }).catch(error => console.log(error))
        }

    }
</script>

<style scoped>
    * {
        font-size: 1em !important;
        line-height: 1.05;
    }

    .carouselImage {
        display: block !important;
        width: 100% !important;
        height: 100%;
        border-radius: 5px;
    }

    .carousel {
        position: relative;
        width: 80%;
        margin: 10%;
        margin-top: 3%;
        box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2), 0 4px 20px 0 rgba(0, 0, 0, 0.19) !important;
    }




    .container {
        position: relative;
        text-align: center;
        color: white;
    }

    .carousel-caption {
        position: relative;
        margin-top: -30%;
        /*margin-left: 10%;*/
        /*z-index: 10!important;*/
        /*padding-top: 20px;*/
        /*padding-bottom: 20px;*/
        /*color: #fff;*/
        text-align: center
    }
    /* Bottom left text */
    .bottom-left {
        position: absolute;
        bottom: 8px;
        left: 16px;
    }

    /* Top left text */
    .top-left {
        position: absolute;
        top: 8px;
        left: 16px;
    }

    /* Top right text */
    .top-right {
        position: absolute;
        top: 8px;
        right: 16px;
    }

    /* Bottom right text */
    .bottom-right {
        position: absolute;
        bottom: 8px;
        right: 16px;
    }

    /* Centered text */
    .centered {
        position: absolute;
        top: 80%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    @media screen and (max-width: 1000px) {
        * {
            font-size: 0.8em !important;
            line-height: 1.05;
        }
    }
</style>