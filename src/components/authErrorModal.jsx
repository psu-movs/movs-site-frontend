import Alert from "@mui/material/Alert";

export default function AuthErrorModal({ text }) {
  if (!text) return;

  return <Alert severity="error">{text}</Alert>;
}
