"use client";

import { Pricing } from "@/components/globals/pricing";
import { pricingPlans } from "@/utils/pricing-plans";

function PricingBasic() {
  return (
    <div className="h-[800px]  rounded-lg mb-20 px-[9%]">
      <Pricing
        plans={pricingPlans}
        title="WiseIN Pricing"
        description="Choose the plan that works for you. We offer both monthly and yearly plans for all the benefits mentioned below."
      />
    </div>
  );
}

export default PricingBasic;
