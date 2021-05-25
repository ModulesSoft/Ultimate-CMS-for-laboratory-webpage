<template>
    <div class="w3-container" dir="ltr">
        <div v-for="students in chunkedStudents" class="w3-row w3-animate-zoom">
            <router-link :to="{ name: 'Student', params: { studentName: student.name.en }}"
                         v-for="(student,i) in students" :key="i" class="w3-col s2  grid-item  w3-opacity">
                <div>
                    <img v-lazy="student.image"
                         :class="{imageRtl:rtl,image:!rtl}">
                    <strong :class="{roleRtl:rtl,role:!rtl}">
                        {{student.role}}
                        <hr>
                    </strong>
                </div>
                <div v-if="!rtl" class="intro">
                    <div><strong>{{student.name.en}}</strong></div>
                    <div><strong>Supervisor: </strong>{{student.supervisor.en}}</div>
                    <div>
                        <strong>Research: </strong>
                        <div style="display: inline">
                            {{student.research_title.en.substring(0,60)}} [...]
                        </div>
                    </div>
                </div>
                <div v-else :class="{introRtl:rtl,intro:!rtl}" dir="rtl">
                    <div v-if="student.research_title.fa_IR">
                        <div><strong>{{student.name.fa_IR}}</strong></div>
                        <div><strong>استاد راهنما: </strong>{{student.supervisor.fa_IR}}</div>
                        <div>
                            <strong>تحقیقات:</strong>
                            <div style="display: inline">
                                {{student.research_title.fa_IR.substring(0,60)}} [...]
                            </div>
                        </div>
                    </div>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
    var chunk = require('chunk')
    export default {
        name: "Students",
        data() {
            return {
                rtl: false,
                chunkedStudents: null
            }
        },
        watch: {
            '$route.params.filter': {
                handler: function (filter) {
                    axios.get('/api/getStudents/' + filter).then(response => {
                        this.chunkedStudents = chunk(response.data, 3)
                    }).catch(error => console.log(error))
                },
                deep: true,
                immediate: true
            }
        },
        mounted() {
            if (this.$i18n.locale == 'en') {
                this.rtl = false
                document.title = 'Students - Biofluids Labratory Amirkabir University of Technology';
            } else {
                document.title = 'دانشجویان - آزمایشگاه سیالات مهندسی زیست پزشکی امیرکبیر';
                this.rtl = true
            }
        }, methods: {
            showInfo(id) {
                console.log(id);
            }
        }
    }
</script>

<style scoped>
    .w3-opacity:hover {
        opacity: 1;
        -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
        filter: grayscale(100%);
        transition: .5s ease;
        color: #009688;
    }

    .w3-opacity {
        opacity: 0.9;
        transition: .5s ease;
        filter: none;
    }

    a {
        color: #0a0a0a;
    }

    .role {
        margin-top: 20%;
        position: absolute;
        left: 1vh;
    }

    .roleRtl {
        margin-top: 20%;
        position: absolute;
        right: 1vh;
    }

    .intro {
        position: absolute;
        text-align: left;
        top: 200px;
        left: 5%;
    }

    .introRtl {
        position: absolute;
        text-align: right;
        top: 200px;
        right: 5%;
    }

    .image {
        height: 170px;
        width: 170px;
        position: absolute;
        right: 0;
        top: 0;
        border-radius: 3px;
    }

    .imageRtl {
        height: 170px;
        width: 170px;
        position: absolute;
        left: 0;
        top: 0;
        border-radius: 3px;
    }

    .grid-item {
        position: relative;
        width: 31%;
        margin: 1%;
        /*font-size: 1em;*/
        height: 70vh;
        cursor: pointer;
        background-color: white !important;
        box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2), 0 4px 20px 0 rgba(0, 0, 0, 0.19);
        border-radius: 5px;
    }

    @media screen and (max-width: 1000px) {
        .intro {
            top: 200px;
        }

        .introRtl {
            top: 200px;
        }
        .role {
            left: 1vh;
            margin-top: 150px;
        }

        .roleRtl {
            right: 1vh;
            margin-top: 150px;
        }
        .w3-container {
            margin: 10% !important;
        }

        .grid-item {
            width: 100%;
            margin: 2%;
            /*height: 50vh;*/
            /*font-size: 2em !important;*/
        }

        .image {
            height: 150px;
            width: 150px;
        }
        .imageRtl {
            height: 150px;
            width: 150px;
        }
    }
</style>