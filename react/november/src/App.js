import React, { useState } from 'react'

export default function App() {
    const [workDuration,setWorkduration] = useState(25)
    const [breakDuration,setBreakduration] = useState(5)
    const [worksecond,setWorksecond] = useState(9)
    const [breaksecond,setBreaksecond] = useState(300)
    const [type,setType]= useState("Work")
    function handleSubmit(e){
       e.preventDefault()
       setWorksecond(workDuration*60)
       setBreaksecond(breakDuration*60)

       setType("Work")
    }
    const convertor=(sec)=>{
       let m = parseInt(sec/60).toString()
       let s = parseInt(sec%60).toString()
       if(m.length === 1) m="0"+m;
       if(s.length === 1) s="0"+s;
       return m+":"+s
    }
  return (
    <div>
        <div>
            <h1>{type==="Work"?convertor(worksecond):convertor(breaksecond)}</h1>
            <h1>{type}-Time</h1>
        </div>
        <div>
            <button>Start</button>
            <button>Stop</button>
            <button>Reset</button>
        </div> <br /><br />
        <div>
            <form onSubmit={handleSubmit}>
                <input type="number" placeholder='Work Duration'
                value={workDuration} onChange={(e)=>setWorkduration(e.target.value)}/>
                <input type="number" placeholder='Break Duration'
                value={breakDuration} onChange={(e)=>setBreakduration(e.target.value)}/>
                <input type="submit" value="Set" />
            </form>
        </div>
    </div>

  )
}
