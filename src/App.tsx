import CardComment from './components/CardComment'
import BtnFooter from './components/BtnFooter'

import LogoImg from '../src/assets/logo.svg'

import IllustrationIntroImg from '../src/assets/illustration-intro.png'

import BackgroundImg from '../src/assets/bg-curvy-desktop.svg'

import AccessAnywhereIcone from '../src/assets/icon-access-anywhere.svg'
import SecurityIcone from '../src/assets/icon-security.svg'
import CollaborationIcone from '../src/assets/icon-collaboration.svg'
import AnyFileIcone from '../src/assets/icon-any-file.svg'

import IllustrationStayProductiveImg from '../src/assets/illustration-stay-productive.png'

import ArrowIcone from '../src/assets/icon-arrow.svg'

import Aspas from '../src/assets/bg-quotes.png'

import ProfileIcone1 from '../src/assets/profile-1.jpg'
import ProfileIcone2 from '../src/assets/profile-2.jpg'
import ProfileIcone3 from '../src/assets/profile-3.jpg'

import LocationIcone from '../src/assets/icon-location.svg'
import PhoneIcone from '../src/assets/icon-phone.svg'
import EmailIcone from '../src/assets/icon-email.svg'

import FacebookIcone from '../src/assets/facebook.png'
import TwitterIcone from '../src/assets/twitter.png'
import InstagramIcone from '../src/assets/instagram.png'

import FacebookAtivadoIcone from '../src/assets/facebookAtivado.png'
import TwitterAtivadoIcone from '../src/assets/twitterAtivado.png'
import InstagramAtivadoIcone from '../src/assets/instagramAtivado.png'

function App() {
  return (
    <div className="desktop:w-full flex flex-col justify-center m-auto mobile:w-full">
      <div className='flex flex-row justify-between desktop:px-12 desktop:pt-12 mobile:px-5 mobile:pt-5'>
        <div>
          <img src={LogoImg} className='desktop:w-[8rem] mobile:w-[5rem]'/>
        </div>
        <div className='text-[#e6e6e6]'>
          <button className='hover:text-white'>Features</button>
          <button className='desktop:mx-8 hover:text-white mobile:mx-5'>Team</button>
          <button className='hover:text-white'>Sign In</button>
        </div>
      </div>

      <div className='flex items-center flex-col mt-10 relative'>
        <div className='z-10 flex flex-col items-center'>
          <img src={IllustrationIntroImg} className='mobile:w-[18rem] desktop:w-[30rem]'/>
          <h1 className='font-bold text-4xl desktop:w-[40rem] text-center mt-10 mobile:w-[20rem] mobile:text-xl'>All your files in one secure location, accessible anywhere.</h1>
          <div className='my-10'>
            <p className='text-center desktop:w-[30rem] m-auto mobile:w-[20rem]'>Fylo stores all your most important files in one secure location.
            Access them wherever you need, share and collaborate with friends family, and co-workers.</p>
          </div>

          <button className='bg-[#43B2D0] rounded-full px-20 py-3 font-bold hover:bg-[#65e2d9]'>Get Started</button>
        </div>

        <img src={BackgroundImg} className='absolute inset-x-0 bottom-0' />
      </div>

      <div className='bg-[#181F2B]'>
        <div className='text-center mb-24 mt-32'>
          <div className='flex desktop:flex-row justify-center mobile:flex-col'>
            <div className='w-[450px] p-10 mobile:w-full'>
              <img src={AccessAnywhereIcone} className='m-auto mb-6' />
              <h1 className='font-bold'>Access your files, anywhere</h1>
              <p className=''>The ability to use a smartphone, tablet, or computer to access your
                account means your files follow you everywhere.
              </p>
            </div>

            <div className='w-[450px] p-10 mobile:w-full'>
              <img src={SecurityIcone} className='m-auto mb-3' />
              <h1 className='font-bold'>Security you can trust</h1>
              <p className=''>2-factor authentication and user-controlled encryption are just a
                couple of the security features we allow to help secure your files.
              </p>
            </div>
          </div>

          <div className='flex desktop:flex-row justify-center mobile:flex-col'>
            <div className='w-[450px] p-10 mobile:w-full'>
              <img src={CollaborationIcone} className='m-auto mb-5' />
              <h1 className='font-bold'>Real-time collaboration</h1>
              <p className=''>Securely share files and folders with friends, family and colleagues
                for live collaboration. No email attachments required.
              </p>
            </div>

            <div className='w-[450px] p-10 mobile:w-full'>
              <img src={AnyFileIcone} className='m-auto mb-5' />
              <h1 className='font-bold'>Store any type of file</h1>
              <p>Whether you're sharing holidays photos or work documents, Fylo has you
                covered for all file types to be securely stored and shared.
              </p>
            </div>
          </div>
        </div>

        <div className='flex desktop:flex-row mb-16 px-12 mobile:flex-col'>
          <img src={IllustrationStayProductiveImg} />
          <div className='flex flex-col justify-center ml-10'>
            <h1 className='font-bold desktop:text-5xl desktop:w-[400px] mobile:w-full mobile:text-xl'>Stay productive, wherever you are</h1>
            <div className='my-5'>
              <p className='mb-5'>Never let location be an issue when accessing your files. Fylo has you
                covered for all of your file storage needs.
              </p>
              <p>Securely share files and folders with friends, family and colleagues for
                live collaboration. No email attachments required.
              </p>
            </div>
            <div className='group/item'>
              <button className='flex flex-row items-center border-b-[1px] border-[#65e2d9] pb-1 group-hover/item:border-white'>
                <p className='text-[#65e2d9] group-hover/item:text-white'>See how Fylo works</p>
                <img src={ArrowIcone} className='ml-3 mt-[1px]' />
              </button>
            </div>
          </div>
        </div>

        <div className='my-10 px-12'>
          <img src={Aspas} />

          <div className='grid desktop:grid-cols-3 gap-5 mobile:grid-cols-1'>
            <CardComment
              img={ProfileIcone1}
              name="Satish Patel"
            />

            <CardComment
              img={ProfileIcone2}
              name="Bruce McKenzie"
            />

            <CardComment
              img={ProfileIcone3}
              name="Iva Boyd"
            />
          </div>
        </div>

        <div className='mt-24 relative'>
          <div className='z-50 bg-[#21293C] text-center desktop:w-[57rem] desktop:m-auto relative rounded-lg drop-shadow-2lg mobile:w-[calc(100%_-_25px)] mobile:mx-3'>
            <h1 className='font-bold text-3xl pt-8 mobile:text-2xl'>Get early access today</h1>
            <p className='my-8 desktop:w-[45rem] m-auto mobile:w-[300px]'>It only takes a minute to sign up and our free starter tier is extremely
              generous. If you have any questions, our support team would be happy to help you.</p>
            <div className='pb-8 flex mobile:flex-col desktop:flex-row mobile:justify-center'>
              <input placeholder='email@example.com' className='rounded-full desktop:w-[35rem] h-12 pl-8 desktop:mr-6 text-black mobile:mx-5' />
              <button className='bg-[#43B2D0] rounded-full px-6 py-3 font-bold hover:bg-[#65e2d9] mobile:mx-5 mobile:mt-5 desktop:mt-0 desktop:mx-0'>Get Stared For Free</button>
            </div>
          </div>
          
          <div className='bg-[#0C1524] h-28 w-full absolute inset-x-0 bottom-0 z-0'>

          </div>
        </div>

        <div className='bg-[#0C1524] px-12 pb-12 pt-6'>
          <img src={LogoImg} className='my-10' />
          <div className='flex desktop:flex-row justify-between mobile:flex-col'>
            <button className='flex flex-row desktop:w-[22rem] mobile:w-full'>
              <img src={LocationIcone} className='mr-6 mt-2 w-6 h-6' />
              <p className='text-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua
              </p>
            </button>

            <div className='flex flex-col mobile:mt-5 desktop:mt-0'>
              <button className='flex flex-row items-center'>
                <img src={PhoneIcone} className='pr-5' />
                <p>+1-543-123-4567</p>
              </button>
              <button className='flex flex-row items-center desktop:mt-5 mobile:mt-3'>
                <img src={EmailIcone} className='pr-5' />
                <p>example@fylo.com</p>
              </button>
            </div>

            <div className='flex flex-col text-left mobile:mt-10 desktop:mt-0'>
              <BtnFooter btn="About Us" />
              <BtnFooter btn="Jobs" />
              <BtnFooter btn="Press" />
              <BtnFooter btn="Blog" />
            </div>

            <div className='flex flex-col mobile:mt-5 desktop:mt-0'>
              <BtnFooter btn="Contact Us" />
              <BtnFooter btn="Terms" />
              <BtnFooter btn="Privacy" />
            </div>

            <div className='flex flex-row mobile:mt-10 mobile:m-auto desktop:mt-0 desktop:m-0'>
              <div className='group/icone'>
                <button className='w-[40px] h-[40px] p-2 border rounded-full group-hover/icone:hidden'>
                  <img src={FacebookIcone} />
                </button>

                <button className='w-[40px] h-[40px] p-2 border rounded-full hidden group-hover/icone:block group-hover/icone:border-[#65e2d9]'>
                  <img src={FacebookAtivadoIcone} />
                </button>
              </div>
              
              <div className='group/icone'>
                <button className='w-[40px] h-[40px] p-2 border rounded-full mx-5 group-hover/icone:hidden'>
                  <img src={TwitterIcone} />
                </button>
                <button className='w-[40px] h-[40px] p-2 border rounded-full mx-5 hidden group-hover/icone:block group-hover/icone:border-[#65e2d9]'>
                  <img src={TwitterAtivadoIcone} />
                </button>
              </div>

              <div className='group/icone'>
                <button className='w-[40px] h-[40px] p-2 border rounded-full group-hover/icone:hidden'>
                  <img src={InstagramIcone} />
                </button>
                <button className='w-[40px] h-[40px] p-2 border rounded-full hidden group-hover/icone:block group-hover/icone:border-[#65e2d9]'>
                  <img src={InstagramAtivadoIcone} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
