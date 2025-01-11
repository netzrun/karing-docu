function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

window.onload = function () {
    //for quickstart en
    try {
        // if (window.location.hostname == 'localhost') {
        //     return;
        // }
        // console.log(window.location.hostname + ' + ' + window.location.pathname);
        if (window.location.pathname.startsWith('/quickstart')) {
            const l_t = getQueryParam('l_t');
            if (l_t != null && !l_t.startsWith('zh')) {
                if (l_t == 'ru') {
                    window.location.href = '/blog/quickstart-in-russian';
                } else {
                    window.location.href = '/en/quickstart/';
                }
            }
        }
    } catch (e) { }
};