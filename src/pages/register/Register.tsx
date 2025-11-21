import type React from "react"
import { useState } from "react"
import StepOne from "./_components/StepOne"
import StepTwo from "./_components/StepTwo"


interface FormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  teudatZehut: string
  dateOfAliyah: string
  cardholderName: string
  cardNumber: string
  expireDate: string
  cvc: string
  paymentMethod: string
}

const Register: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    teudatZehut: "",
    dateOfAliyah: "",
    cardholderName: "",
    cardNumber: "",
    expireDate: "",
    cvc: "",
    paymentMethod: "stripe",
  })

  const handleStepOneChange = (data: Partial<FormData>) => {
    setFormData({ ...formData, ...data })
  }

  const handleStepTwoChange = (data: Partial<FormData>) => {
    setFormData({ ...formData, ...data })
  }

  const handleContinue = () => {
    setCurrentStep(2)
  }

  const handleBack = () => {
    setCurrentStep(1)
  }

  const handleSubmit = () => {
    console.log("Form submitted:", formData)
    alert("Registration completed!")
  }

  return (
    <div className="min-h-[50vh] flex flex-col  text-white items-center justify-center p-4">
         <h1 className="text-5xl font-black italic text-center mb-12">BECOME A MEMBER</h1>
      <div className="w-full max-w-3xl bg-[#191919] p-6 rounded-3xl ">
        <div className="mb-8">
          <div className="flex flex-col mb-6">
            <div className="flex justify-between">
                    <h2 className="text-2xl">
                        {currentStep === 1 ? "Basic Information" : "Payment & Billing"}
                    </h2>
                      <p className="text-lg text-gray-500">Step {currentStep} of 2</p>
                </div>
            <div className="flex gap-4 flex-1 border-b pb-4 border-b-gray-700">        
              <div className="relative w-full">           
             
                <div
                  className="h-1 bg-[#F80B58] mt-2 transition-all duration-500 ease-out rounded-full"
                  style={{ width: currentStep >= 1 ? "100%" : "0px" }}
                ></div>
                   <p className="text-sm font-semibold my-2">Registrant details</p>
              </div>
              <div className="relative w-full">
<div className="relative w-full bg-black">
  <div
    className="h-1 mt-2  rounded-full transition-all duration-500 ease-out"
    style={{
      width: currentStep >= 2 ? "100%" : "0%",
      backgroundColor: currentStep >= 2 ? "#F80B58" : "#FFFFFF",
    }}
  ></div>
</div>


                   <p className={`text-sm font-semibold my-2 ${currentStep === 2 ? "text-white" : "text-gray-500"}`}>
                  Pay & register
                </p>
              </div>
            </div>
         
          </div>
        </div>

        {currentStep === 1 ? (
          <StepOne data={formData} onChange={handleStepOneChange} onContinue={handleContinue} />
        ) : (
          <StepTwo data={formData} onChange={handleStepTwoChange} onBack={handleBack} onSubmit={handleSubmit} />
        )}
      </div>
    </div>
  )
}

export default Register
