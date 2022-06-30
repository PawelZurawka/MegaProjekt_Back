import { Router } from 'express';

export const firstRouter = Router()
	.get('/first',  (req, res) => {
		res.json('<h1>Test</h1>');
	})
