import Random from './components/Random';
import Tag from './components/Tag'



export default function App() {
  return (
    <div  className="w-full h-screen flex flex-col background relative items-center overflow-y-scroll scroll-smooth">
      <h1 className="bg-white rounded-lg  w-11/12 text-center mt-[40px]
       px-10 py-2 text-xl font-bold sticky top-0 text-gray-300 text-shadow bg-gradient-to-r from-purple-500 to-pink-500 md:text-2xl lg:text-3xl z-10">RANDOM GIFS</h1>
      <div className="flex flex-col w-full items-center gap-y-10 mt-[30px]">
        <Random/>
        <Tag/>
      </div>
    </div>
  );
}
