import React from 'react'
import './About.css'
import about_img from '../../Assets/my_assets/pexels-fauxels-3184292.jpg';

const About = () => {
  return (
    <div>
      <h2 className='heading'>EMBARK ON A JOURNEY OF ENDURING EXPANSION</h2>
      <div className='about' id='about'>
        <div class="contact-wrap">
          <div class="sec-title mb-30">
            <div class="desc pb-35">
              Does your company possess valuable expertise but struggles with stagnant sales? Are you a SaaS company aiming to accelerate revenue growth beyond your current pace? Engage with jblmlSolution to overcome two significant growth challenges.
            </div>
            <ol className='lists'>
              <li className='list-1'><b>Disrupted Sales Operations</b> Sales process breakdowns often occur due to a lack of alignment between business and sales strategies. Efficiently managing sales teams and executing strategies can lead to improved outcomes. </li>
              <li className='list-2'><b>Suboptimal Marketing Strategies</b> Absence of an Integrated Demand Generation Program, Diminishing Inbound Lead Quality. </li>
              <li className='list-3'><b>Strategic Execution Deficiencies</b> Strategic Execution Deficiencies: Weaknesses in implementing strategic plans, including failures in task translation, coordination, alignment, and monitoring, hindering organizational goal achievement. </li>
            </ol>
          </div>
          <div class="btn-part">
            <p class="margin-0 pb-15">The sales landscape is intricate, with numerous elements at play. jblmlSolution delivers insights, coherent sales messaging, a skilled sales team, top-notch management, and execution strategies to drive tangible outcomes.</p>
          </div>
        </div>
        <div className='about-left'>
          <img src={about_img} alt="about_image" className='about-img' />
        </div>
      </div>
    </div>
  )
}

export default About

