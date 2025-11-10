"use client";

import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import Image from "next/image";
import { ShimmerButton } from "../ui/shimmer-button";
import { Download } from "lucide-react";
import Link from "next/link";

export function DownloadSection() {
  return (
    <section id="download" className="relative py-20 md:py-32 overflow-hidden">
      <div className="border-border mx-auto px-4 border-b max-w-7xl">
        <div className="flex flex-col items-center gap-10">
          <Badge variant="outline">Get Started</Badge>
          <h1 className="text-balance text-center text-5xl font-bold md:text-6xl">
            Download our app and start your journey today
          </h1>
        </div>
        <div className="mt-16 flex flex-col items-center justify-center gap-6 sm:flex-row">
          <Link href="https://github.com/npmkael/nutrisight/releases/download/v1.0.2/nutrisight_1.0.2.apk">
            <ShimmerButton className="shadow-2xl">
              <span className="flex items-center gap-2">
                <Download className="w-4 h-4" />
                Download APK
              </span>
            </ShimmerButton>
          </Link>
        </div>
        <div className="mt-28 flex items-end justify-center gap-4">
          <div className="order-2 h-[600px] max-w-sm overflow-hidden md:h-[350px] lg:h-[450px] xl:h-[600px]">
            <div className="relative">
              <Image
                src="/images/camera.png"
                alt="camera"
                width={1000}
                height={1000}
              />
            </div>
          </div>
          <div className="order-1 hidden h-[250px] max-w-sm overflow-hidden md:block lg:h-[350px] xl:h-[450px]">
            <div className="relative">
              <Image
                src="/images/dashboard.png"
                alt="dashboard"
                width={1000}
                height={1000}
              />
            </div>
          </div>
          <div className="order-3 hidden h-[280px] max-w-sm overflow-hidden md:block lg:h-[380px] xl:h-[480px]">
            <div className="relative">
              <Image
                src="/images/progress.png"
                alt="scan results"
                width={1000}
                height={1000}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
