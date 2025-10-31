import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { LineShadowText } from "../ui/line-shadow-text";
import { Highlighter } from "../ui/highlighter";

interface HeroSectionProps {
  heading?: string;
  subheading?: string;
  description?: string;
  image?: {
    src: string;
    alt: string;
  };
  buttons?: {
    primary?: {
      text: string;
      url: string;
    };
    secondary?: {
      text: string;
      url: string;
    };
  };
}

const HeroSection = ({
  description = "NutriSight is your personal nutrition guide in your pocket. It helps you track your nutrition, detect allergens, get personalized recommendations, and stay on track with your goals.",
  buttons = {
    primary: {
      text: "Try Now",
      url: "#download",
    },
  },
  image = {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-7-tall.svg",
    alt: "Placeholder",
  },
}: HeroSectionProps) => {
  return (
    <section className="bg-background py-20 lg:py-32">
      <div className="container flex flex-col items-center gap-10 lg:my-0 lg:flex-row">
        <div className="flex flex-col gap-7 lg:w-2/3">
          <p className="text-foreground text-5xl font-semibold md:text-5xl lg:text-8xl">
            Your{" "}
            <Highlighter action="highlight" color="#B3EB8D">
              Personal
            </Highlighter>
            <LineShadowText className="italic">Nutrition</LineShadowText>
            <span> Guide in Your</span>{" "}
            <Highlighter action="underline" color="#2E3545" strokeWidth={5}>
              Pocket
            </Highlighter>
          </p>
          <p className="text-muted-foreground text-base md:text-lg lg:text-xl">
            {description}
          </p>
          <div className="flex flex-wrap items-start gap-5 lg:gap-7">
            <Button asChild>
              <a href={buttons.primary?.url}>
                <div className="flex items-center gap-2">
                  <ArrowUpRight className="size-4" />
                </div>
                <span className="whitespace-nowrap pl-4 pr-6 text-sm lg:pl-6 lg:pr-8 lg:text-base">
                  {buttons.primary?.text}
                </span>
              </a>
            </Button>
          </div>
        </div>
        <div className="relative z-10">
          <div className="left-1/2! h-[92%]! w-[69%]! absolute top-2.5 -translate-x-[52%] overflow-hidden rounded-[35px]">
            <img
              src={image.src}
              alt={image.alt}
              className="size-full object-cover object-[50%_0%]"
            />
          </div>
          <img
            className="relative z-10"
            src="/images/dashboard.png"
            width={350}
            height={600}
            alt="iphone"
          />
        </div>
      </div>
    </section>
  );
};

export { HeroSection };
