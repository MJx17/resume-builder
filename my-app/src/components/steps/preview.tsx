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

const Preview: React.FC = () => {
  const formData = useResumeStore((state) => state.formData);
  const color = useLayoutStore((state) => state.color);
  const selectedTemplate = useLayoutStore((state) => state.selectedTemplate);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    if (selectedTemplate) setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const renderTemplate = () => {
    if (!selectedTemplate) return null;

    const props = {
      data: formData,  // <-- use the global formData from your store
      color: color ?? "ff0000",
    };

    switch (selectedTemplate.id) {
      case "oxford":
        return <Oxford {...props} />;
      case "harvard":
        return <Harvard {...props} />;
      case "stanford":
        return <Stanford {...props} />;
      case "cambridge":
        return <Cambridge {...props} />;
      case "mit":
        return <MIT {...props} />;
      case "berkeley":
        return <Berkley {...props} />;
      default:
        return <div>No template found</div>;
    }
  };

  if (!selectedTemplate) {
    return (
      <div className="p-6 flex items-center justify-center">
        <div className="text-gray-500 italic">No template selected.</div>
      </div>
    );
  }

  return (
    <div className="p-6 flex items-center justify-center">
      <Card className="max-w-md w-full flex flex-col justify-between">
        <CardHeader>
          <CardTitle>{selectedTemplate.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            {selectedTemplate.description}
          </p>
          <div className="mt-4 flex justify-end">
            <Button variant="outline" onClick={handleOpenModal}>
              Preview
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Resume Preview Modal */}
      <Dialog
        open={isModalOpen}
        onOpenChange={(open) => {
          if (!open) handleCloseModal();
        }}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Resume Preview</DialogTitle>
          </DialogHeader>
          <div className="max-h-[calc(90vh-80px)] overflow-auto">{renderTemplate()}</div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Preview;
