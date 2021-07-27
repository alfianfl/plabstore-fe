import React from 'react'
import { Navbar } from "../../components/navbar";
import { Footer } from "../../components/footer";

function TemplateUser({children}) {
    return (
        <div>
            <Navbar />
                {children}
            <Footer />
        </div>
    )
}

export default TemplateUser
