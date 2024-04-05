import { Avatar, Box } from "@mui/material";

const UserImage = ({ image, size = "60px" }) => {
  return (
    <Box width={size} height={size}>
      {image ? (
        <img
          style={{ objectFit: "cover", borderRadius: "50%" }}
          width={size}
          height={size}
          alt="user"
          // src={`https://socio-blog-backend.vercel.app/assets/${image}`}
          // src={`http://localhost:6001/assets/${image}`}
          src={image}
        />
      ) : (
        <Avatar>H</Avatar>
      )}
    </Box>
  );
};

export default UserImage;
