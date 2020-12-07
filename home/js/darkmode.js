function setTheme(newTheme) {


    document.querySelector('body').setAttribute('data-theme', newTheme);
    document.querySelector('.inicial3').setAttribute('data-theme', newTheme);

    var p = document.querySelectorAll('.inicial3 p');
    p[0].setAttribute('data-theme', newTheme);
    p[1].setAttribute('data-theme', newTheme);
    p[2].setAttribute('data-theme', newTheme);

    document.querySelector('.inicial3 h4').setAttribute('data-theme', newTheme);


}

const theme = localStorage.getItem('theme');
if (theme) {
    setTheme(theme)
}