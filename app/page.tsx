import Image from "next/image";


export default function Home() {
  return (
    <>
    {/* Typography */}
    <p className="title-color"> Example text</p>
  
    <p className="text-yellow-600" >Example text 2 with tailwind css</p>

    <p className="text-[#007F73]" >Example text with custom color code</p>

    <p className="font-semibold"> Semi bold text</p>

    <p className="font-bold">Font Bold</p>

    <p className="text-left"> Text align center</p>

    <p className="underline">Underline</p>

    <div className="bg-white text-black text-center p-5 m-10">Bg color</div>

    {/*Spacing */}

    <div className="mt-5 mb-10 ml-20 mr-20 bg-white text-[#000] p-5 text-center">Margin</div>

    <div className="pt-2 pb-2 pl-5 pr-5 text-black text-center bg-white">Padding</div>
    
     {/* Borders */}
     <div className="border mt-5 p-5 text-center"> Default border</div>

      {/* Rounded: sm,md,lg,xl,2xl */}
     <div className="border border-green-500 mb-10 p-2 text-center mt-5 rounded-2xl"> Change border color </div>

      {/* Flex */}
      <div className="flex justify-between text-center items-center mb-20">
        <div className="bg-red-500 p-4  w-2/4">Item 1</div>
        <div className="bg-blue-500 p-4  w-1/4">Item 2</div>
        <div className="bg-green-500 p-4  w-1/4">Item 3</div>
        <div className="bg-white-500 p-4 w-1/4">Item 4</div>
      </div>

      {/* Responsive */}

      <div className="md:text-3xl mb-20 text-white"> Hide this text</div>

      {/* Interactivty */}
      <button className="hover:bg-green-500 hover:p-20 hover:text-red-500 p-5 bg-white text-black mb-20 rounded-xl ml-10 transition ease-in-out delay-150 shadow-xl" >Button css</button>
    </>
  );
}
