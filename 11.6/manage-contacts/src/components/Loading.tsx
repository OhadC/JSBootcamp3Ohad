import * as React from 'react'
import * as classNames from "classnames";

const Loading = (props) => {
    return (
        <div className={classNames("loading", { active: props.isLoading })}>
            Loading ...
        </div>
    )
}

export default Loading
