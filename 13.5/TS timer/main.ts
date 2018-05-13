class Timer {
    private callbacks = []
    private intervalID;

    constructor(private interval) { }

    tick(callback) {
        this.callbacks.push(callback)
    }

    start() {
        this.intervalID = setInterval(() => {
            this.callbacks.forEach(callback => callback())
        }, this.interval)
    }

    stop() {
        if (this.intervalID) {
            clearInterval(this.intervalID)
            this.intervalID = undefined
        }
    }
}

main();

function main() {
    const timer = new Timer(1500);
    timer.tick(onTick1);
    timer.tick(onTick2);

    timer.start();

    function onTick1() {
        console.log("tick1");
    }

    let counter = 0;
    function onTick2() {
        console.log("tick2");

        if (++counter == 3) {
            timer.stop();
        }
    }
}
