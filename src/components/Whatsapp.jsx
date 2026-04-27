import React from 'react'
import WhatsappIcon from '../assets/images/Whatsapp.png'

const Whatsapp = () => {

    const phoneNumber = "+2348158525619"
    const message = "Hello, My name is ___________ and I am interested in your tech training."

    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

    return (
        <div className="fixed bottom-5 right-5 z-50 bg-white/30 p-2 rounded-full shadow-[0_4px_10px_rgba(0,0,0,0.2)] transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:shadow-xl animate-bounce">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" alt="Chat on WhatsApp" loading="lazy" >
                <img src={WhatsappIcon} alt="Chat on WhatsApp" width={60} />
            </a>
        </div>
    )
}

export default Whatsapp;