import React from 'react'

export default function Location(){
        return (
            <div className="location_wrapper" id="location">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1698.6473737110755!2d-7.989926841941346!3d31.625779279212164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdafee43ad1cec7d%3A0x91b033ce5d01bbb1!2sJemaa%20el-Fna%2C%20Marrakesh%2040000!5e0!3m2!1sen!2sma!4v1595630624858!5m2!1sen!2sma"
                        title = "MAP" width="100%" height="500px" frameBorder="0" style={{border:"none"}} allowFullScreen="">

                </iframe>
                <div className="location_tag">
                    <div>Location</div>
                </div>
            </div>
        )
}
