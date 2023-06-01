import Header from "@/components/Header";
import Button from "@/components/common/Button";

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
          <img src="/next.svg " alt="next" className="w-20 h-20" />
          <img src="/tailwind.svg" alt="tailwind" className="w-10 h-10" />
          <img src="/vercel.svg" alt="vercel" className="w-20 h-20" />
          <img src="/openai.svg" alt="openai" className="w-10 h-10" /> 
        </div>
      </section>
      <div className="w-full flex justify-center items-center">
        <Button className="w-1/4 text-white">Get Started!</Button>
      </div>
    </main>
  );
}
