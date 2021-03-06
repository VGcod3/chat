!function() {
    'use strict';
    var e = {
        WIDGET: document.getElementById('widget'),
        SETTING__BTN: document.getElementById('setting-btn'),
        INPUT: document.getElementById('write__input'),
        WRITE__BTN: document.getElementById('write__btn'),
        CONTAINER: document.getElementById('message-container'),
        EXIT: document.getElementById('exit-btn'),
        AUTHORIZATION: document.getElementById('authorization'),
        AUTHORIZATION__CLOSE: document.getElementById('authorization-close'),
    }, t = {
        WINDOW: document.getElementById('setting-window'),
        CLOSE__BTN: document.getElementById('setting-window__close'),
    };

    function n(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
        }
    }

    var i = function() {
        function i() {
            !function(e, t) {
                if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
            }(this, i), this.WIDGET = e.WIDGET, this.SETTING__BTN = e.SETTING__BTN, this.WINDOW = t.WINDOW, this.CLOSE__BTN = t.CLOSE__BTN, this.input = e.INPUT, this.inputBtn = e.WRITE__BTN, this.exit = e.EXIT, this.container = e.CONTAINER;
        }

        var o, s;
        return o = i, (s = [{
            key: 'init', value: function() {
                var e = this;
                this.container.scrollIntoView(!1), this.SETTING__BTN.addEventListener('click', (function() {
                    e.showWindow();
                })), this.CLOSE__BTN.addEventListener('click', (function() {
                    e.closeWindow();
                }));
            },
        }, {
            key: 'showWindow', value: function() {
                this.WINDOW.style.display = 'flex', this.WIDGET.style.display = 'none';
            },
        }, {
            key: 'closeWindow', value: function() {
                this.WINDOW.style.display = 'none', this.WIDGET.style.display = 'flex';
            },
        }]) && n(o.prototype, s), Object.defineProperty(o, 'prototype', {writable: !1}), i;
    }();

    function o(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
        }
    }

    var s = function() {
        function t() {
            !function(e, t) {
                if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
            }(this, t), this.input = e.INPUT, this.inputBtn = e.WRITE__BTN, this.container = e.CONTAINER;
        }

        var n, i;
        return n = t, (i = [{
            key: 'init', value: function() {
                var e = this;
                this.input.addEventListener('keydown', (function(t) {
                    'Enter' === t.key && e.input.value && (e.sendMessage(e.input.value), e.input.value = '');
                })), this.inputBtn.addEventListener('click', (function(t) {
                    e.input.value && (e.sendMessage(e.input.value), e.input.value = '');
                }));
            },
        }, {
            key: 'sendMessage', value: function(e) {
                var t = new Date, n = document.createElement('div');
                n.className = 'message my-message', n.innerHTML = function(e, t, n) {
                    return n = n.split(':').splice(0, 2).join(':'), '\n        <div class="message-inner"><div class="userNoSelect">'.concat('??', ':</div><div>').concat(t, '</div></div>\n        <div class="send-time">').concat(n, '</div>\n    ');
                }(0, e, t.toLocaleTimeString()), this.container.prepend(n), this.container.scrollBy(0, this.container.offsetHeight - this.container.scrollTop);
            },
        }]) && o(n.prototype, i), Object.defineProperty(n, 'prototype', {writable: !1}), t;
    }();

    function a(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
        }
    }

    var c = function() {
        function t() {
            !function(e, t) {
                if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
            }(this, t), this.authorizationBlock = e.AUTHORIZATION, this.widget = e.WIDGET, this.exit = e.EXIT, this.closeAuthorization = e.AUTHORIZATION__CLOSE;
        }

        var n, i;
        return n = t, (i = [{
            key: 'init', value: function() {
                var e = this;
                this.exit.addEventListener('click', (function() {
                    e.showWindow();
                })), this.closeAuthorization.addEventListener('click', (function() {
                    e.closeWindow();
                }));
            },
        }, {
            key: 'showWindow', value: function() {
                this.authorizationBlock.style.display = 'flex', this.widget.style.display = 'none';
            },
        }, {
            key: 'closeWindow', value: function() {
                this.authorizationBlock.style.display = 'none', this.widget.style.display = 'flex';
            },
        }]) && a(n.prototype, i), Object.defineProperty(n, 'prototype', {writable: !1}), t;
    }(), r = new s, l = new i, u = new c;
    r.init(), l.init(), u.init();
}();
//# sourceMappingURL=scripts.js.map