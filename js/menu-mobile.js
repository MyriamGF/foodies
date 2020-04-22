/* * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Permet d'ouvrir et de fermer la navigation mobile
 * à l'aide du hamburger-icon
 * 
 */

// ouvre la navigation
function toggleNav(n) {
    $(n).toggleClass('nav-ferme');
    $(n).toggleClass('nav-ouvert');
}

// pousse la page vers la droite
function togglePage(p) {
    $(p).toggleClass('page-ferme');
    $(p).toggleClass('page-pousse');
}

$(function () {
    // applique le toggleNav
    if ($('.nav-principale').hasClass('nav-mobile')) {
        $('.btn-hamburger').on('focus', function () {
            toggleNav('.nav-principale');
        });

        $('.btn-hamburger').on('blur', function () {
            toggleNav('.nav-principale');
            $(this).removeAttr('style');
        });
    }

    // applique le togglePage 
    if ($('.page').hasClass('page-mobile')) {
        $('.btn-hamburger').on('focus', function () {
            togglePage('.page');
        });

        $('.btn-hamburger').on('blur', function () {
            togglePage('.page');
            // $(this).removeAttr('style');
        });
    }
});