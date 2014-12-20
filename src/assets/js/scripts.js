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

    // document ready
    $(document).ready(function() {
        // screenSize('[data-role="post-poster"]');
        // headerInPost();
    });

    // all initial on window resize
    $(window).on('resize', function() {
        // screenSize('[data-role="post-poster"]');
        // headerInPost();
    });


})(jQuery);
