/* source: https://github.com/avinoamr/bootstrap-carousel-swipe */
/* changes from Mobirise team */
<<<<<<< HEAD
+function ($) {
    'use strict';

    if ( !$.fn.carousel ) {
        return
    }

    // CAROUSEL CLASS DEFINITION
    // =========================

    var CarouselSwipe = function(element) {
        this.$element    = $(element)
        this.carousel    = this.$element.data('bs.carousel')
        this.options     = $.extend({}, CarouselSwipe.DEFAULTS, this.carousel.options)
        this.startX      =
        this.startY      =
        this.startTime   =
        this.cycling     =
        this.$active     =
        this.$items      =
        this.$next       =
        this.$prev       = 
        this.dx          = null

        this.$element
            .on('touchstart', $.proxy(this.touchstart,this))
            .on('touchmove', $.proxy(this.touchmove,this))
            .on('touchend', $.proxy(this.touchend,this))
    }

    CarouselSwipe.DEFAULTS = {
        swipe: 50 // percent per second
    }

    CarouselSwipe.prototype.touchstart = function(e) {
        if (!this.options.swipe) return;
        var touch = e.originalEvent.touches ? e.originalEvent.touches[0] : e
        this.dx = 0
        this.startX = touch.pageX
        this.startY = touch.pageY
        this.cycling = null
        this.width = this.$element.width()
        this.startTime = e.timeStamp
    }

    CarouselSwipe.prototype.touchmove = function(e) {
        if (!this.options.swipe) return;
        var touch = e.originalEvent.touches ? e.originalEvent.touches[0] : e
        var dx = touch.pageX - this.startX
        var dy = touch.pageY - this.startY
        if (Math.abs(dx) < Math.abs(dy)) return; // vertical scroll

        if ( this.cycling === null ) {
            this.cycling = !!this.carousel.interval
            this.cycling && this.carousel.pause()
        }

        e.preventDefault()
        this.dx = dx / (this.width || 1) * 100
        this.swipe(this.dx)
    }

    CarouselSwipe.prototype.touchend = function(e) {
        if (!this.options.swipe) return;
        if (!this.$active) return; // nothing moved
        var all = $()
            .add(this.$active).add(this.$prev).add(this.$next)
            .carousel_transition(true)

        var dt = (e.timeStamp - this.startTime) / 1000
        var speed = Math.abs(this.dx / dt) // percent-per-second
        if (this.dx > 40 || (this.dx > 0 && speed > this.options.swipe)) {
            this.carousel.prev()
        } else if (this.dx < -40 || (this.dx < 0 && speed > this.options.swipe)) {
            this.carousel.next();
        } else {
            this.$active
                .one($.support.transition.end, function () {
                    all.removeClass('prev next')
                })
                .emulateTransitionEnd(this.$active.css('transition-duration').slice(0, -1) * 1000)
        }

        all.carousel_offset(false);
        this.cycling && this.carousel.cycle()
        this.$active = null // reset the active element
    }

    CarouselSwipe.prototype.swipe = function(percent) {
        var $active = this.$active || this.getActive()
        if (percent < 0) {
            this.$prev
                .carousel_offset(false)
                .removeClass('prev')
                .carousel_transition(true)
            if (!this.$next.length || this.$next.hasClass('active')) return
            this.$next
                .carousel_transition(false)
                .addClass('next')
                .carousel_offset(percent + 100)
        } else {
            this.$next
                .carousel_offset(false)
                .removeClass('next')
                .carousel_transition(true)
            if (!this.$prev.length || this.$prev.hasClass('active')) return
            this.$prev
                .carousel_transition(false)
                .addClass('prev')
                .carousel_offset(percent - 100)
        }

        $active
            .carousel_transition(false)
            .carousel_offset(percent)
    }

    CarouselSwipe.prototype.getActive = function() {
        this.$active = this.$element.find('.item.active')
        this.$items = this.$active.parent().children()

        this.$next = this.$active.next()
        if (!this.$next.length && this.options.wrap) {
            this.$next = this.$items.first();
        }

        this.$prev = this.$active.prev()
        if (!this.$prev.length && this.options.wrap) {
            this.$prev = this.$items.last();
        }

        return this.$active;
    }

    // CAROUSEL PLUGIN DEFINITION
    // ==========================

    var old = $.fn.carousel
    $.fn.carousel = function() {
        old.apply(this, arguments);
        return this.each(function () {
            var $this   = $(this)
            var data    = $this.data('bs.carousel.swipe')
            if (!data) $this.data('bs.carousel.swipe', new CarouselSwipe(this))
        })
    }

    $.extend($.fn.carousel,old);

    $.fn.carousel_transition = function(enable) {
        enable = enable ? '' : 'none';
        return this.each(function() {
            $(this)
                .css('-webkit-transition', enable)
                .css('transition', enable)
        })
    };


    var support3dtransform = (function() {
        if (!window.getComputedStyle) {
            return false;
        }

        var el = document.createElement('p'), 
            has3d,
            transforms = {
                'webkitTransform':'-webkit-transform',
                'OTransform':'-o-transform',
                'msTransform':'-ms-transform',
                'MozTransform':'-moz-transform',
                'transform':'transform'
            };

        // Add it to the body to get the computed style.
        document.body.insertBefore(el, null);

        for (var t in transforms) {
            if (el.style[t] !== undefined) {
                el.style[t] = "translate3d(1px,1px,1px)";
                has3d = window.getComputedStyle(el).getPropertyValue(transforms[t]);
            }
        }

        document.body.removeChild(el);

        return (has3d !== undefined && has3d.length > 0 && has3d !== "none");
    }());

    $.fn.carousel_offset = function(value) {
        return this.each(function() {
            if(value) {
                if(support3dtransform) {
                    $(this).css('transform', 'translate3d(' + value + '%, 0, 0)')
                } else {
                    $(this).css('left', value + '%')
                }
            } else {
                $(this).css({
                    transform: '',
                    left: ''
                })
            }
        })
    };

    // init carousels
    $('.carousel').carousel();

}(jQuery);
=======
+function(b){if(b.fn.carousel){var c=function(a){this.$element=b(a);this.carousel=this.$element.data("bs.carousel");this.options=b.extend({},c.DEFAULTS,this.carousel.options);this.startX=this.startY=this.startTime=this.cycling=this.$active=this.$items=this.$next=this.$prev=this.dx=null;this.$element.on("touchstart",b.proxy(this.touchstart,this)).on("touchmove",b.proxy(this.touchmove,this)).on("touchend",b.proxy(this.touchend,this))};c.DEFAULTS={swipe:50};c.prototype.touchstart=function(a){if(this.options.swipe){var b=
a.originalEvent.touches?a.originalEvent.touches[0]:a;this.dx=0;this.startX=b.pageX;this.startY=b.pageY;this.cycling=null;this.width=this.$element.width();this.startTime=a.timeStamp}};c.prototype.touchmove=function(a){if(this.options.swipe){var b=a.originalEvent.touches?a.originalEvent.touches[0]:a,c=b.pageX-this.startX,b=b.pageY-this.startY;Math.abs(c)<Math.abs(b)||(null===this.cycling&&(this.cycling=!!this.carousel.interval)&&this.carousel.pause(),a.preventDefault(),this.dx=c/(this.width||1)*100,
this.swipe(this.dx))}};c.prototype.touchend=function(a){if(this.options.swipe&&this.$active){var c=b().add(this.$active).add(this.$prev).add(this.$next).carousel_transition(!0);a=Math.abs(this.dx/((a.timeStamp-this.startTime)/1E3));40<this.dx||0<this.dx&&a>this.options.swipe?this.carousel.prev():-40>this.dx||0>this.dx&&a>this.options.swipe?this.carousel.next():this.$active.one(b.support.transition.end,function(){c.removeClass("prev next")}).emulateTransitionEnd(1E3*this.$active.css("transition-duration").slice(0,
-1));c.carousel_offset(!1);this.cycling&&this.carousel.cycle();this.$active=null}};c.prototype.swipe=function(a){var b=this.$active||this.getActive();if(0>a){this.$prev.carousel_offset(!1).removeClass("prev").carousel_transition(!0);if(!this.$next.length||this.$next.hasClass("active"))return;this.$next.carousel_transition(!1).addClass("next").carousel_offset(a+100)}else{this.$next.carousel_offset(!1).removeClass("next").carousel_transition(!0);if(!this.$prev.length||this.$prev.hasClass("active"))return;
this.$prev.carousel_transition(!1).addClass("prev").carousel_offset(a-100)}b.carousel_transition(!1).carousel_offset(a)};c.prototype.getActive=function(){this.$active=this.$element.find(".item.active");this.$items=this.$active.parent().children();this.$next=this.$active.next();!this.$next.length&&this.options.wrap&&(this.$next=this.$items.first());this.$prev=this.$active.prev();!this.$prev.length&&this.options.wrap&&(this.$prev=this.$items.last());return this.$active};var e=b.fn.carousel;b.fn.carousel=
function(){e.apply(this,arguments);return this.each(function(){var a=b(this);a.data("bs.carousel.swipe")||a.data("bs.carousel.swipe",new c(this))})};b.extend(b.fn.carousel,e);b.fn.carousel_transition=function(a){a=a?"":"none";return this.each(function(){b(this).css("-webkit-transition",a).css("transition",a)})};var f=function(){if(!window.getComputedStyle)return!1;var a=document.createElement("p"),b,c={webkitTransform:"-webkit-transform",OTransform:"-o-transform",msTransform:"-ms-transform",MozTransform:"-moz-transform",
transform:"transform"};document.body.insertBefore(a,null);for(var d in c)void 0!==a.style[d]&&(a.style[d]="translate3d(1px,1px,1px)",b=window.getComputedStyle(a).getPropertyValue(c[d]));document.body.removeChild(a);return void 0!==b&&0<b.length&&"none"!==b}();b.fn.carousel_offset=function(a){return this.each(function(){a?f?b(this).css("transform","translate3d("+a+"%, 0, 0)"):b(this).css("left",a+"%"):b(this).css({transform:"",left:""})})};b(".carousel").carousel()}}(jQuery);
>>>>>>> b082391b21c2377eb4532787368b1e85579179e5
