
$(function() {

    $('.productThumbs img').hover(function() {
        var img = $(this);
        
        img.closest('.productArea').find('.myProductImage').attr('src', img.attr('src'));
    });
      
    $('.pThumbs img').hover(function() {
        var img = $(this);
        
        img.closest('.hproduct').find('.photo').attr('src', img.attr('src'));
    });  
});
