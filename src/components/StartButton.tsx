"use client";
import { useRouter } from "next/navigation";

export const StartButton = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/boilerplate");
  };

  return (
    <button
      style={{
        width: "100dvw",
        height: "min-content",
        color: "white",
        padding: "8px auto",
        textAlign: "center",
        borderRadius: "1rem",
        background: "var(--Primary-60, #5459D8)",
      }}
      onClick={handleClick}>
      {"시작하기"}
    </button>
  );
};
