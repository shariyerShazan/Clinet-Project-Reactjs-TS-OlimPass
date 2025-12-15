
import type React from "react"

import { useState, useEffect } from "react"
import axios from "axios"

interface Category {
  id: string
  name: string
}

interface Partner {
  id: string
  name: string
  discount: string
  category: Category
}

export default function DPartners() {
  const [partners, setPartners] = useState<Partner[]>([])
  const [categories, setCategories] = useState<Category[]>([])
  const [loading, setLoading] = useState(true)
  const [name, setName] = useState("")
  const [discount, setDiscount] = useState("")
  const [categoryId, setCategoryId] = useState("")
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      setLoading(true)
      const [categoriesRes, partnersRes] = await Promise.all([
        axios.get("http://localhost:3000/category", { withCredentials: true }),
        axios.get("http://localhost:3000/partner", { withCredentials: true }),
      ])
      setCategories(categoriesRes.data.data || [])
      setPartners(partnersRes.data.data || [])
    } catch (err: any) {
      setError(err.response?.data?.message || "Failed to fetch data")
    } finally {
      setLoading(false)
    }
  }

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setSuccess("")

    try {
      await axios.post("http://localhost:3000/partner", { name, discount, categoryId }, { withCredentials: true })
      setSuccess("Partner created successfully")
      setName("")
      setDiscount("")
      setCategoryId("")
      fetchData()
    } catch (err: any) {
      setError(err.response?.data?.message || "Failed to create partner")
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this partner?")) return

    try {
      await axios.delete(`http://localhost:3000/partner/${id}`, {
        withCredentials: true,
      })
      setSuccess("Partner deleted successfully")
      fetchData()
    } catch (err: any) {
      setError(err.response?.data?.message || "Failed to delete partner")
    }
  }

  return (
    <div className="space-y-6">
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Create Partner</h2>
        {error && <div className="mb-4 p-3 bg-red-50 text-red-500 rounded text-sm">{error}</div>}
        {success && <div className="mb-4 p-3 bg-green-50 text-green-500 rounded text-sm">{success}</div>}

        <form onSubmit={handleCreate} className="space-y-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Partner name"
              required
              className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
            <input
              type="text"
              value={discount}
              onChange={(e) => setDiscount(e.target.value)}
              placeholder="Discount (e.g., 20%)"
              required
              className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
            <select
              value={categoryId}
              onChange={(e) => setCategoryId(e.target.value)}
              required
              className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Select Category</option>
              {categories.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>
          <button type="submit" className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Create Partner
          </button>
        </form>
      </div>

      <div className="bg-white shadow rounded-lg overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-medium text-gray-900">Partners</h2>
        </div>
        {loading ? (
          <div className="p-6">Loading...</div>
        ) : (
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Discount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Category
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {partners.map((partner) => (
                <tr key={partner.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{partner.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{partner.discount}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{partner.category?.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button onClick={() => handleDelete(partner.id)} className="text-red-600 hover:text-red-900">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  )
}
