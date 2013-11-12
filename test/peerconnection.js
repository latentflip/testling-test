var assert = require("assert");

describe('Array', function () {
    describe('RTCPeerConnection', function () {
        it('should have prefixed RT', function () {
            var prefixed = typeof(webkitRTCPeerConnection) !== 'undefined';
            assert(prefixed);
        });
    });
});
