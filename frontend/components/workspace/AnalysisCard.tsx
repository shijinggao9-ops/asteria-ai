"use client";

import { Button } from "@/components/ui/button";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

interface AnalysisCardProps {
  loading: boolean;
  analysisResult: string;
  onAnalyze: () => void;
}

export default function AnalysisCard({
  loading,
  analysisResult,
  onAnalyze,
}: AnalysisCardProps) {
  return (
    <Card className="glass-card card-hover h-full rounded-2xl">
      <CardHeader>
        <CardTitle className="text-xl">
          ✨ AI Analysis
        </CardTitle>

        <CardDescription>
          Generate consulting-style business insights.
        </CardDescription>
      </CardHeader>

      <CardContent>

        <Button
          className="w-full h-11 rounded-xl"
          disabled={loading}
          onClick={onAnalyze}
        >
          {loading ? "Analyzing..." : "✨ Start Analysis"}
        </Button>

        {loading && (
          <div className="mt-8 space-y-6">

            <div>
              <p className="font-medium">
                🤖 Asteria is thinking...
              </p>

              <p className="text-sm text-slate-500">
                Qwen3:8B Local Model
              </p>
            </div>

            <div className="space-y-4">

              <LoadingRow
                width="w-44"
                text="Reading Research Brief"
              />

              <LoadingRow
                width="w-56"
                text="Searching Evidence"
              />

              <LoadingRow
                width="w-60"
                text="Analyzing Industry"
              />

              <LoadingRow
                width="w-52"
                text="Building Strategy"
              />

            </div>

          </div>
        )}

        {!loading && analysisResult && (

          <div className="mt-8 rounded-xl border bg-slate-50 p-5">

            <div className="mb-4 flex items-center justify-between">

              <h3 className="font-semibold">
                Analysis Result
              </h3>

              <Button
                size="sm"
                variant="outline"
                onClick={() =>
                  navigator.clipboard.writeText(
                    analysisResult
                  )
                }
              >
                Copy
              </Button>

            </div>

            <div className="max-h-[500px] overflow-y-auto">

           <div className="prose prose-slate max-w-none">

               <ReactMarkdown remarkPlugins={[remarkGfm]}>

              {analysisResult}

               </ReactMarkdown>

      </div>

        </div>

          </div>

        )}

      </CardContent>
    </Card>
  );
}

function LoadingRow({
  width,
  text,
}: {
  width: string;
  text: string;
}) {
  return (
    <div>

      <div className="mb-2 flex items-center justify-between">

        <span className="text-sm">
          {text}
        </span>

        <span className="text-xs text-slate-400">
          Running
        </span>

      </div>

      <div className="h-2 rounded-full bg-slate-200">

        <div
          className={`h-2 rounded-full bg-slate-900 animate-pulse ${width}`}
        />

      </div>

    </div>
  );
}