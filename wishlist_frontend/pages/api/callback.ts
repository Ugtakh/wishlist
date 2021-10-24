import auth0 from "./auth/[...auth0]";

export default async function callback(req: Request, res: Response) {
  try {
    await auth0.handleCallback(req, res, {});
  } catch (error) {
    console.error(error);
    res.status(error.status || 500).end(error.message);
  }
}
