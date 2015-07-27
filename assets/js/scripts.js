// https://github.com/rejas/imagelightbox/

!function(t,n,e,i){"use strict";var o=function(){var t=e.body||e.documentElement;return t=t.style,""===t.WebkitTransition?"-webkit-":""===t.MozTransition?"-moz-":""===t.OTransition?"-o-":""===t.transition?"":!1},r=o()!==!1,a=function(t,n,e){var i={},r=o();i[r+"transform"]="translateX("+n+")",i[r+"transition"]=r+"transform "+e+"s linear",t.css(i)},u="ontouchstart"in n,c=n.navigator.pointerEnabled||n.navigator.msPointerEnabled,f=function(t){if(u)return!0;if(!c||"undefined"==typeof t||"undefined"==typeof t.pointerType)return!1;if("undefined"!=typeof t.MSPOINTER_TYPE_MOUSE){if(t.MSPOINTER_TYPE_MOUSE!==t.pointerType)return!0}else if("mouse"!==t.pointerType)return!0;return!1};t.fn.imageLightbox=function(o){var u=t.extend({selector:'id="imagelightbox"',allowedTypes:"png|jpg|jpeg||gif",animationSpeed:250,preloadNext:!0,enableKeyboard:!0,quitOnEnd:!1,quitOnImgClick:!1,quitOnDocClick:!0,quitOnEscKey:!0,onStart:!1,onEnd:!1,onLoadStart:!1,onLoadEnd:!1,previousTarget:function(){return this.previousTargetDefault()},previousTargetDefault:function(){var t=s.index(d)-1;if(0>t){if(u.quitOnEnd===!0)return b(),!1;t=s.length-1}d=s.eq(t)},nextTarget:function(){return this.nextTargetDefault()},nextTargetDefault:function(){var t=s.index(d)+1;if(t>=s.length){if(u.quitOnEnd===!0)return b(),!1;t=0}d=s.eq(t)}},o),s=t([]),d=t(),l=t(),p=0,g=0,h=0,v=!1,m=function(n){var e="a"===t(n).prop("tagName").toLowerCase()&&new RegExp(".("+u.allowedTypes+")$","i").test(t(n).attr("href")),o=t(n).attr("data-lightbox")!==i;return e||o},x=function(){if(!l.length)return!0;var e=.8*t(n).width(),i=.9*t(n).height(),o=new Image;o.src=l.attr("src"),o.onload=function(){if(p=o.width,g=o.height,p>e||g>i){var r=p/g>e/i?p/e:g/i;p/=r,g/=r}l.css({width:p+"px",height:g+"px",top:(t(n).height()-g)/2+"px",left:(t(n).width()-p)/2+"px"})}},E=function(n){if(v)return!1;if(n="undefined"==typeof n?!1:"left"===n?1:-1,l.length){var e={opacity:0};r?a(l,100*n-h+"px",u.animationSpeed/1e3):e.left=parseInt(l.css("left"))+100*n+"px",l.animate(e,u.animationSpeed,function(){T()}),h=0}v=!0,u.onLoadStart!==!1&&u.onLoadStart(),setTimeout(function(){var e=d.attr("href");e===i&&(e=d.attr("data-lightbox")),l=t("<img "+u.selector+" />").attr("src",e).load(function(){l.appendTo("body"),x();var e={opacity:1};if(l.css("opacity",0),r)a(l,-100*n+"px",0),setTimeout(function(){a(l,"0px",u.animationSpeed/1e3)},50);else{var i=parseInt(l.css("left"));e.left=i+"px",l.css("left",i-100*n+"px")}if(l.animate(e,u.animationSpeed,function(){v=!1,u.onLoadEnd!==!1&&u.onLoadEnd()}),u.preloadNext){var o=s.eq(s.index(d)+1);o.length||(o=s.eq(0)),t("<img />").attr("src",o.attr("href")).load()}}).error(function(){u.onLoadEnd!==!1&&u.onLoadEnd()});var o=0,g=0,m=0;l.on(c?"pointerup MSPointerUp":"click",function(t){if(t.preventDefault(),u.quitOnImgClick)return b(),!1;if(f(t.originalEvent))return!0;var n=(t.pageX||t.originalEvent.pageX)-t.target.offsetLeft;p/2>n?y():S()}).on("touchstart pointerdown MSPointerDown",function(t){return!f(t.originalEvent)||u.quitOnImgClick?!0:(r&&(m=parseInt(l.css("left"))),void(o=t.originalEvent.pageX||t.originalEvent.touches[0].pageX))}).on("touchmove pointermove MSPointerMove",function(t){return!f(t.originalEvent)||u.quitOnImgClick?!0:(t.preventDefault(),g=t.originalEvent.pageX||t.originalEvent.touches[0].pageX,h=o-g,void(r?a(l,-h+"px",0):l.css("left",m-h+"px")))}).on("touchend touchcancel pointerup pointercancel MSPointerUp MSPointerCancel",function(t){return!f(t.originalEvent)||u.quitOnImgClick?!0:void(Math.abs(h)>50?0>h?y():S():r?a(l,"0px",u.animationSpeed/1e3):l.animate({left:m+"px"},u.animationSpeed/2))})},u.animationSpeed+100)},y=function(){u.previousTarget()!==!1&&E("left")},S=function(){u.nextTarget()!==!1&&E("right")},T=function(){return l.length?(l.remove(),void(l=t())):!1},b=function(){return l.length?void l.animate({opacity:0},u.animationSpeed,function(){T(),v=!1,u.onEnd!==!1&&u.onEnd()}):!1};return t(n).on("resize",x),u.quitOnDocClick&&t(e).on("click",function(n){n.preventDefault(),l.length&&!t(n.target).is(l)&&b()}),u.enableKeyboard&&t(e).on("keyup",function(t){return l.length?(t.preventDefault(),27===t.keyCode&&u.quitOnEscKey===!0&&b(),void(37===t.keyCode?y():39===t.keyCode&&S())):!0}),this.startImageLightbox=function(n){return m(this)?(n!==i&&n.preventDefault(),v?!1:(v=!1,u.onStart!==!1&&u.onStart(),d=t(this),void E())):!0},t(e).off("click",this.selector),t(e).on("click",this.selector,this.startImageLightbox),this.each(function(){return m(this)?void(s=s.add(t(this))):!0}),this.switchImageLightbox=function(t){var n=s.eq(t);if(n.length){var e=s.index(d);d=n,E(e>t?"left":"right")}return this},this.loadPreviousImage=function(){y()},this.loadNextImage=function(){S()},this.quitImageLightbox=function(){return b(),this},this.addImageLightbox=function(n){return n.each(function(){return m(this)?void(s=s.add(t(this))):!0}),n.click(this.startImageLightbox),this},this}}(jQuery,window,document);


$( function()
{
    var activityIndicatorOn = function () {
        $('<div id="imagelightbox-loading"><div></div></div>').appendTo('body');
    },
    activityIndicatorOff = function () {
        $('#imagelightbox-loading').remove();
    },
    overlayOn = function () {
        $('<div id="imagelightbox-overlay"></div>').appendTo('body');
    },
    overlayOff = function () {
        $('#imagelightbox-overlay').remove();
    },
    closeButtonOn = function (instance) {
        $('<a href="#" id="imagelightbox-close"></a>').appendTo('body').on('click', function () {
            $(this).remove();
            instance.quitImageLightbox();
            return false;
        });
    },
    closeButtonOff = function () {
        $('#imagelightbox-close').remove();
    },
    captionOn = function () {
        var description = $('a[href="' + $('#imagelightbox').attr('src') + '"] img').attr('alt');
        if (description.length > 0)
            $('<div id="imagelightbox-caption">' + description + '</div>').appendTo('body');
    },
    captionOff = function () {
        $('#imagelightbox-caption').remove();
    },
    navigationOn = function (instance, selector) {
        var images = $(selector);
        if (images.length) {
            var nav = $('<div id="imagelightbox-nav"></div>');
            for (var i = 0; i < images.length; i++)
                nav.append('<a href="#"></a>');
            nav.appendTo('body');
            nav.on('click touchend', function () {
                return false;
            });
            var navItems = nav.find('a');
            navItems.on('click touchend', function () {
                var $this = $(this);
                if (images.eq($this.index()).attr('href') != $('#imagelightbox').attr('src'))
                    instance.switchImageLightbox($this.index());
                navItems.removeClass('active');
                navItems.eq($this.index()).addClass('active');
                return false;
            })
                    .on('touchend', function () {
                        return false;
                    });
        }
    },
    navigationUpdate = function (selector) {
        var items = $('#imagelightbox-nav').find('a');
        items.removeClass('active');
        items.eq($(selector).filter('[href="' + $('#imagelightbox').attr('src') + '"]').index(selector)).addClass('active');
    },
    navigationOff = function () {
        $('#imagelightbox-nav').remove();
    },
    arrowsOn = function( instance, selector ) {
        var $arrows = $( '<button type="button" class="imagelightbox-arrow imagelightbox-arrow-left"></button>' +
                         '<button type="button" class="imagelightbox-arrow imagelightbox-arrow-right"></button>' );
        $arrows.appendTo( 'body' );
        $arrows.on( 'click touchend', function( e ) {
            e.preventDefault();
            var $this = $( this );
            if( $this.hasClass('imagelightbox-arrow-left')) {
                instance.loadPreviousImage();
            } else {
                instance.loadNextImage();
            }
            return false;
        });
    },
    arrowsOff = function() {
        $('.imagelightbox-arrow').remove();
    };

    var selector = '.image-gallery a';
    var $gallery = $(selector).imageLightbox(
    {
        onStart: function () {
            overlayOn();
            arrowsOn( $gallery, selector );
            closeButtonOn($gallery);
        },
        onEnd: function () {
            overlayOff();
            captionOff();
            closeButtonOff();
            arrowsOff(); 
            activityIndicatorOff();
        },
        onLoadStart: function () {
            captionOff();
            activityIndicatorOn();
        },
        onLoadEnd: function () {
            captionOn();
            activityIndicatorOff();
            $( '.imagelightbox-arrow' ).css( 'display', 'block' );
        }
    });


});