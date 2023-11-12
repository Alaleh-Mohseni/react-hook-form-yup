import { Outlet } from "react-router-dom";

function FormLayout() {
  return (
    <section className="bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-gray-800 text-white border border-gray-700 rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <Outlet />
          </div>
        </div>
      </div>
    </section>
  )
}

export default FormLayout