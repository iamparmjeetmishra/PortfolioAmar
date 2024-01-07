import Image from 'next/image'
import ProfilePic from '/public/Img/MyProfile.jpg'
import Socials from './Socials'

export default function InfoBox() {
    return (
        <>
            <div className="">
                <Image src={ProfilePic} alt='Amar Profile Pic' />
            </div>
        </>
    )
}