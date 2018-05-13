var Timer = /** @class */ (function () {
    function Timer(interval) {
        this.interval = interval;
        this.onTime = [];
    }
    Timer.prototype.tick = function (onTick) {
        this.onTime.push(onTick);
    };
    Timer.prototype.start = function () {
        var _this = this;
        this.intervalID = setInterval(function () {
            _this.onTime.forEach(function (func) { return func(); });
        }, this.interval);
    };
    Timer.prototype.stop = function () {
        clearInterval(this.intervalID);
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