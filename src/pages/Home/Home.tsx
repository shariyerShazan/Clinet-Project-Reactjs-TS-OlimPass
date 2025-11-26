
import FeatureCard from "./_components/FeatureCard";
import AppButton from "./_components/AppButton";
import { useNavigate } from "react-router";
import { useEffect } from "react";

const Home = () => {
  const navigate = useNavigate()

  useEffect(()=>{
    document.title = "OLIM PASS"
  }, [])
  
  const features = [
    {
      color: "#000000",
      text: "An exclusive membership for new residents in Israel.",
    },
    {
      color: "#000000",
      text: "Receive ongoing discounts at gyms, coffee shops, restaurants, and local businesses for your first 3 years in Tel Aviv.",
    },
    {
      color: "#000000",
      text: "Browse our partners and sign up with your Teudat Zehut.",
    },
  ];


  return (
    <main className="pb-20 mt-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      {/* Hero Section */}
<div className="text-center mb-16 text-white italic">
  <h1 className="text-5xl  md:text-7xl lg:text-8xl xl:text-9xl font-extrabold italic leading-7 sm:leading-8 md:leading-10 lg:leading-14 xl:leading-18 mb-0">
    OLIM PASS.
  </h1>

  <h2 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl italic font-medium leading-8 sm:leading-10 md:leading-14 lg:leading-16 xl:leading-20 mt-1">
    <span className="block">WELCOME TO ISRAEL,</span>
    <span className="block">NOW HERE'S A DISCOUNT.</span>
  </h2>
</div>




      {/* Feature Cards */}
     <div className="flex justify-center">
       <div className="grid grid-cols-1 md:grid-cols-3 justify-center items-center text-center gap-2.5 mb-12">
        {features.map((item, index) => (
          <FeatureCard key={index} color={item.color}>
            {item.text}
          </FeatureCard>
        ))}
      </div>
     </div>

      {/* CTA Buttons */}
     <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <AppButton onClick={()=>navigate("/register")} color="#F80B58">
          SIGN UP
        </AppButton>

        <AppButton  onClick={()=>navigate("/partners")} color="#FF9200">
          PARTNERS
        </AppButton>
      </div>
    </main>
  );
};

export default Home;
