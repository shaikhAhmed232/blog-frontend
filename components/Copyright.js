import Link from "next/link";

import { Typography } from "@mui/material";

export default function Copyright(props = {}) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      Copyright &#169;{" "}
      <Link href="/" color="inherit">
        <a>Your Website</a>
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
