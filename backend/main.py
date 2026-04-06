from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from pydantic import BaseModel

app = FastAPI()


class Lead(BaseModel):
    nome: str
    email: str
    telefone: str
    tipo: str
    escopo: str
    cores: str | None = ""
    objetivo: str

# liberar frontend acessar backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # depois vamos restringir
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return {"status": "Backend rodando 🚀"}


@app.post("/lead")
async def receber_lead(lead: Lead):

    mensagem = f"""
📌 Novo Lead pelo Site

👤 Nome: {lead.nome}
📧 Email: {lead.email}
📱 Telefone: {lead.telefone}

💼 Tipo de Projeto: {lead.tipo}

📝 Escopo:
{lead.escopo}

🎨 Cores:
{lead.cores or "Não informado"}

🎯 Objetivo:
{lead.objetivo}
"""

    print(mensagem)

    return {"status": "ok"}