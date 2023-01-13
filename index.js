var myArray;
var inputLength;
var reading=false;
var counter;
var action;
var frequency=200;
$(function(){
    $("#new").hide();
    $("#Resume").hide();
    $("#Pause").hide();
    $("#controls").hide();
    $("#result").hide();
    $("#error").hide();
    $("#start").click(function()
    {
        //get text and split it to words inside an array
        // \s matches spaces,tabs,new lines etc amd + means one or more
        myArray=$("#userInput").val().split(/\s+/);
        inputLength=myArray.length;
        if(inputLength>1)///there is enough input
        {
            //move to reading mode
            reading =true;
            $("#new").show();
            $("#controls").show();
            $("#Pause").show();
            // $("#result").show();
            $("#error").hide();
            $("#userInput").hide();
            $("#start").hide();
            $("#progressslider").attr("max",inputLength-1);
            //Start the counter at 0
            counter=0;
            ///show reading box with the first 
            $("#result").show();
            $("#result").text(myArray[counter]);
            action=setInterval(read,frequency);
        }else //not enough text message
        {
            $("#error").show();
        }
    });
    $("#new").click(function()
    {
        location.reload();
    });
    $("#Pause").click(function()
    {
        clearInterval(action);
        reading=false;
        $("#Pause").hide();
        $("#Resume").show();
    });
    $("#Resume").click(function()
    {
        action=setInterval(read,frequency);
        reading=true;
        $("#Pause").show();
        $("#Resume").hide();
    });
    $("#fontsizeslider").on("slidestop",function(event,ui){
        $("#fontsizeslider").slider("refresh");
        //get the value of slider
        var slidervalue= parseInt($("#fontsizeslider").val());
        $("#result").css("fontSize",slidervalue);
        $("#fontsize").text(slidervalue);

    });
    $("#speedslider").on("slidestop",function(event,ui){
        $("#speedslider").slider("refresh");
        //get the value of slider
        var slidervalue= parseInt($("#speedslider").val());
        $("#speed").text(slidervalue);
        //stop the reading
        clearInterval(action);
        frequency=6000/slidervalue;
        //resume reading if we are in reading mode
        if(reading){
            action=setInterval(read,frequency);
        }
    });
    $("#progressslider").on("slidestop",function(event,ui){
        $("#progressslider").slider("refresh");
        //get the value of slider
        var slidervalue= parseInt($("#progressslider").val());
        //stop the reading
        clearInterval(action);
        counter=slidervalue;
        $("#result").text(myArray[counter]);
        //change value of progress
        $("#percentage").text(Math.floor(counter/(inputLength-1)*100));
        
        //resume reading if we are in reading mode
        if(reading){
            action=setInterval(read,frequency);
        }
    });
    function read()
    {
        if(counter==inputLength-1){//last word
            clearInterval(action);
            reading=false;
            $("#Pause").hide(); //move non reading mode
        }else
        {
            counter++;
            $("#result").text(myArray[counter]);
            //changing the progress slider value and refresh
            $("#progressslider").val(counter).slider('refresh');
            $("#pecentage").text(Math.floor(counter/(inputLength-1)*100));
        }
    }
    
    });