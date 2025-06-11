export interface PersonalDetailsFormProps {
    onNext: () => void;
    onBack: () => void;
  }



export type TemplateProps = {
  data: any;
  color?: string;
  pageSize?: "A4" | "LETTER" | "A3" | "A5" | "LEGAL" | "TABLOID";
};
