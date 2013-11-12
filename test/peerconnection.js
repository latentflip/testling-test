var test = require('tape');

test('PeerConnection', function (t) {
    t.plan(1);

    var prefixed = typeof(webkitRTCPeerConnection) !== 'undefined';
    var unprefixed = typeof(RTCPeerConnection) !== 'undefined';
    console.log(prefixed, unprefixed, prefixed || unprefixed);
    t.ok(prefixed || unprefixed, "RTCPeerConnection exists");
});
