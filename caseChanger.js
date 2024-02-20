import React, { useState } from 'react'

const Handler = ()=>{

    const [change, setChange]=  useState('change me')
    return(<>
    <input type="text" value={change} onChange={(e)=>setChange(e.target.value)}/>
    <div>{change.toUpperCase()}</div>
    </>

    )
}
export default Handler
