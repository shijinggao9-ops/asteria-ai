import { NextRequest, NextResponse } from "next/server";

import { parsePDF } from "@/services/document/parser.server";

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

    const result =
      await parsePDF(file);

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