$(document).ready(function() {



    $.get('https://www.reddit.com/r/tsunderesharks'+'.json').done(function(response) {

      console.log(response.data.children[0].data);

        for (var i = 0; i < response.data.children.length; i++){

          var title = response.data.children[i].data.title;
          var thumbnail = response.data.children[i].data.thumbnail;
          var author = response.data.children[i].data.author;
          var score = response.data.children[i].data.score;



      $("body").append("<div><p>" + title + "</p><p><img src=" + thumbnail + "></p><p>" + author + "</p><p>" + score + "</p>")

    };

    $(".p").css({
      "position": "absolute",
      "left": "50%",
      "top": "50%",
      "margin-left": -$(".p").outerWidth()/2,
      "margin-top": -$(".p").outerWidth()/2
    })

    var maxHeight = 0;

    $("div").each(function(){
       if ($(this).height() > maxHeight) { maxHeight = $(this).height(); }
    });

    $("div").height(maxHeight);

  });
});
