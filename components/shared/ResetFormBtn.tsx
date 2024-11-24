"use client";
import Link from "next/link";

const ResetFormBtn = () => {
  const resetForm = () => {
    const form = document.querySelector(".search-form") as HTMLFormElement;

    if (form) form.reset();
  };

  return (
    <button className="search-btn text-white" type="reset" onClick={resetForm}>
      <Link href="/">X</Link>
    </button>
  );
};

export default ResetFormBtn;
