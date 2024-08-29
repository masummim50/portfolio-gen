import CustomTypeWriter from "@/Components/typeWriter/TypeWriter";
import Image from "next/image";
import { SiFiverr } from "react-icons/si";



import { FaGithub,FaLinkedin,FaDownload  } from "react-icons/fa";


export default function Home() {
  return (
    <div>
    <div className="flex items-start justify-center" style={{  marginTop: "20px"  }}>
      <div className=" flex flex-col items-center justify-center ">
        <h1 className="text-5xl">Hi,</h1>
        <h1 className="text-5xl">I Am Masum, a</h1>
        <h1 className="text-6xl">
          <span className="text-cyan-500 text-center">
            <CustomTypeWriter />
          </span>
        </h1>
        <button>
          <a href="https://masumdev-gen.vercel.app/" target="_blank" rel="noopener noreferrer"></a>
        </button>
      </div>
      
    </div>
    <h2 className="text-center mt-[50px] text-gray-400">This site is built using Next.js 14 and Tailwind Css</h2>
    </div>
  );
}
