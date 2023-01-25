import Header from "../components/section/header"
import Main from "../components/section/main"
export default function Home() {
  return (
    <section className="flex justify-center bg-[#3e3e3f20]">
      <section className="flex justify-center max-w-7xl  w-full">
        <div className="w-full md:w-[60%] text-[#2B283A]">
        <Header/>
        <Main/>
        </div>
      </section>
    </section>
  )
}
