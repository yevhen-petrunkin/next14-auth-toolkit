"use client";

import Link from "next/link";

import { Button } from "../ui/button";

interface BackBtnProps {
  href: string;
  label: string;
}

const BackBtn: React.FC<BackBtnProps> = ({ href, label }) => {
  return (
    <Button className="font-normal w-full" variant="link" size="sm" asChild>
      <Link href={href}>{label}</Link>
    </Button>
  );
};

export default BackBtn;
