import {
  Code,
  Terminal,
  Paintbrush,
  Rocket,
  Book,
  PlusCircle,
} from "lucide-react";

export function FeaturesSection() {
  return (
    <section id="features" className="py-14">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="relative mx-auto max-w-2xl sm:text-center">
          <div className="relative z-10">
            <h3 className="font-geist mt-4 text-3xl font-normal tracking-tighter sm:text-4xl md:text-5xl">
              Features
            </h3>
            <p className="font-geist text-foreground/60 mt-3">
              NutriSight is your personal nutrition guide in your pocket. It
              helps you track your nutrition, get personalized recommendations,
              and stay on track with your goals.
            </p>
          </div>
        </div>
        <hr className="bg-foreground/30 mx-auto mt-5 h-px w-1/2" />
        <div className="container mt-4">
          <div className="flex flex-col space-y-10 md:space-y-16">
            <div className="lg:flex lg:gap-x-4">
              <div className="lg:w-1/2">
                <div className="mb-6 md:mb-8 lg:mb-0">
                  <img
                    src="/images/dashboard.png"
                    alt="Dashboard"
                    className="w-full max-w-[300px] mx-auto rounded-md"
                  />
                </div>
              </div>
              <div className="lg:flex lg:w-1/2 lg:items-center lg:pl-24 2xl:pl-32">
                <div>
                  <h3 className="mb-3 text-xl font-semibold md:mb-4 md:text-4xl lg:mb-6">
                    Get Scan Results
                  </h3>
                  <p className="text-muted-foreground text-base md:text-lg lg:text-xl">
                    Get your scan results in seconds.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-row-reverse lg:flex lg:gap-x-4">
              <div className="lg:w-1/2">
                <div className="mb-6 md:mb-8 lg:mb-0">
                  <img
                    src="/images/scan-results.png"
                    alt="Dashboard"
                    className="w-full max-w-[300px] mx-auto rounded-md"
                  />
                </div>
              </div>

              <div className="lg:flex lg:w-1/2 lg:items-center lg:pl-24 2xl:pl-32">
                <div>
                  <h3 className="mb-3 text-xl font-semibold md:mb-4 md:text-4xl lg:mb-6">
                    Everything You Need. Nothing You Don't.
                  </h3>
                  <p className="text-muted-foreground text-base md:text-lg lg:text-xl">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec congue, nisl eget molestie varius, enim ex faucibus
                    purus.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:flex lg:gap-x-4">
              <div className="lg:w-1/2">
                <div className="mb-6 md:mb-8 lg:mb-0">
                  <img
                    src="/images/dashboard.png"
                    alt="Dashboard"
                    className="w-full max-w-[300px] mx-auto rounded-md"
                  />
                </div>
              </div>
              <div className="lg:flex lg:w-1/2 lg:items-center lg:pl-24 2xl:pl-32">
                <div>
                  <h3 className="mb-3 text-xl font-semibold md:mb-4 md:text-4xl lg:mb-6">
                    Everything You Need. Nothing You Don't.
                  </h3>
                  <p className="text-muted-foreground text-base md:text-lg lg:text-xl">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec congue, nisl eget molestie varius, enim ex faucibus
                    purus.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
