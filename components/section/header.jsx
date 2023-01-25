export default function Header() {
  return (
    <header className="bg-[#f55a5a] h-[55px]  text-white">
        <div className="flex flex-col justify-center h-full">
          <div className="flex justify-center h-[fit-content] items-center gap-[7px] font-[500] text-[14.4608px] tracking-[-0.075em]">
            <img className="w-[24px]" src="/assets/icons/monde.png" alt="world" />
            <h1>my travel journal</h1>
          </div>
        </div>
      </header>
  )
}