import {
  CircleCheckBig,
  BrainCircuit,
  FileText,
  TrendingUp,
} from "lucide-react";

function HeroDashboard() {
  return (
    <div className="relative w-full max-w-lg">

      {/* Main Dashboard Card */}

      <div
        className="
        rounded-3xl
        border
        bg-white/5
        border 
        border-white/10
        p-8
        shadow-2xl
        "
      >

        {/* Header */}

        <div className="flex items-center justify-between">

          <div>

            <p className="text-sm text-slate-400">
              Resume Analysis
            </p>

            <h3 className="mt-1 text-2xl font-bold text-white">
              ATS Score
            </h3>

          </div>

          <div
            className="
            rounded-2xl
            bg-gray-200
            p-3
            text-black/70
            "
          >
            <BrainCircuit size={28} />
          </div>

        </div>

        {/* Score */}

        <div className="mt-8 flex items-center gap-5">

          <div
            className="
            flex
            h-28
            w-28
            items-center
            justify-center
            rounded-full
            border-8
            border-amber-500
            text-3xl
            font-bold
            text-amber-500
            "
          >
            89%
          </div>

          <div className="space-y-3">

            <div>

              <div className="mb-1 flex justify-between text-sm">
                <span className="text-white mr-3">Skills Match </span>
                <span className="text-white"> 92%</span>
              </div>

              <div className="h-2 rounded-full bg-gray-200">

                <div className="h-2 w-[92%] rounded-full bg-orange-400"></div>

              </div>

            </div>

            <div>

              <div className="mb-1 flex justify-between text-sm">
                <span className="text-white mr-3">Formatting</span>
                <span className="text-white">95%</span>
              </div>

              <div className="h-2 rounded-full bg-gray-200">

                <div className="h-2 w-[95%] rounded-full bg-orange-400"></div>

              </div>

            </div>

            <div>

              <div className="mb-1 flex justify-between text-sm">
                <span className="text-white mr-3">Projects</span>
                <span className="text-white">81%</span>
              </div>

              <div className="h-2 rounded-full bg-gray-200">

                <div className="h-2 w-[81%] rounded-full bg-orange-400"></div>

              </div>

            </div>

          </div>

        </div>

      </div>



      {/* Floating Card */}

     

        
        

           

            

          

        <div className="mt-4 flex flex-wrap gap-2">

          <span className="rounded-full bg-gray-200 px-3 py-1 text-xs text-black-700">
            Docker
          </span>

          <span className="rounded-full bg-gray-200 px-3 py-1 text-xs text-black-700">
            AWS
          </span>

          <span className="rounded-full bg-gray-200 px-3 py-1 text-xs text-black-700">
            Redis
          </span>

        </div>

    



      

       
        
          

        
      </div>

  
  );
}

export default HeroDashboard;