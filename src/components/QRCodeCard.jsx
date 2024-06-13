import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import QRCode from "../assets/image-qr-code.png";

const theme = createTheme();

theme.typography.h6 = {
  color: "hsl(218, 44%, 22%)",
  fontOpticalSizing: "auto",
  fontWeight: 700,
  fontStyle: "normal",
  fontSize: "22px",
};

theme.typography.body1 = {
  paddingTop: "10px",
  color: "hsl(220, 15%, 55%)",
  fontOpticalSizing: "auto",
  fontWeight: 400,
  fontStyle: "normal",
  fontSize: "17px",
};

export default function QRCodeCard() {
  return (
    <ThemeProvider theme={theme}>
      <Card
        sx={{ width: "320px", height: "497px", borderRadius: 4, boxShadow: 3 }}
      >
        <CardMedia
          sx={{ height: "288px", width: "288px", borderRadius: 2, m: 2 }}
          image={QRCode}
          title="qr code"
        />
        <CardContent
          sx={{
            textAlign: "center",
            paddingTop: "14px",
            paddingLeft: "24px",
            paddingRight: "20px;",
          }}
        >
          <Typography gutterBottom component="div" variant="h6">
            Improve your front-end skills by building projects
          </Typography>
          <Typography variant="body1">
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </Typography>
        </CardContent>
      </Card>
    </ThemeProvider>
  );
}
