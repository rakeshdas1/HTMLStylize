$(document).ready(function (){
    $("html").fadeIn(2000);
    $.get("test.xml", {}, function(xml){
        $('testNumber', xml).each(function (i) {
            //console.log(i);
            $("#content").append("<p>" + i + "</p>");
        })
    });
    /*$.ajax({
        type:"GET",
        url:"books.xml",
        dataType:"xml",
        success: function(xml) {
             $.parseXML(xml).find('book').each(function(index){
                 console.log(index);
             });
        }
    });*/
    $.ajax("test", function(rss){
        xml = $.parseXML(rss);
        $(xml).find("testNumber").each(function(){
            console.log(this);
        });
    });
});


