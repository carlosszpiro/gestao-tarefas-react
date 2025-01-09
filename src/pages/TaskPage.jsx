import { useNavigate, useSearchParams } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import Title from "../components/Title";

function TaskPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const title = searchParams.get("title");
  const description = searchParams.get("description");

  return (
    <div className="w-screen  h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        
        <div className="flex items-center justify-center relative">
          <button
            onClick={() => navigate(-1)}
            className="absolute top-0 left-0 bg-slate-400 text-white p-2 rounded-md"
          >
            <ChevronLeft />
          </button>

          <Title>
            Detalhes da Tarefa
          </Title>
        </div>

        <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
          <h2 className="text-slate-700 text-left text-xl font-bold">
            {title}
          </h2>
          <p className="text-slate-600">{description}</p>
        </div>

        <p className="text-xs text-slate-100 text-center">
          Criado por Carlos Szpiro
        </p>
      </div>
    </div>
  );
}

export default TaskPage;
