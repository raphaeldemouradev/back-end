import express from 'express';
import path from 'path';
import cors from 'cors';
import { fileURLToPath } from 'url';
import { prisma } from './lib/prisma.js';
import jwt from 'jsonwebtoken';

const app = express();
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
app.use(express.static(path.join(__dirname, 'public')))

///// Entradas /////
// Config Cadastro
app.post('/cadastro', async (req, res) => {
    // Gets Formulario
    const { name, email, pass } = req.body;
   
    try {
        // Email existente
        const usuarioExiste = await prisma.user.findUnique({ where: { email } });
        if (usuarioExiste) {
            return res.status(400).json({ error: "Este e-mail já está cadastrado!" });
        }

        // Create banco
        const novoUsuario = await prisma.user.create({
            data: { 
                name: name, 
                email: email, 
                pass: pass 
            }
        })
        console.log(novoUsuario)
        
        return res.status(201).json({ message: "Usuário criado com sucesso!" });

    } catch (error) {
        console.error("Erro de cadastro", error)
        res.status(500).send("Erro no servidor ao salvar usuario")
    }

})

// Config Login 
app.post('/login', async (req, res) => {
    const { email, pass } = req.body;
    console.log("Dados chegaram")
    console.log(email, pass)

    if (!email || !pass) { // Segurança de requere
        return res.status(400).json({ error: "Email e senha são obrigatorios!"})
    }

    try {
        const user = await prisma.user.findUnique({
            where: {email: email}
        })

        if(user && user.pass === pass) {
            const token = jwt.sign(
                {userId: user.id},
                'YOUR_KEY_SECRET',
                {expiresIn: '1h'},
            )

            return res.status(200).json({
                success: true,
                token: token,
                userName: user.name,
                message: "Login realizado com sucesso!",
            })
        } else {
            res.status(401).json({ error: "Email ou Senha incorreto." })
        }
    } catch (error) {
        res.status(500).json({ error: "Erro no servidor" })
    }
})

///// Controles /////
// API call - insert
app.get('/api/users', async (req, res) => {
    const token = req.headers['authorization'];
    if (!token) return res.status(401).send("Acesso negado")

        try {
            const verificado = jwt.verify(token, 'YOUR_KEY_SECRET')

            const usuario = await prisma.user.findUnique({
                where: {id: verificado.userId}
            });

            if (!usuario) {
                return res.status(404).send("Usuário não encontrado");
            }

            res.json(usuario)
        } catch (error) {
            res.status(403).send("Token invalido ou Expirado")
        }
})

// Edit - Atualiza
app.put(`/api/users/:id`, async (req, res) => {
    let { id } = req.params;
    const { name, email } = req.body;

    try {
        const userUp = await prisma.user.update({
            where: {
                id: parseInt(id),
            },
            data: {
                ...(name && {name}),
                ...(email && {email}),
            },
        });

        res.json(userUp)
        console.log(userUp, "Atualizado")

    } catch (error) {
        res.status(400).json({error: "Erro ao Atualizar"})
    }
})

// Deleta - delete
app.delete(`/api/users/:id`, async (req, res) => {
    const { id } = req.params;
    try {
        const userDl = await prisma.user.delete({
            where: { id: parseInt(id) },
        });

        console.log(userDl, "Deletado")
        res.status(200).json({ message: "Usuário deletado com sucesso" });

    } catch (error) {
        res.status(500).json({error: "Erro ao Deletar"})
    }
})

///// ROTAS ////
// Login
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'))
})

// Cadastro
app.get('/cadastro', (req, res) => {
    res.sendFile(path.join(__dirname, '/cadastro.html'))
})

// Config Home
app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, '/home.html'))
})

// Config Perfil
app.get('/perfil', (req, res) => {
    res.sendFile(path.join(__dirname, '/perfil.html'))
})

app.listen(3000, () => {console.log("Servidor On")})