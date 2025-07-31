import { useEffect, useRef } from 'react'

function Skills() {
  const skillsRef = useRef(null)

  const skills = [
    { name: 'Product Management', percentage: 90 },
    { name: 'Leadership', percentage: 90 },
    { name: 'Problem Solving', percentage: 85 },
    { name: 'Agile Methodologies', percentage: 80 },
    { name: 'Business Analysis', percentage: 80 },
    { name: 'Software Development', percentage: 60 }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const progressBars = entry.target.querySelectorAll('.skill-progress')
            progressBars.forEach((bar) => {
              const percentage = bar.getAttribute('data-percentage')
              bar.style.setProperty('--target-width', percentage + '%')
              bar.classList.add('animate')
            })
          }
        })
      },
      { threshold: 0.5 }
    )

    if (skillsRef.current) {
      observer.observe(skillsRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={skillsRef}>
      <h2>SKILLS</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <div className="skill-info">
              <span className="skill-name">{skill.name}</span>
              <span className="skill-percentage">{skill.percentage}%</span>
            </div>
            <div className="skill-bar">
              <div 
                className="skill-progress" 
                data-percentage={skill.percentage}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills