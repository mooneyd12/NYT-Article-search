function loadData() {
    var $nytHeader = $('#nyt-header');
    var $nytArticles = $('#nyt-articles');
    var searchVal = $('#search-box').val();

    $nytArticles.text("");

    var nyTimesURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchVal + "&sort=newest&api-key=c44cedace0b44287982782e369b3e3bf";

    $nytHeader.text("New York Times articles about " + searchVal);


};
