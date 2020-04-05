const vm = new Vue({
    el: "#folio",

    data: {
        hidedt: true,
        hidess: true,
        hideabr: true,
        hidecr: true,
        hideje: true,
        hideifg: true,
        hidesn: true,
        hidemsc: true,
        hideos: true,
        hidemp: true,
        yes: true
    },

    methods: {
        showdt() {
            this.hidedt = false;
            this.hidess = true;
            this.hideabr = true;
            this.hidecr = true;
            this.hideje = true;
            this.hideifg = true;
            this.hidesn = true;
            this.hidemsc = true;
            this.hideos = true;
            this.hidemp = true;
        },
    
        showss() {
            this.hidedt = true;
            this.hidess = false;
            this.hideabr = true;
            this.hidecr = true;
            this.hideje = true;
            this.hideifg = true;
            this.hidesn = true;
            this.hidemsc = true;
            this.hideos = true;
            this.hidemp = true;
        },

        showabr() {
            this.hidedt = true;
            this.hidess = true;
            this.hideabr = false;
            this.hidecr = true;
            this.hideje = true;
            this.hideifg = true;
            this.hidesn = true;
            this.hidemsc = true;
            this.hideos = true;
            this.hidemp = true;
        },

        showcr() {
            this.hidedt = true;
            this.hidess = true;
            this.hideabr = true;
            this.hidecr = false;
            this.hideje = true;
            this.hideifg = true;
            this.hidesn = true;
            this.hidemsc = true;
            this.hideos = true;
            this.hidemp = true;
        },

        showje() {
            this.hidedt = true;
            this.hidess = true;
            this.hideabr = true;
            this.hidecr = true;
            this.hideje = false;
            this.hideifg = true;
            this.hidesn = true;
            this.hidemsc = true;
            this.hideos = true;
            this.hidemp = true;        },

        showifg() {
            this.hidedt = true;
            this.hidess = true;
            this.hideabr = true;
            this.hidecr = true;
            this.hideje = true;
            this.hideifg = false;
            this.hidesn = true;
            this.hidemsc = true;
            this.hideos = true;
            this.hidemp = true;        },

        showsn() {
            this.hidedt = true;
            this.hidess = true;
            this.hideabr = true;
            this.hidecr = true;
            this.hideje = true;
            this.hideifg = true;
            this.hidesn = false;
            this.hidemsc = true;
            this.hideos = true;
            this.hidemp = true;        },

        showmsc() {
            this.hidedt = true;
            this.hidess = true;
            this.hideabr = true;
            this.hidecr = true;
            this.hideje = true;
            this.hideifg = true;
            this.hidesn = true;
            this.hidemsc = false;
            this.hideos = true;
            this.hidemp = true;        },

        showos() {
            this.hidedt = true;
            this.hidess = true;
            this.hideabr = true;
            this.hidecr = true;
            this.hideje = true;
            this.hideifg = true;
            this.hidesn = true;
            this.hidemsc = true;
            this.hideos = false;
            this.hidemp = true;        },

        showmp() {
            this.hidedt = true;
            this.hidess = true;
            this.hideabr = true;
            this.hidecr = true;
            this.hideje = true;
            this.hideifg = true;
            this.hidesn = true;
            this.hidemsc = true;
            this.hideos = true;
            this.hidemp = false;        },
    }
});