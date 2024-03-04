import { useState } from 'react'
import Background from '../assets/images/file_room.jpg'

function Complaint() {
    const [complaint, setComplaint] = useState('');

    const submitForm = (_event: React.FormEvent<HTMLFormElement>) => {
        console.log(complaint);
        setTimeout( () => {window.location.reload()}, 500)
    }

    return (
        <div 
          style={{ backgroundImage: `url(${ Background })`}} 
          className='flex flex-row justify-center mx-auto bg-cover bg-fixed'
          >
            <div className='flex place-items-center h-screen'>
                <div className='p-5 bg-white bg-opacity-50 text-black rounded'>
                <form onSubmit={submitForm}>
                    <div className='m-2'>
                        Feel free to submit any complaints below and see what happens to it on our About Complaints page.
                    </div>
                    <input
                        id='complaint_box'
                        value={complaint}
                        onChange={(e) => setComplaint(e.target.value)}
                        type="text"
                        placeholder="Enter a term"
                        className="input m-2 p-1 rounded hover:shadow-[0px_0px_5px_rgba(0,0,0,0.4)]"
            />
            <button
                className="btn m-2 p-1 rounded text-white bg-gray-800" 
                type="submit" 
                >
                    Submit
            </button>
          </form>
                </div>
            </div>
        </div>
      )
}

export default Complaint