(function($moa) {

    'use strict';

    /**
     * @service Config
     * @author Raja Kapur
     * @module Moa
     */
    $moa.constant("config", {
        "socket": {
            "port": "80",
            "host": "localhost"
        },
        "api": {
            "host": "http://localhost/MOA/api/public"
        }
    });

})(window.moaApp);
