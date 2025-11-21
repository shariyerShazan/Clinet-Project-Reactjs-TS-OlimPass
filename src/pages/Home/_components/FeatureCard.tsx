
const FeatureCard = ({ color, children } : {color: string , children: any}) => {
  return (
    <div
    style={{
      backgroundColor: color 
    }}
      className={`rounded-xl p-6 min-h-32 w-[260px] h-[180px] md:w-[300px] md:h-[220px] xl:w-[360px] xl:h-[260px] flex items-center justify-center bg-[${color}]`}
    >
      <p className="text-center text-base md:text-lg  lg:text-xl xl:text-2xl   italic font-medium text-black">
        {children}
      </p>
    </div>
  );
};

export default FeatureCard;
