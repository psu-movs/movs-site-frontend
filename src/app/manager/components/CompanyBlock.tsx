import { Company } from "@/http/responseModels";
import useMediaQuery from "@mui/material/useMediaQuery";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

const CompanyBlock = ({
  company,
  onDelete,
}: {
  company: Company;
  onDelete(company: Company): Promise<void>;
}) => {
  const isPhone = useMediaQuery("(max-width:480px)");

  return (
    <Stack
      sx={{
        alignItems: "center",
        justifyContent: "space-between",
        height: isPhone ? 50 : 80,
        backgroundColor: "#FFFFFF",
        borderRadius: 1,
        boxShadow: 3,
        padding: "4% 8% 4% 8%",
        flexDirection: 'row',
      }}
    >
      <Stack alignItems={"center"} justifyContent={"center"}>
        <img
          width={isPhone ? "90%" : "100%"}
          src={company.image_url}
          alt={company.image_url}
          loading={"lazy"}
        />
      </Stack>
      <IconButton aria-label="delete" onClick={() => onDelete(company)}>
        <DeleteIcon />
      </IconButton>
    </Stack>
  );
};

export default CompanyBlock;
