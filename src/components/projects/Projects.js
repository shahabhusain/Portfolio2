import React from 'react'
import Title from '../home/Title'
import ProjectCard from './ProjectCard'
import workImage1 from '../../assets/work/Capture.PNG'
import workImage2 from '../../assets/work/Capture1.PNG'
import workImage4 from '../../assets/work/Capture3.PNG'
import workImage5 from '../../assets/work/Capture4.PNG'
import workImage6 from '../../assets/work/Capture5.PNG'
import workImage7 from '../../assets/work/Capture6.PNG'
import workImage8 from '../../assets/work/Capture7.PNG'
import workImage9 from '../../assets/work/Capture8.PNG'
import workImage10 from '../../assets/work/Capture9.PNG'
const Projects = () => {
  return (
    <div>
      <Title title='Recent' subTitle="Projects" />
      <div className=' w-full grid md:grid-cols-2 grid-cols-1 gap-2'>
        <div className=' px-6'>
          <ProjectCard
          title='Blog Website'
          category="Website"
          image={workImage1}
          />

<ProjectCard
          title='Blog Website'
          category="Website"
          image={workImage2}
          />


<ProjectCard
          title='Blog Website'
          category="Website"
          image={workImage1}
          />

<ProjectCard
          title='Blog Website'
          category="Website"
          image={workImage4}
          />

     </div>
        <div className=' px-6'>
        <ProjectCard
          title='Blog Website'
          category="Website"
          image={workImage5}
          />

<ProjectCard
          title='Blog Website'
          category="Website"
          image={workImage6}
          />


<ProjectCard
          title='Blog Website'
          category="Website"
          image={workImage7}
          />

<ProjectCard
          title='Blog Website'
          category="Website"
          image={workImage8}
          />

<ProjectCard
          title='Blog Website'
          category="Website"
          image={workImage9}
          />

<ProjectCard
          title='Blog Website'
          category="Website"
          image={workImage10}
          />
   
        </div>
      </div>
    </div>
  )
}

export default Projects