"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ResumePreview from "@/components/preview";
import Oxford from '@components/template/oxford'
import Harvard from '@components/template/harvard'
import Stanford from '@components/template/stanford'
import Cambridge from  '@components/template/cambridge'
import MIT  from  '@components/template/mit'
import Berkley from  '@components/template/berkeley' 
import { templates } from "../data/data";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import ColorPicker from "@/components/color-picker";

export default function ResumeTemplateSelector() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState<any>(null);
  const [color, setColor] = useState("red"); // Set default color to red

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
                <p className="text-sm text-muted-foreground">{template.description}</p>
                <div className="mt-4 flex justify-end">
                  <Button variant="outline" onClick={() => handlePreview(template.id)}>
                    Preview
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Resume Preview Modal */}
      <Dialog open={isModalOpen} onOpenChange={(open) => !open && handleCloseModal()}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle></DialogTitle>
            {/* Color Picker inside the modal */}
            <div className="absolute top-0 right-[-50px] z-50 ml">
              <ColorPicker value={color} onChange={setColor} />
            </div>
          </DialogHeader>
          <div className="max-h-[calc(90vh-80px)] overflow-auto">
            {/* Pass selected color to ResumePreview */}
            <ResumePreview data={selectedTemplate?.sampleData} color={color} />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
