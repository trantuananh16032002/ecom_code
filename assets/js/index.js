// Flickity customers
var flkty = new Flickity('.carousel', {
    "pageDots": false,
    "prevNextButtons": false
});
document.querySelector('.vector-left').addEventListener('click', function() {
    flkty.previous();
});
document.querySelector('.vector-right').addEventListener('click', function() {
    flkty.next();
});