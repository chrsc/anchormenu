(function ($) {
    "use strict";
    $.fn.anchorMenu = function (options) {
        // defaults
        var settings = $.extend({
            tag: 'h2',
            className: 'anchor-menu-list',
            menuObj: '#anchor-menu'
        }, options),
            $menu = $('<ul id="' + settings.className + '-menu" class="' + settings.className + '"></ul>');
        this.find(settings.tag).each(function () {
            var $text = $(this).text(),
                $link = $text.replace(/[^a-z0-9\s]/gi, '').replace(/[_\s]/g, '-');
            $menu.append('<li class="' + settings.className + '-item"><a href="#' + $link + '">' + $text + '</a></li>');
            $('<a name="' + $link + '">').insertBefore($(this));
        });
        $(settings.menuObj).append($menu);
        return false;
    };
}(jQuery));
