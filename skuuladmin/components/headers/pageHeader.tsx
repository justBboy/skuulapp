import React from "react";
import Image from "next/image";
import rightTriangle from "@/public/right_triangle1.png";

export default function PageHeader({
  title,
  subTitle,
}: {
  title: string;
  subTitle: string;
}) {
  return (
    <div className=" mt-8  h-15 flex items-center justify-between">
      <span className="">
        <h1 className="text-xl md:text-3xl font-bold text-foreground leading-3">
          {title}
        </h1>
        <p className="text-xs md:text-sm text-muted-foreground mt-2">
          {subTitle}
        </p>
      </span>
      <span>
        <Image src={rightTriangle} alt="icon" width={50} height={50} />
      </span>
    </div>
  );
}
