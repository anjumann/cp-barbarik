import CardIntegration1 from '@/components/integration/CardIntegration1'
import React from 'react'
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { BsSearch } from 'react-icons/bs';

const page = () => {

  const banks_info = [
    {
      name: "HDFC Bank",
      desc: "Integrate HDFC accounts for real-time transaction synchronization, ensuring accurate and holistic financial analysis.",
      imageUrl:"/images/integration/hdfc.png"
    },
    {
      name: "ICICI Bank",
      desc: "Streamline financial planning with ICICI integration, extracting and organizing transactional data efficiently.",
      imageUrl:"/images/integration/icici.png"
    },
    {
      name: "Axis Bank",
      desc: "Seamlessly integrate AXIS accounts for a comprehensive and accurate financial overview within your software.",
      imageUrl:"/images/integration/axis.png"
    }
  ]

  const accounting_software_info = [
    {
      name: "Tally",
      desc: "Extract Tally data effortlessly for streamlined financial management and comprehensive reporting in your software.",
      imageUrl:"/images/integration/tally.png"
    },
    {
      name: "QuickBooks Online",
      desc: "Leverage QuickBooks integration for automatic access to essential financial data and robust reporting.",
      imageUrl:"/images/integration/quick-books.png"
    },
    {
      name: "Zoho",
      desc: "Seamlessly integrate Zoho to consolidate collaborative financial insights, enhancing your planning processes.",
      imageUrl:"/images/integration/zoho.png"
    }
    
  ]


  const channels_info = [
    {
      name: "Whatsapp",
      desc: "Schedule and send automated reports via WhatsApp, ensuring efficient and timely financial communication.",
      imageUrl:"/images/integration/whatsapp.png"
    },
    {
      name: "Email",
      desc: "Automate report delivery through email for timely communication and enhanced financial insights.",
      imageUrl: "/images/integration/email.png"
    },
  ]

  return (
    <div className="w-11/12 mt-3 mx-auto " >
      <div className="flex justify-between items-center my-3 ">
        <span className=' text-2xl' >
          Integrations
        </span>
        <div className="flex gap-2">
          <Input placeholder="Search" />
          {/* <Button variant='outline' className='bg-zinc-800 p-3 ' >
            <BsSearch/>
          </Button> */}
        </div>
      </div>
      <div
        style={{

        }}
        className=" overflow-y-scroll h-[80vh] hide-scrollbar scrollbar pr-4 ">
        <div className="flex flex-col my-3">
          <div className="text-lg font-semibold mb-3 pl-2">
            Bank Accounts (03)
          </div>
          <div className="grid grid-cols-3 gap-7 ">
            {banks_info.map((item, index) => {
              return (
                <CardIntegration1 data={item} key={index} />
              )
            })}
          </div>
        </div>
        <div className="flex flex-col my-3">
          <div className="text-lg font-semibold mb-3 pl-2">
            Accounting Softwares (03)
          </div>
          <div className="grid grid-cols-3 gap-7 ">
            {accounting_software_info.map((item, index) => {
              return (
                <CardIntegration1 data={item} key={index} />
              )
            })}
          </div>
        </div>
        <div className="flex flex-col my-3">
          <div className="text-lg font-semibold mb-3 pl-2">
            Channels (02)
          </div>
          <div className="grid grid-cols-3 gap-7 ">
            {channels_info.map((item, index) => {
              return (
                <CardIntegration1 data={item} key={index} />
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default page