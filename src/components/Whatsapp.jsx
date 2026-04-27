import React from 'react'
import WhatsappIcon from '../assets/images/Whatsapp.png'

const Whatsapp = () => {

    const phoneNumber = "+2348158525619"
    const message = "Hello, I saw your tech training and I am interested in your services."

    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

    return (
        <div className="fixed bottom-5 right-5 z-50 transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:shadow-xl">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" alt="Chat on WhatsApp" loading="lazy" >
                <img src={WhatsappIcon} alt="Chat on WhatsApp" width={85} />
            </a>
        </div>
    )
}

export default Whatsapp;