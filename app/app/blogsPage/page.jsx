"use-client"

import Header from "@/components/HeaderMain"
import BlogList from "@/components/BlogList"
import { ToastContainer } from "react-toastify"
import Footer from "@/components/Footer"

const Page = () => {

    return (
        <div  className="pt-[240px]">
        <ToastContainer />
        <Header />
        <BlogList />
        <Footer />
        </div>
    )
}

export default Page