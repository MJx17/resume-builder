// layouts/page.tsx
"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import ResumePreview from "@/components/preview"
import { templates } from "../data/data"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

export default function ResumeTemplateSelector() {
  const [isModalOpen, setModalOpen] = useState(false)
  const [selectedTemplate, setSelectedTemplate] = useState<any>(null)

  const handlePreview = (id: string) => {
    const template = templates.find(t => t.id === id)
    if (template) {
      setSelectedTemplate(template)
      setModalOpen(true)
    }
  }

  const handleCloseModal = () => {
    setModalOpen(false)
    setSelectedTemplate(null)
  }


  const [color, setColor] = useState('#222')

  
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Choose a Resume Template</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {templates.map((template) => (
          <Card key={template.id} className="flex flex-col justify-between">
            <CardHeader>
              <CardTitle>{template.name}</CardTitle>
            </CardHeader>
            <CardContent>

              <p className="text-sm text-muted-foreground">{template.description}</p>
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

      {/* Resume Preview Dialog */}
      <Dialog open={isModalOpen} onOpenChange={(open) => !open && handleCloseModal()}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle></DialogTitle>
          </DialogHeader>
          <div
          className="
            max-h-[calc(90vh-80px)]
            overflow-auto
         
          "
        >
          <ResumePreview data={selectedTemplate?.sampleData} />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
