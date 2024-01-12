import express from "express";
import cors from "cors";

app.use(express.json());

app.use(cors());

app.get("/", function(req, res){
    res.send("Teste");
})