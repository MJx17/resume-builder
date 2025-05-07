import React from "react";
import { Button, } from "@components/ui/button"; // Import ShadCN button component

const ResumePreview: React.FC<{ onNext: () => void }> = ({ onNext }) => {
  return (
    <div className="text-center">

      <div className="bg-white p-6 border rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold mb-4">Your Resume</h3>
        <div className="text-left">
          <p className="mb-2"><strong>Name:</strong> John Doe</p>
          <p className="mb-2"><strong>Email:</strong> john.doe@example.com</p>
          <p className="mb-2"><strong>Phone:</strong> +123 456 7890</p>
        </div>
      </div>
      <Button onClick={onNext} className="mt-6 bg-blue-500 hover:bg-blue-600 text-white">
        Next
      </Button>
    </div>
  );
};

export default ResumePreview;
