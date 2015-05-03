(function($) {

    function imagePortrait() {
        var sectionImages = $('img', 'section.post');

        sectionImages.each(function() {
            var image = $(this);
            console.log(image);
            if (image.width() < image.height()) {
                console.log('portrait');
                image.addClass('portrait');
            }
        });
    }

    // document ready
    $(window).on('load', function() {
        mainMenu();
        imagePortrait();
    });

    // all initial on window resize
    $(window).on('resize', function() {});


})(jQuery);
