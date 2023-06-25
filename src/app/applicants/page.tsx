import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import httpClient from "@/http";
import Applicants from "./Applicants";
import EntryInfo from "@/app/applicants/EntryInfo";
import Documents from "@/app/applicants/Documents";

export default async function ApplicantsPage() {
  const companies = await httpClient.getApplicantsCompanies();
  const entryInfo = await httpClient.getApplicantsEntryInfo();

  return (
    <main>
      <Header />
      <Applicants companies={companies} />
      <EntryInfo info={entryInfo.entry_start_date_info}/>
      <Documents info={entryInfo.documents}/>
      <Footer />
    </main>
  );
}
