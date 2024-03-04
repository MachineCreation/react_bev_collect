import Background from '../assets/images/trashcan.jpg'

function About_complaints() {
  return (
    <div 
      style={{ backgroundImage: `url(${ Background })`}} 
      className='flex flex-row justify-center mx-auto bg-cover bg-fixed'
      >
        <div className='flex place-items-center h-screen'>
          <h3 className='p-5 bg-white bg-opacity-50 text-black rounded'>Honestly, where did you think complaints would go?</h3>
        </div>
    </div>
  )
}

export default About_complaints