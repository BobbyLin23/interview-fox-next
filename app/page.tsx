import Header from "@/components/Header";
import StartButton from "@/components/StartButton";
import Button from "@/components/common/Button";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Header />
      <section className="w-full h-auto flex items-center justify-around py-[200px]">
        <div>
          <div className="mb-2 text-4xl font-bold">Interview Fox</div>
          <div className="text-gray-500">Your Interview Helper Based On AI</div>
        </div>
        <div className="flex items-center justify-center gap-4 px-4">
          <div>Powered By</div>
          <Image src="/next.svg" alt="next" width={80} height={80} />
          <Image src="/tailwind.svg" alt="tailwind" width={50} height={50}/>
          <Image src="/vercel.svg" alt="vercel" width={80} height={80} />
          <Image src="/openai.svg" alt="openai" width={50} height={50} /> 
        </div>
      </section>
      <div className="w-full flex justify-center items-center">
        {/* <Button className="w-1/4 text-white bg-sky-500 hover:bg-sky-400">Get Started!</Button> */}
        <StartButton />
      </div>
    </main>
  );
}
