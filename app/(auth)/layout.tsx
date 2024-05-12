import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex-center min-h-screen w-full bg-purple-100">
      {children}
    </main>
  );
};

export default layout;
