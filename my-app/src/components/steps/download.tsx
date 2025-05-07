import React from "react";
import { Button, } from "@components/ui/button";

const DownloadResume: React.FC = () => {
  const handleDownload = () => {
    // Trigger the resume download logic here (e.g., generate a PDF, etc.)
    alert("Resume Downloaded!");
  };

  return (
    <div className="text-center">
   
      <Button onClick={handleDownload} className="bg-green-500 hover:bg-green-600 text-white">
        Download Resume
      </Button>
    </div>
  );
};

export default DownloadResume;
