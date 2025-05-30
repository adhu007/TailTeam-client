import appointment_img from './appointment_img.png'
import header_img from './header_img.png'
import group_profiles from './group_profiles.png'
import people_avatars from './people_avatars.png'
import profile_pic from './profile_pic.jpg'
import contact_image from './contact_image.jpg'
import about_us from './pet_lovers.jpg'
import LetShop from './LetShop.png'

import logo from './logo.jpg'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'
import doc1 from './DocPic.png'
import docImg from './vetDoc.svg'
import cartIcon from './cart_icon.png'


export const assets = {
    appointment_img,
    header_img,
    group_profiles,
    people_avatars,
    logo,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    contact_image,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon,
    stripe_logo,
    razorpay_logo,
    about_us,
    LetShop,
    cartIcon
}

export const specialityData = [
    {
        speciality: 'Canine(dogs)',
        image: docImg
    },
    {
        speciality: 'Feline(cats)',
        image: docImg
    },
    {
        speciality: 'Livestock',
        image: docImg
    },
    {
        speciality: 'Avian(birds)',
        image: docImg
    },
    
]

export const consultantsData = [
    {
        _id: '1',
        name: 'Dr. Rahul',
        image: doc1,
        speciality: 'Canine(dogs)',
        degree: 'BVSc & AH',
        experience: '4 Years',
        about: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
        fees: 500,
        address: {
            line1: 'Amrita Nagar',
            line2: 'Edappally, Kochi, Kerala'
        }
    },
    {
        _id: '2',
        name: 'Dr. Nila',
        image: doc1,
        speciality: 'Livestock',
        degree: 'BVSc & AH',
        experience: '3 Years',
        about: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
        fees: 400,
        address: {
            line1: 'Amrita Nagar',
            line2: 'Edappally, Kochi, Kerala'
        }
    },
    {
        _id: '3',
        name: 'Dr. Salah',
        image: doc1,
        speciality: 'Feline(cats)',
        degree: 'BVSc & AH',
        experience: '1 Years',
        about: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
        fees: 300,
        address: {
            line1: 'Amrita Nagar',
            line2: 'Edappally, Kochi, Kerala'
        }
    },
    {
        _id: '4',
        name: 'Dr. Anu',
        image: doc1,
        speciality: 'Canine(dogs)',
        degree: 'BVSc & AH',
        experience: '2 Years',
        about: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
        fees: 400,
        address: {
            line1: 'Amrita Nagar',
            line2: 'Edappally, Kochi, Kerala'
        }
    },
    {
        _id: '5',
        name: 'Dr. Sanjay',
        image: doc1,
        speciality: 'Avian(birds)',
        degree: 'BVSc & AH',
        experience: '4 Years',
        about: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
        fees: 500,
        address: {
            line1: 'Amrita Nagar',
            line2: 'Edappally, Kochi, Kerala'
        }
    },
]