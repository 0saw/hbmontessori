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

     $('.interior__item').magnificPopup({
      delegate: 'a',
      type: 'image',
      removalDelay: 500,
      mainClass: 'mfp-zoom-in modal',
      callbacks: {
        beforeOpen: function() {}
      },
      midClick: true
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
    // moreLink: '<a href="#" class="button button_readmore">Читать полностью >></a>',
    // lessLink: '<a href="#" class="button button_readmore">Скрыть</a>'
    moreLink: '<div class="teachers__readMore" hidden />',
    lessLink: '<div class="teachers__readMore" hidden />',
    maxHeight: 0
  });
  $('.teachers__title').on('click', function (e) {
    e.preventDefault();
    $(this).siblings('.teachers__readMore').trigger('click');
  });
  $('.teachers__teacher img').on('click', function (e) {
    e.preventDefault();
    $(this).parent().find('.teachers__readMore').trigger('click');
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
  scrollToElement(".nav a[href='#cabinet']", 60);
  scrollToElement(".nav a[href='#location']", 60);

  scrollToElement(".sidenav a[href='#toddler']", 0);
  scrollToElement(".sidenav a[href='#primary']", 0);
  scrollToElement(".sidenav a[href='#ourteam']", 0);
  scrollToElement(".sidenav a[href='#cabinet']", 10);
  scrollToElement(".sidenav a[href='#location']", 10);

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
  $('#sidenav a').on('click', function (e) {
    $(closebtn).trigger('click');
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

  var mySequence2 = sequence(sequenceElement2, options2);
  sequences.push({elem: sequenceElement, seq: mySequence});
  sequences.push({elem: sequenceElement2, seq: mySequence2});
  module.exports = sequences;
})();

},{}]},{},["C:\\Users\\iamle\\Documents\\Work\\_inprogress\\hbmontessori.ru\\hbmontessori\\src\\scripts\\main.js"])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvc2NyaXB0cy9tYWluLmpzIiwic3JjL3NjcmlwdHMvdmlld3MvZm9ybXMuanMiLCJzcmMvc2NyaXB0cy92aWV3cy9zZXF1ZW5jZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25NQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN3ZDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvLyBpbXBvcnQgVmlldyBmcm9tICcuL3ZpZXdzL3ZpZXcnO1xuXG4vLyBjb25zdCBnID0gOS44MTtcblxuJChmdW5jdGlvbigpIHtcbiAgdmFyIGltYWdlc1NlbGVjdG9yID0gW1xuICAgIFwiLnNsaWRlcl9fY29udGVudCBpbWdcIlxuICBdLmpvaW4oJywgJyk7XG5cbiAgJChpbWFnZXNTZWxlY3RvcikuaW1hZ2VzTG9hZGVkKHsgYmFja2dyb3VuZDogdHJ1ZSB9KVxuICAgIC5kb25lKGZ1bmN0aW9uKGluc3RhbmNlKSB7XG5cbiAgICB9KVxuICAgIC5mYWlsKGZ1bmN0aW9uKCkge1xuICAgICAgYWxlcnQoXCLQndC1INCy0YHQtSDQuNC30L7QsdGA0LDQttC10L3QuNGPINGD0LTQsNC70L7RgdGMINC30LDQs9GA0YPQt9C40YLRjC4g0JLQtdCxLdGB0YLRgNCw0L3QuNGG0LAg0LzQvtC20LXRgiDQstGL0LPQu9GP0LTQtdGC0Ywg0LjRgdC60LDQttC10L3QvdC+0LkuXCIpO1xuICAgIH0pXG4gICAgLmFsd2F5cyhmdW5jdGlvbigpIHtcbiAgICAgIGZyb250UGFnZSgpO1xuICAgIH0pO1xufSk7XG5cblxudmFyIHBhZ2VGb3JtcyA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGZvcm1zID0gW1xuICAgICcuZm9ybScsXG4gIF07XG4gIHZhciBvcHRpb25zID0ge1xuICAgIGRlbGVnYXRpb246IHRydWUsXG4gICAgY2xlYXJGb3JtOiB0cnVlLFxuICAgIHJlc2V0Rm9ybTogdHJ1ZSxcbiAgICB0eXBlOiAncG9zdCcsXG4gICAgYmVmb3JlU3VibWl0OiBmdW5jdGlvbigpIHtcbiAgICAgIC8vICQubWFnbmlmaWNQb3B1cC5jbG9zZSgpO1xuICAgIH0sXG4gICAgc3VjY2VzczogZnVuY3Rpb24oKSB7XG4gICAgICAkLm1hZ25pZmljUG9wdXAub3Blbih7XG4gICAgICAgIGl0ZW1zOiB7XG4gICAgICAgICAgc3JjOiAnI3BvcHVwVGhhbmtzJyxcbiAgICAgICAgfSxcbiAgICAgICAgdHlwZTogJ2lubGluZScsXG4gICAgICAgIHJlbW92YWxEZWxheTogNTAwLFxuICAgICAgICBtYWluQ2xhc3M6ICdtZnAtem9vbS1pbiBtb2RhbCcsXG4gICAgICAgIGNhbGxiYWNrczoge1xuICAgICAgICAgIGJlZm9yZU9wZW46IGZ1bmN0aW9uKCkge31cbiAgICAgICAgfSxcbiAgICAgICAgbWlkQ2xpY2s6IHRydWVcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgZXJyb3I6IGZ1bmN0aW9uKCkge1xuICAgICAgJC5tYWduaWZpY1BvcHVwLm9wZW4oe1xuICAgICAgICBpdGVtczoge1xuICAgICAgICAgIHNyYzogJyNwb3B1cEVycm9yJyxcbiAgICAgICAgfSxcbiAgICAgICAgdHlwZTogJ2lubGluZScsXG4gICAgICAgIHJlbW92YWxEZWxheTogNTAwLFxuICAgICAgICBtYWluQ2xhc3M6ICdtZnAtem9vbS1pbiBtb2RhbCcsXG4gICAgICAgIGNhbGxiYWNrczoge1xuICAgICAgICAgIGJlZm9yZU9wZW46IGZ1bmN0aW9uKCkge31cbiAgICAgICAgfSxcbiAgICAgICAgbWlkQ2xpY2s6IHRydWVcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gICQoZm9ybXMpLmVhY2goZnVuY3Rpb24gKGluZGV4LCBlbGVtKSB7XG4gICAgICQodGhpcykuYWpheEZvcm0ob3B0aW9ucylcbiAgfSk7XG5cbiAgJCgnLmJ1dHRvbl9oZWFkZXInKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHBvcHVwRm9ybSA9ICQoJyNwb3B1cEZvcm0nKTtcbiAgICAkLm1hZ25pZmljUG9wdXAub3Blbih7XG4gICAgICBpdGVtczoge1xuICAgICAgICBzcmM6IHBvcHVwRm9ybSxcbiAgICAgIH0sXG4gICAgICB0eXBlOiAnaW5saW5lJyxcbiAgICAgIHJlbW92YWxEZWxheTogNTAwLFxuICAgICAgbWFpbkNsYXNzOiAnbWZwLXpvb20taW4gbW9kYWwnLFxuICAgICAgY2FsbGJhY2tzOiB7XG4gICAgICAgIGJlZm9yZU9wZW46IGZ1bmN0aW9uKCkge31cbiAgICAgIH0sXG4gICAgICBtaWRDbGljazogdHJ1ZVxuICAgIH0pO1xuICB9KTtcblxuICAkKCcjbWFwcycpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgJC5tYWduaWZpY1BvcHVwLm9wZW4oe1xuICAgICAgaXRlbXM6IHtcbiAgICAgICAgc3JjOiAnI21vZGFsemFrYXozJyxcbiAgICAgIH0sXG4gICAgICB0eXBlOiAnaW5saW5lJyxcbiAgICAgIHJlbW92YWxEZWxheTogNTAwLFxuICAgICAgbWFpbkNsYXNzOiAnbWZwLXpvb20taW4gbW9kYWwnLFxuICAgICAgY2FsbGJhY2tzOiB7XG4gICAgICAgIGJlZm9yZU9wZW46IGZ1bmN0aW9uKCkge31cbiAgICAgIH0sXG4gICAgICBtaWRDbGljazogdHJ1ZVxuICAgIH0pOyBcbiAgfSk7XG5cbiAgICAgJCgnLmludGVyaW9yX19pdGVtJykubWFnbmlmaWNQb3B1cCh7XG4gICAgICBkZWxlZ2F0ZTogJ2EnLFxuICAgICAgdHlwZTogJ2ltYWdlJyxcbiAgICAgIHJlbW92YWxEZWxheTogNTAwLFxuICAgICAgbWFpbkNsYXNzOiAnbWZwLXpvb20taW4gbW9kYWwnLFxuICAgICAgY2FsbGJhY2tzOiB7XG4gICAgICAgIGJlZm9yZU9wZW46IGZ1bmN0aW9uKCkge31cbiAgICAgIH0sXG4gICAgICBtaWRDbGljazogdHJ1ZVxuICAgIH0pOyBcbn07XG5cblxudmFyIGZyb250UGFnZSA9IGZ1bmN0aW9uKGFyZ3VtZW50KSB7XG4gICQoZG9jdW1lbnQuYm9keSkuYWRkQ2xhc3MoJ2ltYWdlc0xvYWRlZCcpO1xuICAkKCcjcHJlbG9hZGVyJykuZmFkZU91dCh7XG4gICAgZHVyYXRpb246IDQwMCxcbiAgICBlYXNpbmc6ICdlYXNlSW5PdXRTaW5lJ1xuICB9KTtcbiAgdmFyIHNlcXVlbmNlcyA9IHJlcXVpcmUoJy4vdmlld3Mvc2VxdWVuY2UnKTtcbiAgdmFyIGZvcm1zID0gcmVxdWlyZSgnLi92aWV3cy9mb3JtcycpO1xuXG4gICQoJy5yZWFkTW9yZScpLnJlYWRtb3JlKHtcbiAgICBzcGVlZDogNzUsXG4gICAgLy8gbW9yZUxpbms6ICc8YSBocmVmPVwiI1wiIGNsYXNzPVwiYnV0dG9uIGJ1dHRvbl9yZWFkbW9yZVwiPtCn0LjRgtCw0YLRjCDQv9C+0LvQvdC+0YHRgtGM0Y4gPj48L2E+JyxcbiAgICAvLyBsZXNzTGluazogJzxhIGhyZWY9XCIjXCIgY2xhc3M9XCJidXR0b24gYnV0dG9uX3JlYWRtb3JlXCI+0KHQutGA0YvRgtGMPC9hPidcbiAgICBtb3JlTGluazogJzxkaXYgY2xhc3M9XCJ0ZWFjaGVyc19fcmVhZE1vcmVcIiBoaWRkZW4gLz4nLFxuICAgIGxlc3NMaW5rOiAnPGRpdiBjbGFzcz1cInRlYWNoZXJzX19yZWFkTW9yZVwiIGhpZGRlbiAvPicsXG4gICAgbWF4SGVpZ2h0OiAwXG4gIH0pO1xuICAkKCcudGVhY2hlcnNfX3RpdGxlJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgJCh0aGlzKS5zaWJsaW5ncygnLnRlYWNoZXJzX19yZWFkTW9yZScpLnRyaWdnZXIoJ2NsaWNrJyk7XG4gIH0pO1xuICAkKCcudGVhY2hlcnNfX3RlYWNoZXIgaW1nJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgJCh0aGlzKS5wYXJlbnQoKS5maW5kKCcudGVhY2hlcnNfX3JlYWRNb3JlJykudHJpZ2dlcignY2xpY2snKTtcbiAgfSk7XG5cblxuXG4gIHZhciAkbmF2ID0gJCgnLm5hdicpO1xuICB2YXIgbmF2T2Zmc2V0ID0gJG5hdi5vZmZzZXQoKS50b3A7XG4gIHZhciB3aW5kb3dTY3JvbGwgPSBmdW5jdGlvbiAoZSkge1xuICAgIGlmICgkKHdpbmRvdykuc2Nyb2xsVG9wKCkgPiBuYXZPZmZzZXQpIHtcbiAgICAgICRuYXYuYWRkQ2xhc3MoJ2ZpeGVkJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICRuYXYucmVtb3ZlQ2xhc3MoJ2ZpeGVkJyk7XG4gICAgfVxuICB9O1xuICB2YXIgd2luZG93UmVzaXplID0gZnVuY3Rpb24gKGUpIHtcbiAgICBuYXZPZmZzZXQgPSAkKHNlcXVlbmNlc1swXS5lbGVtKS5vZmZzZXQoKS50b3A7XG4gIH07XG4gICQod2luZG93KS5vbignc2Nyb2xsJywgd2luZG93U2Nyb2xsKTtcbiAgJCh3aW5kb3cpLm9uKCdyZXNpemUnLCB3aW5kb3dSZXNpemUpO1xuICAkKGRvY3VtZW50KS5yZWFkeSh3aW5kb3dTY3JvbGwpO1xuXG4gIHZhciBzY3JvbGxUb0VsZW1lbnQgPSBmdW5jdGlvbihlbGVtZW50LCBvZmZzZXQpIHtcbiAgICAkKGVsZW1lbnQpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcbiAgICAgIHZhciBlbGVtZW50Q2xpY2sgPSAkKHRoaXMpLmF0dHIoXCJocmVmXCIpO1xuICAgICAgdmFyIGRlc3RpbmF0aW9uICA9ICQoZWxlbWVudENsaWNrKVswXS5vZmZzZXRUb3A7XG4gICAgICBpZihkZXN0aW5hdGlvbiA8IDApIHtkZXN0aW5hdGlvbiA9IDA7fVxuICAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe3Njcm9sbFRvcDogZGVzdGluYXRpb24gLSBvZmZzZXR9LCBcInNsb3dcIik7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSk7XG4gIH1cblxuICBzY3JvbGxUb0VsZW1lbnQoXCIubmF2IGFbaHJlZj0nI3RvZGRsZXInXVwiLCAwKTtcbiAgc2Nyb2xsVG9FbGVtZW50KFwiLm5hdiBhW2hyZWY9JyNwcmltYXJ5J11cIiwgMCk7XG4gIHNjcm9sbFRvRWxlbWVudChcIi5uYXYgYVtocmVmPScjb3VydGVhbSddXCIsIDUwKTtcbiAgc2Nyb2xsVG9FbGVtZW50KFwiLm5hdiBhW2hyZWY9JyNjYWJpbmV0J11cIiwgNjApO1xuICBzY3JvbGxUb0VsZW1lbnQoXCIubmF2IGFbaHJlZj0nI2xvY2F0aW9uJ11cIiwgNjApO1xuXG4gIHNjcm9sbFRvRWxlbWVudChcIi5zaWRlbmF2IGFbaHJlZj0nI3RvZGRsZXInXVwiLCAwKTtcbiAgc2Nyb2xsVG9FbGVtZW50KFwiLnNpZGVuYXYgYVtocmVmPScjcHJpbWFyeSddXCIsIDApO1xuICBzY3JvbGxUb0VsZW1lbnQoXCIuc2lkZW5hdiBhW2hyZWY9JyNvdXJ0ZWFtJ11cIiwgMCk7XG4gIHNjcm9sbFRvRWxlbWVudChcIi5zaWRlbmF2IGFbaHJlZj0nI2NhYmluZXQnXVwiLCAxMCk7XG4gIHNjcm9sbFRvRWxlbWVudChcIi5zaWRlbmF2IGFbaHJlZj0nI2xvY2F0aW9uJ11cIiwgMTApO1xuXG4gIHZhciBzaWRlTmF2T3BlbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvcGVuU2lkZW5hdicpO1xuICB2YXIgc2lkZU5hdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaWRlbmF2Jyk7XG4gIHZhciBjbG9zZWJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbG9zZWJ0bicpO1xuICBzaWRlTmF2T3Blbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHNpZGVOYXYuc3R5bGUud2lkdGggPSAnMjUwcHgnO1xuICB9KTtcbiAgY2xvc2VidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBzaWRlTmF2LnN0eWxlLndpZHRoID0gJzAnO1xuICB9KTtcbiAgJCgnI3NpZGVuYXYgYScpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgJChjbG9zZWJ0bikudHJpZ2dlcignY2xpY2snKTtcbiAgfSk7XG5cbiAgcGFnZUZvcm1zKCk7XG59O1xuIiwiLyohXG4gKiBqUXVlcnkgRm9ybSBQbHVnaW5cbiAqIHZlcnNpb246IDMuNTEuMC0yMDE0LjA2LjIwXG4gKiBSZXF1aXJlcyBqUXVlcnkgdjEuNSBvciBsYXRlclxuICogQ29weXJpZ2h0IChjKSAyMDE0IE0uIEFsc3VwXG4gKiBFeGFtcGxlcyBhbmQgZG9jdW1lbnRhdGlvbiBhdDogaHR0cDovL21hbHN1cC5jb20vanF1ZXJ5L2Zvcm0vXG4gKiBQcm9qZWN0IHJlcG9zaXRvcnk6IGh0dHBzOi8vZ2l0aHViLmNvbS9tYWxzdXAvZm9ybVxuICogRHVhbCBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGFuZCBHUEwgbGljZW5zZXMuXG4gKiBodHRwczovL2dpdGh1Yi5jb20vbWFsc3VwL2Zvcm0jY29weXJpZ2h0LWFuZC1saWNlbnNlXG4gKi9cbi8qZ2xvYmFsIEFjdGl2ZVhPYmplY3QgKi9cblxuLy8gQU1EIHN1cHBvcnRcbihmdW5jdGlvbiAoZmFjdG9yeSkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuICAgIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICAgICAgLy8gdXNpbmcgQU1EOyByZWdpc3RlciBhcyBhbm9uIG1vZHVsZVxuICAgICAgICBkZWZpbmUoWydqcXVlcnknXSwgZmFjdG9yeSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gbm8gQU1EOyBpbnZva2UgZGlyZWN0bHlcbiAgICAgICAgZmFjdG9yeSggKHR5cGVvZihqUXVlcnkpICE9ICd1bmRlZmluZWQnKSA/IGpRdWVyeSA6IHdpbmRvdy5aZXB0byApO1xuICAgIH1cbn1cblxuKGZ1bmN0aW9uKCQpIHtcblwidXNlIHN0cmljdFwiO1xuXG4vKlxuICAgIFVzYWdlIE5vdGU6XG4gICAgLS0tLS0tLS0tLS1cbiAgICBEbyBub3QgdXNlIGJvdGggYWpheFN1Ym1pdCBhbmQgYWpheEZvcm0gb24gdGhlIHNhbWUgZm9ybS4gIFRoZXNlXG4gICAgZnVuY3Rpb25zIGFyZSBtdXR1YWxseSBleGNsdXNpdmUuICBVc2UgYWpheFN1Ym1pdCBpZiB5b3Ugd2FudFxuICAgIHRvIGJpbmQgeW91ciBvd24gc3VibWl0IGhhbmRsZXIgdG8gdGhlIGZvcm0uICBGb3IgZXhhbXBsZSxcblxuICAgICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuICAgICAgICAkKCcjbXlGb3JtJykub24oJ3N1Ym1pdCcsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTsgLy8gPC0tIGltcG9ydGFudFxuICAgICAgICAgICAgJCh0aGlzKS5hamF4U3VibWl0KHtcbiAgICAgICAgICAgICAgICB0YXJnZXQ6ICcjb3V0cHV0J1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgVXNlIGFqYXhGb3JtIHdoZW4geW91IHdhbnQgdGhlIHBsdWdpbiB0byBtYW5hZ2UgYWxsIHRoZSBldmVudCBiaW5kaW5nXG4gICAgZm9yIHlvdS4gIEZvciBleGFtcGxlLFxuXG4gICAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG4gICAgICAgICQoJyNteUZvcm0nKS5hamF4Rm9ybSh7XG4gICAgICAgICAgICB0YXJnZXQ6ICcjb3V0cHV0J1xuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIFlvdSBjYW4gYWxzbyB1c2UgYWpheEZvcm0gd2l0aCBkZWxlZ2F0aW9uIChyZXF1aXJlcyBqUXVlcnkgdjEuNyspLCBzbyB0aGVcbiAgICBmb3JtIGRvZXMgbm90IGhhdmUgdG8gZXhpc3Qgd2hlbiB5b3UgaW52b2tlIGFqYXhGb3JtOlxuXG4gICAgJCgnI215Rm9ybScpLmFqYXhGb3JtKHtcbiAgICAgICAgZGVsZWdhdGlvbjogdHJ1ZSxcbiAgICAgICAgdGFyZ2V0OiAnI291dHB1dCdcbiAgICB9KTtcblxuICAgIFdoZW4gdXNpbmcgYWpheEZvcm0sIHRoZSBhamF4U3VibWl0IGZ1bmN0aW9uIHdpbGwgYmUgaW52b2tlZCBmb3IgeW91XG4gICAgYXQgdGhlIGFwcHJvcHJpYXRlIHRpbWUuXG4qL1xuXG4vKipcbiAqIEZlYXR1cmUgZGV0ZWN0aW9uXG4gKi9cbnZhciBmZWF0dXJlID0ge307XG5mZWF0dXJlLmZpbGVhcGkgPSAkKFwiPGlucHV0IHR5cGU9J2ZpbGUnLz5cIikuZ2V0KDApLmZpbGVzICE9PSB1bmRlZmluZWQ7XG5mZWF0dXJlLmZvcm1kYXRhID0gd2luZG93LkZvcm1EYXRhICE9PSB1bmRlZmluZWQ7XG5cbnZhciBoYXNQcm9wID0gISEkLmZuLnByb3A7XG5cbi8vIGF0dHIyIHVzZXMgcHJvcCB3aGVuIGl0IGNhbiBidXQgY2hlY2tzIHRoZSByZXR1cm4gdHlwZSBmb3Jcbi8vIGFuIGV4cGVjdGVkIHN0cmluZy4gIHRoaXMgYWNjb3VudHMgZm9yIHRoZSBjYXNlIHdoZXJlIGEgZm9ybSBcbi8vIGNvbnRhaW5zIGlucHV0cyB3aXRoIG5hbWVzIGxpa2UgXCJhY3Rpb25cIiBvciBcIm1ldGhvZFwiOyBpbiB0aG9zZVxuLy8gY2FzZXMgXCJwcm9wXCIgcmV0dXJucyB0aGUgZWxlbWVudFxuJC5mbi5hdHRyMiA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICggISBoYXNQcm9wICkge1xuICAgICAgICByZXR1cm4gdGhpcy5hdHRyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICAgIHZhciB2YWwgPSB0aGlzLnByb3AuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICBpZiAoICggdmFsICYmIHZhbC5qcXVlcnkgKSB8fCB0eXBlb2YgdmFsID09PSAnc3RyaW5nJyApIHtcbiAgICAgICAgcmV0dXJuIHZhbDtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuYXR0ci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcblxuLyoqXG4gKiBhamF4U3VibWl0KCkgcHJvdmlkZXMgYSBtZWNoYW5pc20gZm9yIGltbWVkaWF0ZWx5IHN1Ym1pdHRpbmdcbiAqIGFuIEhUTUwgZm9ybSB1c2luZyBBSkFYLlxuICovXG4kLmZuLmFqYXhTdWJtaXQgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgLypqc2hpbnQgc2NyaXB0dXJsOnRydWUgKi9cblxuICAgIC8vIGZhc3QgZmFpbCBpZiBub3RoaW5nIHNlbGVjdGVkIChodHRwOi8vZGV2LmpxdWVyeS5jb20vdGlja2V0LzI3NTIpXG4gICAgaWYgKCF0aGlzLmxlbmd0aCkge1xuICAgICAgICBsb2coJ2FqYXhTdWJtaXQ6IHNraXBwaW5nIHN1Ym1pdCBwcm9jZXNzIC0gbm8gZWxlbWVudCBzZWxlY3RlZCcpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICB2YXIgbWV0aG9kLCBhY3Rpb24sIHVybCwgJGZvcm0gPSB0aGlzO1xuXG4gICAgaWYgKHR5cGVvZiBvcHRpb25zID09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgb3B0aW9ucyA9IHsgc3VjY2Vzczogb3B0aW9ucyB9O1xuICAgIH1cbiAgICBlbHNlIGlmICggb3B0aW9ucyA9PT0gdW5kZWZpbmVkICkge1xuICAgICAgICBvcHRpb25zID0ge307XG4gICAgfVxuXG4gICAgbWV0aG9kID0gb3B0aW9ucy50eXBlIHx8IHRoaXMuYXR0cjIoJ21ldGhvZCcpO1xuICAgIGFjdGlvbiA9IG9wdGlvbnMudXJsICB8fCB0aGlzLmF0dHIyKCdhY3Rpb24nKTtcblxuICAgIHVybCA9ICh0eXBlb2YgYWN0aW9uID09PSAnc3RyaW5nJykgPyAkLnRyaW0oYWN0aW9uKSA6ICcnO1xuICAgIHVybCA9IHVybCB8fCB3aW5kb3cubG9jYXRpb24uaHJlZiB8fCAnJztcbiAgICBpZiAodXJsKSB7XG4gICAgICAgIC8vIGNsZWFuIHVybCAoZG9uJ3QgaW5jbHVkZSBoYXNoIHZhdWUpXG4gICAgICAgIHVybCA9ICh1cmwubWF0Y2goL14oW14jXSspLyl8fFtdKVsxXTtcbiAgICB9XG5cbiAgICBvcHRpb25zID0gJC5leHRlbmQodHJ1ZSwge1xuICAgICAgICB1cmw6ICB1cmwsXG4gICAgICAgIHN1Y2Nlc3M6ICQuYWpheFNldHRpbmdzLnN1Y2Nlc3MsXG4gICAgICAgIHR5cGU6IG1ldGhvZCB8fCAkLmFqYXhTZXR0aW5ncy50eXBlLFxuICAgICAgICBpZnJhbWVTcmM6IC9eaHR0cHMvaS50ZXN0KHdpbmRvdy5sb2NhdGlvbi5ocmVmIHx8ICcnKSA/ICdqYXZhc2NyaXB0OmZhbHNlJyA6ICdhYm91dDpibGFuaydcbiAgICB9LCBvcHRpb25zKTtcblxuICAgIC8vIGhvb2sgZm9yIG1hbmlwdWxhdGluZyB0aGUgZm9ybSBkYXRhIGJlZm9yZSBpdCBpcyBleHRyYWN0ZWQ7XG4gICAgLy8gY29udmVuaWVudCBmb3IgdXNlIHdpdGggcmljaCBlZGl0b3JzIGxpa2UgdGlueU1DRSBvciBGQ0tFZGl0b3JcbiAgICB2YXIgdmV0byA9IHt9O1xuICAgIHRoaXMudHJpZ2dlcignZm9ybS1wcmUtc2VyaWFsaXplJywgW3RoaXMsIG9wdGlvbnMsIHZldG9dKTtcbiAgICBpZiAodmV0by52ZXRvKSB7XG4gICAgICAgIGxvZygnYWpheFN1Ym1pdDogc3VibWl0IHZldG9lZCB2aWEgZm9ybS1wcmUtc2VyaWFsaXplIHRyaWdnZXInKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLy8gcHJvdmlkZSBvcHBvcnR1bml0eSB0byBhbHRlciBmb3JtIGRhdGEgYmVmb3JlIGl0IGlzIHNlcmlhbGl6ZWRcbiAgICBpZiAob3B0aW9ucy5iZWZvcmVTZXJpYWxpemUgJiYgb3B0aW9ucy5iZWZvcmVTZXJpYWxpemUodGhpcywgb3B0aW9ucykgPT09IGZhbHNlKSB7XG4gICAgICAgIGxvZygnYWpheFN1Ym1pdDogc3VibWl0IGFib3J0ZWQgdmlhIGJlZm9yZVNlcmlhbGl6ZSBjYWxsYmFjaycpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICB2YXIgdHJhZGl0aW9uYWwgPSBvcHRpb25zLnRyYWRpdGlvbmFsO1xuICAgIGlmICggdHJhZGl0aW9uYWwgPT09IHVuZGVmaW5lZCApIHtcbiAgICAgICAgdHJhZGl0aW9uYWwgPSAkLmFqYXhTZXR0aW5ncy50cmFkaXRpb25hbDtcbiAgICB9XG5cbiAgICB2YXIgZWxlbWVudHMgPSBbXTtcbiAgICB2YXIgcXgsIGEgPSB0aGlzLmZvcm1Ub0FycmF5KG9wdGlvbnMuc2VtYW50aWMsIGVsZW1lbnRzKTtcbiAgICBpZiAob3B0aW9ucy5kYXRhKSB7XG4gICAgICAgIG9wdGlvbnMuZXh0cmFEYXRhID0gb3B0aW9ucy5kYXRhO1xuICAgICAgICBxeCA9ICQucGFyYW0ob3B0aW9ucy5kYXRhLCB0cmFkaXRpb25hbCk7XG4gICAgfVxuXG4gICAgLy8gZ2l2ZSBwcmUtc3VibWl0IGNhbGxiYWNrIGFuIG9wcG9ydHVuaXR5IHRvIGFib3J0IHRoZSBzdWJtaXRcbiAgICBpZiAob3B0aW9ucy5iZWZvcmVTdWJtaXQgJiYgb3B0aW9ucy5iZWZvcmVTdWJtaXQoYSwgdGhpcywgb3B0aW9ucykgPT09IGZhbHNlKSB7XG4gICAgICAgIGxvZygnYWpheFN1Ym1pdDogc3VibWl0IGFib3J0ZWQgdmlhIGJlZm9yZVN1Ym1pdCBjYWxsYmFjaycpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvLyBmaXJlIHZldG9hYmxlICd2YWxpZGF0ZScgZXZlbnRcbiAgICB0aGlzLnRyaWdnZXIoJ2Zvcm0tc3VibWl0LXZhbGlkYXRlJywgW2EsIHRoaXMsIG9wdGlvbnMsIHZldG9dKTtcbiAgICBpZiAodmV0by52ZXRvKSB7XG4gICAgICAgIGxvZygnYWpheFN1Ym1pdDogc3VibWl0IHZldG9lZCB2aWEgZm9ybS1zdWJtaXQtdmFsaWRhdGUgdHJpZ2dlcicpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICB2YXIgcSA9ICQucGFyYW0oYSwgdHJhZGl0aW9uYWwpO1xuICAgIGlmIChxeCkge1xuICAgICAgICBxID0gKCBxID8gKHEgKyAnJicgKyBxeCkgOiBxeCApO1xuICAgIH1cbiAgICBpZiAob3B0aW9ucy50eXBlLnRvVXBwZXJDYXNlKCkgPT0gJ0dFVCcpIHtcbiAgICAgICAgb3B0aW9ucy51cmwgKz0gKG9wdGlvbnMudXJsLmluZGV4T2YoJz8nKSA+PSAwID8gJyYnIDogJz8nKSArIHE7XG4gICAgICAgIG9wdGlvbnMuZGF0YSA9IG51bGw7ICAvLyBkYXRhIGlzIG51bGwgZm9yICdnZXQnXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBvcHRpb25zLmRhdGEgPSBxOyAvLyBkYXRhIGlzIHRoZSBxdWVyeSBzdHJpbmcgZm9yICdwb3N0J1xuICAgIH1cblxuICAgIHZhciBjYWxsYmFja3MgPSBbXTtcbiAgICBpZiAob3B0aW9ucy5yZXNldEZvcm0pIHtcbiAgICAgICAgY2FsbGJhY2tzLnB1c2goZnVuY3Rpb24oKSB7ICRmb3JtLnJlc2V0Rm9ybSgpOyB9KTtcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMuY2xlYXJGb3JtKSB7XG4gICAgICAgIGNhbGxiYWNrcy5wdXNoKGZ1bmN0aW9uKCkgeyAkZm9ybS5jbGVhckZvcm0ob3B0aW9ucy5pbmNsdWRlSGlkZGVuKTsgfSk7XG4gICAgfVxuXG4gICAgLy8gcGVyZm9ybSBhIGxvYWQgb24gdGhlIHRhcmdldCBvbmx5IGlmIGRhdGFUeXBlIGlzIG5vdCBwcm92aWRlZFxuICAgIGlmICghb3B0aW9ucy5kYXRhVHlwZSAmJiBvcHRpb25zLnRhcmdldCkge1xuICAgICAgICB2YXIgb2xkU3VjY2VzcyA9IG9wdGlvbnMuc3VjY2VzcyB8fCBmdW5jdGlvbigpe307XG4gICAgICAgIGNhbGxiYWNrcy5wdXNoKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgIHZhciBmbiA9IG9wdGlvbnMucmVwbGFjZVRhcmdldCA/ICdyZXBsYWNlV2l0aCcgOiAnaHRtbCc7XG4gICAgICAgICAgICAkKG9wdGlvbnMudGFyZ2V0KVtmbl0oZGF0YSkuZWFjaChvbGRTdWNjZXNzLCBhcmd1bWVudHMpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZWxzZSBpZiAob3B0aW9ucy5zdWNjZXNzKSB7XG4gICAgICAgIGNhbGxiYWNrcy5wdXNoKG9wdGlvbnMuc3VjY2Vzcyk7XG4gICAgfVxuXG4gICAgb3B0aW9ucy5zdWNjZXNzID0gZnVuY3Rpb24oZGF0YSwgc3RhdHVzLCB4aHIpIHsgLy8galF1ZXJ5IDEuNCsgcGFzc2VzIHhociBhcyAzcmQgYXJnXG4gICAgICAgIHZhciBjb250ZXh0ID0gb3B0aW9ucy5jb250ZXh0IHx8IHRoaXMgOyAgICAvLyBqUXVlcnkgMS40KyBzdXBwb3J0cyBzY29wZSBjb250ZXh0XG4gICAgICAgIGZvciAodmFyIGk9MCwgbWF4PWNhbGxiYWNrcy5sZW5ndGg7IGkgPCBtYXg7IGkrKykge1xuICAgICAgICAgICAgY2FsbGJhY2tzW2ldLmFwcGx5KGNvbnRleHQsIFtkYXRhLCBzdGF0dXMsIHhociB8fCAkZm9ybSwgJGZvcm1dKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBpZiAob3B0aW9ucy5lcnJvcikge1xuICAgICAgICB2YXIgb2xkRXJyb3IgPSBvcHRpb25zLmVycm9yO1xuICAgICAgICBvcHRpb25zLmVycm9yID0gZnVuY3Rpb24oeGhyLCBzdGF0dXMsIGVycm9yKSB7XG4gICAgICAgICAgICB2YXIgY29udGV4dCA9IG9wdGlvbnMuY29udGV4dCB8fCB0aGlzO1xuICAgICAgICAgICAgb2xkRXJyb3IuYXBwbHkoY29udGV4dCwgW3hociwgc3RhdHVzLCBlcnJvciwgJGZvcm1dKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAgaWYgKG9wdGlvbnMuY29tcGxldGUpIHtcbiAgICAgICAgdmFyIG9sZENvbXBsZXRlID0gb3B0aW9ucy5jb21wbGV0ZTtcbiAgICAgICAgb3B0aW9ucy5jb21wbGV0ZSA9IGZ1bmN0aW9uKHhociwgc3RhdHVzKSB7XG4gICAgICAgICAgICB2YXIgY29udGV4dCA9IG9wdGlvbnMuY29udGV4dCB8fCB0aGlzO1xuICAgICAgICAgICAgb2xkQ29tcGxldGUuYXBwbHkoY29udGV4dCwgW3hociwgc3RhdHVzLCAkZm9ybV0pO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8vIGFyZSB0aGVyZSBmaWxlcyB0byB1cGxvYWQ/XG5cbiAgICAvLyBbdmFsdWVdIChpc3N1ZSAjMTEzKSwgYWxzbyBzZWUgY29tbWVudDpcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vbWFsc3VwL2Zvcm0vY29tbWl0LzU4ODMwNmFlZGJhMWRlMDEzODgwMzJkNWY0MmE2MDE1OWVlYTkyMjgjY29tbWl0Y29tbWVudC0yMTgwMjE5XG4gICAgdmFyIGZpbGVJbnB1dHMgPSAkKCdpbnB1dFt0eXBlPWZpbGVdOmVuYWJsZWQnLCB0aGlzKS5maWx0ZXIoZnVuY3Rpb24oKSB7IHJldHVybiAkKHRoaXMpLnZhbCgpICE9PSAnJzsgfSk7XG5cbiAgICB2YXIgaGFzRmlsZUlucHV0cyA9IGZpbGVJbnB1dHMubGVuZ3RoID4gMDtcbiAgICB2YXIgbXAgPSAnbXVsdGlwYXJ0L2Zvcm0tZGF0YSc7XG4gICAgdmFyIG11bHRpcGFydCA9ICgkZm9ybS5hdHRyKCdlbmN0eXBlJykgPT0gbXAgfHwgJGZvcm0uYXR0cignZW5jb2RpbmcnKSA9PSBtcCk7XG5cbiAgICB2YXIgZmlsZUFQSSA9IGZlYXR1cmUuZmlsZWFwaSAmJiBmZWF0dXJlLmZvcm1kYXRhO1xuICAgIGxvZyhcImZpbGVBUEkgOlwiICsgZmlsZUFQSSk7XG4gICAgdmFyIHNob3VsZFVzZUZyYW1lID0gKGhhc0ZpbGVJbnB1dHMgfHwgbXVsdGlwYXJ0KSAmJiAhZmlsZUFQSTtcblxuICAgIHZhciBqcXhocjtcblxuICAgIC8vIG9wdGlvbnMuaWZyYW1lIGFsbG93cyB1c2VyIHRvIGZvcmNlIGlmcmFtZSBtb2RlXG4gICAgLy8gMDYtTk9WLTA5OiBub3cgZGVmYXVsdGluZyB0byBpZnJhbWUgbW9kZSBpZiBmaWxlIGlucHV0IGlzIGRldGVjdGVkXG4gICAgaWYgKG9wdGlvbnMuaWZyYW1lICE9PSBmYWxzZSAmJiAob3B0aW9ucy5pZnJhbWUgfHwgc2hvdWxkVXNlRnJhbWUpKSB7XG4gICAgICAgIC8vIGhhY2sgdG8gZml4IFNhZmFyaSBoYW5nICh0aGFua3MgdG8gVGltIE1vbGVuZGlqayBmb3IgdGhpcylcbiAgICAgICAgLy8gc2VlOiAgaHR0cDovL2dyb3Vwcy5nb29nbGUuY29tL2dyb3VwL2pxdWVyeS1kZXYvYnJvd3NlX3RocmVhZC90aHJlYWQvMzYzOTViN2FiNTEwZGQ1ZFxuICAgICAgICBpZiAob3B0aW9ucy5jbG9zZUtlZXBBbGl2ZSkge1xuICAgICAgICAgICAgJC5nZXQob3B0aW9ucy5jbG9zZUtlZXBBbGl2ZSwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAganF4aHIgPSBmaWxlVXBsb2FkSWZyYW1lKGEpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBqcXhociA9IGZpbGVVcGxvYWRJZnJhbWUoYSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoKGhhc0ZpbGVJbnB1dHMgfHwgbXVsdGlwYXJ0KSAmJiBmaWxlQVBJKSB7XG4gICAgICAgIGpxeGhyID0gZmlsZVVwbG9hZFhocihhKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGpxeGhyID0gJC5hamF4KG9wdGlvbnMpO1xuICAgIH1cblxuICAgICRmb3JtLnJlbW92ZURhdGEoJ2pxeGhyJykuZGF0YSgnanF4aHInLCBqcXhocik7XG5cbiAgICAvLyBjbGVhciBlbGVtZW50IGFycmF5XG4gICAgZm9yICh2YXIgaz0wOyBrIDwgZWxlbWVudHMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgZWxlbWVudHNba10gPSBudWxsO1xuICAgIH1cblxuICAgIC8vIGZpcmUgJ25vdGlmeScgZXZlbnRcbiAgICB0aGlzLnRyaWdnZXIoJ2Zvcm0tc3VibWl0LW5vdGlmeScsIFt0aGlzLCBvcHRpb25zXSk7XG4gICAgcmV0dXJuIHRoaXM7XG5cbiAgICAvLyB1dGlsaXR5IGZuIGZvciBkZWVwIHNlcmlhbGl6YXRpb25cbiAgICBmdW5jdGlvbiBkZWVwU2VyaWFsaXplKGV4dHJhRGF0YSl7XG4gICAgICAgIHZhciBzZXJpYWxpemVkID0gJC5wYXJhbShleHRyYURhdGEsIG9wdGlvbnMudHJhZGl0aW9uYWwpLnNwbGl0KCcmJyk7XG4gICAgICAgIHZhciBsZW4gPSBzZXJpYWxpemVkLmxlbmd0aDtcbiAgICAgICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgICAgICB2YXIgaSwgcGFydDtcbiAgICAgICAgZm9yIChpPTA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgLy8gIzI1MjsgdW5kbyBwYXJhbSBzcGFjZSByZXBsYWNlbWVudFxuICAgICAgICAgICAgc2VyaWFsaXplZFtpXSA9IHNlcmlhbGl6ZWRbaV0ucmVwbGFjZSgvXFwrL2csJyAnKTtcbiAgICAgICAgICAgIHBhcnQgPSBzZXJpYWxpemVkW2ldLnNwbGl0KCc9Jyk7XG4gICAgICAgICAgICAvLyAjMjc4OyB1c2UgYXJyYXkgaW5zdGVhZCBvZiBvYmplY3Qgc3RvcmFnZSwgZmF2b3JpbmcgYXJyYXkgc2VyaWFsaXphdGlvbnNcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKFtkZWNvZGVVUklDb21wb25lbnQocGFydFswXSksIGRlY29kZVVSSUNvbXBvbmVudChwYXJ0WzFdKV0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgIC8vIFhNTEh0dHBSZXF1ZXN0IExldmVsIDIgZmlsZSB1cGxvYWRzIChiaWcgaGF0IHRpcCB0byBmcmFuY29pczJtZXR6KVxuICAgIGZ1bmN0aW9uIGZpbGVVcGxvYWRYaHIoYSkge1xuICAgICAgICB2YXIgZm9ybWRhdGEgPSBuZXcgRm9ybURhdGEoKTtcblxuICAgICAgICBmb3IgKHZhciBpPTA7IGkgPCBhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBmb3JtZGF0YS5hcHBlbmQoYVtpXS5uYW1lLCBhW2ldLnZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvcHRpb25zLmV4dHJhRGF0YSkge1xuICAgICAgICAgICAgdmFyIHNlcmlhbGl6ZWREYXRhID0gZGVlcFNlcmlhbGl6ZShvcHRpb25zLmV4dHJhRGF0YSk7XG4gICAgICAgICAgICBmb3IgKGk9MDsgaSA8IHNlcmlhbGl6ZWREYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNlcmlhbGl6ZWREYXRhW2ldKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvcm1kYXRhLmFwcGVuZChzZXJpYWxpemVkRGF0YVtpXVswXSwgc2VyaWFsaXplZERhdGFbaV1bMV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIG9wdGlvbnMuZGF0YSA9IG51bGw7XG5cbiAgICAgICAgdmFyIHMgPSAkLmV4dGVuZCh0cnVlLCB7fSwgJC5hamF4U2V0dGluZ3MsIG9wdGlvbnMsIHtcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcbiAgICAgICAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcbiAgICAgICAgICAgIGNhY2hlOiBmYWxzZSxcbiAgICAgICAgICAgIHR5cGU6IG1ldGhvZCB8fCAnUE9TVCdcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKG9wdGlvbnMudXBsb2FkUHJvZ3Jlc3MpIHtcbiAgICAgICAgICAgIC8vIHdvcmthcm91bmQgYmVjYXVzZSBqcVhIUiBkb2VzIG5vdCBleHBvc2UgdXBsb2FkIHByb3BlcnR5XG4gICAgICAgICAgICBzLnhociA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHZhciB4aHIgPSAkLmFqYXhTZXR0aW5ncy54aHIoKTtcbiAgICAgICAgICAgICAgICBpZiAoeGhyLnVwbG9hZCkge1xuICAgICAgICAgICAgICAgICAgICB4aHIudXBsb2FkLmFkZEV2ZW50TGlzdGVuZXIoJ3Byb2dyZXNzJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwZXJjZW50ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwb3NpdGlvbiA9IGV2ZW50LmxvYWRlZCB8fCBldmVudC5wb3NpdGlvbjsgLypldmVudC5wb3NpdGlvbiBpcyBkZXByZWNhdGVkKi9cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0b3RhbCA9IGV2ZW50LnRvdGFsO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50Lmxlbmd0aENvbXB1dGFibGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwZXJjZW50ID0gTWF0aC5jZWlsKHBvc2l0aW9uIC8gdG90YWwgKiAxMDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy51cGxvYWRQcm9ncmVzcyhldmVudCwgcG9zaXRpb24sIHRvdGFsLCBwZXJjZW50KTtcbiAgICAgICAgICAgICAgICAgICAgfSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4geGhyO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIHMuZGF0YSA9IG51bGw7XG4gICAgICAgIHZhciBiZWZvcmVTZW5kID0gcy5iZWZvcmVTZW5kO1xuICAgICAgICBzLmJlZm9yZVNlbmQgPSBmdW5jdGlvbih4aHIsIG8pIHtcbiAgICAgICAgICAgIC8vU2VuZCBGb3JtRGF0YSgpIHByb3ZpZGVkIGJ5IHVzZXJcbiAgICAgICAgICAgIGlmIChvcHRpb25zLmZvcm1EYXRhKSB7XG4gICAgICAgICAgICAgICAgby5kYXRhID0gb3B0aW9ucy5mb3JtRGF0YTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIG8uZGF0YSA9IGZvcm1kYXRhO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoYmVmb3JlU2VuZCkge1xuICAgICAgICAgICAgICAgIGJlZm9yZVNlbmQuY2FsbCh0aGlzLCB4aHIsIG8pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gJC5hamF4KHMpO1xuICAgIH1cblxuICAgIC8vIHByaXZhdGUgZnVuY3Rpb24gZm9yIGhhbmRsaW5nIGZpbGUgdXBsb2FkcyAoaGF0IHRpcCB0byBZQUhPTyEpXG4gICAgZnVuY3Rpb24gZmlsZVVwbG9hZElmcmFtZShhKSB7XG4gICAgICAgIHZhciBmb3JtID0gJGZvcm1bMF0sIGVsLCBpLCBzLCBnLCBpZCwgJGlvLCBpbywgeGhyLCBzdWIsIG4sIHRpbWVkT3V0LCB0aW1lb3V0SGFuZGxlO1xuICAgICAgICB2YXIgZGVmZXJyZWQgPSAkLkRlZmVycmVkKCk7XG5cbiAgICAgICAgLy8gIzM0MVxuICAgICAgICBkZWZlcnJlZC5hYm9ydCA9IGZ1bmN0aW9uKHN0YXR1cykge1xuICAgICAgICAgICAgeGhyLmFib3J0KHN0YXR1cyk7XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKGEpIHtcbiAgICAgICAgICAgIC8vIGVuc3VyZSB0aGF0IGV2ZXJ5IHNlcmlhbGl6ZWQgaW5wdXQgaXMgc3RpbGwgZW5hYmxlZFxuICAgICAgICAgICAgZm9yIChpPTA7IGkgPCBlbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGVsID0gJChlbGVtZW50c1tpXSk7XG4gICAgICAgICAgICAgICAgaWYgKCBoYXNQcm9wICkge1xuICAgICAgICAgICAgICAgICAgICBlbC5wcm9wKCdkaXNhYmxlZCcsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUF0dHIoJ2Rpc2FibGVkJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcyA9ICQuZXh0ZW5kKHRydWUsIHt9LCAkLmFqYXhTZXR0aW5ncywgb3B0aW9ucyk7XG4gICAgICAgIHMuY29udGV4dCA9IHMuY29udGV4dCB8fCBzO1xuICAgICAgICBpZCA9ICdqcUZvcm1JTycgKyAobmV3IERhdGUoKS5nZXRUaW1lKCkpO1xuICAgICAgICBpZiAocy5pZnJhbWVUYXJnZXQpIHtcbiAgICAgICAgICAgICRpbyA9ICQocy5pZnJhbWVUYXJnZXQpO1xuICAgICAgICAgICAgbiA9ICRpby5hdHRyMignbmFtZScpO1xuICAgICAgICAgICAgaWYgKCFuKSB7XG4gICAgICAgICAgICAgICAgJGlvLmF0dHIyKCduYW1lJywgaWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWQgPSBuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgJGlvID0gJCgnPGlmcmFtZSBuYW1lPVwiJyArIGlkICsgJ1wiIHNyYz1cIicrIHMuaWZyYW1lU3JjICsnXCIgLz4nKTtcbiAgICAgICAgICAgICRpby5jc3MoeyBwb3NpdGlvbjogJ2Fic29sdXRlJywgdG9wOiAnLTEwMDBweCcsIGxlZnQ6ICctMTAwMHB4JyB9KTtcbiAgICAgICAgfVxuICAgICAgICBpbyA9ICRpb1swXTtcblxuXG4gICAgICAgIHhociA9IHsgLy8gbW9jayBvYmplY3RcbiAgICAgICAgICAgIGFib3J0ZWQ6IDAsXG4gICAgICAgICAgICByZXNwb25zZVRleHQ6IG51bGwsXG4gICAgICAgICAgICByZXNwb25zZVhNTDogbnVsbCxcbiAgICAgICAgICAgIHN0YXR1czogMCxcbiAgICAgICAgICAgIHN0YXR1c1RleHQ6ICduL2EnLFxuICAgICAgICAgICAgZ2V0QWxsUmVzcG9uc2VIZWFkZXJzOiBmdW5jdGlvbigpIHt9LFxuICAgICAgICAgICAgZ2V0UmVzcG9uc2VIZWFkZXI6IGZ1bmN0aW9uKCkge30sXG4gICAgICAgICAgICBzZXRSZXF1ZXN0SGVhZGVyOiBmdW5jdGlvbigpIHt9LFxuICAgICAgICAgICAgYWJvcnQ6IGZ1bmN0aW9uKHN0YXR1cykge1xuICAgICAgICAgICAgICAgIHZhciBlID0gKHN0YXR1cyA9PT0gJ3RpbWVvdXQnID8gJ3RpbWVvdXQnIDogJ2Fib3J0ZWQnKTtcbiAgICAgICAgICAgICAgICBsb2coJ2Fib3J0aW5nIHVwbG9hZC4uLiAnICsgZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5hYm9ydGVkID0gMTtcblxuICAgICAgICAgICAgICAgIHRyeSB7IC8vICMyMTQsICMyNTdcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlvLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQuZXhlY0NvbW1hbmQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlvLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ1N0b3AnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaChpZ25vcmUpIHt9XG5cbiAgICAgICAgICAgICAgICAkaW8uYXR0cignc3JjJywgcy5pZnJhbWVTcmMpOyAvLyBhYm9ydCBvcCBpbiBwcm9ncmVzc1xuICAgICAgICAgICAgICAgIHhoci5lcnJvciA9IGU7XG4gICAgICAgICAgICAgICAgaWYgKHMuZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgcy5lcnJvci5jYWxsKHMuY29udGV4dCwgeGhyLCBlLCBzdGF0dXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZykge1xuICAgICAgICAgICAgICAgICAgICAkLmV2ZW50LnRyaWdnZXIoXCJhamF4RXJyb3JcIiwgW3hociwgcywgZV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAocy5jb21wbGV0ZSkge1xuICAgICAgICAgICAgICAgICAgICBzLmNvbXBsZXRlLmNhbGwocy5jb250ZXh0LCB4aHIsIGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBnID0gcy5nbG9iYWw7XG4gICAgICAgIC8vIHRyaWdnZXIgYWpheCBnbG9iYWwgZXZlbnRzIHNvIHRoYXQgYWN0aXZpdHkvYmxvY2sgaW5kaWNhdG9ycyB3b3JrIGxpa2Ugbm9ybWFsXG4gICAgICAgIGlmIChnICYmIDAgPT09ICQuYWN0aXZlKyspIHtcbiAgICAgICAgICAgICQuZXZlbnQudHJpZ2dlcihcImFqYXhTdGFydFwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZykge1xuICAgICAgICAgICAgJC5ldmVudC50cmlnZ2VyKFwiYWpheFNlbmRcIiwgW3hociwgc10pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHMuYmVmb3JlU2VuZCAmJiBzLmJlZm9yZVNlbmQuY2FsbChzLmNvbnRleHQsIHhociwgcykgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBpZiAocy5nbG9iYWwpIHtcbiAgICAgICAgICAgICAgICAkLmFjdGl2ZS0tO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KCk7XG4gICAgICAgICAgICByZXR1cm4gZGVmZXJyZWQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHhoci5hYm9ydGVkKSB7XG4gICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoKTtcbiAgICAgICAgICAgIHJldHVybiBkZWZlcnJlZDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGFkZCBzdWJtaXR0aW5nIGVsZW1lbnQgdG8gZGF0YSBpZiB3ZSBrbm93IGl0XG4gICAgICAgIHN1YiA9IGZvcm0uY2xrO1xuICAgICAgICBpZiAoc3ViKSB7XG4gICAgICAgICAgICBuID0gc3ViLm5hbWU7XG4gICAgICAgICAgICBpZiAobiAmJiAhc3ViLmRpc2FibGVkKSB7XG4gICAgICAgICAgICAgICAgcy5leHRyYURhdGEgPSBzLmV4dHJhRGF0YSB8fCB7fTtcbiAgICAgICAgICAgICAgICBzLmV4dHJhRGF0YVtuXSA9IHN1Yi52YWx1ZTtcbiAgICAgICAgICAgICAgICBpZiAoc3ViLnR5cGUgPT0gXCJpbWFnZVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHMuZXh0cmFEYXRhW24rJy54J10gPSBmb3JtLmNsa194O1xuICAgICAgICAgICAgICAgICAgICBzLmV4dHJhRGF0YVtuKycueSddID0gZm9ybS5jbGtfeTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgQ0xJRU5UX1RJTUVPVVRfQUJPUlQgPSAxO1xuICAgICAgICB2YXIgU0VSVkVSX0FCT1JUID0gMjtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgZnVuY3Rpb24gZ2V0RG9jKGZyYW1lKSB7XG4gICAgICAgICAgICAvKiBpdCBsb29rcyBsaWtlIGNvbnRlbnRXaW5kb3cgb3IgY29udGVudERvY3VtZW50IGRvIG5vdFxuICAgICAgICAgICAgICogY2FycnkgdGhlIHByb3RvY29sIHByb3BlcnR5IGluIGllOCwgd2hlbiBydW5uaW5nIHVuZGVyIHNzbFxuICAgICAgICAgICAgICogZnJhbWUuZG9jdW1lbnQgaXMgdGhlIG9ubHkgdmFsaWQgcmVzcG9uc2UgZG9jdW1lbnQsIHNpbmNlXG4gICAgICAgICAgICAgKiB0aGUgcHJvdG9jb2wgaXMga25vdyBidXQgbm90IG9uIHRoZSBvdGhlciB0d28gb2JqZWN0cy4gc3RyYW5nZT9cbiAgICAgICAgICAgICAqIFwiU2FtZSBvcmlnaW4gcG9saWN5XCIgaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9TYW1lX29yaWdpbl9wb2xpY3lcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB2YXIgZG9jID0gbnVsbDtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gSUU4IGNhc2NhZGluZyBhY2Nlc3MgY2hlY2tcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgaWYgKGZyYW1lLmNvbnRlbnRXaW5kb3cpIHtcbiAgICAgICAgICAgICAgICAgICAgZG9jID0gZnJhbWUuY29udGVudFdpbmRvdy5kb2N1bWVudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoKGVycikge1xuICAgICAgICAgICAgICAgIC8vIElFOCBhY2Nlc3MgZGVuaWVkIHVuZGVyIHNzbCAmIG1pc3NpbmcgcHJvdG9jb2xcbiAgICAgICAgICAgICAgICBsb2coJ2Nhbm5vdCBnZXQgaWZyYW1lLmNvbnRlbnRXaW5kb3cgZG9jdW1lbnQ6ICcgKyBlcnIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZG9jKSB7IC8vIHN1Y2Nlc3NmdWwgZ2V0dGluZyBjb250ZW50XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRvYztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdHJ5IHsgLy8gc2ltcGx5IGNoZWNraW5nIG1heSB0aHJvdyBpbiBpZTggdW5kZXIgc3NsIG9yIG1pc21hdGNoZWQgcHJvdG9jb2xcbiAgICAgICAgICAgICAgICBkb2MgPSBmcmFtZS5jb250ZW50RG9jdW1lbnQgPyBmcmFtZS5jb250ZW50RG9jdW1lbnQgOiBmcmFtZS5kb2N1bWVudDtcbiAgICAgICAgICAgIH0gY2F0Y2goZXJyKSB7XG4gICAgICAgICAgICAgICAgLy8gbGFzdCBhdHRlbXB0XG4gICAgICAgICAgICAgICAgbG9nKCdjYW5ub3QgZ2V0IGlmcmFtZS5jb250ZW50RG9jdW1lbnQ6ICcgKyBlcnIpO1xuICAgICAgICAgICAgICAgIGRvYyA9IGZyYW1lLmRvY3VtZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGRvYztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJhaWxzIENTUkYgaGFjayAodGhhbmtzIHRvIFl2YW4gQmFydGhlbGVteSlcbiAgICAgICAgdmFyIGNzcmZfdG9rZW4gPSAkKCdtZXRhW25hbWU9Y3NyZi10b2tlbl0nKS5hdHRyKCdjb250ZW50Jyk7XG4gICAgICAgIHZhciBjc3JmX3BhcmFtID0gJCgnbWV0YVtuYW1lPWNzcmYtcGFyYW1dJykuYXR0cignY29udGVudCcpO1xuICAgICAgICBpZiAoY3NyZl9wYXJhbSAmJiBjc3JmX3Rva2VuKSB7XG4gICAgICAgICAgICBzLmV4dHJhRGF0YSA9IHMuZXh0cmFEYXRhIHx8IHt9O1xuICAgICAgICAgICAgcy5leHRyYURhdGFbY3NyZl9wYXJhbV0gPSBjc3JmX3Rva2VuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gdGFrZSBhIGJyZWF0aCBzbyB0aGF0IHBlbmRpbmcgcmVwYWludHMgZ2V0IHNvbWUgY3B1IHRpbWUgYmVmb3JlIHRoZSB1cGxvYWQgc3RhcnRzXG4gICAgICAgIGZ1bmN0aW9uIGRvU3VibWl0KCkge1xuICAgICAgICAgICAgLy8gbWFrZSBzdXJlIGZvcm0gYXR0cnMgYXJlIHNldFxuICAgICAgICAgICAgdmFyIHQgPSAkZm9ybS5hdHRyMigndGFyZ2V0JyksIFxuICAgICAgICAgICAgICAgIGEgPSAkZm9ybS5hdHRyMignYWN0aW9uJyksIFxuICAgICAgICAgICAgICAgIG1wID0gJ211bHRpcGFydC9mb3JtLWRhdGEnLFxuICAgICAgICAgICAgICAgIGV0ID0gJGZvcm0uYXR0cignZW5jdHlwZScpIHx8ICRmb3JtLmF0dHIoJ2VuY29kaW5nJykgfHwgbXA7XG5cbiAgICAgICAgICAgIC8vIHVwZGF0ZSBmb3JtIGF0dHJzIGluIElFIGZyaWVuZGx5IHdheVxuICAgICAgICAgICAgZm9ybS5zZXRBdHRyaWJ1dGUoJ3RhcmdldCcsaWQpO1xuICAgICAgICAgICAgaWYgKCFtZXRob2QgfHwgL3Bvc3QvaS50ZXN0KG1ldGhvZCkgKSB7XG4gICAgICAgICAgICAgICAgZm9ybS5zZXRBdHRyaWJ1dGUoJ21ldGhvZCcsICdQT1NUJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoYSAhPSBzLnVybCkge1xuICAgICAgICAgICAgICAgIGZvcm0uc2V0QXR0cmlidXRlKCdhY3Rpb24nLCBzLnVybCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGllIGJvcmtzIGluIHNvbWUgY2FzZXMgd2hlbiBzZXR0aW5nIGVuY29kaW5nXG4gICAgICAgICAgICBpZiAoISBzLnNraXBFbmNvZGluZ092ZXJyaWRlICYmICghbWV0aG9kIHx8IC9wb3N0L2kudGVzdChtZXRob2QpKSkge1xuICAgICAgICAgICAgICAgICRmb3JtLmF0dHIoe1xuICAgICAgICAgICAgICAgICAgICBlbmNvZGluZzogJ211bHRpcGFydC9mb3JtLWRhdGEnLFxuICAgICAgICAgICAgICAgICAgICBlbmN0eXBlOiAgJ211bHRpcGFydC9mb3JtLWRhdGEnXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIHN1cHBvcnQgdGltb3V0XG4gICAgICAgICAgICBpZiAocy50aW1lb3V0KSB7XG4gICAgICAgICAgICAgICAgdGltZW91dEhhbmRsZSA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7IHRpbWVkT3V0ID0gdHJ1ZTsgY2IoQ0xJRU5UX1RJTUVPVVRfQUJPUlQpOyB9LCBzLnRpbWVvdXQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBsb29rIGZvciBzZXJ2ZXIgYWJvcnRzXG4gICAgICAgICAgICBmdW5jdGlvbiBjaGVja1N0YXRlKCkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzdGF0ZSA9IGdldERvYyhpbykucmVhZHlTdGF0ZTtcbiAgICAgICAgICAgICAgICAgICAgbG9nKCdzdGF0ZSA9ICcgKyBzdGF0ZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdGF0ZSAmJiBzdGF0ZS50b0xvd2VyQ2FzZSgpID09ICd1bmluaXRpYWxpemVkJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChjaGVja1N0YXRlLDUwKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaChlKSB7XG4gICAgICAgICAgICAgICAgICAgIGxvZygnU2VydmVyIGFib3J0OiAnICwgZSwgJyAoJywgZS5uYW1lLCAnKScpO1xuICAgICAgICAgICAgICAgICAgICBjYihTRVJWRVJfQUJPUlQpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGltZW91dEhhbmRsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXRIYW5kbGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRpbWVvdXRIYW5kbGUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBhZGQgXCJleHRyYVwiIGRhdGEgdG8gZm9ybSBpZiBwcm92aWRlZCBpbiBvcHRpb25zXG4gICAgICAgICAgICB2YXIgZXh0cmFJbnB1dHMgPSBbXTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgaWYgKHMuZXh0cmFEYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIG4gaW4gcy5leHRyYURhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzLmV4dHJhRGF0YS5oYXNPd25Qcm9wZXJ0eShuKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWYgdXNpbmcgdGhlICQucGFyYW0gZm9ybWF0IHRoYXQgYWxsb3dzIGZvciBtdWx0aXBsZSB2YWx1ZXMgd2l0aCB0aGUgc2FtZSBuYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBpZigkLmlzUGxhaW5PYmplY3Qocy5leHRyYURhdGFbbl0pICYmIHMuZXh0cmFEYXRhW25dLmhhc093blByb3BlcnR5KCduYW1lJykgJiYgcy5leHRyYURhdGFbbl0uaGFzT3duUHJvcGVydHkoJ3ZhbHVlJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHRyYUlucHV0cy5wdXNoKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJzxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cIicrcy5leHRyYURhdGFbbl0ubmFtZSsnXCI+JykudmFsKHMuZXh0cmFEYXRhW25dLnZhbHVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXBwZW5kVG8oZm9ybSlbMF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHRyYUlucHV0cy5wdXNoKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJzxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cIicrbisnXCI+JykudmFsKHMuZXh0cmFEYXRhW25dKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXBwZW5kVG8oZm9ybSlbMF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKCFzLmlmcmFtZVRhcmdldCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBhZGQgaWZyYW1lIHRvIGRvYyBhbmQgc3VibWl0IHRoZSBmb3JtXG4gICAgICAgICAgICAgICAgICAgICRpby5hcHBlbmRUbygnYm9keScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoaW8uYXR0YWNoRXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgaW8uYXR0YWNoRXZlbnQoJ29ubG9hZCcsIGNiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlvLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBjYiwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGNoZWNrU3RhdGUsMTUpO1xuXG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgZm9ybS5zdWJtaXQoKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoKGVycikge1xuICAgICAgICAgICAgICAgICAgICAvLyBqdXN0IGluIGNhc2UgZm9ybSBoYXMgZWxlbWVudCB3aXRoIG5hbWUvaWQgb2YgJ3N1Ym1pdCdcbiAgICAgICAgICAgICAgICAgICAgdmFyIHN1Ym1pdEZuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpLnN1Ym1pdDtcbiAgICAgICAgICAgICAgICAgICAgc3VibWl0Rm4uYXBwbHkoZm9ybSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICAgICAgLy8gcmVzZXQgYXR0cnMgYW5kIHJlbW92ZSBcImV4dHJhXCIgaW5wdXQgZWxlbWVudHNcbiAgICAgICAgICAgICAgICBmb3JtLnNldEF0dHJpYnV0ZSgnYWN0aW9uJyxhKTtcbiAgICAgICAgICAgICAgICBmb3JtLnNldEF0dHJpYnV0ZSgnZW5jdHlwZScsIGV0KTsgLy8gIzM4MFxuICAgICAgICAgICAgICAgIGlmKHQpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9ybS5zZXRBdHRyaWJ1dGUoJ3RhcmdldCcsIHQpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICRmb3JtLnJlbW92ZUF0dHIoJ3RhcmdldCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAkKGV4dHJhSW5wdXRzKS5yZW1vdmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzLmZvcmNlU3luYykge1xuICAgICAgICAgICAgZG9TdWJtaXQoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZG9TdWJtaXQsIDEwKTsgLy8gdGhpcyBsZXRzIGRvbSB1cGRhdGVzIHJlbmRlclxuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGRhdGEsIGRvYywgZG9tQ2hlY2tDb3VudCA9IDUwLCBjYWxsYmFja1Byb2Nlc3NlZDtcblxuICAgICAgICBmdW5jdGlvbiBjYihlKSB7XG4gICAgICAgICAgICBpZiAoeGhyLmFib3J0ZWQgfHwgY2FsbGJhY2tQcm9jZXNzZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGRvYyA9IGdldERvYyhpbyk7XG4gICAgICAgICAgICBpZighZG9jKSB7XG4gICAgICAgICAgICAgICAgbG9nKCdjYW5ub3QgYWNjZXNzIHJlc3BvbnNlIGRvY3VtZW50Jyk7XG4gICAgICAgICAgICAgICAgZSA9IFNFUlZFUl9BQk9SVDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChlID09PSBDTElFTlRfVElNRU9VVF9BQk9SVCAmJiB4aHIpIHtcbiAgICAgICAgICAgICAgICB4aHIuYWJvcnQoJ3RpbWVvdXQnKTtcbiAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoeGhyLCAndGltZW91dCcpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGUgPT0gU0VSVkVSX0FCT1JUICYmIHhocikge1xuICAgICAgICAgICAgICAgIHhoci5hYm9ydCgnc2VydmVyIGFib3J0Jyk7XG4gICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KHhociwgJ2Vycm9yJywgJ3NlcnZlciBhYm9ydCcpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCFkb2MgfHwgZG9jLmxvY2F0aW9uLmhyZWYgPT0gcy5pZnJhbWVTcmMpIHtcbiAgICAgICAgICAgICAgICAvLyByZXNwb25zZSBub3QgcmVjZWl2ZWQgeWV0XG4gICAgICAgICAgICAgICAgaWYgKCF0aW1lZE91dCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGlvLmRldGFjaEV2ZW50KSB7XG4gICAgICAgICAgICAgICAgaW8uZGV0YWNoRXZlbnQoJ29ubG9hZCcsIGNiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlvLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBjYiwgZmFsc2UpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgc3RhdHVzID0gJ3N1Y2Nlc3MnLCBlcnJNc2c7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGlmICh0aW1lZE91dCkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyAndGltZW91dCc7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdmFyIGlzWG1sID0gcy5kYXRhVHlwZSA9PSAneG1sJyB8fCBkb2MuWE1MRG9jdW1lbnQgfHwgJC5pc1hNTERvYyhkb2MpO1xuICAgICAgICAgICAgICAgIGxvZygnaXNYbWw9Jytpc1htbCk7XG4gICAgICAgICAgICAgICAgaWYgKCFpc1htbCAmJiB3aW5kb3cub3BlcmEgJiYgKGRvYy5ib2R5ID09PSBudWxsIHx8ICFkb2MuYm9keS5pbm5lckhUTUwpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgtLWRvbUNoZWNrQ291bnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGluIHNvbWUgYnJvd3NlcnMgKE9wZXJhKSB0aGUgaWZyYW1lIERPTSBpcyBub3QgYWx3YXlzIHRyYXZlcnNhYmxlIHdoZW5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoZSBvbmxvYWQgY2FsbGJhY2sgZmlyZXMsIHNvIHdlIGxvb3AgYSBiaXQgdG8gYWNjb21tb2RhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZygncmVxdWVpbmcgb25Mb2FkIGNhbGxiYWNrLCBET00gbm90IGF2YWlsYWJsZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChjYiwgMjUwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyBsZXQgdGhpcyBmYWxsIHRocm91Z2ggYmVjYXVzZSBzZXJ2ZXIgcmVzcG9uc2UgY291bGQgYmUgYW4gZW1wdHkgZG9jdW1lbnRcbiAgICAgICAgICAgICAgICAgICAgLy9sb2coJ0NvdWxkIG5vdCBhY2Nlc3MgaWZyYW1lIERPTSBhZnRlciBtdXRpcGxlIHRyaWVzLicpO1xuICAgICAgICAgICAgICAgICAgICAvL3Rocm93ICdET01FeGNlcHRpb246IG5vdCBhdmFpbGFibGUnO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vbG9nKCdyZXNwb25zZSBkZXRlY3RlZCcpO1xuICAgICAgICAgICAgICAgIHZhciBkb2NSb290ID0gZG9jLmJvZHkgPyBkb2MuYm9keSA6IGRvYy5kb2N1bWVudEVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgeGhyLnJlc3BvbnNlVGV4dCA9IGRvY1Jvb3QgPyBkb2NSb290LmlubmVySFRNTCA6IG51bGw7XG4gICAgICAgICAgICAgICAgeGhyLnJlc3BvbnNlWE1MID0gZG9jLlhNTERvY3VtZW50ID8gZG9jLlhNTERvY3VtZW50IDogZG9jO1xuICAgICAgICAgICAgICAgIGlmIChpc1htbCkge1xuICAgICAgICAgICAgICAgICAgICBzLmRhdGFUeXBlID0gJ3htbCc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHhoci5nZXRSZXNwb25zZUhlYWRlciA9IGZ1bmN0aW9uKGhlYWRlcil7XG4gICAgICAgICAgICAgICAgICAgIHZhciBoZWFkZXJzID0geydjb250ZW50LXR5cGUnOiBzLmRhdGFUeXBlfTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGhlYWRlcnNbaGVhZGVyLnRvTG93ZXJDYXNlKCldO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgLy8gc3VwcG9ydCBmb3IgWEhSICdzdGF0dXMnICYgJ3N0YXR1c1RleHQnIGVtdWxhdGlvbiA6XG4gICAgICAgICAgICAgICAgaWYgKGRvY1Jvb3QpIHtcbiAgICAgICAgICAgICAgICAgICAgeGhyLnN0YXR1cyA9IE51bWJlciggZG9jUm9vdC5nZXRBdHRyaWJ1dGUoJ3N0YXR1cycpICkgfHwgeGhyLnN0YXR1cztcbiAgICAgICAgICAgICAgICAgICAgeGhyLnN0YXR1c1RleHQgPSBkb2NSb290LmdldEF0dHJpYnV0ZSgnc3RhdHVzVGV4dCcpIHx8IHhoci5zdGF0dXNUZXh0O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHZhciBkdCA9IChzLmRhdGFUeXBlIHx8ICcnKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgICAgIHZhciBzY3IgPSAvKGpzb258c2NyaXB0fHRleHQpLy50ZXN0KGR0KTtcbiAgICAgICAgICAgICAgICBpZiAoc2NyIHx8IHMudGV4dGFyZWEpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gc2VlIGlmIHVzZXIgZW1iZWRkZWQgcmVzcG9uc2UgaW4gdGV4dGFyZWFcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRhID0gZG9jLmdldEVsZW1lbnRzQnlUYWdOYW1lKCd0ZXh0YXJlYScpWzBdO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHhoci5yZXNwb25zZVRleHQgPSB0YS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHN1cHBvcnQgZm9yIFhIUiAnc3RhdHVzJyAmICdzdGF0dXNUZXh0JyBlbXVsYXRpb24gOlxuICAgICAgICAgICAgICAgICAgICAgICAgeGhyLnN0YXR1cyA9IE51bWJlciggdGEuZ2V0QXR0cmlidXRlKCdzdGF0dXMnKSApIHx8IHhoci5zdGF0dXM7XG4gICAgICAgICAgICAgICAgICAgICAgICB4aHIuc3RhdHVzVGV4dCA9IHRhLmdldEF0dHJpYnV0ZSgnc3RhdHVzVGV4dCcpIHx8IHhoci5zdGF0dXNUZXh0O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHNjcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYWNjb3VudCBmb3IgYnJvd3NlcnMgaW5qZWN0aW5nIHByZSBhcm91bmQganNvbiByZXNwb25zZVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHByZSA9IGRvYy5nZXRFbGVtZW50c0J5VGFnTmFtZSgncHJlJylbMF07XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYiA9IGRvYy5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpWzBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhoci5yZXNwb25zZVRleHQgPSBwcmUudGV4dENvbnRlbnQgPyBwcmUudGV4dENvbnRlbnQgOiBwcmUuaW5uZXJUZXh0O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoYikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhoci5yZXNwb25zZVRleHQgPSBiLnRleHRDb250ZW50ID8gYi50ZXh0Q29udGVudCA6IGIuaW5uZXJUZXh0O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGR0ID09ICd4bWwnICYmICF4aHIucmVzcG9uc2VYTUwgJiYgeGhyLnJlc3BvbnNlVGV4dCkge1xuICAgICAgICAgICAgICAgICAgICB4aHIucmVzcG9uc2VYTUwgPSB0b1htbCh4aHIucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBkYXRhID0gaHR0cERhdGEoeGhyLCBkdCwgcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzID0gJ3BhcnNlcmVycm9yJztcbiAgICAgICAgICAgICAgICAgICAgeGhyLmVycm9yID0gZXJyTXNnID0gKGVyciB8fCBzdGF0dXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICBsb2coJ2Vycm9yIGNhdWdodDogJyxlcnIpO1xuICAgICAgICAgICAgICAgIHN0YXR1cyA9ICdlcnJvcic7XG4gICAgICAgICAgICAgICAgeGhyLmVycm9yID0gZXJyTXNnID0gKGVyciB8fCBzdGF0dXMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoeGhyLmFib3J0ZWQpIHtcbiAgICAgICAgICAgICAgICBsb2coJ3VwbG9hZCBhYm9ydGVkJyk7XG4gICAgICAgICAgICAgICAgc3RhdHVzID0gbnVsbDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHhoci5zdGF0dXMpIHsgLy8gd2UndmUgc2V0IHhoci5zdGF0dXNcbiAgICAgICAgICAgICAgICBzdGF0dXMgPSAoeGhyLnN0YXR1cyA+PSAyMDAgJiYgeGhyLnN0YXR1cyA8IDMwMCB8fCB4aHIuc3RhdHVzID09PSAzMDQpID8gJ3N1Y2Nlc3MnIDogJ2Vycm9yJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gb3JkZXJpbmcgb2YgdGhlc2UgY2FsbGJhY2tzL3RyaWdnZXJzIGlzIG9kZCwgYnV0IHRoYXQncyBob3cgJC5hamF4IGRvZXMgaXRcbiAgICAgICAgICAgIGlmIChzdGF0dXMgPT09ICdzdWNjZXNzJykge1xuICAgICAgICAgICAgICAgIGlmIChzLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgcy5zdWNjZXNzLmNhbGwocy5jb250ZXh0LCBkYXRhLCAnc3VjY2VzcycsIHhocik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUoeGhyLnJlc3BvbnNlVGV4dCwgJ3N1Y2Nlc3MnLCB4aHIpO1xuICAgICAgICAgICAgICAgIGlmIChnKSB7XG4gICAgICAgICAgICAgICAgICAgICQuZXZlbnQudHJpZ2dlcihcImFqYXhTdWNjZXNzXCIsIFt4aHIsIHNdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChzdGF0dXMpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyTXNnID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgZXJyTXNnID0geGhyLnN0YXR1c1RleHQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChzLmVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHMuZXJyb3IuY2FsbChzLmNvbnRleHQsIHhociwgc3RhdHVzLCBlcnJNc2cpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoeGhyLCAnZXJyb3InLCBlcnJNc2cpO1xuICAgICAgICAgICAgICAgIGlmIChnKSB7XG4gICAgICAgICAgICAgICAgICAgICQuZXZlbnQudHJpZ2dlcihcImFqYXhFcnJvclwiLCBbeGhyLCBzLCBlcnJNc2ddKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChnKSB7XG4gICAgICAgICAgICAgICAgJC5ldmVudC50cmlnZ2VyKFwiYWpheENvbXBsZXRlXCIsIFt4aHIsIHNdKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGcgJiYgISAtLSQuYWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgJC5ldmVudC50cmlnZ2VyKFwiYWpheFN0b3BcIik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChzLmNvbXBsZXRlKSB7XG4gICAgICAgICAgICAgICAgcy5jb21wbGV0ZS5jYWxsKHMuY29udGV4dCwgeGhyLCBzdGF0dXMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjYWxsYmFja1Byb2Nlc3NlZCA9IHRydWU7XG4gICAgICAgICAgICBpZiAocy50aW1lb3V0KSB7XG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXRIYW5kbGUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBjbGVhbiB1cFxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXMuaWZyYW1lVGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgICAgICRpby5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7IC8vYWRkaW5nIGVsc2UgdG8gY2xlYW4gdXAgZXhpc3RpbmcgaWZyYW1lIHJlc3BvbnNlLlxuICAgICAgICAgICAgICAgICAgICAkaW8uYXR0cignc3JjJywgcy5pZnJhbWVTcmMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB4aHIucmVzcG9uc2VYTUwgPSBudWxsO1xuICAgICAgICAgICAgfSwgMTAwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciB0b1htbCA9ICQucGFyc2VYTUwgfHwgZnVuY3Rpb24ocywgZG9jKSB7IC8vIHVzZSBwYXJzZVhNTCBpZiBhdmFpbGFibGUgKGpRdWVyeSAxLjUrKVxuICAgICAgICAgICAgaWYgKHdpbmRvdy5BY3RpdmVYT2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgZG9jID0gbmV3IEFjdGl2ZVhPYmplY3QoJ01pY3Jvc29mdC5YTUxET00nKTtcbiAgICAgICAgICAgICAgICBkb2MuYXN5bmMgPSAnZmFsc2UnO1xuICAgICAgICAgICAgICAgIGRvYy5sb2FkWE1MKHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZG9jID0gKG5ldyBET01QYXJzZXIoKSkucGFyc2VGcm9tU3RyaW5nKHMsICd0ZXh0L3htbCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIChkb2MgJiYgZG9jLmRvY3VtZW50RWxlbWVudCAmJiBkb2MuZG9jdW1lbnRFbGVtZW50Lm5vZGVOYW1lICE9ICdwYXJzZXJlcnJvcicpID8gZG9jIDogbnVsbDtcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIHBhcnNlSlNPTiA9ICQucGFyc2VKU09OIHx8IGZ1bmN0aW9uKHMpIHtcbiAgICAgICAgICAgIC8qanNsaW50IGV2aWw6dHJ1ZSAqL1xuICAgICAgICAgICAgcmV0dXJuIHdpbmRvd1snZXZhbCddKCcoJyArIHMgKyAnKScpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHZhciBodHRwRGF0YSA9IGZ1bmN0aW9uKCB4aHIsIHR5cGUsIHMgKSB7IC8vIG1vc3RseSBsaWZ0ZWQgZnJvbSBqcTEuNC40XG5cbiAgICAgICAgICAgIHZhciBjdCA9IHhoci5nZXRSZXNwb25zZUhlYWRlcignY29udGVudC10eXBlJykgfHwgJycsXG4gICAgICAgICAgICAgICAgeG1sID0gdHlwZSA9PT0gJ3htbCcgfHwgIXR5cGUgJiYgY3QuaW5kZXhPZigneG1sJykgPj0gMCxcbiAgICAgICAgICAgICAgICBkYXRhID0geG1sID8geGhyLnJlc3BvbnNlWE1MIDogeGhyLnJlc3BvbnNlVGV4dDtcblxuICAgICAgICAgICAgaWYgKHhtbCAmJiBkYXRhLmRvY3VtZW50RWxlbWVudC5ub2RlTmFtZSA9PT0gJ3BhcnNlcmVycm9yJykge1xuICAgICAgICAgICAgICAgIGlmICgkLmVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICQuZXJyb3IoJ3BhcnNlcmVycm9yJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHMgJiYgcy5kYXRhRmlsdGVyKSB7XG4gICAgICAgICAgICAgICAgZGF0YSA9IHMuZGF0YUZpbHRlcihkYXRhLCB0eXBlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZSA9PT0gJ2pzb24nIHx8ICF0eXBlICYmIGN0LmluZGV4T2YoJ2pzb24nKSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGEgPSBwYXJzZUpTT04oZGF0YSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlID09PSBcInNjcmlwdFwiIHx8ICF0eXBlICYmIGN0LmluZGV4T2YoXCJqYXZhc2NyaXB0XCIpID49IDApIHtcbiAgICAgICAgICAgICAgICAgICAgJC5nbG9iYWxFdmFsKGRhdGEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBkZWZlcnJlZDtcbiAgICB9XG59O1xuXG4vKipcbiAqIGFqYXhGb3JtKCkgcHJvdmlkZXMgYSBtZWNoYW5pc20gZm9yIGZ1bGx5IGF1dG9tYXRpbmcgZm9ybSBzdWJtaXNzaW9uLlxuICpcbiAqIFRoZSBhZHZhbnRhZ2VzIG9mIHVzaW5nIHRoaXMgbWV0aG9kIGluc3RlYWQgb2YgYWpheFN1Ym1pdCgpIGFyZTpcbiAqXG4gKiAxOiBUaGlzIG1ldGhvZCB3aWxsIGluY2x1ZGUgY29vcmRpbmF0ZXMgZm9yIDxpbnB1dCB0eXBlPVwiaW1hZ2VcIiAvPiBlbGVtZW50cyAoaWYgdGhlIGVsZW1lbnRcbiAqICAgIGlzIHVzZWQgdG8gc3VibWl0IHRoZSBmb3JtKS5cbiAqIDIuIFRoaXMgbWV0aG9kIHdpbGwgaW5jbHVkZSB0aGUgc3VibWl0IGVsZW1lbnQncyBuYW1lL3ZhbHVlIGRhdGEgKGZvciB0aGUgZWxlbWVudCB0aGF0IHdhc1xuICogICAgdXNlZCB0byBzdWJtaXQgdGhlIGZvcm0pLlxuICogMy4gVGhpcyBtZXRob2QgYmluZHMgdGhlIHN1Ym1pdCgpIG1ldGhvZCB0byB0aGUgZm9ybSBmb3IgeW91LlxuICpcbiAqIFRoZSBvcHRpb25zIGFyZ3VtZW50IGZvciBhamF4Rm9ybSB3b3JrcyBleGFjdGx5IGFzIGl0IGRvZXMgZm9yIGFqYXhTdWJtaXQuICBhamF4Rm9ybSBtZXJlbHlcbiAqIHBhc3NlcyB0aGUgb3B0aW9ucyBhcmd1bWVudCBhbG9uZyBhZnRlciBwcm9wZXJseSBiaW5kaW5nIGV2ZW50cyBmb3Igc3VibWl0IGVsZW1lbnRzIGFuZFxuICogdGhlIGZvcm0gaXRzZWxmLlxuICovXG4kLmZuLmFqYXhGb3JtID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgIG9wdGlvbnMuZGVsZWdhdGlvbiA9IG9wdGlvbnMuZGVsZWdhdGlvbiAmJiAkLmlzRnVuY3Rpb24oJC5mbi5vbik7XG5cbiAgICAvLyBpbiBqUXVlcnkgMS4zKyB3ZSBjYW4gZml4IG1pc3Rha2VzIHdpdGggdGhlIHJlYWR5IHN0YXRlXG4gICAgaWYgKCFvcHRpb25zLmRlbGVnYXRpb24gJiYgdGhpcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgdmFyIG8gPSB7IHM6IHRoaXMuc2VsZWN0b3IsIGM6IHRoaXMuY29udGV4dCB9O1xuICAgICAgICBpZiAoISQuaXNSZWFkeSAmJiBvLnMpIHtcbiAgICAgICAgICAgIGxvZygnRE9NIG5vdCByZWFkeSwgcXVldWluZyBhamF4Rm9ybScpO1xuICAgICAgICAgICAgJChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAkKG8ucyxvLmMpLmFqYXhGb3JtKG9wdGlvbnMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgICAgICAvLyBpcyB5b3VyIERPTSByZWFkeT8gIGh0dHA6Ly9kb2NzLmpxdWVyeS5jb20vVHV0b3JpYWxzOkludHJvZHVjaW5nXyQoZG9jdW1lbnQpLnJlYWR5KClcbiAgICAgICAgbG9nKCd0ZXJtaW5hdGluZzsgemVybyBlbGVtZW50cyBmb3VuZCBieSBzZWxlY3RvcicgKyAoJC5pc1JlYWR5ID8gJycgOiAnIChET00gbm90IHJlYWR5KScpKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgaWYgKCBvcHRpb25zLmRlbGVnYXRpb24gKSB7XG4gICAgICAgICQoZG9jdW1lbnQpXG4gICAgICAgICAgICAub2ZmKCdzdWJtaXQuZm9ybS1wbHVnaW4nLCB0aGlzLnNlbGVjdG9yLCBkb0FqYXhTdWJtaXQpXG4gICAgICAgICAgICAub2ZmKCdjbGljay5mb3JtLXBsdWdpbicsIHRoaXMuc2VsZWN0b3IsIGNhcHR1cmVTdWJtaXR0aW5nRWxlbWVudClcbiAgICAgICAgICAgIC5vbignc3VibWl0LmZvcm0tcGx1Z2luJywgdGhpcy5zZWxlY3Rvciwgb3B0aW9ucywgZG9BamF4U3VibWl0KVxuICAgICAgICAgICAgLm9uKCdjbGljay5mb3JtLXBsdWdpbicsIHRoaXMuc2VsZWN0b3IsIG9wdGlvbnMsIGNhcHR1cmVTdWJtaXR0aW5nRWxlbWVudCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmFqYXhGb3JtVW5iaW5kKClcbiAgICAgICAgLmJpbmQoJ3N1Ym1pdC5mb3JtLXBsdWdpbicsIG9wdGlvbnMsIGRvQWpheFN1Ym1pdClcbiAgICAgICAgLmJpbmQoJ2NsaWNrLmZvcm0tcGx1Z2luJywgb3B0aW9ucywgY2FwdHVyZVN1Ym1pdHRpbmdFbGVtZW50KTtcbn07XG5cbi8vIHByaXZhdGUgZXZlbnQgaGFuZGxlcnNcbmZ1bmN0aW9uIGRvQWpheFN1Ym1pdChlKSB7XG4gICAgLypqc2hpbnQgdmFsaWR0aGlzOnRydWUgKi9cbiAgICB2YXIgb3B0aW9ucyA9IGUuZGF0YTtcbiAgICBpZiAoIWUuaXNEZWZhdWx0UHJldmVudGVkKCkpIHsgLy8gaWYgZXZlbnQgaGFzIGJlZW4gY2FuY2VsZWQsIGRvbid0IHByb2NlZWRcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAkKGUudGFyZ2V0KS5hamF4U3VibWl0KG9wdGlvbnMpOyAvLyAjMzY1XG4gICAgfVxufVxuXG5mdW5jdGlvbiBjYXB0dXJlU3VibWl0dGluZ0VsZW1lbnQoZSkge1xuICAgIC8qanNoaW50IHZhbGlkdGhpczp0cnVlICovXG4gICAgdmFyIHRhcmdldCA9IGUudGFyZ2V0O1xuICAgIHZhciAkZWwgPSAkKHRhcmdldCk7XG4gICAgaWYgKCEoJGVsLmlzKFwiW3R5cGU9c3VibWl0XSxbdHlwZT1pbWFnZV1cIikpKSB7XG4gICAgICAgIC8vIGlzIHRoaXMgYSBjaGlsZCBlbGVtZW50IG9mIHRoZSBzdWJtaXQgZWw/ICAoZXg6IGEgc3BhbiB3aXRoaW4gYSBidXR0b24pXG4gICAgICAgIHZhciB0ID0gJGVsLmNsb3Nlc3QoJ1t0eXBlPXN1Ym1pdF0nKTtcbiAgICAgICAgaWYgKHQubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGFyZ2V0ID0gdFswXTtcbiAgICB9XG4gICAgdmFyIGZvcm0gPSB0aGlzO1xuICAgIGZvcm0uY2xrID0gdGFyZ2V0O1xuICAgIGlmICh0YXJnZXQudHlwZSA9PSAnaW1hZ2UnKSB7XG4gICAgICAgIGlmIChlLm9mZnNldFggIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgZm9ybS5jbGtfeCA9IGUub2Zmc2V0WDtcbiAgICAgICAgICAgIGZvcm0uY2xrX3kgPSBlLm9mZnNldFk7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mICQuZm4ub2Zmc2V0ID09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHZhciBvZmZzZXQgPSAkZWwub2Zmc2V0KCk7XG4gICAgICAgICAgICBmb3JtLmNsa194ID0gZS5wYWdlWCAtIG9mZnNldC5sZWZ0O1xuICAgICAgICAgICAgZm9ybS5jbGtfeSA9IGUucGFnZVkgLSBvZmZzZXQudG9wO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm9ybS5jbGtfeCA9IGUucGFnZVggLSB0YXJnZXQub2Zmc2V0TGVmdDtcbiAgICAgICAgICAgIGZvcm0uY2xrX3kgPSBlLnBhZ2VZIC0gdGFyZ2V0Lm9mZnNldFRvcDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBjbGVhciBmb3JtIHZhcnNcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkgeyBmb3JtLmNsayA9IGZvcm0uY2xrX3ggPSBmb3JtLmNsa195ID0gbnVsbDsgfSwgMTAwKTtcbn1cblxuXG4vLyBhamF4Rm9ybVVuYmluZCB1bmJpbmRzIHRoZSBldmVudCBoYW5kbGVycyB0aGF0IHdlcmUgYm91bmQgYnkgYWpheEZvcm1cbiQuZm4uYWpheEZvcm1VbmJpbmQgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy51bmJpbmQoJ3N1Ym1pdC5mb3JtLXBsdWdpbiBjbGljay5mb3JtLXBsdWdpbicpO1xufTtcblxuLyoqXG4gKiBmb3JtVG9BcnJheSgpIGdhdGhlcnMgZm9ybSBlbGVtZW50IGRhdGEgaW50byBhbiBhcnJheSBvZiBvYmplY3RzIHRoYXQgY2FuXG4gKiBiZSBwYXNzZWQgdG8gYW55IG9mIHRoZSBmb2xsb3dpbmcgYWpheCBmdW5jdGlvbnM6ICQuZ2V0LCAkLnBvc3QsIG9yIGxvYWQuXG4gKiBFYWNoIG9iamVjdCBpbiB0aGUgYXJyYXkgaGFzIGJvdGggYSAnbmFtZScgYW5kICd2YWx1ZScgcHJvcGVydHkuICBBbiBleGFtcGxlIG9mXG4gKiBhbiBhcnJheSBmb3IgYSBzaW1wbGUgbG9naW4gZm9ybSBtaWdodCBiZTpcbiAqXG4gKiBbIHsgbmFtZTogJ3VzZXJuYW1lJywgdmFsdWU6ICdqcmVzaWcnIH0sIHsgbmFtZTogJ3Bhc3N3b3JkJywgdmFsdWU6ICdzZWNyZXQnIH0gXVxuICpcbiAqIEl0IGlzIHRoaXMgYXJyYXkgdGhhdCBpcyBwYXNzZWQgdG8gcHJlLXN1Ym1pdCBjYWxsYmFjayBmdW5jdGlvbnMgcHJvdmlkZWQgdG8gdGhlXG4gKiBhamF4U3VibWl0KCkgYW5kIGFqYXhGb3JtKCkgbWV0aG9kcy5cbiAqL1xuJC5mbi5mb3JtVG9BcnJheSA9IGZ1bmN0aW9uKHNlbWFudGljLCBlbGVtZW50cykge1xuICAgIHZhciBhID0gW107XG4gICAgaWYgKHRoaXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiBhO1xuICAgIH1cblxuICAgIHZhciBmb3JtID0gdGhpc1swXTtcbiAgICB2YXIgZm9ybUlkID0gdGhpcy5hdHRyKCdpZCcpO1xuICAgIHZhciBlbHMgPSBzZW1hbnRpYyA/IGZvcm0uZ2V0RWxlbWVudHNCeVRhZ05hbWUoJyonKSA6IGZvcm0uZWxlbWVudHM7XG4gICAgdmFyIGVsczI7XG5cbiAgICBpZiAoZWxzICYmICEvTVNJRSBbNjc4XS8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSkgeyAvLyAjMzkwXG4gICAgICAgIGVscyA9ICQoZWxzKS5nZXQoKTsgIC8vIGNvbnZlcnQgdG8gc3RhbmRhcmQgYXJyYXlcbiAgICB9XG5cbiAgICAvLyAjMzg2OyBhY2NvdW50IGZvciBpbnB1dHMgb3V0c2lkZSB0aGUgZm9ybSB3aGljaCB1c2UgdGhlICdmb3JtJyBhdHRyaWJ1dGVcbiAgICBpZiAoIGZvcm1JZCApIHtcbiAgICAgICAgZWxzMiA9ICQoJzppbnB1dFtmb3JtPVwiJyArIGZvcm1JZCArICdcIl0nKS5nZXQoKTsgLy8gaGF0IHRpcCBAdGhldFxuICAgICAgICBpZiAoIGVsczIubGVuZ3RoICkge1xuICAgICAgICAgICAgZWxzID0gKGVscyB8fCBbXSkuY29uY2F0KGVsczIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFlbHMgfHwgIWVscy5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIGE7XG4gICAgfVxuXG4gICAgdmFyIGksaixuLHYsZWwsbWF4LGptYXg7XG4gICAgZm9yKGk9MCwgbWF4PWVscy5sZW5ndGg7IGkgPCBtYXg7IGkrKykge1xuICAgICAgICBlbCA9IGVsc1tpXTtcbiAgICAgICAgbiA9IGVsLm5hbWU7XG4gICAgICAgIGlmICghbiB8fCBlbC5kaXNhYmxlZCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2VtYW50aWMgJiYgZm9ybS5jbGsgJiYgZWwudHlwZSA9PSBcImltYWdlXCIpIHtcbiAgICAgICAgICAgIC8vIGhhbmRsZSBpbWFnZSBpbnB1dHMgb24gdGhlIGZseSB3aGVuIHNlbWFudGljID09IHRydWVcbiAgICAgICAgICAgIGlmKGZvcm0uY2xrID09IGVsKSB7XG4gICAgICAgICAgICAgICAgYS5wdXNoKHtuYW1lOiBuLCB2YWx1ZTogJChlbCkudmFsKCksIHR5cGU6IGVsLnR5cGUgfSk7XG4gICAgICAgICAgICAgICAgYS5wdXNoKHtuYW1lOiBuKycueCcsIHZhbHVlOiBmb3JtLmNsa194fSwge25hbWU6IG4rJy55JywgdmFsdWU6IGZvcm0uY2xrX3l9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdiA9ICQuZmllbGRWYWx1ZShlbCwgdHJ1ZSk7XG4gICAgICAgIGlmICh2ICYmIHYuY29uc3RydWN0b3IgPT0gQXJyYXkpIHtcbiAgICAgICAgICAgIGlmIChlbGVtZW50cykge1xuICAgICAgICAgICAgICAgIGVsZW1lbnRzLnB1c2goZWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yKGo9MCwgam1heD12Lmxlbmd0aDsgaiA8IGptYXg7IGorKykge1xuICAgICAgICAgICAgICAgIGEucHVzaCh7bmFtZTogbiwgdmFsdWU6IHZbal19KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChmZWF0dXJlLmZpbGVhcGkgJiYgZWwudHlwZSA9PSAnZmlsZScpIHtcbiAgICAgICAgICAgIGlmIChlbGVtZW50cykge1xuICAgICAgICAgICAgICAgIGVsZW1lbnRzLnB1c2goZWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGZpbGVzID0gZWwuZmlsZXM7XG4gICAgICAgICAgICBpZiAoZmlsZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgZm9yIChqPTA7IGogPCBmaWxlcy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICBhLnB1c2goe25hbWU6IG4sIHZhbHVlOiBmaWxlc1tqXSwgdHlwZTogZWwudHlwZX0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vICMxODBcbiAgICAgICAgICAgICAgICBhLnB1c2goeyBuYW1lOiBuLCB2YWx1ZTogJycsIHR5cGU6IGVsLnR5cGUgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodiAhPT0gbnVsbCAmJiB0eXBlb2YgdiAhPSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgaWYgKGVsZW1lbnRzKSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudHMucHVzaChlbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhLnB1c2goe25hbWU6IG4sIHZhbHVlOiB2LCB0eXBlOiBlbC50eXBlLCByZXF1aXJlZDogZWwucmVxdWlyZWR9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmICghc2VtYW50aWMgJiYgZm9ybS5jbGspIHtcbiAgICAgICAgLy8gaW5wdXQgdHlwZT09J2ltYWdlJyBhcmUgbm90IGZvdW5kIGluIGVsZW1lbnRzIGFycmF5ISBoYW5kbGUgaXQgaGVyZVxuICAgICAgICB2YXIgJGlucHV0ID0gJChmb3JtLmNsayksIGlucHV0ID0gJGlucHV0WzBdO1xuICAgICAgICBuID0gaW5wdXQubmFtZTtcbiAgICAgICAgaWYgKG4gJiYgIWlucHV0LmRpc2FibGVkICYmIGlucHV0LnR5cGUgPT0gJ2ltYWdlJykge1xuICAgICAgICAgICAgYS5wdXNoKHtuYW1lOiBuLCB2YWx1ZTogJGlucHV0LnZhbCgpfSk7XG4gICAgICAgICAgICBhLnB1c2goe25hbWU6IG4rJy54JywgdmFsdWU6IGZvcm0uY2xrX3h9LCB7bmFtZTogbisnLnknLCB2YWx1ZTogZm9ybS5jbGtfeX0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBhO1xufTtcblxuLyoqXG4gKiBTZXJpYWxpemVzIGZvcm0gZGF0YSBpbnRvIGEgJ3N1Ym1pdHRhYmxlJyBzdHJpbmcuIFRoaXMgbWV0aG9kIHdpbGwgcmV0dXJuIGEgc3RyaW5nXG4gKiBpbiB0aGUgZm9ybWF0OiBuYW1lMT12YWx1ZTEmYW1wO25hbWUyPXZhbHVlMlxuICovXG4kLmZuLmZvcm1TZXJpYWxpemUgPSBmdW5jdGlvbihzZW1hbnRpYykge1xuICAgIC8vaGFuZCBvZmYgdG8galF1ZXJ5LnBhcmFtIGZvciBwcm9wZXIgZW5jb2RpbmdcbiAgICByZXR1cm4gJC5wYXJhbSh0aGlzLmZvcm1Ub0FycmF5KHNlbWFudGljKSk7XG59O1xuXG4vKipcbiAqIFNlcmlhbGl6ZXMgYWxsIGZpZWxkIGVsZW1lbnRzIGluIHRoZSBqUXVlcnkgb2JqZWN0IGludG8gYSBxdWVyeSBzdHJpbmcuXG4gKiBUaGlzIG1ldGhvZCB3aWxsIHJldHVybiBhIHN0cmluZyBpbiB0aGUgZm9ybWF0OiBuYW1lMT12YWx1ZTEmYW1wO25hbWUyPXZhbHVlMlxuICovXG4kLmZuLmZpZWxkU2VyaWFsaXplID0gZnVuY3Rpb24oc3VjY2Vzc2Z1bCkge1xuICAgIHZhciBhID0gW107XG4gICAgdGhpcy5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgbiA9IHRoaXMubmFtZTtcbiAgICAgICAgaWYgKCFuKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHYgPSAkLmZpZWxkVmFsdWUodGhpcywgc3VjY2Vzc2Z1bCk7XG4gICAgICAgIGlmICh2ICYmIHYuY29uc3RydWN0b3IgPT0gQXJyYXkpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGk9MCxtYXg9di5sZW5ndGg7IGkgPCBtYXg7IGkrKykge1xuICAgICAgICAgICAgICAgIGEucHVzaCh7bmFtZTogbiwgdmFsdWU6IHZbaV19KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh2ICE9PSBudWxsICYmIHR5cGVvZiB2ICE9ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBhLnB1c2goe25hbWU6IHRoaXMubmFtZSwgdmFsdWU6IHZ9KTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIC8vaGFuZCBvZmYgdG8galF1ZXJ5LnBhcmFtIGZvciBwcm9wZXIgZW5jb2RpbmdcbiAgICByZXR1cm4gJC5wYXJhbShhKTtcbn07XG5cbi8qKlxuICogUmV0dXJucyB0aGUgdmFsdWUocykgb2YgdGhlIGVsZW1lbnQgaW4gdGhlIG1hdGNoZWQgc2V0LiAgRm9yIGV4YW1wbGUsIGNvbnNpZGVyIHRoZSBmb2xsb3dpbmcgZm9ybTpcbiAqXG4gKiAgPGZvcm0+PGZpZWxkc2V0PlxuICogICAgICA8aW5wdXQgbmFtZT1cIkFcIiB0eXBlPVwidGV4dFwiIC8+XG4gKiAgICAgIDxpbnB1dCBuYW1lPVwiQVwiIHR5cGU9XCJ0ZXh0XCIgLz5cbiAqICAgICAgPGlucHV0IG5hbWU9XCJCXCIgdHlwZT1cImNoZWNrYm94XCIgdmFsdWU9XCJCMVwiIC8+XG4gKiAgICAgIDxpbnB1dCBuYW1lPVwiQlwiIHR5cGU9XCJjaGVja2JveFwiIHZhbHVlPVwiQjJcIi8+XG4gKiAgICAgIDxpbnB1dCBuYW1lPVwiQ1wiIHR5cGU9XCJyYWRpb1wiIHZhbHVlPVwiQzFcIiAvPlxuICogICAgICA8aW5wdXQgbmFtZT1cIkNcIiB0eXBlPVwicmFkaW9cIiB2YWx1ZT1cIkMyXCIgLz5cbiAqICA8L2ZpZWxkc2V0PjwvZm9ybT5cbiAqXG4gKiAgdmFyIHYgPSAkKCdpbnB1dFt0eXBlPXRleHRdJykuZmllbGRWYWx1ZSgpO1xuICogIC8vIGlmIG5vIHZhbHVlcyBhcmUgZW50ZXJlZCBpbnRvIHRoZSB0ZXh0IGlucHV0c1xuICogIHYgPT0gWycnLCcnXVxuICogIC8vIGlmIHZhbHVlcyBlbnRlcmVkIGludG8gdGhlIHRleHQgaW5wdXRzIGFyZSAnZm9vJyBhbmQgJ2JhcidcbiAqICB2ID09IFsnZm9vJywnYmFyJ11cbiAqXG4gKiAgdmFyIHYgPSAkKCdpbnB1dFt0eXBlPWNoZWNrYm94XScpLmZpZWxkVmFsdWUoKTtcbiAqICAvLyBpZiBuZWl0aGVyIGNoZWNrYm94IGlzIGNoZWNrZWRcbiAqICB2ID09PSB1bmRlZmluZWRcbiAqICAvLyBpZiBib3RoIGNoZWNrYm94ZXMgYXJlIGNoZWNrZWRcbiAqICB2ID09IFsnQjEnLCAnQjInXVxuICpcbiAqICB2YXIgdiA9ICQoJ2lucHV0W3R5cGU9cmFkaW9dJykuZmllbGRWYWx1ZSgpO1xuICogIC8vIGlmIG5laXRoZXIgcmFkaW8gaXMgY2hlY2tlZFxuICogIHYgPT09IHVuZGVmaW5lZFxuICogIC8vIGlmIGZpcnN0IHJhZGlvIGlzIGNoZWNrZWRcbiAqICB2ID09IFsnQzEnXVxuICpcbiAqIFRoZSBzdWNjZXNzZnVsIGFyZ3VtZW50IGNvbnRyb2xzIHdoZXRoZXIgb3Igbm90IHRoZSBmaWVsZCBlbGVtZW50IG11c3QgYmUgJ3N1Y2Nlc3NmdWwnXG4gKiAocGVyIGh0dHA6Ly93d3cudzMub3JnL1RSL2h0bWw0L2ludGVyYWN0L2Zvcm1zLmh0bWwjc3VjY2Vzc2Z1bC1jb250cm9scykuXG4gKiBUaGUgZGVmYXVsdCB2YWx1ZSBvZiB0aGUgc3VjY2Vzc2Z1bCBhcmd1bWVudCBpcyB0cnVlLiAgSWYgdGhpcyB2YWx1ZSBpcyBmYWxzZSB0aGUgdmFsdWUocylcbiAqIGZvciBlYWNoIGVsZW1lbnQgaXMgcmV0dXJuZWQuXG4gKlxuICogTm90ZTogVGhpcyBtZXRob2QgKmFsd2F5cyogcmV0dXJucyBhbiBhcnJheS4gIElmIG5vIHZhbGlkIHZhbHVlIGNhbiBiZSBkZXRlcm1pbmVkIHRoZVxuICogICAgYXJyYXkgd2lsbCBiZSBlbXB0eSwgb3RoZXJ3aXNlIGl0IHdpbGwgY29udGFpbiBvbmUgb3IgbW9yZSB2YWx1ZXMuXG4gKi9cbiQuZm4uZmllbGRWYWx1ZSA9IGZ1bmN0aW9uKHN1Y2Nlc3NmdWwpIHtcbiAgICBmb3IgKHZhciB2YWw9W10sIGk9MCwgbWF4PXRoaXMubGVuZ3RoOyBpIDwgbWF4OyBpKyspIHtcbiAgICAgICAgdmFyIGVsID0gdGhpc1tpXTtcbiAgICAgICAgdmFyIHYgPSAkLmZpZWxkVmFsdWUoZWwsIHN1Y2Nlc3NmdWwpO1xuICAgICAgICBpZiAodiA9PT0gbnVsbCB8fCB0eXBlb2YgdiA9PSAndW5kZWZpbmVkJyB8fCAodi5jb25zdHJ1Y3RvciA9PSBBcnJheSAmJiAhdi5sZW5ndGgpKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodi5jb25zdHJ1Y3RvciA9PSBBcnJheSkge1xuICAgICAgICAgICAgJC5tZXJnZSh2YWwsIHYpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFsLnB1c2godik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHZhbDtcbn07XG5cbi8qKlxuICogUmV0dXJucyB0aGUgdmFsdWUgb2YgdGhlIGZpZWxkIGVsZW1lbnQuXG4gKi9cbiQuZmllbGRWYWx1ZSA9IGZ1bmN0aW9uKGVsLCBzdWNjZXNzZnVsKSB7XG4gICAgdmFyIG4gPSBlbC5uYW1lLCB0ID0gZWwudHlwZSwgdGFnID0gZWwudGFnTmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgIGlmIChzdWNjZXNzZnVsID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgc3VjY2Vzc2Z1bCA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHN1Y2Nlc3NmdWwgJiYgKCFuIHx8IGVsLmRpc2FibGVkIHx8IHQgPT0gJ3Jlc2V0JyB8fCB0ID09ICdidXR0b24nIHx8XG4gICAgICAgICh0ID09ICdjaGVja2JveCcgfHwgdCA9PSAncmFkaW8nKSAmJiAhZWwuY2hlY2tlZCB8fFxuICAgICAgICAodCA9PSAnc3VibWl0JyB8fCB0ID09ICdpbWFnZScpICYmIGVsLmZvcm0gJiYgZWwuZm9ybS5jbGsgIT0gZWwgfHxcbiAgICAgICAgdGFnID09ICdzZWxlY3QnICYmIGVsLnNlbGVjdGVkSW5kZXggPT0gLTEpKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAodGFnID09ICdzZWxlY3QnKSB7XG4gICAgICAgIHZhciBpbmRleCA9IGVsLnNlbGVjdGVkSW5kZXg7XG4gICAgICAgIGlmIChpbmRleCA8IDApIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHZhciBhID0gW10sIG9wcyA9IGVsLm9wdGlvbnM7XG4gICAgICAgIHZhciBvbmUgPSAodCA9PSAnc2VsZWN0LW9uZScpO1xuICAgICAgICB2YXIgbWF4ID0gKG9uZSA/IGluZGV4KzEgOiBvcHMubGVuZ3RoKTtcbiAgICAgICAgZm9yKHZhciBpPShvbmUgPyBpbmRleCA6IDApOyBpIDwgbWF4OyBpKyspIHtcbiAgICAgICAgICAgIHZhciBvcCA9IG9wc1tpXTtcbiAgICAgICAgICAgIGlmIChvcC5zZWxlY3RlZCkge1xuICAgICAgICAgICAgICAgIHZhciB2ID0gb3AudmFsdWU7XG4gICAgICAgICAgICAgICAgaWYgKCF2KSB7IC8vIGV4dHJhIHBhaW4gZm9yIElFLi4uXG4gICAgICAgICAgICAgICAgICAgIHYgPSAob3AuYXR0cmlidXRlcyAmJiBvcC5hdHRyaWJ1dGVzLnZhbHVlICYmICEob3AuYXR0cmlidXRlcy52YWx1ZS5zcGVjaWZpZWQpKSA/IG9wLnRleHQgOiBvcC52YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKG9uZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYS5wdXNoKHYpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhO1xuICAgIH1cbiAgICByZXR1cm4gJChlbCkudmFsKCk7XG59O1xuXG4vKipcbiAqIENsZWFycyB0aGUgZm9ybSBkYXRhLiAgVGFrZXMgdGhlIGZvbGxvd2luZyBhY3Rpb25zIG9uIHRoZSBmb3JtJ3MgaW5wdXQgZmllbGRzOlxuICogIC0gaW5wdXQgdGV4dCBmaWVsZHMgd2lsbCBoYXZlIHRoZWlyICd2YWx1ZScgcHJvcGVydHkgc2V0IHRvIHRoZSBlbXB0eSBzdHJpbmdcbiAqICAtIHNlbGVjdCBlbGVtZW50cyB3aWxsIGhhdmUgdGhlaXIgJ3NlbGVjdGVkSW5kZXgnIHByb3BlcnR5IHNldCB0byAtMVxuICogIC0gY2hlY2tib3ggYW5kIHJhZGlvIGlucHV0cyB3aWxsIGhhdmUgdGhlaXIgJ2NoZWNrZWQnIHByb3BlcnR5IHNldCB0byBmYWxzZVxuICogIC0gaW5wdXRzIG9mIHR5cGUgc3VibWl0LCBidXR0b24sIHJlc2V0LCBhbmQgaGlkZGVuIHdpbGwgKm5vdCogYmUgZWZmZWN0ZWRcbiAqICAtIGJ1dHRvbiBlbGVtZW50cyB3aWxsICpub3QqIGJlIGVmZmVjdGVkXG4gKi9cbiQuZm4uY2xlYXJGb3JtID0gZnVuY3Rpb24oaW5jbHVkZUhpZGRlbikge1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICQoJ2lucHV0LHNlbGVjdCx0ZXh0YXJlYScsIHRoaXMpLmNsZWFyRmllbGRzKGluY2x1ZGVIaWRkZW4pO1xuICAgIH0pO1xufTtcblxuLyoqXG4gKiBDbGVhcnMgdGhlIHNlbGVjdGVkIGZvcm0gZWxlbWVudHMuXG4gKi9cbiQuZm4uY2xlYXJGaWVsZHMgPSAkLmZuLmNsZWFySW5wdXRzID0gZnVuY3Rpb24oaW5jbHVkZUhpZGRlbikge1xuICAgIHZhciByZSA9IC9eKD86Y29sb3J8ZGF0ZXxkYXRldGltZXxlbWFpbHxtb250aHxudW1iZXJ8cGFzc3dvcmR8cmFuZ2V8c2VhcmNofHRlbHx0ZXh0fHRpbWV8dXJsfHdlZWspJC9pOyAvLyAnaGlkZGVuJyBpcyBub3QgaW4gdGhpcyBsaXN0XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHQgPSB0aGlzLnR5cGUsIHRhZyA9IHRoaXMudGFnTmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBpZiAocmUudGVzdCh0KSB8fCB0YWcgPT0gJ3RleHRhcmVhJykge1xuICAgICAgICAgICAgdGhpcy52YWx1ZSA9ICcnO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHQgPT0gJ2NoZWNrYm94JyB8fCB0ID09ICdyYWRpbycpIHtcbiAgICAgICAgICAgIHRoaXMuY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRhZyA9PSAnc2VsZWN0Jykge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gLTE7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodCA9PSBcImZpbGVcIikge1xuICAgICAgICAgICAgaWYgKC9NU0lFLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpKSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5yZXBsYWNlV2l0aCgkKHRoaXMpLmNsb25lKHRydWUpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS52YWwoJycpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGluY2x1ZGVIaWRkZW4pIHtcbiAgICAgICAgICAgIC8vIGluY2x1ZGVIaWRkZW4gY2FuIGJlIHRoZSB2YWx1ZSB0cnVlLCBvciBpdCBjYW4gYmUgYSBzZWxlY3RvciBzdHJpbmdcbiAgICAgICAgICAgIC8vIGluZGljYXRpbmcgYSBzcGVjaWFsIHRlc3Q7IGZvciBleGFtcGxlOlxuICAgICAgICAgICAgLy8gICQoJyNteUZvcm0nKS5jbGVhckZvcm0oJy5zcGVjaWFsOmhpZGRlbicpXG4gICAgICAgICAgICAvLyB0aGUgYWJvdmUgd291bGQgY2xlYW4gaGlkZGVuIGlucHV0cyB0aGF0IGhhdmUgdGhlIGNsYXNzIG9mICdzcGVjaWFsJ1xuICAgICAgICAgICAgaWYgKCAoaW5jbHVkZUhpZGRlbiA9PT0gdHJ1ZSAmJiAvaGlkZGVuLy50ZXN0KHQpKSB8fFxuICAgICAgICAgICAgICAgICAodHlwZW9mIGluY2x1ZGVIaWRkZW4gPT0gJ3N0cmluZycgJiYgJCh0aGlzKS5pcyhpbmNsdWRlSGlkZGVuKSkgKSB7XG4gICAgICAgICAgICAgICAgdGhpcy52YWx1ZSA9ICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59O1xuXG4vKipcbiAqIFJlc2V0cyB0aGUgZm9ybSBkYXRhLiAgQ2F1c2VzIGFsbCBmb3JtIGVsZW1lbnRzIHRvIGJlIHJlc2V0IHRvIHRoZWlyIG9yaWdpbmFsIHZhbHVlLlxuICovXG4kLmZuLnJlc2V0Rm9ybSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgIC8vIGd1YXJkIGFnYWluc3QgYW4gaW5wdXQgd2l0aCB0aGUgbmFtZSBvZiAncmVzZXQnXG4gICAgICAgIC8vIG5vdGUgdGhhdCBJRSByZXBvcnRzIHRoZSByZXNldCBmdW5jdGlvbiBhcyBhbiAnb2JqZWN0J1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMucmVzZXQgPT0gJ2Z1bmN0aW9uJyB8fCAodHlwZW9mIHRoaXMucmVzZXQgPT0gJ29iamVjdCcgJiYgIXRoaXMucmVzZXQubm9kZVR5cGUpKSB7XG4gICAgICAgICAgICB0aGlzLnJlc2V0KCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn07XG5cbi8qKlxuICogRW5hYmxlcyBvciBkaXNhYmxlcyBhbnkgbWF0Y2hpbmcgZWxlbWVudHMuXG4gKi9cbiQuZm4uZW5hYmxlID0gZnVuY3Rpb24oYikge1xuICAgIGlmIChiID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgYiA9IHRydWU7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuZGlzYWJsZWQgPSAhYjtcbiAgICB9KTtcbn07XG5cbi8qKlxuICogQ2hlY2tzL3VuY2hlY2tzIGFueSBtYXRjaGluZyBjaGVja2JveGVzIG9yIHJhZGlvIGJ1dHRvbnMgYW5kXG4gKiBzZWxlY3RzL2Rlc2VsZWN0cyBhbmQgbWF0Y2hpbmcgb3B0aW9uIGVsZW1lbnRzLlxuICovXG4kLmZuLnNlbGVjdGVkID0gZnVuY3Rpb24oc2VsZWN0KSB7XG4gICAgaWYgKHNlbGVjdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHNlbGVjdCA9IHRydWU7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciB0ID0gdGhpcy50eXBlO1xuICAgICAgICBpZiAodCA9PSAnY2hlY2tib3gnIHx8IHQgPT0gJ3JhZGlvJykge1xuICAgICAgICAgICAgdGhpcy5jaGVja2VkID0gc2VsZWN0O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09ICdvcHRpb24nKSB7XG4gICAgICAgICAgICB2YXIgJHNlbCA9ICQodGhpcykucGFyZW50KCdzZWxlY3QnKTtcbiAgICAgICAgICAgIGlmIChzZWxlY3QgJiYgJHNlbFswXSAmJiAkc2VsWzBdLnR5cGUgPT0gJ3NlbGVjdC1vbmUnKSB7XG4gICAgICAgICAgICAgICAgLy8gZGVzZWxlY3QgYWxsIG90aGVyIG9wdGlvbnNcbiAgICAgICAgICAgICAgICAkc2VsLmZpbmQoJ29wdGlvbicpLnNlbGVjdGVkKGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWQgPSBzZWxlY3Q7XG4gICAgICAgIH1cbiAgICB9KTtcbn07XG5cbi8vIGV4cG9zZSBkZWJ1ZyB2YXJcbiQuZm4uYWpheFN1Ym1pdC5kZWJ1ZyA9IGZhbHNlO1xuXG4vLyBoZWxwZXIgZm4gZm9yIGNvbnNvbGUgbG9nZ2luZ1xuZnVuY3Rpb24gbG9nKCkge1xuICAgIGlmICghJC5mbi5hamF4U3VibWl0LmRlYnVnKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIG1zZyA9ICdbanF1ZXJ5LmZvcm1dICcgKyBBcnJheS5wcm90b3R5cGUuam9pbi5jYWxsKGFyZ3VtZW50cywnJyk7XG4gICAgaWYgKHdpbmRvdy5jb25zb2xlICYmIHdpbmRvdy5jb25zb2xlLmxvZykge1xuICAgICAgICB3aW5kb3cuY29uc29sZS5sb2cobXNnKTtcbiAgICB9XG4gICAgZWxzZSBpZiAod2luZG93Lm9wZXJhICYmIHdpbmRvdy5vcGVyYS5wb3N0RXJyb3IpIHtcbiAgICAgICAgd2luZG93Lm9wZXJhLnBvc3RFcnJvcihtc2cpO1xuICAgIH1cbn1cblxufSkpO1xuIiwiKGZ1bmN0aW9uKCkge1xuICB2YXIgc2VxdWVuY2VzID0gW107XG4gIHZhciBzZXF1ZW5jZUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlcXVlbmNlMVwiKTtcbiAgdmFyIHNlcXVlbmNlRWxlbWVudDIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlcXVlbmNlMlwiKTtcbiAgaWYgKHNlcXVlbmNlRWxlbWVudCA9PSBudWxsIHx8IHNlcXVlbmNlRWxlbWVudDIgPT0gbnVsbCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBvcHRpb25zID0ge1xuICAgIGFuaW1hdGVDYW52YXM6IGZhbHNlLFxuICAgIGtleU5hdmlnYXRpb246IHRydWUsXG4gICAgZmFkZVN0ZXBXaGVuU2tpcHBlZDogZmFsc2UsXG4gICAgLy8gcmV2ZXJzZVdoZW5OYXZpZ2F0aW5nQmFja3dhcmRzOiB0cnVlLFxuICAgIC8vIG5leHRCdXR0b246ICcjc2VxdWVuY2UxIC5zZXEtcHJldicsXG4gICAgLy8gcHJldkJ1dHRvbjogJyNzZXF1ZW5jZTEgLnNlcS1uZXh0JyxcbiAgICBwYWdpbmF0aW9uOiAnI3NlcXVlbmNlMSAuc2xpZGVyX19wYWdpbmF0aW9uJyxcbiAgICBwcmVsb2FkZXI6IGZhbHNlLFxuICAgIC8vIHJldmVyc2VUaW1pbmdGdW5jdGlvbldoZW5OYXZpZ2F0aW5nQmFja3dhcmRzOiB0cnVlLFxuICB9XG5cbiAgdmFyIG9wdGlvbnMyID0ge1xuICAgIGFuaW1hdGVDYW52YXM6IHRydWUsXG4gICAga2V5TmF2aWdhdGlvbjogZmFsc2UsXG4gICAgZmFkZVN0ZXBXaGVuU2tpcHBlZDogZmFsc2UsXG4gICAgcmV2ZXJzZVdoZW5OYXZpZ2F0aW5nQmFja3dhcmRzOiB0cnVlLFxuICAgIG5leHRCdXR0b246ICcud3JhcHBlcl9tYWMgLnNlcS1uZXh0JyxcbiAgICBwcmV2QnV0dG9uOiAnLndyYXBwZXJfbWFjIC5zZXEtcHJldicsXG4gICAgLy8gcGFnaW5hdGlvbjogJyNzZXF1ZW5jZTEgLnNsaWRlcl9fcGFnaW5hdGlvbicsXG4gICAgcHJlbG9hZGVyOiBmYWxzZSxcbiAgICAvLyByZXZlcnNlVGltaW5nRnVuY3Rpb25XaGVuTmF2aWdhdGluZ0JhY2t3YXJkczogdHJ1ZSxcbiAgfVxuXG4gIHZhciBteVNlcXVlbmNlID0gc2VxdWVuY2Uoc2VxdWVuY2VFbGVtZW50LCBvcHRpb25zKTtcblxuICB2YXIgbXlTZXF1ZW5jZTIgPSBzZXF1ZW5jZShzZXF1ZW5jZUVsZW1lbnQyLCBvcHRpb25zMik7XG4gIHNlcXVlbmNlcy5wdXNoKHtlbGVtOiBzZXF1ZW5jZUVsZW1lbnQsIHNlcTogbXlTZXF1ZW5jZX0pO1xuICBzZXF1ZW5jZXMucHVzaCh7ZWxlbTogc2VxdWVuY2VFbGVtZW50Miwgc2VxOiBteVNlcXVlbmNlMn0pO1xuICBtb2R1bGUuZXhwb3J0cyA9IHNlcXVlbmNlcztcbn0pKCk7XG4iXX0=
