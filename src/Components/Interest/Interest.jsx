import React from 'react'
import styled from 'styled-components'

const Interest = () => {
  return (
    <INTEREST className='interest'>
     <h5>INTEREST RATE</h5>
      <h2>10%</h2>
      <small>Per Annum</small>
    </INTEREST>
  )
}

const INTEREST = styled.div`
 border:2px solid gray;
   margin-left: auto;
   display: flex;
   flex-direction: column;
   justify-content: center;
   padding: 10px 15px;
   border-radius: 10px 10px 10px 0;
   height: 150px;
   h5{
    font-size: 10px;
    padding-bottom: 5px;
   }
   h2{
    font-size: 40px;
   }
   small{
    color: #bcbbbb;
    padding-top: 5px;
   }
`
export default Interest