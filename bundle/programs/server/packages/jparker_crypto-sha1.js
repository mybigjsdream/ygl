(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;
var CryptoJS = Package['jparker:crypto-core'].CryptoJS;

(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                         //
// packages/jparker_crypto-sha1/packages/jparker_crypto-sha1.js                                            //
//                                                                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                           //
(function () {

//////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                  //
// packages/jparker:crypto-sha1/lib/sha1.js                                                         //
//                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                    //
/*                                                                                                  // 1
CryptoJS v3.1.2                                                                                     // 2
code.google.com/p/crypto-js                                                                         // 3
(c) 2009-2013 by Jeff Mott. All rights reserved.                                                    // 4
code.google.com/p/crypto-js/wiki/License                                                            // 5
*/                                                                                                  // 6
(function () {                                                                                      // 7
    // Shortcuts                                                                                    // 8
    var C = CryptoJS;                                                                               // 9
    var C_lib = C.lib;                                                                              // 10
    var WordArray = C_lib.WordArray;                                                                // 11
    var Hasher = C_lib.Hasher;                                                                      // 12
    var C_algo = C.algo;                                                                            // 13
                                                                                                    // 14
    // Reusable object                                                                              // 15
    var W = [];                                                                                     // 16
                                                                                                    // 17
    /**                                                                                             // 18
     * SHA-1 hash algorithm.                                                                        // 19
     */                                                                                             // 20
    var SHA1 = C_algo.SHA1 = Hasher.extend({                                                        // 21
        _doReset: function () {                                                                     // 22
            this._hash = new WordArray.init([                                                       // 23
                0x67452301, 0xefcdab89,                                                             // 24
                0x98badcfe, 0x10325476,                                                             // 25
                0xc3d2e1f0                                                                          // 26
            ]);                                                                                     // 27
        },                                                                                          // 28
                                                                                                    // 29
        _doProcessBlock: function (M, offset) {                                                     // 30
            // Shortcut                                                                             // 31
            var H = this._hash.words;                                                               // 32
                                                                                                    // 33
            // Working variables                                                                    // 34
            var a = H[0];                                                                           // 35
            var b = H[1];                                                                           // 36
            var c = H[2];                                                                           // 37
            var d = H[3];                                                                           // 38
            var e = H[4];                                                                           // 39
                                                                                                    // 40
            // Computation                                                                          // 41
            for (var i = 0; i < 80; i++) {                                                          // 42
                if (i < 16) {                                                                       // 43
                    W[i] = M[offset + i] | 0;                                                       // 44
                } else {                                                                            // 45
                    var n = W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16];                            // 46
                    W[i] = (n << 1) | (n >>> 31);                                                   // 47
                }                                                                                   // 48
                                                                                                    // 49
                var t = ((a << 5) | (a >>> 27)) + e + W[i];                                         // 50
                if (i < 20) {                                                                       // 51
                    t += ((b & c) | (~b & d)) + 0x5a827999;                                         // 52
                } else if (i < 40) {                                                                // 53
                    t += (b ^ c ^ d) + 0x6ed9eba1;                                                  // 54
                } else if (i < 60) {                                                                // 55
                    t += ((b & c) | (b & d) | (c & d)) - 0x70e44324;                                // 56
                } else /* if (i < 80) */ {                                                          // 57
                    t += (b ^ c ^ d) - 0x359d3e2a;                                                  // 58
                }                                                                                   // 59
                                                                                                    // 60
                e = d;                                                                              // 61
                d = c;                                                                              // 62
                c = (b << 30) | (b >>> 2);                                                          // 63
                b = a;                                                                              // 64
                a = t;                                                                              // 65
            }                                                                                       // 66
                                                                                                    // 67
            // Intermediate hash value                                                              // 68
            H[0] = (H[0] + a) | 0;                                                                  // 69
            H[1] = (H[1] + b) | 0;                                                                  // 70
            H[2] = (H[2] + c) | 0;                                                                  // 71
            H[3] = (H[3] + d) | 0;                                                                  // 72
            H[4] = (H[4] + e) | 0;                                                                  // 73
        },                                                                                          // 74
                                                                                                    // 75
        _doFinalize: function () {                                                                  // 76
            // Shortcuts                                                                            // 77
            var data = this._data;                                                                  // 78
            var dataWords = data.words;                                                             // 79
                                                                                                    // 80
            var nBitsTotal = this._nDataBytes * 8;                                                  // 81
            var nBitsLeft = data.sigBytes * 8;                                                      // 82
                                                                                                    // 83
            // Add padding                                                                          // 84
            dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - nBitsLeft % 32);                            // 85
            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 14] = Math.floor(nBitsTotal / 0x100000000); // 86
            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 15] = nBitsTotal;                           // 87
            data.sigBytes = dataWords.length * 4;                                                   // 88
                                                                                                    // 89
            // Hash final blocks                                                                    // 90
            this._process();                                                                        // 91
                                                                                                    // 92
            // Return final computed hash                                                           // 93
            return this._hash;                                                                      // 94
        },                                                                                          // 95
                                                                                                    // 96
        clone: function () {                                                                        // 97
            var clone = Hasher.clone.call(this);                                                    // 98
            clone._hash = this._hash.clone();                                                       // 99
                                                                                                    // 100
            return clone;                                                                           // 101
        }                                                                                           // 102
    });                                                                                             // 103
                                                                                                    // 104
    /**                                                                                             // 105
     * Shortcut function to the hasher's object interface.                                          // 106
     *                                                                                              // 107
     * @param {WordArray|string} message The message to hash.                                       // 108
     *                                                                                              // 109
     * @return {WordArray} The hash.                                                                // 110
     *                                                                                              // 111
     * @static                                                                                      // 112
     *                                                                                              // 113
     * @example                                                                                     // 114
     *                                                                                              // 115
     *     var hash = CryptoJS.SHA1('message');                                                     // 116
     *     var hash = CryptoJS.SHA1(wordArray);                                                     // 117
     */                                                                                             // 118
    C.SHA1 = Hasher._createHelper(SHA1);                                                            // 119
                                                                                                    // 120
    /**                                                                                             // 121
     * Shortcut function to the HMAC's object interface.                                            // 122
     *                                                                                              // 123
     * @param {WordArray|string} message The message to hash.                                       // 124
     * @param {WordArray|string} key The secret key.                                                // 125
     *                                                                                              // 126
     * @return {WordArray} The HMAC.                                                                // 127
     *                                                                                              // 128
     * @static                                                                                      // 129
     *                                                                                              // 130
     * @example                                                                                     // 131
     *                                                                                              // 132
     *     var hmac = CryptoJS.HmacSHA1(message, key);                                              // 133
     */                                                                                             // 134
    C.HmacSHA1 = Hasher._createHmacHelper(SHA1);                                                    // 135
}());                                                                                               // 136
                                                                                                    // 137
//////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['jparker:crypto-sha1'] = {};

})();

//# sourceMappingURL=jparker_crypto-sha1.js.map
