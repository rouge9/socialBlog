import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Form from "./form";

export default function LoginPage() {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  return (
    <Box p="4rem">
      <Box
        width={isNonMobileScreens ? "33%" : "93%"}
        p="2rem"
        pt="2rem"
        m="2rem auto"
        borderRadius="1.5rem"
        backgroundColor={theme.palette.background.alt}
      >
        <Typography fontWeight="500" variant="h5" sx={{ mb: "1.5rem" }}>
          Welcome to SocioBlog
        </Typography>
        <Form />
      </Box>
    </Box>
  );
}
