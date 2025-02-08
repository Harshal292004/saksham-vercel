const createUser = async (user:any) => {
    try {
      const response = await fetch("https://saksham-vercel.vercel.app/api/users/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          clerkId: user.clerkId,
          email_addresses: user.email_addresses,
          username: user.username,
          first_name: user.first_name,
          role:"individual"
        }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Failed to create user");
      return data  
    } catch (error) {
      console.error("Error:", error);
      return null
    }
  };

export {createUser}