import React from 'react'


export default function Cards() {
  return (
    <>
    <h2 className='text-2xl grid justify-center ml-10 mt-[-10%] mb-[15%] txt1'>أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ</h2>
    <div className="container flex mb-[20%] justify-between	mx-5">
        <h3 className="txt">Clock</h3>
        <h3 className="txt">Weather</h3>
    </div>
    <a href='https://estighfar.netlify.app/' className='links'>استغفار</a>
    <a href='https://adkary.netlify.app/' className='links'>أذكار</a>
    <a href='https://adhanprayers.netlify.app/' className='links'>مواقيت الصلاة</a>
    </>
  )
}
