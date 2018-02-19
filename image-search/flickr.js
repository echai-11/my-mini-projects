$(document).ready(function (){
  $('form').submit(function (evt){
    evt.preventDefault();
    var flickrAPI = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    var searchtag = $('#search').val();
    var flickrOptions= {
      tags:  searchtag,
      format: "json"
    };
    function displayOptions (data){
      var photoHTML ="<ul>";
      $.each(data.items, function (index, photo){
        photoHTML +="<li>";
        photoHTML += "<a href= " + photo.link + ">";
        photoHTML += "<img src= " + photo.media.m + "></a>";
      });
      photoHTML+= "</ul>";
     $('#photos').html(photoHTML);
    }
    $.getJSON(flickrAPI, flickrOptions, displayOptions);
  }); // end button click
});//end document ready