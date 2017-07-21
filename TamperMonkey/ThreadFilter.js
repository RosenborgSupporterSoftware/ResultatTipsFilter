// ==UserScript==
// @name         Skjul tips-tråder på RBKweb-forum
// @namespace    http://troillprat.no/
// @version      0.1
// @description  Skjul tips-tråder på RBKweb-forumet dersom du ikke ønsker å se dem
// @author       Rune Jacobsen
// @match        http://www.rbkweb.no/forum/viewforum.php?f=1
// @grant        none
// @require http://code.jquery.com/jquery-latest.js
// ==/UserScript==

(function() {
    'use strict';

    $('tr td.row1 span.topictitle a.topictitle:contains("Resultattips")').each(function(idx, elt) {
        var $base = $(this).parent().parent().parent();
        $base.hide();
      });
})();
