import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import ModernResume from "@components/template/berkeley";
import { useResumeStore } from "@/store/personal"; // adjust path if needed

const PrintComponent = () => {
  const formData = useResumeStore((state) => state.formData);
  const contentRef = useRef<HTMLDivElement>(null);

  const reactToPrintFn = useReactToPrint({
    content: () => contentRef.current,
    documentTitle: "Resume",
    pageStyle: "@page { size: A4; margin: 20mm; }",
  });

  return (
    <div>
      <button onClick={reactToPrintFn} className="btn btn-primary">
        Print Resume
      </button>

      <div ref={contentRef}>
        <ModernResume data={formData} color="#1E40AF" />
      </div>
    </div>
  );
};

export default PrintComponent;
