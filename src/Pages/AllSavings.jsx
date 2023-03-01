import React from 'react'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import TopHeader from '../Components/Heading/TopHeader'
import SavingsNav from '../Components/Nav/SavingsNav'

const AllSavings = () => {
  return (
    <ALLSAVINGS>
      <TopHeader title={"Piggybank"} img/>
      <SavingsNav />
      <Outlet />
    </ALLSAVINGS>
  )
}

const ALLSAVINGS = styled.section`
  
`
export default AllSavings