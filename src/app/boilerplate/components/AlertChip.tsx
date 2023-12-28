"use client";
import { css } from "@emotion/react";
import Image from "next/image";

type AlertProps = {
  warn: boolean;
};

const alert = ({ warn }: AlertProps) => css`
  display: "block";
  padding: "0.875rem 2.1875rem";
  justify-content: "center";
  align-items: "center";
  gap: "0.625rem";
  border-radius: "1rem";
  box-shadow: "2px 8px 16px 0px rgba(83, 85, 92, 0.20)",
    ${warn &&
    `
        background: "var(--Error-50, #DC362E)",
    `};
`;

export const AlertChip = ({ warn }: AlertProps) => {
  return (
    <div
      style={{
        display: "inline-flex",
        padding: "0.875rem 2.1875rem",
        justifyContent: "center",
        alignItems: "center",
        gap: "0.625rem",
        borderRadius: "1rem",
        background: "var(--Error-50, #DC362E)",
        boxShadow: "2px 8px 16px 0px rgba(83, 85, 92, 0.20)",
        zIndex: 10,
      }}>
      {warn ? (
        <>
          <Image
            width={24}
            height={24}
            src="/sprites/warn.svg"
            alt={"warning icon"}
          />
          {"감지된 장애물이 있습니다"}
        </>
      ) : (
        "장애물이 없네요 편히 걸으세요!"
      )}
    </div>
  );
};
