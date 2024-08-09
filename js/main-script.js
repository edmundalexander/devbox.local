function pagesizer () {
    let headerHeight = document.querySelector("header").clientHeight;
    let footerHeight = document.querySelector("footer").clientHeight;
    let outerHeights = headerHeight + footerHeight;
    console.log(headerHeight);
    console.log(footerHeight);
    console.log(outerHeights);
}