"use client";
import { Button, Card, CardBody } from "@heroui/react";
import { useRouter } from "next/navigation";
import { logOut } from "@/services/auth";
import { salesData } from "./data/salesData";
import { purchaseData } from "./data/purchaseData";
import KPICard from "./components/KPICard";
import StockGauge from "./components/StockGauge";
import { wastageData } from "./data/wastageData.ts";
import ChartCard from "./components/ChartCard";
import TopTenTable from "./components/TopTenTable";

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
    <div className=" min-h-screen p-5 space-y-4">
      <h2 className="text-2xl font-bold text-gray-800">
        Welcome, {user?.email || "User"}
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-[2fr_2fr_1fr_1fr] gap-4">
        <KPICard title={"Sales Overview"} kpiData={salesData} />
        <KPICard title={"Purchase Overview"} kpiData={purchaseData} />
        <ChartCard title="Stock Status">
          <div className="p-1">
            <StockGauge onHold={35} pending={65} />
          </div>
        </ChartCard>
        <KPICard title={"Wastage Product"} kpiData={wastageData} />
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-[4fr_2fr] gap-4">
        <ChartCard title="Sales Statistics"></ChartCard>
        <ChartCard title="Top Selling Products">
          <TopTenTable />
        </ChartCard>
      </div>

      <Card className="w-full shawdow-xl bg-white p-6">
        <CardBody>
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
