"use client";

import { useFormStatus } from "react-dom";

function MealsFormSubmit() {
  const { pending } = useFormStatus();
  return (
    <button disabled={pending}>
      {!pending ? "Share Meal" : "Submitting..."}
    </button>
  );
}

export default MealsFormSubmit;
