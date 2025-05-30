import { useState } from "react";
import { 
  BarChart3, 
  Users, 
  CreditCard, 
  Activity, 
  ArrowUpRight, 
  ArrowDownRight, 
  DollarSign, 
  Package, 
  UserPlus, 
  ShoppingCart,
  Search,
  Bell,
  Menu
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  LineChart,
  Line
} from "recharts";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";

const data = [
  { name: "Jan", total: 1200 },
  { name: "Feb", total: 900 },
  { name: "Mar", total: 1600 },
  { name: "Apr", total: 1800 },
  { name: "May", total: 2800 },
];

const lineData = [
  { name: "Jan", value: 400 },
  { name: "Feb", value: 300 },
  { name: "Mar", value: 500 },
  { name: "Apr", value: 700 },
  { name: "May", value: 400 },
];

const recentSales = [
  {
    id: "1",
    name: "John Doe",
    email: "john@example.com",
    amount: "$250.00",
    status: "success"
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane@example.com",
    amount: "$120.00",
    status: "success"
  },
  {
    id: "3",
    name: "Robert Johnson",
    email: "robert@example.com",
    amount: "$350.00",
    status: "pending"
  },
  {
    id: "4",
    name: "Emily Davis",
    email: "emily@example.com",
    amount: "$450.00",
    status: "success"
  },
  {
    id: "5",
    name: "Michael Brown",
    email: "michael@example.com",
    amount: "$550.00",
    status: "success"
  }
];

const Index = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      {/* Sidebar */}
      <div className={`${isSidebarOpen ? 'w-64' : 'w-20'} bg-white dark:bg-gray-800 shadow-md transition-all duration-300 overflow-hidden`}>
        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <BarChart3 className="h-8 w-8 text-blue-600" />
            <span className={`font-bold text-xl ${isSidebarOpen ? 'block' : 'hidden'}`}>Dashboard</span>
          </div>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="lg:hidden"
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
        <nav className="mt-6">
          <div className="px-4">
            <div className={`space-y-1 ${isSidebarOpen ? 'px-2' : 'px-0'}`}>
              <Button variant="ghost" className={`w-full justify-start ${!isSidebarOpen && 'justify-center'} mb-1`}>
                <BarChart3 className="mr-2 h-5 w-5" />
                {isSidebarOpen && <span>Dashboard</span>}
              </Button>
              <Button variant="ghost" className={`w-full justify-start ${!isSidebarOpen && 'justify-center'} mb-1`}>
                <Users className="mr-2 h-5 w-5" />
                {isSidebarOpen && <span>Customers</span>}
              </Button>
              <Button variant="ghost" className={`w-full justify-start ${!isSidebarOpen && 'justify-center'} mb-1`}>
                <Package className="mr-2 h-5 w-5" />
                {isSidebarOpen && <span>Products</span>}
              </Button>
              <Button variant="ghost" className={`w-full justify-start ${!isSidebarOpen && 'justify-center'} mb-1`}>
                <ShoppingCart className="mr-2 h-5 w-5" />
                {isSidebarOpen && <span>Orders</span>}
              </Button>
              <Button variant="ghost" className={`w-full justify-start ${!isSidebarOpen && 'justify-center'} mb-1`}>
                <CreditCard className="mr-2 h-5 w-5" />
                {isSidebarOpen && <span>Payments</span>}
              </Button>
              <Button variant="ghost" className={`w-full justify-start ${!isSidebarOpen && 'justify-center'} mb-1`}>
                <Activity className="mr-2 h-5 w-5" />
                {isSidebarOpen && <span>Analytics</span>}
              </Button>
            </div>
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <header className="bg-white dark:bg-gray-800 shadow-sm">
          <div className="flex items-center justify-between p-4">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="hidden lg:flex"
            >
              <Menu className="h-5 w-5" />
            </Button>
            
            <div className="flex-1 px-4 lg:px-8">
              <div className="relative w-full max-w-md">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
                <Input
                  type="search"
                  placeholder="Search..."
                  className="w-full bg-gray-100 dark:bg-gray-700 pl-8 rounded-lg"
                />
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon">
                <Bell className="h-5 w-5" />
              </Button>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="User" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="p-4 lg:p-8">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <Button>Download Report</Button>
          </div>

          {/* Stats Cards */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                <DollarSign className="h-4 w-4 text-gray-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$45,231.89</div>
                <div className="flex items-center pt-1 text-xs text-green-500">
                  <ArrowUpRight className="mr-1 h-4 w-4" />
                  <span>+20.1% from last month</span>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Subscriptions</CardTitle>
                <Users className="h-4 w-4 text-gray-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+2350</div>
                <div className="flex items-center pt-1 text-xs text-green-500">
                  <ArrowUpRight className="mr-1 h-4 w-4" />
                  <span>+180.1% from last month</span>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Sales</CardTitle>
                <CreditCard className="h-4 w-4 text-gray-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+12,234</div>
                <div className="flex items-center pt-1 text-xs text-red-500">
                  <ArrowDownRight className="mr-1 h-4 w-4" />
                  <span>-19% from last month</span>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Active Users</CardTitle>
                <UserPlus className="h-4 w-4 text-gray-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+573</div>
                <div className="flex items-center pt-1 text-xs text-green-500">
                  <ArrowUpRight className="mr-1 h-4 w-4" />
                  <span>+201 since last hour</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Charts */}
          <div className="grid gap-4 md:grid-cols-2 mb-6">
            <Card>
              <CardHeader>
                <CardTitle>Revenue Overview</CardTitle>
                <CardDescription>Monthly revenue for the current year</CardDescription>
              </CardHeader>
              <CardContent className="pl-2">
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="total" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Sales Analytics</CardTitle>
                <CardDescription>Daily sales performance</CardDescription>
              </CardHeader>
              <CardContent className="pl-2">
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={lineData}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Line 
                        type="monotone" 
                        dataKey="value" 
                        stroke="#3b82f6" 
                        strokeWidth={2}
                        dot={{ r: 4 }}
                        activeDot={{ r: 6 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Sales */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Sales</CardTitle>
              <CardDescription>You made 265 sales this month</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Customer</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentSales.map((sale) => (
                    <TableRow key={sale.id}>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <Avatar className="h-9 w-9">
                            <AvatarFallback>{sale.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium">{sale.name}</div>
                            <div className="text-sm text-gray-500">{sale.email}</div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                          sale.status === 'success' 
                            ? 'bg-green-100 text-green-800 dark:bg-green-800/20 dark:text-green-400' 
                            : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-800/20 dark:text-yellow-400'
                        }`}>
                          {sale.status === 'success' ? 'Paid' : 'Pending'}
                        </div>
                      </TableCell>
                      <TableCell className="text-right font-medium">{sale.amount}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
};

export default Index;