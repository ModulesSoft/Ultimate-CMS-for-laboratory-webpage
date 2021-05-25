(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/Category.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/Category.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Content__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Content */ "./resources/js/components/pages/Content.vue");
/* harmony import */ var _Gallery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Gallery */ "./resources/js/components/pages/Gallery.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



var chunk = __webpack_require__(/*! chunk */ "./node_modules/chunk/src/chunk.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "category",
  components: {
    Gallery: _Gallery__WEBPACK_IMPORTED_MODULE_1__["default"],
    Content: _Content__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
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
    };
  },
  watch: {
    '$route.params.slug': {
      handler: function handler(slug) {
        var _this = this;

        if (slug == 'gallery') {
          this.galleryView = true;

          if (!this.rtl) {
            document.title = "Gallery - biological fluids Laboratory AUT";
          } else {
            document.title = "گالری - آزمایشگاه سیالات مهندسی زیست پزشکی امیرکبیر ";
          }
        } else {
          this.galleryView = false;
          axios.get('/api/articleByCategory/' + slug).then(function (response) {
            if (!_this.rtl) {
              document.title = slug.split('-')[0] + " - biological fluids Laboratory AUT";
            } else {
              document.title = slug.split('-')[0] + " - آزمایشگاه سیالات مهندسی زیست پزشکی امیرکبیر ";
            }

            if (window.innerWidth < 1000) {
              _this.chunkedArticles = chunk(response.data, 1);
              _this.style = 100 + '%';
            } else {
              _this.chunkedArticles = chunk(response.data, slug.split('-')[1]);
              _this.style = 100 / slug.split('-')[1] + '%';
            } // console.log(response.data);

          })["catch"](function (error) {
            return console.log(error);
          });
        }
      },
      deep: true,
      immediate: true
    }
  },
  mounted: function mounted() {
    var _this2 = this;

    if (this.$i18n.locale == 'en') {
      this.rtl = false;
    } else {
      this.rtl = true;
    }

    axios.get('/api/getSubstringCharsNumber').then(function (response) {
      _this2.substringChars = response.data[0].value;
    })["catch"](function (error) {
      return console.log(error);
    });
  },
  methods: {
    showContent: function showContent(title, content, image, rtl) {
      this.contentModal = true;
      this.contentModalContent = content;
      this.contentModalTitle = title;
      this.contentModalRtl = rtl;
      this.contentModalImage = image;
    },
    hideContent: function hideContent() {
      this.$modal.hide('content');
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/Gallery.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/Gallery.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_image_lightbox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-image-lightbox */ "./node_modules/vue-image-lightbox/dist/vue-image-lightbox.min.js");
/* harmony import */ var vue_image_lightbox__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_image_lightbox__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var video_js_dist_video_js_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! video.js/dist/video-js.min.css */ "./node_modules/video.js/dist/video-js.min.css");
/* harmony import */ var video_js_dist_video_js_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(video_js_dist_video_js_min_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue_video_player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-video-player */ "./node_modules/vue-video-player/dist/vue-video-player.js");
/* harmony import */ var vue_video_player__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_video_player__WEBPACK_IMPORTED_MODULE_2__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


__webpack_require__(/*! vue-image-lightbox/dist/vue-image-lightbox.min.css */ "./node_modules/vue-image-lightbox/dist/vue-image-lightbox.min.css");



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    LightBox: vue_image_lightbox__WEBPACK_IMPORTED_MODULE_0___default.a,
    videoPlayer: vue_video_player__WEBPACK_IMPORTED_MODULE_2__["videoPlayer"]
  },
  mounted: function mounted() {
    var _this = this;

    if (this.$i18n.locale == 'en') {
      this.rtl = false;
    } else {
      this.rtl = true;
    }

    axios.get('/api/articleByCategory/gallery').then(function (response) {
      for (var i = 0; i < response.data.length; i++) {
        var item = response.data[i];

        if (item.image && (item.image.includes(".jpg") || item.image.includes(".jpeg") || item.image.includes(".png") || item.image.includes(".JPG") || item.image.includes(".JPEG") || item.image.includes(".PNG"))) {
          if (_this.rtl) {
            var img = {
              thumb: '/' + item.image,
              src: '/' + item.image,
              caption: item.content.fa_IR // Optional
              // srcset:
              //     '...' // Optional for displaying responsive images

            };
          } else {
            var img = {
              thumb: '/' + item.image,
              src: '/' + item.image,
              caption: item.content.en // Optional
              // srcset:
              //     '...' // Optional for displaying responsive images

            };
          }

          _this.images.push(img);
        } else {
          if (window.innerWidth < 1000) {
            var vidWidth = '300px';
            var vidHeight = '250px';
          } else {
            var vidWidth = '250px';
            var vidHeight = '200px';
          }

          if (_this.rtl) {
            var vid = {
              width: vidWidth,
              height: vidHeight,
              muted: false,
              language: 'en',
              // playbackRates: [0.7, 1.0, 1.5, 2.0],
              sources: [{
                type: "video/mp4",
                src: "/" + item.image
              }],
              caption: item.content.fa_IR
            };
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
              }],
              caption: item.content.en
            };
          }

          _this.videos.push(vid);
        }
      }
    })["catch"](function (error) {
      return console.log(error);
    });
  },
  data: function data() {
    return {
      test: null,
      videos: [],
      showLight: false,
      startAt: 0,
      images: []
    };
  },
  methods: {
    show: function show(i) {
      this.showLight = true;
      this.startAt = i;
    },
    onOpened: function onOpened(value) {
      this.showLight = value;
    },
    onPlayerPlay: function onPlayerPlay(player) {// console.log('player play!', player)
    },
    onPlayerPause: function onPlayerPause(player) {// console.log('player pause!', player)
    },
    // ...player event
    // or listen state event
    playerStateChanged: function playerStateChanged(playerCurrentState) {// console.log('player current update state', playerCurrentState)
    },
    // player is ready
    playerReadied: function playerReadied(player) {// console.log('the player is readied', player)
      // you can use it to do something...
      // player.[methods]
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/Gallery.vue?vue&type=style&index=0&id=7e0bc82c&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/Gallery.vue?vue&type=style&index=0&id=7e0bc82c&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\ndiv.gallery[data-v-7e0bc82c] {\n    margin: 25px;\n    border: 1px solid #ccc;\n    float: left;\n    cursor: pointer;\n}\ndiv.gallery[data-v-7e0bc82c]:hover {\n    border: 1px solid #777;\n}\ndiv.gallery img[data-v-7e0bc82c]{\n    height: 200px;\n    width: auto;\n}\nimg video-player .text[data-v-7e0bc82c]{\n    height: 250px;\n    width: 200px;\n}\n@media screen and (max-width: 1000px) {\ndiv.gallery img[data-v-7e0bc82c] {\n        width: 100%;\n        height:auto;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/Gallery.vue?vue&type=style&index=0&id=7e0bc82c&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/Gallery.vue?vue&type=style&index=0&id=7e0bc82c&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--5-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--5-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Gallery.vue?vue&type=style&index=0&id=7e0bc82c&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/Gallery.vue?vue&type=style&index=0&id=7e0bc82c&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/Category.vue?vue&type=template&id=3b9ddcd8&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/Category.vue?vue&type=template&id=3b9ddcd8&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _vm.contentModal
        ? _c("Content", {
            attrs: {
              rtl: _vm.contentModalRtl,
              title: _vm.contentModalTitle,
              content: _vm.contentModalContent,
              image: _vm.contentModalImage
            },
            on: {
              close: function($event) {
                _vm.contentModal = false
              }
            }
          })
        : _vm._e(),
      _vm._v(" "),
      _vm.galleryView
        ? _c("div", [_c("Gallery")], 1)
        : _vm._l(_vm.chunkedArticles, function(articles) {
            return _c(
              "div",
              {
                staticClass: "w3-container w3-row",
                staticStyle: { padding: "2%" }
              },
              _vm._l(articles, function(article) {
                return _c(
                  "div",
                  {
                    staticClass: "w3-container w3-cell w3-mobile",
                    style: { width: _vm.style }
                  },
                  [
                    _c("div", { staticClass: " w3-card-4 w3-animate-zoom" }, [
                      _c(
                        "header",
                        { staticClass: "w3-container w3-light-grey" },
                        [
                          _vm.rtl
                            ? _c("h3", { attrs: { dir: "rtl" } }, [
                                _vm._v(_vm._s(article.title.fa_IR))
                              ])
                            : _c("h3", [_vm._v(_vm._s(article.title.en))])
                        ]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "w3-container" }, [
                        _c("img", {
                          directives: [
                            {
                              name: "lazy",
                              rawName: "v-lazy",
                              value: "/" + article.image,
                              expression: "'/'+article.image"
                            }
                          ],
                          staticClass: "w3-left w3-circle w3-margin-right",
                          class: { "w3-left": !_vm.rtl, "w3-right": _vm.rtl },
                          staticStyle: { width: "100px", "margin-top": "2%" },
                          attrs: { alt: "Avatar", alt: article.title.en }
                        }),
                        _vm._v(" "),
                        _vm.rtl
                          ? _c("p", {
                              staticStyle: { "margin-top": "5%" },
                              domProps: {
                                innerHTML: _vm._s(
                                  article.content.fa_IR.substring(
                                    0,
                                    _vm.substringChars.fa_IR
                                  )
                                )
                              }
                            })
                          : _c("p", {
                              staticStyle: { "margin-top": "5%" },
                              domProps: {
                                innerHTML: _vm._s(
                                  article.content.en.substring(
                                    0,
                                    _vm.substringChars.en
                                  )
                                )
                              }
                            }),
                        _vm._v(" "),
                        _c("br")
                      ]),
                      _vm._v(" "),
                      _vm.rtl &&
                      article.content.fa_IR.length > _vm.substringChars.fa_IR
                        ? _c(
                            "button",
                            {
                              staticClass: "w3-button w3-block w3-green",
                              on: {
                                click: function($event) {
                                  return _vm.showContent(
                                    article.title.fa_IR,
                                    article.content.fa_IR,
                                    article.image,
                                    true
                                  )
                                }
                              }
                            },
                            [_vm._v(" بیشتر +\n                ")]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.rtl &&
                      article.content.en.length > _vm.substringChars.en
                        ? _c(
                            "button",
                            {
                              staticClass: "w3-button w3-block w3-green",
                              on: {
                                click: function($event) {
                                  return _vm.showContent(
                                    article.title.en,
                                    article.content.en,
                                    article.image,
                                    false
                                  )
                                }
                              }
                            },
                            [_vm._v("+ more\n                ")]
                          )
                        : _vm._e()
                    ])
                  ]
                )
              }),
              0
            )
          })
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/Gallery.vue?vue&type=template&id=7e0bc82c&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/Gallery.vue?vue&type=template&id=7e0bc82c&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticStyle: { "padding-left": "4%" }, attrs: { dir: "ltr" } },
    [
      _vm.showLight
        ? _c("LightBox", {
            attrs: {
              images: _vm.images,
              showCaption: true,
              startAt: _vm.startAt
            },
            on: { onOpened: _vm.onOpened }
          })
        : _vm._e(),
      _vm._v(" "),
      _vm._l(_vm.images, function(image, i) {
        return _c("div", { key: i, staticClass: "gallery" }, [
          _c("img", {
            attrs: { src: image.thumb, alt: _vm.caption },
            on: {
              click: function($event) {
                return _vm.show(i)
              }
            }
          })
        ])
      }),
      _vm._v(" "),
      _vm._l(_vm.videos, function(video) {
        return _c(
          "div",
          { staticClass: "gallery" },
          [
            _c("video-player", {
              ref: "videoPlayer",
              refInFor: true,
              staticClass: "video-player-box",
              staticStyle: { "font-size": "0.5em !important" },
              attrs: { options: video, playsinline: true }
            }),
            _vm._v(" "),
            _c("div", {
              staticClass: "text",
              staticStyle: {
                color: "white",
                padding: "1%",
                "overflow-wrap": "break-word"
              },
              domProps: { innerHTML: _vm._s(video.caption) }
            })
          ],
          1
        )
      })
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/pages/Category.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/pages/Category.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Category_vue_vue_type_template_id_3b9ddcd8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Category.vue?vue&type=template&id=3b9ddcd8&scoped=true& */ "./resources/js/components/pages/Category.vue?vue&type=template&id=3b9ddcd8&scoped=true&");
/* harmony import */ var _Category_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Category.vue?vue&type=script&lang=js& */ "./resources/js/components/pages/Category.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Category_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Category_vue_vue_type_template_id_3b9ddcd8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Category_vue_vue_type_template_id_3b9ddcd8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "3b9ddcd8",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/Category.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/pages/Category.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/pages/Category.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Category_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Category.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/Category.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Category_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pages/Category.vue?vue&type=template&id=3b9ddcd8&scoped=true&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/pages/Category.vue?vue&type=template&id=3b9ddcd8&scoped=true& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Category_vue_vue_type_template_id_3b9ddcd8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Category.vue?vue&type=template&id=3b9ddcd8&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/Category.vue?vue&type=template&id=3b9ddcd8&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Category_vue_vue_type_template_id_3b9ddcd8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Category_vue_vue_type_template_id_3b9ddcd8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/pages/Gallery.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/pages/Gallery.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Gallery_vue_vue_type_template_id_7e0bc82c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Gallery.vue?vue&type=template&id=7e0bc82c&scoped=true& */ "./resources/js/components/pages/Gallery.vue?vue&type=template&id=7e0bc82c&scoped=true&");
/* harmony import */ var _Gallery_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Gallery.vue?vue&type=script&lang=js& */ "./resources/js/components/pages/Gallery.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Gallery_vue_vue_type_style_index_0_id_7e0bc82c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Gallery.vue?vue&type=style&index=0&id=7e0bc82c&scoped=true&lang=css& */ "./resources/js/components/pages/Gallery.vue?vue&type=style&index=0&id=7e0bc82c&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Gallery_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Gallery_vue_vue_type_template_id_7e0bc82c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Gallery_vue_vue_type_template_id_7e0bc82c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "7e0bc82c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/Gallery.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/pages/Gallery.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/pages/Gallery.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Gallery_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Gallery.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/Gallery.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Gallery_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pages/Gallery.vue?vue&type=style&index=0&id=7e0bc82c&scoped=true&lang=css&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/pages/Gallery.vue?vue&type=style&index=0&id=7e0bc82c&scoped=true&lang=css& ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Gallery_vue_vue_type_style_index_0_id_7e0bc82c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--5-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--5-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Gallery.vue?vue&type=style&index=0&id=7e0bc82c&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/Gallery.vue?vue&type=style&index=0&id=7e0bc82c&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Gallery_vue_vue_type_style_index_0_id_7e0bc82c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Gallery_vue_vue_type_style_index_0_id_7e0bc82c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Gallery_vue_vue_type_style_index_0_id_7e0bc82c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Gallery_vue_vue_type_style_index_0_id_7e0bc82c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Gallery_vue_vue_type_style_index_0_id_7e0bc82c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/pages/Gallery.vue?vue&type=template&id=7e0bc82c&scoped=true&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/pages/Gallery.vue?vue&type=template&id=7e0bc82c&scoped=true& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Gallery_vue_vue_type_template_id_7e0bc82c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Gallery.vue?vue&type=template&id=7e0bc82c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/Gallery.vue?vue&type=template&id=7e0bc82c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Gallery_vue_vue_type_template_id_7e0bc82c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Gallery_vue_vue_type_template_id_7e0bc82c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ 1:
/*!******************************!*\
  !*** min-document (ignored) ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

}]);