const crypto = require('crypto');
const { PAPAGO_OCR_URL } = require('../api/constants.js');

const KEY = 'yL/M=zNa0bcPQdReSfTgUhViWjXkYIZmnpo+qArOBslCt2D3uE4Fv5G6wH178xJ9K';
const HMAC_SHA1 = 'aVwDprJBYvnz1NBs8W7GBuaHQDeoynolGF5IdsxyYP6lyCzxAOG38hleJo43NnB6';
const HEX = ['102 102 102 102 048 048 013 010', '048 048 056 048 048 048', '052 098 048 048 056 050', '056 048 048 048 056 048', '0000ff', '102 102 048 048 048 048', '102 102 056 099 048 048'];

function jx(keys, code) {
    // common.js?v=210817:858
    const k = Array(4);
    let o = [];

    for (let c = 0; c < keys.length;) {
        for (let i = 0; i < k.length; i++)
            k[i] =
                KEY.indexOf(
                    keys.charAt(c++)
                );

        o.push((k[0] << 2) | (k[1] >> 4));
        if (k[2] != 64) o.push(((15 & k[1]) << 4) | (k[2] >> 2));
        if (k[3] != 64) o.push(((3 & k[2]) << 6) | k[3]);
    }

    keys = o.map((v) => String.fromCharCode(v)).join('');

    // common.js?v=210817:862
    const fi = parseInt(keys.charAt());
    keys = fi + (fi > 5 ? -5 : 4) + keys.slice(1);

    // common.js?v=210817:859
    o = [code.slice(0, -10)];

    keys.split(',').map((v, idx) => {
        const key = parseFloat(v);
        o.push(String.fromCharCode((2 * (key - idx - 1)) / (13 - idx - 1)));
    });

    return o.join('');
}

function kx() {
    const timeStamp = new Date().getTime();
    const hmac = crypto.createHmac('sha1', HMAC_SHA1).update(PAPAGO_OCR_URL).update(timeStamp.toString()).digest('base64');

    return {
        hmac,
        ts: timeStamp
    };
}

function xc() {
    // recommend_box.js?v=220929:5
    return HEX[new Date().getDay()];
}

module.exports = { jx, xc, kx }