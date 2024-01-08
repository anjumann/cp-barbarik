import CardIntegration1 from '@/components/integration/CardIntegration1'
import React from 'react'
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { BsSearch } from 'react-icons/bs';

const page = () => {

  const banks_info = [
    {
      "name": "HDFC Bank",
      "desc": "Integrate HDFC accounts for real-time transaction synchronization, ensuring accurate and holistic financial analysis."
    },
    {
      "name": "ICICI Bank",
      "desc": "Enable seamless integration with ICICI accounts for comprehensive financial data analysis and synchronization."
    },
    {
      "name": "Axis Bank",
      "desc": "Integrate Axis accounts to streamline transaction synchronization for detailed and accurate financial insights."
    }
  ]

  const accounting_software_info = [
    {
      "name": "QuickBooks Online",
      "desc": "Seamlessly manage finances, track expenses, and generate reports with QuickBooks Online's intuitive accounting platform."
    },
    {
      "name": "Xero",
      "desc": "Effortlessly handle invoicing, bank reconciliation, and financial reporting using Xero's cloud-based accounting software."
    },
    {
      "name": "FreshBooks",
      "desc": "Simplify billing, expense tracking, and timekeeping with FreshBooks' user-friendly accounting and invoicing solutions."
    }
  ]


  const channels_info = [
    {
      name: "Whatsapp",
      desc: "Schedule and send automated reports via WhatsApp, ensuring efficient and timely financial communication."
    },
    {
      name: "Email",
      desc: "Automate report delivery through email for timely communication and enhanced financial insights."
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