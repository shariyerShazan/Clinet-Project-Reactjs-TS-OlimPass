"use client"

import { useState } from "react"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@radix-ui/react-tabs"
import { useAuth } from "../auth/AuthContext"
import DCategories from "../components/Categories"
import DPartners from "../components/Partners"
import DRegistrations from "../components/Registrations"
import DRedeems from "../components/Redeems"

export default function Dashboard() {
  const { user, logout } = useAuth()
  const [activeTab, setActiveTab] = useState("categories")

  const handleLogout = () => {
    logout()
  }

  return (
    <div className=" bg-[#121212] min-h-[100vh] text-white">
      {/* Navbar */}
      <nav className="shadow-md bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <h1 className="text-2xl font-bold text-white">Admin Dashboard</h1>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-300">{user?.email}</span>
              <button
                onClick={handleLogout}
                className="px-4 py-2 text-sm font-medium text-white bg-[#F80B58] rounded-md hover:bg-[#F80B5899] transition-colors duration-200"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Tabs */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="flex border-b border-gray-700">
            {[
              { value: "categories", label: "Categories" },
              { value: "partners", label: "Partners" },
              { value: "registrations", label: "Registrations" },
              { value: "redeems", label: "Redeems" },
            ].map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className={`px-6 py-3 font-medium text-sm rounded-t-md transition-colors duration-200 ${
                  activeTab === tab.value
                    ? "bg-[#1f1f1f] border-b-2 border-[#F80B58] text-[#F80B58]"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Tab Contents */}
          <div className="bg-[#1a1a1a] rounded-b-md p-6 shadow-md">
            <TabsContent value="categories">
              <DCategories />
            </TabsContent>
            <TabsContent value="partners">
              <DPartners />
            </TabsContent>
            <TabsContent value="registrations">
              <DRegistrations />
            </TabsContent>
            <TabsContent value="redeems">
              <DRedeems />
            </TabsContent>
          </div>
        </Tabs>
      </main>
    </div>
  )
}
