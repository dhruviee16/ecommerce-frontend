interface ContentProps {
  title?: string;
}

export function OrderHistory(props: ContentProps) {
  return (
    <div>
      <div className="ml-[15%] mr-8">
        <div className="py-8">
          {/* <div className="mb-1 flex w-full flex-row flex-wrap justify-between sm:mb-0">
            <h2 className="text-2xl leading-tight text-white md:pr-0">
              {props.title}
            </h2>
          </div> */}

          <div className="mb-5 text-center text-5xl font-bold">
            Order History
          </div>
          <div className="py-4">
            <div className="max-w-full overflow-x-auto rounded-lg shadow">
              <table className="w-full leading-normal">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="border-b border-gray-200 bg-white  px-5 py-3 text-left  text-lg font-normal uppercase  text-gray-800"
                    >
                      User Name
                    </th>
                    <th
                      scope="col"
                      className="border-b border-gray-200 bg-white  px-5 py-3 text-left  text-lg font-normal uppercase text-gray-800"
                    >
                      Product Name
                    </th>
                    <th
                      scope="col"
                      className="border-b border-gray-200 bg-white  px-5 py-3 text-left  text-lg font-normal uppercase text-gray-800"
                    >
                      Trader Name
                    </th>
                    <th
                      scope="col"
                      className="border-b border-gray-200 bg-white  px-5 py-3 text-left  text-lg font-normal uppercase text-gray-800"
                    >
                      User Address
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
                        <div className="shrink-0">
                          <a href="#" className="relative block"></a>
                        </div>
                        <div className="ml-3">
                          <p className="whitespace-nowrap text-gray-900">
                            test1
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="border-b border-gray-200 bg-white p-5 text-sm">
                      <p className="whitespace-nowrap text-gray-900">
                        test product
                      </p>
                    </td>
                    <td className="border-b border-gray-200 bg-white p-5 text-sm">
                      <p className="whitespace-nowrap text-gray-900">
                        test trader
                      </p>
                    </td>
                    <td className="border-b border-gray-200 bg-white p-5 text-sm">
                      <p className="whitespace-nowrap text-gray-900">
                        test address
                      </p>
                    </td>

                    <td className="border-b border-gray-200 bg-white p-5 text-sm">
                      <a
                        href="#"
                        className="text-indigo-600 hover:text-indigo-900"
                      >
                        Edit
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="border-b border-gray-200 bg-white p-5 text-sm">
                      <div className="flex items-center">
                        <div className="shrink-0">
                          <a href="#" className="relative block"></a>
                        </div>
                        <div className="ml-3">
                          <p className="whitespace-nowrap text-gray-900">
                            test2
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="border-b border-gray-200 bg-white p-5 text-sm">
                      <p className="whitespace-nowrap text-gray-900">
                        test product
                      </p>
                    </td>
                    <td className="border-b border-gray-200 bg-white p-5 text-sm">
                      <p className="whitespace-nowrap text-gray-900">
                        test trader
                      </p>
                    </td>
                    <td className="border-b border-gray-200 bg-white p-5 text-sm">
                      <p className="whitespace-nowrap text-gray-900">
                        test address
                      </p>
                    </td>
                    <td className="border-b border-gray-200 bg-white p-5 text-sm">
                      <a
                        href="#"
                        className="text-indigo-600 hover:text-indigo-900"
                      >
                        Edit
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="border-b border-gray-200 bg-white p-5 text-sm">
                      <div className="flex items-center">
                        <div className="shrink-0">
                          <a href="#" className="relative block"></a>
                        </div>
                        <div className="ml-3">
                          <p className="whitespace-nowrap text-gray-900">
                            test3
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="border-b border-gray-200 bg-white p-5 text-sm">
                      <p className="whitespace-nowrap text-gray-900">
                        test product
                      </p>
                    </td>
                    <td className="border-b border-gray-200 bg-white p-5 text-sm">
                      <p className="whitespace-nowrap text-gray-900">
                        test trader
                      </p>
                    </td>
                    <td className="border-b border-gray-200 bg-white p-5 text-sm">
                      <p className="whitespace-nowrap text-gray-900">
                        test address
                      </p>
                    </td>
                    <td className="border-b border-gray-200 bg-white p-5 text-sm">
                      <a
                        href="#"
                        className="text-indigo-600 hover:text-indigo-900"
                      >
                        Edit
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="border-b border-gray-200 bg-white p-5 text-sm">
                      <div className="flex items-center">
                        <div className="shrink-0">
                          <a href="#" className="relative block"></a>
                        </div>
                        <div className="ml-3">
                          <p className="whitespace-nowrap text-gray-900">
                            test4
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="border-b border-gray-200 bg-white p-5 text-sm">
                      <p className="whitespace-nowrap text-gray-900">
                        test product
                      </p>
                    </td>
                    <td className="border-b border-gray-200 bg-white p-5 text-sm">
                      <p className="whitespace-nowrap text-gray-900">
                        test trader
                      </p>
                    </td>
                    <td className="border-b border-gray-200 bg-white p-5 text-sm">
                      <p className="whitespace-nowrap text-gray-900">
                        test address
                      </p>
                    </td>
                    <td className="border-b border-gray-200 bg-white p-5 text-sm">
                      <a
                        href="#"
                        className="text-indigo-600 hover:text-indigo-900"
                      >
                        Edit
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
