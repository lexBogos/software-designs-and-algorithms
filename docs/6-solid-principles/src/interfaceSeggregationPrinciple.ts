interface LoggerMiddleware {
    (req: Request, res: Response, next: any): void;
    logRequest(req: Request): void;
  }

interface MiddlewareFunction {
    (req: Request, res: Response, next: any): void;
  }
  
interface RequestLogger {
    logRequest(req: Request): void;
  }  


class LoggerMiddleware implements MiddlewareFunction, RequestLogger {
    public logRequest(req: any) {
      console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`);
    }
  
    public handle(req: Request, res: Response, next: any) {
      this.logRequest(req);
      next();
    }
  }   