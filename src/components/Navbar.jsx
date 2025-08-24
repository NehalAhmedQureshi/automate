"use client";
import { logo } from "@/assets";
import { navLinks } from "@/constants/Link";
import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Navbar() {
  const pathname = usePathname();
  return (
    <Stack
      direction={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
      bgcolor={"#FFFFFF"}
      boxShadow="0px 0px 9px rgba(0,0,0,0.4)"
      py={1.6}
      px={3}
      borderRadius={5}
      position={"sticky"}
      top={14}
      zIndex={1000}
    >
      <Link href={"/"} style={{display:'flex',justifyContent:'center'}}>
        <Image
          src={logo}
          width={0}
          height={0}
          style={{ width: "150px", height: "auto", cursor: "pointer",}}
        />
      </Link>
      <Stack direction={"row"} justifyContent={"space-between"} gap={4}>
        {navLinks?.map((data, index) => (
          <Typography
            variant="body1"
            component={Link}
            color={pathname === data?.link ? "#1976d2" : "black"}
            key={index}
            href={data?.link || "/"}
            className="link"
            sx={{
              textDecoration: "none",
              fontWeight: pathname === data.link ? "bold" : "normal",
              borderBottom: pathname === data.link ? "2px solid #1976d2" : "none", // optional underline
              transition: "all 0.3s ease",
              "&:hover": {
                color: "blue",
              },
            }}
          >
            {data?.text || "Empty"}
          </Typography>
        ))}
      </Stack>
    </Stack>
  );
}
