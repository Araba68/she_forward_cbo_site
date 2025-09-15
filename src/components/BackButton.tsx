"use client";

import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="mt-6 inline-block px-4 py-2 bg-[#004d43] text-white rounded-lg shadow hover:bg-[#006b60] transition-colors"
    >
      ← Back
    </button>
  );
}
