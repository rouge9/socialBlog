import { Box, useMediaQuery } from "@mui/material";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import NavBar from "../navbar/navBar";
import UserWidget from "../widgets/UserWidgets";
import MyPostWidget from "../widgets/MyPostWidget";
import PostsWidget from "../widgets/PostsWidget";
import FriendsListWidget from "../widgets/FriendsListWidget";
import { API } from "../../constant/api";

export default function ProfilePage() {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  const [user, setUser] = useState(null);
  const { userId } = useParams();
  const tokens = useSelector((state) => state.token);

  const getUser = async () => {
    const response = await fetch(`${API}/api/users/${userId}`, {
      method: "GET",
      headers: { Authorization: `Bearer ${tokens}` },
    });
    const data = await response.json();
    setUser(data);
  };

  useEffect(() => {
    getUser();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (!user) return null;

  return (
    <Box>
      <NavBar />
      <Box
        width="100%"
        padding="2rem 6%"
        display={isNonMobileScreens ? "flex" : "block"}
        gap="2rem"
        justifyContent="center"
      >
        <Box flexBasis={isNonMobileScreens ? "26%" : undefined}>
          <UserWidget userId={userId} picturePath={user.picturePath} />
          <Box m="2rem 0" />
          <FriendsListWidget userId={userId} />
        </Box>
        <Box
          flexBasis={isNonMobileScreens ? "42%" : undefined}
          mt={isNonMobileScreens ? undefined : "2rem"}
        >
          <MyPostWidget picturePath={user.picturePath} />
          <Box m="2rem 0" />
          <PostsWidget userId={userId} isProfile />
        </Box>
      </Box>
    </Box>
  );
}
