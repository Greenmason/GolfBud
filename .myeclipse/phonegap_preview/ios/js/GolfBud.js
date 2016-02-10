/*
 
Live Example:

http://jsfiddle.net/KCQ4Z/14/
http://jsfiddle.net/phillpafford/KCQ4Z/70/ (using stopPropagation() )
JS:
 */

// FlipSwitch event function
$(window).load(function(){
$('#my-slider').change(function() {
    var myswitch = $(this);
    var show     = myswitch[0].selectedIndex == 1 ? true:false;
    var firstItem = document.getElementById('datebox1');
    
    if(show) {
        
        $('#show-me').fadeIn('slow');
        $('#first-me').fadeOut();
       //////// $('#datebox1').attr("disabled", "disabled");
      //  $('#datebox1').prop("disabled", "disabled");
        firstItem.removeAttribute ("disabled", "disabled")
        
    } else {
        
        $('#first-me').fadeIn('slow');
        $('#show-me').fadeOut();
       // $('#datebox1').removeProp('disabled');
        //////////$('#datebox1').removeAttr('disabled', 'disabled');
        firstItem.setAttribute ("disabled", "disabled")
    }
});

/*
$('#1availableLater').change(function() {
    var myswitch = $(this);
    var show     = myswitch[0].selectedIndex == 1 ? true:false;
    
    if(show) {
        
        $('#datebox1').removeClass('disabled');
    } else {
        
        $('#datebox1').addClass('disabled');
    }
});
*/
});