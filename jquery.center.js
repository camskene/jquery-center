/*
 * jQuery Center Plug-in
 * 
 * Author: Cameron Skene
 * Description: Center any element to the window or it's parent element.
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
        
        return this.each(function() {
            
            var elem = $(this);
            var parentNodeName = elem.parent()[0].nodeName.toLowerCase();
            var top = 0;
            var left = 0;
                        
            elem.css({
                position: "absolute"
            })
            
            if (parentNodeName === "body") {
                top = ($(window).height() - elem.outerHeight()) / 2 + $(window).scrollTop();
                left = ($(window).width() - elem.outerWidth()) / 2 + $(window).scrollLeft();
            } else {
                top = ($(elem).parent().height() - elem.outerHeight()) / 2;
                left = ($(elem).parent().width() - elem.outerWidth()) / 2;
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
