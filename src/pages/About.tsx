import Background from '../assets/images/blank.jpg'

function About() {
  return (
    <div style={{ backgroundImage: `url(${ Background })`}} 
    className='flex flex-row justify-center mx-auto bg-cover bg-fixed'>
                <div className='flex place-items-center h-screen'>
          <h3 className='p-5 bg-white bg-opacity-0 text-black rounded'>
            Dear, Visitor<br/>
            <br/>
            You may be wondering why this is a blank wall. <br/> 
            Simple, I'm working on something else that I believe to be more exciting.<br/>
            So, I have decided to use what small amount of time I have on that.<br/>
            <br/>
            Stay tuned!
          </h3>
        </div>
    </div>
  )
}

export default About