import React from "react";
import { PDFDownloadLink,  PDFViewer } from "@react-pdf/renderer";
import BerkeleyPDF from "@components/pdf/berkeley";
import { useResumeStore } from "@/store/personal";
import { Button } from "@components/ui/button";
import DummyPDF from "../pdf/dummpdf";

const DownloadResume: React.FC = () => {
  const formData = useResumeStore((state) => state.formData);
  const themeColor = "#1E40AF"; // Replace with dynamic if needed

  return (
    <div>
    <div className="text-center">
      <PDFDownloadLink
        document={<BerkeleyPDF data={formData} color={themeColor} />}
        fileName="Resume.pdf"
      >
        {({ loading }) => (
          <Button className="bg-green-500 hover:bg-green-600 text-white">
            {loading ? "Generating PDF..." : "Download Resume as PDF"}
          </Button>
        )}
      </PDFDownloadLink>
    </div>

 
      <PDFViewer width="100%" height="600">
    <DummyPDF />
  </PDFViewer>
    </div>
  );
};

export default DownloadResume;
