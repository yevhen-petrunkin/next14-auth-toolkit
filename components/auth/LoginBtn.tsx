"use client";

import { useRouter } from "next/navigation";

interface LoginBtnProps {
  children: React.ReactNode;
  mode?: "modal" | "redirect";
  asChild?: boolean;
}

const LoginBtn = ({ children, mode = "redirect", asChild }: LoginBtnProps) => {
  const router = useRouter();

  const onClick = () => router.push("/auth/login");

  return (
    <>
      {mode === "modal" ? (
        <span>TODO: Implement modal</span>
      ) : (
        <span className="cursor-pointer" onClick={onClick}>
          {children}
        </span>
      )}
    </>
  );
};

export default LoginBtn;
