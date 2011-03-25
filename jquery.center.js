/*
 * jQuery Center Plug-in
 * 
 * Author: Cameron Skene
 * Description: Center element to window
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */


(function($) {
    jQuery.fn.center = function(options) {
        
        defaults = {
            vertical: true,
            horizontal: true
        }
        
        o = $.extend(defaults,options);
        
        //<variable> = <expression> ? <true clause> : <false clause>
        
        
        return this.each(function() {
            
            var elem = $(this);
            var parent = elem.parent()[0].nodeName.toLowerCase();
            var top = 0;
            var left = 0;
                        
            elem.css({
                position: "absolute"
            })
            
            if (parent === "body") {
                top = ($(window).height() - elem.height()) / 2 + $(window).scrollTop() + "px";
                left = ($(window).width() - elem.width()) / 2 + $(window).scrollLeft() + "px";
            } else {
                top = ($(elem).parent().height() - elem.height()) / 2 + $(window).scrollTop() + "px";
                left = ($(elem).parent().width() - elem.width()) / 2 + $(window).scrollLeft() + "px"
            }
            
            if (o.vertical) {
                elem.css({
                    top: top
                })
            }
            
            if (o.horizontal) {
                elem.css({
                    left: left
                })
            }
                        
            
        })
    };
}) (jQuery);
