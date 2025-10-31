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
                <div className="mb-6 md:mb-8 lg:mb-0 relative flex justify-center items-center h-[500px] md:h-[600px]">
                  <img
                    src="/images/progress-left.png"
                    alt="Progress Left"
                    className="hidden md:block absolute -left-[5%] w-[42%] h-full object-contain rounded-md opacity-60 -rotate-6 scale-90 z-0"
                  />
                  <img
                    src="/images/progress.png"
                    alt="Progress"
                    className="relative w-[55%] md:w-[50%] h-full object-contain rounded-md z-10"
                  />
                  <img
                    src="/images/progress-right.png"
                    alt="Progress Right"
                    className="hidden md:block absolute -right-[5%] w-[42%] h-full object-contain rounded-md opacity-60 rotate-6 scale-90 z-0"
                  />
                </div>
              </div>
              <div className="lg:flex lg:w-1/2 lg:items-center lg:pl-24 2xl:pl-32">
                <div>
                  <h3 className="mb-3 text-xl font-semibold md:mb-4 md:text-4xl lg:mb-6">
                    Track Your Progress
                  </h3>
                  <p className="text-muted-foreground text-base md:text-lg lg:text-xl">
                    Log your daily progress and see your growth over time.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-row-reverse lg:flex lg:gap-x-4">
              <div className="lg:w-1/2">
                <div className="mb-6 md:mb-8 lg:mb-0 relative flex justify-center items-center h-[500px] md:h-[600px]">
                  <img
                    src="/images/scan-food.png"
                    alt="Scan Food Left"
                    className="hidden md:block absolute -left-[5%] w-[42%] h-full object-contain rounded-md opacity-60 -rotate-6 scale-90 z-0"
                  />
                  <img
                    src="/images/scan-food.png"
                    alt="Scan Food"
                    className="relative w-[55%] md:w-[50%] h-full object-contain rounded-md z-10"
                  />
                  <img
                    src="/images/scan-food.png"
                    alt="Scan Food Right"
                    className="hidden md:block absolute -right-[5%] w-[42%] h-full object-contain rounded-md opacity-60 rotate-6 scale-90 z-0"
                  />
                </div>
              </div>

              <div className="lg:flex lg:w-1/2 lg:items-center lg:pl-24 2xl:pl-32">
                <div>
                  <h3 className="mb-3 text-xl font-semibold md:mb-4 md:text-4xl lg:mb-6">
                    Scan Your Food
                  </h3>
                  <p className="text-muted-foreground text-base md:text-lg lg:text-xl">
                    Simply scan your meal to access nutritional information.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:flex lg:gap-x-4">
              <div className="lg:w-1/2">
                <div className="mb-6 md:mb-8 lg:mb-0 relative flex justify-center items-center h-[500px] md:h-[600px]">
                  <img
                    src="/images/allergen-left.png"
                    alt="Allergen Detection Left"
                    className="hidden md:block absolute -left-[5%] w-[42%] h-full object-contain rounded-md opacity-60 -rotate-6 scale-90 z-0"
                  />
                  <img
                    src="/images/allergen.png"
                    alt="Allergen Detection"
                    className="relative w-[55%] md:w-[50%] h-full object-contain rounded-md z-10"
                  />
                  <img
                    src="/images/allergen-right.png"
                    alt="Allergen Detection Right"
                    className="hidden md:block absolute -right-[5%] w-[42%] h-full object-contain rounded-md opacity-60 rotate-6 scale-90 z-0"
                  />
                </div>
              </div>
              <div className="lg:flex lg:w-1/2 lg:items-center lg:pl-24 2xl:pl-32">
                <div>
                  <h3 className="mb-3 text-xl font-semibold md:mb-4 md:text-4xl lg:mb-6">
                    Allergen Detection
                  </h3>
                  <p className="text-muted-foreground text-base md:text-lg lg:text-xl">
                    Detect allergens in your food to avoid unwanted reactions.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-row-reverse lg:flex lg:gap-x-4">
              <div className="lg:w-1/2">
                <div className="mb-6 md:mb-8 lg:mb-0 relative flex justify-center items-center h-[500px] md:h-[600px]">
                  <img
                    src="/images/nutri-left.png"
                    alt="Nutritional Info Left"
                    className="hidden md:block absolute -left-[5%] w-[42%] h-full object-contain rounded-md opacity-60 -rotate-6 scale-90 z-0"
                  />
                  <img
                    src="/images/nutritional-info.png"
                    alt="Nutritional Info"
                    className="relative w-[55%] md:w-[50%] h-full object-contain rounded-md z-10"
                  />
                  <img
                    src="/images/nutri-right.png"
                    alt="Nutritional Info Right"
                    className="hidden md:block absolute -right-[5%] w-[42%] h-full object-contain rounded-md opacity-60 rotate-6 scale-90 z-0"
                  />
                </div>
              </div>

              <div className="lg:flex lg:w-1/2 lg:items-center lg:pl-24 2xl:pl-32">
                <div>
                  <h3 className="mb-3 text-xl font-semibold md:mb-4 md:text-4xl lg:mb-6">
                    Nutritional Information
                  </h3>
                  <p className="text-muted-foreground text-base md:text-lg lg:text-xl">
                    Get nutritional information about your food.
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
