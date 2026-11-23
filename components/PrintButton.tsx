"use client";

export default function PrintButton() {
  return (
    <button type="button" className="btn" onClick={() => window.print()}>
      Salvar como PDF
    </button>
  );
}
