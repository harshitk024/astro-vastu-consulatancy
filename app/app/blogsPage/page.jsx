"use-client"

import Header from "@/components/HeaderMain"
import BlogList from "@/components/BlogList"
import { ToastContainer } from "react-toastify"
import Footer from "@/components/Footer"

const Page = () => {

    return (
        <>
        <ToastContainer />
        <Header />
        <BlogList />
        <Footer />
        </>
    )
}

export default Page