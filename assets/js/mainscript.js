/* Air-Transfer Project 2019 */

/* Home Page Dropdown */

// Time picker 
$('.select__time-dropdown li').click(function(e){
    $('.select-time_input').attr("data-selected",$(this).attr("data-value"));
    $('.select-time_input').attr("value",($(this).find('span').text().trim()));
    $('.select__time-dropdown').hide();
});

// Time picker second 
$('.select__time-dropdown_second li').click(function(e){
    $('.select-time_input_second').attr("data-selected",$(this).attr("data-value"));
    $('.select-time_input_second').attr("value",($(this).find('span').text().trim()));
    $('.select__time-dropdown_second').hide();
});


// Hours dropdown 
$('.select__hours-dropdown li').click(function(e){
    $('.select-hours_input').attr("data-selected",$(this).attr("data-value"));
    $('.select-hours_input').attr("value",($(this).find('span').text().trim()));
    $('.select__hours-dropdown').hide();
});

$(document).on("click", function(e){
    let dropdown = $(e.target).siblings('.select_dropdown');
    let isInput = $(e.target).hasClass('custom-select');
    let activeInput = $('.select_dropdown.active-input');

    if (isInput && !dropdown.hasClass('active-input')) {
        dropdown.addClass('active-input');
    } 
    else if (!isInput || dropdown.hasClass('active-input')) {
        activeInput.removeClass('active-input')
    }
});


$('.select_dropdown li').click(function(e) {
    let input = $(this).parent().siblings('.select_input');
    input.attr("data-selected",$(this).attr("data-value"));
    input.attr("value",($(this).find('span').text().trim()));
    $('.select_dropdown').removeClass('active-input');
});



// Select Mob phone 
$(function(){

    $(document.body).on('click', '.changeType' ,function(){
        $(this).closest('.phone-input').find('.type-text').text($(this).text());
        $(this).closest('.phone-input').find('.type-input').val($(this).data('type-value'));
    });

    $(document.body).on('click', '.btn-remove-phone' ,function(){
        $(this).closest('.phone-input').remove();
    });
    
    $('.btn-add-phone').click(function(){

        var index = $('.phone-input').length + 1;
        
        $('.phone-list').append(''+
            '<div class="input-group phone-input">'+
                '<span class="input-group-btn">'+
                    '<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><span class="type-text">Type</span> <span class="caret"></span></button>'+
                    '<ul class="dropdown-menu" role="menu">'+
                        '<li><a class="changeType" href="javascript:;" data-type-value="phone">Phone</a></li>'+
                        '<li><a class="changeType" href="javascript:;" data-type-value="fax">Fax</a></li>'+
                        '<li><a class="changeType" href="javascript:;" data-type-value="mobile">Mobile</a></li>'+
                    '</ul>'+
                '</span>'+
                '<input type="text" name="phone['+index+'][number]" class="form-control" placeholder="+1 (999) 999 9999" />'+
                '<input type="hidden" name="phone['+index+'][type]" class="type-input" value="" />'+
                '<span class="input-group-btn">'+
                    '<button class="btn btn-danger btn-remove-phone" type="button"><span class="glyphicon glyphicon-remove"></span></button>'+
                '</span>'+
            '</div>'
        );

    });
    
});

// When Scroll down add shadow to navbar 
$(window).on("scroll", function() {
    if ($(window).scrollTop()) {
        $('.navbar').addClass('addshadow');
    }
    else {
        $('.navbar').removeClass('addshadow');
    }
})