(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Slideshow.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Slideshow.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_carousel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-carousel */ "./node_modules/vue-carousel/dist/vue-carousel.min.js");
/* harmony import */ var vue_carousel__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_carousel__WEBPACK_IMPORTED_MODULE_0__);
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Slideshow",
  components: {
    Carousel: vue_carousel__WEBPACK_IMPORTED_MODULE_0__["Carousel"],
    Slide: vue_carousel__WEBPACK_IMPORTED_MODULE_0__["Slide"]
  },
  data: function data() {
    return {
      slides: null,
      rtl: false
    };
  },
  created: function created() {
    var _this = this;

    if (this.$i18n.locale == 'en') {
      this.rtl = false;
    } else {
      this.rtl = true;
    }

    axios.get('/api/articleByCategory/slides').then(function (response) {
      _this.slides = response.data; // console.log(response.data);
    })["catch"](function (error) {
      return console.log(error);
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/Home.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/Home.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Slideshow_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Slideshow.vue */ "./resources/js/components/Slideshow.vue");
/* harmony import */ var _Content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Content */ "./resources/js/components/pages/Content.vue");
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
  name: "Home",
  components: {
    slideshow: _Slideshow_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    Content: _Content__WEBPACK_IMPORTED_MODULE_1__["default"]
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
      substringChars: 0
    };
  },
  mounted: function mounted() {
    var _this = this;

    if (this.$i18n.locale == 'en') {
      this.rtl = false;
      document.title = 'Biological fluids laboratory Amirkabir University';
    } else {
      this.rtl = true;
      document.title = 'آزمایشگاه سیالات زیست پزشکی دانشگاه امیرکبیر';
    }

    axios.get('/api/getSubstringCharsNumber').then(function (response) {
      _this.substringChars = response.data[0].value;
    })["catch"](function (error) {
      return console.log(error);
    });
    axios.get('/api/getFeatured').then(function (response) {
      // this.articles = response.data
      _this.chunkedArticles = chunk(response.data, 1); // console.log(this.articles)
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

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Slideshow.vue?vue&type=style&index=0&id=7ad3bb53&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Slideshow.vue?vue&type=style&index=0&id=7ad3bb53&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n*[data-v-7ad3bb53] {\n    font-size: 1em !important;\n    line-height: 1.05;\n}\n.carouselImage[data-v-7ad3bb53] {\n    display: block !important;\n    width: 100% !important;\n    height: 100%;\n    border-radius: 5px;\n}\n.carousel[data-v-7ad3bb53] {\n    position: relative;\n    width: 80%;\n    margin: 10%;\n    margin-top: 3%;\n    box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2), 0 4px 20px 0 rgba(0, 0, 0, 0.19) !important;\n}\n.container[data-v-7ad3bb53] {\n    position: relative;\n    text-align: center;\n    color: white;\n}\n.carousel-caption[data-v-7ad3bb53] {\n    position: relative;\n    margin-top: -30%;\n    /*margin-left: 10%;*/\n    /*z-index: 10!important;*/\n    /*padding-top: 20px;*/\n    /*padding-bottom: 20px;*/\n    /*color: #fff;*/\n    text-align: center\n}\n/* Bottom left text */\n.bottom-left[data-v-7ad3bb53] {\n    position: absolute;\n    bottom: 8px;\n    left: 16px;\n}\n\n/* Top left text */\n.top-left[data-v-7ad3bb53] {\n    position: absolute;\n    top: 8px;\n    left: 16px;\n}\n\n/* Top right text */\n.top-right[data-v-7ad3bb53] {\n    position: absolute;\n    top: 8px;\n    right: 16px;\n}\n\n/* Bottom right text */\n.bottom-right[data-v-7ad3bb53] {\n    position: absolute;\n    bottom: 8px;\n    right: 16px;\n}\n\n/* Centered text */\n.centered[data-v-7ad3bb53] {\n    position: absolute;\n    top: 80%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n}\n@media screen and (max-width: 1000px) {\n*[data-v-7ad3bb53] {\n        font-size: 0.8em !important;\n        line-height: 1.05;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Slideshow.vue?vue&type=style&index=0&id=7ad3bb53&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Slideshow.vue?vue&type=style&index=0&id=7ad3bb53&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--5-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--5-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Slideshow.vue?vue&type=style&index=0&id=7ad3bb53&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Slideshow.vue?vue&type=style&index=0&id=7ad3bb53&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Slideshow.vue?vue&type=template&id=7ad3bb53&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Slideshow.vue?vue&type=template&id=7ad3bb53&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "carousel", attrs: { dir: "ltr" } },
    [
      _c(
        "carousel",
        {
          attrs: {
            "per-page": 1,
            "mouse-drag": true,
            navigationEnabled: true,
            autoplay: true,
            autoplayTimeout: 3000,
            centerMode: false,
            loop: true,
            adjustableHeight: true,
            paginationPosition: "bottom-overlay",
            paginationActiveColor: "#efefef",
            paginationColor: "#616161",
            paginationSize: 15
          }
        },
        _vm._l(_vm.slides, function(slide, i) {
          return _c("slide", { key: i }, [
            _c("div", { staticClass: "container" }, [
              _c("img", {
                directives: [
                  {
                    name: "lazy",
                    rawName: "v-lazy",
                    value: "/" + slide.image,
                    expression: "'/'+slide.image"
                  }
                ],
                staticClass: "carouselImage",
                attrs: { alt: "biofluids-slide" }
              }),
              _vm._v(" "),
              _c("div", { staticClass: "centered" }, [
                !_vm.rtl
                  ? _c("div", {
                      domProps: { innerHTML: _vm._s(slide.content.en) }
                    })
                  : _vm._e(),
                _vm._v(" "),
                _vm.rtl
                  ? _c("div", {
                      domProps: { innerHTML: _vm._s(slide.content.fa_IR) }
                    })
                  : _vm._e()
              ])
            ])
          ])
        }),
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/Home.vue?vue&type=template&id=a9aac016&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/Home.vue?vue&type=template&id=a9aac016&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
      _c("slideshow", { staticClass: "w3-animate-top" }),
      _vm._v(" "),
      _vm._l(_vm.chunkedArticles, function(articles) {
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
                staticStyle: { width: "50%" }
              },
              [
                _c("div", { staticClass: " w3-card-4 w3-animate-zoom" }, [
                  _c("header", { staticClass: "w3-container w3-light-grey" }, [
                    _vm.rtl
                      ? _c("h3", [_vm._v(_vm._s(article.title.fa_IR))])
                      : _c("h3", [_vm._v(_vm._s(article.title.en))])
                  ]),
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
                      staticClass: " w3-circle w3-margin-right",
                      class: { "w3-left": !_vm.rtl, "w3-right": _vm.rtl },
                      staticStyle: { width: "100px", "margin-top": "2%" },
                      attrs: { alt: "Avatar" }
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
                  article.content.en.length > _vm.substringChars.fa_IR
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
                  !_vm.rtl && article.content.en.length > _vm.substringChars.en
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

/***/ "./resources/js/components/Slideshow.vue":
/*!***********************************************!*\
  !*** ./resources/js/components/Slideshow.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Slideshow_vue_vue_type_template_id_7ad3bb53_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Slideshow.vue?vue&type=template&id=7ad3bb53&scoped=true& */ "./resources/js/components/Slideshow.vue?vue&type=template&id=7ad3bb53&scoped=true&");
/* harmony import */ var _Slideshow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Slideshow.vue?vue&type=script&lang=js& */ "./resources/js/components/Slideshow.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Slideshow_vue_vue_type_style_index_0_id_7ad3bb53_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Slideshow.vue?vue&type=style&index=0&id=7ad3bb53&scoped=true&lang=css& */ "./resources/js/components/Slideshow.vue?vue&type=style&index=0&id=7ad3bb53&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Slideshow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Slideshow_vue_vue_type_template_id_7ad3bb53_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Slideshow_vue_vue_type_template_id_7ad3bb53_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "7ad3bb53",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Slideshow.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Slideshow.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/components/Slideshow.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Slideshow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Slideshow.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Slideshow.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Slideshow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Slideshow.vue?vue&type=style&index=0&id=7ad3bb53&scoped=true&lang=css&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/Slideshow.vue?vue&type=style&index=0&id=7ad3bb53&scoped=true&lang=css& ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Slideshow_vue_vue_type_style_index_0_id_7ad3bb53_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--5-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--5-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Slideshow.vue?vue&type=style&index=0&id=7ad3bb53&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Slideshow.vue?vue&type=style&index=0&id=7ad3bb53&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Slideshow_vue_vue_type_style_index_0_id_7ad3bb53_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Slideshow_vue_vue_type_style_index_0_id_7ad3bb53_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Slideshow_vue_vue_type_style_index_0_id_7ad3bb53_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Slideshow_vue_vue_type_style_index_0_id_7ad3bb53_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Slideshow_vue_vue_type_style_index_0_id_7ad3bb53_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/Slideshow.vue?vue&type=template&id=7ad3bb53&scoped=true&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/Slideshow.vue?vue&type=template&id=7ad3bb53&scoped=true& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Slideshow_vue_vue_type_template_id_7ad3bb53_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Slideshow.vue?vue&type=template&id=7ad3bb53&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Slideshow.vue?vue&type=template&id=7ad3bb53&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Slideshow_vue_vue_type_template_id_7ad3bb53_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Slideshow_vue_vue_type_template_id_7ad3bb53_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/pages/Home.vue":
/*!************************************************!*\
  !*** ./resources/js/components/pages/Home.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Home_vue_vue_type_template_id_a9aac016_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.vue?vue&type=template&id=a9aac016&scoped=true& */ "./resources/js/components/pages/Home.vue?vue&type=template&id=a9aac016&scoped=true&");
/* harmony import */ var _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.vue?vue&type=script&lang=js& */ "./resources/js/components/pages/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Home_vue_vue_type_template_id_a9aac016_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Home_vue_vue_type_template_id_a9aac016_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "a9aac016",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/Home.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/pages/Home.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/pages/Home.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pages/Home.vue?vue&type=template&id=a9aac016&scoped=true&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/pages/Home.vue?vue&type=template&id=a9aac016&scoped=true& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_a9aac016_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=template&id=a9aac016&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/Home.vue?vue&type=template&id=a9aac016&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_a9aac016_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_a9aac016_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);