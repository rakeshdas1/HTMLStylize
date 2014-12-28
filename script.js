$(document).ready(function (){
    $("html").fadeIn(1500);
    $("button").click(function() {
        var word = $("#wordToDefine").val();
        /*var xml = "http://www.dictionaryapi.com/api/v1/references/collegiate/xml/" + word + "?key=0cec1fd4-d9d1-4ccc-9ad2-f996151173eb",
            xmlDoc = $.parseXML( xml ),
            $xml = $( xmlDoc ),
            $definition = $xml.find("ew");*/
        $("#definition").text(word);
    });
});


