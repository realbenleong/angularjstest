import React from 'react'

const Hello = () => {
    // return (
    //     <div>
    //         <h5>Hello</h5>
    //     </div>
    // )

    return React.createElement('div',{id:'helloBitch',className:'dummy'},
        React.createElement('h5',null,'Hello cuck'))
}

export default Hello