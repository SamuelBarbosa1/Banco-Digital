import { Router } from 'express';
import { accounts } from './models/account';

const router = Router();

router.post('/', (req, res) => {
  const { from, to, amount } = req.body;

  if (!from || !to || typeof amount !== 'number' || amount <= 0) {
    return res.status(400).send({ error: 'Dados inválidos' });
  }

  const fromAccount = accounts.find(acc => acc.id === from);
  const toAccount = accounts.find(acc => acc.id === to);

  if (!fromAccount || !toAccount) {
    return res.status(404).send({ error: 'Conta não encontrada' });
  }

  if (fromAccount.balance < amount) {
    return res.status(400).send({ error: 'Saldo insuficiente' });
  }

  fromAccount.balance -= amount;
  toAccount.balance += amount;

  res.send({ message: 'Transferência realizada com sucesso', fromAccount, toAccount });
});

export default router;
