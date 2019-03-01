$("body").hammer().on('drag swipe', function(e){

    var scrollTarget = $(e.gesture.target).closest(".scrollable");
    if(scrollTarget.length)
    {
        var scrollTopMax = scrollTarget[0].scrollHeight - scrollTarget.outerHeight();
        if(scrollTopMax > 0){
            var scrollTop = scrollTarget.scrollTop();
            if(scrollTop > 0 && scrollTop < scrollTopMax){
                //console.log("scrolling in the middle");
            }
            else if(scrollTop <= 0 && e.gesture.deltaY < 0){
                //console.log("scrolling from top");
            }
            else if(scrollTop >= scrollTopMax && e.gesture.deltaY > 0){
                //console.log("scrolling from bottom");
            }
            else{
                //console.log("trying to scroll out of boundaries");
                e.gesture.preventDefault();
            }
        }
        else{
            //console.log("content to short to scroll");
            e.gesture.preventDefault();
        }
    }
    else{
        //console.log("no containing element with class=scrollable");
        e.gesture.preventDefault();
    }
});

$("body").hammer().on('doubletap rotate pinch', function(e){
    e.gesture.preventDefault();
});