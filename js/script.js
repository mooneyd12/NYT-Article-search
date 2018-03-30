function loadData() {
    var $nytHeader = $('#nyt-header');
    var $nytArticles = $('#nyt-articles');
    var searchVal = $('#search-box').val();

    $nytArticles.text("");

    var nyTimesURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchVal + "&sort=newest&api-key=c44cedace0b44287982782e369b3e3bf";

    $nytHeader.text("New York Times articles about " + searchVal);

    $.getJSON(nyTimesURL, function(data) {
        var articleList = data.response.docs;

        for (var i = 0; i < articleList.length; i++) {
            var article = articleList[i];

            $nytArticles.append("<li class='article'>" + "<a class='article-url' href='" + article.web_url + "'>" + article.headline.main + "</a>" + "<p class='article-snippet'>" + article.snippet + "</p>" + "</li>");
        };
    });
    return false;
};

$('#form-container').submit(loadData);
