var Timer = /** @class */ (function () {
    function Timer(interval) {
        this.interval = interval;
        this.callbacks = [];
    }
    Timer.prototype.tick = function (callback) {
        this.callbacks.push(callback);
    };
    Timer.prototype.start = function () {
        var _this = this;
        this.intervalID = setInterval(function () {
            _this.callbacks.forEach(function (callback) { return callback(); });
        }, this.interval);
    };
    Timer.prototype.stop = function () {
        if (this.intervalID) {
            clearInterval(this.intervalID);
            this.intervalID = undefined;
        }
    };
    return Timer;
}());
main();
function main() {
    var timer = new Timer(1500);
    timer.tick(onTick1);
    timer.tick(onTick2);
    timer.start();
    function onTick1() {
        console.log("tick1");
    }
    var counter = 0;
    function onTick2() {
        console.log("tick2");
        if (++counter == 3) {
            timer.stop();
        }
    }
}
//# sourceMappingURL=main.js.map