import express from 'express'
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { trafficAnalyticsMiddleware, trafficLogs } from './src/middlewares/analytics.js';

const app = express()
const PORT = 3000;

// Configuração dos caminhos (__dirname não existe em ES Modules nativos)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const FRONT_END_PATH = path.join(__dirname, '..', 'front-end');

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

// --- ROTA DE ESTATÍSTICAS / METRICAS ---
app.get('/api/analytics/traffic', (req, res) => {
  res.status(200).json({
    totalAcessos: trafficLogs.length,
    logs: trafficLogs
  });
});

// Redirecionar qualquer rota desconhecida diretamente para a tela inicial do front-end
app.get('/', (req, res) => {
  res.sendFile(path.join(FRONT_END_PATH, 'index.html'));
});

// Inicialização do servidor
app.listen(PORT, () => {
  console.log(`[PRÁTICA 006] Servidor ativo em http://localhost:${PORT}`);
});