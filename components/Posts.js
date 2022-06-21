import { useState, useEffect } from "react";

import Image from "next/image";

import {
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";

import updateToken from "../utils/updateToken";

export default function Posts({ posts = [] }) {
  const [token, setToken] = useState(() => {
    if (typeof window === "undefined") {
      return null;
    } else if (localStorage.getItem("access_token")) {
      return localStorage.getItem("access_token");
    } else {
      return null;
    }
  });

  useEffect(() => {
    if (token) {
      const interval = setInterval(() => updateToken(setToken), 3000);
      return () => clearInterval(interval);
    } else {
      console.log("user is not logged in");
    }
  }, [token]);
  return (
    <Container sx={{ minHeight: "100px" }}>
      <Grid container spacing={5} alignItems="center">
        {posts.length === 0 ? (
          <Typography variant="h5">No blog</Typography>
        ) : (
          posts.map((post) => {
            return (
              <>
                <Grid item key={post.id}>
                  <Card
                    md={4}
                    xs={12}
                    sx={{ marginTop: "1em", maxWidth: "300px" }}
                  >
                    {/* <CardMedia
                        component="img"
                        image="https://source.unsplash.com/random"
                        width="300px"
                        height="200px"
                      /> */}
                    <CardMedia>
                      <div
                        style={{
                          width: "100%",
                          height: "200px",
                          position: "relative",
                          zIndex: "999",
                        }}
                      >
                        <Image
                          src="https://source.unsplash.com/random"
                          alt="blog image"
                          layout="fill"
                          objectFit="cover"
                          objectPosition="center center"
                        />
                      </div>
                    </CardMedia>
                    <CardContent>
                      <Typography variant="h6">{post.title}</Typography>
                      <div>
                        <Typography variant="p">{post.excerpt}</Typography>
                      </div>
                    </CardContent>
                  </Card>
                </Grid>
              </>
            );
          })
        )}
      </Grid>
    </Container>
  );
}
