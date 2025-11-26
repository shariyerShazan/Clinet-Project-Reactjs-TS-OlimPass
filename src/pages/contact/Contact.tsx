import { useEffect } from "react"


const Contact = () => {

    useEffect(()=>{
      document.title = "Contact | OLIM PASS"
    }, [])
    

    const textClass = "text-white text-4xl leading-8 sm:text-5xl sm:leading-10 md:text-6xl md:leading-12 lg:text-7xl xl:text-8xl lg:leading-14 xl:leading-19 uppercase text-center font-extrabold italic  tracking-tighter"
  return (
    <div className="mt-26 flex flex-col items-center justify-center min-h-[50vh]">
        <p className={textClass} >For more information</p>
        <p className={textClass}>or to became a</p>
        <p className={textClass}>partner please</p>
        <p className={textClass}>contact us at</p>
       <a
  href="mailto:olimpass@gmail.com"
  className={`${textClass} !text-[#D405D9] hover:underline`}
>
  olimpass@gmail.com
</a>

    </div>
  )
}

export default Contact