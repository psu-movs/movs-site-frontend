"use client";
import { useState, useEffect } from "react";
import { Company } from "@/http/responseModels";
import httpClient from "@/http";
import useMediaQuery from "@mui/material/useMediaQuery";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import CompanyBlock from "./CompanyBlock";
import AddCompanyModal from "@/app/manager/components/AddCompanyModal";

export default function ApplicantsCompanies(params: {
  companies: Company[];
}) {
  const [modalOpened, setModalOpened] = useState<boolean>(false);
  const [companies, setCompanies] = useState<Company[]>(params.companies);
  const [gridColumns, setGridColumns] = useState(12);
  const isTablet = useMediaQuery("(max-width:960px)");
  const isPhone = useMediaQuery("(max-width:480px)");

  useEffect(() => {
    if (isPhone) setGridColumns(6);
    else if (isTablet) setGridColumns(9);
  }, []);

  const deleteCompany = async (company: Company) => {
    await httpClient.deleteApplicantsCompany(company._id);
    setCompanies(companies.filter((comp) => comp._id !== company._id));
  };

  const addCompany = async (file: File) => {
    const company = await httpClient.addApplicantsCompany(file);
    setCompanies([...companies, company]);
  }

  return (
    <Box>
      <AddCompanyModal isOpen={modalOpened} onClose={() => setModalOpened(false)} onCompanyAdd={addCompany} />
      <Button
        onClick={() => setModalOpened(true)}
      >
        Добавить компанию
      </Button>
      <Grid
        container
        spacing={3}
        sx={{
          display: "flex",
          justifyContent: "center",
          mb: isPhone ? "15%" : "8%",
        }}
        columns={gridColumns}
      >
        {companies.map((company) => (
          <Grid item xs={3} key={company._id}>
            <CompanyBlock
              company={company}
              onDelete={deleteCompany}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
