import auth0 from "./auth/[...auth0]";

export default async function login(req: Request, res: Response) {
  try {
    await auth0.handleLogin(req, res, {});
  } catch (error) {
    console.error(error);
    res.status(error.status || 500).end(error.message);
  }
}
