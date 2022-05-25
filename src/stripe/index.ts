
import { NextFunction, Request, Response }  from 'express';

const KEY = 'sk_test_51KrWBdIYAeGEmxb1I7JjE0sXTAg6XvGoEBYN1SmzhnFJGnRf5U5fuBdDxra8MxSKsRch7hdV3TASpWmsYQbVF6Td00Gbelkwfx';
const stripe = require("stripe")(KEY);

export const createPayment = async (req: Request, res: Response, next: NextFunction) => {
    stripe.charges.create(
        {
          source: req.body.tokenId,
          amount: req.body.amount,
          currency: "usd",
        },
        (stripeErr: any, stripeRes: any) => {
          if (stripeErr) {
            res.status(500).json(stripeErr);
          } else {
            res.status(200).json(stripeRes);
          }
        }
      );
};


