import React, { useState } from "react";
import { Button, } from "@components/ui/button"; // Import ShadCN Input and Button components
import {Input } from "@components/ui/input";



const PersonalDetailsForm: React.FC<{ onNext: () => void }> = ({ onNext }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const isFormValid = name && email && phone;

  return (
    <div className="text-center">
 
      <div className="max-w-xl mx-auto">
        <div className="mb-4">
          <Input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 border rounded-lg"
          />
        </div>
        <div className="mb-4">
          <Input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border rounded-lg"
          />
        </div>
        <div className="mb-6">
          <Input
            type="tel"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full p-3 border rounded-lg"
          />
        </div>
      </div>
      <Button
        onClick={onNext}
        disabled={!isFormValid}
        className={`mt-6 ${!isFormValid ? "bg-gray-300" : "bg-blue-500 hover:bg-blue-600"} text-white`}
      >
        Next
      </Button>
    </div>
  );
};

export default PersonalDetailsForm;
