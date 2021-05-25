// HEADER START
// Нажимая на иконку, навигационное меню открывается.
$('.menu-burger').on('click', () => {
    $('.menu-burger').addClass('visually-hidden');
    $('.pull-down-menus').removeClass('visually-hidden');
    $('.close-pull-down-menus').removeClass('visually-hidden');
})
// Нажимая на иконку, навигационное меню скрывается.
$('.close-pull-down-menus').on('click',() => {
    $('.pull-down-menus').addClass('visually-hidden');
    $('.close-pull-down-menus').addClass('visually-hidden');
    $('.menu-burger').removeClass('visually-hidden');
})
// HEADER END


// Фикс состояния :focus. Не понял не работает. CSS: overall.css:60-68
$('a').on('click',() => {
    $(this).addClass('clicked');
});
$('a').focus(() => {
    $(this).removeClass('clicked');
});