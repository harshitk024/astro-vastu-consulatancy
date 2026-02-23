import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import AdminClientLayout from "./AdminClientLayout";

export default async function AdminLayout({ children }) {

  const session = await getServerSession(authOptions);

  if (!session) redirect("/login");

  if (session.user.role !== "admin") redirect("/unauthorized");

  return <AdminClientLayout>{children}</AdminClientLayout>;
}