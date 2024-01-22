document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var keyword = document.getElementById('searchBox').value;
    var encodedKeyword = encodeURIComponent(keyword);

    window.open(`https://dribbble.com/search/${encodedKeyword}`);
    window.open(`https://www.figma.com/community/search?resource_type=mixed&sort_by=relevancy&query=${encodedKeyword}&editor_type=all&price=all&creators=all`);
    window.open(`https://artvee.com/main/?s=${encodedKeyword}`);
    window.open(`https://same.energy/search?q=${encodedKeyword}`);
    window.open(`https://archives.design/search/${encodedKeyword}`);
});

