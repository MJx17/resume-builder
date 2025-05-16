"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Oxford from "@/components/template/oxford";
import Harvard from "@/components/template/harvard";
import Stanford from "@/components/template/stanford";
import Cambridge from "@/components/template/cambridge";
import MIT from "@/components/template/mit";
import Berkley from "@/components/template/berkeley";
import { templates } from "../data/data";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import ColorPicker from "@/components/color-picker";

 function ResumeTemplateSelector() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState<any>(null);
  const [color, setColor] = useState("red"); // Default color

  const handlePreview = (id: string) => {
    const template = templates.find((t) => t.id === id);
    if (template) {
      setSelectedTemplate(template);
      setModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedTemplate(null);
  };

 const renderTemplate = () => {
    if (!selectedTemplate) return null;

    const props = {
      data: selectedTemplate.sampleData,
      color,
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

  return (
    <div className="min-h-screen p-6">
      {/* Template Cards */}
      <div className="flex items-center justify-center min-h-[80vh]">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {templates.map((template) => (
            <Card key={template.id} className="flex flex-col justify-between">
              <CardHeader>
                <CardTitle>{template.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {template.description}
                </p>
                <div className="mt-4 flex justify-end">
                  <Button
                    variant="outline"
                    onClick={() => handlePreview(template.id)}
                  >
                    Preview
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Resume Preview Modal */}
      <Dialog
        open={isModalOpen}
        onOpenChange={(open) => !open && handleCloseModal()}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle />
            {/* Color Picker inside the modal */}
            <div className="absolute top-0 right-[-50px] z-50">
              <ColorPicker value={color} onChange={setColor} />
            </div>
          </DialogHeader>
          <div className="max-h-[calc(90vh-80px)] overflow-auto">
            {renderTemplate()}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default  ResumeTemplateSelector;