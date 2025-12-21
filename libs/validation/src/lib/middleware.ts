import { Request, Response, NextFunction } from 'express';
import { ZodSchema, ZodError } from 'zod';
import { HTTP_STATUS, ERROR_MESSAGES } from '@workspace/shared/constants';

/**
 * Middleware to validate request data against a Zod schema
 * @param schema - The Zod schema to validate against
 * @param source - Where to get data from ('body', 'query', 'params')
 */
export function validate(schema: ZodSchema, source: 'body' | 'query' | 'params' = 'body') {
  return async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const data = req[source];
      await schema.parseAsync(data);
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(HTTP_STATUS.UNPROCESSABLE_ENTITY).json({
          success: false,
          error: ERROR_MESSAGES.VALIDATION_ERROR,
          details: error.issues.map((err) => ({
            field: err.path.join('.'),
            message: err.message,
          })),
        });
        return;
      }

      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({
        success: false,
        error: ERROR_MESSAGES.INTERNAL_ERROR,
      });
    }
  };
}

/**
 * Validate data against a Zod schema (for use in service layer)
 * @param schema - The Zod schema to validate against
 * @param data - The data to validate
 * @returns Validated data or throws ZodError
 */
export async function validateData<T>(schema: ZodSchema, data: unknown): Promise<T> {
  return await schema.parseAsync(data) as T;
}

/**
 * Safe parse data against a Zod schema (doesn't throw)
 * @param schema - The Zod schema to validate against
 * @param data - The data to validate
 * @returns Object with success flag and either data or error
 */
export function safeValidateData<T>(
  schema: ZodSchema,
  data: unknown
): { success: true; data: T } | { success: false; error: ZodError } {
  const result = schema.safeParse(data);
  
  if (result.success) {
    return { success: true, data: result.data as T };
  }
  
  return { success: false, error: result.error };
}
