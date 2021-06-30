function _codemirrorSelector(selector) {
   return Array.apply(null, document.querySelectorAll(selector));
}

_codemirrorSelector(".js-codemirror").forEach(function (element) {
   var codemirror = $(element).prop('name');
   window[codemirror] = CodeMirror.fromTextArea(element, JSON.parse($('input[name=__сodemirror_options_' + codemirror + ']').val()));
});