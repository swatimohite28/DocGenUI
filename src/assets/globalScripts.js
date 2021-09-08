// ------------step-wizard-------------
$(function(){
   
    $('.nav-tabs > li a[title]').tooltip();

    //Wizard
    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        var target = $(e.target);

        if (target.parent().hasClass('disabled')) {
            return false;
        }
    });
    $(document).on('click', '.next-step', function(e) {
   //$(".next-step").click(function (e) {
     // alert("net call");
        var active = $('.wizard .nav-tabs li.active');
        active.next().removeClass('disabled');
        active.removeClass('active');
        active.addClass('disabled');
        active.next().addClass('active');
        nextTab(active);
    });

    $(document).on('click', '.prev-step', function(e) {
    //$(".prev-step").click(function (e) {
     
        var active = $('.wizard .nav-tabs li.active');
        active.prev().removeClass('disabled');
        active.prev().addClass('active');
        active.removeClass('active');
        active.addClass('disabled');
       
        prevTab(active);
    });    

    function nextTab(elem) {      
       $(elem).next().find('a[data-toggle="tab"]').tab('show');    
    }

    function prevTab(elem) {    
        $(elem).prev().find('a[data-toggle="tab"]').tab('show');
    }

    $(document).on('click', '.wizard .nav-tabs li', function(e) {

        var active = $('.wizard .nav-tabs li.active');
        active.removeClass('active');
        active.addClass('disabled');
        $(this).removeClass('disabled');
        $(this).addClass('active');
    });


    $('.panel-collapse').on('show.bs.collapse', function () {
        $(this).siblings('.panel-heading').addClass('active');
      });
    
      $('.panel-collapse').on('hide.bs.collapse', function () {
        $(this).siblings('.panel-heading').removeClass('active');
      });

})