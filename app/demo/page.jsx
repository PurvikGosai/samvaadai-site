"use client";

import { useEffect } from "react";
import { demoMarkup } from "./demoMarkup";

export default function DemoPage() {
  useEffect(() => {
    const form = document.querySelector("[data-demo-form]");
    const successState = document.querySelector("[data-success-state]");
    if (!form || !successState) return;

    const submitForm = (event) => {
      event.preventDefault();

      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      const request = Object.fromEntries(new FormData(form).entries());
      request.submittedAt = new Date().toISOString();

      const previousRequests = JSON.parse(localStorage.getItem("samvaadai-demo-requests") || "[]");
      previousRequests.push(request);
      localStorage.setItem("samvaadai-demo-requests", JSON.stringify(previousRequests));

      document.querySelector("[data-client-name]").textContent = request.fullName.split(" ")[0];
      form.hidden = true;
      document.querySelector(".form-heading").hidden = true;
      successState.hidden = false;
    };

    form.addEventListener("submit", submitForm);
    return () => form.removeEventListener("submit", submitForm);
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: demoMarkup }} />;
}
