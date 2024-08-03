import { Router } from 'express';
import { v4 as uuidv4 } from 'uuid';
import crypto from 'crypto';
import { Account, accounts, Currency } from './models/account';

const router = Router();

// Função para hash da senha
const hashPassword = (password: string): string => {
  return crypto.createHash('sha256').update(password).digest('hex');
};

// Endpoint para criar uma nova conta
router.post('/', (req, res) => {
  const { name, birthday, cpf, password, currency } = req.body;

  if (!name || !birthday || !cpf || !password || !currency) {
    return res.status(400).send({ error: 'Todos os campos são obrigatórios' });
  }

  if (!Object.values(Currency).includes(currency)) {
    return res.status(400).send({ error: 'Moeda inválida' });
  }

  const existingAccount = accounts.find(acc => acc.cpf === cpf);
  if (existingAccount) {
    return res.status(400).send({ error: 'CPF já cadastrado' });
  }

  const newAccount: Account = {
    id: uuidv4(),
    name,
    birthday,
    cpf,
    password: hashPassword(password),
    balance: 0,
    currency
  };

  accounts.push(newAccount);
  res.status(201).send(newAccount);
});

// Endpoint para obter uma conta específica
router.get('/:id', (req, res) => {
  const account = accounts.find(acc => acc.id === req.params.id);
  if (!account) {
    return res.status(404).send({ error: 'Conta não encontrada' });
  }
  res.send(account);
});

// Endpoint para listar todas as contas
router.get('/', (req, res) => {
  res.send(accounts);
});

// Endpoint para atualizar uma conta específica com o ID
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { name, birthday, cpf, password, balance, currency } = req.body;

  const accountIndex = accounts.findIndex(acc => acc.id === id);
  if (accountIndex === -1) {
    return res.status(404).send({ error: 'Conta não encontrada' });
  }

  if (name) accounts[accountIndex].name = name;
  if (birthday) accounts[accountIndex].birthday = birthday;
  if (cpf) accounts[accountIndex].cpf = cpf;
  if (password) accounts[accountIndex].password = hashPassword(password);
  if (balance !== undefined) accounts[accountIndex].balance = balance;
  if (currency) accounts[accountIndex].currency = currency;

  res.send(accounts[accountIndex]);
});

// Endpoint para excluir uma conta específica usando o ID da conta criada
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const accountIndex = accounts.findIndex(acc => acc.id === id);
  if (accountIndex === -1) {
    return res.status(404).send({ error: 'Conta não encontrada' });
  }

  accounts.splice(accountIndex, 1);
  res.send({ message: 'Conta excluída com sucesso' });
});

export default router;
