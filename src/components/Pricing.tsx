//TODO: Add getting started content and button for free tier
import { useState } from "react";
import { motion } from "framer-motion";
import { CheckArrowIcon } from "../assets/icons/CheckArrowIcon";

interface PricingTier {
  title: string;
  price?: number;
  features: string[];
  description: string;
  link: string;
}
const appURL: string = "https://translatestore.vercel.app";

const pricingData: PricingTier[] = [
  {
    title: "Starter",
    description: "For small stores",
    price: 49,
    features: [
      "500 unique page translations",
      "Email support",
      "Context-aware translations",
    ],
    link: appURL,
  },
  {
    title: "Growth",
    price: 150,
    description: "For growing stores",
    features: [
      "2500 unique page translations",
      "Email support",
      "Context-aware translations",
    ],
    link: appURL,
  },
  {
    title: "Enterprise",
    description: "For large stores",
    features: [
      "Unlimited page translations",
      "Context-aware translations",
      "Premium support",
      "Technical support and onboarding",
    ],
    link: appURL,
  },
];

export const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  const handleChange = () => {
    setIsMonthly(!isMonthly);
  };

  return (
    <section className="w-screen flex justify-center bg-bgDark2 relative">
      <div className="absolute -top-16" id="pricing" />
      <div className="pb-20 pt-12 bg-bgDark2  2xl:w-[1150px] lg:w-[1050px]  md:w-4/5 ">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="max-w-2xl mx-auto text-center mb-16">
            <span className="block-subtitle">Pricing</span>
            <h2 className="mt-6 mb-6 text-4xl lg:text-5xl font-bold font-heading text-primaryText">
              Cheaper than coffee with a buddy
            </h2>
            <p className="mb-6 text-secondaryText">
              Select the plan that fits your store size and we scale with you.
            </p>
            <label className="mx-auto bg-bgDark3 relative flex justify-between items-center group text-xl w-44 h-12 rounded-lg pr-36 pl-1 cursor-pointer">
              <input
                type="checkbox"
                className="peer appearance-none"
                checked={!isMonthly}
                onChange={handleChange}
              />
              <span className="h-8 w-[5.5rem] flex items-center pr-2 bg-bgDark3 after:rounded-lg duration-300 ease-in-out  after:w-[30rem] after:h-10  after:bg-primaryColor   after:shadow-md after:duration-300 peer-checked:after:translate-x-[5.5rem] cursor-pointer"></span>
              <div className="flex absolute text-primaryText text-sm font-bold">
                <div
                  className={
                    isMonthly ? "mr-9 ml-3" : "mr-9 ml-3 text-gray-400"
                  }
                >
                  Monthly
                </div>
                <div className={isMonthly ? "text-gray-400" : ""}>Yearly</div>
              </div>
            </label>
          </div>
          <div className="container mx-auto px-4 flex lg:flex-row flex-col">
            {pricingData.map((tier, index) => (
              <div
                className="w-[350px] sm:w-[380px] lg:w-1/3 px-4 mb-8 lg:mb-0 mx-auto"
                key={index}
              >
                <div className="p-8 bg-bgDark3 rounded-3xl">
                  <h3 className="mb-2 text-xl font-bold font-heading text-primaryText text-left">
                    {tier.title}
                  </h3>
                  <div className="flex justify-start items-end">
                    <div className="text-4xl sm:text-5xl font-bold text-primaryText text-left mt-4 mr-2">
                      {tier.price
                        ? isMonthly
                          ? tier.price
                          : Number(tier.price) * 10
                        : "Custom"}
                    </div>
                    <div className="text-gray-500">
                      {isMonthly ? "/ month" : "/ year"}
                    </div>
                  </div>
                  <p className="mt-4 mb-6 2xl:mb-10 text-gray-500 leading-loose text-left">
                    {tier.description}
                  </p>
                  <ul className="mb-2 2xl:mb-6 text-primaryText">
                    {tier.features.map((feature, index) => (
                      <li className="mb-4 flex" key={`${feature}-${index}`}>
                        <CheckArrowIcon />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={tier.link} target="_blank">
                    <button
                      className="inline-block text-center py-2 px-4 w-full rounded-xl rounded-t-xl contained-button font-bold leading-loose mt-16"
                      aria-label="Get started"
                    >
                      Get Started
                    </button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
