String.prototype.ucfirst = function () {
    return this.charAt(0).toUpperCase() + this.slice(1)
};
String.prototype.isEmpty = function () {
    return (this.length === 0 || !this.trim());
};
String.prototype.ucwords = function () {
    let str = this.toLowerCase()
    let re = /(^([a-zA-Z\p{M}]))|([ -][a-zA-Z\p{M}])/g
    return str.replace(re, s => s.toUpperCase())
};
window.isset = function ($this) {
    return typeof $this !== 'undefined';
};

window.fnlang = function (key) {
    if (key && Laravel.lang !== undefined) {
        var aKey = key.split('.');

        if (aKey.length > 0) {
            var lang = Laravel.lang;
            var v;
            for (var i in aKey) {
                var k = aKey[i];
                v = lang = lang[k];

                if (v === undefined) break;
            }

            if (v !== undefined) return v;
        }
    }

    return key;
};

$.fn.serializeObject = function () {
    var o = {};
    var a = this.serializeArray();
    $.each(a, function () {
        if (o[this.name]) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
};
