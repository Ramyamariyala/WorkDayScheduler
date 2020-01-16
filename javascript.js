$(document).ready(function () {// essentially tells engine to load 1)html & 1)css first.
    //display current day & time.
    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));

    //
    $(".saveBtn").on("click", function () {
        //get nearby vaules
        console.log(this);
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        //set items in local storage.
        localStorage.setItem(time, text);
    })
    //load any saved data from LocalStorage - do this for each hour created*******
    $("#hour9 .description").val(localStorage.getItem("hour9"));

    function hourTracker() {
        //get current number of hours
        var currentHour = moment().hours();

        // loop over time blocks
        $(".time-block").each(function() {
            var blockHour = parseInt($(this).attr("id").split("")[1]);//*****be weary of .split. May need to remove */

            //check if we've moved past this time
            if (blockHour < currentHour) {
                $(this).addClass("past");
            }
            else if(blockHour === currentHour) {
                $(this).removeClass("past");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
        })
    }
    hourTracker();
})

