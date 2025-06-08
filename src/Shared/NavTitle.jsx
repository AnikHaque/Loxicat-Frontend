import title from '../assets/title.png'
import earth from '../assets/earth.png'
import email from '../assets/email.png'
import telephone from '../assets/telephone-call.png'

const NavTitle = () => {
    return (
        <div className="hidden lg:flex justify-between container mx-auto px-[5%] py-6">
            <div>
                <img className='w-40' src={title} alt="genesis" />
            </div>
            <div className='lg:flex gap-5 '>
                <div className='flex gap-4'>
                    <img className='w-16 h-16 border-2 border-dashed border-blue-400 p-3' src={earth} alt="earth" />
                    <div>
                        <h2 className='text-xl font-semibold'>Address</h2>
                        <h3>Uttara, Dahaka-1230</h3>
                    </div>
                </div>
                <div className='flex gap-4'>
                    <img className='w-16 h-16 border-2 border-dashed border-blue-400 p-3' src={email} alt="earth" />
                    <div>
                        <h2 className='text-xl font-semibold'>Email</h2>
                        <h3>person@gmail.com</h3>
                    </div>
                </div>
                <div className='flex gap-4'>
                    <img className='w-16 h-16 border-2 border-dashed border-blue-400 p-3' src={telephone} alt="earth" />
                    <div>
                        <h2 className='text-xl font-semibold'>Call Us</h2>
                        <h3>008 46546 5145</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavTitle