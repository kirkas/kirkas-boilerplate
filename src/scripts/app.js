define(['jquery', '../components/google-code-prettify/src/prettify.js', '../components/google-code-prettify-language-handlers/lang-scss'],function($, P){

  var App = function(){
    if(currentPage == "demo") {
      
      $("form").submit(function(e){
        e.preventDefault();
      });
      
      document.getElementById('mobile-one').contentWindow.document.write('<link href="../styles/main.css" rel="stylesheet" type="text/css">');
      document.getElementById('mobile-one').contentWindow.document.write($("#iframe-mobile-one-content").html());
      document.getElementById('mobile-two').contentWindow.document.write('<link href="../styles/main.css" rel="stylesheet" type="text/css">');
      document.getElementById('mobile-two').contentWindow.document.write($("#iframe-mobile-two-content").html());
    
      $("#grid-button button").on("click", function(){
        $("#grid-button button").removeClass("selected");
        $(this).addClass("selected");
        $("#grid-wrapper").animate({"scrollLeft" : $(this).index()*$(".grid-slide").outerWidth()}, 500);
      });
      
      $("#font-experiment-range").on("change", function(){
        $("html, body").css({
          "font-size": $(this).val() + "px"
        });
        $("#actual-font-size").text($(this).val() + "px");
      });
      

      var anchorScroll = function (selector) {
          selector = selector || "a[href*=#]";
          var anchorArray = [];
          
          function scrollToAnchor(id) {
            var position = $(id).offset();
            $("body").stop().animate(
                {
                    scrollTop: position.top,
                    scrollLeft: position.left
                },
                200
            );
          }
          
          function hashMap() {
            $(selector).each(function(index, selector){
              var url = $(selector).prop("href");
              var isAnchor = url.indexOf("#");
              if(isAnchor) {
                var hash = url.substring(url.indexOf("#")+1);
                if(hash.length > 0) {
                  anchorArray.push(hash);
                }
              }
            });
          }
          
          hashMap();
          
          $("body").on("click", selector, function(e){
            var url = $(this).prop("href");
            if (url.substring(url.indexOf("#")) == window.location.hash) {
                e.preventDefault();
                scrollToAnchor(url.substring(url.indexOf("#")));
            }
          });
          
          var windowsTop = 0;
          $(window).on("scroll", function(){
            windowsTop = $(window).scrollTop();
          });
          
          $(window).on('hashchange',function(e){
            $(window).scrollTop(windowsTop);
            var hash = window.location.hash;          
            if(anchorArray.indexOf(hash.substring(1)) !== -1) {
              e.preventDefault();
              scrollToAnchor(hash);
            }
          });
          
          $("document").ready(function(){
            $(window).scrollTop(0);
            var hash = window.location.hash;          
            if(anchorArray.indexOf(hash.substring(1)) !== -1) {
              scrollToAnchor(hash);
            }
          });

      };
      
      anchorScroll();
      
      // $.anchorScroll({
      //   scrollOnLoad: true,
      //   onScrollStart: function(){},
      //   onScrollEnd: function(){}
      // });
      
    }
    
    
    
    prettyPrint();
    
  };
  
  return App;
});