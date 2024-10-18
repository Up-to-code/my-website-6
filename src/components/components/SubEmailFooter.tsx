"use client"; // Ensure this component is treated as a client component

import { useState } from "react";
import { Button } from "../ui/button";
import { subEmail } from "@/lib/func/sub"; // Ensure this function is correctly implemented
import { useToast } from "@/hooks/use-toast";

function SubEmailFooter() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast(); // Using the toast hook for feedback

  const handleSubmit = async () => {
    setLoading(true); // Set loading state to true
    // Reset error message to avoid showing the old error
    setEmail(""); // Clear email input on success

    try {
      const response = await subEmail(email); // Make the API request

      if (response.status === 200) {
        // Success case
        toast({
          title: "تم التسجيل بنجاح", // Success message
        });
      } else {
        // Handle failure case based on response
        const errorMessage = await response.data; // Get error message from response
        toast({
          title: errorMessage || "خطأ في التسجيل للحساب", // Display server error or fallback message
        });
      }
    } catch (err) {
      // Handle any unexpected errors
  
      console.error("Error during subscription:", err); // Log error for debugging
    } finally {
      setLoading(false); // Reset loading state in all cases
    }
  };

  return (
    <div className="space-y-4">
      <h4 className="text-xl font-semibold">اشترك في النشرة الإخبارية</h4>
      <p className="text-zinc-400">ابق على اطلاع بآخر المشاريع والمقالات.</p>
      <div className="flex items-center gap-3">
        <input
          type="email"
          placeholder="بريدك الإلكتروني"
          className="bg-zinc-700 text-zinc-100 px-4 py-2 rounded-r-none rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-600 flex-grow"
          onChange={(e) => setEmail(e.target.value)} // Update email state
          value={email} // Controlled input
          required // Ensure email is required
        />
        <Button
          className="bg-blue-600 hover:bg-blue-700 rounded-none"
          onClick={handleSubmit}
          disabled={loading || !email} // Disable while loading or if email is empty
        >
          {loading ? "جاري التسجيل..." : "اشترك"} {/* Loading state text */}
        </Button>
      </div>
    </div>
  );
}

export default SubEmailFooter;
