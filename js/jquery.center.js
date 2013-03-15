/*!
 * jQuery Center Plugin
 * Author: @camskene
 * Licensed under the MIT license
 */

;(function ( $, window, document, undefined ) {

    $.fn.center = function ( options ) {

        options = $.extend( {}, $.fn.center.options, options );

        return this.each(function() {

            var elem = $(this),
                win = $(window),
                parentNodeName = elem.parent()[0].nodeName.toLowerCase(),
                elemTop,
                elemLeft;

            function positionElements(){

                // If direct child of body and position fixed is true
                if (parentNodeName === "body" && options.fixed) {
                    elem.css({
                        position: "fixed",
                        top: "50%",
                        left: "50%",
                        "margin-left": -(elem.width() / 2),
                        "margin-top": -(elem.height() / 2)
                    })
                }
                // If direct child of body and position fixed is false
                else if (parentNodeName === "body") {
                    elemTop = (win.height() - elem.outerHeight()) / 2 + win.scrollTop();
                    elemLeft = (win.width() - elem.outerWidth()) / 2 + win.scrollLeft();
                    elem.css({
                        position: "absolute",
                        top: elemTop,
                        left: elemLeft
                    })
                }
                // If neither of the above are true the element is not a child of body so we position to parent element
                else {
                    elemTop = (elem.parent().outerHeight() - elem.outerHeight()) / 2;
                    elemLeft = (elem.parent().outerWidth() - elem.outerWidth()) / 2;
                    elem.css({
                        position: "absolute",
                        top: elemTop,
                        left: elemLeft
                    })

                }
            
            }

            positionElements();

            $(window).resize(positionElements)

        });
    };

    $.fn.center.options = {
        fixed: true
    };

})( jQuery, window, document );
