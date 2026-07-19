import { NextRequest, NextResponse } from "next/server";

import { parsePDF } from "@/services/document/parser.server";
export const runtime = "nodejs";
export async function POST(
  request: NextRequest
) {

  try {

    const formData =
      await request.formData();

    const file =
      formData.get("file");

    if (!(file instanceof File)) {

      return NextResponse.json(

        {

          error: "No PDF uploaded."

        },

        {

          status: 400

        }

      );

    }

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const result = await parsePDF(buffer);

    return NextResponse.json(result);

  }

  catch (error) {

    console.error(error);

    return NextResponse.json(

      {

        error: "Failed to parse PDF."

      },

      {

        status: 500

      }

    );

  }

}