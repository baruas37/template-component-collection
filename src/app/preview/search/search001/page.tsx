import { Inter, Roboto } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({
  subsets: ["latin"],
  weight: "400",
});

const Search001 = () => {
  return (
    <div className="min-w-5xl mx-auto my-0 max-w-5xl bg-red-600">
      <div className="float-left">
        <h1 className={`font-serif text-4xl text-gray-200 ${inter.className}`}>
          Search001
        </h1>
        <h1 className={`${roboto.className} text-4xl text-gray-200`}>
          Search001
        </h1>
      </div>
    </div>
  );
};

export default Search001;
