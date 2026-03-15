var lang = navigator.language || navigator.userLanguage;

if (lang.startsWith("ru") ||
    lang.startsWith("uk") ||
    lang.startsWith("be") ||
    lang.startsWith("kk")) {

    window.location.href = "/ru/";

} else if (lang.startsWith("vi")) {

    window.location.href = "/vn/";

} else {

    window.location.href = "/en/";

}
