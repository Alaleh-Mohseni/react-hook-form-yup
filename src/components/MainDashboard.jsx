import Chart from "./Chart";

function MainDashboard() {
  return (
    <div className="flex flex-col py-10 px-16 h-screen overflow-y-auto w-full text-white bg-slate-800">
      <h2>Dashboard</h2>

      <div className="flex space-x-8 py-6">
        <div className="flex flex-col rounded-lg w-[410px] h-[150px] p-8 justify-center bg-gray-900">
          <h2>Yatharth Verma</h2>
          <p className="text-slate-400 mt-3">Your Expenses: Rs10000</p>
        </div>
        <div className="flex flex-col rounded-lg w-[410px] h-[150px] p-8 justify-center bg-gray-900">
          <h2>Yatharth Verma</h2>
          <p className="text-slate-400 mt-3">Your Savings: Rs100000</p>
        </div>
      </div>
      <div className="flex space-x-8 py-6 w-[850px]">
        <div className="flex flex-col rounded-lg bg-gray-900 w-full p-8 justify-center">
          Expenses Graph
          <Chart className='text-slate-400'/>
        </div>
      </div>
      <div className="flex space-x-8 py-6">
        <div className="flex flex-col rounded-lg bg-gray-900 w-[410px] h-[200px] p-8 justify-center">
          <h2>Your Activity</h2>
          <li className="text-slate-400 mt-3">Sent Rs 10000 to mother</li>
        </div>
        <div className="flex flex-col rounded-lg bg-gray-900 w-[410px] h-[200px] p-8 justify-center">
          <h2>Pending Bills</h2>
          <li className="text-slate-400 mt-3">Broadband bill: Rs 1000</li>
        </div>
      </div>
    </div>
  );
}

export default MainDashboard