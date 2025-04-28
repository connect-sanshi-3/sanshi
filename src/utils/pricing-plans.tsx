export interface PricingPlan {
  name: string;
  price: string;
  yearlyPrice: string;
  period: string;
  features: string[];
  description: string;
  buttonText: string;
  href: string;
  isPopular: boolean;
}

export const pricingPlans: PricingPlan[] = [
  {
    name: "Free",
    price: "0",
    yearlyPrice: "0",
    period: "month",
    features: [
      "15 minutes meeting per day",
      "1-1 and group meetings",
      "Create user profile",
      "Limited slots creation",
      "Limited posts upload",
      "Messaging feature",
      "Upload posts",
      "Connect with people",
      "Access your network page",
    ],
    description: "Perfect for getting started",
    buttonText: "Get Started",
    href: "/signup",
    isPopular: false,
  },
  {
    name: "WiseIN Plus",
    price: "99",
    yearlyPrice: "990",
    period: "month",
    features: [
      "Everything in Free plan",
      "1 hour meeting per day",
      "Increased slots creation limits",
      "Access to 'who viewed your profile' (up to 5 users)",
      "Increased post upload limits",
      "Meetings summary",
      "Meetings captions",
      "Transcription",
      "Recording",
    ],
    description: "Best for Students",
    buttonText: "Get Started",
    href: "/signup?plan=plus",
    isPopular: true,
  },
  {
    name: "WiseIN Pro",
    price: "299",
    yearlyPrice: "2990",
    period: "month",
    features: [
      "Everything in Plus plan",
      "3 hours meeting per day",
      "Maximum slots creation limits",
      "Maximum post upload limits",
      "Maximum profile views limits",
      "Priority support",
      "AI-powered Meetings Chat",
    ],
    description: "Best for growing professionals",
    buttonText: "Get Started",
    href: "/signup?plan=pro",
    isPopular: false,
  },
];
