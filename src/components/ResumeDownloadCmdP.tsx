"use client";

import * as React from "react";
import {
  CommandMenu,
  CommandMenuTrigger,
  CommandMenuContent,
  useCommandMenuShortcut,
} from "@/components/hextaui/command-menu";
import { Button } from "@/components/ui/button";
import { Kbd } from "@/components/hextaui/kbd";
import { Download } from "lucide-react";
import Image from "next/image";
import { Separator } from "./ui/separator";
import Link from "next/link";

// Utility function to detect OS and return appropriate modifier key
const getModifierKey = () => {
  if (typeof navigator === "undefined") return { key: "Ctrl", symbol: "Ctrl" };

  const isMac =
    navigator.platform.toUpperCase().indexOf("MAC") >= 0 ||
    navigator.userAgent.toUpperCase().indexOf("MAC") >= 0;

  return isMac ? { key: "cmd", symbol: "⌘" } : { key: "ctrl", symbol: "Ctrl" };
};

const ResumeDownloadCmdP = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  useCommandMenuShortcut(() => setOpen(true));

  return (
    <CommandMenu open={open} onOpenChange={setOpen}>
      <CommandMenuTrigger asChild>
        <Button variant="outline" className="gap-2 cursor-pointer bg-[#E8EBED]">
          {/* <Command size={16} /> */}
          Download Resume
          <div className="ml-auto flex items-center gap-1">
            <Kbd size="sm">{getModifierKey().symbol}</Kbd>
            <h1>+</h1>
            <Kbd size="sm">P</Kbd>
          </div>
        </Button>
      </CommandMenuTrigger>

      <CommandMenuContent
        className="rounded-xl max-w-xl h-[90vh] mt-44 overflow-y-auto bg-[#141414]"
        showShortcut={false}
      >
        <div>
          <div className="p-2">
            <h1 className="font-bold">Resume</h1>
          </div>

          <Separator className="bg-gray-700" />

          <div className="p-2 h-[80%] flex justify-center items-center">
            <Image
              src={"/images/Resume.png"}
              alt="Resume-Preview"
              height={300}
              width={500}
              className="object-cover rounded-sm brightness-[0.8]"
            />
          </div>

          <Separator className="bg-gray-700" />

          <div className="flex gap-2 p-2 justify-end mt-2">
            <Button
              variant="outline"
              onClick={() => setOpen(false)}
              className="cursor-pointer"
            >
              Cancel
            </Button>
            <Button variant="default">
              <Link
                href={"/Amith-Resume.pdf"}
                download={true}
                className="flex cursor-pointer gap-2"
              >
                <span>Download</span>

                <Download />
              </Link>
            </Button>
          </div>
        </div>
      </CommandMenuContent>
    </CommandMenu>
  );
};

export default ResumeDownloadCmdP;
