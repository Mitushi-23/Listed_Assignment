import React from 'react'
import Sec1_card from '../../components/Sec1_card'
import { data } from '../../card'

const Section1 = () => {
  const screenWidth = window.innerWidth;
  return (
    <>
    <div className="sec1_contain display_flex  justify_between vertical_margin" style={{flexWrap:'wrap'}}>
    {
      data.map((item)=>(
        <Sec1_card icon={item.icon} text={item.text} amount={item.amount} badge_value={item.badge_value} bg={item.bg}/>

      ))
    }
    </div>
    </>
  )
}

export default Section1