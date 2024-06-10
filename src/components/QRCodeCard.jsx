import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import QRCode from '../assets/image-qr-code.png';

const theme = createTheme();

theme.typography.h6 = {
  color: 'hsl(218, 44%, 22%)',
  fontFamily: "Outfit sans-serif",
  fontOpticalSizing: "auto",
  fontWeight: 700,
  fontStyle: "normal",
};

theme.typography.body1 = {
  paddingTop: '10px',
  color:"hsl(220, 15%, 55%)",
  fontFamily: "Outfit sans-serif",
  fontOpticalSizing: "auto",
  fontWeight: 400,
  fontStyle: "normal",
  fontSize: "15px",
};

export default function QRCodeCard() {
  return (
    <ThemeProvider theme={theme}>
    <Card sx={{ width: "300px", borderRadius: 3, boxShadow: 3 }}>
      <CardMedia
        sx={{ height: "280px", borderRadius: 3, m: 1.3 }}
        image={QRCode}
        title="qr code"
      />
      <CardContent sx={{ textAlign: "center" }}>
        <Typography
          gutterBottom
          component="div"
          variant="h6"
        >
          Improve your front-end skills by building projects
        </Typography>
        <Typography
          variant="body1"
        >
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </Typography>
      </CardContent>
    </Card>
    </ThemeProvider>
  );
}
