import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: '¡SafeYa Backend vivo y coleando! 🇪🇨' });
});

// Ruta de prueba para ver si la DB conecta
app.get('/test-db', async (req, res) => {
    const count = await prisma.company.count();
    res.json({ companiesInDB: count, status: 'DB conectada!' });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`🚀 SafeYa Backend corriendo en http://localhost:${PORT}`);
});