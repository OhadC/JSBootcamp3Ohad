import * as React from 'react'

const Clock = (props: { time: Date | null }) => {
    let str = 'Error'
    if (!!props.time) {
        str = props.time.getHours() + ":" + toTwoDigits(props.time.getMinutes()) + ":" + toTwoDigits(props.time.getSeconds())
    }
    return (
        <div>{str}</div>
    )

    function toTwoDigits(number: number) {
        return ("0" + number).slice(-2)
    }
}

export default Clock
