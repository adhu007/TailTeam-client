import React from 'react'

const DescriptionBox = () => {
    return (
        <div className='mt-30 mb-30'>
            <div className='flex '>
                <div className='flex items-center justify-center text-md font-medium w-[171px] h-[70px] border-2 border-gray-300'>
                    Description
                </div>
                <div className='flex items-center justify-center text-md font-medium w-[171px] h-[70px] border-2 border-gray-300 bg-gray-100 text-gray-500'>
                Reviews (123)
                </div>
            </div>
            <div className='flex flex-col gap-6 border-2 border-gray-300 p-12 pb-20'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus voluptatem, asperiores ut consequatur cupiditate doloribus recusandae officiis neque. Voluptatum animi doloremque quis? Voluptate perspiciatis nisi molestiae error. Quod, eos corrupti autem perferendis, adipisci debitis provident alias nesciunt quaerat libero vitae.</p>

                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam earum eligendi necessitatibus ducimus repellendus voluptates nam obcaecati cupiditate ad! Tempora.
                </p>
            </div>
        </div>
    )
}

export default DescriptionBox