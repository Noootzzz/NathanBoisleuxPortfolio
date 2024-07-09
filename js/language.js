/*
  * Author: Nathan Boisleux 2024 *
*/
const translations = {
    en: null,
    fr: null
};

function setLanguage(lang) {
    if (!translations[lang]) {
        $.getJSON(`./js/translations/translations_${lang}.json`, function(data) {
            translations[lang] = data;
            translatePage(lang);
        });
    } else {
        translatePage(lang);
    }
}

function translatePage(lang) {
    $('[data-key]').each(function() {
        const key = $(this).data('key');
        $(this).html(translations[lang][key]);
    });
    $('[data-key-placeholder]').each(function() {
        const key = $(this).data('key-placeholder');
        $(this).attr('placeholder', translations[lang][key]);
    });
}

// Charger la langue par défaut
$(document).ready(function() {
    setLanguage('en');
});
