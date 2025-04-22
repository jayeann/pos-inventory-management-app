"use client";
import { Button, Card, CardBody, CardHeader } from "@heroui/react";
import { useRouter } from "next/navigation";
import { logOut } from "@/services/auth";

type DashboardProps = {
  user: {
    email: string;
  };
};

const Dashboard = ({ user }: DashboardProps) => {
  const router = useRouter();
  const handleLogOut = async () => {
    await logOut();
    router.push("/sign-in");
  };
  return (
    <div className="flex min-h-screen p-5">
      <Card className="w-full max-w-md shawdow-xl bg-white p-6">
        <CardHeader className="text-center py-6">
          <h2 className="text-2xl font-bold text-gray-800">
            Welcome, {user?.email || "User"}
          </h2>
        </CardHeader>
        <CardBody>
          <p className="text-gray-600 mb-6 text-center">
            This is your dashboard, you can do whatever you want here.
          </p>
          <div className="text-center">
            <Button
              onPress={handleLogOut}
              color="danger"
              size="lg"
              className="w-full"
            >
              Log Out
            </Button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default Dashboard;
