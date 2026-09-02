import express from 'express'
import cors from 'cors';
import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';

import { trafficAnalyticsMiddleware, trafficLogs } from './src/middlewares/analytics.js';
import authRouters from './src/routes/authRoutes.js'

const app = express()
const PORT = 3000;

// Configuração dos caminhos (__dirname não existe em ES Modules nativos)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const FRONT_END_PATH = path.join(__dirname, '..', 'front-end');

app.use(cors())
app.use(express.json());

// Cabeçalhos fundamentais de segurança
app.use((req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  next();
});

// Middleware de Telemetria de Acessos
app.use(trafficAnalyticsMiddleware);

// Servir os arquivos estáticos da pasta front-end (index.html, CSS, JS)
app.use(express.static(FRONT_END_PATH));

// --- ROTAS DA API ---
app.use('/api/auth', authRouters);

// --- ROTA DE ESTATÍSTICAS / METRICAS ---
app.get('/api/analytics/traffic', (req, res) => {
  res.status(200).json({
    totalAcessos: trafficLogs.length,
    logs: trafficLogs
  });
});

// Rota explícita para a página de perfil
// --- ROTA EXPLÍCITA PARA A PÁGINA DE PERFIL ---
app.get('/perfil', (req, res) => {
  // Caminho 1: Se perfil.html está em front-end/src/pages/perfil.html
  const path1 = path.join(FRONT_END_PATH, 'src', 'pages', 'perfil.html');
  
  // Caminho 2: Se perfil.html está em front-end/pages/perfil.html
  const path2 = path.join(FRONT_END_PATH, 'pages', 'perfil.html');
  
  // Caminho 3: Se perfil.html está direto na raiz da pasta front-end
  const path3 = path.join(FRONT_END_PATH, 'perfil.html');

  if (fs.existsSync(path1)) {
    return res.sendFile(path1);
  } else if (fs.existsSync(path2)) {
    return res.sendFile(path2);
  } else if (fs.existsSync(path3)) {
    return res.sendFile(path3);
  }

  return res.status(404).send('Arquivo perfil.html não foi encontrado na pasta front-end.');
});

// Redirecionar qualquer rota desconhecida diretamente para a tela inicial do front-end
app.get('/', (req, res) => {
  res.sendFile(path.join(FRONT_END_PATH, 'index.html'));
});

// Inicialização do servidor
app.listen(PORT, () => {
  console.log(`[PRÁTICA 006] Servidor ativo em http://localhost:${PORT}`);
});