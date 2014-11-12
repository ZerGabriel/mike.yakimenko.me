(function($) {

    function screenSize(elem) {
        var windowHeight = $(window).height();
        $(elem).css('min-height', windowHeight);
    }

    // header in post
    function headerInPost() {
        var headerInPost = $('[data-role="in-post-poster"]');
        var windowHeight = $(window).height();
        headerInPost.css('bottom', windowHeight*.3);
    }

    // document ready
    $(document).ready(function() {
        screenSize('[data-role="post-poster"]');
        headerInPost();
    });

    // all initial on window resize
    $(window).on('resize', function() {
        screenSize('[data-role="post-poster"]');
        headerInPost();
    });


})(jQuery);
