import React from "react";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import { useResumeStore } from "@/store/personal";
import { useLayoutStore } from "@/store/layoutStore";
import { Button } from "@components/ui/button";

import Harvard from "@components/pdf/harvard";
import BerkeleyPDF from "@components/pdf/berkeley";
import Cambridge from "@components/pdf/cambridge";
import DummyPDF from "@components/pdf/dummpdf";

const DownloadResume: React.FC = () => {
  const formData = useResumeStore((state) => state.formData);
  const { layout, color } = useLayoutStore();

  const getSelectedLayout = () => {
    switch (layout) {
      case "harvard":
        return Harvard;
      case "berkeley":
        return BerkeleyPDF;
      case "cambridge":
        return Cambridge;
      default:
        return DummyPDF;
    }
  };

  const SelectedLayout = getSelectedLayout();

  return (
    <div>
      <div className="text-center mb-6">
        <PDFDownloadLink
          document={<SelectedLayout data={formData} color={color} />}
          fileName="Resume.pdf"
        >
          {({ loading }) => (
            <Button className="bg-green-500 hover:bg-green-600 text-white">
              {loading ? "Generating PDF..." : "Download Resume as PDF"}
            </Button>
          )}
        </PDFDownloadLink>
      </div>

      <PDFViewer width="100%" height="800">
        <SelectedLayout data={formData} color={color} />
      </PDFViewer>
    </div>
  );
};

export default DownloadResume;
