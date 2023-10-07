// interface ContentProps {
//   title?: string;
// }

export default function Order() {
  return (
    <div>
      {/* <div className="container mx-auto">
              <div className="py-8">
                  <div className="mb-1 flex w-full flex-row flex-wrap justify-between sm:mb-0">
                      <h2 className="text-2xl leading-tight text-white md:pr-0">
                          {props.title}
                      </h2>
                  </div> */}
      <div className="py-4">
        <div className="max-w-full overflow-x-auto rounded-lg shadow">
        <div className="mb-5 text-center text-3xl font-bold text-black">Order History</div>
          <table className="w-full leading-normal">
            <thead>
              <tr>
                <th
                  scope="col"
                  className="border-b border-gray-200 bg-white  px-5 py-3 text-left  text-sm font-normal uppercase text-gray-800"
                >
                  Username
                </th>
                <th
                  scope="col"
                  className="border-b border-gray-200 bg-white  px-5 py-3 text-left  text-sm font-normal uppercase text-gray-800"
                >
                  Product Name
                </th>
                <th
                  scope="col"
                  className="border-b border-gray-200 bg-white  px-5 py-3 text-left  text-sm font-normal uppercase text-gray-800"
                >
                  Address
                </th>
                <th
                  scope="col"
                  className="border-b border-gray-200 bg-white  px-5 py-3 text-left  text-sm font-normal uppercase text-gray-800"
                />
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-b border-gray-200 bg-white p-5 text-sm">
                  <div className="flex items-center">
                    <div className="ml-3">
                      <p className="whitespace-nowrap text-gray-900">test1</p>
                    </div>
                  </div>
                </td>
                <td className="border-b border-gray-200 bg-white p-5 text-sm">
                  <p className="whitespace-nowrap text-gray-900">Pens</p>
                </td>
                <td className="border-b border-gray-200 bg-white p-5 text-sm">
                  <p className="whitespace-nowrap text-gray-900">test address1</p>
                </td>
              </tr>
              <tr>
                <td className="border-b border-gray-200 bg-white p-5 text-sm">
                  <div className="flex items-center">
                    <div className="ml-3">
                      <p className="whitespace-nowrap text-gray-900">test2</p>
                    </div>
                  </div>
                </td>
                <td className="border-b border-gray-200 bg-white p-5 text-sm">
                  <p className="whitespace-nowrap text-gray-900">Pencils</p>
                </td>
                <td className="border-b border-gray-200 bg-white p-5 text-sm">
                  <p className="whitespace-nowrap text-gray-900">test address2</p>
                </td>
              </tr>
              <tr>
                <td className="border-b border-gray-200 bg-white p-5 text-sm">
                  <div className="flex items-center">
                    <div className="ml-3">
                      <p className="whitespace-nowrap text-gray-900">test3</p>
                    </div>
                  </div>
                </td>
                <td className="border-b border-gray-200 bg-white p-5 text-sm">
                  <p className="whitespace-nowrap text-gray-900">Canvas</p>
                </td>
                <td className="border-b border-gray-200 bg-white p-5 text-sm">
                  <p className="whitespace-nowrap text-gray-900">test address3</p>
                </td>
              </tr>
              <tr>
                <td className="border-b border-gray-200 bg-white p-5 text-sm">
                  <div className="flex items-center">
                    <div className="ml-3">
                      <p className="whitespace-nowrap text-gray-900">test4</p>
                    </div>
                  </div>
                </td>
                <td className="border-b border-gray-200 bg-white p-5 text-sm">
                  <p className="whitespace-nowrap text-gray-900">
                    Poster Colors
                  </p>
                </td>
                <td className="border-b border-gray-200 bg-white p-5 text-sm">
                  <p className="whitespace-nowrap text-gray-900">test address4</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
