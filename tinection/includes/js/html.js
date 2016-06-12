(function(a){if(typeof define!=="undefined"&&define.amd){define([],a)}else{if(typeof module!=="undefined"&&module.exports){module.exports=a()}else{window.scrollMonitor=a()}}})(function(){var c=function(){return window.pageYOffset||(document.documentElement&&document.documentElement.scrollTop)||document.body.scrollTop};var G={};var jh=397;var k=[];var E="visibilityChange";var B="enterViewport";var z="fullyEnterViewport";var o="exitViewport";var l="partiallyExitViewport";var w="locationChange";var n="stateChange";var p=[E,B,z,o,l,w,n];var F={top:0,bottom:0};var y=function(){return window.innerHeight||document.documentElement.clientHeight};var a=function(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.documentElement.clientHeight)};G.viewportTop=null;G.viewportBottom=null;G.documentHeight=null;G.viewportHeight=y();var v;var s;var b;function t(){G.viewportTop=c();G.viewportBottom=G.viewportTop+G.viewportHeight;G.documentHeight=a();if(G.documentHeight!==v){b=k.length;while(b--){k[b].recalculateLocation()}v=G.documentHeight}}function r(){G.viewportHeight=y();t();q()}var d;function u(){clearTimeout(d);d=setTimeout(r,100)}var h;function q(){h=k.length;while(h--){k[h].update()}h=k.length;while(h--){k[h].triggerCallbacks()}}function m(P,I){var S=this;this.watchItem=P;if(!I){this.offsets=F}else{if(I===+I){this.offsets={top:I,bottom:I}}else{this.offsets={top:I.top||F.top,bottom:I.bottom||F.bottom}}}this.callbacks={};for(var N=0,M=p.length;N<M;N++){S.callbacks[p[N]]=[]}this.locked=false;var L;var Q;var R;var O;var H;var e;function K(i){if(i.length===0){return}H=i.length;while(H--){e=i[H];e.callback.call(S,s);if(e.isOne){i.splice(H,1)}}}this.triggerCallbacks=function J(){if(this.isInViewport&&!L){K(this.callbacks[B])}if(this.isFullyInViewport&&!Q){K(this.callbacks[z])}if(this.isAboveViewport!==R&&this.isBelowViewport!==O){K(this.callbacks[E]);if(!Q&&!this.isFullyInViewport){K(this.callbacks[z]);K(this.callbacks[l])}if(!L&&!this.isInViewport){K(this.callbacks[B]);K(this.callbacks[o])}}if(!this.isFullyInViewport&&Q){K(this.callbacks[l])}if(!this.isInViewport&&L){K(this.callbacks[o])}if(this.isInViewport!==L){K(this.callbacks[E])}switch(true){case L!==this.isInViewport:case Q!==this.isFullyInViewport:case R!==this.isAboveViewport:case O!==this.isBelowViewport:K(this.callbacks[n])}L=this.isInViewport;Q=this.isFullyInViewport;R=this.isAboveViewport;O=this.isBelowViewport};this.recalculateLocation=function(){if(this.locked){return}var U=this.top;var T=this.bottom;if(this.watchItem.nodeName){var j=this.watchItem.style.display;if(j==="none"){this.watchItem.style.display=""}var i=this.watchItem.getBoundingClientRect();this.top=i.top+G.viewportTop;this.bottom=i.bottom+G.viewportTop;if(j==="none"){this.watchItem.style.display=j}}else{if(this.watchItem===+this.watchItem){if(this.watchItem>0){this.top=this.bottom=this.watchItem}else{this.top=this.bottom=G.documentHeight-this.watchItem}}else{this.top=this.watchItem.top;this.bottom=this.watchItem.bottom}}this.top-=this.offsets.top;this.bottom+=this.offsets.bottom;this.height=this.bottom-this.top;if((U!==undefined||T!==undefined)&&(this.top!==U||this.bottom!==T)){K(this.callbacks[w])}};this.recalculateLocation();this.update();L=this.isInViewport;Q=this.isFullyInViewport;R=this.isAboveViewport;O=this.isBelowViewport}m.prototype={on:function(e,j,i){switch(true){case e===E&&!this.isInViewport&&this.isAboveViewport:case e===B&&this.isInViewport:case e===z&&this.isFullyInViewport:case e===o&&this.isAboveViewport&&!this.isInViewport:case e===l&&this.isAboveViewport:j.call(this,s);if(i){return}}if(this.callbacks[e]){this.callbacks[e].push({callback:j,isOne:i||false})}else{throw new Error("Tried to add a scroll monitor listener of type "+e+". Your options are: "+p.join(", "))}},off:function(H,I){if(this.callbacks[H]){for(var e=0,j;j=this.callbacks[H][e];e++){if(j.callback===I){this.callbacks[H].splice(e,1);break}}}else{throw new Error("Tried to remove a scroll monitor listener of type "+H+". Your options are: "+p.join(", "))}},one:function(e,i){this.on(e,i,true)},recalculateSize:function(){this.height=this.watchItem.offsetHeight+this.offsets.top+this.offsets.bottom;this.bottom=this.top+this.height},update:function(){this.isAboveViewport=this.top<G.viewportTop;this.isBelowViewport=this.bottom>G.viewportBottom;this.isInViewport=(this.top<=G.viewportBottom&&this.bottom>=G.viewportTop);this.isFullyInViewport=(this.top>=G.viewportTop&&this.bottom<=G.viewportBottom)||(this.isAboveViewport&&this.isBelowViewport)},destroy:function(){var I=k.indexOf(this),e=this;k.splice(I,1);for(var J=0,H=p.length;J<H;J++){e.callbacks[p[J]].length=0}},lock:function(){this.locked=true},unlock:function(){this.locked=false}};var g=function(e){return function(j,i){this.on.call(this,e,j,i)}};for(var C=0,A=p.length;C<A;C++){var f=p[C];m.prototype[f]=g(f)}try{t()}catch(D){try{window.$(t)}catch(D){throw new Error("If you must put scrollMonitor in the <head>, you must use jQuery.")
}}function x(e){s=e;t();q()}if(window.addEventListener){window.addEventListener("scroll",x);window.addEventListener("resize",u)}else{window.attachEvent("onscroll",x);window.attachEvent("onresize",u)}G.beget=G.create=function(i,j){if(typeof i==="string"){i=document.querySelector(i)}else{if(i&&i.length>0){i=i[0]}}var e=new m(i,j);k.push(e);e.update();return e};G.update=function(){s=null;t();q()};G.recalculateLocations=function(){G.documentHeight=0;G.update()};return G});


(function(){
		jQuery('#J_jszDonateBtn').click(function(e) {
            jQuery('#J_popUpWB').show();
			jQuery('#J_maskWB').show();
			//
			var tab = jQuery('.jsz-tab-item').eq(0);
			var url = tab.attr('url');
			if(url && url.length>0){
				setTimeout(function(){window.location.href = url;},1250);
			}		
        });
		jQuery('#J_closeBtn,#J_maskWB').click(function(e) {
            jQuery('#J_popUpWB').hide();
			jQuery('#J_maskWB').hide();
        });
        
		jQuery('.jsz-tab-item').eq(0).addClass('current');
		jQuery('.jsz-tab-cont').eq(0).addClass('current');
		
		
		if(jQuery('.jsz-tab-item').length == 1){			
			jQuery('.jsz-tab-nav').hide();			
		}
		
		jQuery('.jsz-tab-item').click(function(e) {
			jQuery('.jsz-tab-item').removeClass('current');
			jQuery('.jsz-tab-cont').removeClass('current');
			
			var $this = jQuery(this);
			
            $this.addClass('current');
			var idx = $this.index();
			jQuery('.jsz-tab-cont').eq(idx).addClass('current');
			
			var url = $this.attr('url');
			if(url && url.length>0){
				window.open(url);
			}
			return false;
				
        });
		
    })()
	if(document.body.clientWidth>1024){
	$(function(){
	    $(window).scroll(function(){
	        if($("#log-box").html() != undefined) {
	            var h = $("#title-2").offset().top;
	            if($(this).scrollTop()>h && $(this).scrollTop() < h+50){
	                $("#log-box").show();
	            }
	            var h = $("#title-1").offset().top;
	            if($(this).scrollTop()>h && $(this).scrollTop() < h+50){
	                $("#log-box").hide();
	            }
	        }
	    });
	})
}
$(".log-button, .log-close").click(function(){
	$("#log-box").slideToggle(500);
});
!function(a,b){"use strict";"function"==typeof define&&define.amd?define([],b):"object"==typeof exports?module.exports=b():a.Headroom=b()}(this,function(){"use strict";function a(a){this.callback=a,this.ticking=!1}function b(a){return a&&"undefined"!=typeof window&&(a===window||a.nodeType)}function c(a){if(arguments.length<=0)throw new Error("Missing arguments in extend function");var d,e,f=a||{};for(e=1;e<arguments.length;e++){var g=arguments[e]||{};for(d in g)"object"!=typeof f[d]||b(f[d])?f[d]=f[d]||g[d]:f[d]=c(f[d],g[d])}return f}function d(a){return a===Object(a)?a:{down:a,up:a}}function e(a,b){b=c(b,e.options),this.lastKnownScrollY=0,this.elem=a,this.tolerance=d(b.tolerance),this.classes=b.classes,this.offset=b.offset,this.scroller=b.scroller,this.initialised=!1,this.onPin=b.onPin,this.onUnpin=b.onUnpin,this.onTop=b.onTop,this.onNotTop=b.onNotTop,this.onBottom=b.onBottom,this.onNotBottom=b.onNotBottom}var f={bind:!!function(){}.bind,classList:"classList"in document.documentElement,rAF:!!(window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame)};return window.requestAnimationFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame,a.prototype={constructor:a,update:function(){this.callback&&this.callback(),this.ticking=!1},requestTick:function(){this.ticking||(requestAnimationFrame(this.rafCallback||(this.rafCallback=this.update.bind(this))),this.ticking=!0)},handleEvent:function(){this.requestTick()}},e.prototype={constructor:e,init:function(){return e.cutsTheMustard?(this.debouncer=new a(this.update.bind(this)),this.elem.classList.add(this.classes.initial),setTimeout(this.attachEvent.bind(this),100),this):void 0},destroy:function(){var a=this.classes;this.initialised=!1,this.elem.classList.remove(a.unpinned,a.pinned,a.top,a.notTop,a.initial),this.scroller.removeEventListener("scroll",this.debouncer,!1)},attachEvent:function(){this.initialised||(this.lastKnownScrollY=this.getScrollY(),this.initialised=!0,this.scroller.addEventListener("scroll",this.debouncer,!1),this.debouncer.handleEvent())},unpin:function(){var a=this.elem.classList,b=this.classes;!a.contains(b.pinned)&&a.contains(b.unpinned)||(a.add(b.unpinned),a.remove(b.pinned),this.onUnpin&&this.onUnpin.call(this))},pin:function(){var a=this.elem.classList,b=this.classes;a.contains(b.unpinned)&&(a.remove(b.unpinned),a.add(b.pinned),this.onPin&&this.onPin.call(this))},top:function(){var a=this.elem.classList,b=this.classes;a.contains(b.top)||(a.add(b.top),a.remove(b.notTop),this.onTop&&this.onTop.call(this))},notTop:function(){var a=this.elem.classList,b=this.classes;a.contains(b.notTop)||(a.add(b.notTop),a.remove(b.top),this.onNotTop&&this.onNotTop.call(this))},bottom:function(){var a=this.elem.classList,b=this.classes;a.contains(b.bottom)||(a.add(b.bottom),a.remove(b.notBottom),this.onBottom&&this.onBottom.call(this))},notBottom:function(){var a=this.elem.classList,b=this.classes;a.contains(b.notBottom)||(a.add(b.notBottom),a.remove(b.bottom),this.onNotBottom&&this.onNotBottom.call(this))},getScrollY:function(){return void 0!==this.scroller.pageYOffset?this.scroller.pageYOffset:void 0!==this.scroller.scrollTop?this.scroller.scrollTop:(document.documentElement||document.body.parentNode||document.body).scrollTop},getViewportHeight:function(){return window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight},getElementPhysicalHeight:function(a){return Math.max(a.offsetHeight,a.clientHeight)},getScrollerPhysicalHeight:function(){return this.scroller===window||this.scroller===document.body?this.getViewportHeight():this.getElementPhysicalHeight(this.scroller)},getDocumentHeight:function(){var a=document.body,b=document.documentElement;return Math.max(a.scrollHeight,b.scrollHeight,a.offsetHeight,b.offsetHeight,a.clientHeight,b.clientHeight)},getElementHeight:function(a){return Math.max(a.scrollHeight,a.offsetHeight,a.clientHeight)},getScrollerHeight:function(){return this.scroller===window||this.scroller===document.body?this.getDocumentHeight():this.getElementHeight(this.scroller)},isOutOfBounds:function(a){var b=0>a,c=a+this.getScrollerPhysicalHeight()>this.getScrollerHeight();return b||c},toleranceExceeded:function(a,b){return Math.abs(a-this.lastKnownScrollY)>=this.tolerance[b]},shouldUnpin:function(a,b){var c=a>this.lastKnownScrollY,d=a>=this.offset;return c&&d&&b},shouldPin:function(a,b){var c=a<this.lastKnownScrollY,d=a<=this.offset;return c&&b||d},update:function(){var a=this.getScrollY(),b=a>this.lastKnownScrollY?"down":"up",c=this.toleranceExceeded(a,b);this.isOutOfBounds(a)||(a<=this.offset?this.top():this.notTop(),a+this.getViewportHeight()>=this.getScrollerHeight()?this.bottom():this.notBottom(),this.shouldUnpin(a,c)?this.unpin():this.shouldPin(a,c)&&this.pin(),this.lastKnownScrollY=a)}},e.options={tolerance:{up:0,down:0},offset:0,scroller:window,classes:{pinned:"headroom--pinned",unpinned:"headroom--unpinned",top:"headroom--top",notTop:"headroom--not-top",bottom:"headroom--bottom",notBottom:"headroom--not-bottom",initial:"headroom"}},e.cutsTheMustard="undefined"!=typeof f&&f.rAF&&f.bind&&f.classList,e});