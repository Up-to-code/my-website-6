export async function subEmail(email: string) {
    try {
        const res = await fetch("/api/sub", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email }), // Ensure email is correct here
        });

        // Log any errors for debugging
        if (!res.statusText) {
            const errorData = await res.json();
            console.error("Error data:", errorData);
            throw new Error(errorData.message || "Network response was not ok");
        }

        // If successful, return an object with status and data
        const data = await res.json();
        return { status: res.status, data }; // Include the status
    } catch (error) {
        console.error("Error during fetch:", error);
        throw error; // Rethrow to handle in the calling function
    }
}
