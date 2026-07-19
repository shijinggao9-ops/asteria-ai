"use client";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

interface ResearchBriefProps {

    description: string;

    objective: string;

    outputs: string[];

    setDescription: (value: string) => void;

    setObjective: (value: string) => void;

    handleOutputChange: (item: string) => void;

    saveBrief: () => void;

}

export default function ResearchBrief({

    description,

    objective,

    outputs,

    setDescription,

    setObjective,

    handleOutputChange,

    saveBrief

}: ResearchBriefProps) {

    const outputOptions = [

        "Industry Analysis",

        "Competitor Analysis",

        "Business Model Analysis",

        "Strategy Recommendation",

        "Presentation Structure"

    ];

    return (

        <Card className="mb-8">

            <CardHeader>

                <CardTitle>

                    📝 Research Brief

                </CardTitle>

                <CardDescription>

                    Describe your research task and expected outputs.

                </CardDescription>

            </CardHeader>

            <CardContent>

                {/* Description */}

                <div className="space-y-2">

                    <label className="font-medium">

                        Case Description

                    </label>

                    <textarea

                        className="w-full rounded-md border p-3"

                        rows={7}

                        value={description}

                        onChange={(e) =>

                            setDescription(e.target.value)

                        }

                        placeholder="Describe your business case..."

                    />

                </div>

                {/* Objective */}

                <div className="mt-6 space-y-2">

                    <label className="font-medium">

                        Research Objective

                    </label>

                    <textarea

                        className=" w-full
                                    rounded-xl
                                    border
                                    p-4
                                    text-[15px]
                                    leading-7"

                        rows={4}

                        value={objective}

                        onChange={(e) =>

                            setObjective(e.target.value)

                        }

                        placeholder="What do you want Asteria to solve?"

                    />

                </div>

                {/* Outputs */}

                <div className="mt-8">

                    <p className="mb-3 font-medium">

                        Expected Outputs

                    </p>

                    <div className="grid grid-cols-2 gap-3">

                        {

                            outputOptions.map(item => (

                                <label

                                    key={item}

                                    className="flex items-center gap-2 rounded-lg border p-3 hover:bg-slate-50"

                                >

                                    <input

                                        type="checkbox"

                                        checked={outputs.includes(item)}

                                        onChange={() =>

                                            handleOutputChange(item)

                                        }

                                    />

                                    {item}

                                </label>

                            ))

                        }

                    </div>

                </div>

                <Button

                    className="mt-8
                               h-11
                               rounded-xl
                               px-6
                               text-[15px]
                               font-medium"

                    onClick={saveBrief}

                >

                    Save Research Brief

                </Button>

            </CardContent>

        </Card>

    );

}