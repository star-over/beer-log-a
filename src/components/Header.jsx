export default function Header() {
  return (
    <div className="max-w-full py-16 px-4 sm:py-10 sm:px-6 lg:px-8 bg-zinc-100">
      <div className="text-center">
        <h1 className="text-lg font-semibold text-indigo-600">Beer log a</h1>
        <p className="mt-1 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
          Take control of your beer.
        </p>
        <p className="mx-auto mt-5 max-w-xl text-xl text-gray-500">
          Choose your beer
        </p>
      </div>
    </div>
  );
}
