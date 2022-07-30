import React, {useMemo, useState} from "react"
import {Col, Row} from "antd";
import TextArea from "antd/es/input/TextArea";
const style: React.CSSProperties = { background: '#0092ff', padding: '8px 0' };

const Home =()=>{

  const [tuofeng,setTuofeng] = useState('')
  const [sta,setSta] = useState('')
  function firstUpperCase(str) {
    return str.toLowerCase().replace(/( |^)[a-z]/g, (L) => L.toUpperCase());
  }
  const sss = useMemo(()=>{
    const arr = tuofeng.split('-')
    // console.log(arr.map(i=>firstUpperCase(i.toUpperCase())))
    return arr.map(i=>firstUpperCase(i.toUpperCase())).join('')
  },[tuofeng])


  const computedSta = useMemo(()=>{

    return `const [${sta},set${firstUpperCase(sta)}] = useState('')`
  },[sta])

  // computedSta
  return <div>

    <div>
      <a href="https://www.bejson.com/convert/camel_underscore/" target={'_blank'}>快捷链接</a>
      <p>驼峰</p>
      <div style={{display:'flex'}}>
        <p></p>
        <TextArea value={tuofeng} onChange={(val)=>setTuofeng(val.target.value)}/>
        <TextArea value={sss}/>
        <TextArea value={sss}/>
      </div>
    </div>

    <div>
      <p>react useState</p>
      <div style={{display:'flex'}}>
        <p></p>
        <TextArea value={sta} onChange={(val)=>setSta(val.target.value)}/>
        <TextArea value={computedSta} />
      </div>
    </div>


  </div>;
}

export default Home
