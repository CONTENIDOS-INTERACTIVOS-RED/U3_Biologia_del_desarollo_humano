(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1e640474"],{3209:function(t,a,e){"use strict";e("99af");a["a"]={props:{audio:{type:String,default:""}},data:function(){return{audioElement:null,audioCanPlay:!1,audioDuration:0,currentTime:0,state:"pause"}},computed:{currentTimeDisplay:function(){return this.getTimeFormated(this.currentTime)},audioDurationDisplay:function(){return this.getTimeFormated(this.audioDuration)}},mounted:function(){var t=this;this.audioElement=this.createAudioElement(),this.audioElement.oncanplay=function(){t.audioCanPlay=!0},this.audioElement.onloadedmetadata=function(a){var e=a.target;t.audioCanPlay=!0,t.audioDuration=e.duration},this.audioElement.onended=function(){t.audioElement.currentTime=0,t.state="pause"},this.audioElement.ontimeupdate=function(a){var e=a.target;t.currentTime=e.currentTime}},beforeDestroy:function(){this.audioElement.remove()},methods:{getTimeFormated:function(t){var a=Math.floor(t),e=Math.floor(a/60),i=a%60;return e=e<10?"0".concat(e):e,i=i<10?"0".concat(i):i,"".concat(e,":").concat(i)},createAudioElement:function(){var t=document.createElement("audio");return t.setAttribute("preload","metadata"),t.setAttribute("src",this.audio),document.body.appendChild(t),t},play:function(){this.state="play",this.audioElement.play()},pause:function(){this.state="pause",this.audioElement.pause()},stop:function(){this.state="pause",this.audioElement.pause(),this.audioElement.currentTime=0}}}},"5ccd":function(t,a,e){t.exports=e.p+"img/audio.058779f0.svg"},"68a0":function(t,a,e){t.exports=e.p+"img/audio-new.94237904.svg"},b052:function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"tarjeta-audio p-4"},[i("div",{staticClass:"row align-items-center"},[i("div",{staticClass:"col-auto ps-0"},[i("div",{staticClass:"audio position-relative",on:{"~mouseover":function(a){return t.$emit("audio-hover")}}},[t._t("default"),t.audioCanPlay?"pause"===t.state?i("button",{staticClass:"audio__btn",on:{click:t.play}},[i("img",{attrs:{src:e("68a0")}})]):i("button",{staticClass:"audio__btn",on:{click:t.pause}},[i("img",{attrs:{src:e("68a0")}})]):i("div",{staticClass:"spinner-border spinner-border-sm",attrs:{role:"status"}},[i("span",{staticClass:"visually-hidden"},[t._v("Loading..")])])],2)]),i("div",{staticClass:"col ms-auto"},[i("div",{staticClass:"d-flex"},[i("div",{staticClass:"tarjeta-audio__texto text-small mb-2",domProps:{innerHTML:t._s(t.texto)}}),i("div",{staticClass:"audio position-relative ms-auto",staticStyle:{width:"40px"},on:{"~mouseover":function(a){return t.$emit("audio-hover")}}},[t.audioCanPlay?"pause"===t.state?i("button",{staticClass:"audio__btn bg-morado",on:{click:t.play}},[i("img",{attrs:{src:e("5ccd")}})]):i("button",{staticClass:"audio__btn bg-morado",on:{click:t.pause}},[i("img",{attrs:{src:e("f034")}})]):i("div",{staticClass:"spinner-border spinner-border-sm",attrs:{role:"status"}},[i("span",{staticClass:"visually-hidden"},[t._v("Loading..")])])])]),t.noBarra?t._e():i("div",{staticClass:"tarjeta-audio__input mt-2"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.sliderVal,expression:"sliderVal"}],style:{"background-size":t.sliderVal+"% 100%"},attrs:{type:"range",max:"100"},domProps:{value:t.sliderVal},on:{input:t.onSliderMove,__r:function(a){t.sliderVal=a.target.value}}})]),t.tiempo?i("div",{staticClass:"tarjeta-audio__tiempo text-end pt-1"},[i("span",[t._v(t._s(t.currentTimeDisplay))]),i("span",[t._v(t._s(t.audioDurationDisplay))])]):t._e()])])])},s=[],n=e("3209"),o={name:"TarjetaAudio",mixins:[n["a"]],props:{texto:{type:String,required:!0},noBarra:{type:Boolean,default:!1},tiempo:{type:Boolean,default:!1}},data:function(){return{sliderVal:0}},watch:{currentTime:function(){this.sliderVal=this.currentTime/this.audioDuration*100}},methods:{onSliderMove:function(){this.audioElement.currentTime=this.sliderVal/100*this.audioDuration}}},u=o,r=e("2877"),d=Object(r["a"])(u,i,s,!1,null,null,null);a["default"]=d.exports},f034:function(t,a,e){t.exports=e.p+"img/pause.8df843e4.svg"}}]);
//# sourceMappingURL=chunk-1e640474.3e325d2a.js.map