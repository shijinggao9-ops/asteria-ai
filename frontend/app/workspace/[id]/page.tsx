"use client";

import { useEffect, useState } from "react";
import { Material } from "@/types/material";
import { ResearchContext } from "@/types/research";
import { getMaterials } from "@/services/storage/material.service";
import FileUpload from "@/components/workspace/FileUpload";
import ResearchPlan from "@/components/workspace/ResearchPlan";
import AnalysisPanel from "@/components/workspace/AnalysisPanel";
import { runAnalysis } from "@/services/ai/analysis.service";
import AppLayout from "@/components/layout/AppLayout";
import ResearchBrief from "@/components/workspace/ResearchBrief";
import AnalysisCard from "@/components/workspace/AnalysisCard";
import AiThinking from "@/components/workspace/AiThinking";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useParams } from "next/navigation";
import {
  getProject,
  updateProject,
  saveProject,
} from "@/services/project.service";
import { useLanguage } from "@/hooks/useLanguage";
export default function Workspace() {
  const [description, setDescription] = useState("");
  const [objective, setObjective] = useState("");
  const [loading, setLoading] = useState(false);
  const [outputs, setOutputs] = useState<string[]>([]);
  const [plan, setPlan] = useState<string[]>([]);
  const [materials, setMaterials] = useState<Material[]>([]);
  const [analysisResult, setAnalysisResult] = useState("");
  const params = useParams();
  const projectId = params.id as string;
  const { t } = useLanguage();
  const researchContext: ResearchContext = {
    description,
    objective,
    plan,
    materials,
  };

  useEffect(() => {

  const project = getProject(projectId);

  if (!project) return;

  setDescription(project.description);
  setObjective(project.objective);
  setOutputs(project.outputs);
  setPlan(project.plan);
  setMaterials(project.materials);
  setAnalysisResult(project.report);

}, [projectId]);
 useEffect(() => {

  const project = getProject(projectId);

  if (!project) return;

  setDescription(project.description ?? "");

  setObjective(project.objective ?? "");

  setOutputs(project.outputs ?? []);

  setPlan(project.plan ?? []);

  setMaterials(project.materials ?? []);

  setAnalysisResult(project.report ?? "");

}, [projectId]);

  function handleOutputChange(item: string) {
    if (outputs.includes(item)) {
      setOutputs(outputs.filter((output) => output !== item));
    } else {
      setOutputs([...outputs, item]);
    }
  }

  async function handleAnalysis() {
    setLoading(true);

  try {

    const result = await runAnalysis(researchContext);

    setAnalysisResult(result);

  } catch (error) {

    console.error(error);

    alert("AI Analysis Failed");

  } finally {

    setLoading(false);

  }

}
  function saveBrief() {
    const researchBrief = {
      description,
      objective,
      outputs,
    };
    function saveBrief() {
  
  const project = getProject(projectId);

  if (!project) return;

  updateProject({

    ...project,

    description,

    objective,

    outputs,

    updatedAt: new Date().toISOString(),

  });

  alert("Research Brief Saved!");
}
  }

  return (
    <AppLayout>
      <div className="space-y-8">

    {/* 页面标题 */}
    <div>
      <h1 className="text-4xl font-bold tracking-tight">
        {t.workspace.title}
      </h1>

      <p className="muted mt-2">
        {t.workspace.description}
      </p>
    </div>

    {/* 第一行 */}
    <div className="grid gap-6 lg:grid-cols-2">

      <ResearchBrief
        description={description}
        objective={objective}
        outputs={outputs}
        setDescription={setDescription}
        setObjective={setObjective}
        handleOutputChange={handleOutputChange}
        saveBrief={saveBrief}
      />

      <AnalysisCard
    
    loading={loading}
    analysisResult={analysisResult}
    onAnalyze={handleAnalysis}
    />
{loading && (
  <AiThinking />
)}
    </div>

    {/* 第二行 */}
    <div className="grid gap-6 lg:grid-cols-2">

      <FileUpload
        materials={materials}
        setMaterials={setMaterials}
      />

      <ResearchPlan
        description={description}
        objective={objective}
        onGeneratePlan={setPlan}
      />

    </div>

  </div>

  </AppLayout>
  )}