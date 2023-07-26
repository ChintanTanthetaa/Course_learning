import React from 'react'
import Mainpage from './Mainpage/Mainpage'
import Courses from './Courses/Courses'
import Mentors from './Mentors/Mentors'
import Studentsreview from './Studentsreview/Studentsreview'
import Join from './join/Join'
import Footer from './footer/footer'

const Index = () => {
  return (
      <>
          <Mainpage />
          <Courses />
          <Mentors />
          <Studentsreview />
          <Join />
          <Footer />
    </>
  )
}

export default Index