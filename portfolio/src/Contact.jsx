import './App.css'

function Contact() { return (
    <>
    <section id='contact'>
    <div className='contact'>
        <div style={{minWidth:"50%"}}>
        <p>Contacts:</p>
        <p>Phone Number:</p>
        <p>091234567</p>
        <p>Gmail:</p>
        <p>johndale.arevalo@gmail.com</p>
        </div>
        <div style={{minWidth:"50%"}}>
        <p className='hidden'>hidden</p>
        <p>Facebook:</p>
        <a href='https://www.facebook.com/share/Dtn2qMNfYxVExWJD/?mibextid=qi2Omg' style={{color: "white", padding: "12px"}}>John Dale Arevalo</a>
        </div>
    </div>
    </section>
    </>
    )}

export default Contact