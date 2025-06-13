import { ConnectDB } from "@/lib/config/db";
import TodoModel from "@/lib/models/TodoModel";
import { NextResponse } from "next/server";

const LoadDB = async ()=>{
    await ConnectDB();
}

LoadDB();
export async function GET(request) {
    const todos = await TodoModel.find({});
    return NextResponse.json({
         todos: todos,
    });
}
export async function POST(request) {
    const { title, description } = await request.json();
    await TodoModel.create({
        title,
        description,
    });

    return NextResponse.json({
        message: "Todo added successfully",
    });
}

export async function DELETE(request) {
    const mongoId = request.nextUrl.searchParams.get("id");
    await TodoModel.findByIdAndDelete(mongoId);
    return NextResponse.json({
        message: "Todo deleted successfully",
    });
}

export async function PUT(request) {
   const mongoId = request.nextUrl.searchParams.get("id");
   await TodoModel.findByIdAndUpdate(mongoId, {
        isComleted: true,
    }); 
    return NextResponse.json({
          message: "Todo updated successfully",
     });
}