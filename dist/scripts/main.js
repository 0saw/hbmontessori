(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"C:\\Users\\iamle\\Documents\\Work\\_inprogress\\hbmontessori.ru\\hbmontessori\\src\\scripts\\main.js":[function(require,module,exports){
// import View from './views/view';

// const g = 9.81;

$(function() {
  var imagesSelector = [
    ".slider__content img"
  ].join(', ');

  $(imagesSelector).imagesLoaded({ background: true })
    .done(function(instance) {

    })
    .fail(function() {
      alert("Не все изображения удалось загрузить. Веб-страница может выглядеть искаженной.");
    })
    .always(function() {
      frontPage();
    });
});


var pageForms = function () {
  var forms = [
    '.form',
  ];
  var options = {
    delegation: true,
    clearForm: true,
    resetForm: true,
    type: 'post',
    beforeSubmit: function() {
      // $.magnificPopup.close();
    },
    success: function() {
      $.magnificPopup.open({
        items: {
          src: '#popupThanks',
        },
        type: 'inline',
        removalDelay: 500,
        mainClass: 'mfp-zoom-in modal',
        callbacks: {
          beforeOpen: function() {}
        },
        midClick: true
      });
    },
    error: function() {
      $.magnificPopup.open({
        items: {
          src: '#popupError',
        },
        type: 'inline',
        removalDelay: 500,
        mainClass: 'mfp-zoom-in modal',
        callbacks: {
          beforeOpen: function() {}
        },
        midClick: true
      });
    }
  }

  $(forms).each(function (index, elem) {
     $(this).ajaxForm(options)
  });

  $('.button_header').click(function () {
    var popupForm = $('#popupForm');
    $.magnificPopup.open({
      items: {
        src: popupForm,
      },
      type: 'inline',
      removalDelay: 500,
      mainClass: 'mfp-zoom-in modal',
      callbacks: {
        beforeOpen: function() {}
      },
      midClick: true
    });
  });

  $('#maps').on('click', function () {
     $.magnificPopup.open({
      items: {
        src: '#modalzakaz3',
      },
      type: 'inline',
      removalDelay: 500,
      mainClass: 'mfp-zoom-in modal',
      callbacks: {
        beforeOpen: function() {}
      },
      midClick: true
    }); 
  });
};


var frontPage = function(argument) {
  $(document.body).addClass('imagesLoaded');
  $('#preloader').fadeOut({
    duration: 400,
    easing: 'easeInOutSine'
  });
  var sequences = require('./views/sequence');
  var forms = require('./views/forms');

  $('.readMore').readmore({
    speed: 75,
    moreLink: '<a href="#" class="button button_readmore">Читать полностью >></a>',
    lessLink: '<a href="#" class="button button_readmore">Скрыть</a>'
  });

  var $nav = $('.nav');
  var navOffset = $nav.offset().top;
  var windowScroll = function (e) {
    if ($(window).scrollTop() > navOffset) {
      $nav.addClass('fixed');
    } else {
      $nav.removeClass('fixed');
    }
  };
  var windowResize = function (e) {
    navOffset = $(sequences[0].elem).offset().top;
  };
  $(window).on('scroll', windowScroll);
  $(window).on('resize', windowResize);
  $(document).ready(windowScroll);

  var scrollToElement = function(element, offset) {
    $(element).click(function(e) {
      var elementClick = $(this).attr("href");
      var destination  = $(elementClick)[0].offsetTop;
      if(destination < 0) {destination = 0;}
      $('html, body').animate({scrollTop: destination - offset}, "slow");
      e.preventDefault();
    });
  }

  scrollToElement(".nav a[href='#toddler']", 0);
  scrollToElement(".nav a[href='#primary']", 0);
  scrollToElement(".nav a[href='#ourteam']", 50);
  scrollToElement(".nav a[href='#cabinet']", 0);
  scrollToElement(".nav a[href='#location']", 0);

  scrollToElement(".sidenav a[href='#toddler']", 0);
  scrollToElement(".sidenav a[href='#primary']", 0);
  scrollToElement(".sidenav a[href='#ourteam']", 50);
  scrollToElement(".sidenav a[href='#cabinet']", 0);
  scrollToElement(".sidenav a[href='#location']", 0);

  var sideNavOpen = document.getElementById('openSidenav');
  var sideNav = document.getElementById('sidenav');
  var closebtn = document.getElementById('closebtn');
  sideNavOpen.addEventListener('click', function (e) {
    e.preventDefault();
    sideNav.style.width = '250px';
  });
  closebtn.addEventListener('click', function (e) {
    e.preventDefault();
    sideNav.style.width = '0';
  });

  pageForms();
};

},{"./views/forms":"C:\\Users\\iamle\\Documents\\Work\\_inprogress\\hbmontessori.ru\\hbmontessori\\src\\scripts\\views\\forms.js","./views/sequence":"C:\\Users\\iamle\\Documents\\Work\\_inprogress\\hbmontessori.ru\\hbmontessori\\src\\scripts\\views\\sequence.js"}],"C:\\Users\\iamle\\Documents\\Work\\_inprogress\\hbmontessori.ru\\hbmontessori\\src\\scripts\\views\\forms.js":[function(require,module,exports){
/*!
 * jQuery Form Plugin
 * version: 3.51.0-2014.06.20
 * Requires jQuery v1.5 or later
 * Copyright (c) 2014 M. Alsup
 * Examples and documentation at: http://malsup.com/jquery/form/
 * Project repository: https://github.com/malsup/form
 * Dual licensed under the MIT and GPL licenses.
 * https://github.com/malsup/form#copyright-and-license
 */
/*global ActiveXObject */

// AMD support
(function (factory) {
    "use strict";
    if (typeof define === 'function' && define.amd) {
        // using AMD; register as anon module
        define(['jquery'], factory);
    } else {
        // no AMD; invoke directly
        factory( (typeof(jQuery) != 'undefined') ? jQuery : window.Zepto );
    }
}

(function($) {
"use strict";

/*
    Usage Note:
    -----------
    Do not use both ajaxSubmit and ajaxForm on the same form.  These
    functions are mutually exclusive.  Use ajaxSubmit if you want
    to bind your own submit handler to the form.  For example,

    $(document).ready(function() {
        $('#myForm').on('submit', function(e) {
            e.preventDefault(); // <-- important
            $(this).ajaxSubmit({
                target: '#output'
            });
        });
    });

    Use ajaxForm when you want the plugin to manage all the event binding
    for you.  For example,

    $(document).ready(function() {
        $('#myForm').ajaxForm({
            target: '#output'
        });
    });

    You can also use ajaxForm with delegation (requires jQuery v1.7+), so the
    form does not have to exist when you invoke ajaxForm:

    $('#myForm').ajaxForm({
        delegation: true,
        target: '#output'
    });

    When using ajaxForm, the ajaxSubmit function will be invoked for you
    at the appropriate time.
*/

/**
 * Feature detection
 */
var feature = {};
feature.fileapi = $("<input type='file'/>").get(0).files !== undefined;
feature.formdata = window.FormData !== undefined;

var hasProp = !!$.fn.prop;

// attr2 uses prop when it can but checks the return type for
// an expected string.  this accounts for the case where a form 
// contains inputs with names like "action" or "method"; in those
// cases "prop" returns the element
$.fn.attr2 = function() {
    if ( ! hasProp ) {
        return this.attr.apply(this, arguments);
    }
    var val = this.prop.apply(this, arguments);
    if ( ( val && val.jquery ) || typeof val === 'string' ) {
        return val;
    }
    return this.attr.apply(this, arguments);
};

/**
 * ajaxSubmit() provides a mechanism for immediately submitting
 * an HTML form using AJAX.
 */
$.fn.ajaxSubmit = function(options) {
    /*jshint scripturl:true */

    // fast fail if nothing selected (http://dev.jquery.com/ticket/2752)
    if (!this.length) {
        log('ajaxSubmit: skipping submit process - no element selected');
        return this;
    }

    var method, action, url, $form = this;

    if (typeof options == 'function') {
        options = { success: options };
    }
    else if ( options === undefined ) {
        options = {};
    }

    method = options.type || this.attr2('method');
    action = options.url  || this.attr2('action');

    url = (typeof action === 'string') ? $.trim(action) : '';
    url = url || window.location.href || '';
    if (url) {
        // clean url (don't include hash vaue)
        url = (url.match(/^([^#]+)/)||[])[1];
    }

    options = $.extend(true, {
        url:  url,
        success: $.ajaxSettings.success,
        type: method || $.ajaxSettings.type,
        iframeSrc: /^https/i.test(window.location.href || '') ? 'javascript:false' : 'about:blank'
    }, options);

    // hook for manipulating the form data before it is extracted;
    // convenient for use with rich editors like tinyMCE or FCKEditor
    var veto = {};
    this.trigger('form-pre-serialize', [this, options, veto]);
    if (veto.veto) {
        log('ajaxSubmit: submit vetoed via form-pre-serialize trigger');
        return this;
    }

    // provide opportunity to alter form data before it is serialized
    if (options.beforeSerialize && options.beforeSerialize(this, options) === false) {
        log('ajaxSubmit: submit aborted via beforeSerialize callback');
        return this;
    }

    var traditional = options.traditional;
    if ( traditional === undefined ) {
        traditional = $.ajaxSettings.traditional;
    }

    var elements = [];
    var qx, a = this.formToArray(options.semantic, elements);
    if (options.data) {
        options.extraData = options.data;
        qx = $.param(options.data, traditional);
    }

    // give pre-submit callback an opportunity to abort the submit
    if (options.beforeSubmit && options.beforeSubmit(a, this, options) === false) {
        log('ajaxSubmit: submit aborted via beforeSubmit callback');
        return this;
    }

    // fire vetoable 'validate' event
    this.trigger('form-submit-validate', [a, this, options, veto]);
    if (veto.veto) {
        log('ajaxSubmit: submit vetoed via form-submit-validate trigger');
        return this;
    }

    var q = $.param(a, traditional);
    if (qx) {
        q = ( q ? (q + '&' + qx) : qx );
    }
    if (options.type.toUpperCase() == 'GET') {
        options.url += (options.url.indexOf('?') >= 0 ? '&' : '?') + q;
        options.data = null;  // data is null for 'get'
    }
    else {
        options.data = q; // data is the query string for 'post'
    }

    var callbacks = [];
    if (options.resetForm) {
        callbacks.push(function() { $form.resetForm(); });
    }
    if (options.clearForm) {
        callbacks.push(function() { $form.clearForm(options.includeHidden); });
    }

    // perform a load on the target only if dataType is not provided
    if (!options.dataType && options.target) {
        var oldSuccess = options.success || function(){};
        callbacks.push(function(data) {
            var fn = options.replaceTarget ? 'replaceWith' : 'html';
            $(options.target)[fn](data).each(oldSuccess, arguments);
        });
    }
    else if (options.success) {
        callbacks.push(options.success);
    }

    options.success = function(data, status, xhr) { // jQuery 1.4+ passes xhr as 3rd arg
        var context = options.context || this ;    // jQuery 1.4+ supports scope context
        for (var i=0, max=callbacks.length; i < max; i++) {
            callbacks[i].apply(context, [data, status, xhr || $form, $form]);
        }
    };

    if (options.error) {
        var oldError = options.error;
        options.error = function(xhr, status, error) {
            var context = options.context || this;
            oldError.apply(context, [xhr, status, error, $form]);
        };
    }

     if (options.complete) {
        var oldComplete = options.complete;
        options.complete = function(xhr, status) {
            var context = options.context || this;
            oldComplete.apply(context, [xhr, status, $form]);
        };
    }

    // are there files to upload?

    // [value] (issue #113), also see comment:
    // https://github.com/malsup/form/commit/588306aedba1de01388032d5f42a60159eea9228#commitcomment-2180219
    var fileInputs = $('input[type=file]:enabled', this).filter(function() { return $(this).val() !== ''; });

    var hasFileInputs = fileInputs.length > 0;
    var mp = 'multipart/form-data';
    var multipart = ($form.attr('enctype') == mp || $form.attr('encoding') == mp);

    var fileAPI = feature.fileapi && feature.formdata;
    log("fileAPI :" + fileAPI);
    var shouldUseFrame = (hasFileInputs || multipart) && !fileAPI;

    var jqxhr;

    // options.iframe allows user to force iframe mode
    // 06-NOV-09: now defaulting to iframe mode if file input is detected
    if (options.iframe !== false && (options.iframe || shouldUseFrame)) {
        // hack to fix Safari hang (thanks to Tim Molendijk for this)
        // see:  http://groups.google.com/group/jquery-dev/browse_thread/thread/36395b7ab510dd5d
        if (options.closeKeepAlive) {
            $.get(options.closeKeepAlive, function() {
                jqxhr = fileUploadIframe(a);
            });
        }
        else {
            jqxhr = fileUploadIframe(a);
        }
    }
    else if ((hasFileInputs || multipart) && fileAPI) {
        jqxhr = fileUploadXhr(a);
    }
    else {
        jqxhr = $.ajax(options);
    }

    $form.removeData('jqxhr').data('jqxhr', jqxhr);

    // clear element array
    for (var k=0; k < elements.length; k++) {
        elements[k] = null;
    }

    // fire 'notify' event
    this.trigger('form-submit-notify', [this, options]);
    return this;

    // utility fn for deep serialization
    function deepSerialize(extraData){
        var serialized = $.param(extraData, options.traditional).split('&');
        var len = serialized.length;
        var result = [];
        var i, part;
        for (i=0; i < len; i++) {
            // #252; undo param space replacement
            serialized[i] = serialized[i].replace(/\+/g,' ');
            part = serialized[i].split('=');
            // #278; use array instead of object storage, favoring array serializations
            result.push([decodeURIComponent(part[0]), decodeURIComponent(part[1])]);
        }
        return result;
    }

     // XMLHttpRequest Level 2 file uploads (big hat tip to francois2metz)
    function fileUploadXhr(a) {
        var formdata = new FormData();

        for (var i=0; i < a.length; i++) {
            formdata.append(a[i].name, a[i].value);
        }

        if (options.extraData) {
            var serializedData = deepSerialize(options.extraData);
            for (i=0; i < serializedData.length; i++) {
                if (serializedData[i]) {
                    formdata.append(serializedData[i][0], serializedData[i][1]);
                }
            }
        }

        options.data = null;

        var s = $.extend(true, {}, $.ajaxSettings, options, {
            contentType: false,
            processData: false,
            cache: false,
            type: method || 'POST'
        });

        if (options.uploadProgress) {
            // workaround because jqXHR does not expose upload property
            s.xhr = function() {
                var xhr = $.ajaxSettings.xhr();
                if (xhr.upload) {
                    xhr.upload.addEventListener('progress', function(event) {
                        var percent = 0;
                        var position = event.loaded || event.position; /*event.position is deprecated*/
                        var total = event.total;
                        if (event.lengthComputable) {
                            percent = Math.ceil(position / total * 100);
                        }
                        options.uploadProgress(event, position, total, percent);
                    }, false);
                }
                return xhr;
            };
        }

        s.data = null;
        var beforeSend = s.beforeSend;
        s.beforeSend = function(xhr, o) {
            //Send FormData() provided by user
            if (options.formData) {
                o.data = options.formData;
            }
            else {
                o.data = formdata;
            }
            if(beforeSend) {
                beforeSend.call(this, xhr, o);
            }
        };
        return $.ajax(s);
    }

    // private function for handling file uploads (hat tip to YAHOO!)
    function fileUploadIframe(a) {
        var form = $form[0], el, i, s, g, id, $io, io, xhr, sub, n, timedOut, timeoutHandle;
        var deferred = $.Deferred();

        // #341
        deferred.abort = function(status) {
            xhr.abort(status);
        };

        if (a) {
            // ensure that every serialized input is still enabled
            for (i=0; i < elements.length; i++) {
                el = $(elements[i]);
                if ( hasProp ) {
                    el.prop('disabled', false);
                }
                else {
                    el.removeAttr('disabled');
                }
            }
        }

        s = $.extend(true, {}, $.ajaxSettings, options);
        s.context = s.context || s;
        id = 'jqFormIO' + (new Date().getTime());
        if (s.iframeTarget) {
            $io = $(s.iframeTarget);
            n = $io.attr2('name');
            if (!n) {
                $io.attr2('name', id);
            }
            else {
                id = n;
            }
        }
        else {
            $io = $('<iframe name="' + id + '" src="'+ s.iframeSrc +'" />');
            $io.css({ position: 'absolute', top: '-1000px', left: '-1000px' });
        }
        io = $io[0];


        xhr = { // mock object
            aborted: 0,
            responseText: null,
            responseXML: null,
            status: 0,
            statusText: 'n/a',
            getAllResponseHeaders: function() {},
            getResponseHeader: function() {},
            setRequestHeader: function() {},
            abort: function(status) {
                var e = (status === 'timeout' ? 'timeout' : 'aborted');
                log('aborting upload... ' + e);
                this.aborted = 1;

                try { // #214, #257
                    if (io.contentWindow.document.execCommand) {
                        io.contentWindow.document.execCommand('Stop');
                    }
                }
                catch(ignore) {}

                $io.attr('src', s.iframeSrc); // abort op in progress
                xhr.error = e;
                if (s.error) {
                    s.error.call(s.context, xhr, e, status);
                }
                if (g) {
                    $.event.trigger("ajaxError", [xhr, s, e]);
                }
                if (s.complete) {
                    s.complete.call(s.context, xhr, e);
                }
            }
        };

        g = s.global;
        // trigger ajax global events so that activity/block indicators work like normal
        if (g && 0 === $.active++) {
            $.event.trigger("ajaxStart");
        }
        if (g) {
            $.event.trigger("ajaxSend", [xhr, s]);
        }

        if (s.beforeSend && s.beforeSend.call(s.context, xhr, s) === false) {
            if (s.global) {
                $.active--;
            }
            deferred.reject();
            return deferred;
        }
        if (xhr.aborted) {
            deferred.reject();
            return deferred;
        }

        // add submitting element to data if we know it
        sub = form.clk;
        if (sub) {
            n = sub.name;
            if (n && !sub.disabled) {
                s.extraData = s.extraData || {};
                s.extraData[n] = sub.value;
                if (sub.type == "image") {
                    s.extraData[n+'.x'] = form.clk_x;
                    s.extraData[n+'.y'] = form.clk_y;
                }
            }
        }

        var CLIENT_TIMEOUT_ABORT = 1;
        var SERVER_ABORT = 2;
                
        function getDoc(frame) {
            /* it looks like contentWindow or contentDocument do not
             * carry the protocol property in ie8, when running under ssl
             * frame.document is the only valid response document, since
             * the protocol is know but not on the other two objects. strange?
             * "Same origin policy" http://en.wikipedia.org/wiki/Same_origin_policy
             */
            
            var doc = null;
            
            // IE8 cascading access check
            try {
                if (frame.contentWindow) {
                    doc = frame.contentWindow.document;
                }
            } catch(err) {
                // IE8 access denied under ssl & missing protocol
                log('cannot get iframe.contentWindow document: ' + err);
            }

            if (doc) { // successful getting content
                return doc;
            }

            try { // simply checking may throw in ie8 under ssl or mismatched protocol
                doc = frame.contentDocument ? frame.contentDocument : frame.document;
            } catch(err) {
                // last attempt
                log('cannot get iframe.contentDocument: ' + err);
                doc = frame.document;
            }
            return doc;
        }

        // Rails CSRF hack (thanks to Yvan Barthelemy)
        var csrf_token = $('meta[name=csrf-token]').attr('content');
        var csrf_param = $('meta[name=csrf-param]').attr('content');
        if (csrf_param && csrf_token) {
            s.extraData = s.extraData || {};
            s.extraData[csrf_param] = csrf_token;
        }

        // take a breath so that pending repaints get some cpu time before the upload starts
        function doSubmit() {
            // make sure form attrs are set
            var t = $form.attr2('target'), 
                a = $form.attr2('action'), 
                mp = 'multipart/form-data',
                et = $form.attr('enctype') || $form.attr('encoding') || mp;

            // update form attrs in IE friendly way
            form.setAttribute('target',id);
            if (!method || /post/i.test(method) ) {
                form.setAttribute('method', 'POST');
            }
            if (a != s.url) {
                form.setAttribute('action', s.url);
            }

            // ie borks in some cases when setting encoding
            if (! s.skipEncodingOverride && (!method || /post/i.test(method))) {
                $form.attr({
                    encoding: 'multipart/form-data',
                    enctype:  'multipart/form-data'
                });
            }

            // support timout
            if (s.timeout) {
                timeoutHandle = setTimeout(function() { timedOut = true; cb(CLIENT_TIMEOUT_ABORT); }, s.timeout);
            }

            // look for server aborts
            function checkState() {
                try {
                    var state = getDoc(io).readyState;
                    log('state = ' + state);
                    if (state && state.toLowerCase() == 'uninitialized') {
                        setTimeout(checkState,50);
                    }
                }
                catch(e) {
                    log('Server abort: ' , e, ' (', e.name, ')');
                    cb(SERVER_ABORT);
                    if (timeoutHandle) {
                        clearTimeout(timeoutHandle);
                    }
                    timeoutHandle = undefined;
                }
            }

            // add "extra" data to form if provided in options
            var extraInputs = [];
            try {
                if (s.extraData) {
                    for (var n in s.extraData) {
                        if (s.extraData.hasOwnProperty(n)) {
                           // if using the $.param format that allows for multiple values with the same name
                           if($.isPlainObject(s.extraData[n]) && s.extraData[n].hasOwnProperty('name') && s.extraData[n].hasOwnProperty('value')) {
                               extraInputs.push(
                               $('<input type="hidden" name="'+s.extraData[n].name+'">').val(s.extraData[n].value)
                                   .appendTo(form)[0]);
                           } else {
                               extraInputs.push(
                               $('<input type="hidden" name="'+n+'">').val(s.extraData[n])
                                   .appendTo(form)[0]);
                           }
                        }
                    }
                }

                if (!s.iframeTarget) {
                    // add iframe to doc and submit the form
                    $io.appendTo('body');
                }
                if (io.attachEvent) {
                    io.attachEvent('onload', cb);
                }
                else {
                    io.addEventListener('load', cb, false);
                }
                setTimeout(checkState,15);

                try {
                    form.submit();
                } catch(err) {
                    // just in case form has element with name/id of 'submit'
                    var submitFn = document.createElement('form').submit;
                    submitFn.apply(form);
                }
            }
            finally {
                // reset attrs and remove "extra" input elements
                form.setAttribute('action',a);
                form.setAttribute('enctype', et); // #380
                if(t) {
                    form.setAttribute('target', t);
                } else {
                    $form.removeAttr('target');
                }
                $(extraInputs).remove();
            }
        }

        if (s.forceSync) {
            doSubmit();
        }
        else {
            setTimeout(doSubmit, 10); // this lets dom updates render
        }

        var data, doc, domCheckCount = 50, callbackProcessed;

        function cb(e) {
            if (xhr.aborted || callbackProcessed) {
                return;
            }
            
            doc = getDoc(io);
            if(!doc) {
                log('cannot access response document');
                e = SERVER_ABORT;
            }
            if (e === CLIENT_TIMEOUT_ABORT && xhr) {
                xhr.abort('timeout');
                deferred.reject(xhr, 'timeout');
                return;
            }
            else if (e == SERVER_ABORT && xhr) {
                xhr.abort('server abort');
                deferred.reject(xhr, 'error', 'server abort');
                return;
            }

            if (!doc || doc.location.href == s.iframeSrc) {
                // response not received yet
                if (!timedOut) {
                    return;
                }
            }
            if (io.detachEvent) {
                io.detachEvent('onload', cb);
            }
            else {
                io.removeEventListener('load', cb, false);
            }

            var status = 'success', errMsg;
            try {
                if (timedOut) {
                    throw 'timeout';
                }

                var isXml = s.dataType == 'xml' || doc.XMLDocument || $.isXMLDoc(doc);
                log('isXml='+isXml);
                if (!isXml && window.opera && (doc.body === null || !doc.body.innerHTML)) {
                    if (--domCheckCount) {
                        // in some browsers (Opera) the iframe DOM is not always traversable when
                        // the onload callback fires, so we loop a bit to accommodate
                        log('requeing onLoad callback, DOM not available');
                        setTimeout(cb, 250);
                        return;
                    }
                    // let this fall through because server response could be an empty document
                    //log('Could not access iframe DOM after mutiple tries.');
                    //throw 'DOMException: not available';
                }

                //log('response detected');
                var docRoot = doc.body ? doc.body : doc.documentElement;
                xhr.responseText = docRoot ? docRoot.innerHTML : null;
                xhr.responseXML = doc.XMLDocument ? doc.XMLDocument : doc;
                if (isXml) {
                    s.dataType = 'xml';
                }
                xhr.getResponseHeader = function(header){
                    var headers = {'content-type': s.dataType};
                    return headers[header.toLowerCase()];
                };
                // support for XHR 'status' & 'statusText' emulation :
                if (docRoot) {
                    xhr.status = Number( docRoot.getAttribute('status') ) || xhr.status;
                    xhr.statusText = docRoot.getAttribute('statusText') || xhr.statusText;
                }

                var dt = (s.dataType || '').toLowerCase();
                var scr = /(json|script|text)/.test(dt);
                if (scr || s.textarea) {
                    // see if user embedded response in textarea
                    var ta = doc.getElementsByTagName('textarea')[0];
                    if (ta) {
                        xhr.responseText = ta.value;
                        // support for XHR 'status' & 'statusText' emulation :
                        xhr.status = Number( ta.getAttribute('status') ) || xhr.status;
                        xhr.statusText = ta.getAttribute('statusText') || xhr.statusText;
                    }
                    else if (scr) {
                        // account for browsers injecting pre around json response
                        var pre = doc.getElementsByTagName('pre')[0];
                        var b = doc.getElementsByTagName('body')[0];
                        if (pre) {
                            xhr.responseText = pre.textContent ? pre.textContent : pre.innerText;
                        }
                        else if (b) {
                            xhr.responseText = b.textContent ? b.textContent : b.innerText;
                        }
                    }
                }
                else if (dt == 'xml' && !xhr.responseXML && xhr.responseText) {
                    xhr.responseXML = toXml(xhr.responseText);
                }

                try {
                    data = httpData(xhr, dt, s);
                }
                catch (err) {
                    status = 'parsererror';
                    xhr.error = errMsg = (err || status);
                }
            }
            catch (err) {
                log('error caught: ',err);
                status = 'error';
                xhr.error = errMsg = (err || status);
            }

            if (xhr.aborted) {
                log('upload aborted');
                status = null;
            }

            if (xhr.status) { // we've set xhr.status
                status = (xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) ? 'success' : 'error';
            }

            // ordering of these callbacks/triggers is odd, but that's how $.ajax does it
            if (status === 'success') {
                if (s.success) {
                    s.success.call(s.context, data, 'success', xhr);
                }
                deferred.resolve(xhr.responseText, 'success', xhr);
                if (g) {
                    $.event.trigger("ajaxSuccess", [xhr, s]);
                }
            }
            else if (status) {
                if (errMsg === undefined) {
                    errMsg = xhr.statusText;
                }
                if (s.error) {
                    s.error.call(s.context, xhr, status, errMsg);
                }
                deferred.reject(xhr, 'error', errMsg);
                if (g) {
                    $.event.trigger("ajaxError", [xhr, s, errMsg]);
                }
            }

            if (g) {
                $.event.trigger("ajaxComplete", [xhr, s]);
            }

            if (g && ! --$.active) {
                $.event.trigger("ajaxStop");
            }

            if (s.complete) {
                s.complete.call(s.context, xhr, status);
            }

            callbackProcessed = true;
            if (s.timeout) {
                clearTimeout(timeoutHandle);
            }

            // clean up
            setTimeout(function() {
                if (!s.iframeTarget) {
                    $io.remove();
                }
                else { //adding else to clean up existing iframe response.
                    $io.attr('src', s.iframeSrc);
                }
                xhr.responseXML = null;
            }, 100);
        }

        var toXml = $.parseXML || function(s, doc) { // use parseXML if available (jQuery 1.5+)
            if (window.ActiveXObject) {
                doc = new ActiveXObject('Microsoft.XMLDOM');
                doc.async = 'false';
                doc.loadXML(s);
            }
            else {
                doc = (new DOMParser()).parseFromString(s, 'text/xml');
            }
            return (doc && doc.documentElement && doc.documentElement.nodeName != 'parsererror') ? doc : null;
        };
        var parseJSON = $.parseJSON || function(s) {
            /*jslint evil:true */
            return window['eval']('(' + s + ')');
        };

        var httpData = function( xhr, type, s ) { // mostly lifted from jq1.4.4

            var ct = xhr.getResponseHeader('content-type') || '',
                xml = type === 'xml' || !type && ct.indexOf('xml') >= 0,
                data = xml ? xhr.responseXML : xhr.responseText;

            if (xml && data.documentElement.nodeName === 'parsererror') {
                if ($.error) {
                    $.error('parsererror');
                }
            }
            if (s && s.dataFilter) {
                data = s.dataFilter(data, type);
            }
            if (typeof data === 'string') {
                if (type === 'json' || !type && ct.indexOf('json') >= 0) {
                    data = parseJSON(data);
                } else if (type === "script" || !type && ct.indexOf("javascript") >= 0) {
                    $.globalEval(data);
                }
            }
            return data;
        };

        return deferred;
    }
};

/**
 * ajaxForm() provides a mechanism for fully automating form submission.
 *
 * The advantages of using this method instead of ajaxSubmit() are:
 *
 * 1: This method will include coordinates for <input type="image" /> elements (if the element
 *    is used to submit the form).
 * 2. This method will include the submit element's name/value data (for the element that was
 *    used to submit the form).
 * 3. This method binds the submit() method to the form for you.
 *
 * The options argument for ajaxForm works exactly as it does for ajaxSubmit.  ajaxForm merely
 * passes the options argument along after properly binding events for submit elements and
 * the form itself.
 */
$.fn.ajaxForm = function(options) {
    options = options || {};
    options.delegation = options.delegation && $.isFunction($.fn.on);

    // in jQuery 1.3+ we can fix mistakes with the ready state
    if (!options.delegation && this.length === 0) {
        var o = { s: this.selector, c: this.context };
        if (!$.isReady && o.s) {
            log('DOM not ready, queuing ajaxForm');
            $(function() {
                $(o.s,o.c).ajaxForm(options);
            });
            return this;
        }
        // is your DOM ready?  http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
        log('terminating; zero elements found by selector' + ($.isReady ? '' : ' (DOM not ready)'));
        return this;
    }

    if ( options.delegation ) {
        $(document)
            .off('submit.form-plugin', this.selector, doAjaxSubmit)
            .off('click.form-plugin', this.selector, captureSubmittingElement)
            .on('submit.form-plugin', this.selector, options, doAjaxSubmit)
            .on('click.form-plugin', this.selector, options, captureSubmittingElement);
        return this;
    }

    return this.ajaxFormUnbind()
        .bind('submit.form-plugin', options, doAjaxSubmit)
        .bind('click.form-plugin', options, captureSubmittingElement);
};

// private event handlers
function doAjaxSubmit(e) {
    /*jshint validthis:true */
    var options = e.data;
    if (!e.isDefaultPrevented()) { // if event has been canceled, don't proceed
        e.preventDefault();
        $(e.target).ajaxSubmit(options); // #365
    }
}

function captureSubmittingElement(e) {
    /*jshint validthis:true */
    var target = e.target;
    var $el = $(target);
    if (!($el.is("[type=submit],[type=image]"))) {
        // is this a child element of the submit el?  (ex: a span within a button)
        var t = $el.closest('[type=submit]');
        if (t.length === 0) {
            return;
        }
        target = t[0];
    }
    var form = this;
    form.clk = target;
    if (target.type == 'image') {
        if (e.offsetX !== undefined) {
            form.clk_x = e.offsetX;
            form.clk_y = e.offsetY;
        } else if (typeof $.fn.offset == 'function') {
            var offset = $el.offset();
            form.clk_x = e.pageX - offset.left;
            form.clk_y = e.pageY - offset.top;
        } else {
            form.clk_x = e.pageX - target.offsetLeft;
            form.clk_y = e.pageY - target.offsetTop;
        }
    }
    // clear form vars
    setTimeout(function() { form.clk = form.clk_x = form.clk_y = null; }, 100);
}


// ajaxFormUnbind unbinds the event handlers that were bound by ajaxForm
$.fn.ajaxFormUnbind = function() {
    return this.unbind('submit.form-plugin click.form-plugin');
};

/**
 * formToArray() gathers form element data into an array of objects that can
 * be passed to any of the following ajax functions: $.get, $.post, or load.
 * Each object in the array has both a 'name' and 'value' property.  An example of
 * an array for a simple login form might be:
 *
 * [ { name: 'username', value: 'jresig' }, { name: 'password', value: 'secret' } ]
 *
 * It is this array that is passed to pre-submit callback functions provided to the
 * ajaxSubmit() and ajaxForm() methods.
 */
$.fn.formToArray = function(semantic, elements) {
    var a = [];
    if (this.length === 0) {
        return a;
    }

    var form = this[0];
    var formId = this.attr('id');
    var els = semantic ? form.getElementsByTagName('*') : form.elements;
    var els2;

    if (els && !/MSIE [678]/.test(navigator.userAgent)) { // #390
        els = $(els).get();  // convert to standard array
    }

    // #386; account for inputs outside the form which use the 'form' attribute
    if ( formId ) {
        els2 = $(':input[form="' + formId + '"]').get(); // hat tip @thet
        if ( els2.length ) {
            els = (els || []).concat(els2);
        }
    }

    if (!els || !els.length) {
        return a;
    }

    var i,j,n,v,el,max,jmax;
    for(i=0, max=els.length; i < max; i++) {
        el = els[i];
        n = el.name;
        if (!n || el.disabled) {
            continue;
        }

        if (semantic && form.clk && el.type == "image") {
            // handle image inputs on the fly when semantic == true
            if(form.clk == el) {
                a.push({name: n, value: $(el).val(), type: el.type });
                a.push({name: n+'.x', value: form.clk_x}, {name: n+'.y', value: form.clk_y});
            }
            continue;
        }

        v = $.fieldValue(el, true);
        if (v && v.constructor == Array) {
            if (elements) {
                elements.push(el);
            }
            for(j=0, jmax=v.length; j < jmax; j++) {
                a.push({name: n, value: v[j]});
            }
        }
        else if (feature.fileapi && el.type == 'file') {
            if (elements) {
                elements.push(el);
            }
            var files = el.files;
            if (files.length) {
                for (j=0; j < files.length; j++) {
                    a.push({name: n, value: files[j], type: el.type});
                }
            }
            else {
                // #180
                a.push({ name: n, value: '', type: el.type });
            }
        }
        else if (v !== null && typeof v != 'undefined') {
            if (elements) {
                elements.push(el);
            }
            a.push({name: n, value: v, type: el.type, required: el.required});
        }
    }

    if (!semantic && form.clk) {
        // input type=='image' are not found in elements array! handle it here
        var $input = $(form.clk), input = $input[0];
        n = input.name;
        if (n && !input.disabled && input.type == 'image') {
            a.push({name: n, value: $input.val()});
            a.push({name: n+'.x', value: form.clk_x}, {name: n+'.y', value: form.clk_y});
        }
    }
    return a;
};

/**
 * Serializes form data into a 'submittable' string. This method will return a string
 * in the format: name1=value1&amp;name2=value2
 */
$.fn.formSerialize = function(semantic) {
    //hand off to jQuery.param for proper encoding
    return $.param(this.formToArray(semantic));
};

/**
 * Serializes all field elements in the jQuery object into a query string.
 * This method will return a string in the format: name1=value1&amp;name2=value2
 */
$.fn.fieldSerialize = function(successful) {
    var a = [];
    this.each(function() {
        var n = this.name;
        if (!n) {
            return;
        }
        var v = $.fieldValue(this, successful);
        if (v && v.constructor == Array) {
            for (var i=0,max=v.length; i < max; i++) {
                a.push({name: n, value: v[i]});
            }
        }
        else if (v !== null && typeof v != 'undefined') {
            a.push({name: this.name, value: v});
        }
    });
    //hand off to jQuery.param for proper encoding
    return $.param(a);
};

/**
 * Returns the value(s) of the element in the matched set.  For example, consider the following form:
 *
 *  <form><fieldset>
 *      <input name="A" type="text" />
 *      <input name="A" type="text" />
 *      <input name="B" type="checkbox" value="B1" />
 *      <input name="B" type="checkbox" value="B2"/>
 *      <input name="C" type="radio" value="C1" />
 *      <input name="C" type="radio" value="C2" />
 *  </fieldset></form>
 *
 *  var v = $('input[type=text]').fieldValue();
 *  // if no values are entered into the text inputs
 *  v == ['','']
 *  // if values entered into the text inputs are 'foo' and 'bar'
 *  v == ['foo','bar']
 *
 *  var v = $('input[type=checkbox]').fieldValue();
 *  // if neither checkbox is checked
 *  v === undefined
 *  // if both checkboxes are checked
 *  v == ['B1', 'B2']
 *
 *  var v = $('input[type=radio]').fieldValue();
 *  // if neither radio is checked
 *  v === undefined
 *  // if first radio is checked
 *  v == ['C1']
 *
 * The successful argument controls whether or not the field element must be 'successful'
 * (per http://www.w3.org/TR/html4/interact/forms.html#successful-controls).
 * The default value of the successful argument is true.  If this value is false the value(s)
 * for each element is returned.
 *
 * Note: This method *always* returns an array.  If no valid value can be determined the
 *    array will be empty, otherwise it will contain one or more values.
 */
$.fn.fieldValue = function(successful) {
    for (var val=[], i=0, max=this.length; i < max; i++) {
        var el = this[i];
        var v = $.fieldValue(el, successful);
        if (v === null || typeof v == 'undefined' || (v.constructor == Array && !v.length)) {
            continue;
        }
        if (v.constructor == Array) {
            $.merge(val, v);
        }
        else {
            val.push(v);
        }
    }
    return val;
};

/**
 * Returns the value of the field element.
 */
$.fieldValue = function(el, successful) {
    var n = el.name, t = el.type, tag = el.tagName.toLowerCase();
    if (successful === undefined) {
        successful = true;
    }

    if (successful && (!n || el.disabled || t == 'reset' || t == 'button' ||
        (t == 'checkbox' || t == 'radio') && !el.checked ||
        (t == 'submit' || t == 'image') && el.form && el.form.clk != el ||
        tag == 'select' && el.selectedIndex == -1)) {
            return null;
    }

    if (tag == 'select') {
        var index = el.selectedIndex;
        if (index < 0) {
            return null;
        }
        var a = [], ops = el.options;
        var one = (t == 'select-one');
        var max = (one ? index+1 : ops.length);
        for(var i=(one ? index : 0); i < max; i++) {
            var op = ops[i];
            if (op.selected) {
                var v = op.value;
                if (!v) { // extra pain for IE...
                    v = (op.attributes && op.attributes.value && !(op.attributes.value.specified)) ? op.text : op.value;
                }
                if (one) {
                    return v;
                }
                a.push(v);
            }
        }
        return a;
    }
    return $(el).val();
};

/**
 * Clears the form data.  Takes the following actions on the form's input fields:
 *  - input text fields will have their 'value' property set to the empty string
 *  - select elements will have their 'selectedIndex' property set to -1
 *  - checkbox and radio inputs will have their 'checked' property set to false
 *  - inputs of type submit, button, reset, and hidden will *not* be effected
 *  - button elements will *not* be effected
 */
$.fn.clearForm = function(includeHidden) {
    return this.each(function() {
        $('input,select,textarea', this).clearFields(includeHidden);
    });
};

/**
 * Clears the selected form elements.
 */
$.fn.clearFields = $.fn.clearInputs = function(includeHidden) {
    var re = /^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i; // 'hidden' is not in this list
    return this.each(function() {
        var t = this.type, tag = this.tagName.toLowerCase();
        if (re.test(t) || tag == 'textarea') {
            this.value = '';
        }
        else if (t == 'checkbox' || t == 'radio') {
            this.checked = false;
        }
        else if (tag == 'select') {
            this.selectedIndex = -1;
        }
        else if (t == "file") {
            if (/MSIE/.test(navigator.userAgent)) {
                $(this).replaceWith($(this).clone(true));
            } else {
                $(this).val('');
            }
        }
        else if (includeHidden) {
            // includeHidden can be the value true, or it can be a selector string
            // indicating a special test; for example:
            //  $('#myForm').clearForm('.special:hidden')
            // the above would clean hidden inputs that have the class of 'special'
            if ( (includeHidden === true && /hidden/.test(t)) ||
                 (typeof includeHidden == 'string' && $(this).is(includeHidden)) ) {
                this.value = '';
            }
        }
    });
};

/**
 * Resets the form data.  Causes all form elements to be reset to their original value.
 */
$.fn.resetForm = function() {
    return this.each(function() {
        // guard against an input with the name of 'reset'
        // note that IE reports the reset function as an 'object'
        if (typeof this.reset == 'function' || (typeof this.reset == 'object' && !this.reset.nodeType)) {
            this.reset();
        }
    });
};

/**
 * Enables or disables any matching elements.
 */
$.fn.enable = function(b) {
    if (b === undefined) {
        b = true;
    }
    return this.each(function() {
        this.disabled = !b;
    });
};

/**
 * Checks/unchecks any matching checkboxes or radio buttons and
 * selects/deselects and matching option elements.
 */
$.fn.selected = function(select) {
    if (select === undefined) {
        select = true;
    }
    return this.each(function() {
        var t = this.type;
        if (t == 'checkbox' || t == 'radio') {
            this.checked = select;
        }
        else if (this.tagName.toLowerCase() == 'option') {
            var $sel = $(this).parent('select');
            if (select && $sel[0] && $sel[0].type == 'select-one') {
                // deselect all other options
                $sel.find('option').selected(false);
            }
            this.selected = select;
        }
    });
};

// expose debug var
$.fn.ajaxSubmit.debug = false;

// helper fn for console logging
function log() {
    if (!$.fn.ajaxSubmit.debug) {
        return;
    }
    var msg = '[jquery.form] ' + Array.prototype.join.call(arguments,'');
    if (window.console && window.console.log) {
        window.console.log(msg);
    }
    else if (window.opera && window.opera.postError) {
        window.opera.postError(msg);
    }
}

}));

},{}],"C:\\Users\\iamle\\Documents\\Work\\_inprogress\\hbmontessori.ru\\hbmontessori\\src\\scripts\\views\\sequence.js":[function(require,module,exports){
(function() {
  var sequences = [];
  var sequenceElement = document.getElementById("sequence1");
  var sequenceElement2 = document.getElementById("sequence2");
  if (sequenceElement == null || sequenceElement2 == null) {
    return;
  }

  var options = {
    animateCanvas: false,
    keyNavigation: true,
    fadeStepWhenSkipped: false,
    // reverseWhenNavigatingBackwards: true,
    // nextButton: '#sequence1 .seq-prev',
    // prevButton: '#sequence1 .seq-next',
    pagination: '#sequence1 .slider__pagination',
    preloader: false,
    // reverseTimingFunctionWhenNavigatingBackwards: true,
  }

  var options2 = {
    animateCanvas: true,
    keyNavigation: false,
    fadeStepWhenSkipped: false,
    reverseWhenNavigatingBackwards: true,
    nextButton: '.wrapper_mac .seq-next',
    prevButton: '.wrapper_mac .seq-prev',
    // pagination: '#sequence1 .slider__pagination',
    preloader: false,
    // reverseTimingFunctionWhenNavigatingBackwards: true,
  }

  var mySequence = sequence(sequenceElement, options);
  sequences.push(mySequence);

  var mySequence2 = sequence(sequenceElement2, options2);
  sequences.push({elem: sequenceElement, seq: mySequence});
  sequences.push({elem: sequenceElement2, seq: mySequence2});
  return sequences;
})();

},{}]},{},["C:\\Users\\iamle\\Documents\\Work\\_inprogress\\hbmontessori.ru\\hbmontessori\\src\\scripts\\main.js"])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvc2NyaXB0cy9tYWluLmpzIiwic3JjL3NjcmlwdHMvdmlld3MvZm9ybXMuanMiLCJzcmMvc2NyaXB0cy92aWV3cy9zZXF1ZW5jZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN3ZDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8vIGltcG9ydCBWaWV3IGZyb20gJy4vdmlld3Mvdmlldyc7XG5cbi8vIGNvbnN0IGcgPSA5LjgxO1xuXG4kKGZ1bmN0aW9uKCkge1xuICB2YXIgaW1hZ2VzU2VsZWN0b3IgPSBbXG4gICAgXCIuc2xpZGVyX19jb250ZW50IGltZ1wiXG4gIF0uam9pbignLCAnKTtcblxuICAkKGltYWdlc1NlbGVjdG9yKS5pbWFnZXNMb2FkZWQoeyBiYWNrZ3JvdW5kOiB0cnVlIH0pXG4gICAgLmRvbmUoZnVuY3Rpb24oaW5zdGFuY2UpIHtcblxuICAgIH0pXG4gICAgLmZhaWwoZnVuY3Rpb24oKSB7XG4gICAgICBhbGVydChcItCd0LUg0LLRgdC1INC40LfQvtCx0YDQsNC20LXQvdC40Y8g0YPQtNCw0LvQvtGB0Ywg0LfQsNCz0YDRg9C30LjRgtGMLiDQktC10LEt0YHRgtGA0LDQvdC40YbQsCDQvNC+0LbQtdGCINCy0YvQs9C70Y/QtNC10YLRjCDQuNGB0LrQsNC20LXQvdC90L7QuS5cIik7XG4gICAgfSlcbiAgICAuYWx3YXlzKGZ1bmN0aW9uKCkge1xuICAgICAgZnJvbnRQYWdlKCk7XG4gICAgfSk7XG59KTtcblxuXG52YXIgcGFnZUZvcm1zID0gZnVuY3Rpb24gKCkge1xuICB2YXIgZm9ybXMgPSBbXG4gICAgJy5mb3JtJyxcbiAgXTtcbiAgdmFyIG9wdGlvbnMgPSB7XG4gICAgZGVsZWdhdGlvbjogdHJ1ZSxcbiAgICBjbGVhckZvcm06IHRydWUsXG4gICAgcmVzZXRGb3JtOiB0cnVlLFxuICAgIHR5cGU6ICdwb3N0JyxcbiAgICBiZWZvcmVTdWJtaXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgLy8gJC5tYWduaWZpY1BvcHVwLmNsb3NlKCk7XG4gICAgfSxcbiAgICBzdWNjZXNzOiBmdW5jdGlvbigpIHtcbiAgICAgICQubWFnbmlmaWNQb3B1cC5vcGVuKHtcbiAgICAgICAgaXRlbXM6IHtcbiAgICAgICAgICBzcmM6ICcjcG9wdXBUaGFua3MnLFxuICAgICAgICB9LFxuICAgICAgICB0eXBlOiAnaW5saW5lJyxcbiAgICAgICAgcmVtb3ZhbERlbGF5OiA1MDAsXG4gICAgICAgIG1haW5DbGFzczogJ21mcC16b29tLWluIG1vZGFsJyxcbiAgICAgICAgY2FsbGJhY2tzOiB7XG4gICAgICAgICAgYmVmb3JlT3BlbjogZnVuY3Rpb24oKSB7fVxuICAgICAgICB9LFxuICAgICAgICBtaWRDbGljazogdHJ1ZVxuICAgICAgfSk7XG4gICAgfSxcbiAgICBlcnJvcjogZnVuY3Rpb24oKSB7XG4gICAgICAkLm1hZ25pZmljUG9wdXAub3Blbih7XG4gICAgICAgIGl0ZW1zOiB7XG4gICAgICAgICAgc3JjOiAnI3BvcHVwRXJyb3InLFxuICAgICAgICB9LFxuICAgICAgICB0eXBlOiAnaW5saW5lJyxcbiAgICAgICAgcmVtb3ZhbERlbGF5OiA1MDAsXG4gICAgICAgIG1haW5DbGFzczogJ21mcC16b29tLWluIG1vZGFsJyxcbiAgICAgICAgY2FsbGJhY2tzOiB7XG4gICAgICAgICAgYmVmb3JlT3BlbjogZnVuY3Rpb24oKSB7fVxuICAgICAgICB9LFxuICAgICAgICBtaWRDbGljazogdHJ1ZVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgJChmb3JtcykuZWFjaChmdW5jdGlvbiAoaW5kZXgsIGVsZW0pIHtcbiAgICAgJCh0aGlzKS5hamF4Rm9ybShvcHRpb25zKVxuICB9KTtcblxuICAkKCcuYnV0dG9uX2hlYWRlcicpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcG9wdXBGb3JtID0gJCgnI3BvcHVwRm9ybScpO1xuICAgICQubWFnbmlmaWNQb3B1cC5vcGVuKHtcbiAgICAgIGl0ZW1zOiB7XG4gICAgICAgIHNyYzogcG9wdXBGb3JtLFxuICAgICAgfSxcbiAgICAgIHR5cGU6ICdpbmxpbmUnLFxuICAgICAgcmVtb3ZhbERlbGF5OiA1MDAsXG4gICAgICBtYWluQ2xhc3M6ICdtZnAtem9vbS1pbiBtb2RhbCcsXG4gICAgICBjYWxsYmFja3M6IHtcbiAgICAgICAgYmVmb3JlT3BlbjogZnVuY3Rpb24oKSB7fVxuICAgICAgfSxcbiAgICAgIG1pZENsaWNrOiB0cnVlXG4gICAgfSk7XG4gIH0pO1xuXG4gICQoJyNtYXBzJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAkLm1hZ25pZmljUG9wdXAub3Blbih7XG4gICAgICBpdGVtczoge1xuICAgICAgICBzcmM6ICcjbW9kYWx6YWthejMnLFxuICAgICAgfSxcbiAgICAgIHR5cGU6ICdpbmxpbmUnLFxuICAgICAgcmVtb3ZhbERlbGF5OiA1MDAsXG4gICAgICBtYWluQ2xhc3M6ICdtZnAtem9vbS1pbiBtb2RhbCcsXG4gICAgICBjYWxsYmFja3M6IHtcbiAgICAgICAgYmVmb3JlT3BlbjogZnVuY3Rpb24oKSB7fVxuICAgICAgfSxcbiAgICAgIG1pZENsaWNrOiB0cnVlXG4gICAgfSk7IFxuICB9KTtcbn07XG5cblxudmFyIGZyb250UGFnZSA9IGZ1bmN0aW9uKGFyZ3VtZW50KSB7XG4gICQoZG9jdW1lbnQuYm9keSkuYWRkQ2xhc3MoJ2ltYWdlc0xvYWRlZCcpO1xuICAkKCcjcHJlbG9hZGVyJykuZmFkZU91dCh7XG4gICAgZHVyYXRpb246IDQwMCxcbiAgICBlYXNpbmc6ICdlYXNlSW5PdXRTaW5lJ1xuICB9KTtcbiAgdmFyIHNlcXVlbmNlcyA9IHJlcXVpcmUoJy4vdmlld3Mvc2VxdWVuY2UnKTtcbiAgdmFyIGZvcm1zID0gcmVxdWlyZSgnLi92aWV3cy9mb3JtcycpO1xuXG4gICQoJy5yZWFkTW9yZScpLnJlYWRtb3JlKHtcbiAgICBzcGVlZDogNzUsXG4gICAgbW9yZUxpbms6ICc8YSBocmVmPVwiI1wiIGNsYXNzPVwiYnV0dG9uIGJ1dHRvbl9yZWFkbW9yZVwiPtCn0LjRgtCw0YLRjCDQv9C+0LvQvdC+0YHRgtGM0Y4gPj48L2E+JyxcbiAgICBsZXNzTGluazogJzxhIGhyZWY9XCIjXCIgY2xhc3M9XCJidXR0b24gYnV0dG9uX3JlYWRtb3JlXCI+0KHQutGA0YvRgtGMPC9hPidcbiAgfSk7XG5cbiAgdmFyICRuYXYgPSAkKCcubmF2Jyk7XG4gIHZhciBuYXZPZmZzZXQgPSAkbmF2Lm9mZnNldCgpLnRvcDtcbiAgdmFyIHdpbmRvd1Njcm9sbCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgaWYgKCQod2luZG93KS5zY3JvbGxUb3AoKSA+IG5hdk9mZnNldCkge1xuICAgICAgJG5hdi5hZGRDbGFzcygnZml4ZWQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgJG5hdi5yZW1vdmVDbGFzcygnZml4ZWQnKTtcbiAgICB9XG4gIH07XG4gIHZhciB3aW5kb3dSZXNpemUgPSBmdW5jdGlvbiAoZSkge1xuICAgIG5hdk9mZnNldCA9ICQoc2VxdWVuY2VzWzBdLmVsZW0pLm9mZnNldCgpLnRvcDtcbiAgfTtcbiAgJCh3aW5kb3cpLm9uKCdzY3JvbGwnLCB3aW5kb3dTY3JvbGwpO1xuICAkKHdpbmRvdykub24oJ3Jlc2l6ZScsIHdpbmRvd1Jlc2l6ZSk7XG4gICQoZG9jdW1lbnQpLnJlYWR5KHdpbmRvd1Njcm9sbCk7XG5cbiAgdmFyIHNjcm9sbFRvRWxlbWVudCA9IGZ1bmN0aW9uKGVsZW1lbnQsIG9mZnNldCkge1xuICAgICQoZWxlbWVudCkuY2xpY2soZnVuY3Rpb24oZSkge1xuICAgICAgdmFyIGVsZW1lbnRDbGljayA9ICQodGhpcykuYXR0cihcImhyZWZcIik7XG4gICAgICB2YXIgZGVzdGluYXRpb24gID0gJChlbGVtZW50Q2xpY2spWzBdLm9mZnNldFRvcDtcbiAgICAgIGlmKGRlc3RpbmF0aW9uIDwgMCkge2Rlc3RpbmF0aW9uID0gMDt9XG4gICAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7c2Nyb2xsVG9wOiBkZXN0aW5hdGlvbiAtIG9mZnNldH0sIFwic2xvd1wiKTtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHNjcm9sbFRvRWxlbWVudChcIi5uYXYgYVtocmVmPScjdG9kZGxlciddXCIsIDApO1xuICBzY3JvbGxUb0VsZW1lbnQoXCIubmF2IGFbaHJlZj0nI3ByaW1hcnknXVwiLCAwKTtcbiAgc2Nyb2xsVG9FbGVtZW50KFwiLm5hdiBhW2hyZWY9JyNvdXJ0ZWFtJ11cIiwgNTApO1xuICBzY3JvbGxUb0VsZW1lbnQoXCIubmF2IGFbaHJlZj0nI2NhYmluZXQnXVwiLCAwKTtcbiAgc2Nyb2xsVG9FbGVtZW50KFwiLm5hdiBhW2hyZWY9JyNsb2NhdGlvbiddXCIsIDApO1xuXG4gIHNjcm9sbFRvRWxlbWVudChcIi5zaWRlbmF2IGFbaHJlZj0nI3RvZGRsZXInXVwiLCAwKTtcbiAgc2Nyb2xsVG9FbGVtZW50KFwiLnNpZGVuYXYgYVtocmVmPScjcHJpbWFyeSddXCIsIDApO1xuICBzY3JvbGxUb0VsZW1lbnQoXCIuc2lkZW5hdiBhW2hyZWY9JyNvdXJ0ZWFtJ11cIiwgNTApO1xuICBzY3JvbGxUb0VsZW1lbnQoXCIuc2lkZW5hdiBhW2hyZWY9JyNjYWJpbmV0J11cIiwgMCk7XG4gIHNjcm9sbFRvRWxlbWVudChcIi5zaWRlbmF2IGFbaHJlZj0nI2xvY2F0aW9uJ11cIiwgMCk7XG5cbiAgdmFyIHNpZGVOYXZPcGVuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ29wZW5TaWRlbmF2Jyk7XG4gIHZhciBzaWRlTmF2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NpZGVuYXYnKTtcbiAgdmFyIGNsb3NlYnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nsb3NlYnRuJyk7XG4gIHNpZGVOYXZPcGVuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgc2lkZU5hdi5zdHlsZS53aWR0aCA9ICcyNTBweCc7XG4gIH0pO1xuICBjbG9zZWJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHNpZGVOYXYuc3R5bGUud2lkdGggPSAnMCc7XG4gIH0pO1xuXG4gIHBhZ2VGb3JtcygpO1xufTtcbiIsIi8qIVxuICogalF1ZXJ5IEZvcm0gUGx1Z2luXG4gKiB2ZXJzaW9uOiAzLjUxLjAtMjAxNC4wNi4yMFxuICogUmVxdWlyZXMgalF1ZXJ5IHYxLjUgb3IgbGF0ZXJcbiAqIENvcHlyaWdodCAoYykgMjAxNCBNLiBBbHN1cFxuICogRXhhbXBsZXMgYW5kIGRvY3VtZW50YXRpb24gYXQ6IGh0dHA6Ly9tYWxzdXAuY29tL2pxdWVyeS9mb3JtL1xuICogUHJvamVjdCByZXBvc2l0b3J5OiBodHRwczovL2dpdGh1Yi5jb20vbWFsc3VwL2Zvcm1cbiAqIER1YWwgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBhbmQgR1BMIGxpY2Vuc2VzLlxuICogaHR0cHM6Ly9naXRodWIuY29tL21hbHN1cC9mb3JtI2NvcHlyaWdodC1hbmQtbGljZW5zZVxuICovXG4vKmdsb2JhbCBBY3RpdmVYT2JqZWN0ICovXG5cbi8vIEFNRCBzdXBwb3J0XG4oZnVuY3Rpb24gKGZhY3RvcnkpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcbiAgICBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgICAgIC8vIHVzaW5nIEFNRDsgcmVnaXN0ZXIgYXMgYW5vbiBtb2R1bGVcbiAgICAgICAgZGVmaW5lKFsnanF1ZXJ5J10sIGZhY3RvcnkpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIG5vIEFNRDsgaW52b2tlIGRpcmVjdGx5XG4gICAgICAgIGZhY3RvcnkoICh0eXBlb2YoalF1ZXJ5KSAhPSAndW5kZWZpbmVkJykgPyBqUXVlcnkgOiB3aW5kb3cuWmVwdG8gKTtcbiAgICB9XG59XG5cbihmdW5jdGlvbigkKSB7XG5cInVzZSBzdHJpY3RcIjtcblxuLypcbiAgICBVc2FnZSBOb3RlOlxuICAgIC0tLS0tLS0tLS0tXG4gICAgRG8gbm90IHVzZSBib3RoIGFqYXhTdWJtaXQgYW5kIGFqYXhGb3JtIG9uIHRoZSBzYW1lIGZvcm0uICBUaGVzZVxuICAgIGZ1bmN0aW9ucyBhcmUgbXV0dWFsbHkgZXhjbHVzaXZlLiAgVXNlIGFqYXhTdWJtaXQgaWYgeW91IHdhbnRcbiAgICB0byBiaW5kIHlvdXIgb3duIHN1Ym1pdCBoYW5kbGVyIHRvIHRoZSBmb3JtLiAgRm9yIGV4YW1wbGUsXG5cbiAgICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcbiAgICAgICAgJCgnI215Rm9ybScpLm9uKCdzdWJtaXQnLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7IC8vIDwtLSBpbXBvcnRhbnRcbiAgICAgICAgICAgICQodGhpcykuYWpheFN1Ym1pdCh7XG4gICAgICAgICAgICAgICAgdGFyZ2V0OiAnI291dHB1dCdcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIFVzZSBhamF4Rm9ybSB3aGVuIHlvdSB3YW50IHRoZSBwbHVnaW4gdG8gbWFuYWdlIGFsbCB0aGUgZXZlbnQgYmluZGluZ1xuICAgIGZvciB5b3UuICBGb3IgZXhhbXBsZSxcblxuICAgICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuICAgICAgICAkKCcjbXlGb3JtJykuYWpheEZvcm0oe1xuICAgICAgICAgICAgdGFyZ2V0OiAnI291dHB1dCdcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBZb3UgY2FuIGFsc28gdXNlIGFqYXhGb3JtIHdpdGggZGVsZWdhdGlvbiAocmVxdWlyZXMgalF1ZXJ5IHYxLjcrKSwgc28gdGhlXG4gICAgZm9ybSBkb2VzIG5vdCBoYXZlIHRvIGV4aXN0IHdoZW4geW91IGludm9rZSBhamF4Rm9ybTpcblxuICAgICQoJyNteUZvcm0nKS5hamF4Rm9ybSh7XG4gICAgICAgIGRlbGVnYXRpb246IHRydWUsXG4gICAgICAgIHRhcmdldDogJyNvdXRwdXQnXG4gICAgfSk7XG5cbiAgICBXaGVuIHVzaW5nIGFqYXhGb3JtLCB0aGUgYWpheFN1Ym1pdCBmdW5jdGlvbiB3aWxsIGJlIGludm9rZWQgZm9yIHlvdVxuICAgIGF0IHRoZSBhcHByb3ByaWF0ZSB0aW1lLlxuKi9cblxuLyoqXG4gKiBGZWF0dXJlIGRldGVjdGlvblxuICovXG52YXIgZmVhdHVyZSA9IHt9O1xuZmVhdHVyZS5maWxlYXBpID0gJChcIjxpbnB1dCB0eXBlPSdmaWxlJy8+XCIpLmdldCgwKS5maWxlcyAhPT0gdW5kZWZpbmVkO1xuZmVhdHVyZS5mb3JtZGF0YSA9IHdpbmRvdy5Gb3JtRGF0YSAhPT0gdW5kZWZpbmVkO1xuXG52YXIgaGFzUHJvcCA9ICEhJC5mbi5wcm9wO1xuXG4vLyBhdHRyMiB1c2VzIHByb3Agd2hlbiBpdCBjYW4gYnV0IGNoZWNrcyB0aGUgcmV0dXJuIHR5cGUgZm9yXG4vLyBhbiBleHBlY3RlZCBzdHJpbmcuICB0aGlzIGFjY291bnRzIGZvciB0aGUgY2FzZSB3aGVyZSBhIGZvcm0gXG4vLyBjb250YWlucyBpbnB1dHMgd2l0aCBuYW1lcyBsaWtlIFwiYWN0aW9uXCIgb3IgXCJtZXRob2RcIjsgaW4gdGhvc2Vcbi8vIGNhc2VzIFwicHJvcFwiIHJldHVybnMgdGhlIGVsZW1lbnRcbiQuZm4uYXR0cjIgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAoICEgaGFzUHJvcCApIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXR0ci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgICB2YXIgdmFsID0gdGhpcy5wcm9wLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgaWYgKCAoIHZhbCAmJiB2YWwuanF1ZXJ5ICkgfHwgdHlwZW9mIHZhbCA9PT0gJ3N0cmluZycgKSB7XG4gICAgICAgIHJldHVybiB2YWw7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmF0dHIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG5cbi8qKlxuICogYWpheFN1Ym1pdCgpIHByb3ZpZGVzIGEgbWVjaGFuaXNtIGZvciBpbW1lZGlhdGVseSBzdWJtaXR0aW5nXG4gKiBhbiBIVE1MIGZvcm0gdXNpbmcgQUpBWC5cbiAqL1xuJC5mbi5hamF4U3VibWl0ID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICAgIC8qanNoaW50IHNjcmlwdHVybDp0cnVlICovXG5cbiAgICAvLyBmYXN0IGZhaWwgaWYgbm90aGluZyBzZWxlY3RlZCAoaHR0cDovL2Rldi5qcXVlcnkuY29tL3RpY2tldC8yNzUyKVxuICAgIGlmICghdGhpcy5sZW5ndGgpIHtcbiAgICAgICAgbG9nKCdhamF4U3VibWl0OiBza2lwcGluZyBzdWJtaXQgcHJvY2VzcyAtIG5vIGVsZW1lbnQgc2VsZWN0ZWQnKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgdmFyIG1ldGhvZCwgYWN0aW9uLCB1cmwsICRmb3JtID0gdGhpcztcblxuICAgIGlmICh0eXBlb2Ygb3B0aW9ucyA9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIG9wdGlvbnMgPSB7IHN1Y2Nlc3M6IG9wdGlvbnMgfTtcbiAgICB9XG4gICAgZWxzZSBpZiAoIG9wdGlvbnMgPT09IHVuZGVmaW5lZCApIHtcbiAgICAgICAgb3B0aW9ucyA9IHt9O1xuICAgIH1cblxuICAgIG1ldGhvZCA9IG9wdGlvbnMudHlwZSB8fCB0aGlzLmF0dHIyKCdtZXRob2QnKTtcbiAgICBhY3Rpb24gPSBvcHRpb25zLnVybCAgfHwgdGhpcy5hdHRyMignYWN0aW9uJyk7XG5cbiAgICB1cmwgPSAodHlwZW9mIGFjdGlvbiA9PT0gJ3N0cmluZycpID8gJC50cmltKGFjdGlvbikgOiAnJztcbiAgICB1cmwgPSB1cmwgfHwgd2luZG93LmxvY2F0aW9uLmhyZWYgfHwgJyc7XG4gICAgaWYgKHVybCkge1xuICAgICAgICAvLyBjbGVhbiB1cmwgKGRvbid0IGluY2x1ZGUgaGFzaCB2YXVlKVxuICAgICAgICB1cmwgPSAodXJsLm1hdGNoKC9eKFteI10rKS8pfHxbXSlbMV07XG4gICAgfVxuXG4gICAgb3B0aW9ucyA9ICQuZXh0ZW5kKHRydWUsIHtcbiAgICAgICAgdXJsOiAgdXJsLFxuICAgICAgICBzdWNjZXNzOiAkLmFqYXhTZXR0aW5ncy5zdWNjZXNzLFxuICAgICAgICB0eXBlOiBtZXRob2QgfHwgJC5hamF4U2V0dGluZ3MudHlwZSxcbiAgICAgICAgaWZyYW1lU3JjOiAvXmh0dHBzL2kudGVzdCh3aW5kb3cubG9jYXRpb24uaHJlZiB8fCAnJykgPyAnamF2YXNjcmlwdDpmYWxzZScgOiAnYWJvdXQ6YmxhbmsnXG4gICAgfSwgb3B0aW9ucyk7XG5cbiAgICAvLyBob29rIGZvciBtYW5pcHVsYXRpbmcgdGhlIGZvcm0gZGF0YSBiZWZvcmUgaXQgaXMgZXh0cmFjdGVkO1xuICAgIC8vIGNvbnZlbmllbnQgZm9yIHVzZSB3aXRoIHJpY2ggZWRpdG9ycyBsaWtlIHRpbnlNQ0Ugb3IgRkNLRWRpdG9yXG4gICAgdmFyIHZldG8gPSB7fTtcbiAgICB0aGlzLnRyaWdnZXIoJ2Zvcm0tcHJlLXNlcmlhbGl6ZScsIFt0aGlzLCBvcHRpb25zLCB2ZXRvXSk7XG4gICAgaWYgKHZldG8udmV0bykge1xuICAgICAgICBsb2coJ2FqYXhTdWJtaXQ6IHN1Ym1pdCB2ZXRvZWQgdmlhIGZvcm0tcHJlLXNlcmlhbGl6ZSB0cmlnZ2VyJyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8vIHByb3ZpZGUgb3Bwb3J0dW5pdHkgdG8gYWx0ZXIgZm9ybSBkYXRhIGJlZm9yZSBpdCBpcyBzZXJpYWxpemVkXG4gICAgaWYgKG9wdGlvbnMuYmVmb3JlU2VyaWFsaXplICYmIG9wdGlvbnMuYmVmb3JlU2VyaWFsaXplKHRoaXMsIG9wdGlvbnMpID09PSBmYWxzZSkge1xuICAgICAgICBsb2coJ2FqYXhTdWJtaXQ6IHN1Ym1pdCBhYm9ydGVkIHZpYSBiZWZvcmVTZXJpYWxpemUgY2FsbGJhY2snKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgdmFyIHRyYWRpdGlvbmFsID0gb3B0aW9ucy50cmFkaXRpb25hbDtcbiAgICBpZiAoIHRyYWRpdGlvbmFsID09PSB1bmRlZmluZWQgKSB7XG4gICAgICAgIHRyYWRpdGlvbmFsID0gJC5hamF4U2V0dGluZ3MudHJhZGl0aW9uYWw7XG4gICAgfVxuXG4gICAgdmFyIGVsZW1lbnRzID0gW107XG4gICAgdmFyIHF4LCBhID0gdGhpcy5mb3JtVG9BcnJheShvcHRpb25zLnNlbWFudGljLCBlbGVtZW50cyk7XG4gICAgaWYgKG9wdGlvbnMuZGF0YSkge1xuICAgICAgICBvcHRpb25zLmV4dHJhRGF0YSA9IG9wdGlvbnMuZGF0YTtcbiAgICAgICAgcXggPSAkLnBhcmFtKG9wdGlvbnMuZGF0YSwgdHJhZGl0aW9uYWwpO1xuICAgIH1cblxuICAgIC8vIGdpdmUgcHJlLXN1Ym1pdCBjYWxsYmFjayBhbiBvcHBvcnR1bml0eSB0byBhYm9ydCB0aGUgc3VibWl0XG4gICAgaWYgKG9wdGlvbnMuYmVmb3JlU3VibWl0ICYmIG9wdGlvbnMuYmVmb3JlU3VibWl0KGEsIHRoaXMsIG9wdGlvbnMpID09PSBmYWxzZSkge1xuICAgICAgICBsb2coJ2FqYXhTdWJtaXQ6IHN1Ym1pdCBhYm9ydGVkIHZpYSBiZWZvcmVTdWJtaXQgY2FsbGJhY2snKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLy8gZmlyZSB2ZXRvYWJsZSAndmFsaWRhdGUnIGV2ZW50XG4gICAgdGhpcy50cmlnZ2VyKCdmb3JtLXN1Ym1pdC12YWxpZGF0ZScsIFthLCB0aGlzLCBvcHRpb25zLCB2ZXRvXSk7XG4gICAgaWYgKHZldG8udmV0bykge1xuICAgICAgICBsb2coJ2FqYXhTdWJtaXQ6IHN1Ym1pdCB2ZXRvZWQgdmlhIGZvcm0tc3VibWl0LXZhbGlkYXRlIHRyaWdnZXInKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgdmFyIHEgPSAkLnBhcmFtKGEsIHRyYWRpdGlvbmFsKTtcbiAgICBpZiAocXgpIHtcbiAgICAgICAgcSA9ICggcSA/IChxICsgJyYnICsgcXgpIDogcXggKTtcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMudHlwZS50b1VwcGVyQ2FzZSgpID09ICdHRVQnKSB7XG4gICAgICAgIG9wdGlvbnMudXJsICs9IChvcHRpb25zLnVybC5pbmRleE9mKCc/JykgPj0gMCA/ICcmJyA6ICc/JykgKyBxO1xuICAgICAgICBvcHRpb25zLmRhdGEgPSBudWxsOyAgLy8gZGF0YSBpcyBudWxsIGZvciAnZ2V0J1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgb3B0aW9ucy5kYXRhID0gcTsgLy8gZGF0YSBpcyB0aGUgcXVlcnkgc3RyaW5nIGZvciAncG9zdCdcbiAgICB9XG5cbiAgICB2YXIgY2FsbGJhY2tzID0gW107XG4gICAgaWYgKG9wdGlvbnMucmVzZXRGb3JtKSB7XG4gICAgICAgIGNhbGxiYWNrcy5wdXNoKGZ1bmN0aW9uKCkgeyAkZm9ybS5yZXNldEZvcm0oKTsgfSk7XG4gICAgfVxuICAgIGlmIChvcHRpb25zLmNsZWFyRm9ybSkge1xuICAgICAgICBjYWxsYmFja3MucHVzaChmdW5jdGlvbigpIHsgJGZvcm0uY2xlYXJGb3JtKG9wdGlvbnMuaW5jbHVkZUhpZGRlbik7IH0pO1xuICAgIH1cblxuICAgIC8vIHBlcmZvcm0gYSBsb2FkIG9uIHRoZSB0YXJnZXQgb25seSBpZiBkYXRhVHlwZSBpcyBub3QgcHJvdmlkZWRcbiAgICBpZiAoIW9wdGlvbnMuZGF0YVR5cGUgJiYgb3B0aW9ucy50YXJnZXQpIHtcbiAgICAgICAgdmFyIG9sZFN1Y2Nlc3MgPSBvcHRpb25zLnN1Y2Nlc3MgfHwgZnVuY3Rpb24oKXt9O1xuICAgICAgICBjYWxsYmFja3MucHVzaChmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICB2YXIgZm4gPSBvcHRpb25zLnJlcGxhY2VUYXJnZXQgPyAncmVwbGFjZVdpdGgnIDogJ2h0bWwnO1xuICAgICAgICAgICAgJChvcHRpb25zLnRhcmdldClbZm5dKGRhdGEpLmVhY2gob2xkU3VjY2VzcywgYXJndW1lbnRzKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKG9wdGlvbnMuc3VjY2Vzcykge1xuICAgICAgICBjYWxsYmFja3MucHVzaChvcHRpb25zLnN1Y2Nlc3MpO1xuICAgIH1cblxuICAgIG9wdGlvbnMuc3VjY2VzcyA9IGZ1bmN0aW9uKGRhdGEsIHN0YXR1cywgeGhyKSB7IC8vIGpRdWVyeSAxLjQrIHBhc3NlcyB4aHIgYXMgM3JkIGFyZ1xuICAgICAgICB2YXIgY29udGV4dCA9IG9wdGlvbnMuY29udGV4dCB8fCB0aGlzIDsgICAgLy8galF1ZXJ5IDEuNCsgc3VwcG9ydHMgc2NvcGUgY29udGV4dFxuICAgICAgICBmb3IgKHZhciBpPTAsIG1heD1jYWxsYmFja3MubGVuZ3RoOyBpIDwgbWF4OyBpKyspIHtcbiAgICAgICAgICAgIGNhbGxiYWNrc1tpXS5hcHBseShjb250ZXh0LCBbZGF0YSwgc3RhdHVzLCB4aHIgfHwgJGZvcm0sICRmb3JtXSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgaWYgKG9wdGlvbnMuZXJyb3IpIHtcbiAgICAgICAgdmFyIG9sZEVycm9yID0gb3B0aW9ucy5lcnJvcjtcbiAgICAgICAgb3B0aW9ucy5lcnJvciA9IGZ1bmN0aW9uKHhociwgc3RhdHVzLCBlcnJvcikge1xuICAgICAgICAgICAgdmFyIGNvbnRleHQgPSBvcHRpb25zLmNvbnRleHQgfHwgdGhpcztcbiAgICAgICAgICAgIG9sZEVycm9yLmFwcGx5KGNvbnRleHQsIFt4aHIsIHN0YXR1cywgZXJyb3IsICRmb3JtXSk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgIGlmIChvcHRpb25zLmNvbXBsZXRlKSB7XG4gICAgICAgIHZhciBvbGRDb21wbGV0ZSA9IG9wdGlvbnMuY29tcGxldGU7XG4gICAgICAgIG9wdGlvbnMuY29tcGxldGUgPSBmdW5jdGlvbih4aHIsIHN0YXR1cykge1xuICAgICAgICAgICAgdmFyIGNvbnRleHQgPSBvcHRpb25zLmNvbnRleHQgfHwgdGhpcztcbiAgICAgICAgICAgIG9sZENvbXBsZXRlLmFwcGx5KGNvbnRleHQsIFt4aHIsIHN0YXR1cywgJGZvcm1dKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBhcmUgdGhlcmUgZmlsZXMgdG8gdXBsb2FkP1xuXG4gICAgLy8gW3ZhbHVlXSAoaXNzdWUgIzExMyksIGFsc28gc2VlIGNvbW1lbnQ6XG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL21hbHN1cC9mb3JtL2NvbW1pdC81ODgzMDZhZWRiYTFkZTAxMzg4MDMyZDVmNDJhNjAxNTllZWE5MjI4I2NvbW1pdGNvbW1lbnQtMjE4MDIxOVxuICAgIHZhciBmaWxlSW5wdXRzID0gJCgnaW5wdXRbdHlwZT1maWxlXTplbmFibGVkJywgdGhpcykuZmlsdGVyKGZ1bmN0aW9uKCkgeyByZXR1cm4gJCh0aGlzKS52YWwoKSAhPT0gJyc7IH0pO1xuXG4gICAgdmFyIGhhc0ZpbGVJbnB1dHMgPSBmaWxlSW5wdXRzLmxlbmd0aCA+IDA7XG4gICAgdmFyIG1wID0gJ211bHRpcGFydC9mb3JtLWRhdGEnO1xuICAgIHZhciBtdWx0aXBhcnQgPSAoJGZvcm0uYXR0cignZW5jdHlwZScpID09IG1wIHx8ICRmb3JtLmF0dHIoJ2VuY29kaW5nJykgPT0gbXApO1xuXG4gICAgdmFyIGZpbGVBUEkgPSBmZWF0dXJlLmZpbGVhcGkgJiYgZmVhdHVyZS5mb3JtZGF0YTtcbiAgICBsb2coXCJmaWxlQVBJIDpcIiArIGZpbGVBUEkpO1xuICAgIHZhciBzaG91bGRVc2VGcmFtZSA9IChoYXNGaWxlSW5wdXRzIHx8IG11bHRpcGFydCkgJiYgIWZpbGVBUEk7XG5cbiAgICB2YXIganF4aHI7XG5cbiAgICAvLyBvcHRpb25zLmlmcmFtZSBhbGxvd3MgdXNlciB0byBmb3JjZSBpZnJhbWUgbW9kZVxuICAgIC8vIDA2LU5PVi0wOTogbm93IGRlZmF1bHRpbmcgdG8gaWZyYW1lIG1vZGUgaWYgZmlsZSBpbnB1dCBpcyBkZXRlY3RlZFxuICAgIGlmIChvcHRpb25zLmlmcmFtZSAhPT0gZmFsc2UgJiYgKG9wdGlvbnMuaWZyYW1lIHx8IHNob3VsZFVzZUZyYW1lKSkge1xuICAgICAgICAvLyBoYWNrIHRvIGZpeCBTYWZhcmkgaGFuZyAodGhhbmtzIHRvIFRpbSBNb2xlbmRpamsgZm9yIHRoaXMpXG4gICAgICAgIC8vIHNlZTogIGh0dHA6Ly9ncm91cHMuZ29vZ2xlLmNvbS9ncm91cC9qcXVlcnktZGV2L2Jyb3dzZV90aHJlYWQvdGhyZWFkLzM2Mzk1YjdhYjUxMGRkNWRcbiAgICAgICAgaWYgKG9wdGlvbnMuY2xvc2VLZWVwQWxpdmUpIHtcbiAgICAgICAgICAgICQuZ2V0KG9wdGlvbnMuY2xvc2VLZWVwQWxpdmUsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGpxeGhyID0gZmlsZVVwbG9hZElmcmFtZShhKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAganF4aHIgPSBmaWxlVXBsb2FkSWZyYW1lKGEpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKChoYXNGaWxlSW5wdXRzIHx8IG11bHRpcGFydCkgJiYgZmlsZUFQSSkge1xuICAgICAgICBqcXhociA9IGZpbGVVcGxvYWRYaHIoYSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBqcXhociA9ICQuYWpheChvcHRpb25zKTtcbiAgICB9XG5cbiAgICAkZm9ybS5yZW1vdmVEYXRhKCdqcXhocicpLmRhdGEoJ2pxeGhyJywganF4aHIpO1xuXG4gICAgLy8gY2xlYXIgZWxlbWVudCBhcnJheVxuICAgIGZvciAodmFyIGs9MDsgayA8IGVsZW1lbnRzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIGVsZW1lbnRzW2tdID0gbnVsbDtcbiAgICB9XG5cbiAgICAvLyBmaXJlICdub3RpZnknIGV2ZW50XG4gICAgdGhpcy50cmlnZ2VyKCdmb3JtLXN1Ym1pdC1ub3RpZnknLCBbdGhpcywgb3B0aW9uc10pO1xuICAgIHJldHVybiB0aGlzO1xuXG4gICAgLy8gdXRpbGl0eSBmbiBmb3IgZGVlcCBzZXJpYWxpemF0aW9uXG4gICAgZnVuY3Rpb24gZGVlcFNlcmlhbGl6ZShleHRyYURhdGEpe1xuICAgICAgICB2YXIgc2VyaWFsaXplZCA9ICQucGFyYW0oZXh0cmFEYXRhLCBvcHRpb25zLnRyYWRpdGlvbmFsKS5zcGxpdCgnJicpO1xuICAgICAgICB2YXIgbGVuID0gc2VyaWFsaXplZC5sZW5ndGg7XG4gICAgICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICAgICAgdmFyIGksIHBhcnQ7XG4gICAgICAgIGZvciAoaT0wOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIC8vICMyNTI7IHVuZG8gcGFyYW0gc3BhY2UgcmVwbGFjZW1lbnRcbiAgICAgICAgICAgIHNlcmlhbGl6ZWRbaV0gPSBzZXJpYWxpemVkW2ldLnJlcGxhY2UoL1xcKy9nLCcgJyk7XG4gICAgICAgICAgICBwYXJ0ID0gc2VyaWFsaXplZFtpXS5zcGxpdCgnPScpO1xuICAgICAgICAgICAgLy8gIzI3ODsgdXNlIGFycmF5IGluc3RlYWQgb2Ygb2JqZWN0IHN0b3JhZ2UsIGZhdm9yaW5nIGFycmF5IHNlcmlhbGl6YXRpb25zXG4gICAgICAgICAgICByZXN1bHQucHVzaChbZGVjb2RlVVJJQ29tcG9uZW50KHBhcnRbMF0pLCBkZWNvZGVVUklDb21wb25lbnQocGFydFsxXSldKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgICAvLyBYTUxIdHRwUmVxdWVzdCBMZXZlbCAyIGZpbGUgdXBsb2FkcyAoYmlnIGhhdCB0aXAgdG8gZnJhbmNvaXMybWV0eilcbiAgICBmdW5jdGlvbiBmaWxlVXBsb2FkWGhyKGEpIHtcbiAgICAgICAgdmFyIGZvcm1kYXRhID0gbmV3IEZvcm1EYXRhKCk7XG5cbiAgICAgICAgZm9yICh2YXIgaT0wOyBpIDwgYS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZm9ybWRhdGEuYXBwZW5kKGFbaV0ubmFtZSwgYVtpXS52YWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob3B0aW9ucy5leHRyYURhdGEpIHtcbiAgICAgICAgICAgIHZhciBzZXJpYWxpemVkRGF0YSA9IGRlZXBTZXJpYWxpemUob3B0aW9ucy5leHRyYURhdGEpO1xuICAgICAgICAgICAgZm9yIChpPTA7IGkgPCBzZXJpYWxpemVkRGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChzZXJpYWxpemVkRGF0YVtpXSkge1xuICAgICAgICAgICAgICAgICAgICBmb3JtZGF0YS5hcHBlbmQoc2VyaWFsaXplZERhdGFbaV1bMF0sIHNlcmlhbGl6ZWREYXRhW2ldWzFdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBvcHRpb25zLmRhdGEgPSBudWxsO1xuXG4gICAgICAgIHZhciBzID0gJC5leHRlbmQodHJ1ZSwge30sICQuYWpheFNldHRpbmdzLCBvcHRpb25zLCB7XG4gICAgICAgICAgICBjb250ZW50VHlwZTogZmFsc2UsXG4gICAgICAgICAgICBwcm9jZXNzRGF0YTogZmFsc2UsXG4gICAgICAgICAgICBjYWNoZTogZmFsc2UsXG4gICAgICAgICAgICB0eXBlOiBtZXRob2QgfHwgJ1BPU1QnXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChvcHRpb25zLnVwbG9hZFByb2dyZXNzKSB7XG4gICAgICAgICAgICAvLyB3b3JrYXJvdW5kIGJlY2F1c2UganFYSFIgZG9lcyBub3QgZXhwb3NlIHVwbG9hZCBwcm9wZXJ0eVxuICAgICAgICAgICAgcy54aHIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB2YXIgeGhyID0gJC5hamF4U2V0dGluZ3MueGhyKCk7XG4gICAgICAgICAgICAgICAgaWYgKHhoci51cGxvYWQpIHtcbiAgICAgICAgICAgICAgICAgICAgeGhyLnVwbG9hZC5hZGRFdmVudExpc3RlbmVyKCdwcm9ncmVzcycsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcGVyY2VudCA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcG9zaXRpb24gPSBldmVudC5sb2FkZWQgfHwgZXZlbnQucG9zaXRpb247IC8qZXZlbnQucG9zaXRpb24gaXMgZGVwcmVjYXRlZCovXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdG90YWwgPSBldmVudC50b3RhbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChldmVudC5sZW5ndGhDb21wdXRhYmxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGVyY2VudCA9IE1hdGguY2VpbChwb3NpdGlvbiAvIHRvdGFsICogMTAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMudXBsb2FkUHJvZ3Jlc3MoZXZlbnQsIHBvc2l0aW9uLCB0b3RhbCwgcGVyY2VudCk7XG4gICAgICAgICAgICAgICAgICAgIH0sIGZhbHNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHhocjtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICBzLmRhdGEgPSBudWxsO1xuICAgICAgICB2YXIgYmVmb3JlU2VuZCA9IHMuYmVmb3JlU2VuZDtcbiAgICAgICAgcy5iZWZvcmVTZW5kID0gZnVuY3Rpb24oeGhyLCBvKSB7XG4gICAgICAgICAgICAvL1NlbmQgRm9ybURhdGEoKSBwcm92aWRlZCBieSB1c2VyXG4gICAgICAgICAgICBpZiAob3B0aW9ucy5mb3JtRGF0YSkge1xuICAgICAgICAgICAgICAgIG8uZGF0YSA9IG9wdGlvbnMuZm9ybURhdGE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBvLmRhdGEgPSBmb3JtZGF0YTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKGJlZm9yZVNlbmQpIHtcbiAgICAgICAgICAgICAgICBiZWZvcmVTZW5kLmNhbGwodGhpcywgeGhyLCBvKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuICQuYWpheChzKTtcbiAgICB9XG5cbiAgICAvLyBwcml2YXRlIGZ1bmN0aW9uIGZvciBoYW5kbGluZyBmaWxlIHVwbG9hZHMgKGhhdCB0aXAgdG8gWUFIT08hKVxuICAgIGZ1bmN0aW9uIGZpbGVVcGxvYWRJZnJhbWUoYSkge1xuICAgICAgICB2YXIgZm9ybSA9ICRmb3JtWzBdLCBlbCwgaSwgcywgZywgaWQsICRpbywgaW8sIHhociwgc3ViLCBuLCB0aW1lZE91dCwgdGltZW91dEhhbmRsZTtcbiAgICAgICAgdmFyIGRlZmVycmVkID0gJC5EZWZlcnJlZCgpO1xuXG4gICAgICAgIC8vICMzNDFcbiAgICAgICAgZGVmZXJyZWQuYWJvcnQgPSBmdW5jdGlvbihzdGF0dXMpIHtcbiAgICAgICAgICAgIHhoci5hYm9ydChzdGF0dXMpO1xuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChhKSB7XG4gICAgICAgICAgICAvLyBlbnN1cmUgdGhhdCBldmVyeSBzZXJpYWxpemVkIGlucHV0IGlzIHN0aWxsIGVuYWJsZWRcbiAgICAgICAgICAgIGZvciAoaT0wOyBpIDwgZWxlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBlbCA9ICQoZWxlbWVudHNbaV0pO1xuICAgICAgICAgICAgICAgIGlmICggaGFzUHJvcCApIHtcbiAgICAgICAgICAgICAgICAgICAgZWwucHJvcCgnZGlzYWJsZWQnLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBlbC5yZW1vdmVBdHRyKCdkaXNhYmxlZCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHMgPSAkLmV4dGVuZCh0cnVlLCB7fSwgJC5hamF4U2V0dGluZ3MsIG9wdGlvbnMpO1xuICAgICAgICBzLmNvbnRleHQgPSBzLmNvbnRleHQgfHwgcztcbiAgICAgICAgaWQgPSAnanFGb3JtSU8nICsgKG5ldyBEYXRlKCkuZ2V0VGltZSgpKTtcbiAgICAgICAgaWYgKHMuaWZyYW1lVGFyZ2V0KSB7XG4gICAgICAgICAgICAkaW8gPSAkKHMuaWZyYW1lVGFyZ2V0KTtcbiAgICAgICAgICAgIG4gPSAkaW8uYXR0cjIoJ25hbWUnKTtcbiAgICAgICAgICAgIGlmICghbikge1xuICAgICAgICAgICAgICAgICRpby5hdHRyMignbmFtZScsIGlkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlkID0gbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICRpbyA9ICQoJzxpZnJhbWUgbmFtZT1cIicgKyBpZCArICdcIiBzcmM9XCInKyBzLmlmcmFtZVNyYyArJ1wiIC8+Jyk7XG4gICAgICAgICAgICAkaW8uY3NzKHsgcG9zaXRpb246ICdhYnNvbHV0ZScsIHRvcDogJy0xMDAwcHgnLCBsZWZ0OiAnLTEwMDBweCcgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaW8gPSAkaW9bMF07XG5cblxuICAgICAgICB4aHIgPSB7IC8vIG1vY2sgb2JqZWN0XG4gICAgICAgICAgICBhYm9ydGVkOiAwLFxuICAgICAgICAgICAgcmVzcG9uc2VUZXh0OiBudWxsLFxuICAgICAgICAgICAgcmVzcG9uc2VYTUw6IG51bGwsXG4gICAgICAgICAgICBzdGF0dXM6IDAsXG4gICAgICAgICAgICBzdGF0dXNUZXh0OiAnbi9hJyxcbiAgICAgICAgICAgIGdldEFsbFJlc3BvbnNlSGVhZGVyczogZnVuY3Rpb24oKSB7fSxcbiAgICAgICAgICAgIGdldFJlc3BvbnNlSGVhZGVyOiBmdW5jdGlvbigpIHt9LFxuICAgICAgICAgICAgc2V0UmVxdWVzdEhlYWRlcjogZnVuY3Rpb24oKSB7fSxcbiAgICAgICAgICAgIGFib3J0OiBmdW5jdGlvbihzdGF0dXMpIHtcbiAgICAgICAgICAgICAgICB2YXIgZSA9IChzdGF0dXMgPT09ICd0aW1lb3V0JyA/ICd0aW1lb3V0JyA6ICdhYm9ydGVkJyk7XG4gICAgICAgICAgICAgICAgbG9nKCdhYm9ydGluZyB1cGxvYWQuLi4gJyArIGUpO1xuICAgICAgICAgICAgICAgIHRoaXMuYWJvcnRlZCA9IDE7XG5cbiAgICAgICAgICAgICAgICB0cnkgeyAvLyAjMjE0LCAjMjU3XG4gICAgICAgICAgICAgICAgICAgIGlmIChpby5jb250ZW50V2luZG93LmRvY3VtZW50LmV4ZWNDb21tYW5kKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpby5jb250ZW50V2luZG93LmRvY3VtZW50LmV4ZWNDb21tYW5kKCdTdG9wJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2goaWdub3JlKSB7fVxuXG4gICAgICAgICAgICAgICAgJGlvLmF0dHIoJ3NyYycsIHMuaWZyYW1lU3JjKTsgLy8gYWJvcnQgb3AgaW4gcHJvZ3Jlc3NcbiAgICAgICAgICAgICAgICB4aHIuZXJyb3IgPSBlO1xuICAgICAgICAgICAgICAgIGlmIChzLmVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHMuZXJyb3IuY2FsbChzLmNvbnRleHQsIHhociwgZSwgc3RhdHVzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGcpIHtcbiAgICAgICAgICAgICAgICAgICAgJC5ldmVudC50cmlnZ2VyKFwiYWpheEVycm9yXCIsIFt4aHIsIHMsIGVdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHMuY29tcGxldGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcy5jb21wbGV0ZS5jYWxsKHMuY29udGV4dCwgeGhyLCBlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgZyA9IHMuZ2xvYmFsO1xuICAgICAgICAvLyB0cmlnZ2VyIGFqYXggZ2xvYmFsIGV2ZW50cyBzbyB0aGF0IGFjdGl2aXR5L2Jsb2NrIGluZGljYXRvcnMgd29yayBsaWtlIG5vcm1hbFxuICAgICAgICBpZiAoZyAmJiAwID09PSAkLmFjdGl2ZSsrKSB7XG4gICAgICAgICAgICAkLmV2ZW50LnRyaWdnZXIoXCJhamF4U3RhcnRcIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGcpIHtcbiAgICAgICAgICAgICQuZXZlbnQudHJpZ2dlcihcImFqYXhTZW5kXCIsIFt4aHIsIHNdKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzLmJlZm9yZVNlbmQgJiYgcy5iZWZvcmVTZW5kLmNhbGwocy5jb250ZXh0LCB4aHIsIHMpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgaWYgKHMuZ2xvYmFsKSB7XG4gICAgICAgICAgICAgICAgJC5hY3RpdmUtLTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdCgpO1xuICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkO1xuICAgICAgICB9XG4gICAgICAgIGlmICh4aHIuYWJvcnRlZCkge1xuICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KCk7XG4gICAgICAgICAgICByZXR1cm4gZGVmZXJyZWQ7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBhZGQgc3VibWl0dGluZyBlbGVtZW50IHRvIGRhdGEgaWYgd2Uga25vdyBpdFxuICAgICAgICBzdWIgPSBmb3JtLmNsaztcbiAgICAgICAgaWYgKHN1Yikge1xuICAgICAgICAgICAgbiA9IHN1Yi5uYW1lO1xuICAgICAgICAgICAgaWYgKG4gJiYgIXN1Yi5kaXNhYmxlZCkge1xuICAgICAgICAgICAgICAgIHMuZXh0cmFEYXRhID0gcy5leHRyYURhdGEgfHwge307XG4gICAgICAgICAgICAgICAgcy5leHRyYURhdGFbbl0gPSBzdWIudmFsdWU7XG4gICAgICAgICAgICAgICAgaWYgKHN1Yi50eXBlID09IFwiaW1hZ2VcIikge1xuICAgICAgICAgICAgICAgICAgICBzLmV4dHJhRGF0YVtuKycueCddID0gZm9ybS5jbGtfeDtcbiAgICAgICAgICAgICAgICAgICAgcy5leHRyYURhdGFbbisnLnknXSA9IGZvcm0uY2xrX3k7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdmFyIENMSUVOVF9USU1FT1VUX0FCT1JUID0gMTtcbiAgICAgICAgdmFyIFNFUlZFUl9BQk9SVCA9IDI7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgIGZ1bmN0aW9uIGdldERvYyhmcmFtZSkge1xuICAgICAgICAgICAgLyogaXQgbG9va3MgbGlrZSBjb250ZW50V2luZG93IG9yIGNvbnRlbnREb2N1bWVudCBkbyBub3RcbiAgICAgICAgICAgICAqIGNhcnJ5IHRoZSBwcm90b2NvbCBwcm9wZXJ0eSBpbiBpZTgsIHdoZW4gcnVubmluZyB1bmRlciBzc2xcbiAgICAgICAgICAgICAqIGZyYW1lLmRvY3VtZW50IGlzIHRoZSBvbmx5IHZhbGlkIHJlc3BvbnNlIGRvY3VtZW50LCBzaW5jZVxuICAgICAgICAgICAgICogdGhlIHByb3RvY29sIGlzIGtub3cgYnV0IG5vdCBvbiB0aGUgb3RoZXIgdHdvIG9iamVjdHMuIHN0cmFuZ2U/XG4gICAgICAgICAgICAgKiBcIlNhbWUgb3JpZ2luIHBvbGljeVwiIGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvU2FtZV9vcmlnaW5fcG9saWN5XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdmFyIGRvYyA9IG51bGw7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIElFOCBjYXNjYWRpbmcgYWNjZXNzIGNoZWNrXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGlmIChmcmFtZS5jb250ZW50V2luZG93KSB7XG4gICAgICAgICAgICAgICAgICAgIGRvYyA9IGZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaChlcnIpIHtcbiAgICAgICAgICAgICAgICAvLyBJRTggYWNjZXNzIGRlbmllZCB1bmRlciBzc2wgJiBtaXNzaW5nIHByb3RvY29sXG4gICAgICAgICAgICAgICAgbG9nKCdjYW5ub3QgZ2V0IGlmcmFtZS5jb250ZW50V2luZG93IGRvY3VtZW50OiAnICsgZXJyKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGRvYykgeyAvLyBzdWNjZXNzZnVsIGdldHRpbmcgY29udGVudFxuICAgICAgICAgICAgICAgIHJldHVybiBkb2M7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRyeSB7IC8vIHNpbXBseSBjaGVja2luZyBtYXkgdGhyb3cgaW4gaWU4IHVuZGVyIHNzbCBvciBtaXNtYXRjaGVkIHByb3RvY29sXG4gICAgICAgICAgICAgICAgZG9jID0gZnJhbWUuY29udGVudERvY3VtZW50ID8gZnJhbWUuY29udGVudERvY3VtZW50IDogZnJhbWUuZG9jdW1lbnQ7XG4gICAgICAgICAgICB9IGNhdGNoKGVycikge1xuICAgICAgICAgICAgICAgIC8vIGxhc3QgYXR0ZW1wdFxuICAgICAgICAgICAgICAgIGxvZygnY2Fubm90IGdldCBpZnJhbWUuY29udGVudERvY3VtZW50OiAnICsgZXJyKTtcbiAgICAgICAgICAgICAgICBkb2MgPSBmcmFtZS5kb2N1bWVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBkb2M7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSYWlscyBDU1JGIGhhY2sgKHRoYW5rcyB0byBZdmFuIEJhcnRoZWxlbXkpXG4gICAgICAgIHZhciBjc3JmX3Rva2VuID0gJCgnbWV0YVtuYW1lPWNzcmYtdG9rZW5dJykuYXR0cignY29udGVudCcpO1xuICAgICAgICB2YXIgY3NyZl9wYXJhbSA9ICQoJ21ldGFbbmFtZT1jc3JmLXBhcmFtXScpLmF0dHIoJ2NvbnRlbnQnKTtcbiAgICAgICAgaWYgKGNzcmZfcGFyYW0gJiYgY3NyZl90b2tlbikge1xuICAgICAgICAgICAgcy5leHRyYURhdGEgPSBzLmV4dHJhRGF0YSB8fCB7fTtcbiAgICAgICAgICAgIHMuZXh0cmFEYXRhW2NzcmZfcGFyYW1dID0gY3NyZl90b2tlbjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHRha2UgYSBicmVhdGggc28gdGhhdCBwZW5kaW5nIHJlcGFpbnRzIGdldCBzb21lIGNwdSB0aW1lIGJlZm9yZSB0aGUgdXBsb2FkIHN0YXJ0c1xuICAgICAgICBmdW5jdGlvbiBkb1N1Ym1pdCgpIHtcbiAgICAgICAgICAgIC8vIG1ha2Ugc3VyZSBmb3JtIGF0dHJzIGFyZSBzZXRcbiAgICAgICAgICAgIHZhciB0ID0gJGZvcm0uYXR0cjIoJ3RhcmdldCcpLCBcbiAgICAgICAgICAgICAgICBhID0gJGZvcm0uYXR0cjIoJ2FjdGlvbicpLCBcbiAgICAgICAgICAgICAgICBtcCA9ICdtdWx0aXBhcnQvZm9ybS1kYXRhJyxcbiAgICAgICAgICAgICAgICBldCA9ICRmb3JtLmF0dHIoJ2VuY3R5cGUnKSB8fCAkZm9ybS5hdHRyKCdlbmNvZGluZycpIHx8IG1wO1xuXG4gICAgICAgICAgICAvLyB1cGRhdGUgZm9ybSBhdHRycyBpbiBJRSBmcmllbmRseSB3YXlcbiAgICAgICAgICAgIGZvcm0uc2V0QXR0cmlidXRlKCd0YXJnZXQnLGlkKTtcbiAgICAgICAgICAgIGlmICghbWV0aG9kIHx8IC9wb3N0L2kudGVzdChtZXRob2QpICkge1xuICAgICAgICAgICAgICAgIGZvcm0uc2V0QXR0cmlidXRlKCdtZXRob2QnLCAnUE9TVCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGEgIT0gcy51cmwpIHtcbiAgICAgICAgICAgICAgICBmb3JtLnNldEF0dHJpYnV0ZSgnYWN0aW9uJywgcy51cmwpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBpZSBib3JrcyBpbiBzb21lIGNhc2VzIHdoZW4gc2V0dGluZyBlbmNvZGluZ1xuICAgICAgICAgICAgaWYgKCEgcy5za2lwRW5jb2RpbmdPdmVycmlkZSAmJiAoIW1ldGhvZCB8fCAvcG9zdC9pLnRlc3QobWV0aG9kKSkpIHtcbiAgICAgICAgICAgICAgICAkZm9ybS5hdHRyKHtcbiAgICAgICAgICAgICAgICAgICAgZW5jb2Rpbmc6ICdtdWx0aXBhcnQvZm9ybS1kYXRhJyxcbiAgICAgICAgICAgICAgICAgICAgZW5jdHlwZTogICdtdWx0aXBhcnQvZm9ybS1kYXRhJ1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBzdXBwb3J0IHRpbW91dFxuICAgICAgICAgICAgaWYgKHMudGltZW91dCkge1xuICAgICAgICAgICAgICAgIHRpbWVvdXRIYW5kbGUgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkgeyB0aW1lZE91dCA9IHRydWU7IGNiKENMSUVOVF9USU1FT1VUX0FCT1JUKTsgfSwgcy50aW1lb3V0KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gbG9vayBmb3Igc2VydmVyIGFib3J0c1xuICAgICAgICAgICAgZnVuY3Rpb24gY2hlY2tTdGF0ZSgpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgc3RhdGUgPSBnZXREb2MoaW8pLnJlYWR5U3RhdGU7XG4gICAgICAgICAgICAgICAgICAgIGxvZygnc3RhdGUgPSAnICsgc3RhdGUpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3RhdGUgJiYgc3RhdGUudG9Mb3dlckNhc2UoKSA9PSAndW5pbml0aWFsaXplZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoY2hlY2tTdGF0ZSw1MCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2goZSkge1xuICAgICAgICAgICAgICAgICAgICBsb2coJ1NlcnZlciBhYm9ydDogJyAsIGUsICcgKCcsIGUubmFtZSwgJyknKTtcbiAgICAgICAgICAgICAgICAgICAgY2IoU0VSVkVSX0FCT1JUKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRpbWVvdXRIYW5kbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0SGFuZGxlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aW1lb3V0SGFuZGxlID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gYWRkIFwiZXh0cmFcIiBkYXRhIHRvIGZvcm0gaWYgcHJvdmlkZWQgaW4gb3B0aW9uc1xuICAgICAgICAgICAgdmFyIGV4dHJhSW5wdXRzID0gW107XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGlmIChzLmV4dHJhRGF0YSkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBuIGluIHMuZXh0cmFEYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocy5leHRyYURhdGEuaGFzT3duUHJvcGVydHkobikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmIHVzaW5nIHRoZSAkLnBhcmFtIGZvcm1hdCB0aGF0IGFsbG93cyBmb3IgbXVsdGlwbGUgdmFsdWVzIHdpdGggdGhlIHNhbWUgbmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoJC5pc1BsYWluT2JqZWN0KHMuZXh0cmFEYXRhW25dKSAmJiBzLmV4dHJhRGF0YVtuXS5oYXNPd25Qcm9wZXJ0eSgnbmFtZScpICYmIHMuZXh0cmFEYXRhW25dLmhhc093blByb3BlcnR5KCd2YWx1ZScpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXh0cmFJbnB1dHMucHVzaChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCc8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCInK3MuZXh0cmFEYXRhW25dLm5hbWUrJ1wiPicpLnZhbChzLmV4dHJhRGF0YVtuXS52YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFwcGVuZFRvKGZvcm0pWzBdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXh0cmFJbnB1dHMucHVzaChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCc8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCInK24rJ1wiPicpLnZhbChzLmV4dHJhRGF0YVtuXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFwcGVuZFRvKGZvcm0pWzBdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICghcy5pZnJhbWVUYXJnZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gYWRkIGlmcmFtZSB0byBkb2MgYW5kIHN1Ym1pdCB0aGUgZm9ybVxuICAgICAgICAgICAgICAgICAgICAkaW8uYXBwZW5kVG8oJ2JvZHknKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGlvLmF0dGFjaEV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGlvLmF0dGFjaEV2ZW50KCdvbmxvYWQnLCBjYik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpby5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgY2IsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChjaGVja1N0YXRlLDE1KTtcblxuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGZvcm0uc3VibWl0KCk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8ganVzdCBpbiBjYXNlIGZvcm0gaGFzIGVsZW1lbnQgd2l0aCBuYW1lL2lkIG9mICdzdWJtaXQnXG4gICAgICAgICAgICAgICAgICAgIHZhciBzdWJtaXRGbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKS5zdWJtaXQ7XG4gICAgICAgICAgICAgICAgICAgIHN1Ym1pdEZuLmFwcGx5KGZvcm0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgICAgIC8vIHJlc2V0IGF0dHJzIGFuZCByZW1vdmUgXCJleHRyYVwiIGlucHV0IGVsZW1lbnRzXG4gICAgICAgICAgICAgICAgZm9ybS5zZXRBdHRyaWJ1dGUoJ2FjdGlvbicsYSk7XG4gICAgICAgICAgICAgICAgZm9ybS5zZXRBdHRyaWJ1dGUoJ2VuY3R5cGUnLCBldCk7IC8vICMzODBcbiAgICAgICAgICAgICAgICBpZih0KSB7XG4gICAgICAgICAgICAgICAgICAgIGZvcm0uc2V0QXR0cmlidXRlKCd0YXJnZXQnLCB0KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAkZm9ybS5yZW1vdmVBdHRyKCd0YXJnZXQnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgJChleHRyYUlucHV0cykucmVtb3ZlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocy5mb3JjZVN5bmMpIHtcbiAgICAgICAgICAgIGRvU3VibWl0KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGRvU3VibWl0LCAxMCk7IC8vIHRoaXMgbGV0cyBkb20gdXBkYXRlcyByZW5kZXJcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBkYXRhLCBkb2MsIGRvbUNoZWNrQ291bnQgPSA1MCwgY2FsbGJhY2tQcm9jZXNzZWQ7XG5cbiAgICAgICAgZnVuY3Rpb24gY2IoZSkge1xuICAgICAgICAgICAgaWYgKHhoci5hYm9ydGVkIHx8IGNhbGxiYWNrUHJvY2Vzc2VkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBkb2MgPSBnZXREb2MoaW8pO1xuICAgICAgICAgICAgaWYoIWRvYykge1xuICAgICAgICAgICAgICAgIGxvZygnY2Fubm90IGFjY2VzcyByZXNwb25zZSBkb2N1bWVudCcpO1xuICAgICAgICAgICAgICAgIGUgPSBTRVJWRVJfQUJPUlQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZSA9PT0gQ0xJRU5UX1RJTUVPVVRfQUJPUlQgJiYgeGhyKSB7XG4gICAgICAgICAgICAgICAgeGhyLmFib3J0KCd0aW1lb3V0Jyk7XG4gICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KHhociwgJ3RpbWVvdXQnKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChlID09IFNFUlZFUl9BQk9SVCAmJiB4aHIpIHtcbiAgICAgICAgICAgICAgICB4aHIuYWJvcnQoJ3NlcnZlciBhYm9ydCcpO1xuICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdCh4aHIsICdlcnJvcicsICdzZXJ2ZXIgYWJvcnQnKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghZG9jIHx8IGRvYy5sb2NhdGlvbi5ocmVmID09IHMuaWZyYW1lU3JjKSB7XG4gICAgICAgICAgICAgICAgLy8gcmVzcG9uc2Ugbm90IHJlY2VpdmVkIHlldFxuICAgICAgICAgICAgICAgIGlmICghdGltZWRPdXQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpby5kZXRhY2hFdmVudCkge1xuICAgICAgICAgICAgICAgIGlvLmRldGFjaEV2ZW50KCdvbmxvYWQnLCBjYik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpby5yZW1vdmVFdmVudExpc3RlbmVyKCdsb2FkJywgY2IsIGZhbHNlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIHN0YXR1cyA9ICdzdWNjZXNzJywgZXJyTXNnO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBpZiAodGltZWRPdXQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgJ3RpbWVvdXQnO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHZhciBpc1htbCA9IHMuZGF0YVR5cGUgPT0gJ3htbCcgfHwgZG9jLlhNTERvY3VtZW50IHx8ICQuaXNYTUxEb2MoZG9jKTtcbiAgICAgICAgICAgICAgICBsb2coJ2lzWG1sPScraXNYbWwpO1xuICAgICAgICAgICAgICAgIGlmICghaXNYbWwgJiYgd2luZG93Lm9wZXJhICYmIChkb2MuYm9keSA9PT0gbnVsbCB8fCAhZG9jLmJvZHkuaW5uZXJIVE1MKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoLS1kb21DaGVja0NvdW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBpbiBzb21lIGJyb3dzZXJzIChPcGVyYSkgdGhlIGlmcmFtZSBET00gaXMgbm90IGFsd2F5cyB0cmF2ZXJzYWJsZSB3aGVuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGUgb25sb2FkIGNhbGxiYWNrIGZpcmVzLCBzbyB3ZSBsb29wIGEgYml0IHRvIGFjY29tbW9kYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2coJ3JlcXVlaW5nIG9uTG9hZCBjYWxsYmFjaywgRE9NIG5vdCBhdmFpbGFibGUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoY2IsIDI1MCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gbGV0IHRoaXMgZmFsbCB0aHJvdWdoIGJlY2F1c2Ugc2VydmVyIHJlc3BvbnNlIGNvdWxkIGJlIGFuIGVtcHR5IGRvY3VtZW50XG4gICAgICAgICAgICAgICAgICAgIC8vbG9nKCdDb3VsZCBub3QgYWNjZXNzIGlmcmFtZSBET00gYWZ0ZXIgbXV0aXBsZSB0cmllcy4nKTtcbiAgICAgICAgICAgICAgICAgICAgLy90aHJvdyAnRE9NRXhjZXB0aW9uOiBub3QgYXZhaWxhYmxlJztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvL2xvZygncmVzcG9uc2UgZGV0ZWN0ZWQnKTtcbiAgICAgICAgICAgICAgICB2YXIgZG9jUm9vdCA9IGRvYy5ib2R5ID8gZG9jLmJvZHkgOiBkb2MuZG9jdW1lbnRFbGVtZW50O1xuICAgICAgICAgICAgICAgIHhoci5yZXNwb25zZVRleHQgPSBkb2NSb290ID8gZG9jUm9vdC5pbm5lckhUTUwgOiBudWxsO1xuICAgICAgICAgICAgICAgIHhoci5yZXNwb25zZVhNTCA9IGRvYy5YTUxEb2N1bWVudCA/IGRvYy5YTUxEb2N1bWVudCA6IGRvYztcbiAgICAgICAgICAgICAgICBpZiAoaXNYbWwpIHtcbiAgICAgICAgICAgICAgICAgICAgcy5kYXRhVHlwZSA9ICd4bWwnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB4aHIuZ2V0UmVzcG9uc2VIZWFkZXIgPSBmdW5jdGlvbihoZWFkZXIpe1xuICAgICAgICAgICAgICAgICAgICB2YXIgaGVhZGVycyA9IHsnY29udGVudC10eXBlJzogcy5kYXRhVHlwZX07XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBoZWFkZXJzW2hlYWRlci50b0xvd2VyQ2FzZSgpXTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIC8vIHN1cHBvcnQgZm9yIFhIUiAnc3RhdHVzJyAmICdzdGF0dXNUZXh0JyBlbXVsYXRpb24gOlxuICAgICAgICAgICAgICAgIGlmIChkb2NSb290KSB7XG4gICAgICAgICAgICAgICAgICAgIHhoci5zdGF0dXMgPSBOdW1iZXIoIGRvY1Jvb3QuZ2V0QXR0cmlidXRlKCdzdGF0dXMnKSApIHx8IHhoci5zdGF0dXM7XG4gICAgICAgICAgICAgICAgICAgIHhoci5zdGF0dXNUZXh0ID0gZG9jUm9vdC5nZXRBdHRyaWJ1dGUoJ3N0YXR1c1RleHQnKSB8fCB4aHIuc3RhdHVzVGV4dDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB2YXIgZHQgPSAocy5kYXRhVHlwZSB8fCAnJykudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgICAgICB2YXIgc2NyID0gLyhqc29ufHNjcmlwdHx0ZXh0KS8udGVzdChkdCk7XG4gICAgICAgICAgICAgICAgaWYgKHNjciB8fCBzLnRleHRhcmVhKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHNlZSBpZiB1c2VyIGVtYmVkZGVkIHJlc3BvbnNlIGluIHRleHRhcmVhXG4gICAgICAgICAgICAgICAgICAgIHZhciB0YSA9IGRvYy5nZXRFbGVtZW50c0J5VGFnTmFtZSgndGV4dGFyZWEnKVswXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB4aHIucmVzcG9uc2VUZXh0ID0gdGEudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBzdXBwb3J0IGZvciBYSFIgJ3N0YXR1cycgJiAnc3RhdHVzVGV4dCcgZW11bGF0aW9uIDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHhoci5zdGF0dXMgPSBOdW1iZXIoIHRhLmdldEF0dHJpYnV0ZSgnc3RhdHVzJykgKSB8fCB4aHIuc3RhdHVzO1xuICAgICAgICAgICAgICAgICAgICAgICAgeGhyLnN0YXR1c1RleHQgPSB0YS5nZXRBdHRyaWJ1dGUoJ3N0YXR1c1RleHQnKSB8fCB4aHIuc3RhdHVzVGV4dDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChzY3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFjY291bnQgZm9yIGJyb3dzZXJzIGluamVjdGluZyBwcmUgYXJvdW5kIGpzb24gcmVzcG9uc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwcmUgPSBkb2MuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3ByZScpWzBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGIgPSBkb2MuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKVswXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4aHIucmVzcG9uc2VUZXh0ID0gcHJlLnRleHRDb250ZW50ID8gcHJlLnRleHRDb250ZW50IDogcHJlLmlubmVyVGV4dDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4aHIucmVzcG9uc2VUZXh0ID0gYi50ZXh0Q29udGVudCA/IGIudGV4dENvbnRlbnQgOiBiLmlubmVyVGV4dDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChkdCA9PSAneG1sJyAmJiAheGhyLnJlc3BvbnNlWE1MICYmIHhoci5yZXNwb25zZVRleHQpIHtcbiAgICAgICAgICAgICAgICAgICAgeGhyLnJlc3BvbnNlWE1MID0gdG9YbWwoeGhyLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YSA9IGh0dHBEYXRhKHhociwgZHQsIHMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cyA9ICdwYXJzZXJlcnJvcic7XG4gICAgICAgICAgICAgICAgICAgIHhoci5lcnJvciA9IGVyck1zZyA9IChlcnIgfHwgc3RhdHVzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgbG9nKCdlcnJvciBjYXVnaHQ6ICcsZXJyKTtcbiAgICAgICAgICAgICAgICBzdGF0dXMgPSAnZXJyb3InO1xuICAgICAgICAgICAgICAgIHhoci5lcnJvciA9IGVyck1zZyA9IChlcnIgfHwgc3RhdHVzKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHhoci5hYm9ydGVkKSB7XG4gICAgICAgICAgICAgICAgbG9nKCd1cGxvYWQgYWJvcnRlZCcpO1xuICAgICAgICAgICAgICAgIHN0YXR1cyA9IG51bGw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh4aHIuc3RhdHVzKSB7IC8vIHdlJ3ZlIHNldCB4aHIuc3RhdHVzXG4gICAgICAgICAgICAgICAgc3RhdHVzID0gKHhoci5zdGF0dXMgPj0gMjAwICYmIHhoci5zdGF0dXMgPCAzMDAgfHwgeGhyLnN0YXR1cyA9PT0gMzA0KSA/ICdzdWNjZXNzJyA6ICdlcnJvcic7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIG9yZGVyaW5nIG9mIHRoZXNlIGNhbGxiYWNrcy90cmlnZ2VycyBpcyBvZGQsIGJ1dCB0aGF0J3MgaG93ICQuYWpheCBkb2VzIGl0XG4gICAgICAgICAgICBpZiAoc3RhdHVzID09PSAnc3VjY2VzcycpIHtcbiAgICAgICAgICAgICAgICBpZiAocy5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgIHMuc3VjY2Vzcy5jYWxsKHMuY29udGV4dCwgZGF0YSwgJ3N1Y2Nlc3MnLCB4aHIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKHhoci5yZXNwb25zZVRleHQsICdzdWNjZXNzJywgeGhyKTtcbiAgICAgICAgICAgICAgICBpZiAoZykge1xuICAgICAgICAgICAgICAgICAgICAkLmV2ZW50LnRyaWdnZXIoXCJhamF4U3VjY2Vzc1wiLCBbeGhyLCBzXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoc3RhdHVzKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVyck1zZyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGVyck1zZyA9IHhoci5zdGF0dXNUZXh0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAocy5lcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBzLmVycm9yLmNhbGwocy5jb250ZXh0LCB4aHIsIHN0YXR1cywgZXJyTXNnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KHhociwgJ2Vycm9yJywgZXJyTXNnKTtcbiAgICAgICAgICAgICAgICBpZiAoZykge1xuICAgICAgICAgICAgICAgICAgICAkLmV2ZW50LnRyaWdnZXIoXCJhamF4RXJyb3JcIiwgW3hociwgcywgZXJyTXNnXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZykge1xuICAgICAgICAgICAgICAgICQuZXZlbnQudHJpZ2dlcihcImFqYXhDb21wbGV0ZVwiLCBbeGhyLCBzXSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChnICYmICEgLS0kLmFjdGl2ZSkge1xuICAgICAgICAgICAgICAgICQuZXZlbnQudHJpZ2dlcihcImFqYXhTdG9wXCIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAocy5jb21wbGV0ZSkge1xuICAgICAgICAgICAgICAgIHMuY29tcGxldGUuY2FsbChzLmNvbnRleHQsIHhociwgc3RhdHVzKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY2FsbGJhY2tQcm9jZXNzZWQgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKHMudGltZW91dCkge1xuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0SGFuZGxlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gY2xlYW4gdXBcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFzLmlmcmFtZVRhcmdldCkge1xuICAgICAgICAgICAgICAgICAgICAkaW8ucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgeyAvL2FkZGluZyBlbHNlIHRvIGNsZWFuIHVwIGV4aXN0aW5nIGlmcmFtZSByZXNwb25zZS5cbiAgICAgICAgICAgICAgICAgICAgJGlvLmF0dHIoJ3NyYycsIHMuaWZyYW1lU3JjKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgeGhyLnJlc3BvbnNlWE1MID0gbnVsbDtcbiAgICAgICAgICAgIH0sIDEwMCk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgdG9YbWwgPSAkLnBhcnNlWE1MIHx8IGZ1bmN0aW9uKHMsIGRvYykgeyAvLyB1c2UgcGFyc2VYTUwgaWYgYXZhaWxhYmxlIChqUXVlcnkgMS41KylcbiAgICAgICAgICAgIGlmICh3aW5kb3cuQWN0aXZlWE9iamVjdCkge1xuICAgICAgICAgICAgICAgIGRvYyA9IG5ldyBBY3RpdmVYT2JqZWN0KCdNaWNyb3NvZnQuWE1MRE9NJyk7XG4gICAgICAgICAgICAgICAgZG9jLmFzeW5jID0gJ2ZhbHNlJztcbiAgICAgICAgICAgICAgICBkb2MubG9hZFhNTChzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGRvYyA9IChuZXcgRE9NUGFyc2VyKCkpLnBhcnNlRnJvbVN0cmluZyhzLCAndGV4dC94bWwnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAoZG9jICYmIGRvYy5kb2N1bWVudEVsZW1lbnQgJiYgZG9jLmRvY3VtZW50RWxlbWVudC5ub2RlTmFtZSAhPSAncGFyc2VyZXJyb3InKSA/IGRvYyA6IG51bGw7XG4gICAgICAgIH07XG4gICAgICAgIHZhciBwYXJzZUpTT04gPSAkLnBhcnNlSlNPTiB8fCBmdW5jdGlvbihzKSB7XG4gICAgICAgICAgICAvKmpzbGludCBldmlsOnRydWUgKi9cbiAgICAgICAgICAgIHJldHVybiB3aW5kb3dbJ2V2YWwnXSgnKCcgKyBzICsgJyknKTtcbiAgICAgICAgfTtcblxuICAgICAgICB2YXIgaHR0cERhdGEgPSBmdW5jdGlvbiggeGhyLCB0eXBlLCBzICkgeyAvLyBtb3N0bHkgbGlmdGVkIGZyb20ganExLjQuNFxuXG4gICAgICAgICAgICB2YXIgY3QgPSB4aHIuZ2V0UmVzcG9uc2VIZWFkZXIoJ2NvbnRlbnQtdHlwZScpIHx8ICcnLFxuICAgICAgICAgICAgICAgIHhtbCA9IHR5cGUgPT09ICd4bWwnIHx8ICF0eXBlICYmIGN0LmluZGV4T2YoJ3htbCcpID49IDAsXG4gICAgICAgICAgICAgICAgZGF0YSA9IHhtbCA/IHhoci5yZXNwb25zZVhNTCA6IHhoci5yZXNwb25zZVRleHQ7XG5cbiAgICAgICAgICAgIGlmICh4bWwgJiYgZGF0YS5kb2N1bWVudEVsZW1lbnQubm9kZU5hbWUgPT09ICdwYXJzZXJlcnJvcicpIHtcbiAgICAgICAgICAgICAgICBpZiAoJC5lcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAkLmVycm9yKCdwYXJzZXJlcnJvcicpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzICYmIHMuZGF0YUZpbHRlcikge1xuICAgICAgICAgICAgICAgIGRhdGEgPSBzLmRhdGFGaWx0ZXIoZGF0YSwgdHlwZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIGRhdGEgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdqc29uJyB8fCAhdHlwZSAmJiBjdC5pbmRleE9mKCdqc29uJykgPj0gMCkge1xuICAgICAgICAgICAgICAgICAgICBkYXRhID0gcGFyc2VKU09OKGRhdGEpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJzY3JpcHRcIiB8fCAhdHlwZSAmJiBjdC5pbmRleE9mKFwiamF2YXNjcmlwdFwiKSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICQuZ2xvYmFsRXZhbChkYXRhKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gZGVmZXJyZWQ7XG4gICAgfVxufTtcblxuLyoqXG4gKiBhamF4Rm9ybSgpIHByb3ZpZGVzIGEgbWVjaGFuaXNtIGZvciBmdWxseSBhdXRvbWF0aW5nIGZvcm0gc3VibWlzc2lvbi5cbiAqXG4gKiBUaGUgYWR2YW50YWdlcyBvZiB1c2luZyB0aGlzIG1ldGhvZCBpbnN0ZWFkIG9mIGFqYXhTdWJtaXQoKSBhcmU6XG4gKlxuICogMTogVGhpcyBtZXRob2Qgd2lsbCBpbmNsdWRlIGNvb3JkaW5hdGVzIGZvciA8aW5wdXQgdHlwZT1cImltYWdlXCIgLz4gZWxlbWVudHMgKGlmIHRoZSBlbGVtZW50XG4gKiAgICBpcyB1c2VkIHRvIHN1Ym1pdCB0aGUgZm9ybSkuXG4gKiAyLiBUaGlzIG1ldGhvZCB3aWxsIGluY2x1ZGUgdGhlIHN1Ym1pdCBlbGVtZW50J3MgbmFtZS92YWx1ZSBkYXRhIChmb3IgdGhlIGVsZW1lbnQgdGhhdCB3YXNcbiAqICAgIHVzZWQgdG8gc3VibWl0IHRoZSBmb3JtKS5cbiAqIDMuIFRoaXMgbWV0aG9kIGJpbmRzIHRoZSBzdWJtaXQoKSBtZXRob2QgdG8gdGhlIGZvcm0gZm9yIHlvdS5cbiAqXG4gKiBUaGUgb3B0aW9ucyBhcmd1bWVudCBmb3IgYWpheEZvcm0gd29ya3MgZXhhY3RseSBhcyBpdCBkb2VzIGZvciBhamF4U3VibWl0LiAgYWpheEZvcm0gbWVyZWx5XG4gKiBwYXNzZXMgdGhlIG9wdGlvbnMgYXJndW1lbnQgYWxvbmcgYWZ0ZXIgcHJvcGVybHkgYmluZGluZyBldmVudHMgZm9yIHN1Ym1pdCBlbGVtZW50cyBhbmRcbiAqIHRoZSBmb3JtIGl0c2VsZi5cbiAqL1xuJC5mbi5hamF4Rm9ybSA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICBvcHRpb25zLmRlbGVnYXRpb24gPSBvcHRpb25zLmRlbGVnYXRpb24gJiYgJC5pc0Z1bmN0aW9uKCQuZm4ub24pO1xuXG4gICAgLy8gaW4galF1ZXJ5IDEuMysgd2UgY2FuIGZpeCBtaXN0YWtlcyB3aXRoIHRoZSByZWFkeSBzdGF0ZVxuICAgIGlmICghb3B0aW9ucy5kZWxlZ2F0aW9uICYmIHRoaXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHZhciBvID0geyBzOiB0aGlzLnNlbGVjdG9yLCBjOiB0aGlzLmNvbnRleHQgfTtcbiAgICAgICAgaWYgKCEkLmlzUmVhZHkgJiYgby5zKSB7XG4gICAgICAgICAgICBsb2coJ0RPTSBub3QgcmVhZHksIHF1ZXVpbmcgYWpheEZvcm0nKTtcbiAgICAgICAgICAgICQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgJChvLnMsby5jKS5hamF4Rm9ybShvcHRpb25zKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICAgICAgLy8gaXMgeW91ciBET00gcmVhZHk/ICBodHRwOi8vZG9jcy5qcXVlcnkuY29tL1R1dG9yaWFsczpJbnRyb2R1Y2luZ18kKGRvY3VtZW50KS5yZWFkeSgpXG4gICAgICAgIGxvZygndGVybWluYXRpbmc7IHplcm8gZWxlbWVudHMgZm91bmQgYnkgc2VsZWN0b3InICsgKCQuaXNSZWFkeSA/ICcnIDogJyAoRE9NIG5vdCByZWFkeSknKSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGlmICggb3B0aW9ucy5kZWxlZ2F0aW9uICkge1xuICAgICAgICAkKGRvY3VtZW50KVxuICAgICAgICAgICAgLm9mZignc3VibWl0LmZvcm0tcGx1Z2luJywgdGhpcy5zZWxlY3RvciwgZG9BamF4U3VibWl0KVxuICAgICAgICAgICAgLm9mZignY2xpY2suZm9ybS1wbHVnaW4nLCB0aGlzLnNlbGVjdG9yLCBjYXB0dXJlU3VibWl0dGluZ0VsZW1lbnQpXG4gICAgICAgICAgICAub24oJ3N1Ym1pdC5mb3JtLXBsdWdpbicsIHRoaXMuc2VsZWN0b3IsIG9wdGlvbnMsIGRvQWpheFN1Ym1pdClcbiAgICAgICAgICAgIC5vbignY2xpY2suZm9ybS1wbHVnaW4nLCB0aGlzLnNlbGVjdG9yLCBvcHRpb25zLCBjYXB0dXJlU3VibWl0dGluZ0VsZW1lbnQpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5hamF4Rm9ybVVuYmluZCgpXG4gICAgICAgIC5iaW5kKCdzdWJtaXQuZm9ybS1wbHVnaW4nLCBvcHRpb25zLCBkb0FqYXhTdWJtaXQpXG4gICAgICAgIC5iaW5kKCdjbGljay5mb3JtLXBsdWdpbicsIG9wdGlvbnMsIGNhcHR1cmVTdWJtaXR0aW5nRWxlbWVudCk7XG59O1xuXG4vLyBwcml2YXRlIGV2ZW50IGhhbmRsZXJzXG5mdW5jdGlvbiBkb0FqYXhTdWJtaXQoZSkge1xuICAgIC8qanNoaW50IHZhbGlkdGhpczp0cnVlICovXG4gICAgdmFyIG9wdGlvbnMgPSBlLmRhdGE7XG4gICAgaWYgKCFlLmlzRGVmYXVsdFByZXZlbnRlZCgpKSB7IC8vIGlmIGV2ZW50IGhhcyBiZWVuIGNhbmNlbGVkLCBkb24ndCBwcm9jZWVkXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgJChlLnRhcmdldCkuYWpheFN1Ym1pdChvcHRpb25zKTsgLy8gIzM2NVxuICAgIH1cbn1cblxuZnVuY3Rpb24gY2FwdHVyZVN1Ym1pdHRpbmdFbGVtZW50KGUpIHtcbiAgICAvKmpzaGludCB2YWxpZHRoaXM6dHJ1ZSAqL1xuICAgIHZhciB0YXJnZXQgPSBlLnRhcmdldDtcbiAgICB2YXIgJGVsID0gJCh0YXJnZXQpO1xuICAgIGlmICghKCRlbC5pcyhcIlt0eXBlPXN1Ym1pdF0sW3R5cGU9aW1hZ2VdXCIpKSkge1xuICAgICAgICAvLyBpcyB0aGlzIGEgY2hpbGQgZWxlbWVudCBvZiB0aGUgc3VibWl0IGVsPyAgKGV4OiBhIHNwYW4gd2l0aGluIGEgYnV0dG9uKVxuICAgICAgICB2YXIgdCA9ICRlbC5jbG9zZXN0KCdbdHlwZT1zdWJtaXRdJyk7XG4gICAgICAgIGlmICh0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRhcmdldCA9IHRbMF07XG4gICAgfVxuICAgIHZhciBmb3JtID0gdGhpcztcbiAgICBmb3JtLmNsayA9IHRhcmdldDtcbiAgICBpZiAodGFyZ2V0LnR5cGUgPT0gJ2ltYWdlJykge1xuICAgICAgICBpZiAoZS5vZmZzZXRYICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGZvcm0uY2xrX3ggPSBlLm9mZnNldFg7XG4gICAgICAgICAgICBmb3JtLmNsa195ID0gZS5vZmZzZXRZO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiAkLmZuLm9mZnNldCA9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB2YXIgb2Zmc2V0ID0gJGVsLm9mZnNldCgpO1xuICAgICAgICAgICAgZm9ybS5jbGtfeCA9IGUucGFnZVggLSBvZmZzZXQubGVmdDtcbiAgICAgICAgICAgIGZvcm0uY2xrX3kgPSBlLnBhZ2VZIC0gb2Zmc2V0LnRvcDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvcm0uY2xrX3ggPSBlLnBhZ2VYIC0gdGFyZ2V0Lm9mZnNldExlZnQ7XG4gICAgICAgICAgICBmb3JtLmNsa195ID0gZS5wYWdlWSAtIHRhcmdldC5vZmZzZXRUb3A7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gY2xlYXIgZm9ybSB2YXJzXG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpIHsgZm9ybS5jbGsgPSBmb3JtLmNsa194ID0gZm9ybS5jbGtfeSA9IG51bGw7IH0sIDEwMCk7XG59XG5cblxuLy8gYWpheEZvcm1VbmJpbmQgdW5iaW5kcyB0aGUgZXZlbnQgaGFuZGxlcnMgdGhhdCB3ZXJlIGJvdW5kIGJ5IGFqYXhGb3JtXG4kLmZuLmFqYXhGb3JtVW5iaW5kID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMudW5iaW5kKCdzdWJtaXQuZm9ybS1wbHVnaW4gY2xpY2suZm9ybS1wbHVnaW4nKTtcbn07XG5cbi8qKlxuICogZm9ybVRvQXJyYXkoKSBnYXRoZXJzIGZvcm0gZWxlbWVudCBkYXRhIGludG8gYW4gYXJyYXkgb2Ygb2JqZWN0cyB0aGF0IGNhblxuICogYmUgcGFzc2VkIHRvIGFueSBvZiB0aGUgZm9sbG93aW5nIGFqYXggZnVuY3Rpb25zOiAkLmdldCwgJC5wb3N0LCBvciBsb2FkLlxuICogRWFjaCBvYmplY3QgaW4gdGhlIGFycmF5IGhhcyBib3RoIGEgJ25hbWUnIGFuZCAndmFsdWUnIHByb3BlcnR5LiAgQW4gZXhhbXBsZSBvZlxuICogYW4gYXJyYXkgZm9yIGEgc2ltcGxlIGxvZ2luIGZvcm0gbWlnaHQgYmU6XG4gKlxuICogWyB7IG5hbWU6ICd1c2VybmFtZScsIHZhbHVlOiAnanJlc2lnJyB9LCB7IG5hbWU6ICdwYXNzd29yZCcsIHZhbHVlOiAnc2VjcmV0JyB9IF1cbiAqXG4gKiBJdCBpcyB0aGlzIGFycmF5IHRoYXQgaXMgcGFzc2VkIHRvIHByZS1zdWJtaXQgY2FsbGJhY2sgZnVuY3Rpb25zIHByb3ZpZGVkIHRvIHRoZVxuICogYWpheFN1Ym1pdCgpIGFuZCBhamF4Rm9ybSgpIG1ldGhvZHMuXG4gKi9cbiQuZm4uZm9ybVRvQXJyYXkgPSBmdW5jdGlvbihzZW1hbnRpYywgZWxlbWVudHMpIHtcbiAgICB2YXIgYSA9IFtdO1xuICAgIGlmICh0aGlzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gYTtcbiAgICB9XG5cbiAgICB2YXIgZm9ybSA9IHRoaXNbMF07XG4gICAgdmFyIGZvcm1JZCA9IHRoaXMuYXR0cignaWQnKTtcbiAgICB2YXIgZWxzID0gc2VtYW50aWMgPyBmb3JtLmdldEVsZW1lbnRzQnlUYWdOYW1lKCcqJykgOiBmb3JtLmVsZW1lbnRzO1xuICAgIHZhciBlbHMyO1xuXG4gICAgaWYgKGVscyAmJiAhL01TSUUgWzY3OF0vLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkpIHsgLy8gIzM5MFxuICAgICAgICBlbHMgPSAkKGVscykuZ2V0KCk7ICAvLyBjb252ZXJ0IHRvIHN0YW5kYXJkIGFycmF5XG4gICAgfVxuXG4gICAgLy8gIzM4NjsgYWNjb3VudCBmb3IgaW5wdXRzIG91dHNpZGUgdGhlIGZvcm0gd2hpY2ggdXNlIHRoZSAnZm9ybScgYXR0cmlidXRlXG4gICAgaWYgKCBmb3JtSWQgKSB7XG4gICAgICAgIGVsczIgPSAkKCc6aW5wdXRbZm9ybT1cIicgKyBmb3JtSWQgKyAnXCJdJykuZ2V0KCk7IC8vIGhhdCB0aXAgQHRoZXRcbiAgICAgICAgaWYgKCBlbHMyLmxlbmd0aCApIHtcbiAgICAgICAgICAgIGVscyA9IChlbHMgfHwgW10pLmNvbmNhdChlbHMyKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmICghZWxzIHx8ICFlbHMubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBhO1xuICAgIH1cblxuICAgIHZhciBpLGosbix2LGVsLG1heCxqbWF4O1xuICAgIGZvcihpPTAsIG1heD1lbHMubGVuZ3RoOyBpIDwgbWF4OyBpKyspIHtcbiAgICAgICAgZWwgPSBlbHNbaV07XG4gICAgICAgIG4gPSBlbC5uYW1lO1xuICAgICAgICBpZiAoIW4gfHwgZWwuZGlzYWJsZWQpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNlbWFudGljICYmIGZvcm0uY2xrICYmIGVsLnR5cGUgPT0gXCJpbWFnZVwiKSB7XG4gICAgICAgICAgICAvLyBoYW5kbGUgaW1hZ2UgaW5wdXRzIG9uIHRoZSBmbHkgd2hlbiBzZW1hbnRpYyA9PSB0cnVlXG4gICAgICAgICAgICBpZihmb3JtLmNsayA9PSBlbCkge1xuICAgICAgICAgICAgICAgIGEucHVzaCh7bmFtZTogbiwgdmFsdWU6ICQoZWwpLnZhbCgpLCB0eXBlOiBlbC50eXBlIH0pO1xuICAgICAgICAgICAgICAgIGEucHVzaCh7bmFtZTogbisnLngnLCB2YWx1ZTogZm9ybS5jbGtfeH0sIHtuYW1lOiBuKycueScsIHZhbHVlOiBmb3JtLmNsa195fSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHYgPSAkLmZpZWxkVmFsdWUoZWwsIHRydWUpO1xuICAgICAgICBpZiAodiAmJiB2LmNvbnN0cnVjdG9yID09IEFycmF5KSB7XG4gICAgICAgICAgICBpZiAoZWxlbWVudHMpIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50cy5wdXNoKGVsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvcihqPTAsIGptYXg9di5sZW5ndGg7IGogPCBqbWF4OyBqKyspIHtcbiAgICAgICAgICAgICAgICBhLnB1c2goe25hbWU6IG4sIHZhbHVlOiB2W2pdfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZmVhdHVyZS5maWxlYXBpICYmIGVsLnR5cGUgPT0gJ2ZpbGUnKSB7XG4gICAgICAgICAgICBpZiAoZWxlbWVudHMpIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50cy5wdXNoKGVsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBmaWxlcyA9IGVsLmZpbGVzO1xuICAgICAgICAgICAgaWYgKGZpbGVzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGZvciAoaj0wOyBqIDwgZmlsZXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgYS5wdXNoKHtuYW1lOiBuLCB2YWx1ZTogZmlsZXNbal0sIHR5cGU6IGVsLnR5cGV9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyAjMTgwXG4gICAgICAgICAgICAgICAgYS5wdXNoKHsgbmFtZTogbiwgdmFsdWU6ICcnLCB0eXBlOiBlbC50eXBlIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHYgIT09IG51bGwgJiYgdHlwZW9mIHYgIT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIGlmIChlbGVtZW50cykge1xuICAgICAgICAgICAgICAgIGVsZW1lbnRzLnB1c2goZWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYS5wdXNoKHtuYW1lOiBuLCB2YWx1ZTogdiwgdHlwZTogZWwudHlwZSwgcmVxdWlyZWQ6IGVsLnJlcXVpcmVkfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIXNlbWFudGljICYmIGZvcm0uY2xrKSB7XG4gICAgICAgIC8vIGlucHV0IHR5cGU9PSdpbWFnZScgYXJlIG5vdCBmb3VuZCBpbiBlbGVtZW50cyBhcnJheSEgaGFuZGxlIGl0IGhlcmVcbiAgICAgICAgdmFyICRpbnB1dCA9ICQoZm9ybS5jbGspLCBpbnB1dCA9ICRpbnB1dFswXTtcbiAgICAgICAgbiA9IGlucHV0Lm5hbWU7XG4gICAgICAgIGlmIChuICYmICFpbnB1dC5kaXNhYmxlZCAmJiBpbnB1dC50eXBlID09ICdpbWFnZScpIHtcbiAgICAgICAgICAgIGEucHVzaCh7bmFtZTogbiwgdmFsdWU6ICRpbnB1dC52YWwoKX0pO1xuICAgICAgICAgICAgYS5wdXNoKHtuYW1lOiBuKycueCcsIHZhbHVlOiBmb3JtLmNsa194fSwge25hbWU6IG4rJy55JywgdmFsdWU6IGZvcm0uY2xrX3l9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYTtcbn07XG5cbi8qKlxuICogU2VyaWFsaXplcyBmb3JtIGRhdGEgaW50byBhICdzdWJtaXR0YWJsZScgc3RyaW5nLiBUaGlzIG1ldGhvZCB3aWxsIHJldHVybiBhIHN0cmluZ1xuICogaW4gdGhlIGZvcm1hdDogbmFtZTE9dmFsdWUxJmFtcDtuYW1lMj12YWx1ZTJcbiAqL1xuJC5mbi5mb3JtU2VyaWFsaXplID0gZnVuY3Rpb24oc2VtYW50aWMpIHtcbiAgICAvL2hhbmQgb2ZmIHRvIGpRdWVyeS5wYXJhbSBmb3IgcHJvcGVyIGVuY29kaW5nXG4gICAgcmV0dXJuICQucGFyYW0odGhpcy5mb3JtVG9BcnJheShzZW1hbnRpYykpO1xufTtcblxuLyoqXG4gKiBTZXJpYWxpemVzIGFsbCBmaWVsZCBlbGVtZW50cyBpbiB0aGUgalF1ZXJ5IG9iamVjdCBpbnRvIGEgcXVlcnkgc3RyaW5nLlxuICogVGhpcyBtZXRob2Qgd2lsbCByZXR1cm4gYSBzdHJpbmcgaW4gdGhlIGZvcm1hdDogbmFtZTE9dmFsdWUxJmFtcDtuYW1lMj12YWx1ZTJcbiAqL1xuJC5mbi5maWVsZFNlcmlhbGl6ZSA9IGZ1bmN0aW9uKHN1Y2Nlc3NmdWwpIHtcbiAgICB2YXIgYSA9IFtdO1xuICAgIHRoaXMuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIG4gPSB0aGlzLm5hbWU7XG4gICAgICAgIGlmICghbikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciB2ID0gJC5maWVsZFZhbHVlKHRoaXMsIHN1Y2Nlc3NmdWwpO1xuICAgICAgICBpZiAodiAmJiB2LmNvbnN0cnVjdG9yID09IEFycmF5KSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpPTAsbWF4PXYubGVuZ3RoOyBpIDwgbWF4OyBpKyspIHtcbiAgICAgICAgICAgICAgICBhLnB1c2goe25hbWU6IG4sIHZhbHVlOiB2W2ldfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodiAhPT0gbnVsbCAmJiB0eXBlb2YgdiAhPSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgYS5wdXNoKHtuYW1lOiB0aGlzLm5hbWUsIHZhbHVlOiB2fSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICAvL2hhbmQgb2ZmIHRvIGpRdWVyeS5wYXJhbSBmb3IgcHJvcGVyIGVuY29kaW5nXG4gICAgcmV0dXJuICQucGFyYW0oYSk7XG59O1xuXG4vKipcbiAqIFJldHVybnMgdGhlIHZhbHVlKHMpIG9mIHRoZSBlbGVtZW50IGluIHRoZSBtYXRjaGVkIHNldC4gIEZvciBleGFtcGxlLCBjb25zaWRlciB0aGUgZm9sbG93aW5nIGZvcm06XG4gKlxuICogIDxmb3JtPjxmaWVsZHNldD5cbiAqICAgICAgPGlucHV0IG5hbWU9XCJBXCIgdHlwZT1cInRleHRcIiAvPlxuICogICAgICA8aW5wdXQgbmFtZT1cIkFcIiB0eXBlPVwidGV4dFwiIC8+XG4gKiAgICAgIDxpbnB1dCBuYW1lPVwiQlwiIHR5cGU9XCJjaGVja2JveFwiIHZhbHVlPVwiQjFcIiAvPlxuICogICAgICA8aW5wdXQgbmFtZT1cIkJcIiB0eXBlPVwiY2hlY2tib3hcIiB2YWx1ZT1cIkIyXCIvPlxuICogICAgICA8aW5wdXQgbmFtZT1cIkNcIiB0eXBlPVwicmFkaW9cIiB2YWx1ZT1cIkMxXCIgLz5cbiAqICAgICAgPGlucHV0IG5hbWU9XCJDXCIgdHlwZT1cInJhZGlvXCIgdmFsdWU9XCJDMlwiIC8+XG4gKiAgPC9maWVsZHNldD48L2Zvcm0+XG4gKlxuICogIHZhciB2ID0gJCgnaW5wdXRbdHlwZT10ZXh0XScpLmZpZWxkVmFsdWUoKTtcbiAqICAvLyBpZiBubyB2YWx1ZXMgYXJlIGVudGVyZWQgaW50byB0aGUgdGV4dCBpbnB1dHNcbiAqICB2ID09IFsnJywnJ11cbiAqICAvLyBpZiB2YWx1ZXMgZW50ZXJlZCBpbnRvIHRoZSB0ZXh0IGlucHV0cyBhcmUgJ2ZvbycgYW5kICdiYXInXG4gKiAgdiA9PSBbJ2ZvbycsJ2JhciddXG4gKlxuICogIHZhciB2ID0gJCgnaW5wdXRbdHlwZT1jaGVja2JveF0nKS5maWVsZFZhbHVlKCk7XG4gKiAgLy8gaWYgbmVpdGhlciBjaGVja2JveCBpcyBjaGVja2VkXG4gKiAgdiA9PT0gdW5kZWZpbmVkXG4gKiAgLy8gaWYgYm90aCBjaGVja2JveGVzIGFyZSBjaGVja2VkXG4gKiAgdiA9PSBbJ0IxJywgJ0IyJ11cbiAqXG4gKiAgdmFyIHYgPSAkKCdpbnB1dFt0eXBlPXJhZGlvXScpLmZpZWxkVmFsdWUoKTtcbiAqICAvLyBpZiBuZWl0aGVyIHJhZGlvIGlzIGNoZWNrZWRcbiAqICB2ID09PSB1bmRlZmluZWRcbiAqICAvLyBpZiBmaXJzdCByYWRpbyBpcyBjaGVja2VkXG4gKiAgdiA9PSBbJ0MxJ11cbiAqXG4gKiBUaGUgc3VjY2Vzc2Z1bCBhcmd1bWVudCBjb250cm9scyB3aGV0aGVyIG9yIG5vdCB0aGUgZmllbGQgZWxlbWVudCBtdXN0IGJlICdzdWNjZXNzZnVsJ1xuICogKHBlciBodHRwOi8vd3d3LnczLm9yZy9UUi9odG1sNC9pbnRlcmFjdC9mb3Jtcy5odG1sI3N1Y2Nlc3NmdWwtY29udHJvbHMpLlxuICogVGhlIGRlZmF1bHQgdmFsdWUgb2YgdGhlIHN1Y2Nlc3NmdWwgYXJndW1lbnQgaXMgdHJ1ZS4gIElmIHRoaXMgdmFsdWUgaXMgZmFsc2UgdGhlIHZhbHVlKHMpXG4gKiBmb3IgZWFjaCBlbGVtZW50IGlzIHJldHVybmVkLlxuICpcbiAqIE5vdGU6IFRoaXMgbWV0aG9kICphbHdheXMqIHJldHVybnMgYW4gYXJyYXkuICBJZiBubyB2YWxpZCB2YWx1ZSBjYW4gYmUgZGV0ZXJtaW5lZCB0aGVcbiAqICAgIGFycmF5IHdpbGwgYmUgZW1wdHksIG90aGVyd2lzZSBpdCB3aWxsIGNvbnRhaW4gb25lIG9yIG1vcmUgdmFsdWVzLlxuICovXG4kLmZuLmZpZWxkVmFsdWUgPSBmdW5jdGlvbihzdWNjZXNzZnVsKSB7XG4gICAgZm9yICh2YXIgdmFsPVtdLCBpPTAsIG1heD10aGlzLmxlbmd0aDsgaSA8IG1heDsgaSsrKSB7XG4gICAgICAgIHZhciBlbCA9IHRoaXNbaV07XG4gICAgICAgIHZhciB2ID0gJC5maWVsZFZhbHVlKGVsLCBzdWNjZXNzZnVsKTtcbiAgICAgICAgaWYgKHYgPT09IG51bGwgfHwgdHlwZW9mIHYgPT0gJ3VuZGVmaW5lZCcgfHwgKHYuY29uc3RydWN0b3IgPT0gQXJyYXkgJiYgIXYubGVuZ3RoKSkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHYuY29uc3RydWN0b3IgPT0gQXJyYXkpIHtcbiAgICAgICAgICAgICQubWVyZ2UodmFsLCB2KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhbC5wdXNoKHYpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB2YWw7XG59O1xuXG4vKipcbiAqIFJldHVybnMgdGhlIHZhbHVlIG9mIHRoZSBmaWVsZCBlbGVtZW50LlxuICovXG4kLmZpZWxkVmFsdWUgPSBmdW5jdGlvbihlbCwgc3VjY2Vzc2Z1bCkge1xuICAgIHZhciBuID0gZWwubmFtZSwgdCA9IGVsLnR5cGUsIHRhZyA9IGVsLnRhZ05hbWUudG9Mb3dlckNhc2UoKTtcbiAgICBpZiAoc3VjY2Vzc2Z1bCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHN1Y2Nlc3NmdWwgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChzdWNjZXNzZnVsICYmICghbiB8fCBlbC5kaXNhYmxlZCB8fCB0ID09ICdyZXNldCcgfHwgdCA9PSAnYnV0dG9uJyB8fFxuICAgICAgICAodCA9PSAnY2hlY2tib3gnIHx8IHQgPT0gJ3JhZGlvJykgJiYgIWVsLmNoZWNrZWQgfHxcbiAgICAgICAgKHQgPT0gJ3N1Ym1pdCcgfHwgdCA9PSAnaW1hZ2UnKSAmJiBlbC5mb3JtICYmIGVsLmZvcm0uY2xrICE9IGVsIHx8XG4gICAgICAgIHRhZyA9PSAnc2VsZWN0JyAmJiBlbC5zZWxlY3RlZEluZGV4ID09IC0xKSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgaWYgKHRhZyA9PSAnc2VsZWN0Jykge1xuICAgICAgICB2YXIgaW5kZXggPSBlbC5zZWxlY3RlZEluZGV4O1xuICAgICAgICBpZiAoaW5kZXggPCAwKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICB2YXIgYSA9IFtdLCBvcHMgPSBlbC5vcHRpb25zO1xuICAgICAgICB2YXIgb25lID0gKHQgPT0gJ3NlbGVjdC1vbmUnKTtcbiAgICAgICAgdmFyIG1heCA9IChvbmUgPyBpbmRleCsxIDogb3BzLmxlbmd0aCk7XG4gICAgICAgIGZvcih2YXIgaT0ob25lID8gaW5kZXggOiAwKTsgaSA8IG1heDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgb3AgPSBvcHNbaV07XG4gICAgICAgICAgICBpZiAob3Auc2VsZWN0ZWQpIHtcbiAgICAgICAgICAgICAgICB2YXIgdiA9IG9wLnZhbHVlO1xuICAgICAgICAgICAgICAgIGlmICghdikgeyAvLyBleHRyYSBwYWluIGZvciBJRS4uLlxuICAgICAgICAgICAgICAgICAgICB2ID0gKG9wLmF0dHJpYnV0ZXMgJiYgb3AuYXR0cmlidXRlcy52YWx1ZSAmJiAhKG9wLmF0dHJpYnV0ZXMudmFsdWUuc3BlY2lmaWVkKSkgPyBvcC50ZXh0IDogb3AudmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChvbmUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHY7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGEucHVzaCh2KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYTtcbiAgICB9XG4gICAgcmV0dXJuICQoZWwpLnZhbCgpO1xufTtcblxuLyoqXG4gKiBDbGVhcnMgdGhlIGZvcm0gZGF0YS4gIFRha2VzIHRoZSBmb2xsb3dpbmcgYWN0aW9ucyBvbiB0aGUgZm9ybSdzIGlucHV0IGZpZWxkczpcbiAqICAtIGlucHV0IHRleHQgZmllbGRzIHdpbGwgaGF2ZSB0aGVpciAndmFsdWUnIHByb3BlcnR5IHNldCB0byB0aGUgZW1wdHkgc3RyaW5nXG4gKiAgLSBzZWxlY3QgZWxlbWVudHMgd2lsbCBoYXZlIHRoZWlyICdzZWxlY3RlZEluZGV4JyBwcm9wZXJ0eSBzZXQgdG8gLTFcbiAqICAtIGNoZWNrYm94IGFuZCByYWRpbyBpbnB1dHMgd2lsbCBoYXZlIHRoZWlyICdjaGVja2VkJyBwcm9wZXJ0eSBzZXQgdG8gZmFsc2VcbiAqICAtIGlucHV0cyBvZiB0eXBlIHN1Ym1pdCwgYnV0dG9uLCByZXNldCwgYW5kIGhpZGRlbiB3aWxsICpub3QqIGJlIGVmZmVjdGVkXG4gKiAgLSBidXR0b24gZWxlbWVudHMgd2lsbCAqbm90KiBiZSBlZmZlY3RlZFxuICovXG4kLmZuLmNsZWFyRm9ybSA9IGZ1bmN0aW9uKGluY2x1ZGVIaWRkZW4pIHtcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAkKCdpbnB1dCxzZWxlY3QsdGV4dGFyZWEnLCB0aGlzKS5jbGVhckZpZWxkcyhpbmNsdWRlSGlkZGVuKTtcbiAgICB9KTtcbn07XG5cbi8qKlxuICogQ2xlYXJzIHRoZSBzZWxlY3RlZCBmb3JtIGVsZW1lbnRzLlxuICovXG4kLmZuLmNsZWFyRmllbGRzID0gJC5mbi5jbGVhcklucHV0cyA9IGZ1bmN0aW9uKGluY2x1ZGVIaWRkZW4pIHtcbiAgICB2YXIgcmUgPSAvXig/OmNvbG9yfGRhdGV8ZGF0ZXRpbWV8ZW1haWx8bW9udGh8bnVtYmVyfHBhc3N3b3JkfHJhbmdlfHNlYXJjaHx0ZWx8dGV4dHx0aW1lfHVybHx3ZWVrKSQvaTsgLy8gJ2hpZGRlbicgaXMgbm90IGluIHRoaXMgbGlzdFxuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciB0ID0gdGhpcy50eXBlLCB0YWcgPSB0aGlzLnRhZ05hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgaWYgKHJlLnRlc3QodCkgfHwgdGFnID09ICd0ZXh0YXJlYScpIHtcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSAnJztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0ID09ICdjaGVja2JveCcgfHwgdCA9PSAncmFkaW8nKSB7XG4gICAgICAgICAgICB0aGlzLmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0YWcgPT0gJ3NlbGVjdCcpIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9IC0xO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHQgPT0gXCJmaWxlXCIpIHtcbiAgICAgICAgICAgIGlmICgvTVNJRS8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSkge1xuICAgICAgICAgICAgICAgICQodGhpcykucmVwbGFjZVdpdGgoJCh0aGlzKS5jbG9uZSh0cnVlKSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICQodGhpcykudmFsKCcnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpbmNsdWRlSGlkZGVuKSB7XG4gICAgICAgICAgICAvLyBpbmNsdWRlSGlkZGVuIGNhbiBiZSB0aGUgdmFsdWUgdHJ1ZSwgb3IgaXQgY2FuIGJlIGEgc2VsZWN0b3Igc3RyaW5nXG4gICAgICAgICAgICAvLyBpbmRpY2F0aW5nIGEgc3BlY2lhbCB0ZXN0OyBmb3IgZXhhbXBsZTpcbiAgICAgICAgICAgIC8vICAkKCcjbXlGb3JtJykuY2xlYXJGb3JtKCcuc3BlY2lhbDpoaWRkZW4nKVxuICAgICAgICAgICAgLy8gdGhlIGFib3ZlIHdvdWxkIGNsZWFuIGhpZGRlbiBpbnB1dHMgdGhhdCBoYXZlIHRoZSBjbGFzcyBvZiAnc3BlY2lhbCdcbiAgICAgICAgICAgIGlmICggKGluY2x1ZGVIaWRkZW4gPT09IHRydWUgJiYgL2hpZGRlbi8udGVzdCh0KSkgfHxcbiAgICAgICAgICAgICAgICAgKHR5cGVvZiBpbmNsdWRlSGlkZGVuID09ICdzdHJpbmcnICYmICQodGhpcykuaXMoaW5jbHVkZUhpZGRlbikpICkge1xuICAgICAgICAgICAgICAgIHRoaXMudmFsdWUgPSAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufTtcblxuLyoqXG4gKiBSZXNldHMgdGhlIGZvcm0gZGF0YS4gIENhdXNlcyBhbGwgZm9ybSBlbGVtZW50cyB0byBiZSByZXNldCB0byB0aGVpciBvcmlnaW5hbCB2YWx1ZS5cbiAqL1xuJC5mbi5yZXNldEZvcm0gPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAvLyBndWFyZCBhZ2FpbnN0IGFuIGlucHV0IHdpdGggdGhlIG5hbWUgb2YgJ3Jlc2V0J1xuICAgICAgICAvLyBub3RlIHRoYXQgSUUgcmVwb3J0cyB0aGUgcmVzZXQgZnVuY3Rpb24gYXMgYW4gJ29iamVjdCdcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnJlc2V0ID09ICdmdW5jdGlvbicgfHwgKHR5cGVvZiB0aGlzLnJlc2V0ID09ICdvYmplY3QnICYmICF0aGlzLnJlc2V0Lm5vZGVUeXBlKSkge1xuICAgICAgICAgICAgdGhpcy5yZXNldCgpO1xuICAgICAgICB9XG4gICAgfSk7XG59O1xuXG4vKipcbiAqIEVuYWJsZXMgb3IgZGlzYWJsZXMgYW55IG1hdGNoaW5nIGVsZW1lbnRzLlxuICovXG4kLmZuLmVuYWJsZSA9IGZ1bmN0aW9uKGIpIHtcbiAgICBpZiAoYiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGIgPSB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLmRpc2FibGVkID0gIWI7XG4gICAgfSk7XG59O1xuXG4vKipcbiAqIENoZWNrcy91bmNoZWNrcyBhbnkgbWF0Y2hpbmcgY2hlY2tib3hlcyBvciByYWRpbyBidXR0b25zIGFuZFxuICogc2VsZWN0cy9kZXNlbGVjdHMgYW5kIG1hdGNoaW5nIG9wdGlvbiBlbGVtZW50cy5cbiAqL1xuJC5mbi5zZWxlY3RlZCA9IGZ1bmN0aW9uKHNlbGVjdCkge1xuICAgIGlmIChzZWxlY3QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBzZWxlY3QgPSB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgdCA9IHRoaXMudHlwZTtcbiAgICAgICAgaWYgKHQgPT0gJ2NoZWNrYm94JyB8fCB0ID09ICdyYWRpbycpIHtcbiAgICAgICAgICAgIHRoaXMuY2hlY2tlZCA9IHNlbGVjdDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PSAnb3B0aW9uJykge1xuICAgICAgICAgICAgdmFyICRzZWwgPSAkKHRoaXMpLnBhcmVudCgnc2VsZWN0Jyk7XG4gICAgICAgICAgICBpZiAoc2VsZWN0ICYmICRzZWxbMF0gJiYgJHNlbFswXS50eXBlID09ICdzZWxlY3Qtb25lJykge1xuICAgICAgICAgICAgICAgIC8vIGRlc2VsZWN0IGFsbCBvdGhlciBvcHRpb25zXG4gICAgICAgICAgICAgICAgJHNlbC5maW5kKCdvcHRpb24nKS5zZWxlY3RlZChmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkID0gc2VsZWN0O1xuICAgICAgICB9XG4gICAgfSk7XG59O1xuXG4vLyBleHBvc2UgZGVidWcgdmFyXG4kLmZuLmFqYXhTdWJtaXQuZGVidWcgPSBmYWxzZTtcblxuLy8gaGVscGVyIGZuIGZvciBjb25zb2xlIGxvZ2dpbmdcbmZ1bmN0aW9uIGxvZygpIHtcbiAgICBpZiAoISQuZm4uYWpheFN1Ym1pdC5kZWJ1Zykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciBtc2cgPSAnW2pxdWVyeS5mb3JtXSAnICsgQXJyYXkucHJvdG90eXBlLmpvaW4uY2FsbChhcmd1bWVudHMsJycpO1xuICAgIGlmICh3aW5kb3cuY29uc29sZSAmJiB3aW5kb3cuY29uc29sZS5sb2cpIHtcbiAgICAgICAgd2luZG93LmNvbnNvbGUubG9nKG1zZyk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHdpbmRvdy5vcGVyYSAmJiB3aW5kb3cub3BlcmEucG9zdEVycm9yKSB7XG4gICAgICAgIHdpbmRvdy5vcGVyYS5wb3N0RXJyb3IobXNnKTtcbiAgICB9XG59XG5cbn0pKTtcbiIsIihmdW5jdGlvbigpIHtcbiAgdmFyIHNlcXVlbmNlcyA9IFtdO1xuICB2YXIgc2VxdWVuY2VFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZXF1ZW5jZTFcIik7XG4gIHZhciBzZXF1ZW5jZUVsZW1lbnQyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZXF1ZW5jZTJcIik7XG4gIGlmIChzZXF1ZW5jZUVsZW1lbnQgPT0gbnVsbCB8fCBzZXF1ZW5jZUVsZW1lbnQyID09IG51bGwpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgb3B0aW9ucyA9IHtcbiAgICBhbmltYXRlQ2FudmFzOiBmYWxzZSxcbiAgICBrZXlOYXZpZ2F0aW9uOiB0cnVlLFxuICAgIGZhZGVTdGVwV2hlblNraXBwZWQ6IGZhbHNlLFxuICAgIC8vIHJldmVyc2VXaGVuTmF2aWdhdGluZ0JhY2t3YXJkczogdHJ1ZSxcbiAgICAvLyBuZXh0QnV0dG9uOiAnI3NlcXVlbmNlMSAuc2VxLXByZXYnLFxuICAgIC8vIHByZXZCdXR0b246ICcjc2VxdWVuY2UxIC5zZXEtbmV4dCcsXG4gICAgcGFnaW5hdGlvbjogJyNzZXF1ZW5jZTEgLnNsaWRlcl9fcGFnaW5hdGlvbicsXG4gICAgcHJlbG9hZGVyOiBmYWxzZSxcbiAgICAvLyByZXZlcnNlVGltaW5nRnVuY3Rpb25XaGVuTmF2aWdhdGluZ0JhY2t3YXJkczogdHJ1ZSxcbiAgfVxuXG4gIHZhciBvcHRpb25zMiA9IHtcbiAgICBhbmltYXRlQ2FudmFzOiB0cnVlLFxuICAgIGtleU5hdmlnYXRpb246IGZhbHNlLFxuICAgIGZhZGVTdGVwV2hlblNraXBwZWQ6IGZhbHNlLFxuICAgIHJldmVyc2VXaGVuTmF2aWdhdGluZ0JhY2t3YXJkczogdHJ1ZSxcbiAgICBuZXh0QnV0dG9uOiAnLndyYXBwZXJfbWFjIC5zZXEtbmV4dCcsXG4gICAgcHJldkJ1dHRvbjogJy53cmFwcGVyX21hYyAuc2VxLXByZXYnLFxuICAgIC8vIHBhZ2luYXRpb246ICcjc2VxdWVuY2UxIC5zbGlkZXJfX3BhZ2luYXRpb24nLFxuICAgIHByZWxvYWRlcjogZmFsc2UsXG4gICAgLy8gcmV2ZXJzZVRpbWluZ0Z1bmN0aW9uV2hlbk5hdmlnYXRpbmdCYWNrd2FyZHM6IHRydWUsXG4gIH1cblxuICB2YXIgbXlTZXF1ZW5jZSA9IHNlcXVlbmNlKHNlcXVlbmNlRWxlbWVudCwgb3B0aW9ucyk7XG4gIHNlcXVlbmNlcy5wdXNoKG15U2VxdWVuY2UpO1xuXG4gIHZhciBteVNlcXVlbmNlMiA9IHNlcXVlbmNlKHNlcXVlbmNlRWxlbWVudDIsIG9wdGlvbnMyKTtcbiAgc2VxdWVuY2VzLnB1c2goe2VsZW06IHNlcXVlbmNlRWxlbWVudCwgc2VxOiBteVNlcXVlbmNlfSk7XG4gIHNlcXVlbmNlcy5wdXNoKHtlbGVtOiBzZXF1ZW5jZUVsZW1lbnQyLCBzZXE6IG15U2VxdWVuY2UyfSk7XG4gIHJldHVybiBzZXF1ZW5jZXM7XG59KSgpO1xuIl19
