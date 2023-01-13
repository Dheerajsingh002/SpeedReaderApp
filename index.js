// var myArray;
// var inputLength;
// var reading=false;
// var counter;
// $(function(){
//     $("#new").hide();
//     $("#Resume").hide();
//     $("#Pause").hide();
//     $("#controls").hide();
//     $("#result").hide();
//     $("#error").hide();
//     $("#start").click(function()
//     {
//         //get text and split it to words inside an array
//         // \s matches spaces,tabs,new lines etc amd + means one or more
//         myArray=$("#userInput").val().split(/\s+/);
//         inputLength=myArray.length;
//         if(inputLength>1)///there is enough input
//         {
//             //move to reading mode
//             reading =true;
//             $("#new").show();
//             $("#controls").show();
//             $("#Resume").show();
//             // $("#result").show();
//             $("#error").hide();
//             $("#userInput").hide();
//             $("#start").hide();

//             $("#progressslider").attr("max",inputLength-1);
//             //Start the counter at 0
//             counter=0;
//             ///show reading box with the first 
//             $("#error").show();





//         }else //not enough text message
//         {
//             $("#error").show();

//         }



//     });
    
//     });