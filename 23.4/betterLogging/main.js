function BetterLogging(level){
    this.level = level

    this.log = (...args) => this.logIfHigher(0, ...args)
    this.info = (...args) => this.logIfHigher(1, ...args)
    this.warn = (...args) => this.logIfHigher(2, ...args)
    this.error = (...args) => this.logIfHigher(3, ...args)
    
    this.logIfHigher = (messageLevel, ...args) => messageLevel >= this.level ? console.log(...args) : null
}

let better = new BetterLogging(0)
better.error("blabla", "another", 53564, "......")
