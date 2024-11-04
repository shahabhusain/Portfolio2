import React from 'react'
import {MdWork} from 'react-icons/md'
import ResumeTitle from './ResumeTitle'
import ResumeCard from './ResumeCard'
const Education = () => {
  return (
    <div className='w-full grid md:grid-cols-9 grid-rows-1 px-6 '>
     <div className=' col-span-4'>
      <ResumeTitle title='Experience' icon={<MdWork />} />


<ResumeCard bage='2023 - 2024'
      title='Front-end Developer'
      des='Front-End Developer with a Passion for Creating Engaging User Experiences.Skilled in building responsive and dynamic interfaces using HTML, CSS, and JavaScript frameworks like React.'
      />

<ResumeCard bage='2023 - 2024'
      title='ITSAWK Academy'
      des='Practical training from Itswak Academy.'
      />

<ResumeCard bage='1 - month'
      title='Backend'
      des='Recently started Backend'
      />
     </div>




     <div className=' w-full h-full flex items-center justify-center'>
        <span className='w-[1px] h-full inline-flex bg-zinc-800'></span>
     </div>






     <div className=' col-span-4'>
     <ResumeTitle title='Education' icon={<MdWork />} />
     <ResumeCard bage='2023 - 2027'
      title='University of Agriculture Peshawar'
      subTitle=''
      des='MERN Stack Developer and Computer Science Student at Agriculture University of Peshawar.'
      />
     </div>
    </div>
  )
}

export default Education