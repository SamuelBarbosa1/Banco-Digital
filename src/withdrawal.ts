import { Router } from 'express';
import { accounts } from './models/account';

const router = Router();

router.post('/', (req, res) => {
  const { accountId, amount } = req.body;

  if (!accountId || typeof amount !== 'number' || amount <= 0) {
    return res.status(400).send({ error: 'Dados inválidos' });
  }

  const account = accounts.find(acc => acc.id === accountId);

  if (!account) {
    return res.status(404).send({ error: 'Conta não encontrada' });
  }

  if (account.balance < amount) {
    return res.status(400).send({ error: 'Saldo insuficiente' });
  }

  account.balance -= amount;

  res.send({ message: 'Saque realizado com sucesso', balance: account.balance });
});

export default router;
