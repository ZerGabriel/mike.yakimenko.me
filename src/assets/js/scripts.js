(function($) {

    function screenSize(elem) {
        var windowHeight = $(window).height();
        $(elem).css('min-height', windowHeight);
    }

    // header in post
    function headerInPost() {
        var Poster = $('[data-role="post-poster"]');
        var headerInPost = $('[data-role="in-post-poster"]');
        var windowHeight = $(window).height();
        var scrollDown = Poster.find('.scroll-down');
        headerInPost.css('bottom', windowHeight*.4);

        if (windowHeight < 300) {
            Poster.addClass('min-height');
        } else {
            Poster.removeClass('min-height');
        }

        if (windowHeight < 500) {
            headerInPost.css('bottom', 20);
            scrollDown.hide();
        } else {
            headerInPost.css('bottom', windowHeight*.4);
            scrollDown.show();
        }
    }

    function stateCheck(elem, clName) {
        $el = elem;
        $clName = clName
        if (!$el.hasClass(clName)) {
            $el.addClass(clName);
        } else {
            $el.removeClass(clName);
        }
    }

    function mainMenu() {
        var trigger = $('[data-role="menu-trigger"]');
        var menu = $('[data-role="menu"]');
        var body = $('body');

        trigger.click(function() {
            $(this).toggleClass('active');
            stateCheck(menu, 'active');
            stateCheck(body, 'open-menu');
        });
    }

    // document ready
    $(window).on('load', function() {
        // screenSize('[data-role="post-poster"]');
        // headerInPost();
        mainMenu()
        $('[data-role="post-poster"]').colorcontrast();
    });

    // all initial on window resize
    $(window).on('resize', function() {
        // screenSize('[data-role="post-poster"]');
        // headerInPost();
    });


})(jQuery);
