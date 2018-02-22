$(document).ready(function(){
    $('form').submit(function (evt){
    evt.preventDefault();
    $('#search').prop('disabled', true);
    $('#submit').attr('disabled', true).val('searching');
    var d = new Date();
    var dayDate = d.getDate();
    var monthDate = d.getMonth();
    var yearDate = d.getFullYear();
    function addZ(n){
        if (n<10){
            return '0' + n;
        }
        return n;
    }
    var sTag = $('#search').val();
    var url = 'https://newsapi.org/v2/everything?' +
    'q=' + sTag + '&' +
    'from=' + yearDate + '-' + addZ(monthDate) +'-' + addZ(dayDate) + '&' +
    'sortBy=popularity&' +
    'apiKey=6115f8b671aa477084979ca899db0fcc';
    function displayOptions(data){
        var newsString = "<ul>";
        $.each(data.articles, function (index, News){
            newsString += "<li>";
            newsString += "<a href= " + News.url + " target='_blank'>";
            newsString += News.title;
            newsString += "</a>";
            newsString += "<br><span class='source'>" + News.source.name + "</span>";
            newsString += "<span class='desc'>" + News.description + "</span>";
            newsString += "</li>";
        });
        newsString += "</ul>";
        $('#output').html(newsString);
        $('#search').prop('disabled', false);
        $('#submit').attr('disabled', false).val('search');
    }
    $.getJSON(url, displayOptions);
    });//end button click
});//end ready

