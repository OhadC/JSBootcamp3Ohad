class Timer {
    private onTime = []
    private intervalID;

    constructor(private interval) { }

    tick(onTick) {
        this.onTime.push(onTick)
    }

    start() {
        this.intervalID = setInterval(() => {
            this.onTime.forEach(func => func())
        }, this.interval)
    }

    stop() {
        clearInterval(this.intervalID)
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
