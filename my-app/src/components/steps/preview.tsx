import React, { useState } from "react";
import { Button } from "@components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@components/ui/dialog";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@components/ui/card";
import { useResumeStore } from "@/store/personal";
import { useLayoutStore } from "@/store/layoutStore";

// Template imports
import Oxford from "@/components/template/oxford";
import Harvard from "@/components/template/harvard";
import Stanford from "@/components/template/stanford";
import Cambridge from "@/components/template/cambridge";
import MIT from "@/components/template/mit";
import Berkley from "@/components/template/berkeley";
import { PDFViewer } from "@react-pdf/renderer";

// Template map
const templates = [
  { id: "oxford", name: "Oxford", description: "Elegant and modern", component: Oxford },
  { id: "harvard", name: "Harvard", description: "Professional layout", component: Harvard },
  { id: "stanford", name: "Stanford", description: "Bold and stylish", component: Stanford },
  { id: "cambridge", name: "Cambridge", description: "Minimalist design", component: Cambridge },
  { id: "mit", name: "MIT", description: "Structured and clean", component: MIT },
  { id: "berkeley", name: "Berkeley", description: "Creative and visual", component: Berkley },
];

const Preview: React.FC = () => {
  const formData = useResumeStore((state) => state.formData);
  const layout = useLayoutStore((state) => state.layout);
  const color = useLayoutStore((state) => state.color);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => {
    if (selected) setIsModalOpen(true);
  };
  
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };



  const selected = templates.find((t) => t.id === layout);



  const renderTemplate = () => {
    if (!selected) return <div className="text-gray-500 italic">No template selected.</div>;

    const Component = selected.component;
    return <Component data={formData} color={color} />;
  };

  if (!selected) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6">
        <div className="text-gray-500 italic text-center">
          No template selected yet.
        </div>
      </div>
    );
  }

  return (


    <div className=" p-6 flex items-center justify-center">
      <Card className="max-w-md w-full flex flex-col justify-between">
        <CardHeader>
          <CardTitle>{selected.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">{selected.description}</p>
          <div className="mt-4 flex justify-end">
            <Button variant="outline" onClick={handleOpenModal}>
              Preview
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Resume Preview Modal */}
      <Dialog open={isModalOpen} onOpenChange={(open) => !open && handleCloseModal()}>
        <DialogContent className="">
          <DialogHeader>
            <DialogTitle>Resume Preview</DialogTitle>
          </DialogHeader>
          <div className="max-h-[calc(90vh-80px)] overflow-auto">
            {renderTemplate()}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Preview;


