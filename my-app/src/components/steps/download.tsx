import React, { useState } from "react";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import { useResumeStore } from "@/store/personal";
import { useLayoutStore } from "@/store/layoutStore";
import { Button } from "@components/ui/button";

import Harvard from "@components/pdf/harvard";
import BerkeleyPDF from "@components/pdf/berkeley";
import Cambridge from "@components/pdf/cambridge";
import DummyPDF from "@components/pdf/dummpdf";
import Stanford from '@/components/pdf/stanford';
import Oxford from '@/components/pdf/oxford';
import MIT from '@components/pdf/mit'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const DownloadResume: React.FC = () => {
  const formData = useResumeStore((state) => state.formData);
  const { layout, color } = useLayoutStore();
  const [open, setOpen] = useState(false); // <-- for controlling dialog

  const getSelectedLayout = () => {
    switch (layout) {
      case "harvard":
        return Harvard;
      case "berkeley":
        return BerkeleyPDF;
      case "cambridge":
        return Cambridge;
      case "stanford":
        return Stanford;
      case "oxford":
        return Oxford;
      case "mit":
        return MIT;
      default:
        return DummyPDF;
    }
  };

  const SelectedLayout = getSelectedLayout();

  return (
    <div className="text-center">
      <div className="mb-4">
        <PDFDownloadLink
          document={<SelectedLayout data={formData} color={color ?? "#000000"} />}
          fileName="Resume.pdf"
        >
          {({ loading }) => (
            <Button className="bg-green-500 hover:bg-green-600 text-white w-40">
              {loading ? "Generating PDF..." : "Download Resume"}
            </Button>
          )}
        </PDFDownloadLink>
      </div>

      <Button className="bg-blue-500 hover:bg-blue-600 text-white w-40" onClick={() => setOpen(true)}>
        Print Preview
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-5xl h-[90vh] p-0 flex flex-col">
          <DialogHeader className="p-4">
            <DialogTitle>Print Preview</DialogTitle>
          </DialogHeader>
          <div className="flex-1 overflow-hidden">
            <PDFViewer width="100%" height="100%">
              <SelectedLayout data={formData} color={color ?? "#000000"} />
            </PDFViewer>
          </div>
        </DialogContent>

      </Dialog>
    </div>
  );
};

export default DownloadResume;
