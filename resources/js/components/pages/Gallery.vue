<template>
    <div style="padding-left: 4%" dir="ltr">
        <LightBox :images="images" v-if="showLight" @onOpened="onOpened" :showCaption="true"
                  :startAt="startAt"></LightBox>

        <div v-for="(image,i) in images" :key="i" class="gallery">
            <img :src="image.thumb" @click="show(i)"
                 :alt="caption"
            >
        </div>
        <div v-for="video in videos" class="gallery">
            <video-player class="video-player-box"
                          ref="videoPlayer"
                          style="font-size: 0.5em !important;"
                          :options="video"
                          :playsinline="true">
            </video-player>
            <div class="text" style="color: white;padding: 1%;overflow-wrap: break-word;" v-html="video.caption"></div>
        </div>
    </div>
</template>

<script>
    import LightBox from 'vue-image-lightbox'

    require('vue-image-lightbox/dist/vue-image-lightbox.min.css')
    import 'video.js/dist/video-js.min.css'
    import {videoPlayer} from 'vue-video-player'

    export default {
        components: {
            LightBox, videoPlayer
        },
        mounted() {
            if (this.$i18n.locale == 'en') {
                this.rtl = false
            } else {
                this.rtl = true
            }
            axios.get('/api/articleByCategory/gallery').then(response => {
                    for (let i = 0; i < response.data.length; i++) {
                        let item = response.data[i]
                        if (item.image && (item.image.includes(".jpg") || item.image.includes(".jpeg") || item.image.includes(".png") || item.image.includes(".JPG") || item.image.includes(".JPEG") || item.image.includes(".PNG"))) {
                            if (this.rtl) {
                                var img = {
                                    thumb: '/' + item.image,
                                    src: '/' + item.image,
                                    caption: item.content.fa_IR, // Optional
                                    // srcset:
                                    //     '...' // Optional for displaying responsive images
                                }
                            } else {
                                var img = {
                                    thumb: '/' + item.image,
                                    src: '/' + item.image,
                                    caption: item.content.en, // Optional
                                    // srcset:
                                    //     '...' // Optional for displaying responsive images
                                }
                            }
                            this.images.push(img)
                        } else {
                            if (window.innerWidth < 1000) {
                                var vidWidth = '300px'
                                var vidHeight = '250px'
                            }else {
                                var vidWidth = '250px'
                                var vidHeight = '200px'
                            }
                            if (this.rtl) {
                                var vid = {
                                    width: vidWidth,
                                    height: vidHeight,
                                    muted: false,
                                    language: 'en',
                                    // playbackRates: [0.7, 1.0, 1.5, 2.0],
                                    sources: [{
                                        type: "video/mp4",
                                        src: "/" + item.image
                                    }]
                                    , caption: item.content.fa_IR
                                }
                            } else {
                                var vid = {
                                    width: vidWidth,
                                    height: vidHeight,
                                    muted: false,
                                    language: 'en',
                                    // playbackRates: [0.7, 1.0, 1.5, 2.0],
                                    sources: [{
                                        type: "video/mp4",
                                        src: "/" + item.image
                                    }]
                                    , caption: item.content.en
                                }
                            }
                            this.videos.push(vid)
                        }
                    }
                }
            ).catch(error => console.log(error))
        },
        data() {
            return {
                test: null,
                videos: [],
                showLight: false,
                startAt: 0,
                images: []
            }
        }, methods: {
            show(i) {
                this.showLight = true
                this.startAt = i;
            },
            onOpened(value) {
                this.showLight = value
            },
            onPlayerPlay(player) {
                // console.log('player play!', player)
            },
            onPlayerPause(player) {
                // console.log('player pause!', player)
            },
            // ...player event

            // or listen state event
            playerStateChanged(playerCurrentState) {
                // console.log('player current update state', playerCurrentState)
            },

            // player is ready
            playerReadied(player) {
                // console.log('the player is readied', player)
                // you can use it to do something...
                // player.[methods]
            }
        }
    }
</script>
<style scoped>

    div.gallery {
        margin: 25px;
        border: 1px solid #ccc;
        float: left;
        cursor: pointer;
    }

    div.gallery:hover {
        border: 1px solid #777;
    }

    div.gallery img{
        height: 200px;
        width: auto;
    }
    img video-player .text{
        height: 250px;
        width: 200px;
    }

    @media screen and (max-width: 1000px) {
        div.gallery img {
            width: 100%;
            height:auto;
        }
    }
</style>