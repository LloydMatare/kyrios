import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

function ProjectHeader() {
  return (
    <div className="h-14 p-6 border-b w-full flex items-center justify-between">
      <Image alt="logo" src={"/logo.png"} width={70} height={70} />
      <Button>Save</Button>
    </div>
  );
}

export default ProjectHeader;
