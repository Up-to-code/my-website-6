import { UserProfile } from '@clerk/nextjs';

const UserProfilePage = () => (
  <div className="flex min-h-max justify-center items-center h-screen py-5">
    <UserProfile
      path="/user"
      
      appearance={{
        elements: {
          formFieldLabel: "text-white mb-2",
          card: "bg-zinc-800 border border-zinc-700 shadow-lg rounded-lg p-6",
          formButtonPrimary:
            "bg-blue-600 text-white hover:bg-blue-500 transition-all duration-300 ease-in-out",
          formButtonSecondary:
            "bg-zinc-600 text-white hover:bg-zinc-500 transition-all duration-300 ease-in-out",
          formInput:
            "text-white placeholder-white bg-zinc-700 focus:bg-zinc-600 border-none rounded-md p-3 focus:ring-2 focus:ring-blue-500 transition-all duration-300",
          formLabel: "text-white mb-2",
          headerTitle: "text-white text-2xl font-bold mb-4",
          headerSubtitle: "text-white mb-6",
          footer: "text-white mt-6 bg-zinc-800 p-4 text-center",
          inputError: "text-red-500",
          input:
            "text-white placeholder-white bg-zinc-700 focus:bg-zinc-600 border-none rounded-md p-3 focus:ring-2 focus:ring-blue-500 transition-all duration-300",
        },
      }}
    />
  </div>
);

export default UserProfilePage;
