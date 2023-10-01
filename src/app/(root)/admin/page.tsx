import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Administration",
};

const Admin = () => {
  return (
    <main>
      <form method="post">
        <input type="text" name="username" placeholder="Username" />
        <input type="password" name="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </main>
  );
};

export default Admin;
