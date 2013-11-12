var test = require('tape');

test('PeerConnection', function (t) {
    t.plan(1);

    var pc = webkitRTCPeerconnection || RTCPeerConnection;
    t.ok(pc, "RTCPeerConnection exists");
});
