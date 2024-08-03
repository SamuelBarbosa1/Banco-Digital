import express from 'express';
import bodyParser from 'body-parser';
import accountRouter from './account';
import transactionRouter from './transaction';
import withdrawalRouter from './withdrawal';
import transferRouter from './transfer';
import paymentRouter from './payment';
import savingRouter from './saving';

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use('/accounts', accountRouter);
app.use('/transactions', transactionRouter);
app.use('/withdrawals', withdrawalRouter);
app.use('/transfers', transferRouter);
app.use('/payments', paymentRouter);
app.use('/savings', savingRouter);

app.listen(port, () => {
  console.log(`Banco digital rodando na porta ${port}`);
});
