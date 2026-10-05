(function () {
    "use strict";

    const ui = window.UniRentUI;
    const pages = window.UniRentPages;

    function render() {
        ui.renderHeader();
        ui.renderFooter();
        const renderer = pages[document.body.dataset.page];
        if (renderer) renderer();
        else document.getElementById("appMain").innerHTML = `<section class="container page-section">Page not found.</section>`;
        window.UniRentI18n.apply(document.body);
    }

    document.addEventListener("DOMContentLoaded", render);
    window.addEventListener("unirent:change", render);
    window.addEventListener("unirent:language", render);
})();
